import * as React from "react";
import { BaseSocial } from "../../EditorComponent";
import styles from "./social2.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type SlideItems ={
    videoUrl: string;
    videoText: React.JSX.Element
    socialIcons: SocialIcon[]
}
type SocialIcon ={
    icon: string;
    socialLink: string
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
            [
            {
                type: "video",
                key: "videoUrl",
                displayer: "Video Url",
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f6d9fb049c002cc73345?alt=media&timestamp=1744369370862"
            },
            {
                type: "string",
                key: "videoText",
                displayer: "Video Text",
                value: "🍀Acne safe skincare routine with CHANDO Himalaya Toner - Himalayan Essence Toner Essence - Rejuvenation Repairing Essence Cream - Time Frozen Aging Resistance Activating Essence Cream"
            },
            {
                type:"array",
                key:"socialIcons",
                displayer:"Social Icons",
                value:[
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"RiFacebookFill"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    },
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"ImLinkedin2"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"SiWhatsapp"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"FaTwitter"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                ]
            }
            ],
        },
        {
            type:"object",
            key: "sliderItem",
            displayer: "sliderItem",
            value: 
            [
            {
                type: "video",
                key: "videoUrl",
                displayer: "Video Url",
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f762fb049c002cc73423?alt=media&timestamp=1744369509310"
            },
            {
                type: "string",
                key: "videoText",
                displayer: "Video Text",
                value: ""
            },
            {
                type:"array",
                key:"socialIcons",
                displayer:"Social Icons",
                value:[
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"RiFacebookFill"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    },
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"ImLinkedin2"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"SiWhatsapp"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"FaTwitter"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                ]
            }
            ],
        },
        {
            type:"object",
            key: "sliderItem",
            displayer: "sliderItem",
            value: 
            [
            {
                type: "video",
                key: "videoUrl",
                displayer: "Video Url",
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f93240fb049c002cc77162?alt=media&timestamp=1744384580236"
            },
            {
                type: "string",
                key: "videoText",
                displayer: "Video Text",
                value: "Skincare Over 40: Achieve Porcelain Skin with This 3-Step Routine ft. Chando Himalaya! Want flawless, porcelain-like skin like the girls on Douyin? While we can’t be them, we can definitely get our skin looking and feeling just as smooth! Thanks to Chando Himalaya and its star ingredient HiMurchaSin, glowing skin is as easy as 1, 2, 3! @chandohimalaya_official #SkincareOver40 #PorcelainSkin #DouyinBeauty #ChandoHimalaya #GlassSkinGoals #AntiAgingRoutine #FlawlessSkin Comment SHOP below to receive a DM with the link to shop this post on my LTK ⬇ https://liketk.it/4UMpx #ltkbeauty #ltkstyletip #ltkover40"
            },
            {
                type:"array",
                key:"socialIcons",
                displayer:"Social Icons",
                value:[
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"RiFacebookFill"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    },
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"ImLinkedin2"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"SiWhatsapp"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"FaTwitter"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                ]
            }
            ],
        },
        {
            type:"object",
            key: "sliderItem",
            displayer: "sliderItem",
            value: 
            [
            {
                type: "video",
                key: "videoUrl",
                displayer: "Video Url",
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f737fb049c002cc733e0?alt=media&timestamp=1744369466179"
            },
            {
                type: "string",
                key: "videoText",
                displayer: "Video Text",
                value: "One drop to zap that fatigue from your skin! Try CHANDO's Himalaya 3-step routine and let Himalayan yeast transform you from saggy to sassy! 🍃#chandohimalaya #FindYourBeauty #fallskincare #HiMurchaSin"
            },
            {
                type:"array",
                key:"socialIcons",
                displayer:"Social Icons",
                value:[
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"RiFacebookFill"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    },
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"ImLinkedin2"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"SiWhatsapp"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"FaTwitter"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                ]
            }
            ],
        },
        {
            type:"object",
            key: "sliderItem",
            displayer: "sliderItem",
            value: 
            [
            {
                type: "video",
                key: "videoUrl",
                displayer: "Video Url",
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f8f6f7fb049c002cc73356?alt=media&timestamp=1744369401737"
            },
            {
                type: "string",
                key: "videoText",
                displayer: "Video Text",
                value: "Just tried the CHANDO Himalaya Green Tea Purifying Mask! 🧖‍♀️ It's so relaxing, even your hubby is considering a spa day. Who knew green tea could be this persuasive? #chandohimalaya #FindYourBeauty #fallskincare"
            },
            {
                type:"array",
                key:"socialIcons",
                displayer:"Social Icons",
                value:[
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"RiFacebookFill"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    },
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"ImLinkedin2"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"SiWhatsapp"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"FaTwitter"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                ]
            }
            ],
        },
        {
            type:"object",
            key: "sliderItem",
            displayer: "sliderItem",
            value: 
            [
            {
                type: "video",
                key: "videoUrl",
                displayer: "Video Url",
                value:"https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f931e6fb049c002cc770d6?alt=media&timestamp=1744384488435"
            },
            {
                type: "string",
                key: "videoText",
                displayer: "Video Text",
                value: ""
            },
            {
                type:"array",
                key:"socialIcons",
                displayer:"Social Icons",
                value:[
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"RiFacebookFill"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    },
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"ImLinkedin2"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"SiWhatsapp"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                {
                    type:"object",
                    key: "socialIcon",
                    displayer: "Social Icon",
                    value:[
                    {
                        type: "icon",
                        key: "icon",
                        displayer: "Icon",
                        value:"FaTwitter"
                    },
                    {
                        type: "page",
                        key: "socialLink",
                        displayer: "Social Link",
                        value:""
                    }
                    ]
                },
                ]
            }
            ],
        },
    ]
    })
    this.addProp({
        type: "boolean",
        key:"videoIframe",
        displayer:"Video Iframe",
        value:true
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
    this.addProp({
        type: "icon",
        key: "shareIcon",
        displayer: "Share Icon",
        value:"RiShareForwardLine"
    })  
    this.addProp({
        type: "string",
        key: "sharePopupTitle",
        displayer: "Share Popup Ttitle",
        value:"Share"
    })   

    this.setComponentState("intervalId", 0);
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("sliderRefOverlay", React.createRef());
    this.setComponentState("videoActive", false);
    this.setComponentState("selectedVideo", 0);
    this.setComponentState("shareContainerActive", false)
    this.setComponentState("slideToShow", 5);
    this.setComponentState("containerRef", React.createRef())
    this.setComponentState("width", 0);
    this.setComponentState("videoRefs", React.createRef());
    this.getComponentState("videoRefs").current = [];
    this.setComponentState("activeIndexRef", React.createRef());
    this.setComponentState("activeVideoIndex",React.createRef());
    
  }

  static getName(): string {
    return "Social 2";
  }
componentDidMount() {
    const containerRef = this.getComponentState("containerRef");
    const container = containerRef.current;
    if (!container) return;

    const boundingClient = container.getBoundingClientRect();
    this.setComponentState("width", boundingClient.width);

    const observer = new ResizeObserver(() => {
        const boundingClient = container.getBoundingClientRect();
        this.setComponentState("width", boundingClient.width);
      
        let newSlideToShow = 5;
        if (boundingClient.width < 400) {
          newSlideToShow = 1;
        } else if (boundingClient.width < 1000) {
          newSlideToShow = 2;
        }
      
        this.setComponentState("slideToShow", newSlideToShow);
      });
    this.setComponentState("observer", observer);
    observer.observe(container);


    const sliderItems = this.getPropValue("sliderItems") || [];
  
    const activeIndexRef = this.getComponentState("activeIndexRef");
    if (activeIndexRef) {
      activeIndexRef.current = -1;
    }

    const interval = setInterval(() => {
        if (!activeIndexRef) return;

        const current = activeIndexRef.current || 0;
        const next = (current + 1) % sliderItems.length; 
        activeIndexRef.current = next;

        const sliderRef = this.getComponentState("slider-ref");
        const currentIndex = this.getComponentState("activeVideoIndex") || 0;
        const nextIndex = (currentIndex + 1) % sliderItems.length;
        this.setComponentState("activeVideoIndex", nextIndex);
        sliderRef.current.slickGoTo(Math.max((this.getComponentState("activeVideoIndex") - (this.getComponentState("slideToShow") - 1)), 0));

        setTimeout(() => {
        const nextSlide = document.querySelector(`.slick-slide.slick-active [data-video-index="${next}"]`) as HTMLVideoElement;
        const currentSlide = document.querySelector(`.slick-slide.slick-active [data-video-index="${current}"]`) as HTMLVideoElement;
        if (nextSlide !== null) {
            nextSlide.play();
        }   
        if (currentSlide) {
            currentSlide.pause();
            currentSlide.currentTime = 0;
          }
        }, 100);
  
      }, 5000);
  
    this.setComponentState("intervalId", interval);
  }
  
  
  
  componentWillUnmount() {
    const observer = this.getComponentState("observer");
    if (observer) observer.disconnect();
    const interval = this.getComponentState("intervalId");
    if (interval) {
      clearInterval(interval);
    }
  }
  handleRightArrowClick = () => {
    const sliderRef = this.getComponentState("slider-ref");
    const slider = sliderRef.current;
    const currentSlide = slider.innerSlider.state.currentSlide;
    const totalSlides = slider.innerSlider.props.children.length;
    const slidesToShow = slider.innerSlider.props.slidesToShow;

    if (currentSlide >= totalSlides - slidesToShow) {
      slider.slickGoTo(0);
    } else {
      slider.slickNext();
    }
  };
  
  handleLeftArrowClick = () => {
    const sliderRef = this.getComponentState("slider-ref");
    const slider = sliderRef.current;
    const currentSlide = slider.innerSlider.state.currentSlide;
    const totalSlides = slider.innerSlider.props.children.length;
    const slidesToShow = slider.innerSlider.props.slidesToShow;
  
    if (currentSlide === 0) {
      slider.slickGoTo(totalSlides - slidesToShow);
    } else {
      slider.slickPrev();
    }
  };
  
  handleVideoPlay =(index: number) => {
    this.setComponentState("selectedVideo", index);
    this.setComponentState("videoActive", true);
  }
  handleVideoClose =() =>{
    this.setComponentState("videoActive", false)
  }
  handleShareOpen = () =>{
    this.setComponentState("shareContainerActive", true)
  }
  handleShareClose = () =>{
    this.setComponentState("shareContainerActive", false)
  }
  handleVideoRefs = (el:any, index:number) => {
    const videoRefs = this.getComponentState("videoRefs");
    if (videoRefs?.current) {
      videoRefs.current[index] = el;
    }
  }
  render() {
    const sliderItems = this.castToObject<SlideItems[]>("sliderItems");
    const sliderRef = this.getComponentState("slider-ref");
    const socialIcons = this.castToObject<SocialIcon[]>("socialIcons");
    const selectedIndex = this.getComponentState("selectedVideo");


    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
    
    };
    
    
    const settingsVideo = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        initialSlide:selectedIndex, 
        
    };   
    
    return (
        <>
        <Base.Container className={this.decorateCSS("container")} id={"container"}  >
            <Base.MaxContent className={this.decorateCSS("max-content")}>
                {this.castToString(this.getPropValue("title")) && (
                <Base.VerticalContent className={this.decorateCSS("upper-container")}>
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                        {this.getPropValue("title")}
                    </Base.SectionTitle>
                </Base.VerticalContent>
                )}
                {(sliderItems.length > 0) && (
                <div className={this.decorateCSS("slider-container")} ref={this.getComponentState("containerRef")}>
                    <ComposerSlider {...settings} ref={sliderRef} key={this.getComponentState("selectedVideo")}  className={this.decorateCSS("slider")}>
                        {sliderItems.map((item, index: number) => {
                            return (
                            <div key={index} className={this.decorateCSS("slider-item")}>
                                {item.videoUrl && (
                                    <video
                                    key={`video-${index}`}
                                    id={`video-${index}`}
                                    data-video-index={index}
                                    muted={true}
                                    playsInline
                                    loop
                                    preload="auto"
                                    className={this.decorateCSS("video")}
                                    src={item.videoUrl}
                                    />
                                )}
                                {this.getPropValue("playIcon") && (
                                <div className={this.decorateCSS("icon-container")} onClick={()=> {this.handleVideoPlay(index)}}>
                                    <ComposerIcon name= {this.getPropValue("playIcon")} propsIcon={{className: this.decorateCSS("icon")}}/>
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
            {this.getPropValue("videoIframe") && this.getComponentState("videoActive") && (
                <div className={`${this.decorateCSS("overlay")} ${this.getComponentState("shareContainerActive") && this.decorateCSS("popup-active")}`} >
                    <ComposerSlider {...settingsVideo} ref={this.getComponentState("sliderRefOverlay")} className={this.decorateCSS("slider-container")}>
                            {sliderItems.map((item, index: number) => {
                                    return (
                                        <div key={index} className={this.decorateCSS("video-container")}>
                                                {item.videoUrl && (
                                                    <video
                                                    key={`${item.videoUrl}-${index}`}
                                                    autoPlay={true}
                                                    muted={false}
                                                    playsInline
                                                    loop
                                                    controls
                                                    className={this.decorateCSS("selected-video")}
                                                    src={item.videoUrl}
                                                    />
                                                )}
                                                {this.castToString(item.videoText)&& (
                                                    <div className={this.decorateCSS("video-text-container")}>
                                                        <div className={this.decorateCSS("video-text")}>
                                                            {item.videoText}
                                                        </div>
                                                    </div>
                                                )}
                                                {this.getPropValue("closeIcon") && (
                                                    <div className={this.decorateCSS("close-icon-container")}>
                                                        <ComposerIcon name={this.getPropValue("closeIcon")} propsIcon={{className: this.decorateCSS("close-icon"), onClick : () => this.handleVideoClose()}}></ComposerIcon>
                                                    </div>
                                                )}
                                                {this.getPropValue("shareIcon") && (
                                                    <div className={this.decorateCSS("share-icon-container")}>
                                                        <ComposerIcon name={this.getPropValue("shareIcon")} propsIcon={{className: this.decorateCSS("share-icon"), onClick : () => this.handleShareOpen()}}></ComposerIcon>
                                                    </div>
                                                )}
                                                {(this.castToString(this.getPropValue("sharePopupTitle")) || this.getPropValue("closeIcon") || (socialIcons.length > 0)) && (
                                                <div className={`${this.decorateCSS("share-wrapper")} ${this.getComponentState("shareContainerActive") && this.decorateCSS("active")}`}>
                                                    <div className={this.decorateCSS("share-popup-container")}>
                                                        {(this.castToString(this.getPropValue("sharePopupTitle")) || this.getPropValue("closeIcon")) && (
                                                            <div className={this.decorateCSS("share-popup-upper")}>
                                                            {this.castToString(this.getPropValue("sharePopupTitle")) &&(
                                                                <div className={this.decorateCSS("share-popup-title")}>{this.getPropValue("sharePopupTitle")}</div>
                                                            )}
                                                            {this.getPropValue("closeIcon") && (
                                                            <div className={this.decorateCSS("share-popup-close")} onClick={() => this.handleShareClose()}>
                                                                <ComposerIcon name={this.getPropValue("closeIcon")} propsIcon={{className: this.decorateCSS("share-close-icon")}}></ComposerIcon>
                                                            </div>
                                                            )}
                                                            </div>
                                                        )}
                                                        {item.socialIcons.length > 0 && 
                                                            <div className={this.decorateCSS("social-icons-container")}>
                                                            {item.socialIcons.map((social) =>{
                                                                return(
                                                                    <ComposerLink path={social.socialLink}>
                                                                        {social.icon && (
                                                                        <div className={this.decorateCSS("social-icons")}>
                                                                            <ComposerIcon name={social.icon} propsIcon={{className: this.decorateCSS("social-icon")}}></ComposerIcon>
                                                                        </div>
                                                                        )}
                                                                    </ComposerLink>

                                                                )
                                                            })}
                                                            </div>
                                                        }
                                                        </div>
                                                    </div>
                                                )}
                                        </div>
                                    );
                            })}
            
                    </ComposerSlider>
                </div>
            )}
        </Base.Container>
        <Base.Overlay className={`${this.decorateCSS("base-overlay")}  ${this.getComponentState("shareContainerActive") && this.decorateCSS("popup-active")}`} isVisible={(this.getComponentState("videoActive") && !this.getPropValue("videoIframe"))}>
            <ComposerSlider {...settingsVideo} className={this.decorateCSS("slider-container")}>
                {sliderItems.map((item, index: number) => {
                        return (
                            <div key={index} className={this.decorateCSS("video-container")}>
                                    {item.videoUrl && (
                                        <video
                                        key={`${item.videoUrl}-${index}`}
                                        autoPlay={true}
                                        muted={false}
                                        playsInline
                                        loop
                                        controls
                                        className={this.decorateCSS("selected-video")}
                                        src={item.videoUrl}
                                        />
                                    )}
                                    {this.castToString(item.videoText)&& (
                                        <div className={this.decorateCSS("video-text-container")}>
                                            <div className={this.decorateCSS("video-text")}>
                                                {item.videoText}
                                            </div>
                                        </div>
                                    )}
                                    {this.getPropValue("closeIcon") && (
                                        <div className={this.decorateCSS("close-icon-container")}>
                                            <ComposerIcon name={this.getPropValue("closeIcon")} propsIcon={{className: this.decorateCSS("close-icon"), onClick : () => this.handleVideoClose()}}></ComposerIcon>
                                        </div>
                                    )}
                                    {this.getPropValue("shareIcon") && (
                                        <div className={this.decorateCSS("share-icon-container")}>
                                            <ComposerIcon name={this.getPropValue("shareIcon")} propsIcon={{className: this.decorateCSS("share-icon"), onClick : () => this.handleShareOpen()}}></ComposerIcon>
                                        </div>
                                    )}
                                    {(this.castToString(this.getPropValue("sharePopupTitle")) || this.getPropValue("closeIcon") || (socialIcons.length > 0)) && (
                                        <div className={`${this.decorateCSS("share-wrapper")} ${this.getComponentState("shareContainerActive") && this.decorateCSS("active")}`}>
                                            <div className={this.decorateCSS("share-popup-container")}>
                                                {(this.castToString(this.getPropValue("sharePopupTitle")) || this.getPropValue("closeIcon")) && (
                                                    <div className={this.decorateCSS("share-popup-upper")}>
                                                    {this.castToString(this.getPropValue("sharePopupTitle")) &&(
                                                        <div className={this.decorateCSS("share-popup-title")}>{this.getPropValue("sharePopupTitle")}</div>
                                                    )}
                                                    {this.getPropValue("closeIcon") && (
                                                    <div className={this.decorateCSS("share-popup-close")} onClick={() => this.handleShareClose()}>
                                                        <ComposerIcon name={this.getPropValue("closeIcon")} propsIcon={{className: this.decorateCSS("share-close-icon")}}></ComposerIcon>
                                                    </div>
                                                    )}
                                                    </div>
                                                )}
                                                {item.socialIcons.length > 0 && 
                                                    <div className={this.decorateCSS("social-icons-container")}>
                                                    {item.socialIcons.map((social) =>{
                                                        return(
                                                            <ComposerLink path={social.socialLink}>
                                                                {social.icon && (
                                                                <div className={this.decorateCSS("social-icons")}>
                                                                    <ComposerIcon name={social.icon} propsIcon={{className: this.decorateCSS("social-icon")}}></ComposerIcon>
                                                                </div>
                                                                )}
                                                            </ComposerLink>

                                                        )
                                                    })}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    )}
                            </div>
                        );
                })}

            </ComposerSlider>
        </Base.Overlay>
        </>
    );
  }
}

export default Social2;
