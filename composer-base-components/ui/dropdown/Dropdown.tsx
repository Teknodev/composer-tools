import React, { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.scss';
import { ComposerIcon } from '../../icon/icon';

export interface DropDownItem {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  divider?: boolean;
}

interface DropdownProps {
  buttonLabel: string;
  icon?: string;
  dropdownButtonClassName?: string;
  labelClassName?: string;
  iconClassName?: string;
  dropdownContentClassName?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ 
  buttonLabel, 
  icon,
  dropdownButtonClassName, 
  labelClassName,
  iconClassName,
  dropdownContentClassName,
  disabled = false,
  children 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldOpenLeft, setShouldOpenLeft] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      setShouldOpenLeft(rect.right > viewportWidth - 100); // 100px buffer
    }
  }, [isOpen]);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`${styles.dropdownContainer} ${dropdownButtonClassName || ''}`} ref={dropdownRef}>
      <button 
        className={styles.dropdownButton} 
        onClick={toggleDropdown}
        disabled={disabled}
      >
        <span className={`${styles.label} ${labelClassName || ''}`}>{buttonLabel}</span>
        {icon && <ComposerIcon name={icon} propsIcon={{className: `${styles.icon} ${iconClassName || ''}`}}/>}
      </button>
      {isOpen && (
        <div className={`${styles.dropdownContent} ${dropdownContentClassName || ''} ${shouldOpenLeft ? styles.openLeft : ''}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export const DropDownItem: React.FC<DropDownItem> = ({ 
  className,
  onClick,
  children,
  divider 
}) => {
  return (
    <>
      <div
        className={`${styles.dropdownItem} ${className || ''}`}
        onClick={onClick}
      >
        {children}
      </div>
      {divider && <div className={styles.divider} />}
    </>
  );
};

export default Dropdown;
