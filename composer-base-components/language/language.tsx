import React, { useContext, useEffect, useState } from "react";
import { Language } from "@mui/icons-material";
import DropDown, {
  DropDownItem,
} from "../../../prefabs/playground/ui/Dropdown";
import { IProjectContext, ProjectContext } from "../../../contexts/project";
import { LANGUAGES } from "../../../classes/Localization/languages";
import useLocalization from "../../../custom-hooks/localization";
import styles from "./language.module.scss";

interface ComposerLanguageProps{
  className?: string,
  labelClassName?: string,
  itemClassName?: string,
  icon?: React.ReactNode;
}

const ComposerLanguage = ({className, labelClassName, itemClassName, icon = <Language/>}: ComposerLanguageProps) => {
  const projectContext = useContext<IProjectContext>(ProjectContext)
  const {languages, current_language} = projectContext.project

  const [language, setLanguage] = useState<string>(current_language);
  const { saveLocalization } = useLocalization();

  useEffect(() => {
    setLanguage(current_language);
  }, [current_language]);

  const languageType = languages.reduce((acc, langCode) => {
    const language = LANGUAGES.find(lang => lang.code === langCode);
    if (language) {
      acc[langCode] = language.name;
    }
    return acc;
  }, {} as Record<string, string>);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    saveLocalization({
      currentLanguage: langCode,
      languages: languages.filter((el) => el !== ""),
    });
  };

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
          // check item class
          <DropDownItem key={langCode} className={`item`} onClick={() => {handleLanguageChange(langCode)}}>
            <span className={`${styles["title"]} ${itemClassName}`}>{langName}</span>
          </DropDownItem>
        ))}
      </DropDown>
    </div>
  );
};

export default ComposerLanguage;
