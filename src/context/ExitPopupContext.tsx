import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ExitPopupContextValue {
  suppressed: boolean;
  setSuppressed: (v: boolean) => void;
}

const ExitPopupContext = createContext<ExitPopupContextValue | null>(null);

/**
 * Fournit un signal global "popup d'exit-intent suspendu". Les pages produit
 * (voir ProductPageLayout) s'y abonnent via useSuppressExitPopup() pour désactiver
 * le popup pendant qu'elles sont montées, sans qu'App.tsx ait besoin de connaître
 * la liste des routes concernées.
 */
export const ExitPopupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [suppressed, setSuppressed] = useState(false);
  return (
    <ExitPopupContext.Provider value={{ suppressed, setSuppressed }}>
      {children}
    </ExitPopupContext.Provider>
  );
};

function useExitPopupContext() {
  const ctx = useContext(ExitPopupContext);
  if (!ctx) throw new Error('useExitPopupContext must be used within ExitPopupProvider');
  return ctx;
}

/** À appeler depuis une page pour désactiver le popup d'exit-intent tant qu'elle est montée. */
export function useSuppressExitPopup() {
  const { setSuppressed } = useExitPopupContext();
  useEffect(() => {
    setSuppressed(true);
    return () => setSuppressed(false);
  }, [setSuppressed]);
}

/** Réservé au contrôleur du popup dans App.tsx. */
export function useExitPopupSuppressed() {
  return useExitPopupContext().suppressed;
}
