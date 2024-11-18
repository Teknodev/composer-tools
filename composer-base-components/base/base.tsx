import React from "react";
import styles from "./base.module.scss";

export namespace Base {
  const rootStyles = getComputedStyle(document.documentElement);

  function getStyleValue(cssVariable: string) {
    return rootStyles.getPropertyValue(cssVariable).trim();
  }

  function setStyleValue(property: string, value: any) {
    const rootStyle = document.documentElement.style;
    return rootStyle.setProperty(property, value);
  }

  export function getSectionSubTitleType() {
    return getStyleValue("--composer-subtitle-type");
  }

  export function getContentAlignment() {
    return getStyleValue("--composer-content-alignment");
  }

  export function getViewType() {
    return getStyleValue("--composer-view-type");
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

  export function P({ className, children, ...props }: any) {
    return (
      <p className={`${styles.p} ${className}`} {...props}>
        {children}
      </p>
    );
  }

  export function Container({ className, children, isFull, isModal, ...props }: any) {
    const alignment = getContentAlignment();
    const viewType = getViewType();
    return (
      <div
        className={`${styles.container} ${styles[alignment]} ${styles[viewType]
          } ${className} ${isModal ? styles.modalContainer : ""} ${isFull ? styles.full : ""}`}
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

  export function ListGrid({ className, gridCount, children, ...props }: { gridCount: { pc?: number, tablet?: number, phone?: number }, [key: string]: any }) {
    return (
      <div
        className={`${styles.listGrid} ${className}`}
        style={{
          "--composer-grid-count": gridCount["pc"] || 3,
          "--composer-grid-count-tablet": gridCount["tablet"] || 2,
          "--composer-grid-count-phone": gridCount["phone"] || 1,
        } as React.CSSProperties}
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
}
