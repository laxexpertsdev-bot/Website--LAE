/**
 * Normalise les logos partenaires pour le PartnerCarousel.
 *
 * Problème résolu : les fichiers sources ont des ratios (0.78 → 5.5) et des marges
 * internes très variables — aucune règle CSS ne peut leur donner une présence
 * optique équivalente. Ce script égalise les assets eux-mêmes :
 *
 *   1. rasterise les SVG, détoure les bordures transparentes/quasi-blanches (trim) ;
 *   2. redimensionne chaque mark à SURFACE VISUELLE ÉGALE (h = √(A/r), clampé) ;
 *   3. recompose centré sur un canvas transparent uniforme 320×120
 *      (= 2.5× la boîte d'affichage 128×48 du carrousel) ;
 *   4. écrit public/partners/<slug>.webp (lossless, alpha).
 *
 * Sources : scripts/partners-src/ (source of truth — y déposer tout nouveau logo,
 * ajouter une entrée LOGOS ci-dessous, relancer, puis référencer dans
 * src/data/partners.ts).
 *
 * Usage :
 *   node scripts/normalize-partner-logos.mjs [--sheet <chemin/contact-sheet.png>]
 *
 * --sheet génère une planche-contact (grille des 16 canvas) pour contrôle visuel.
 * `tune` (défaut 1) : correction optique fine par logo, appliquée à la surface cible
 * (ex. 1.1 = +10 % de présence pour un mark visuellement léger).
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC_DIR = path.join(ROOT, 'scripts', 'partners-src');
const OUT_DIR = path.join(ROOT, 'public', 'partners');

// Canvas de sortie : même ratio que la boîte d'affichage (w-32 h-12 → 128×48), @2.5x.
const CANVAS_W = 320;
const CANVAS_H = 120;
// Normalisation à surface égale : un logo carré rend BASE×BASE px sur le canvas.
const BASE = 100;
const H_MIN = 55;
const H_MAX = 110;
const W_MAX = 300;
const TRIM_THRESHOLD = 12;
const SVG_DENSITY = 600;

/**
 * NB : le mapping images_(1..4).png a été vérifié visuellement — l'ancien
 * src/data/partners.ts les attribuait à l'envers (images_(1)=Cegema,
 * images_(2)=QBE, images_(3)=AMI 3F, images_(4)=Apicil).
 *
 * `recolorWhiteText` : recolore les pixels quasi-blancs situés à droite de
 * `fromX` (fraction de la largeur détourée) — pour les wordmarks blancs
 * invisibles sur fond blanc (cas Assurmax), sans toucher l'icône à gauche.
 *
 * @type {{ slug: string; src: string; tune?: number;
 *          recolorWhiteText?: { fromX: number; color: [number, number, number] } }[]}
 */
const LOGOS = [
  { slug: 'acheel', src: 'logo_de_la_startup_acheel.png' },
  { slug: 'april', src: 'images.png' },
  { slug: 'assurema', src: 'images.jfif' },
  { slug: 'kereis', src: 'kereis-france-logo-rvb-unboxed-860x484.png.webp' },
  { slug: 'cegema', src: 'images_(1).png' },
  { slug: 'qbe', src: 'images_(2).png' },
  { slug: 'ami-3f', src: 'images_(3).png' },
  { slug: 'apicil', src: 'images_(4).png' },
  { slug: 'abeille-vie', src: 'abeille-vie.png' },
  { slug: 'veralti', src: 'veralti.png' },
  { slug: 'assurmax', src: 'assurmax.png', recolorWhiteText: { fromX: 0.22, color: [30, 41, 59] } },
  { slug: 'orus', src: 'orus.svg' },
  { slug: 'axece', src: 'axece.png' },
  { slug: 'welfaire', src: 'welfaire.png' },
  { slug: 'utwin', src: 'utwin.svg' },
  { slug: 'alptis', src: 'alptis.png' },
];

/** Dimensions cibles à surface égale, clampées au canvas. */
function targetSize(trimmedW, trimmedH, tune = 1) {
  const ratio = trimmedW / trimmedH;
  const area = BASE * BASE * tune * tune;
  let h = Math.sqrt(area / ratio);
  h = Math.min(Math.max(h, H_MIN), H_MAX);
  let w = h * ratio;
  if (w > W_MAX) {
    w = W_MAX;
    h = w / ratio;
  }
  return { w: Math.round(w), h: Math.round(h) };
}

/** Recolore les pixels quasi-blancs à droite de fromX (wordmark blanc → couleur lisible). */
async function recolorWhite(pngBuffer, { fromX, color }) {
  const { data, info } = await sharp(pngBuffer).raw().toBuffer({ resolveWithObject: true });
  const xStart = Math.round(info.width * fromX);
  for (let y = 0; y < info.height; y++) {
    for (let x = xStart; x < info.width; x++) {
      const i = (y * info.width + x) * info.channels;
      if (data[i + 3] > 0 && data[i] > 200 && data[i + 1] > 200 && data[i + 2] > 200) {
        data[i] = color[0];
        data[i + 1] = color[1];
        data[i + 2] = color[2];
      }
    }
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .png()
    .toBuffer();
}

async function normalizeOne({ slug, src, tune, recolorWhiteText }) {
  const srcPath = path.join(SRC_DIR, src);
  const input = src.endsWith('.svg') ? sharp(srcPath, { density: SVG_DENSITY }) : sharp(srcPath);

  // Détourage des marges (transparentes ou quasi-blanches selon le pixel d'angle).
  let { data: trimmed, info } = await input
    .ensureAlpha()
    .trim({ threshold: TRIM_THRESHOLD })
    .png()
    .toBuffer({ resolveWithObject: true });

  if (recolorWhiteText) {
    trimmed = await recolorWhite(trimmed, recolorWhiteText);
  }

  const { w, h } = targetSize(info.width, info.height, tune);
  const resized = await sharp(trimmed).resize(w, h, { fit: 'inside' }).png().toBuffer();

  const outPath = path.join(OUT_DIR, `${slug}.webp`);
  await sharp({
    create: { width: CANVAS_W, height: CANVAS_H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: resized, gravity: 'centre' }])
    .webp({ lossless: true })
    .toFile(outPath);

  return { slug, src, trimmed: `${info.width}×${info.height}`, mark: `${w}×${h}`, tune: tune ?? 1 };
}

async function contactSheet(sheetPath) {
  const COLS = 4;
  const PAD = 24;
  const rows = Math.ceil(LOGOS.length / COLS);
  const sheetW = PAD + COLS * (CANVAS_W + PAD);
  const sheetH = PAD + rows * (CANVAS_H + PAD);

  const composites = [];
  for (let i = 0; i < LOGOS.length; i++) {
    const left = PAD + (i % COLS) * (CANVAS_W + PAD);
    const top = PAD + Math.floor(i / COLS) * (CANVAS_H + PAD);
    // Cellule blanche = fond réel du carrousel, sur fond gris pour visualiser la boîte.
    const cell = await sharp({
      create: { width: CANVAS_W, height: CANVAS_H, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
    })
      .png()
      .toBuffer();
    composites.push({ input: cell, left, top });
    composites.push({ input: path.join(OUT_DIR, `${LOGOS[i].slug}.webp`), left, top });
  }

  await sharp({
    create: { width: sheetW, height: sheetH, channels: 4, background: { r: 203, g: 213, b: 225, alpha: 1 } },
  })
    .composite(composites)
    .png()
    .toFile(sheetPath);
}

const results = [];
for (const logo of LOGOS) {
  results.push(await normalizeOne(logo));
}
console.table(results);

const sheetIdx = process.argv.indexOf('--sheet');
if (sheetIdx !== -1 && process.argv[sheetIdx + 1]) {
  const sheetPath = path.resolve(process.argv[sheetIdx + 1]);
  await mkdir(path.dirname(sheetPath), { recursive: true });
  await contactSheet(sheetPath);
  console.log(`Planche-contact : ${sheetPath}`);
}
console.log(`${results.length} logos normalisés → ${OUT_DIR}`);
