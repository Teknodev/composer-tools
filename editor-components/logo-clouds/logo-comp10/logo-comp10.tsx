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
  private containerRef: HTMLDivElement | null = null;
  private wheelTimeout: NodeJS.Timeout | null = null;

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Text",
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

    let width: number | undefined;
    if (this.containerRef) {
      width = this.containerRef.clientWidth;
    }

    if (!width && typeof window !== "undefined") {
      width = window.innerWidth;
    }

    if (width && width <= 767) {
      return 2;
    }

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
        while (chunk.length < chunkSize) {
          chunk.push({ image: "", imageLink: "" });
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
    const chunkSize = this.getChunkSize();
    const sliderRef = this.getComponentState("slider-ref");
    
    const shouldAnimate = logoItems.length > chunkSize;
    const chunks = this.chunkLogos(logoItems, chunkSize);
    
    const sliderKey = `slider-${itemCount}-${logoItems.length}-${chunkSize}`;
    
    const sliderSettings = {
      arrows: false,
      dots: false,
      infinite: shouldAnimate,
      speed: 800,
      autoplay: shouldAnimate,
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
              ref={shouldAnimate ? this.setContainerRef : undefined}
            >
              <div className={this.decorateCSS("slider-container")}>
                <ComposerSlider
                  key={sliderKey}
                  ref={sliderRef}
                  {...sliderSettings}
                  className={this.decorateCSS("slider")}
                >
                  {chunks.map((chunk, slideIndex) => {
                    const visibleItems = chunk.filter((img) => img.image);
                    const desktopColumns = Math.max(1, Math.min(itemCount, visibleItems.length));
                    const mobileColumns = Math.max(1, Math.min(chunkSize, visibleItems.length));

                    return (
                      <div key={slideIndex}>
                        <Base.ListGrid 
                          gridCount={{ pc: desktopColumns, tablet: desktopColumns, phone: mobileColumns }}
                          className={this.decorateCSS("gallery")}
                        >
                          {visibleItems.map((img, i) => (
                            <ComposerLink key={i} path={img.imageLink}>
                              <div className={this.decorateCSS("image-child")}>
                                <img
                                  className={this.decorateCSS("image")}
                                  src={img.image}
                                  alt={img.imageLink || ""}
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


