import * as React from "react";
import {BaseHeroSection} from "../../EditorComponent";
import styles from "./hero-section35.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base"; 

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
                    key: "backgroundMedia",
                    displayer: "Background Media",
                    additionalParams: { availableTypes: ["image", "video"] },
                    value: {
                        type: "image",
                        url: "https://bexon.themejunction.net/wp-content/uploads/2025/07/pattern-bg.webp",
                    } 
                },
               {
                    type: "media",
                    key: "logo",
                    displayer: "Logo",
                    additionalParams: { availableTypes: ["icon", "image"] },
                    value: { type: "icon", name: "" },
               },
               {
                    type: "string",
                    key: "subtitle",
                    displayer: "Subtitle",
                    value: "Recognized for excellence",
               },
               {
                    type: "string",
                    key: "title",
                    displayer:"Title",
                    value: "Driving Excellence Through Evolution and <span style='color: var(--composer-secondary-color)'>Trust.</span>",
               },
               {
                    type: "media",
                    key: "icon",
                    displayer: "Icon",
                    additionalParams: { availableTypes: ["icon", "image"] },
                    value: {
                        type: "icon",
                        name: "FiArrowUpRight",
                    },
               },
               {
                    type: "page",
                    key: "url",
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
                    type: "object",
                    key: "dividers",
                    displayer: "Dividers",
                    value: [
                        {
                            type: "boolean",
                            key: "top",
                            displayer: "Divider Top",
                            value: true,
                        },
                        {
                            type: "boolean",
                            key: "middle",
                            displayer: "Divider Middle",
                            value: true,
                        },
                        {
                            type: "boolean",
                            key: "bottom",
                            displayer: "Divider Bottom",
                            value: true,
                        },
                    ],
               },
               {
                    type: "string",
                    key: "scrollText",
                    displayer: "Scroll Text",
                    value: "Scroll Down",
               },
               {
                    type: "media",
                    key: "scrollIcon",
                    displayer: "Scroll Icon",
                    additionalParams: { availableTypes: ["icon", "image"] },
                    value: {
                        type: "icon",
                        name: "FaArrowDown",
                    },
               },
            ]
        });
        
        this.addProp({
            type: "object",
            key: "rightCard",
            displayer: "Right Card",
            value: [
                {
                    type: "media",
                    key: "media",
                    displayer: "Media",
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
                            type: "array",
                            key: "images",
                            displayer: "Images",
                            value: [
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            additionalParams: { availableTypes: ["image", "video"] },
                                            value: {
                                                type: "image",
                                                url: "https://bexon.themejunction.net/wp-content/uploads/2025/07/client-1.webp",
                                            },
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            additionalParams: { availableTypes: ["image", "video"] },
                                            value: {
                                                type: "image",
                                                url: "https://bexon.themejunction.net/wp-content/uploads/2025/07/client-2.webp",
                                            },
                                        },
                                    ],
                                },
                                {
                                    type: "object",
                                    key: "item",
                                    displayer: "Item",
                                    value: [
                                        {
                                            type: "media",
                                            key: "image",
                                            displayer: "Image",
                                            additionalParams: { availableTypes: ["image", "video"] },
                                            value: {
                                                type: "image",
                                                url: "https://bexon.themejunction.net/wp-content/uploads/2025/07/client-3.webp",
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: { availableTypes: ["icon", "image"] },
                            value: {
                                type: "icon",
                                name: "FaPlus",
                            },
                        },
                        {
                            type: "string",
                            key: "number",
                            displayer: "Number",
                            value: "30K"
                        },
                        {
                            type: "string",
                            key: "description",
                            displayer: "Description",
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
        const leftCard = this.castToObject<any>("leftCard") || {};
        const rightCard = this.castToObject<any>("rightCard") || {};
        const customerBox = rightCard?.customerBox || {};
        const dividers = leftCard?.dividers || {};
        const url = leftCard?.url;
        const hasMedia = (m: { name?: string; url?: string } | null | undefined) => Boolean(m && (m.name || m.url));

        const leftCardSubtitleExist = this.castToString(leftCard.subtitle);
        const leftCardTitleExist = this.castToString(leftCard.title);
        const leftCardDescriptionExist = this.castToString(leftCard.description);
        const leftCardScrollTextExist = this.castToString(leftCard.scrollText);
        const hasBackgroundMedia = hasMedia(leftCard.backgroundMedia);
        const hasLogo = hasMedia(leftCard.logo);
        const hasIcon = hasMedia(leftCard.icon);
        const hasScrollIcon = hasMedia(leftCard.scrollIcon);
        const hasRightMedia = hasMedia(rightCard.media);

        const getImage = (item: any) => (Array.isArray(item?.value) ? item.value.find((field: any) => field.key === "image")?.value : item?.image);
        const customerImages = (customerBox.images || []).map(getImage).filter((image: any) => hasMedia(image));
        const hasCustomerIcon = hasMedia(customerBox.icon);
        const customerBoxDescriptionExist = this.castToString(customerBox.description);
        const customerBoxNumberExist = this.castToString(customerBox.number);
        const customerBoxImageExist = customerImages.length > 0 || hasCustomerIcon;
        const leftCardExist = hasBackgroundMedia || hasLogo || leftCardSubtitleExist || leftCardTitleExist || leftCardDescriptionExist || leftCardScrollTextExist || hasScrollIcon || hasIcon;
        const customerBoxExist = customerBoxImageExist || customerBoxDescriptionExist || customerBoxNumberExist;
        const showCustomerBox = customerBoxExist && customerBox.visibility;
        const rightCardExist = hasRightMedia || showCustomerBox;
        const htmlBg = (typeof document !== "undefined" ? getComputedStyle(document.documentElement).getPropertyValue('--composer-html-background') : "") || '#fff';

        const icon = <Base.Media value={leftCard.icon} className={this.decorateCSS("main-icon")} />;

        return(
            <Base.Container ref={this.containerRef} className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("content")}>
                        {leftCardExist && (
                            <div className={this.decorateCSS("left-card")}>
                                {hasBackgroundMedia && (
                                    <div className={this.decorateCSS("pattern-bg")}>
                                        <Base.Media
                                            value={leftCard.backgroundMedia}
                                            className={this.decorateCSS("pattern-image")}
                                        />
                                    </div>
                                )}
                                <div className={this.decorateCSS("left-content-wrapper")}>
                                    {(hasLogo || leftCardSubtitleExist || leftCardTitleExist || leftCardDescriptionExist || hasIcon) && <Base.VerticalContent className={`${this.decorateCSS("left-content")} ${!rightCardExist ? this.decorateCSS("full-width") : ""}`}>
                                        {hasLogo && (
                                        <div className={this.decorateCSS("logo-wrapper")}>
                                            <Base.Media
                                                value={leftCard.logo}
                                                className={`${this.decorateCSS("logo")} ${leftCard.logo.type == "image" ? this.decorateCSS("logo-image") : ""}`}
                                            />
                                        </div>
                                        )}
                                        {leftCardSubtitleExist && (
                                            <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${hasBackgroundMedia ? this.decorateCSS("subtitle-has-image") : ""}`}>
                                                {leftCard.subtitle}
                                            </Base.SectionSubTitle>
                                        )}
                                        {leftCardTitleExist && (
                                            <Base.SectionTitle className={this.decorateCSS("title")}>
                                                {leftCard.title}
                                            </Base.SectionTitle>
                                        )}
                                        {(hasIcon || leftCardDescriptionExist) && (
                                                <div className={`${this.decorateCSS("main-info-wrapper")} ${!rightCardExist ? this.decorateCSS("center-wrapper") : ""}`}>
                                                {dividers.top && (
                                                    <div className={this.decorateCSS("divider-top")}></div>
                                                )}
                                                <div className={this.decorateCSS("main-info")}>
                                                    {hasIcon && (
                                                        <div className={this.decorateCSS("main-icon-container")}>
                                                            {url ? <ComposerLink path={url}>{icon}</ComposerLink> : icon}
                                                        </div>
                                                    )}
                                                    {dividers.middle && (
                                                        <div className={this.decorateCSS("divider-middle")}></div>
                                                    )}
                                                    {leftCardDescriptionExist && (
                                                        <Base.SectionDescription className={this.decorateCSS("description")}>
                                                            {leftCard.description}
                                                        </Base.SectionDescription>
                                                    )}
                                                </div>
                                                {dividers.bottom && (
                                                    <div className={this.decorateCSS("divider-bottom")}></div>
                                                )}
                                            </div>
                                        )}
                                    </Base.VerticalContent>}
                                </div>
                                {(leftCardScrollTextExist || hasScrollIcon) && (
                                    <div
                                    className={this.decorateCSS("scroll-section")}
                                    onClick={this.scrollToNextViewport}
                                    >
                                        {leftCardScrollTextExist && (
                                            <Base.P className={this.decorateCSS("scroll-text")}>
                                                {leftCard.scrollText}
                                            </Base.P>
                                        )}
                                        {hasScrollIcon && (
                                            <div className={this.decorateCSS("scroll-icon-container")}>
                                                <Base.Media
                                                    value={leftCard.scrollIcon}
                                                    className={this.decorateCSS("scroll-icon")}
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                        {rightCardExist && (
                            <div className={leftCardExist ? this.decorateCSS("right-card") : this.decorateCSS("right-card-no-left-card")}>
                                <div className={`${this.decorateCSS("image-container")} ${showCustomerBox ? this.decorateCSS("has-customer-box") : ""}`}>
                                    {hasRightMedia && <div className={this.decorateCSS("image-spacer")} />}
                                    {hasRightMedia && (
                                        <div className={this.decorateCSS("image-wrapper")}>
                                            <Base.Media
                                                value={rightCard.media}
                                                className={this.decorateCSS("image")}
                                            />
                                            {rightCard.overlay && <div className={this.decorateCSS("image-overlay")} />}
                                        </div>
                                    )}
                                    {showCustomerBox && (
                                        <div className={this.decorateCSS("box-area") + (!hasRightMedia ? ` ${this.decorateCSS("full-size")}` : "")}>
                                            <svg className={this.decorateCSS("box-corner-left")}>
                                                <defs>
                                                    <mask id="cutout-topleft">
                                                        <rect width="20" height="20" fill="white" />
                                                        <path d="M 0 0 L 42 0 C 0 0 40 25 0 20 Z" fill="black" />
                                                    </mask>
                                                </defs>
                                                <rect width="25" height="25" fill={htmlBg} mask="url(#cutout-topleft)" />
                                            </svg>
                                            <svg className={this.decorateCSS("box-corner-right")}>
                                                <defs>
                                                    <mask id="cutout-bottomright">
                                                        <rect width="20" height="20" fill="white" />
                                                        <path d="M 0 0 L 42 0 C 0 0 40 25 0 20 Z" fill="black" />
                                                    </mask>
                                                </defs>
                                                <rect width="25" height="25" fill={htmlBg} mask="url(#cutout-bottomright)" />
                                            </svg>
                                            <div className={this.decorateCSS("customer-box")}>
                                                {customerBoxImageExist && <div className={this.decorateCSS("customer-images")}>
                                                    {customerImages.map((image: any, idx: number) => (
                                                        <Base.Media
                                                            key={idx}
                                                            value={image}
                                                            className={this.decorateCSS("customer-img")}
                                                        />
                                                    ))}
                                                    {hasCustomerIcon && (
                                                        <div className={this.decorateCSS("customer-icon-container")}>
                                                            <Base.Media
                                                                value={customerBox.icon}
                                                                className={this.decorateCSS("customer-icon")}
                                                            />
                                                        </div>
                                                    )}
                                                </div>}
                                                {(customerBoxDescriptionExist || customerBoxNumberExist) && <div className={this.decorateCSS("customer-info")}>
                                                    {customerBoxNumberExist && (
                                                        <Base.P className={this.decorateCSS("customer-number")}>
                                                            {customerBox.number}
                                                        </Base.P>
                                                    )}
                                                    {customerBoxDescriptionExist && (
                                                        <Base.P className={this.decorateCSS("customer-desc")}>
                                                            {customerBox.description}
                                                        </Base.P>
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
