import * as React from "react";
import { LogoClouds, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./logo-comp10.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import ComposerSlider from "../../../composer-base-components/slider/slider";
type TImage = {
  image?: TypeMediaInputValue;
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
      key: "subtitle",
      displayer: "Subtitle",
      value: "OUR TRUSTED PARTNERS",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
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
        {
          type: "object",
          key: "logo",
          displayer: "Logo",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "logo",
          displayer: "Logo",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "logo",
          displayer: "Logo",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "logo",
          displayer: "Logo",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });
    this.setComponentState("slider-ref", React.createRef());
  }
  static getName(): string {
    return "Logo Cloud 10";
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("orientationchange", this.handleResize);
    if (this.containerRef) {
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
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("orientationchange", this.handleResize);
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
    this.resizeObserver ??= new ResizeObserver(this.handleResize);
    this.resizeObserver.observe(el);
    setTimeout(() => {
      if (el !== this.containerRef) return;
      const logoItems = this.getVisibleLogoItems();
      const effectiveChunkSize = this.getEffectiveChunkSize();
      if (logoItems.length > effectiveChunkSize) {
        el.addEventListener('wheel', this.handleWheel, { passive: false });
      }
    }, 0);
  };
  hasMedia = (media?: TypeMediaInputValue) => {
    const value = media as { url?: string; value?: { url?: string } } | undefined;
    return Boolean(value?.url ?? value?.value?.url);
  };
  getAllLogoItems = (): TImage[] => this.castToObject<TImage[]>("image-items") ?? [];
  getVisibleLogoItems = (): TImage[] => this.getAllLogoItems().filter((img) => this.hasMedia(img?.image));
  getChunkSize = (): number => {
    const propValue = this.getPropValue("itemCount");
    const requested = Number(propValue) || 4;
    return requested > 0 ? requested : 1;
  };
  getEffectiveChunkSize = (): number => {
    const desktopChunkSize = this.getChunkSize();
    return this.isPhone() ? Math.min(2, desktopChunkSize) : desktopChunkSize;
  };
  getViewportKey = (): string => (this.isPhone() ? "phone" : "desktop");
  isPhone = (): boolean => {
    const width = this.containerRef?.clientWidth
      ?? document.getElementById('playground')?.clientWidth
      ?? window.innerWidth;
    return width <= 640;
  };
  chunkLogos = (logos: TImage[], size: number): TImage[][] => {
    const chunkSize = Math.max(1, size);
    if (logos.length === 0) return [];
    const chunks: TImage[][] = [];
    for (let i = 0; i < logos.length; i += chunkSize) {
      chunks.push(logos.slice(i, i + chunkSize));
    }
    return chunks;
  };
  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const subtitleStr = this.castToString(subtitle);
    const titleStr = this.castToString(title);
    const descStr = this.castToString(description);
    const logoItems = this.getVisibleLogoItems();
    const itemCount = this.getChunkSize();
    const sliderRef = this.getComponentState("slider-ref");
    const effectiveChunkSize = this.getEffectiveChunkSize();
    const viewportKey = this.getViewportKey();

    const paddedLogos = [...logoItems];
    const chunkSize = Math.max(1, effectiveChunkSize);
    let padIndex = 0;
    while (paddedLogos.length > 0 && paddedLogos.length % chunkSize !== 0) {
      paddedLogos.push(paddedLogos[padIndex % paddedLogos.length]);
      padIndex += 1;
    }

    const totalLogos = paddedLogos.length;
    const shouldAnimate = totalLogos > effectiveChunkSize;
    const chunks = this.chunkLogos(paddedLogos, effectiveChunkSize);
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
          {(subtitleStr || titleStr || descStr) && (
            <Base.VerticalContent className={this.decorateCSS("heading")} ref={this.setContainerRef}>
              {subtitleStr && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {titleStr && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}
              {descStr && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}
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
                    const visibleItems = chunk.filter((img: TImage) => this.hasMedia(img.image));
                    const gridColumns = Math.min(itemCount, Math.max(1, visibleItems.length));
                    const phoneColumns = Math.min(2, gridColumns);
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
                                  value={img.image}
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