import * as React from "react";
import {BaseHeroSection} from "../../EditorComponent";
import styles from "./hero-section35.module.scss";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { Base } from "composer-tools/composer-base-components/base/base"; 

class HeroSection35 extends BaseHeroSection {
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
                    additionalParams: { availableTypes: ["image", "video"] },
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
                    type: "media",
                    key: "mainIcon",
                    displayer: "Main Icon",
                    additionalParams: { availableTypes: ["icon", "image"] },
                    value: {
                        type: "icon",
                        name: "LiaArrowRightSolid",
                    },
               },
               {
                    type: "page",
                    key: "page",
                    displayer: "Navigate To",
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
                    type: "media",
                    key: "smallIcon",
                    displayer: "Icon",
                    additionalParams: { availableTypes: ["icon", "image"] },
                    value: {
                        type: "icon",
                        name: "FaArrowDown",
                    },
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
                    additionalParams: { availableTypes: ["image", "video"] },
                    value: {
                        type: "image",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/693bfee3875e15002c62e85e?alt=media",
                    }
                },
                {
                    type: "boolean",
                    key: "overlay",
                    displayer: "Overlay",
                    value: true,
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
                            additionalParams: { availableTypes: ["image", "video"] },
                            value: {
                                type: "image",
                                url: "https://bexon.themejunction.net/wp-content/uploads/2025/07/client-1.webp",
                            },
                        },
                        {
                            type: "media",
                            key: "customer2Image",
                            displayer: "Customer Image",
                            additionalParams: { availableTypes: ["image", "video"] },
                            value: {
                                type: "image",
                                url: "https://bexon.themejunction.net/wp-content/uploads/2025/07/client-2.webp",
                            },
                        },
                        {
                            type: "media",
                            key: "customer3Image",
                            displayer: "Customer Image",
                            additionalParams: { availableTypes: ["image", "video"] },
                            value: {
                                type: "image",
                                url: "https://bexon.themejunction.net/wp-content/uploads/2025/07/client-3.webp",
                            },
                        },
                        {
                            type: "media",
                            key: "customerIcon",
                            displayer: "Customer Icon",
                            additionalParams: { availableTypes: ["icon", "image"] },
                            value: {
                                type: "icon",
                                name: "FaPlus",
                            },
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
        return "Hero Section 35";
    }

    render() {
        const leftCard = this.castToObject("leftCard") || {};
        const rightCard = this.castToObject("rightCard") || {};
        const customerBox = rightCard?.customerBox || {};
        const page = leftCard?.page;

        const leftCardSubtitleExist = this.castToString(leftCard.subtitle);
        const leftCardTitleExist = this.castToString(leftCard.title);
        const leftCardDescriptionExist = this.castToString(leftCard.description);
        const leftCardTextExist = this.castToString(leftCard.text);

        const customerBoxDescriptionExist = this.castToString(customerBox.customerDesc);
        const customerBoxImageExist = customerBox.customer1Image || customerBox.customer2Image || customerBox.customer3Image || customerBox.customerIcon;
        const customerBoxNumberExist = this.castToString(customerBox.customerNumber);
        const leftCardExist = leftCard.pattern || leftCardSubtitleExist || leftCardTitleExist || leftCardDescriptionExist || leftCardTextExist || leftCard.smallIcon || leftCard.mainIcon;
        const customerBoxExist = customerBoxImageExist || customerBoxDescriptionExist || customerBoxNumberExist;
        const rightCardExist = rightCard.image || (customerBoxExist && customerBox.visibility);

        return(
            <Base.Container ref={this.containerRef} className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("content")}>
                        {leftCardExist && Object.keys(leftCard).length > 0 && (
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
                                    {(leftCardSubtitleExist || leftCardTitleExist || leftCardDescriptionExist || leftCard.mainIcon) && <div className={`${this.decorateCSS("left-content")} ${!rightCardExist ? this.decorateCSS("full-width") : ""}`}>
                                        {leftCardSubtitleExist && (
                                            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                                {leftCard.subtitle}
                                            </Base.SectionSubTitle>
                                        )}
                                        {leftCardTitleExist && (
                                            <Base.SectionTitle className={this.decorateCSS("title")}>
                                                {leftCard.title}
                                            </Base.SectionTitle>
                                        )}
                                        {(leftCard.mainIcon || leftCardDescriptionExist) && (
                                                <div className={`${this.decorateCSS("main-info-wrapper")} ${!rightCardExist ? this.decorateCSS("center-wrapper") : ""}`}>
                                                {this.getPropValue("dividerTop") && (
                                                    <div className={this.decorateCSS("divider-top")}></div>
                                                )}
                                                <div className={this.decorateCSS("main-info")}>
                                                    {leftCard.mainIcon && (
                                                        <div className={this.decorateCSS("main-icon-container")}>
                                                            {page ? (
                                                                <ComposerLink path={page}>
                                                                    <Base.Media 
                                                                        value={leftCard.mainIcon} 
                                                                        className={this.decorateCSS("main-icon")}
                                                                    />
                                                                </ComposerLink>
                                                            ) : (
                                                                <Base.Media 
                                                                    value={leftCard.mainIcon} 
                                                                    className={this.decorateCSS("main-icon")}
                                                                />
                                                            )}
                                                        </div>
                                                    )}
                                                    {this.getPropValue("dividerMiddle") && (
                                                        <div className={this.decorateCSS("divider-middle")}></div>
                                                    )}
                                                    {leftCardDescriptionExist && (
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
                                    </div>}
                                </div>
                                {(leftCardTextExist || leftCard.smallIcon) && (
                                    <div 
                                    className={this.decorateCSS("scroll-section")}
                                    onClick={this.scrollToNextViewport}
                                    >
                                        {leftCardTextExist && (
                                            <span className={this.decorateCSS("scroll-text")}>
                                                {leftCard.text}
                                            </span>
                                        )}
                                        <div className={this.decorateCSS("scroll-icon-container")}>
                                            {leftCard.smallIcon && (
                                                <Base.Media
                                                    value={leftCard.smallIcon}
                                                    className={this.decorateCSS("scroll-icon")}
                                                />
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {rightCardExist && (
                            <div className={leftCardExist ? this.decorateCSS("right-card") : this.decorateCSS("right-card-no-left-card")}>
                                <div className={this.decorateCSS("image-container")}>
                                    {rightCard.image && (
                                        <div className={this.decorateCSS("image-wrapper")}>
                                            <Base.Media
                                                value={rightCard.image}
                                                className={this.decorateCSS("image")}
                                            />
                                            {rightCard.overlay && <div className={this.decorateCSS("image-overlay")} />}
                                        </div>
                                    )}
                                    {customerBox && customerBox.visibility && Object.keys(customerBox).length > 1 && customerBoxExist && (
                                        <div className={`${this.decorateCSS("box-area")} ${!rightCard.image ? this.decorateCSS("full-size") : ""}`}>
                                            <div className={this.decorateCSS("customer-box")}>
                                                {customerBoxImageExist && <div className={this.decorateCSS("customer-images")}>
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
                                                            <Base.Media 
                                                                value={customerBox.customerIcon} 
                                                                className={this.decorateCSS("customer-icon")}
                                                            />
                                                        </div>
                                                    )}  
                                                </div>}
                                                {(customerBoxDescriptionExist || customerBox.customerNumber) && <div className={this.decorateCSS("customer-info")}>
                                                    {customerBoxNumberExist && (
                                                        <div className={this.decorateCSS("customer-number")}>
                                                            {customerBox.customerNumber}
                                                        </div>
                                                    )}
                                                    {customerBoxDescriptionExist && (
                                                        <div className={this.decorateCSS("customer-desc")}>
                                                            {customerBox.customerDesc}
                                                        </div>
                                                    )}
                                                </div>}
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

export default HeroSection35;
