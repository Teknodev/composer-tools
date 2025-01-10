import React, { useState } from 'react'
import styles from "./Accordion.module.scss";
import { ComposerIcon } from 'composer-tools/composer-base-components/icon/icon';

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    icon?: string;
    headerClassName?: string;
    contentClassName?: string;
    openClassName?: string;
    accordionIconClassName?: string;
    titleClassName?: string;
}

const Accordion = ({
    title, 
    children, 
    icon, 
    headerClassName, 
    contentClassName, 
    openClassName="open",
    accordionIconClassName,
    titleClassName
}: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles["accordion"]}>
            <div className={`${styles["accordionHeader"]} ${headerClassName || ''}`} onClick={handleToggle}>
                <h3 className={`${styles["accordionTitle"]} ${titleClassName || ''}`}>{title}</h3>
                {icon && <ComposerIcon name={icon} propsIcon={{className: `${styles["accordionIcon"]} ${accordionIconClassName || ''}`}}/>}
            </div>
            <div className={`${styles["accordionContent"]} ${isOpen ? styles[openClassName] : ''} ${contentClassName || ''}`}>
                    {children}
            </div>
        </div>
    )
}

export default Accordion
