import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials14.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

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
                            value: "https://media-hosting.imagekit.io/2860930fc04f447e/d65d9f5e3f90cd91c2315ed717b45988111119a5.jpg?Expires=1841297059&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g02v-6MPV3OSYGqJ8E587WuiRRmJqXoQjm2Kg5vbtMTiGR1fpwE~emWIxg6g52X2EqQHsHB2x5BIWhEr9aMdLuj9qah75J71mXa26rXOh5abFqYPV~MRpitGKU4Uy~i~tJ1fccOJfaZmiTaa7pAZrjJ09pGp~BWxIRlsyueq6-i0YLqaGyYr8qbDxbFj2PjxKeswkCHMrGyU4Zid7lulzL6jlmELHkG03xACeG1tDvNBmX~WpDxQ7kQyVzzdvojC7vm-ELy4SG-2qj7SBhFj9BLv73j8QE7~9ECV9xn~tym217ST-ZiGR57Ckr~PYVhFlpPSFDrUtb61W~3c~HTASg__"
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
                            value: "https://media-hosting.imagekit.io/b218a9f4fb8d4abf/cc05c1766155fcfdea32d27701fd197ef857396b.jpg?Expires=1841298396&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=CXP5uXJMNgUO3xBX8cSjMK~voTViiLeFYYyXfQJqticb1XSrKl3z43-3rAT36XBMlawzYD6xhBRMiJX-~bXcvYhd3gh3EJ~~cvYYzdseKqzW8ziDAjJ0tDvEyl75Lax2i6hOZpnVgR6Qc~wqd19rDen~rxF3i3qnJfHBet0oC739oWO8Xr~Cw03EAAU4YTKARlv3wFIgoqPdbZV-ugx5KsGo3OIJjBdzJX0DSrG7sqeQ-FB2GsePudEDb6zPFVIhLjkOOd6ggC-l~OuBeUjxSb1tKU3HgrbcSGb~GUjDbAnMuow6OYCnv6NMeKvXOub0YdRDNDcVNNWT-6DV8zacAQ__"
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
                            value: "https://media-hosting.imagekit.io/2b002f2c03554b0b/7faa8eff28d75cfc3c2eff6d2ad901012205d91f.jpg?Expires=1841298399&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EJDz~PRufujcaRQiZRsYuoH97cKJB6Xvls6lKjda0gfwkFRMcU7b~LWmxjJlfIvNLX9gIo8g95y6ubayADsy7vj1WIsYEyNBjC9tUhj9MTjzYmF8vKdBVpri~sKLn-mmGA0e-GhH4AMptZdkejm65tahtyJJM3b59Ns4Uzypd3W9qVjdLwRfTENsAN39rbz4H~gACQ6qo3aGoVuBzk68EFhgcZAJeSaGXj2rpXEXyoASQ8VTB71kq8D8ysVUpZlocJW9DYYzutlWTPuVjD1fCtO~Zoc7ohpe0SvRMDPh4-LJkkmYylN~QlpUW6y99nvn5UiyMFWigofYXy-ugE1pNg__"
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
                            value: "https://media-hosting.imagekit.io/7af961b2a1554675/6037051f27a19eb24d899bd4ba53d5c3de6d1abd.jpg?Expires=1841298404&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pQUplM6AYSfGWJvWMUeNoHvWDWMaAM4~XkMecLsXRARFjACZv2aOeTk8x0jqFzgoph9apDGRjkd9HtuuDVTqzXrH0VmRmiMW3MS51M-kSO7EA0UHVncluTqAs6Mb98NkENljWdS~qa8VLhau7QQ655GPl63WRCev5sbx5vPRHQG5R8uid0VJy7~rIZuZdc8jw67xySsI6zJ0tJDxeLqxiUZVgwWIJOGQXDGhqaiU8a2sRbUj6ok2bIFIlFKabkwAipcXF2e27FanqR6sLbW3r7LmtcW4wxxt7HpEiJO2-rs86YgV22eh3ixAbPZQ~XVjaOw6g0Kci1n67xAXMH42IA__"
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
                                        <ComposerIcon
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
                                    <ComposerIcon
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
                                    <ComposerIcon
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