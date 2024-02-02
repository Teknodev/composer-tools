import * as React from "react";
import Slider from "react-slick";


function ComposerSlider(props: any){
    return <Slider ref={(slider: any) => {if(props.hasOwnProperty("refObject")) props.refObject(slider)}} {...props}>{props.children}</Slider>
}

export default ComposerSlider;