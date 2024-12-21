import React, { useContext, useEffect, useState } from "react";
import { Language } from "@mui/icons-material";
import DropDown, {
  DropDownItem,
} from "../../../prefabs/playground/ui/Dropdown";
import { ProjectContext } from "../../../contexts/project";
import { LANGUAGES } from "../../../classes/Localization/languages";
import styles from "./language.module.scss";
import { useComposerToolsData } from "../../context/DataContext";
import { useContextSelector } from "@fluentui/react-context-selector";
import { editor } from "../../../classes/Editor";

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

  const setProject = useContextSelector(
    ProjectContext,
    (context) => context?.setProject
  ) || (() => {});

  const handleLanguageChange = async (langCode: string) => {
  try {
    setLanguage(langCode);
    setComposerToolsCurrentLanguage(langCode);
    editor.locale.currentLanguage = langCode;
    editor.locale.defaultLanguage = langCode;
    await editor.updateLanguages(composerToolsLanguages);
    const updatedFields = {
      current_language: langCode,
      languages: composerToolsLanguages,
      default_language: langCode,
    };
    editor.project = { ...editor.project, ...updatedFields };
    setProject(editor?.project!);
    await editor.patchProject(updatedFields);
  } catch (error) {
    console.log(error);
  }
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
          <DropDownItem key={langCode} className={`item`} onClick={() => {handleLanguageChange(langCode)}}>
            <span className={`${styles["title"]} ${itemClassName}`}>{langName}</span>
          </DropDownItem>
        ))}

      </DropDown>
    </div>
  );
};

export default ComposerLanguage;
