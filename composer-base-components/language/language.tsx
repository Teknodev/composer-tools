import React, { useState, useEffect } from "react";
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

  const handleLanguageChange = async (lang: { code: string; name: string }) => {
    setComposerToolsCurrentLanguage(lang);
  
    let currentPath = window.location.pathname;
    const normalizedPath = currentPath.replace(/\/$/, "");
    const pathParts = normalizedPath.split("/");
  
    const isLanguageSlugMissing = pathParts.length < 2;
    const isFirstSegmentNotALanguageCode = !pathParts[1]?.match(/^[a-z]{2}$/i);
  
    if (isLanguageSlugMissing || isFirstSegmentNotALanguageCode) {
      pathParts.splice(1, 0, lang.code);
    } else {
      pathParts[1] = lang.code;
    }
  
    let newUrl = pathParts.join("/") + window.location.search + window.location.hash;
    const isUrlChanged = newUrl !== window.location.pathname + window.location.search + window.location.hash;
  
    if (isUrlChanged) {
      window.history.pushState(null, "", newUrl);
      window.dispatchEvent(new Event("popstate"));
    }
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
        labelClassName={`${styles["label"]} ${dropdownLabelClassName}`}
        dropdownButtonClassName={dropdownButtonClassName}
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
            <span className={dropdownItemClassName}>
              {lang[title].toUpperCase()}
            </span>
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
      icon = "MdArrowDropDown",
      title = "name",
      accordionIconClassName,
      titleClassName,
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
        <ul
          className={`${styles["accordionList"]} ${languageAccordionClassName}`}
        >
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
