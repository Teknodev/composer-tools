import React, { useState } from "react";
import { Language } from "@mui/icons-material";
import { ArrowDropDown } from "@mui/icons-material";
import Dropdown, { DropDownItem } from "../ui/dropdown/Dropdown";
import styles from "./language.module.scss";
import { useComposerToolsData } from "../../context/DataContext";
import Accordion from "../ui/accordion/Accordion";

interface ComposerLanguageCommonProps {
  icon?: string;
  title?: "code" | "name";
}

interface DropdownProps extends ComposerLanguageCommonProps {
  type: "dropdown";
  dropdownButtonClassName?: string;
  dropdownLabelClassName?: string;
  dropdownItemClassName?: string;
  dropdownContentClassName?: string;
  iconClassName?: string;
  divider?: boolean;
}

interface AccordionProps extends ComposerLanguageCommonProps {
  type: "accordion";
  headerClassName?: string;
  contentClassName?: string;
  languageAccordionClassName?: string;
  itemClassName?: string;
  openClassName?: string;
  accordionIconClassName?: string;
  titleClassName?: string;
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
      dropdownButtonClassName,
      dropdownLabelClassName,
      dropdownItemClassName,
      icon = "GrLanguage",
      title = "name",
      iconClassName,
      dropdownContentClassName,
      divider = true,
    } = props;

    return (
      <Dropdown
        buttonLabel={composerToolsCurrentLanguage[title]}
        dropdownButtonClassName={dropdownButtonClassName}
        labelClassName={dropdownLabelClassName}
        icon={icon}
        iconClassName={iconClassName}
        disabled={false}
        dropdownContentClassName={dropdownContentClassName}
      >
        {composerToolsLanguages.map((lang, index) => (
          <DropDownItem
            key={lang.code}
            className={dropdownItemClassName}
            onClick={() => handleLanguageChange(lang)}
            divider={divider && index < composerToolsLanguages.length - 1}
          >
            <span className={dropdownItemClassName}>{lang[title].toUpperCase()}</span>
          </DropDownItem>
        ))}
      </Dropdown>
    );
  }

  if (props.type === "accordion") {
    const {
      headerClassName,
      contentClassName,
      itemClassName,
      openClassName,
      languageAccordionClassName,
      icon = "IoIosArrowDown",
      title = "name",
      accordionIconClassName,
      titleClassName
    } = props;
    return (
      <Accordion
        title={composerToolsCurrentLanguage[title]}
        headerClassName={headerClassName}
        contentClassName={contentClassName}
        openClassName={openClassName}
        icon={icon}
        accordionIconClassName={accordionIconClassName}
        titleClassName={titleClassName}
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
