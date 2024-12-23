import React, { useState } from "react";
import { Language } from "@mui/icons-material";
import DropDown, {
  DropDownItem,
} from "../../composer-base-components/ui/Dropdown";
import { LANGUAGES } from "../../../classes/Localization/languages";
import styles from "./language.module.scss";
import { useComposerToolsData } from "../../context/DataContext";

interface ComposerLanguageProps{
  className?: string,
  labelClassName?: string,
  itemClassName?: string,
  icon?: React.ReactNode;
}

const ComposerLanguage = ({className, labelClassName, itemClassName, icon = <Language/>}: ComposerLanguageProps) => {
  const {composerToolsLanguages, composerToolsCurrentLanguage, setComposerToolsCurrentLanguage} = useComposerToolsData();
  const [language, setLanguage] = useState<string>(composerToolsCurrentLanguage || "en");

  const languageType = composerToolsLanguages.reduce((acc, langCode) => {
    const language = LANGUAGES.find(lang => lang.code === langCode);
    if (language) {
      acc[langCode] = language.name;
    }
    return acc;
  }, {} as Record<string, string>);

  const handleLanguageChange = async (langCode: string) => {
    setLanguage(langCode);
    setComposerToolsCurrentLanguage(langCode);
  }

  return (
    <div>
      <DropDown
        disabled={false}
        buttonClassName={`${styles["language"]} ${className}`}
        buttonLabel={languageType[language]}
        labelClassName={labelClassName}
        icon={icon}
      >
        {Object.entries(languageType).map(([langCode, langName]) => (
          <DropDownItem key={langCode} className={`item`} onClick={() => {handleLanguageChange(langCode)}}>
            <span className={`${styles["title"]} ${itemClassName}`}>{langName}</span>
          </DropDownItem>
        ))}

      </DropDown>
    </div>
  );
};

export default ComposerLanguage;
