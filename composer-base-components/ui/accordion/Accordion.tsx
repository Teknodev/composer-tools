
import React, { useState } from 'react'
import styles from "./Accordion.module.scss";
import { Base } from 'composer-tools/composer-base-components/base/base';
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
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <div className={styles["accordion"]}>
            <div className={`${styles["accordionHeader"]} ${headerClassName || ''}`} onClick={handleToggle}>
                <h3 className={`${styles["accordionTitle"]} ${titleClassName || ''}`}>{title}</h3>
                {icon && <Base.Icon name={icon} propsIcon={{className: `${styles["accordionIcon"]} ${isOpen ? styles["open"] : ''} ${accordionIconClassName || ''}`}}/>}
            </div>
            <div className={`${styles["accordionContent"]} ${isOpen ? styles[openClassName] : ''} ${contentClassName || ''}`} onClick={handleClose}>
                {children}
            </div>
        </div>
    )
}

export default Accordion
