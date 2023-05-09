import Slider from "react-slick";
import * as React from "react";
import { BaseSlider, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./slider5.module.scss";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Card = {
    image: string
}

class Slider5 extends BaseSlider {
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

            ]
        });

    }
    getName(): string {
        return "Slider 5";
    }
    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
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

export default Slider5;
