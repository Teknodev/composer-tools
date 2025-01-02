import React, { useState } from "react";
import { Language } from "@mui/icons-material";
import { ArrowDropDown } from "@mui/icons-material";
import DropDown, {
  DropDownItem,
} from "../ui/dropdown/Dropdown";
import styles from "./language.module.scss";
import { useComposerToolsData } from "../../context/DataContext";
import Accordion from "../ui/accordion/Accordion";

interface ComposerLanguageCommonProps {
  icon?: React.ReactNode;
  title?: "code" | "name";
}

interface DropdownProps extends ComposerLanguageCommonProps {
  type: "dropdown";
  dropdownClassName?: string;
  dropdownLabelClassName?: string;
  dropdownItemClassName?: string;
}

interface AccordionProps extends ComposerLanguageCommonProps {
  type: "accordion";
  headerClassName?: string;
  contentClassName?: string;
  languageAccordionClassName?: string;
  itemClassName?: string;
  openClassName?: string;
}

type ComposerLanguageProps = DropdownProps | AccordionProps;

const ComposerLanguage = (props: ComposerLanguageProps) => {
  const {
    composerToolsLanguages,
    composerToolsCurrentLanguage,
    setComposerToolsCurrentLanguage,
  } = useComposerToolsData();

  const [language, setLanguage] = useState<string>(
    composerToolsCurrentLanguage.code || "en"
  );

  const handleLanguageChange = async (lang: { code: string; name: string }) => {
    setLanguage(lang.code);
    setComposerToolsCurrentLanguage(lang);
  };

  if (props.type === "dropdown") {
    const {
      dropdownClassName,
      dropdownLabelClassName,
      dropdownItemClassName,
      icon = <Language/>,
      title = "name",
    } = props;
    return (
      <DropDown
        disabled={false}
        buttonClassName={dropdownClassName}
        buttonLabel={composerToolsCurrentLanguage[title]}
        labelClassName={`${styles["label"]} ${dropdownLabelClassName}`}
        icon={icon}
      >
        {composerToolsLanguages.map((lang) => (
          <DropDownItem
            key={lang.code}
            className={`item`}
            onClick={() => handleLanguageChange(lang)}
          >
            <span className={`${styles["title"]} ${dropdownItemClassName}`}>
              {lang.name}
            </span>
          </DropDownItem>
        ))}
      </DropDown>
    );
  }

  if (props.type === "accordion") {
    const {
      headerClassName,
      contentClassName,
      itemClassName,
      openClassName,
      languageAccordionClassName,
      icon = <ArrowDropDown />,
      title = "name",
    } = props;
    return (
      <Accordion
        title={composerToolsCurrentLanguage[title]}
        headerClassName={headerClassName}
        contentClassName={contentClassName}
        openClassName={openClassName}
        icon={icon}
      >
        <ul className={`${styles["accordionList"]} ${languageAccordionClassName}`}>
        {composerToolsLanguages.map((lang) => (
          <li
            key={lang.code}
            className={`${styles["accordionItem"]} ${itemClassName}`}
            onClick={() => handleLanguageChange(lang)}
          >
            {lang.name}
          </li>
        ))}
        </ul>
       
      </Accordion>
    );
  }
};

export default ComposerLanguage;
