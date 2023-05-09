import Slider from "react-slick";
import * as React from "react";
import { BaseSlider, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./slider6.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Card = {
    image: string
}

class Slider6 extends BaseSlider {
    constructor(props?: any) {
        super(props, styles);


        let placeholder: TypeUsableComponentProps = {
            type: "object",
            key: "items1",
            displayer: "Header",
            value: [
                {
                    type: "image",
                    key: "image",
                    displayer: "Image",
                    value: PlaceholderFiller.image(),
                },
            ],
        }


        this.addProp({
            type: "array",
            key: "slider",
            displayer: "Slider",
            value: [
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
                JSON.parse(JSON.stringify(placeholder)),
            ]
        });

    }
    getName(): string {
        return "Slider 6";
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            focusOnSelect: true
        };
        return (
            <div
                className={this.decorateCSS("container")}
                
            >
                <div className={this.decorateCSS("max-content")}>
                    <Slider {...settings} className={this.decorateCSS("carousel")}>
                        {this.castToObject<Card[]>("slider").map(
                            (item: Card, index: number) => (
                                <img
                                    src={item.image}
                                    className={this.decorateCSS("img")}
                                    
                                    key={index}
                                />
                            )
                        )}
                    </Slider>
                </div>
            </div>

        );
    }
}

export default Slider6;
