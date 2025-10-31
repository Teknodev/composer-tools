import * as React from "react";
import { BaseHeroSection } from "../../EditorComponent";
import styles from "./hero-section4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { BaseNavigator } from "../../EditorComponent";

class HeroSection4 extends BaseHeroSection {
  imageRef: React.RefObject<HTMLDivElement>;
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "boolean",
          key: "subtitle_line",
          displayer: "Subtitle Line",
          value: true,
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Build perfect websites",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Unlimited power",
        },
        {
          type: "string",
          key: "desc",
          displayer: "Description",
          value:
            "Most of our writings have centered on implementing strategies for business units, with their unique <br /><br /> geeza arse it's your round grub sloshed burke, my good sir chancer he legged it he lost his bottle pear shaped bugger all mate",
        },
        {
          type: "string",
          key: "note",
          displayer: "Note",
          value: "NOTE: Some details are very important.",
        },
      ],
    });

    this.addProp(
      INPUTS.BUTTON("button", 
        "Button", 
        "More Projects", 
        "", 
        null, 
        null, 
        "Tertiary")
    );

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Image",
      additionalParams: {
        availableTypes: ["image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617f0abd2970002c62451a?alt=media&timestamp=1719483639150",
      },
    });

    this.addProp({
      type: "boolean",
      key: "image-anm",
      displayer: "Image Animation",
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
  }

handleScroll = () => {
  const scrollY = Base.Navigator.getWrapperContainer()?.scrollY || 0;
  this.setComponentState("scrollY", scrollY);

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
  
  this.setComponentState("animate", isVisible);
  this.setComponentState("animationProgress", progress);
};

  static getName(): string {
    return "Hero Section 4";
  }

  render() {
    const button = this.castToObject("button") as INPUTS.CastedButton;
    const card: any = this.castToObject("card");

    const imageAnm = this.getPropValue("image-anm");
    const image = this.getPropValue("image");
    const buttonText = this.castToString(button.text);
    const showCard = this.castToString(card.subtitle) || 
                    this.castToString(card.title) || 
                    this.castToString(card.desc) || 
                    buttonText || 
                    this.castToString(card.note);
    const scrollY = this.getComponentState("scrollY");

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
        }`}
        isFull={true}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {image && (
            <div 
            ref={this.imageRef} className={this.decorateCSS("image-container")}>
              <Base.Media
                className={`${this.decorateCSS("image")} ${!imageAnm && this.decorateCSS("no-img-anm")}`}
                value={image}
                style={getStyle("up")}
              />
            </div>
          )}

          {showCard && (
            <div className={this.decorateCSS("card")} style={getStyle("down")}>
              <div className={this.decorateCSS("box")}>
                {(this.castToString(card.subtitle) || this.castToString(card.title)) && (
                  <div className={this.decorateCSS("heading")}>
                    {this.castToString(card.subtitle) && (
                      <div className={this.decorateCSS("sub-heading-container")}>
                        {card.subtitle_line && (
                          <hr className={this.decorateCSS("sub-heading-line")} />
                        )}
                        <span className={this.decorateCSS("sub-heading-title")}>
                          {card.subtitle}
                        </span>
                      </div>
                    )}
                    {this.castToString(card.title) && <h2 className={this.decorateCSS("title")}>{card.title}</h2>}
                  </div>
                )}
                {this.castToString(card.desc) && <p className={this.decorateCSS("desc")}>{card.desc}</p>}
                {buttonText && (
                  <div className={this.decorateCSS("button-container")}>
                    <ComposerLink path={button?.url || '#'}>
                      <Base.Button 
                        buttonType={button?.type || "Tertiary"} 
                        className={this.decorateCSS("button")}>
                        <Base.P className={this.decorateCSS("button-text")}>{buttonText}</Base.P>
                      </Base.Button>
                    </ComposerLink>
                  </div>
                )}
                {this.castToString(card.note) && <p className={this.decorateCSS("note")}>{this.castToString(card.note)}</p>}
              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection4;
