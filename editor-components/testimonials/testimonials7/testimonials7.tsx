import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials7.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";

type Background = {
  componentBackground: TypeMediaInputValue;
  overlay: boolean;
};

type Item = {
  profileImage: TypeMediaInputValue;
  name: React.JSX.Element;
  nameId: React.JSX.Element;
  description: React.JSX.Element;
};

class Testimonials7Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "background",
      displayer: "Background",
      value: [
        {
          type: "media",
          key: "componentBackground",
          displayer: "Background Media",
          additionalParams: { availableTypes: ["image", "video"] },
          value: {
            type: "image",
            url: "",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });
    this.addProp({
      type: "icon",
      key: "prevIcon",
      displayer: "Prev Icon",
      value: "HiArrowLeft",
    });
    this.addProp({
      type: "icon",
      key: "nextIcon",
      displayer: "Next Icon",
      value: "HiArrowRight",
    });
    this.addProp({
      type: "array",
      key: "card-items",
      displayer: "Card Items",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "description",
              value: "'Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.'",
              displayer: "Description",
            },
            {
              type: "media",
              key: "profileImage",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617301bd2970002c623790?alt=media&timestamp=1719483639150",
              },
              displayer: "Media",
            },
            {
              type: "string",
              key: "name",
              value: "Tomas Reuss",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "CLIENT OF CLUB",
              displayer: "Position",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "description",
              value: "'Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.'",
              displayer: "Description",
            },
            {
              type: "media",
              key: "profileImage",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617301bd2970002c623791?alt=media&timestamp=1719483639150",
              },
              displayer: "Media",
            },
            {
              type: "string",
              key: "name",
              value: "Monica Reuss",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "CLIENT OF CLUB",
              displayer: "Position",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "description",
              value: "'\"Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.\"'",
              displayer: "Description",
            },
            {
              type: "media",
              key: "profileImage",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617301bd2970002c623792?alt=media&timestamp=1719483639150",
              },
              displayer: "Media",
            },
            {
              type: "string",
              key: "name",
              value: "Linda Anderson",
              displayer: "Name",
            },
            {
              type: "string",
              key: "nameId",
              value: "CLIENT OF CLUB",
              displayer: "Position",
            },
          ],
        },
      ],
    });
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("active", 0);
    this.setComponentState("activeSlideIndex", 0);
  }

  static getName(): string {
    return "Testimonials 7";
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      beforeChange: (current: number, next: number) => {
        this.setComponentState("active", next);
        this.setComponentState("activeSlideIndex", next);
      },
      responsive: [
        {
          breakpoint: 450,
          settings: {
            dots: true,
          },
        },
      ],
    };
    const sliderRef = this.getComponentState("slider-ref");
    const bg = this.castToObject<Background>("background");
    const hasBackground = !!(bg.componentBackground && (bg.componentBackground.type === "icon" ? bg.componentBackground.name : bg.componentBackground.url));
    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${!hasBackground ? this.decorateCSS("no-background") : ""}`}
      >
        {hasBackground && <Base.Media value={bg.componentBackground} className={this.decorateCSS("background-image")} />}
        {bg.overlay && <div className={this.decorateCSS("overlay")} />}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials7")}>
            <div className={this.decorateCSS("slider-wrapper")}>
              <ComposerSlider ref={sliderRef} {...settings} className={this.decorateCSS("slider-style")}>
                {this.castToObject<Item[]>("card-items").map((item: Item, index: number) => (
                  <div key={index} className={this.decorateCSS("card")}>
                    {this.getPropValue("prevIcon") && (
                      <button
                        onClick={() => { sliderRef.current.slickPrev(); }}
                        className={this.decorateCSS("button-left")}
                      >
                        <Base.Icon name={this.getPropValue("prevIcon")} propsIcon={{ className: this.decorateCSS("arrow") }}></Base.Icon>
                      </button>
                    )}
                    {(this.castToString(item.description) || item.profileImage || this.castToString(item.name) || this.castToString(item.nameId)) && (
                      <Base.VerticalContent className={this.decorateCSS("item-content")}>
                        {this.castToString(item.description) && (
                          <Base.P className={this.decorateCSS("item-description")}>{item.description}</Base.P>
                        )}
                        {(item.profileImage || this.castToString(item.name) || this.castToString(item.nameId)) && (
                          <div className={this.decorateCSS("profile")}>
                            {item.profileImage && <Base.Media value={item.profileImage} className={this.decorateCSS("image")} />}
                            <Base.VerticalContent className={this.decorateCSS("profile-text")}>
                              {this.castToString(item.name) && (
                                <div className={this.decorateCSS("item-name")}>{item.name}</div>
                              )}
                              {this.castToString(item.nameId) && (
                                <div className={this.decorateCSS("item-name-id")}>{item.nameId}</div>
                              )}
                            </Base.VerticalContent>
                          </div>
                        )}
                      </Base.VerticalContent>
                    )}
                    {this.getPropValue("nextIcon") && (
                      <button
                        onClick={() => { sliderRef.current.slickNext(); }}
                        className={this.decorateCSS("button-right")}
                      >
                        <Base.Icon name={this.getPropValue("nextIcon")} propsIcon={{ className: this.decorateCSS("arrow") }}></Base.Icon>
                      </button>
                    )}
                  </div>
                ))}
              </ComposerSlider>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials7Page;
