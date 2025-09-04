import React, { useEffect, useRef, useState } from "react";
import styles from "./base.module.scss";
import { useComposerToolsData } from "../../context/DataContext";
import Dropdown, { DropDownItem } from "../ui/dropdown/Dropdown";
import Accordion from "../ui/accordion/Accordion";
import { IconBaseProps } from "react-icons/lib";
import { iconLibraries } from "./utitilities/iconList";
import { TypeMediaInputValue } from "../../editor-components/EditorComponent";

export type TypeContentView = "monochrome" | "colorful";
export type TypeContentAlignment = "left" | "center";
export type TypeSubtitle = "line" | "badge" | "none";
export type TypeButton =
  | "Primary"
  | "Secondary"
  | "Tertiary"
  | "Link"
  | "White"
  | "Black";
export namespace Base {
  const rootStyles = (typeof window !== 'undefined') ? getComputedStyle(document.documentElement) : { getPropertyValue: () => "" };

  function getStyleValue(cssVariable: string) {
    return rootStyles.getPropertyValue(cssVariable).trim();
  }

  function setStyleValue(property: string, value: string) {
    const rootStyle = document.documentElement.style;
    return rootStyle.setProperty(property, value);
  }

  export function getSectionSubTitleType() {
    return getStyleValue("--composer-subtitle-type");
  }

  export function setSectionSubTitleType(type: TypeSubtitle) {
    setStyleValue("--composer-subtitle-type", type);
  }

  export function getContentAlignment() {
    return getStyleValue("--composer-content-alignment");
  }

  export function setAlignment(alignment: TypeContentAlignment) {
    setStyleValue("--composer-content-alignment", alignment);
  }

  export function getViewType() {
    return getStyleValue("--composer-view-type");
  }

  export function setViewType(viewType: TypeContentView) {
    setStyleValue("--composer-view-type", viewType);
  }

  export function setFontSize(size: string) {
    setStyleValue("--composer-font-size-md", `${size}px`);
  }

  export function H1({ className, children, ...props }: any) {
    return (
      <h1 className={`${styles.h1} ${className}`} {...props}>
        {children}
      </h1>
    );
  }

  export function H2({ className, children, ...props }: any) {
    return (
      <h2 className={`${styles.h2} ${className}`} {...props}>
        {children}
      </h2>
    );
  }

  export function H3({ className, children, ...props }: any) {
    return (
      <h3 className={`${styles.h3} ${className}`} {...props}>
        {children}
      </h3>
    );
  }

  export function H4({ className, children, ...props }: any) {
    return (
      <h4 className={`${styles.h4} ${className}`} {...props}>
        {children}
      </h4>
    );
  }

  export function H5({ className, children, ...props }: any) {
    return (
      <h5 className={`${styles.h5} ${className}`} {...props}>
        {children}
      </h5>
    );
  }

  export function H6({ className, children, ...props }: any) {
    return (
      <h6 className={`${styles.h6} ${className}`} {...props}>
        {children}
      </h6>
    );
  }

  export function P({ className, children, ...props }: any) {
    return (
      <p className={`${styles.p} ${className}`} {...props}>
        {children}
      </p>
    );
  }

  export function Container({
    className,
    children,
    isFull,
    isModal,
    ...props
  }: any) {
    const alignment = getContentAlignment();
    const viewType = getViewType();
    return (
      <div
        className={`${styles.container} ${styles[alignment]} ${styles[viewType]
          } ${className} ${isModal ? styles.modalContainer : ""} ${isFull ? styles.full : ""
          }`}
        {...props}
      >
        {children}
      </div>
    );
  }

  export function MaxContent({ className, children, ...props }: any) {
    return (
      <div className={`${styles.maxContent} ${className}`} {...props}>
        {children}
      </div>
    );
  }

  export function VerticalContent({ className, children, ...props }: any) {
    return (
      <div className={`${styles.verticalContent} ${className}`} {...props}>
        {children}
      </div>
    );
  }

  export function ListGrid({
    className,
    gridCount,
    children,
    ...props
  }: {
    gridCount: { pc?: number; tablet?: number; phone?: number };
    [key: string]: any;
  }) {
    return (
      <div
        className={`${styles.listGrid} ${className}`}
        style={
          {
            "--composer-grid-count": gridCount["pc"] || 3,
            "--composer-grid-count-tablet": gridCount["tablet"] || 2,
            "--composer-grid-count-phone": gridCount["phone"] || 1,
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </div>
    );
  }

  export function ContainerGrid({ className, children, ...props }: any) {
    return (
      <div className={`${styles.containerGrid} ${className}`} {...props}>
        {children}
      </div>
    );
  }

  export function GridCell({ className, children, ...props }: any) {
    return (
      <div className={`${styles.gridCell} ${className}`} {...props}>
        {children}
      </div>
    );
  }

  export function SectionTitle({ className, ...props }: any) {
    return (
      <H1 className={`${styles.sectionTitle} ${className}`} {...props}></H1>
    );
  }

  export function SectionSubTitle({ className, ...props }: any) {
    const type = getSectionSubTitleType();
    return (
      <H3
        className={`${styles.sectionSubTitle} ${className} ${styles[type]}`}
        {...props}
      ></H3>
    );
  }

  export function SectionDescription({ className, ...props }: any) {
    return (
      <P className={`${styles.sectionDescription} ${className}`} {...props}></P>
    );
  }

  export function Button({
    className,
    buttonType,
    ...props
  }: {
    buttonType?: TypeButton;
    [key: string]: any;
  }) {
    return (
      <button
        className={`${styles.button} ${styles[(buttonType || "Primary").toLocaleLowerCase()]
          } ${className}`}
        {...props}
      ></button>
    );
  }

  export function Row({ className, ...props }: any) {
    return <div className={`${styles.row} ${className}`} {...props}></div>;
  }

  export function Overlay({ className, isVisible, isModal=false, ...props}: any) {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);    
    const [y, setY] = useState(0);
    const [currentOpacity, setCurrentOpacity] = useState(0);

    useEffect(() => {
      document.documentElement.style.overflow = "hidden";
      let playgroundEl = document.getElementById("playground");

      let resizeObserver = new ResizeObserver(() => { 
        const boundingClient = playgroundEl.getBoundingClientRect();
        setWidth(boundingClient.width);
        setHeight(boundingClient.height);
        setY(boundingClient.y);
      }); 

      resizeObserver.observe(playgroundEl); 
      if (isVisible) {
        setCurrentOpacity(1);
      }

      if(!isVisible){
        resizeObserver.disconnect();
        setCurrentOpacity(0);
      }

      return () => {
        document.documentElement.style.overflow = "";
        resizeObserver.disconnect();
      };
    }, [isVisible ,width]);
    if(isVisible) {
      return (
        <div
          style={{ width, height, top: y, opacity: currentOpacity, ...(isModal && { zIndex: 102 }) }}
          className={`${styles.overlay} ${className}`}
          {...props}
        >
        </div>
      );
    }
  }

  export namespace Navigator {
    export function Container({
      className,
      children,
      position,
      hamburgerNavActive = false,
      setIsScrolled = (scrolled: boolean) => { },
      setIsBigScreen = (bigScreen: boolean) => { },
      screenSize,
      ...props
    }: {
      className?: string;
      children?: React.ReactNode;
      position?: string;
      hamburgerNavActive?: boolean;
      setIsScrolled?: (scrolled: boolean) => void;
      setIsBigScreen?: (bigScreen: boolean) => void;
      [key: string]: any;
      screenSize?: number
    }) {
      const positionClass = position
        ?.split(" ")
        .map((item: string) => item.toLowerCase())
        .join("");

      const resizeObserverRef = useRef<ResizeObserver | null>(null);
      const mediaSize = screenSize ? screenSize : 1025;
      useEffect(() => {
        const wrapperContainer = getWrapperContainer();
        const handleScroll = () => {
          const wrapperContainer = getWrapperContainer();
          changeNavbarBackground(wrapperContainer.scrollY > 50 && positionClass !== "absolute");
        };

        const changeNavbarBackground = (condition: boolean) => {
          const navbarPosition = document.querySelectorAll(
            `.${styles.navbarPosition}`
          ) as NodeListOf<Element>;
          if (navbarPosition) {
            if (condition) {
              setIsScrolled && setIsScrolled(true);
              navbarPosition.forEach((item) => {
                item.classList.add(styles.scrolled);
              });
            } else {
              setIsScrolled && setIsScrolled(false);
              navbarPosition.forEach((item) => {
                item.classList.remove(styles.scrolled);
              });
            }
          }
        };

        if (!hamburgerNavActive) {
          changeNavbarBackground(wrapperContainer.scrollY > 50 && positionClass !== "absolute");
        }
        const handleResize = () => {
          requestAnimationFrame(() => {
            const wrapperContainer = getWrapperContainer();
            const matchedMedia =
              wrapperContainer.wrapper === window
                ? window.matchMedia(`(min-width: ${mediaSize}px)`).matches
                : (wrapperContainer.wrapper as HTMLElement).clientWidth >= mediaSize;
            if (matchedMedia) {
              Base.Navigator.changeScrollBehaviour("auto");
              setIsBigScreen && setIsBigScreen(true);
            } else if (hamburgerNavActive) {
              Base.Navigator.changeScrollBehaviour("hidden");
              setIsBigScreen && setIsBigScreen(false);
            }else if (!matchedMedia){
              setIsBigScreen && setIsBigScreen(false);
            }
          });
        };


        const createResizeListener = () => {
          if (resizeObserverRef.current) {
            resizeObserverRef.current.disconnect(); // Ensure old observer is removed
          }

          const wrapperContainer = getWrapperContainer();
          if (wrapperContainer.wrapper === window) {
            window.addEventListener("resize", handleResize);
            return;
          }

          resizeObserverRef.current = new ResizeObserver(() => {
            requestAnimationFrame(handleResize); // Avoid infinite loops
          });

          resizeObserverRef.current.observe(wrapperContainer.wrapper as HTMLElement);
        };

        wrapperContainer.wrapper.addEventListener("scroll", handleScroll);
        wrapperContainer.wrapper.addEventListener("resize", handleResize);
        createResizeListener();
        return () => {
          wrapperContainer.wrapper.removeEventListener("scroll", handleScroll);
          if (wrapperContainer.wrapper === window) {
            window.removeEventListener("resize", handleResize);
          } else if (resizeObserverRef.current) {
            resizeObserverRef.current.disconnect();
          }
        };
      }, [hamburgerNavActive]);

      return (
        <div
          className={`${styles.navbarContainer} ${className} ${styles[positionClass]}`}
          {...props}
        >
          <div
            className={`${styles.navbarPosition} ${styles.position} ${props.positionContainer}`}
          >
            {children}
          </div>
        </div>
      );
    }

    export function getWrapperContainer() {
      if(typeof window === 'undefined') return;
      const playground = document.getElementById("playground") as HTMLElement;
      const isPlayground = !!playground;
      return {
        wrapper: isPlayground ? playground : window,
        scrollY: isPlayground ? playground.scrollTop : window.scrollY,
        style: isPlayground ? playground.style : document.documentElement.style,
        innerWidth: isPlayground ? playground.clientWidth : window.innerWidth,
      };
    }

    export function changeScrollBehaviour(behaviour: "hidden" | "auto") {
      const wrapperContainer = getWrapperContainer();
      if (!wrapperContainer) return;
      wrapperContainer.style.overflowY = behaviour;
    }
  }

  export interface IconProps {
    name: string;
    propsIcon?: IconBaseProps;
  }

  export function Icon({ name, propsIcon }: IconProps): React.JSX.Element {
    if (!name) return <></>;

    let ElementIcon: any = null;

    for (const iconLibrary of iconLibraries) {
      if (ElementIcon) break;

      for (const [iconName, Icon] of Object.entries(iconLibrary)) {
        if (iconName === name) {
          ElementIcon = Icon;
          break;
        }
      }
    }

    if (!ElementIcon) {
      console.warn(`Icon "${name}" not found.`);
      return <></>;
    }

    return <ElementIcon {...propsIcon} />;
  }

  interface LanguageCommonProps {
    icon?: string;
    title?: "code" | "name";
  }

  interface LanguageDropdownProps extends LanguageCommonProps {
    type: "dropdown";
    dropdownButtonClassName?: string;
    dropdownLabelClassName?: string;
    dropdownItemClassName?: string;
    dropdownContentClassName?: string;
    iconClassName?: string;
    divider?: boolean;
  }

  interface LanguageAccordionProps extends LanguageCommonProps {
    type: "accordion";
    headerClassName?: string;
    contentClassName?: string;
    languageAccordionClassName?: string;
    itemClassName?: string;
    openClassName?: string;
    accordionIconClassName?: string;
    titleClassName?: string;
  }

  type LanguageProps = LanguageDropdownProps | LanguageAccordionProps;

  export function Language(props: LanguageProps) {
    const {
      composerToolsLanguages,
      composerToolsCurrentLanguage,
      isProcessable,
      setComposerToolsCurrentLanguage,
    } = useComposerToolsData();

    const handleLanguageChange = async (lang: { code: string; name: string }) => {
      if(!isProcessable) return;
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
          buttonLabel={composerToolsCurrentLanguage[title || "code"]}
          labelClassName={`${styles["label"]} ${dropdownLabelClassName}`}
          dropdownButtonClassName={dropdownButtonClassName}
          icon={icon}
          iconClassName={`${styles.languageIcon} ${iconClassName}`}
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
              <span className={`${styles.label} ${dropdownItemClassName}`}>
                {lang[title || "code"].toUpperCase()}
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
          title={composerToolsCurrentLanguage[title || "code"]}
          headerClassName={headerClassName}
          contentClassName={contentClassName}
          openClassName={openClassName}
          icon={icon}
          accordionIconClassName={`${styles.languageIcon} ${accordionIconClassName}`}
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
  }

  export function Card({ 
    className, 
    children, 
    ...props 
  }: React.HTMLAttributes<HTMLDivElement>) {
    return (
      <div className={`${styles.card} ${className}`} {...props}>
        {children}
      </div>
    );
  }

  export function Media({
    value,
    className,
    ...props
  }: {
    value?: TypeMediaInputValue;
    className?: string;
  }) {
    if (!value) return null;

    switch (value.type) {
      case "icon":
        return (
          <span className={className} {...props}>
            <Base.Icon name={value.name} />
          </span>
        );
      case "image":
        return (
          <img
            className={className}
            src={value.url}
            alt=""
            {...props}
          />
        );
      case "video":
        return (
          <video
            className={className}
            src={value.url}
            autoPlay={!!value.settings?.autoplay}
            controls={value.settings?.controls !== false}
            loop={!!value.settings?.loop}
            muted={!!value.settings?.muted}
            {...props}
          />
        );
      case "lottie":
        return (
          <lottie-player
            className={className}
            src={value.url}
            background="transparent"
            speed="1"
            loop={!!value.settings?.loop}
            autoplay={!!value.settings?.autoplay}
            {...props}
          />
        );
      default:
        return null;
    }
  }
}
