import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery7.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type CardItemType = {
    image: string;
    title: React.JSX.Element;
    subtitle: React.JSX.Element;
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
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669dfff22f8a5b002ce60115?alt=media",
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
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00122f8a5b002ce60121?alt=media",
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
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e003a2f8a5b002ce6012d?alt=media",
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
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e005b2f8a5b002ce60139?alt=media",
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
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00772f8a5b002ce60145?alt=media",
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
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00952f8a5b002ce60151?alt=media",
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
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00ba2f8a5b002ce6015d?alt=media"
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
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00d52f8a5b002ce60169?alt=media"

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
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00f72f8a5b002ce60175?alt=media"

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
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e01132f8a5b002ce60181?alt=media"

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
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00122f8a5b002ce60121?alt=media"

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
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e01732f8a5b002ce6018d?alt=media"

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
        this.addProp(INPUTS.BUTTON("button", "Button", "Load More", null, null, null, "Primary"));

        this.setComponentState("scroll", 0);
        this.handleScroll = this.handleScroll.bind(this);
        this.setComponentState("moreImages", 0);
    }


    static getName(): string {
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

        const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

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
                                                    <img src={cards.image} alt={cards.image}
                                                        className={this.decorateCSS("image")} />
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
                            <Base.Button className={this.decorateCSS("button")} buttonType={button.type} onClick={this.handleButtonClick}>
                                {button.text}
                            </Base.Button>
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}
export default ImageGallery7;