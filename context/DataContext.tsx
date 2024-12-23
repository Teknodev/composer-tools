import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DataContextType {
  composerToolsLanguages: string[];
  composerToolsCurrentLanguage: string | null;
  addComposerToolsLanguage: (languageCode: string) => void;
  removeComposerToolsLanguage: (languageCode: string) => void;
  setComposerToolsCurrentLanguage: (languageCode: string) => void;
  setComposerToolsLanguages: (languages: string[]) => void;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataContextProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [composerToolsLanguages, setComposerToolsLanguages] = useState<string[]>([]);
  const [composerToolsCurrentLanguage, setComposerToolsCurrentLanguage] = useState<string | null>(null);

  const addComposerToolsLanguage = (languageCode: string) => {
    if (!composerToolsLanguages.includes(languageCode)) {
      setComposerToolsLanguages(prev => [...prev, languageCode]);

      if (!composerToolsCurrentLanguage) {
        setComposerToolsCurrentLanguage(languageCode);
      }
    }
  };

  const removeComposerToolsLanguage = (languageCode: string) => {
    setComposerToolsLanguages(prev => prev.filter(lang => lang !== languageCode));

    if (composerToolsCurrentLanguage === languageCode && composerToolsLanguages.length > 1) {
      const newCurrent = composerToolsLanguages.find(lang => lang !== languageCode);
      if (newCurrent) {
        setComposerToolsCurrentLanguage(newCurrent);
      }
    }
  };

  const setLanguageAsCurrent = (languageCode: string) => {
    setComposerToolsCurrentLanguage(languageCode);
  };

  const value = {
    composerToolsLanguages,
    composerToolsCurrentLanguage,
    addComposerToolsLanguage,
    removeComposerToolsLanguage,
    setComposerToolsCurrentLanguage: setLanguageAsCurrent,
    setComposerToolsLanguages
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useComposerToolsData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
