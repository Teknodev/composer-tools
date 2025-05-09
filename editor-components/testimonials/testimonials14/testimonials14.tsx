import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials14.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
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
        })
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
        })
        this.setComponentState("active_index", 0);
        this.setComponentState("slider-ref", React.createRef());
    }

    static getName(): string {
        return "Testimonials 14";
    }

    onImageClick(itemIndex: number) {
        this.setComponentState("active_index", itemIndex);
        this.getComponentState("slider-ref").current.slickGoTo(itemIndex);
    }

    render() {
        const images = this.castToObject<Images[]>("images");
        const arrows = this.castToObject<ArrowItem>("arrows");
        const sliderRef = this.getComponentState("slider-ref");
        const showDivider = this.getPropValue("divider");

        const settings = {
            dots: false,
            infinite: true,
            arrows: false,
            speed: 1500,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            fade: true,
            beforeChange: (nextIndex: number) => {
                this.setComponentState("active_index", nextIndex);
            },
        };

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {images.length > 0 && (
                        <div className={this.decorateCSS("images")}>
                            {images.map((item: Images, itemIndex: number) => {
                                return item.authorImage && (
                                    <img
                                        src={item.authorImage}
                                        className={`${this.decorateCSS("image")} ${this.getComponentState("active_index") === itemIndex ? this.decorateCSS("active") : ""}`}
                                        onClick={() => this.onImageClick(itemIndex)}
                                        alt={`${item.authorName}`}
                                    />
                                );
                            })}
                        </div>
                    )}
                    {showDivider && (
                        <div className={this.decorateCSS("divider")} />
                    )}
                    <div className={this.decorateCSS("content")}>
                        <ComposerSlider {...settings} ref={sliderRef}>
                            {images.map((item: Images, index: number) => {
                                return (
                                    <div className={this.decorateCSS("items")}>
                                        <div className={this.decorateCSS("icon-and-name")}>
                                            {item.icon && (
                                                <ComposerIcon
                                                    name={item.icon}
                                                    propsIcon={{
                                                        className: this.decorateCSS("icon"),
                                                    }}
                                                />
                                            )}
                                            {this.castToString(item.authorName) && (
                                                <Base.SectionTitle className={this.decorateCSS("author-name")}>
                                                    {item.authorName}
                                                </Base.SectionTitle>
                                            )}
                                        </div>
                                        {this.castToString(item.comment) && (
                                            <Base.SectionDescription className={this.decorateCSS("comment")}>
                                                {item.comment}
                                            </Base.SectionDescription>
                                        )}
                                    </div>
                                )
                            })}
                        </ComposerSlider>
                    </div>
                    <div className={this.decorateCSS("arrow-container")}>
                        {arrows.prevArrow && images.length > 1 && (
                            <button
                                className={this.decorateCSS("prevArrow")}
                                onClick={() => {
                                    sliderRef.current.slickPrev();
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
                                onClick={() => {
                                    sliderRef.current.slickNext();
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
                </Base.MaxContent >
            </Base.Container >
        )
    }
}

export default Testimonials14;