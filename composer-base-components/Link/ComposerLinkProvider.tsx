import React from "react";
import styles from "./link.module.scss";

interface ComposerLinkProps {
  children?: React.ReactNode;
  path?: string;
  isFullWidth?: boolean;
}

type ComposerLinkComponent = React.FC<ComposerLinkProps>;

const DefaultComposerLink: ComposerLinkComponent = ({
  children,
  path = "",
  isFullWidth = false,
}) => {
  const wrapperStyle = { width: isFullWidth ? "100%" : ("unset" as const) };

  if (!path) {
    return (
      <div className={styles.container} style={wrapperStyle}>
        {children}
      </div>
    );
  }

  const formatUrl = (url: string): string => {
    if (!url) return "";
    if (url.startsWith("#") || url.startsWith("http://") || url.startsWith("https://")) return url;
    return `https://${url}`;
  };

  return (
    <a
      href={formatUrl(path)}
      style={wrapperStyle}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      {children}
    </a>
  );
};

let _ComposerLink: ComposerLinkComponent = DefaultComposerLink;

export function setComposerLink(link: ComposerLinkComponent) {
  _ComposerLink = link;
}

export function getComposerLink(): ComposerLinkComponent {
  return _ComposerLink;
}

const ComposerLink: React.FC<ComposerLinkProps> = (props) => {
  const Link = getComposerLink();
  return <Link {...props} />;
};

export default ComposerLink;
export type { ComposerLinkProps, ComposerLinkComponent };
