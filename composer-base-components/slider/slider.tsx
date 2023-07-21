import * as React from "react";
import Slider from "react-slick";


function ComposerSlider(props: any){
    return <Slider {...props}>{props.children}</Slider>
}

export default ComposerSlider;