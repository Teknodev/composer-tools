import React from "react";
import styles from "./Cookie.module.scss";
import { FaCookieBite } from "react-icons/fa";

interface CookieProps {
  text?: string;
  onAccept?: () => void;
  onDecline?: () => void;
  acceptButtonText?: string;
  declineButtonText?: string;
  size?: "long" | "box";
  fixed?: boolean;
  position?: "top" | "bottom" | "left" | "right";
}

const Cookie: React.FC<CookieProps> = ({
  text = "We use third-party cookies in order to personalize your site experience.",
  onAccept,
  onDecline,
  acceptButtonText = "Allow",
  declineButtonText = "Decline",
  size = "box",
  fixed = false,
  position = "bottom"
}) => {
  const getFixedStyles = () => {
    if (!fixed) return '';
    
    switch (position) {
      case 'top':
        return styles.fixedTop;
      case 'bottom':
        return styles.fixedBottom;
      case 'left':
        return styles.fixedLeft;
      case 'right':
        return styles.fixedRight;
      default:
        return styles.fixedBottom;
    }
  };

  return (
    <div className={`${styles.cookieContainer} ${getFixedStyles()} ${size === "long" ? styles.longBanner : styles.boxBanner}`}> 
      <div className={styles.iconWrapper}>
        <FaCookieBite className={styles.icon} />
      </div>
      <p className={styles.text}>{text}</p>
      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={onAccept}>{acceptButtonText}</button>
        {declineButtonText && (
          <button className={styles.button} onClick={onDecline}>{declineButtonText}</button>
        )}
      </div>
    </div>
  );
};

export default Cookie;
