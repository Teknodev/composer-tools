import React, { useState } from "react";
import { Language } from "@mui/icons-material";
import DropDown, {
  DropDownItem,
} from "../../composer-base-components/ui/Dropdown";
import styles from "./language.module.scss";
import { useComposerToolsData } from "../../context/DataContext";

interface ComposerLanguageProps {
  className?: string,
  labelClassName?: string,
  itemClassName?: string,
  icon?: React.ReactNode;
}


const ComposerLanguage = ({className, labelClassName, itemClassName, icon = <Language/>}: ComposerLanguageProps) => {
  const {
    composerToolsLanguages, 
    composerToolsCurrentLanguage, 
    setComposerToolsCurrentLanguage
  } = useComposerToolsData();

  const [language, setLanguage] = useState<string>(composerToolsCurrentLanguage.code || "en");

  const handleLanguageChange = async (lang: {code: string; name: string}) => {
    setLanguage(lang.code);
    setComposerToolsCurrentLanguage(lang);
  }

  return (
    <div>
      <DropDown
        disabled={false}
        buttonClassName={`${styles["language"]} ${className}`}
        buttonLabel={composerToolsLanguages.find(lang => lang.code === language)?.name}
        labelClassName={labelClassName}
        icon={icon}
      >
        {composerToolsLanguages.map((lang) => (
          <DropDownItem 
            key={lang.code} 
            className={`item`} 
            onClick={() => handleLanguageChange(lang)}
          >
            <span className={`${styles["title"]} ${itemClassName}`}>
              {lang.name}
            </span>
          </DropDownItem>
        ))}
      </DropDown>
    </div>
  );
};

export default ComposerLanguage;
