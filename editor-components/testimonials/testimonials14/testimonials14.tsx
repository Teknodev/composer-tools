import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials14.module.scss";
import { Base } from "../../../composer-base-components/base/base";


interface Images {
    authorName: string;
    authorImage: string;
    icon: string;
    comment: string;
}

interface ArrowItem {
    nextArrow: string;
    prevArrow: string;
}

class Testimonials14 extends Testimonials {
    private autoplayInterval: NodeJS.Timeout | null = null;
    private readonly autoplaySpeed: number = 3000;

    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "array",
            key: "images",
            displayer: "Images",
            value: [
                {
                    type: "object",
                    key: "image",
                    displayer: "Image",
                    value: [
                        {
                            type: "image",
                            key: "authorImage",
                            displayer: "User Image",
                            value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/682c7b9e2bb4c4002cf86e1b?alt=media"
                        },
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "Icon",
                            value: "RiDoubleQuotesL"
                        },
                        {
                            type: "string",
                            key: "authorName",
                            displayer: "Name",
                            value: "Hugh G."
                        },
                        {
                            type: "string",
                            key: "comment",
                            displayer: "Comment",
                            value: "Can you imagine if my grandma could send me crypto? It's that easy!"
                        }
                    ]
                },
                {
                    type: "object",
                    key: "image",
                    displayer: "Image",
                    value: [
                        {
                            type: "image",
                            key: "authorImage",
                            displayer: "User Image",
                            value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/682c3b222bb4c4002cf8257e?alt=media"
                        },
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "Icon",
                            value: "RiDoubleQuotesL"
                        },
                        {
                            type: "string",
                            key: "authorName",
                            displayer: "Name",
                            value: "Moni C."
                        },
                        {
                            type: "string",
                            key: "comment",
                            displayer: "Comment",
                            value: "My dog can't use a phone, but even he could send me crypto with this app."
                        }
                    ]
                },
                {
                    type: "object",
                    key: "image",
                    displayer: "Image",
                    value: [
                        {
                            type: "image",
                            key: "authorImage",
                            displayer: "User Image",
                            value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/682c3b402bb4c4002cf825bb?alt=media"
                        },
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "Icon",
                            value: "RiDoubleQuotesL"
                        },
                        {
                            type: "string",
                            key: "authorName",
                            displayer: "Name",
                            value: "Lampard F."
                        },
                        {
                            type: "string",
                            key: "comment",
                            displayer: "Comment",
                            value: "Grandpa just sent me Bitcoin between bingo rounds. It's really that simple."
                        }
                    ]
                },
                {
                    type: "object",
                    key: "image",
                    displayer: "Image",
                    value: [
                        {
                            type: "image",
                            key: "authorImage",
                            displayer: "User Image",
                            value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/682c3b5a2bb4c4002cf8272a?alt=media"
                        },
                        {
                            type: "icon",
                            key: "icon",
                            displayer: "Icon",
                            value: "RiDoubleQuotesL"
                        },
                        {
                            type: "string",
                            key: "authorName",
                            displayer: "Name",
                            value: "Rooney W."
                        },
                        {
                            type: "string",
                            key: "comment",
                            displayer: "Comment",
                            value: "No tech skills? No problem. If you can text, you can send crypto."
                        }
                    ]
                },
            ]
        });
        this.addProp({
            type: "object",
            key: "arrows",
            displayer: "Arrows",
            value: [
                {
                    type: "icon",
                    key: "prevArrow",
                    displayer: "Prev Icon",
                    value: "SlArrowLeft",
                },
                {
                    type: "icon",
                    key: "nextArrow",
                    displayer: "Next Icon",
                    value: "SlArrowRight",
                },
            ],
        });
        this.addProp({
            type: "boolean",
            key: "divider",
            displayer: "Divider",
            value: true,
        });
        this.addProp({
            type: "boolean",
            key: "dividerTop",
            displayer: "Divider Top",
            value: true,
        });
        this.addProp({
            type: "boolean",
            key: "dividerBottom",
            displayer: "Divider Bottom",
            value: true,
        });
        this.addProp({
            type: "boolean",
            key: "textAnimation",
            displayer: "Text Animation",
            value: true,
        });

        this.setComponentState("activeIndex", 0);
        this.setComponentState("contentAnimationClass", "animate__fadeIn");
    }

    static getName(): string {
        return "Testimonials 14";
    }

    componentDidMount() {
        this.startAutoplay();
    }

    componentWillUnmount() {
        this.stopAutoplay();
    }

    startAutoplay = () => {
        const images = this.castToObject<Images[]>("images");
        if (images.length > 1 && this.autoplaySpeed > 0) {
            this.autoplayInterval = setInterval(this.goToNext, this.autoplaySpeed);
        }
    };

    stopAutoplay = () => {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    };

    private updateActiveIndexWithAnimation = (newIndex: number) => {
        const textAnimation = this.getPropValue("textAnimation");
        this.stopAutoplay();
        if (textAnimation) {
            this.setComponentState("contentAnimationClass", "animate__fadeOut");
            setTimeout(() => {
                this.setComponentState("activeIndex", newIndex);
                this.setComponentState("contentAnimationClass", "animate__fadeIn");
                this.startAutoplay();
            }, 750);
        } else {
            this.setComponentState("activeIndex", newIndex);
            this.startAutoplay();
        }
    };

    onImageClick = (index: number) => {
        this.updateActiveIndexWithAnimation(index);
    };

    goToPrev = () => {
        const images = this.castToObject<Images[]>("images");
        const activeIndex = this.getComponentState("activeIndex");
        const prevIndex = (activeIndex - 1 + images.length) % images.length;
        this.updateActiveIndexWithAnimation(prevIndex);
    };

    goToNext = () => {
        const images = this.castToObject<Images[]>("images");
        const activeIndex = this.getComponentState("activeIndex");
        const nextIndex = (activeIndex + 1) % images.length;
        this.updateActiveIndexWithAnimation(nextIndex);
    };

    render() {
        const images = this.castToObject<Images[]>("images");
        const arrows = this.castToObject<ArrowItem>("arrows");
        const showDivider = this.getPropValue("divider");
        const showDividerTop = this.getPropValue("dividerTop");
        const showDividerBottom = this.getPropValue("dividerBottom");
        const activeIndex = this.getComponentState("activeIndex");
        const textAnimation = this.getPropValue("textAnimation");
        const animationClass = textAnimation ? `animate__animated ${this.getComponentState("contentAnimationClass")}` : "";

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {showDividerTop && (
                        <div className={this.decorateCSS("divider-top")} />
                    )}
                    <div className={this.decorateCSS("content")}>
                        {images.length > 0 && (
                            <div className={this.decorateCSS("images")}>
                                {images.map((item: Images, itemIndex: number) => (
                                    item.authorImage && (
                                        <img
                                            key={itemIndex}
                                            src={item.authorImage}
                                            className={`${this.decorateCSS("image")}
                                                ${activeIndex === itemIndex ? this.decorateCSS("active") : ""}`}
                                            onClick={() => this.onImageClick(itemIndex)}
                                        />
                                    )
                                ))}
                            </div>
                        )}
                        {showDivider && (
                            <div className={this.decorateCSS("divider")} />
                        )}
                        <div className={this.decorateCSS("item-content")}>
                            <div key={activeIndex}
                                className={`${this.decorateCSS("items")} ${animationClass}`}>
                                <div className={this.decorateCSS("icon-and-name")}>
                                    {images[activeIndex].icon ? (
                                        <Base.Icon
                                            name={images[activeIndex].icon}
                                            propsIcon={{
                                                className: this.decorateCSS("icon"),
                                            }}
                                        />
                                    ) : (<span className={this.decorateCSS("span-icon")} />)}
                                    {this.castToString(images[activeIndex].authorName) && (
                                        <Base.SectionTitle className={this.decorateCSS("author-name")}>
                                            {images[activeIndex].authorName}
                                        </Base.SectionTitle>
                                    )}
                                </div>
                                {this.castToString(images[activeIndex].comment) && (
                                    <Base.SectionDescription className={this.decorateCSS("comment")}>
                                        {images[activeIndex].comment}
                                    </Base.SectionDescription>
                                )}
                            </div>
                        </div>
                        <div className={this.decorateCSS("arrow-container")}>
                            {arrows.prevArrow && images.length > 1 && (
                                <button
                                    className={this.decorateCSS("prevArrow")}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        this.goToPrev();
                                    }}>
                                    <Base.Icon
                                        name={arrows.prevArrow}
                                        propsIcon={{ className: this.decorateCSS("arrow") }}
                                    />
                                </button>
                            )}
                            {arrows.nextArrow && images.length > 1 && (
                                <button
                                    className={this.decorateCSS("nextArrow")}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        this.goToNext();
                                    }}>
                                    <Base.Icon
                                        name={arrows.nextArrow}
                                        propsIcon={{
                                            className: this.decorateCSS("arrow"),
                                        }}
                                    />
                                </button>
                            )}
                        </div>
                    </div>
                    {showDividerBottom && (
                        <div className={this.decorateCSS("divider-bottom")} />
                    )}
                </Base.MaxContent >
            </Base.Container >
        );
    }
}

export default Testimonials14;