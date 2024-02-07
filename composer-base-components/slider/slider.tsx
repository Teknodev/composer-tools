import * as React from "react";
import Slider from "react-slick";

const ComposerSlider = React.forwardRef((props: any, ref: React.Ref<any>) => {
  return <Slider ref={ref} {...props}>{props.children}</Slider>;
});

function ComposerSlider(props: any){
    return <Slider ref={(slider: any) => {if(props.hasOwnProperty("refObject")) props.refObject(slider)}} {...props}>{props.children}</Slider>
}

export default ComposerSlider;

