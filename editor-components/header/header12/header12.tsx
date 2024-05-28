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

    firstSlider: any;
    secondSlider: any;
    
    //constructor
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type : "image",
            key : "image",
            displayer :"Image",
            value : "https://cdn-icons-png.flaticon.com/512/656/656979.png"
        })

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

        const settingFirst = {
            ...settings,
            beforeChange: (current: number, next: number) => {
                const currentIndex = parseInt(this.getComponentState("secondSliderIndex"));
                if(
                    (current < next && !(current == 0 && next + 1 == this.castToObject<LeftSlider[]>("carouselCollection1").length))
                || (current + 1 == this.castToObject<LeftSlider[]>("carouselCollection1").length && next == 0)){
                    this.secondSlider.slickPrev()
                }
                else{
                    this.secondSlider.slickNext()
                }
            }
        }

        const settingSecond = {
            ...settings,
            beforeChange: (current: number, next: number) => {
                const currentIndex = parseInt(this.getComponentState("firstSliderIndex"));
                if(
                    (current < next && !(current == 0 && next + 1 == this.castToObject<LeftSlider[]>("carouselCollection2").length))
                || (current + 1 == this.castToObject<LeftSlider[]>("carouselCollection2").length && next == 0)){
                    this.firstSlider.slickPrev()
                }
                else{
                    this.firstSlider.slickNext()
                }
            }
        }
        //RETURN
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("sliderContainer")}>
                        <ComposerSlider className={this.decorateCSS("slider")} refObject={(slider: any) => (this.firstSlider = slider)} {...settingFirst}>
                            {this.castToObject<LeftSlider[]>("carouselCollection1").map((item: LeftSlider, index: number) => (
                                <div
                                    key={index}
                                >
                                    <img
                                        src={item.imageLeft}
                                        alt=""
                                        key={index}
                                    />
                                    <h1 className={this.decorateCSS("title")}>{item.textLeft}</h1>
                                </div>

                            ))}
                        </ComposerSlider>

                        <ComposerSlider className={this.decorateCSS("slider")} refObject={(slider: any) => (this.secondSlider = slider)} {...settingSecond}>
                            {this.castToObject<RightSlider[]>("carouselCollection2").map((item: RightSlider, index: number) => (

                                <div
                                    
                                    key={index}
                                >
                                    <img
                                        src={item.imageRight}
                                        alt=""
                                        key={index}
                                    />
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
