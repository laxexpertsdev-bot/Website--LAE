/**
 * Villes ciblées par les campagnes Google Ads (zones Alpes / Côte d'Azur et
 * Nouvelle-Aquitaine). Dataset indépendant du produit : réutilisable pour décliner
 * n'importe quel produit × ville via buildProductRegion (voir
 * ../product-regions/mutuelle-sante-cities.ts pour l'exemple mutuelle santé) ou pour
 * générer un hub régional générique via buildCityRegion (voir ../regions/_buildCity.ts).
 *
 * ➕ Ajouter une ville : une entrée ici suffit ; toutes les pages produit × ville
 *    qui mappent `campaignCities` la prennent en compte automatiquement.
 *
 * NB grammaire : `dept` et `area` portent leur article (« les Alpes-Maritimes »,
 * « la Côte d'Azur ») pour se glisser après « dans … » / « qui connaît … » / « pour … »
 * sans contraction fautive. Toutes ces villes se construisent avec la préposition
 * « à » (à Nice, à Pau, à La Rochelle…).
 */
export interface GeoCity {
  /** Segment d'URL, sans slash ni accent (ex. 'nice', 'la-rochelle'). */
  slug: string;
  /** Libellé humain (ex. 'Nice', 'La Rochelle'). */
  name: string;
  /** Département avec son article (ex. 'les Alpes-Maritimes'). Utilisé dans le hero. */
  dept: string;
  /** Numéro de département (ex. '06'). Utilisé dans le title SEO et le hero. */
  deptNum: string;
  /** Zone de campagne avec son article (ex. "la Côte d'Azur", 'le Pays Basque'). */
  area: string;
  /** Zone géographique large : détermine l'image hero partagée (voir ./images.ts). */
  zone: 'cote-azur-alpes' | 'nouvelle-aquitaine';
  /** Phrase de contexte local UNIQUE à la ville (tourisme, flux auto, marché immobilier…). */
  localFlavor: string;
}

export const campaignCities: GeoCity[] = [
  // — Alpes / Côte d'Azur —
  {
    slug: 'nice',
    name: 'Nice',
    dept: 'les Alpes-Maritimes',
    deptNum: '06',
    area: "la Côte d'Azur",
    zone: 'cote-azur-alpes',
    localFlavor:
      "Nice attire une forte affluence touristique estivale et un flux automobile dense sur la Promenade des Anglais, avec un parc de deux-roues important pour circuler dans une ville dense.",
  },
  {
    slug: 'cannes',
    name: 'Cannes',
    dept: 'les Alpes-Maritimes',
    deptNum: '06',
    area: "la Côte d'Azur",
    zone: 'cote-azur-alpes',
    localFlavor:
      "Cannes voit sa population et sa valeur immobilière bondir lors du Festival et des grands congrès, avec de nombreuses résidences secondaires et un port de plaisance à assurer une bonne partie de l'année.",
  },
  {
    slug: 'antibes',
    name: 'Antibes',
    dept: 'les Alpes-Maritimes',
    deptNum: '06',
    area: "la Côte d'Azur",
    zone: 'cote-azur-alpes',
    localFlavor:
      "Antibes abrite l'un des plus grands ports de plaisance d'Europe et une forte densité de villas et de résidences saisonnières, ce qui pèse sur les besoins en assurance habitation et bateau.",
  },
  {
    slug: 'menton',
    name: 'Menton',
    dept: 'les Alpes-Maritimes',
    deptNum: '06',
    area: "la Côte d'Azur",
    zone: 'cote-azur-alpes',
    localFlavor:
      "Ville frontalière avec l'Italie, Menton compte une population de retraités importante et un climat particulièrement doux qui favorise les jardins et les résidences avec extérieurs, sensibles au risque climatique.",
  },
  {
    slug: 'grasse',
    name: 'Grasse',
    dept: 'les Alpes-Maritimes',
    deptNum: '06',
    area: 'le pays de Grasse',
    zone: 'cote-azur-alpes',
    localFlavor:
      "Capitale mondiale du parfum, Grasse concentre de nombreuses TPE et ateliers artisanaux en zone périurbaine vallonnée, un terrain propice aux besoins en assurance professionnelle et en RC pro.",
  },
  {
    slug: 'toulon',
    name: 'Toulon',
    dept: 'le Var',
    deptNum: '83',
    area: 'le Var',
    zone: 'cote-azur-alpes',
    localFlavor:
      "Toulon vit au rythme de sa base navale et de son port militaire, avec une importante population de militaires et de familles mutées régulièrement, générant des besoins d'assurance auto et habitation ponctuels.",
  },
  {
    slug: 'grenoble',
    name: 'Grenoble',
    dept: "l'Isère",
    deptNum: '38',
    area: 'les Alpes',
    zone: 'cote-azur-alpes',
    localFlavor:
      "Grenoble conjugue un tissu étudiant et technologique dense (micro-électronique, recherche) avec un environnement montagnard qui expose davantage aux sinistres liés à la neige et aux intempéries.",
  },
  {
    slug: 'annecy',
    name: 'Annecy',
    dept: 'la Haute-Savoie',
    deptNum: '74',
    area: 'les Alpes',
    zone: 'cote-azur-alpes',
    localFlavor:
      "Annecy et son lac attirent un tourisme quatre saisons (baignade l'été, sports d'hiver à proximité) qui fait grimper la valeur des biens en bord de lac et la fréquentation touristique automobile.",
  },
  {
    slug: 'chambery',
    name: 'Chambéry',
    dept: 'la Savoie',
    deptNum: '73',
    area: 'les Alpes',
    zone: 'cote-azur-alpes',
    localFlavor:
      "Chambéry, carrefour historique entre la France et l'Italie, combine un centre-ville universitaire à un bassin résidentiel étalé sur les massifs environnants, avec des trajets domicile-travail plus longs.",
  },
  // — Nouvelle-Aquitaine —
  {
    slug: 'bordeaux',
    name: 'Bordeaux',
    dept: 'la Gironde',
    deptNum: '33',
    area: 'la Nouvelle-Aquitaine',
    zone: 'nouvelle-aquitaine',
    localFlavor:
      "Bordeaux conjugue un vignoble mondialement reconnu, une façade fluviale et un marché locatif étudiant tendu, avec un parc de logements anciens en hyper-centre qui appelle une vigilance particulière sur l'assurance habitation.",
  },
  {
    slug: 'bayonne',
    name: 'Bayonne',
    dept: 'les Pyrénées-Atlantiques',
    deptNum: '64',
    area: 'le Pays Basque',
    zone: 'nouvelle-aquitaine',
    localFlavor:
      "Bayonne, porte d'entrée du Pays Basque, connaît une forte affluence lors des fêtes et un marché immobilier tendu par l'attractivité du littoral basque, ce qui pousse les prix de l'habitation à la hausse.",
  },
  {
    slug: 'biarritz',
    name: 'Biarritz',
    dept: 'les Pyrénées-Atlantiques',
    deptNum: '64',
    area: 'le Pays Basque',
    zone: 'nouvelle-aquitaine',
    localFlavor:
      "Station balnéaire prisée des surfeurs et d'une clientèle aisée, Biarritz concentre villas de prestige et résidences secondaires en front de mer, particulièrement exposées aux aléas climatiques atlantiques.",
  },
  {
    slug: 'pau',
    name: 'Pau',
    dept: 'les Pyrénées-Atlantiques',
    deptNum: '64',
    area: 'le Béarn',
    zone: 'nouvelle-aquitaine',
    localFlavor:
      "Pau bénéficie d'un tissu industriel actif autour de l'aéronautique et de l'énergie, avec une proximité immédiate des Pyrénées qui favorise les trajets automobiles en montagne une bonne partie de l'année.",
  },
  {
    slug: 'limoges',
    name: 'Limoges',
    dept: 'la Haute-Vienne',
    deptNum: '87',
    area: 'le Limousin',
    zone: 'nouvelle-aquitaine',
    localFlavor:
      "Ville historique de la porcelaine, Limoges présente un habitat pavillonnaire ancien et étendu, avec des trajets essentiellement en voiture individuelle faute d'un réseau de transport aussi dense qu'en métropole.",
  },
  {
    slug: 'poitiers',
    name: 'Poitiers',
    dept: 'la Vienne',
    deptNum: '86',
    area: 'la Nouvelle-Aquitaine',
    zone: 'nouvelle-aquitaine',
    localFlavor:
      "Poitiers combine une importante population étudiante et la proximité du Futuroscope, générateur d'un flux touristique et automobile saisonnier notable sur les axes qui desservent l'agglomération.",
  },
  {
    slug: 'la-rochelle',
    name: 'La Rochelle',
    dept: 'la Charente-Maritime',
    deptNum: '17',
    area: 'la Nouvelle-Aquitaine',
    zone: 'nouvelle-aquitaine',
    localFlavor:
      "Port de plaisance historique tourné vers l'océan Atlantique, La Rochelle connaît une forte saisonnalité touristique et une exposition marquée aux tempêtes littorales, à prendre en compte pour l'habitation et le bateau.",
  },
];
