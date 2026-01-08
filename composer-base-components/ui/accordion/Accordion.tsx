
import React, { useState } from 'react'
import styles from "./Accordion.module.scss";
import { Base } from 'composer-tools/composer-base-components/base/base';
import { TypeMediaInputValue } from 'composer-tools/editor-components/EditorComponent';
interface AccordionProps {
    title: string;
    children: React.ReactNode;
    icon?: TypeMediaInputValue;
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
                <Base.P className={`${styles["accordionTitle"]} ${titleClassName || ''}`}>{title}</Base.P>
                {icon && <Base.Media value={icon} className={`${styles["accordionIcon"]} ${isOpen ? styles["open"] : ''} ${accordionIconClassName || ''}`}/>}
            </div>
            <Base.P className={`${styles["accordionContent"]} ${isOpen ? styles[openClassName] : ''} ${contentClassName || ''}`} onClick={handleClose}>
                {children}
            </Base.P>
        </div>
    )
}

export default Accordion
