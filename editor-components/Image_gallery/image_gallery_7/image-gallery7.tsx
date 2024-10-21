import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery7.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type CardItemType = {
    image: string;
    title: JSX.Element;
    subtitle: JSX.Element;
};



class ImageGallery7 extends BaseImageGallery {


    constructor(props?: any) {
        super(props, styles);

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
        this.setComponentState("scroll", 0);
        this.handleScroll = this.handleScroll.bind(this);
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
        const contentClass = this.decorateCSS("column-even");
        const columns = document.querySelectorAll(`.${contentClass}`);
        console.log(`Scroll event triggered, columns moved by ${this.scrollOffset}px!`);
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

    render() {
        const gallery = this.castToObject<CardItemType[]>("gallery");
        const scrollY = this.getComponentState("scroll");
        return (
            <div className={this.decorateCSS("imageGallery7")} onScroll={this.debouncedHandleScroll}>
                <div className={this.decorateCSS("content")}>
                    {gallery.map((cards: CardItemType, columnIndex: number) => {
                        const isOdd = columnIndex % 2 !== 0;
                        const columnClass = isOdd ? "column-odd" : "column-even";
                        const image = cards.image;
                        const title = this.castToString(cards.title);
                        const subtitle = this.castToString(cards.subtitle);
                        const translateY = (columnIndex === 1 || columnIndex === 3) ? -scrollY * 0.5 : 0;
                        return (
                            <div
                                key={columnIndex}
                                className={`${this.decorateCSS("column")} ${this.decorateCSS(columnClass)}`}
                                style={{ transform: `translateY(${translateY}px)` }}
                            >
                                <div key={columnIndex} className={this.decorateCSS("wrapper")}>
                                    {(title || subtitle) &&
                                        <div
                                            className={this.decorateCSS("card")}
                                        >
                                            <img src={image} alt={title} className={this.decorateCSS("image")} />
                                            <div className={this.decorateCSS("text-container")}>
                                                <div className={this.decorateCSS("title")}>{title}</div>
                                                <div className={this.decorateCSS("subtitle")}>{subtitle}</div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default ImageGallery7;