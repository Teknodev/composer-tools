import React, { useState } from 'react'
import styles from "./Accordion.module.scss";

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    headerClassName?: string;
    contentClassName?: string;
    openClassName?: string;
}

const Accordion = ({
    title, 
    children, 
    icon, 
    headerClassName, 
    contentClassName, 
    openClassName="open"
}: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles["accordion"]}>
            <div className={`${styles["accordionHeader"]} ${headerClassName || ''}`} onClick={handleToggle}>
                <h3>{title}</h3>
                {icon}
            </div>
            <div className={`${styles["accordionContent"]} ${isOpen ? styles[openClassName] : ''} ${contentClassName || ''}`}>
                    {children}
            </div>
        </div>
    )
}

export default Accordion
