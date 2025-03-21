import * as React from "react";
import styles from "./banner3.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBanner } from "../../EditorComponent";
import "animate.css";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";


type CardType = {
    title: React.ReactNode;
    image: string;
    text: string;
};

const stripHtml = (html: string): string => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
};

class Banner3 extends BaseBanner {
    private intervalId: number | null = null;
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "header",
            displayer: "Header",
            value: "We are creative agency that specializes in making customers",
        });
        this.addProp({
            type: "boolean",
            key: "showAnimateText",
            displayer: "Show Animate Text",
            value: true,
        })
        this.addProp({
            type: "array",
            key: "animate-texts",
            displayer: "Animate Texts",
            value: [
                {
                    type: "object",
                    key: "animate-text",
                    displayer: "Animate Text",
                    value: [
                        {
                            type: "string",
                            key: "animateText",
                            displayer: "Animate Text",
                            value: "feel safe",
                        },
                    ]
                }
            ],
        });
        this.addProp({
            type: "array",
            key: "card-items",
            displayer: "Card Items",
            value: [
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "page",
                            key: "link",
                            displayer: "URL",
                            value: "",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "page",
                            key: "link2",
                            displayer: "URL",
                            value: "",
                        },
                        {
                            type: "image",
                            key: "image",
                            displayer: "Background Image",
                            value:
                                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-16-768x768.jpg",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "image",
                            key: "image",
                            displayer: "Background Image",
                            value:
                                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-21-768x768.jpg",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "image",
                            key: "image",
                            displayer: "Background Image",
                            value:
                                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-27-768x768.jpg",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "image",
                            key: "image",
                            displayer: "Background Image",
                            value:
                                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-18-768x768.jpg",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "image",
                            key: "image",
                            displayer: "Background Image",
                            value:
                                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-23-768x768.jpg",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "image",
                            key: "image",
                            displayer: "Background Image",
                            value:
                                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-25-768x768.jpg",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "image",
                            key: "image",
                            displayer: "Background Image",
                            value:
                                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-6-1000x1000.jpg",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "image",
                            key: "image",
                            displayer: "Background Image",
                            value:
                                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-19-768x768.jpg",
                        },
                    ],
                },
                {
                    type: "object",
                    key: "card-item",
                    displayer: "Card Item",
                    value: [
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "Drawing",
                        },
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "Lorem Ipsum Dolor",
                        },
                        {
                            type: "image",
                            key: "image",
                            displayer: "Background Image",
                            value:
                                "https://gradastudio.com/ozark/wp-content/uploads/sites/4/2020/07/portfolio-list-img-22-768x768.jpg",
                        },
                    ],
                },
            ],
        });
        this.addProp({
            type: "number",
            key: "itemCount",
            displayer: "Item Count in a Row",
            value: 3,
        });

        const animateTexts = this.getPropValue("animate-texts");
        const texts = animateTexts.map((item: any) => stripHtml(item.value[0].value as string));

        this.setComponentState("texts", texts.length > 0 ? texts : null);
        this.setComponentState("currentIndex", 0);
        this.setComponentState("currentText", texts.length > 0 ? texts[0] : "");
    }


    startAnimationInterval() {
        const texts = this.state.states.texts as string[];
        if (!texts || texts.length === 0) return;

        this.intervalId = window.setInterval(() => {
            const currentIndex = this.state.states.currentIndex as number;
            const nextIndex = (currentIndex + 1) % texts.length;
            this.setComponentState("currentIndex", nextIndex);
            this.setComponentState("currentText", texts[nextIndex]);
        }, 2000);
    }

    componentDidMount() {
        const animateTexts = this.getPropValue("animate-texts");
        const texts = animateTexts?.map((item: any) => stripHtml(item.value[0].value as string)) || [];
        this.setComponentState("texts", texts.length > 0 ? texts : null);
        this.setComponentState("currentIndex", 0);
        this.setComponentState("currentText", texts.length > 0 ? texts[0] : "");
        this.startAnimationInterval();
    }

    componentDidUpdate() {
        const animateTexts = this.getPropValue("animate-texts");
        const currentTexts = this.state.states.texts as string[] || [];
        const newTexts = animateTexts?.map((item: any) => stripHtml(item.value[0].value as string)) || [];
        const textsChanged = JSON.stringify(newTexts) !== JSON.stringify(currentTexts);

        if (textsChanged) {
            const updatedTexts = newTexts.length > 0 ? newTexts : null;
            this.setComponentState("texts", updatedTexts);
            this.setComponentState("currentIndex", 0);
            this.setComponentState("currentText", newTexts.length > 0 ? newTexts[0] : "");

            if (this.intervalId) {
                window.clearInterval(this.intervalId);
                this.intervalId = null;
            }
            if (newTexts.length > 0) {
                this.startAnimationInterval();
            }
        }
    }

    componentWillUnmount() {
        if (this.intervalId) {
            window.clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    static getName(): string {
        return "Banner 3";
    }

    render() {
        const cardList = this.castToObject<CardType[]>("card-items");
        const header = this.castToString(this.getPropValue("header"));
        const currentText = this.state.states.currentText as string;
        const showAnimateText = this.getPropValue("showAnimateText");
        const alignmentValue = Base.getContentAlignment();

        return (
            <Base.Container
                className={this.decorateCSS("container")}
            >
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {header && (
                        <Base.SectionTitle
                            className={`${this.decorateCSS("header-title")} ${alignmentValue === "center"
                                ? this.decorateCSS("center")
                                : this.decorateCSS("left")
                                }`}
                        >
                            {this.getPropValue("header")}{" "}
                            {currentText && showAnimateText && (
                                <span
                                    className={this.decorateCSS("animated-text")}
                                    key={currentText}
                                >
                                    {currentText}
                                </span>
                            )}

                        </Base.SectionTitle>
                    )
                    }
                    {
                        cardList.length > 0 && (
                            <Base.ListGrid
                                className={this.decorateCSS("grid")}
                                gridCount={{ pc: this.getPropValue("itemCount") }}
                            >
                                {cardList.map((cardItem: any, index: number) => (
                                    <div className={this.decorateCSS("item-box")} key={index}>
                                        <div
                                            className={this.decorateCSS("item-container")}
                                            style={{ backgroundImage: `url(${cardItem.image})` }}
                                        >
                                            <div className={this.decorateCSS("overlay-content")}>
                                                <ComposerLink
                                                    path={cardItem.link}
                                                    className={this.decorateCSS("home-link")}
                                                >
                                                    {this.castToString(cardItem.title) && (
                                                        <div
                                                            className={this.decorateCSS("card-item-value-h1")}
                                                        >
                                                            {cardItem.title}
                                                        </div>
                                                    )}
                                                </ComposerLink>
                                                <ComposerLink
                                                    path={cardItem.link2}
                                                    className={this.decorateCSS("home-link")}
                                                >
                                                    {this.castToString(cardItem.text) && (
                                                        <div
                                                            className={this.decorateCSS("card-item-value-p")}
                                                        >
                                                            {cardItem.text}
                                                        </div>
                                                    )}
                                                </ComposerLink>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Base.ListGrid>
                        )
                    }
                </Base.MaxContent >
            </Base.Container >
        );
    }
}

export default Banner3;

