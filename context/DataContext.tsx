import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ComposerToolsData {
  composerToolsLanguages: Array<{code: string; name: string}>;
  composerToolsCurrentLanguage: {code: string; name: string};
  isProcessable: boolean;
  isLocalizationChange: boolean;
  setComposerToolsCurrentLanguage: (lang: {code: string; name: string}) => void;
  setComposerToolsLanguages: (languages: Array<{code: string; name: string}>) => void;
  addComposerToolsLanguage: (languageCode: string) => void;
  removeComposerToolsLanguage: (languageCode: string) => void;
  setIsProcessable: (isProcessable: boolean) => void;
  setIsLocalizationChange: (isLocalizationChange: boolean) => void;
}

export const DataContext = createContext<ComposerToolsData | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataContextProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [composerToolsLanguages, setComposerToolsLanguages] = useState<Array<{code: string; name: string}>>([]);
  const [composerToolsCurrentLanguage, setComposerToolsCurrentLanguage] = useState<{code: string; name: string}>({code: "", name: ""});
  const [isProcessable, setIsProcessable] = useState(false);
  const [isLocalizationChange, setIsLocalizationChange] = useState(false);

  const addComposerToolsLanguage = (languageCode: string) => {
    if (!composerToolsLanguages.some(lang => lang.code === languageCode)) {
      setComposerToolsLanguages(prev => [...prev, {code: languageCode, name: ""}]);

      if (!composerToolsCurrentLanguage) {
        setComposerToolsCurrentLanguage({code: languageCode, name: ""});
      }
    }
  };

  const removeComposerToolsLanguage = (languageCode: string) => {
    setComposerToolsLanguages(prev => prev.filter(lang => lang.code !== languageCode));

    if (composerToolsCurrentLanguage.code === languageCode && composerToolsLanguages.length > 1) {
      const newCurrent = composerToolsLanguages.find(lang => lang.code !== languageCode);
      if (newCurrent) {
        setComposerToolsCurrentLanguage(newCurrent);
      }
    }
  };

  const setLanguageAsCurrent = (language: {code: string; name: string}) => {
    setComposerToolsCurrentLanguage(language);
  };

  const value = {
    composerToolsLanguages,
    composerToolsCurrentLanguage,
    isProcessable,
    isLocalizationChange,
    addComposerToolsLanguage,
    removeComposerToolsLanguage,
    setComposerToolsCurrentLanguage: setLanguageAsCurrent,
    setComposerToolsLanguages,
    setIsProcessable,
    setIsLocalizationChange,
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
