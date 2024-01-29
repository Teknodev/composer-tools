import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header12.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";


//Left Slider
type LeftSlider = {
    imageLeft: string;
    iconLeft: string;
    textLeft: string;
}

//Right Slider
type RightSlider = {
    imageRight: string;
    iconRight: string;
    textRight: string;
}

//CLASS
class Header12 extends BaseHeader {

    //constructor
    constructor(props?: any) {
        super(props, styles);

        // SLIDER LEFT
        this.addProp({
            type: "array",
            key: "carouselCollection1",
            displayer: "Carousel Left",
            value: [
                {
                    type: "object",
                    key: "carouselObject",
                    displayer: "Carousel Object",
                    value: [
                        {
                            type: "image",
                            key: "imageLeft",
                            displayer: "image Left",
                            value: "https://demo-storage.com/pm/wp/aurel/dark/wp-content/uploads/2017/11/masonry15-1.jpg",
                        },
                        {
                            type: "image",
                            key: "iconLeft",
                            displayer: "icon Left",
                            value: "https://cdn-icons-png.flaticon.com/512/656/656979.png",
                        },
                        {
                            type: "string",
                            key: "textLeft",
                            displayer: "Text Left",
                            value: "Autumn Stuff",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "carouselObject",
                    displayer: "Carousel Object",
                    value: [
                        {
                            type: "image",
                            key: "imageLeft",
                            displayer: "image Left",
                            value: "https://demo-storage.com/pm/wp/aurel/dark/wp-content/uploads/2017/11/masonry18.jpg",
                        },
                        {
                            type: "image",
                            key: "iconLeft",
                            displayer: "icon Left",
                            value: "https://cdn-icons-png.flaticon.com/512/656/656979.png",
                        },
                        {
                            type: "string",
                            key: "textLeft",
                            displayer: "Text Left",
                            value: "Breakfast",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "carouselObject",
                    displayer: "Carousel Object",
                    value: [
                        {
                            type: "image",
                            key: "imageLeft",
                            displayer: "image Left",
                            value: "https://demo-storage.com/pm/wp/aurel/dark/wp-content/uploads/2017/11/book_on_leaves.jpg",
                        },
                        {
                            type: "image",
                            key: "iconLeft",
                            displayer: "icon Left",
                            value: "https://cdn-icons-png.flaticon.com/512/656/656979.png",
                        },
                        {
                            type: "string",
                            key: "textLeft",
                            displayer: "Text Left",
                            value: "The Notebook",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "carouselObject",
                    displayer: "Carousel Object",
                    value: [
                        {
                            type: "image",
                            key: "imageLeft",
                            displayer: "image Left",
                            value: "https://demo-storage.com/pm/wp/aurel/dark/wp-content/uploads/2017/11/masonry05.jpg",
                        },
                        {
                            type: "image",
                            key: "iconLeft",
                            displayer: "icon Left",
                            value: "https://cdn-icons-png.flaticon.com/512/656/656979.png",
                        },
                        {
                            type: "string",
                            key: "textLeft",
                            displayer: "Text Left",
                            value: "Little Pumpkin",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "carouselObject",
                    displayer: "Carousel Object",
                    value: [
                        {
                            type: "image",
                            key: "imageLeft",
                            displayer: "image Left",
                            value: "https://demo-storage.com/pm/wp/aurel/dark/wp-content/uploads/2017/11/masonry13.jpg",
                        },
                        {
                            type: "image",
                            key: "iconLeft",
                            displayer: "icon Left",
                            value: "https://cdn-icons-png.flaticon.com/512/656/656979.png",
                        },
                        {
                            type: "string",
                            key: "textLeft",
                            displayer: "Text Left",
                            value: "Autumn Evening",
                        },
                    ]
                },
            ]
        })

        // SLIDER RIGHT
        this.addProp({
            type: "array",
            key: "carouselCollection2",
            displayer: "Carousel Right",
            value: [
                {
                    type: "object",
                    key: "carouselObject",
                    displayer: "Carousel Object",
                    value: [
                        {
                            type: "image",
                            key: "imageRight",
                            displayer: "image Right",
                            value: "https://demo-storage.com/pm/wp/aurel/dark/wp-content/uploads/2017/11/food_drink04.jpg",
                        },
                        {
                            type: "image",
                            key: "iconRight",
                            displayer: "icon Right",
                            value: "https://cdn-icons-png.flaticon.com/512/656/656979.png",
                        },
                        {
                            type: "string",
                            key: "textRight",
                            displayer: "Text Right",
                            value: "Pumpkin Pie",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "carouselObject",
                    displayer: "Carousel Object",
                    value: [
                        {
                            type: "image",
                            key: "imageRight",
                            displayer: "image Right",
                            value: "https://demo-storage.com/pm/wp/aurel/dark/wp-content/uploads/2017/11/coffee.jpg",
                        },
                        {
                            type: "image",
                            key: "iconRight",
                            displayer: "icon Right",
                            value: "https://cdn-icons-png.flaticon.com/512/656/656979.png",
                        },
                        {
                            type: "string",
                            key: "textRight",
                            displayer: "Text Right",
                            value: "Coffee Time",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "carouselObject",
                    displayer: "Carousel Object",
                    value: [
                        {
                            type: "image",
                            key: "imageRight",
                            displayer: "image Right",
                            value: "https://demo-storage.com/pm/wp/aurel/dark/wp-content/uploads/2017/11/book_and_leaf.jpg",
                        },
                        {
                            type: "image",
                            key: "iconRight",
                            displayer: "icon Right",
                            value: "https://cdn-icons-png.flaticon.com/512/656/656979.png",
                        },
                        {
                            type: "string",
                            key: "textRight",
                            displayer: "Text Right",
                            value: "Autumn Stories",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "carouselObject",
                    displayer: "Carousel Object",
                    value: [
                        {
                            type: "image",
                            key: "imageRight",
                            displayer: "image Right",
                            value: "https://demo-storage.com/pm/wp/aurel/dark/wp-content/uploads/2017/11/masonry11.jpg",
                        },
                        {
                            type: "image",
                            key: "iconRight",
                            displayer: "icon Right",
                            value: "https://cdn-icons-png.flaticon.com/512/656/656979.png",
                        },
                        {
                            type: "string",
                            key: "textRight",
                            displayer: "Text Right",
                            value: "Still Life",
                        },
                    ]
                },
                {
                    type: "object",
                    key: "carouselObject",
                    displayer: "Carousel Object",
                    value: [
                        {
                            type: "image",
                            key: "imageRight",
                            displayer: "image Right",
                            value: "https://demo-storage.com/pm/wp/aurel/dark/wp-content/uploads/2017/11/photo-1476283721796-dd935b062838.jpg",
                        },
                        {
                            type: "image",
                            key: "iconRight",
                            displayer: "icon Right",
                            value: "https://cdn-icons-png.flaticon.com/512/656/656979.png",
                        },
                        {
                            type: "string",
                            key: "textRight",
                            displayer: "Text Right",
                            value: "Boooo!",
                        },
                    ]
                },
            ]
        })

    } //constructor end

    getName(): string {
        return "Header 12";
    }

    //RENDER
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: false,
            autoplaySpeed: 2500,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
        };

        //RETURN
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("sliderContainer")}>
                        <ComposerSlider {...settings}>
                            {this.castToObject<LeftSlider[]>("carouselCollection1").map((item: LeftSlider, index: number) => (
                                <div
                                    className={this.decorateCSS("left-container")}
                                    key={index}
                                >
                                    <img
                                        src={item.imageLeft}
                                        alt=""
                                        key={index}
                                    />
                                    <div className={this.decorateCSS("imageArrows")}>{item.iconLeft}</div>
                                    <h1 className={this.decorateCSS("title")}>{item.textLeft}</h1>
                                </div>

                            ))}
                        </ComposerSlider>

                        <ComposerSlider {...settings}>
                            {this.castToObject<RightSlider[]>("carouselCollection2").map((item: RightSlider, index: number) => (

                                <div
                                    className={this.decorateCSS("right-container")}
                                    key={index}
                                >
                                    <img
                                        src={item.imageRight}
                                        alt=""
                                        key={index}
                                    />
                                    <div className={this.decorateCSS("imageArrows")}>{item.iconRight}</div>
                                    <h1 className={this.decorateCSS("title")}>{item.textRight}</h1>
                                </div>
                            ))}
                        </ComposerSlider>
                    </div>
                </div>
            </div>
        ); // RETURN end
    } // RENDER end

} // CLASS end

export default Header12;
