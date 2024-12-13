import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery7.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

type CardItemType = {
    image: string;
    title: JSX.Element;
    subtitle: JSX.Element;
};
class ImageGallery7 extends BaseImageGallery {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "number",
            key: "imageCountInitial",
            displayer: "Image Count Initial",
            value: 8
        })
        this.addProp({
            type: "number",
            key: "imageCount",
            displayer: "More Image Count",
            value: 4
        })
        this.addProp({
            type: "array",
            key: "gallery",
            displayer: "Gallery",
            value:
                [
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c2d0d0655f8002ca6dad1?alt=media&timestamp=1734094112147",
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Dubai",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Summer, Fashion"
                            }
                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c2d2d0655f8002ca6daf4?alt=media&timestamp=1734094145907",
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Cosmoso",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Architecture"
                            },
                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c2d550655f8002ca6db3b?alt=media&timestamp=1734094182919",
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Ron Mcclenny",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Portraits, Summer"
                            },
                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c2d7c0655f8002ca6db42?alt=media&timestamp=1734094223567",
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Curitiba Brasil",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Architecture, Interior"
                            },
                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c2d9f0655f8002ca6db69?alt=media&timestamp=1734094256821",
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "John Doe",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Architecture, Interior"
                            },
                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c2dc00655f8002ca6db98?alt=media&timestamp=1734094291093",
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Creme",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Architecture, Interior"
                            }
                        ]
                    }
                    ,
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c2de10655f8002ca6dba8?alt=media&timestamp=1734094324297"
                                ,
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Dublin",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Brutalism, Portraits"
                            }
                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c2e050655f8002ca6dbd2?alt=media&timestamp=1734094360089"

                                ,
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Annie Spratt",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Portraits Summer"
                            }
                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c2e3b0655f8002ca6dbf8?alt=media&timestamp=1734094413798"

                                ,
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Ulitsa",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Brutalism, Portraits"
                            },


                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c2e620655f8002ca6dc0b?alt=media&timestamp=1734094452773"

                                ,
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Brabant",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Summer, Fashion"
                            },

                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c2e820655f8002ca6dc11?alt=media&timestamp=1734094483852"

                                ,
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Snowy Swiss Alps",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Summer, Fashion"
                            },

                        ]
                    },
                    {
                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            {
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c2ea50655f8002ca6dc16?alt=media&timestamp=1734094518981"

                                ,
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "National Aquarium Dubai",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
                                value: "Brutalism, Portraits"
                            }
                        ]
                    }
                ]
        });
        this.addProp({
            type: "string",
            key: "buttonText",
            displayer: "Button Text",
            value: "Load More"
        })

        this.setComponentState("scroll", 0);
        this.handleScroll = this.handleScroll.bind(this);
        this.setComponentState("moreImages", 0);
    }


    getName(): string {
        return "Image Gallery 7";
    }
    private timeoutId: NodeJS.Timeout | null = null;
    private scrollOffset: number = 0;
    private previousScrollY: number = 0;
    debounce(func: Function, wait: number) {
        return (...args: any[]) => {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                func(...args);
            }, wait);
        };
    }

    handleScroll = (event: any): void => {
        const currentScrollY = event.target.scrollTop;
        const contentClass = this.decorateCSS("columnOdd");
        const columns = document.querySelectorAll(`.${contentClass}`);

        if (currentScrollY === 0) {
            this.scrollOffset = 0;
        } else if (currentScrollY > this.previousScrollY) {
            this.scrollOffset += 10;
        } else {
            this.scrollOffset = Math.max(0, this.scrollOffset - 10);
        }
        columns.forEach((column) => {
            (column as HTMLElement).style.transform = `translateY(-${this.scrollOffset}px)`;
        });
        this.previousScrollY = currentScrollY;

    }

    debouncedHandleScroll = this.debounce(this.handleScroll, 12);
    handleButtonClick = () => {
        this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getPropValue("imageCount"))

    };

    render() {
        const gallery = this.castToObject<CardItemType[]>("gallery");
        if (this.getComponentState("imageCount") != this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"))
            this.setComponentState("imageCount", this.getPropValue("imageCountInitial") + this.getComponentState("moreImages"));
        return (
            <Base.Container className={this.decorateCSS("container")} onScroll={this.debouncedHandleScroll}>
                <Base.MaxContent className={this.decorateCSS("maxContent")}>
                    <Base.ListGrid gridCount={{ pc: 4, tablet: 1, phone: 1 }} className={this.decorateCSS("gridContainer")} >
                        {gallery.slice(0, this.getComponentState("imageCount")).map((cards: CardItemType, columnIndex: number) => {
                            const isEven = (columnIndex) % 2 !== 0;
                            const columnClass = isEven ? "columnEven" : "columnOdd";
                            const style = isEven ? null : { transform: `translateY(-${this.scrollOffset}px)` };
                            return (
                                <div className={`${this.decorateCSS("column")} ${this.decorateCSS(columnClass)}`}
                                    style={style}>
                                    <div className={this.decorateCSS("wrapper")}>
                                        {(this.castToString(cards.title) || this.castToString(cards.subtitle) || cards.image) &&
                                            <div className={this.decorateCSS("card")}>
                                                {cards.image && (
                                                    <img src={cards.image} alt={cards.image} className={this.castToString(cards.title) || this.castToString(cards.subtitle) ? this.decorateCSS("image") : this.decorateCSS("full-image")} />
                                                )}
                                                {(this.castToString(cards.title) || this.castToString(cards.subtitle)) && (
                                                    <div className={this.decorateCSS("textContainer")}>
                                                        {this.castToString(cards.title) && (
                                                            <div className={this.decorateCSS("title")}>{cards.title}</div>
                                                        )}
                                                        {this.castToString(cards.subtitle) && (
                                                            <div className={this.decorateCSS("subtitle")}>{cards.subtitle}</div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        }
                                    </div>
                                </div>
                            );
                        })}
                    </Base.ListGrid>
                    {(this.getComponentState("imageCount") <= gallery.length) && (
                        <div className={this.decorateCSS("button-wrapper")}>
                            <Base.Button className={this.decorateCSS("button")} onClick={this.handleButtonClick} >{this.getPropValue("buttonText")}</Base.Button>
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}
export default ImageGallery7;