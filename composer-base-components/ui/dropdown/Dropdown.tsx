import React, { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.scss';
import { Base } from "composer-tools/composer-base-components/base/base";
import { TypeMediaInputValue } from 'composer-tools/editor-components/EditorComponent';


export interface DropDownItem {
  className?: string;
  onClick?: () => void;
  onClose?: () => void;
  children: React.ReactNode;
  divider?: boolean;
}

interface DropdownProps {
  buttonLabel: string;
  icon?: TypeMediaInputValue;
  dropdownButtonClassName?: string;
  labelClassName?: string;
  iconClassName?: string;
  dropdownContentClassName?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClose?: () => void
}

const Dropdown: React.FC<DropdownProps> = ({ 
  buttonLabel, 
  icon,
  dropdownButtonClassName, 
  labelClassName,
  iconClassName,
  dropdownContentClassName,
  disabled = false,
  children,
  onClose
})=> {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldOpenLeft, setShouldOpenLeft] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !dropdownRef.current) return;

    const checkPosition = () => {
      const wrapperContainer = Base.Navigator.getWrapperContainer();
      if (!wrapperContainer) return;
      
      const buttonRect = dropdownRef.current!.getBoundingClientRect();
      const dropdownContent = dropdownRef.current!.querySelector(`.${styles.dropdownContent}`) as HTMLElement;
      if (!dropdownContent) return;
      
      const contentRect = dropdownContent.getBoundingClientRect();
      const viewportWidth = wrapperContainer.innerWidth;
      
      const wouldOverflowRight = buttonRect.left + contentRect.width > viewportWidth;
      const hasSpaceOnLeft = buttonRect.right - contentRect.width >= 0;
      
      setShouldOpenLeft(wouldOverflowRight && hasSpaceOnLeft);
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(checkPosition);
    });

    const handleResize = () => checkPosition();

    const wrapperContainer = Base.Navigator.getWrapperContainer();
    if (wrapperContainer?.wrapper) {
      wrapperContainer.wrapper.addEventListener('resize', handleResize);
      
      return () => {
        wrapperContainer.wrapper.removeEventListener('resize', handleResize);
      };
    }
  }, [isOpen]);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };
  const closeDropdown = () => {
    setIsOpen(false);
    onClose?.();
  };

  return (
    <div className={`${styles.dropdownContainer} ${dropdownButtonClassName || ''}`} ref={dropdownRef}>
      <button 
        className={styles.dropdownButton} 
        onClick={toggleDropdown}
        disabled={disabled}
      >
        <Base.P className={`${styles.label} ${labelClassName || ''}`}>{buttonLabel}</Base.P>
        {icon && <Base.Media value={icon} className={`${styles.icon} ${iconClassName || ''}`}/>}
      </button>
      {isOpen && (
        <div className={`${styles.dropdownContent} ${dropdownContentClassName || ''} ${shouldOpenLeft ? styles.openLeft : ''}`} onClick={closeDropdown}>
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
  divider,
  onClose
  }) => {
  const handleClick = () => {
    onClick?.();
    onClose?.();
  };

  return (
    <>
      <div
        className={`${styles.dropdownItem} ${className || ''}`}
        onClick={handleClick} 
      >
        {children}
      </div>
      {divider && <div className={styles.divider} />}
    </>
  );
};


export default Dropdown;