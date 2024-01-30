import * as React from "react";
import Slider from "react-slick";

const ComposerSlider = React.forwardRef((props: any, ref: React.Ref<any>) => {
  return <Slider ref={ref} {...props}>{props.children}</Slider>;
});

export default ComposerSlider;
