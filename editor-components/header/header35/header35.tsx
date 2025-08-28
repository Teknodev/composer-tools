import * as React from "react";
import {BaseHeader} from "../../EditorComponent";
import styles from "./header35.module.scss";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { Base } from "composer-tools/composer-base-components/base/base"; 
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Header35 extends BaseHeader {
    private containerRef = React.createRef<HTMLDivElement>();
    constructor(props?: any) {
        super(props, styles);
        
        this.addProp({
            type: "object",
            key: "leftCard",
            displayer: "Left Card",
            value: [
                {
                    type: "media",
                    key: "pattern",
                    displayer: "Pattern Image",
                    value: {
                        type: "image",
                        url: "https://bexon.themejunction.net/wp-content/uploads/2025/07/pattern-bg.webp",
                    } 
                },
               {
                    type: "string",
                    key: "subtitle",
                    displayer: "Subtitle",
                    value: "recognized for excellence",
               },
               {
                    type: "string",
                    key: "title",
                    displayer:"Title",
                    value: "Driving Excellence Through Evolution and <span style='color: var(--composer-secondary-color)'>Trust.</span>",
               },
               {
                    type: "icon",
                    key: "mainIcon",
                    displayer: "Main Icon",
                    value: "LiaArrowRightSolid",
               },
               {
                    type: "page",
                    key: "page",
                    displayer: "Page",
                    value: "",
               },
               {
                    type: "string",
                    key: "description",
                    displayer: "Description",
                    value: "Represents growth, expansion, and modern business solution present growth, expansion.",
               },
               {
                    type: "string",
                    key: "text",
                    displayer: "Text",
                    value: "Scroll Down",
               },
               {
                    type: "icon",
                    key: "smallIcon",
                    displayer: "Icon",
                    value: "FaArrowDown",
               },
            ]
        });
        
        this.addProp({
            type: "boolean",
            key: "dividerTop",
            displayer: "Divider Top",
            value: true,
        });
        
        this.addProp({
            type: "boolean",
            key: "dividerMiddle",
            displayer: "Divider Middle",
            value: true,
        });

        this.addProp({
            type: "boolean",
            key: "dividerBottom",
            displayer: "Divider Bottom",
            value: true,
        });
        
        this.addProp({
            type: "object",
            key: "rightCard",
            displayer: "Right Card",
            value: [
                {
                    type: "media",
                    key: "image",
                    displayer: "Image",
                    value: {
                        type: "image",
                        url: "https://bexon.themejunction.net/wp-content/uploads/2025/07/hero-img.webp",
                    }
                },
                {
                    type: "object",
                    key: "customerBox",
                    displayer: "Customer Box",
                    value: [
                        {
                            type: "boolean",
                            key: "visibility",
                            displayer: "Visibility",
                            value: true
                        },
                        {
                            type: "media",
                            key: "customer1Image",
                            displayer: "Customer Image",
                            value: {
                                type: "image",
                                url: "https://bexon.themejunction.net/wp-content/uploads/2025/07/client-1.webp",
                            },
                        },
                        {
                            type: "media",
                            key: "customer2Image",
                            displayer: "Customer Image",
                            value: {
                                type: "image",
                                url: "https://bexon.themejunction.net/wp-content/uploads/2025/07/client-2.webp",
                            },
                        },
                        {
                            type: "media",
                            key: "customer3Image",
                            displayer: "Customer Image",
                            value: {
                                type: "image",
                                url: "https://bexon.themejunction.net/wp-content/uploads/2025/07/client-3.webp",
                            },
                        },
                        {
                            type: "icon",
                            key: "customerIcon",
                            displayer: "Customer Icon",
                            value: "FaPlus",
                        },
                        {
                            type: "string",
                            key: "customerNumber",
                            displayer: "Customer Number",
                            value: "30K"
                        },
                        {
                            type: "string",
                            key: "customerDesc",
                            displayer: "Customer Box Description",
                            value: "Happy customer we have world-wide.",
                        },
                    ],
                },
            ],
        });
    }
    scrollToNextViewport = () => {
        if (this.containerRef.current) {
            const nextElement = this.containerRef.current.nextElementSibling;
            if (nextElement) {
                nextElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                window.scrollTo({
                    top: this.containerRef.current.offsetTop + this.containerRef.current.offsetHeight,
                    behavior: 'smooth'
                });
            }
        }
    };

    static getName(): string {
        return "Header 35";
    }

    render() {
        const leftCard = this.castToObject<any>("leftCard") || {};
        const rightCard = this.castToObject<any>("rightCard") || {};
        const customerBox = rightCard?.customerBox || {};
        const page = leftCard?.page;

        return(
            <Base.Container ref={this.containerRef} className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("content")}>
                        {leftCard && Object.keys(leftCard).length > 0 && (
                            <div className={this.decorateCSS("left-card")}>
                                {leftCard.pattern && (
                                    <div className={this.decorateCSS("pattern-bg")}>
                                        <Base.Media
                                            value={leftCard.pattern}
                                            className={this.decorateCSS("pattern-image")}
                                        />
                                    </div>
                                )}
                                <div className={this.decorateCSS("left-content-wrapper")}>
                                    <div className={this.decorateCSS("left-content")}>
                                        {leftCard.subtitle && (
                                            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                                {leftCard.subtitle}
                                            </Base.SectionSubTitle>
                                        )}
                                        {leftCard.title && (
                                            <Base.SectionTitle className={this.decorateCSS("title")}>
                                                {leftCard.title}
                                            </Base.SectionTitle>
                                        )}
                                        {(leftCard.mainIcon || leftCard.description) && (
                                            <div className={this.decorateCSS("main-info-wrapper")}>
                                                {this.getPropValue("dividerTop") && (
                                                    <div className={this.decorateCSS("divider-top")}></div>
                                                )}
                                                <div className={this.decorateCSS("main-info")}>
                                                    {leftCard.mainIcon && (
                                                        <div className={this.decorateCSS("main-icon-container")}>
                                                            {page ? (
                                                                <ComposerLink path={page}>
                                                                    <Base.Icon 
                                                                        name={leftCard.mainIcon} 
                                                                        propsIcon={{
                                                                            className: this.decorateCSS("main-icon")
                                                                        }}
                                                                    />
                                                                </ComposerLink>
                                                            ) : (
                                                                <Base.Icon 
                                                                    name={leftCard.mainIcon} 
                                                                    propsIcon={{
                                                                        className: this.decorateCSS("main-icon")
                                                                    }}
                                                                />
                                                            )}
                                                        </div>
                                                    )}
                                                    {this.getPropValue("dividerMiddle") && (
                                                        <div className={this.decorateCSS("divider-middle")}></div>
                                                    )}
                                                    {leftCard.description && (
                                                        <div className={this.decorateCSS("description")}>
                                                            {leftCard.description}
                                                        </div>
                                                    )}
                                                </div>
                                                {this.getPropValue("dividerBottom") && (
                                                    <div className={this.decorateCSS("divider-bottom")}></div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {(leftCard.text || leftCard.smallIcon) && (
                                    <div 
                                    className={this.decorateCSS("scroll-section")}
                                    onClick={this.scrollToNextViewport}
                                    >
                                        {leftCard.text && (
                                            <span className={this.decorateCSS("scroll-text")}>
                                                {leftCard.text}
                                            </span>
                                        )}
                                        <div className={this.decorateCSS("scroll-icon-container")}>
                                            {leftCard.smallIcon && (
                                                <Base.Icon
                                                    name={leftCard.smallIcon}
                                                    propsIcon={{className: this.decorateCSS("scroll-icon")}}
                                                />
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {rightCard && Object.keys(rightCard).length > 0 && (
                            <div className={this.decorateCSS("right-card")}>
                                <div className={this.decorateCSS("image-container")}>
                                    {rightCard.image && (
                                        <Base.Media
                                            value={rightCard.image}
                                            className={this.decorateCSS("image")}
                                        />
                                    )}
                                    {customerBox && customerBox.visibility && Object.keys(customerBox).length > 1 && (
                                        <div className={this.decorateCSS("box-area")}>
                                            <div className={this.decorateCSS("customer-box")}>
                                                <div className={this.decorateCSS("customer-images")}>
                                                    {customerBox.customer1Image && (
                                                        <Base.Media
                                                            value={customerBox.customer1Image}
                                                            className={this.decorateCSS("customer-img")}
                                                        />
                                                    )}
                                                    {customerBox.customer2Image && (
                                                        <Base.Media
                                                            value={customerBox.customer2Image}
                                                            className={this.decorateCSS("customer-img")}
                                                        />
                                                    )}
                                                    {customerBox.customer3Image && (
                                                        <Base.Media
                                                            value={customerBox.customer3Image}
                                                            className={this.decorateCSS("customer-img")}
                                                        />
                                                    )}
                                                    {customerBox.customerIcon && (
                                                        <div className={this.decorateCSS("customer-icon-container")}>
                                                            <Base.Icon 
                                                                name={customerBox.customerIcon} 
                                                                propsIcon={{ className: this.decorateCSS("customer-icon") }} 
                                                            />
                                                        </div>
                                                    )}  
                                                </div>
                                                <div className={this.decorateCSS("customer-info")}>
                                                    {customerBox.customerNumber && (
                                                        <div className={this.decorateCSS("customer-number")}>
                                                            {customerBox.customerNumber}
                                                        </div>
                                                    )}
                                                    {customerBox.customerDesc && (
                                                        <div className={this.decorateCSS("customer-desc")}>
                                                            {customerBox.customerDesc}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Header35;