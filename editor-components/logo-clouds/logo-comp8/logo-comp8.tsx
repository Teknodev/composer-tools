import * as React from "react";
import { LogoClouds, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./logo-comp8.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type Items = {
    image: TypeMediaInputValue;
    page: string;
};

class LogoComp8Page extends LogoClouds {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "string",
            key: "text",
            displayer: "Text",
            value: "indie games studio",
        });
        this.addProp({
            type: "number",
            key: "slide-count",
            displayer: "Item Count in a Row",
            value: 5,
        });
        this.addProp({
            type: "array",
            key: "platforms",
            displayer: "Platforms",
            value: [
                {
                    type:"object",
                    key: "platform",
                    displayer: "Platform",
                    value: [
                        {
                            type:"media",
                            key: "image",
                            displayer: "Image",
                            additionalParams: {
                                availableTypes: ["image"],
                            },
                            value:{
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689ef4c136675f002dbc777b?alt=media",
                            },
                        },
                        {
                            type: "page",
                            key: "page",
                            displayer: "Navigate To",
                            value: "",
                        },
                    ],
                },
                {
                    type:"object",
                    key: "platform",
                    displayer: "Platform",
                    value: [
                        {
                            type:"media",
                            key: "image",
                            displayer: "Image",
                            additionalParams: {
                                availableTypes: ["image"],
                            },
                            value:{
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689dfcd236675f002dbc47ca?alt=media",
                            },
                        },
                        {
                            type: "page",
                            key: "page",
                            displayer: "Navigate To",
                            value: "",
                        },
                    ],
                },
                {
                    type:"object",
                    key: "platform",
                    displayer: "Platform",
                    value: [
                        {
                            type:"media",
                            key: "image",
                            displayer: "Image",
                            value:{
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689dfd1436675f002dbc47f9?alt=media",
                            },
                        },    
                        {
                            type: "page",
                            key: "page",
                            displayer: "Navigate To",
                            value: "",
                        },
                    ],
                },
                {
                    type:"object",
                    key: "platform",
                    displayer: "Platform",
                    value: [
                        {
                            type:"media",
                            key: "image",
                            displayer: "Image",
                            additionalParams: {
                                availableTypes: ["image"],
                            },
                            value:{
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689dfd3936675f002dbc481c?alt=media",
                            },
                        },
                        {
                            type: "page",
                            key: "page",
                            displayer: "Navigate To",
                            value: "",
                        },
                    ],
                },
                {
                    type:"object",
                    key: "platform",
                    displayer: "Platform",
                    value: [
                        {
                            type:"media",
                            key: "image",
                            displayer: "Image",
                            additionalParams: {
                                availableTypes: ["image"],
                            },
                            value:{
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689dfd6436675f002dbc487b?alt=media",
                            },
                        },
                        {
                            type: "page",
                            key: "page",
                            displayer: "Navigate To",
                            value: "",
                        },
                    ],
                },
            ],
        });

        this.setComponentState(
            "prevSlide",
            this.castToObject<Items[]>("platforms").length -1
        );
        this.setComponentState("slider-ref", React.createRef());
        this.setComponentState("active", 0);
        this.setComponentState("activeSlideIndex", 0);
    }

    static getName(): string {
        return "Logo Cloud 8";
    }

    render() {
        const originalPlatforms = this.castToObject<Items[]>("platforms").filter(
            (platform: Items) => 
                platform.image || platform.page
        );
        const platforms = [...originalPlatforms, ...originalPlatforms];
        const settings = {
            arrows:false,
            dots: false,
            infinite: true,
            speed: 725,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: Math.min(originalPlatforms.length, this.getPropValue("slide-count")) || 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        arrows: false,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    },
                },

                {
                    breakpoint: 500,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
            ],
            beforeChange: (current: number, next: number) => {
                this.setComponentState("active", next);
                this.setComponentState("activeSlideIndex", next);
            },
        };

        const text = this.getPropValue("text");
        const isTextExist = this.castToString(text);
        const sliderRef = this.getComponentState("slider-ref");

        return(
            <Base.Container className={this.decorateCSS("container")}>  
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {isTextExist && (
                        <div className={this.decorateCSS("background-text")}>
                            <div className={this.decorateCSS("text")}>
                                {text}
                            </div>
                        </div>
                    )}
                    <div className={this.decorateCSS("platforms-wrapper")}>
                        {platforms.length > 0 && (
                            <ComposerSlider
                                ref={sliderRef}
                                {...settings}
                                className={this.decorateCSS("platforms-carousel")}
                            >
                                {platforms.map((platform: Items, index: number) => (
                                    <div className={`${this.decorateCSS("platform-slide")} ${
                                        this.getComponentState("prevSlide") == index
                                            ? this.decorateCSS("prevSlide") 
                                            : ""
                                        } ${
                                            this.getComponentState("nextSlide") == index
                                                ? this.decorateCSS("nextSlide")
                                                : ""
                                        }`}
                                        key={index}
                                    >
                                        <div className={this.decorateCSS("platform-item")}>
                                            {platform.page? (
                                                <ComposerLink path={platform.page}>
                                                    <div className={this.decorateCSS("platform-content")}>
                                                    <Base.Media
                                                        value={platform.image as any}
                                                        className={this.decorateCSS("platform-logo")}
                                                    />
                                                    </div>    
                                                </ComposerLink>
                                            ) : (
                                                <div
                                                    className={this.decorateCSS("platform-content")}>
                                                        <Base.Media
                                                            value={platform.image as any}
                                                            className={this.decorateCSS("platform-logo")}
                                                        />
                                                </div> 
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </ComposerSlider>    
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        )
    }
}
export default LogoComp8Page;
