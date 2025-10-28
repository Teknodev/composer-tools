import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp10.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { Base } from "../../../composer-base-components/base/base";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type TImage = {
  image: string;
  imageLink: string;
};

class LogoComp10Page extends LogoClouds {
  containerRef: HTMLDivElement | null = null;
  wheelTimeout: NodeJS.Timeout | null = null;

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "OUR TRUSTED PARTNERS",
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4
    });

    this.addProp({
      type: "array",
      key: "image-items",
      displayer: "Images",
      value: [
        INPUTS.LOGO("Section", ""),
        INPUTS.LOGO("Section", ""),
        INPUTS.LOGO("Section", ""),
        INPUTS.LOGO("Section", ""),
      ],
    });

    this.setComponentState("slider-ref", React.createRef());
  }

  static getName(): string {
    return "Logo Cloud 10";
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.handleResize);
      window.addEventListener("orientationchange", this.handleResize);
    }

    setTimeout(() => {
      if (this.containerRef) {
        this.containerRef.addEventListener('wheel', this.handleWheel, { passive: false });
      }
    }, 100);

    this.handleResize();
  }
  
  handleResize = () => {
    this.forceUpdate();
  };


  componentWillUnmount() {
    if (this.wheelTimeout) {
      clearTimeout(this.wheelTimeout);
    }

    if (this.containerRef) {
      this.containerRef.removeEventListener('wheel', this.handleWheel);
    }

    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.handleResize);
      window.removeEventListener("orientationchange", this.handleResize);
    }
  }

  getChunkSize = (): number => {
    const itemCount = this.getPropValue("itemCount") || 4;
    return itemCount;
  };

  handleWheel = (e: WheelEvent) => {
    const sliderRef = this.getComponentState("slider-ref");
    const logoItems = this.castToObject<TImage[]>("image-items") || [];
    const chunkSize = this.getChunkSize();
    const shouldAnimate = logoItems.length > chunkSize;
    
    if (!shouldAnimate || !sliderRef?.current || this.wheelTimeout) return;

    e.preventDefault();
    e.stopPropagation();

    const delta = e.deltaY || e.deltaX;

    if (Math.abs(delta) < 5) return;

    if (delta > 0) {
      sliderRef.current.slickNext();
    } else if (delta < 0) {
      sliderRef.current.slickPrev();
    }

    this.wheelTimeout = setTimeout(() => {
      this.wheelTimeout = null;
    }, 600);
  };

  setContainerRef = (el: HTMLDivElement | null) => {
    if (this.containerRef) {
      this.containerRef.removeEventListener('wheel', this.handleWheel);
    }
    this.containerRef = el;
    if (el) {
      el.addEventListener('wheel', this.handleWheel, { passive: false });
    }
  };

  chunkLogos = (logos: TImage[], size: number): TImage[][] => {
    if (logos.length === 0) return [];

    const chunkSize = Math.max(1, size);
    const chunks: TImage[][] = [];
    
    if (logos.length > chunkSize) {
      for (let i = 0; i < logos.length; i += chunkSize) {
        const chunk = logos.slice(i, i + chunkSize);
        
        let fillIndex = 0;
        while (chunk.length < chunkSize) {
          chunk.push(logos[fillIndex % logos.length]);
          fillIndex++;
        }
        
        chunks.push(chunk);
      }
    } else {
      chunks.push(logos);
    }
    
    return chunks;
  };

  render() {
    const title = this.castToString(this.getPropValue("title"));
    const logoItems = this.castToObject<TImage[]>("image-items") || [];
    const itemCount = this.getPropValue("itemCount") || 4;
    const sliderRef = this.getComponentState("slider-ref");
    
    const desktopChunkSize = itemCount;
    const mobileChunkSize = 2;
    
    const shouldAnimateDesktop = logoItems.length > desktopChunkSize;
    const shouldAnimateMobile = logoItems.length > mobileChunkSize;
    const desktopChunks = this.chunkLogos(logoItems, desktopChunkSize);
    const mobileChunks = this.chunkLogos(logoItems, mobileChunkSize);
    
    const sliderKey = `slider-${itemCount}-${logoItems.length}-${desktopChunkSize}`;
    
    const desktopSliderSettings = {
      arrows: false,
      dots: false,
      infinite: shouldAnimateDesktop,
      speed: 800,
      autoplay: shouldAnimateDesktop,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'linear',
      pauseOnHover: false,
    };

    const mobileSliderSettings = {
      arrows: false,
      dots: false,
      infinite: shouldAnimateMobile,
      speed: 800,
      autoplay: shouldAnimateMobile,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'linear',
      pauseOnHover: false,
    };

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {title && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              <Base.H4 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </Base.H4>
            </Base.VerticalContent>
          )}

          {logoItems.length > 0 && (
            <Base.MaxContent className={this.decorateCSS("slider-wrapper")}
              ref={shouldAnimateDesktop ? this.setContainerRef : undefined}
            >
              <div className={this.decorateCSS("slider-container")}>
                <ComposerSlider
                  key={`desktop-${sliderKey}`}
                  ref={sliderRef}
                  {...desktopSliderSettings}
                  className={`${this.decorateCSS("slider")} ${this.decorateCSS("desktop-slider")}`}
                >
                  {desktopChunks.map((chunk, slideIndex) => {
                    const visibleItems = chunk.filter((img: TImage) => img.image);
                    const gridColumns = Math.max(1, Math.min(itemCount, visibleItems.length));

                    return (
                      <div key={slideIndex}>
                        <Base.ListGrid 
                          gridCount={{ pc: gridColumns, tablet: gridColumns, phone: gridColumns }}
                          className={this.decorateCSS("gallery")}
                        >
                          {visibleItems.map((img: TImage, i: number) => (
                            <ComposerLink key={i} path={img.imageLink}>
                              <div className={this.decorateCSS("image-child")}>
                                <Base.Media
                                  className={this.decorateCSS("image")}
                                  value={{ type: "image", url: img.image }}
                                />
                              </div>
                            </ComposerLink>
                          ))}
                        </Base.ListGrid>
                      </div>
                    );
                  })}
                </ComposerSlider>
                <ComposerSlider
                  key={`mobile-${sliderKey}`}
                  {...mobileSliderSettings}
                  className={`${this.decorateCSS("slider")} ${this.decorateCSS("mobile-slider")}`}
                >
                  {mobileChunks.map((chunk, slideIndex) => {
                    const visibleItems = chunk.filter((img: TImage) => img.image);

                    return (
                      <div key={slideIndex}>
                        <Base.ListGrid 
                          gridCount={{ pc: 2, tablet: 2, phone: 2 }}
                          className={this.decorateCSS("gallery")}
                        >
                          {visibleItems.map((img: TImage, i: number) => (
                            <ComposerLink key={i} path={img.imageLink}>
                              <div className={this.decorateCSS("image-child")}>
                                <Base.Media
                                  className={this.decorateCSS("image")}
                                  value={{ type: "image", url: img.image }}
                                />
                              </div>
                            </ComposerLink>
                          ))}
                        </Base.ListGrid>
                      </div>
                    );
                  })}
                </ComposerSlider>
              </div>
            </Base.MaxContent>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default LogoComp10Page;



