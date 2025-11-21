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
  resizeObserver: ResizeObserver | null = null;
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
    if (this.containerRef && typeof ResizeObserver !== "undefined") {
      this.resizeObserver = new ResizeObserver(this.handleResize);
      this.resizeObserver.observe(this.containerRef);
    }
    this.handleResize();
  }
  handleResize = () => {
    this.forceUpdate();
  };
  componentWillUnmount() {
    if (this.wheelTimeout) {
      clearTimeout(this.wheelTimeout);
      this.wheelTimeout = null;
    }
    if (this.resizeObserver && this.containerRef) {
      this.resizeObserver.unobserve(this.containerRef);
      this.resizeObserver = null;
    }
    this.containerRef?.removeEventListener('wheel', this.handleWheel);
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.handleResize);
      window.removeEventListener("orientationchange", this.handleResize);
    }
  }
  handleWheel = (e: WheelEvent) => {
    const sliderRef = this.getComponentState("slider-ref");
    const logoItems = this.getVisibleLogoItems();
    const chunkSize = this.getEffectiveChunkSize();
    const shouldAnimate = logoItems.length > chunkSize;
    if (!shouldAnimate || !sliderRef?.current || this.wheelTimeout) {
      return;
    }
    const delta = e.deltaY || e.deltaX;
    if (Math.abs(delta) < 5) return;
    e.preventDefault();
    e.stopPropagation();
    delta > 0 ? sliderRef.current.slickNext() : sliderRef.current.slickPrev();
    this.wheelTimeout = setTimeout(() => {
      this.wheelTimeout = null;
    }, 600);
  };
  setContainerRef = (el: HTMLDivElement | null) => {
    if (this.containerRef) {
      this.containerRef.removeEventListener('wheel', this.handleWheel);
      this.resizeObserver?.unobserve(this.containerRef);
    }
    this.containerRef = el;
    if (!el) return;
    if (typeof ResizeObserver !== "undefined") {
      this.resizeObserver ??= new ResizeObserver(this.handleResize);
      this.resizeObserver.observe(el);
    }
    setTimeout(() => {
      if (el !== this.containerRef) return;
      const logoItems = this.getVisibleLogoItems();
      const effectiveChunkSize = this.getEffectiveChunkSize();
      if (logoItems.length > effectiveChunkSize) {
        el.addEventListener('wheel', this.handleWheel, { passive: false });
      }
    }, 0);
  };
  getAllLogoItems = (): TImage[] => this.castToObject<TImage[]>("image-items") || [];
  getVisibleLogoItems = (): TImage[] => this.getAllLogoItems().filter((img) => !!img?.image);
  getChunkSize = (): number => {
    const propValue = this.getPropValue("itemCount");
    const logoCount = this.getVisibleLogoItems().length;
    const requested = typeof propValue === "number" ? propValue : 4;
    const maxAllowed = logoCount > 0 ? logoCount : 1;
    return Math.max(1, Math.min(requested, maxAllowed));
  };
  getEffectiveChunkSize = (): number => {
    const desktopChunkSize = this.getChunkSize();
    return this.isPhone() ? Math.min(2, desktopChunkSize) : desktopChunkSize;
  };
  getViewportKey = (): string => (this.isPhone() ? "phone" : "desktop");
  isPhone = (): boolean => {
    const containerWidth = this.containerRef?.clientWidth ?? 0;
    const playgroundWidth = typeof document !== 'undefined'
      ? document.getElementById('playground')?.clientWidth ?? 0
      : 0;
    const width = containerWidth > 0 ? containerWidth : playgroundWidth;
    return width > 0 && width <= 640;
  };
  chunkLogos = (logos: TImage[], size: number): TImage[][] => {
    if (!logos.length) return [];
    const chunkSize = Math.max(1, size);
    if (logos.length <= chunkSize) {
      const chunk = [...logos];
      let fillIndex = 0;
      while (chunk.length < chunkSize) {
        chunk.push(logos[fillIndex % logos.length]);
        fillIndex++;
      }
      return [chunk];
    }

    const chunks: TImage[][] = [];
    for (let i = 0; i < logos.length; i += chunkSize) {
      const slice = logos.slice(i, i + chunkSize);
      if (slice.length < chunkSize) {
        let fillIndex = 0;
        while (slice.length < chunkSize) {
          slice.push(logos[fillIndex % logos.length]);
          fillIndex++;
        }
      }
      chunks.push(slice);
    }
    return chunks;
  };
  render() {
    const titleExists = this.castToString(this.getPropValue("title"));
    const logoItems = this.getVisibleLogoItems();
    const totalLogos = logoItems.length;
    const itemCount = this.getChunkSize();
    const sliderRef = this.getComponentState("slider-ref");
    const effectiveChunkSize = this.getEffectiveChunkSize();
    const viewportKey = this.getViewportKey();
    const shouldAnimate = totalLogos > effectiveChunkSize;
    const chunks = this.chunkLogos(logoItems, effectiveChunkSize);
    const sliderKey = `slider-${itemCount}-${totalLogos}-${effectiveChunkSize}-${viewportKey}`;
    const sliderSettings = {
      arrows: false,
      dots: false,
      speed: 800,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'linear',
      pauseOnHover: false,
      infinite: shouldAnimate,
      autoplay: shouldAnimate,
    };
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {titleExists && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              <Base.H4 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </Base.H4>
            </Base.VerticalContent>
          )}
          {logoItems.length > 0 && (
            <div className={this.decorateCSS("slider-wrapper")}
              ref={this.setContainerRef}
            >
              <div className={this.decorateCSS("slider-container")}>
                <ComposerSlider
                  key={`single-${sliderKey}`}
                  ref={sliderRef}
                  {...sliderSettings}
                  className={this.decorateCSS("slider")}
                >
                  {chunks.map((chunk, slideIndex) => {
                    const visibleItems = chunk.filter((img: TImage) => img.image);
                    const gridColumns = Math.max(1, Math.min(itemCount, visibleItems.length));
                    const phoneColumns = Math.max(1, Math.min(gridColumns, 2));
                    return (
                      <div key={slideIndex}>
                        <Base.ListGrid
                          gridCount={{ pc: gridColumns, tablet: gridColumns, phone: phoneColumns }}
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
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}
export default LogoComp10Page;
