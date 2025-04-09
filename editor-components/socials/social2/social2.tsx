import * as React from "react";
import { BaseSocial } from "../../EditorComponent";
import styles from "./social2.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";

type SlideItems ={
    image: "string",
    videoUrl:"string"
}

class Social2 extends BaseSocial {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
        type: "string",
        key:"title",
        displayer:"Ttitle",
        value:"SHOP THE FEED"
    })
    this.addProp({
        type: "array",
        key: "sliderItems",
        displayer: "Slider Items",
        value:[
        {
            type:"object",
            key: "sliderItem",
            displayer: "sliderItem",
            value: 
            [{
                type: "video",
                key: "videoUrl",
                displayer: "Video Url",
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b9f4473292c6002b23c4b0?alt=media"
            }],
        },
        {
            type:"object",
            key: "sliderItem",
            displayer: "sliderItem",
            value: 
            [{
                type: "video",
                key: "videoUrl",
                displayer: "Video Url",
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b9f4473292c6002b23c4b0?alt=media"
            }],
        },
        {
            type:"object",
            key: "sliderItem",
            displayer: "sliderItem",
            value: 
            [{
                type: "video",
                key: "videoUrl",
                displayer: "Video Url",
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b9f4473292c6002b23c4b0?alt=media"
            }],
        },
        {
            type:"object",
            key: "sliderItem",
            displayer: "sliderItem",
            value: 
            [{
                type: "video",
                key: "videoUrl",
                displayer: "Video Url",
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b9f4473292c6002b23c4b0?alt=media"
            }],
        },
        {
            type:"object",
            key: "sliderItem",
            displayer: "sliderItem",
            value: 
            [{
                type: "video",
                key: "videoUrl",
                displayer: "Video Url",
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b9f4473292c6002b23c4b0?alt=media"
            }],
        },
        {
            type:"object",
            key: "sliderItem",
            displayer: "sliderItem",
            value: 
            [{
                type: "video",
                key: "videoUrl",
                displayer: "Video Url",
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b9f4473292c6002b23c4b0?alt=media"
            }],
        },
        {
            type:"object",
            key: "sliderItem",
            displayer: "sliderItem",
            value: 
            [{
                type: "video",
                key: "videoUrl",
                displayer: "Video Url",
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b9f4473292c6002b23c4b0?alt=media"
            }],
        },
    ]
    })
    this.setComponentState("currentIndex", 0);
    this.setComponentState("timeout", 0);
    this.setComponentState("ref", React.createRef());
    this.setComponentState("activeVideoIndex",0);

  }

  static getName(): string {
    return "Social 2";
  }

  componentDidMount() {
    this.playNextVideo();
  }

  componentWillUnmount() {
    this.setComponentState("timeout",0)
  }

  playNextVideo = () => {
    
  };
  render() {
    const sliderItems = this.castToObject<SlideItems[]>("sliderItems");
    const settings = {
        dots: false,
        button: false,
        infinite: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
      };
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
        <ComposerSlider {...settings} className={this.decorateCSS("slider-container")}>
            {sliderItems.map((item, index: number) => {
                return(
                    <div className={this.decorateCSS("slider-item")}>
                    <video
                      autoPlay={true}                      
                      className={this.decorateCSS("video")}
                      src={item.videoUrl}
                    ></video>
                    </div>
                )

            })}
        </ComposerSlider>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Social2;
