import * as React from "react";
import { BaseHeroSection } from "../../EditorComponent";
import styles from "./hero-section4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class HeroSection4 extends BaseHeroSection {
  imageRef: React.RefObject<HTMLDivElement | null>;
  rafId: number | null = null;
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Build perfect websites",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Unlimited power",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Most of our writings have centered on implementing strategies for business units, with their unique <br /><br /> geeza arse it's your round grub sloshed burke, my good sir chancer he legged it he lost his bottle pear shaped bugger all mate",
    });

    this.addProp({
      type: "string",
      key: "note",
      displayer: "Note",
      value: "NOTE: Some details are very important.",
    });

    
    this.addProp({
      type: "media",
      key: "logo",
      displayer: "Logo",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "",
      },
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      additionalParams: {
        maxElementCount: 2,
      },
      value: [
        INPUTS.BUTTON("button", "Button", "More Projects", "", "", null, "Tertiary")
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617f0abd2970002c62451a?alt=media&timestamp=1719483639150",
      },
    });

    this.addProp({
      type: "boolean",
      key: "image-anm",
      displayer: "Animation",
      value: true,
    });

    this.setComponentState("scrollY", 0);
    this.setComponentState("animate", false);
    this.imageRef = React.createRef<HTMLDivElement>();
  }

  onComponentDidMount() {
    const container = Base.Navigator.getWrapperContainer();
    const wrapper = container?.wrapper;

    if (wrapper && typeof wrapper.addEventListener === "function") {
      wrapper.addEventListener("scroll", this.handleScroll);
    }
  }

  onComponentWillUnmount() {
    const container = Base.Navigator.getWrapperContainer();
    const wrapper = container?.wrapper;

    if (wrapper && typeof wrapper.removeEventListener === "function") {
      wrapper.removeEventListener("scroll", this.handleScroll);
    }
    
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

handleScroll = () => {
  if (this.rafId !== null) {
    return;
  }

  this.rafId = requestAnimationFrame(() => {
    this.rafId = null;
    
    const scrollY = Base.Navigator.getWrapperContainer()?.scrollY || 0;
    const currentScrollY = this.getComponentState("scrollY");
    if (currentScrollY !== scrollY) {
      this.setComponentState("scrollY", scrollY);
    }

    const targetEl = this.imageRef.current;
    if (!targetEl) return;

    const rect = targetEl.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const isVisible = rect.top < windowHeight && rect.bottom > 0;
    
    let progress = 0;
    if (isVisible) {
      const elementHeight = rect.height;
      const visibleDistance = windowHeight - rect.top;
      progress = Math.min(Math.max(visibleDistance / (windowHeight + elementHeight), 0), 1);
    }
    
    const currentAnimate = this.getComponentState("animate");
    const currentProgress = this.getComponentState("animationProgress");
    
    if (currentAnimate !== isVisible) {
      this.setComponentState("animate", isVisible);
    }
    
    if (Math.abs((currentProgress || 0) - progress) > 0.01) {
      this.setComponentState("animationProgress", progress);
    }
  });
};

  static getName(): string {
    return "Hero Section 4";
  }

  render() {
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const imageAnm = this.getPropValue("image-anm");
    const image = this.getPropValue("image");
    const overlay = this.getPropValue("overlay");
    const logo = this.getPropValue("logo");
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const note = this.castToString(this.getPropValue("note"));
    const hasButtons = buttons && buttons.length > 0 && buttons.some(btn => this.castToString(btn.text) || btn.icon);
    const showCard = subtitle || title || description || hasButtons || note;
    const alignment = Base.getContentAlignment();

const getStyle = (direction: "up" | "down") => {
  const isAnimating = this.getComponentState("animate");
  const progress = this.getComponentState("animationProgress") || 0;
  
  if (!imageAnm || !isAnimating) return {};

  if (direction === "up") {
    const translateY = -30 * (1 - progress);
    return {
      transform: `translate(0%, ${translateY}%) translate3d(0px, 0px, 0px)`,
    };
  }

  if (direction === "down") {
    const translateY = 100 - 200 * progress;
    return {
      transform: `translate3d(0px, ${translateY}px, 0px)`,
    };
  }

  return {};
};

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${
          !imageAnm && this.decorateCSS("no-image-anm")
        } ${!image && this.decorateCSS("no-background-image")} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`}
      >
        <div className={`${this.decorateCSS("max-content")} ${!image && this.decorateCSS("no-image-wrapper")}`}>
          {image && (
            <div 
            ref={this.imageRef} className={this.decorateCSS("image-container")}>
              <div
                className={`${this.decorateCSS("image")} ${!imageAnm && this.decorateCSS("no-img-anm")}`}
                style={imageAnm ? getStyle("up") : undefined}
              >
                <Base.Media
                  className={this.decorateCSS("image-element")}
                  value={image?.type === "video" ? {
                    ...image,
                    settings: {
                      autoplay: true,
                      loop: true,
                      muted: true,
                      controls: false
                    }
                  } : image}
                />
                {overlay && image && (image.type === "image" || image.type === "video") && image.url && <div className={this.decorateCSS("overlay")} />}
              </div>
            </div>
          )}

         <Base.MaxContent className={`${this.decorateCSS("card-container")} ${!image && this.decorateCSS("no-image")} ${!image ? this.decorateCSS("without-image") : ""}`}>
          {showCard && (
              <Base.VerticalContent className={this.decorateCSS("card")} style={getStyle("down")}>
                {logo && (
                  <Base.Media 
                    value={logo} 
                    className={`${this.decorateCSS("logo")} ${logo?.type === "image" ? this.decorateCSS("logo-image") : this.decorateCSS("logo-icon")}`} 
                  />
                )}
                {subtitle && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {this.getPropValue("subtitle")}
                  </Base.SectionSubTitle>
                )}
                {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                {hasButtons && (
                  <div className={this.decorateCSS("button-container")}>
                    {buttons.map((button: INPUTS.CastedButton, index: number) => {
                      const buttonText = this.castToString(button.text);
                      if (!buttonText && !button.icon) return null;
                      return (
                        <ComposerLink key={index} path={button?.url || '#'}>
                          <Base.Button 
                            buttonType={button?.type || "Tertiary"} 
                            className={this.decorateCSS("button")}>
                            {buttonText && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                            {button.icon && (() => {
                              const iconValue = typeof button.icon === "string" ? { type: "icon" as const, name: button.icon } : button.icon;
                              return iconValue.name && 
                              <Base.Media
                                value={iconValue}
                                className={this.decorateCSS("button-icon")}
                              />;
                            })()}
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
                {note && <Base.P className={this.decorateCSS("note")}>{this.getPropValue("note")}</Base.P>}
            </Base.VerticalContent>
            )}
          </Base.MaxContent>
        </div>
      </Base.Container>
    );
  }
}

export default HeroSection4;
