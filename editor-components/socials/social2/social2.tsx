import * as React from "react";
import { BaseSocial } from "../../EditorComponent";
import styles from "./social2.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";

type SlideItems ={
    videoUrl: string
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
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f6d9fb049c002cc73345?alt=media&timestamp=1744369370862"
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
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f6f7fb049c002cc73356?alt=media&timestamp=1744369401737"
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
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f716fb049c002cc7338c?alt=media&timestamp=1744369432612"
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
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f737fb049c002cc733e0?alt=media&timestamp=1744369466179"
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
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f762fb049c002cc73423?alt=media&timestamp=1744369509310"
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
    this.addProp({
        type: "icon",
        key: "playIcon",
        displayer: "Play Icon",
        value:"FaPlay"
    });
    this.addProp({
        type: "icon",
        key: "nextArrow",
        displayer: "Next Arrow",
        value:"IoIosArrowForward"
    });
    this.addProp({
        type: "icon",
        key: "prevArrow",
        displayer: "Prev Arrow",
        value:"IoIosArrowBack"
    });
    this.addProp({
        type: "icon",
        key: "closeIcon",
        displayer: "Close Icon",
        value:"IoCloseOutline"
    })
    this.setComponentState("activeVideoIndex",0);
    this.setComponentState("intervalId", 0);
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("videoActive", false);
    this.setComponentState("selectedVideo", 0);
  }

  static getName(): string {
    return "Social 2";
  }
  
  componentDidMount() {
    const interval = setInterval(() => {
      const currentIndex = this.getComponentState("activeVideoIndex") || 0;
      const sliderItems = this.getPropValue("sliderItems") || [];
      const nextIndex = (currentIndex + 1) % sliderItems.length;
      this.setComponentState("activeVideoIndex", nextIndex);
    }, 5000);
    this.setComponentState("intervalId", interval); 
  }
  
  componentWillUnmount() {
    const interval = this.getComponentState("intervalId");
    if (interval) {
      clearInterval(interval);
    }
  }
  handleRightArrowClick= ()  => {
    const sliderRef = this.getComponentState("slider-ref")
    sliderRef.current.slickNext();
  }
  handleLeftArrowClick= ()  => {
    const sliderRef = this.getComponentState("slider-ref")
    sliderRef.current.slickPrev();
  }
  handleVideoPlay =(index: number) => {
    this.setComponentState("selectedVideo", index);
    this.setComponentState("videoActive", true);
  }
  handleVideoClose =() =>{
    this.setComponentState("videoActive", false)
  }
  render() {
    const sliderItems = this.castToObject<SlideItems[]>("sliderItems");
    const sliderRef = this.getComponentState("slider-ref");
    const settings = {
        dots: false,
        button: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 8000,
        slidesToShow: 5.1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                autoplaySpeed: 6000,
                slidesToShow: 2.2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 640,
              settings: {
                autoplaySpeed: 5000,
                slidesToShow: 1.1,
                slidesToScroll: 1,
              },
            },
          ],
      };
    return (
        <>
        <Base.Container className={this.decorateCSS("container")}>
            <Base.MaxContent className={this.decorateCSS("max-content")}>
                {this.castToString(this.getPropValue("title")) && (
                <Base.VerticalContent className={this.decorateCSS("upper-container")}>
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                        {this.getPropValue("title")}
                    </Base.SectionTitle>
                </Base.VerticalContent>
                )}
                {(sliderItems.length > 0) && (
                <div className={this.decorateCSS("slider-container")}>
                    <ComposerSlider {...settings} ref={sliderRef} className={this.decorateCSS("slider")}>
                        {sliderItems.map((item, index: number) => {
                            const isActive = index === this.getComponentState("activeVideoIndex");
                            return (
                            <div key={index} className={this.decorateCSS("slider-item")}>
                                {item.videoUrl && (
                                    <video
                                    key={`${item.videoUrl}-${isActive}`}
                                    autoPlay={isActive}
                                    muted
                                    playsInline
                                    loop
                                    className={this.decorateCSS("video")}
                                    src={item.videoUrl}
                                    />
                                )}
                                {this.getPropValue("playIcon") && (
                                <div className={this.decorateCSS("icon-container")}>
                                    <ComposerIcon name= {this.getPropValue("playIcon")} propsIcon={{className: this.decorateCSS("icon"), onClick: ()=> {this.handleVideoPlay(index)}}}/>
                                </div>
                                )}
                            </div>
                            );
                        })}
                    </ComposerSlider>
                    <div className={this.decorateCSS("arrows")}>
                        <ComposerIcon name={this.getPropValue("nextArrow")} propsIcon={{className: this.decorateCSS("next-arrow") ,onClick: () => { this.handleRightArrowClick()}}}/>
                        <ComposerIcon name={this.getPropValue("prevArrow")} propsIcon={{className: this.decorateCSS("prev-arrow"),onClick: () => { this.handleLeftArrowClick()}}}/>
                    </div>
                </div>
                )}
            </Base.MaxContent>
        </Base.Container>
        <Base.Overlay className={`${this.decorateCSS("overlay")} ${this.getComponentState("videoActive") && this.getComponentState("active")}`} isVisible={this.getComponentState("videoActive")}>
            <div className={this.decorateCSS("video-container")}>
                {sliderItems[this.getComponentState("selectedVideo")].videoUrl && (
                <video
                    autoPlay={true}
                    muted
                    playsInline
                    loop
                    controls
                    className={this.decorateCSS("selectedVideo")}
                    src={sliderItems[this.getComponentState("selectedVideo")].videoUrl}
                />
                )}
                {this.getPropValue("closeIcon") && (
                <div className={this.decorateCSS("icon-container")}>
                    <ComposerIcon name={this.getPropValue("closeIcon")} propsIcon={{className: this.decorateCSS("closeIcon"), onClick : () => this.handleVideoClose()}}></ComposerIcon>
                </div>
                )}
            </div>
        </Base.Overlay>
        </>
    );
  }
}

export default Social2;
