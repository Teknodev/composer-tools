import React, { createRef } from "react";
import styles from "./stats12.module.scss";
import { BaseStats, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import ComposerSlider from "../../../composer-base-components/slider/slider";

interface FeatureItem {
  icon?: string | TypeMediaInputValue;
  title: string;
  description: string;
}

class Stats12 extends BaseStats {
  containerRef = createRef<HTMLDivElement>();
  sliderRef = createRef<any>();

  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
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
      type: "array",
      key: "stats",
      displayer: "Stats",
      value: [
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "FiClock" } },
            { type: "string", key: "title", displayer: "Title", value: "90 Days Return" },
            { type: "string", key: "description", displayer: "Description", value: "If goods have problems, consectetur adipiscing elit." },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "BsBookmarkDash" } },
            { type: "string", key: "title", displayer: "Title", value: "Free Delivery" },
            { type: "string", key: "description", displayer: "Description", value: "For all orders over $50, consectetur adipim scing elit." },
          ],
        },
        {
          type: "object",
          key: "stat",
          displayer: "Stat",
          value: [
            { type: "media", key: "icon", displayer: "Icon", additionalParams: { availableTypes: ["image", "icon"] }, value: { type: "icon", name: "FiCreditCard" } },
            { type: "string", key: "title", displayer: "Title", value: "Secure Payment" },
            { type: "string", key: "description", displayer: "Description", value: "100% secure payment, consectetur adipim scing elit." },
          ],
        },
      ],
    });
    this.addProp({
      type: "media",
      key: "prev-button-icon",
      displayer: "Previous Slide Button",
      additionalParams: { availableTypes: ["image", "icon"] },
      value: { type: "icon", name: "MdArrowBackIos" },
    });
    this.addProp({
      type: "media",
      key: "next-button-icon",
      displayer: "Next Slide Button",
      additionalParams: { availableTypes: ["image", "icon"] },
      value: { type: "icon", name: "MdArrowForwardIos" },
    });

    this.addProp({
      type: "number",
      key: "itemsPerRow",
      displayer: "Items Per Row",
      value: 3,
    });
  }

  static getName(): string {
    return "Stats 12";
  }
  handlePrev = () => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickPrev();
    }
  };

  handleNext = () => {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickNext();
    }
  };

  render() {
    const features = this.castToObject<FeatureItem[]>("stats");
    const itemsPerRow = this.getPropValue("itemsPerRow") ?? 3;
    const prevIcon = this.getPropValue("prev-button-icon");
    const nextIcon = this.getPropValue("next-button-icon");
    const prevIconExist = typeof prevIcon === "object" ? (prevIcon?.name || prevIcon?.url) : prevIcon;
    const nextIconExist = typeof nextIcon === "object" ? (nextIcon?.name || nextIcon?.url) : nextIcon;

    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const isSubtitleExist = this.castToString(subtitle);
    const isTitleExist = this.castToString(title);
    const isDescriptionExist = this.castToString(description);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {(isSubtitleExist || isTitleExist || isDescriptionExist) && (
          <Base.MaxContent className={this.decorateCSS("header-max-content")}>
            <Base.VerticalContent className={this.decorateCSS("header-wrapper")}>
              {isSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
              {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
              {isDescriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
            </Base.VerticalContent>
          </Base.MaxContent>
        )}
        <Base.MaxContent
          className={`${this.decorateCSS("max-content")} ${this.decorateCSS(`cols-${itemsPerRow}`)} ${this.decorateCSS("desktop-wrapper")}`}
          ref={this.containerRef}
        >
          {features.map((feat, idx) => {
            const iconExist = typeof feat.icon === "object" ? (feat.icon?.name || feat.icon?.url) : feat.icon;
            const titleExist = this.castToString(feat.title);
            const descriptionExist = this.castToString(feat.description);
            if (!iconExist && !titleExist && !descriptionExist) return null;
            return (
              <div key={idx} className={this.decorateCSS("feature")}>
                <div className={this.decorateCSS("top-row")}>
                  {iconExist && (
                    <Base.Media value={typeof feat.icon === "object" ? feat.icon : { type: "icon", name: feat.icon }} className={this.decorateCSS("icon")} />
                  )}
                  {(titleExist || descriptionExist) && (
                    <div className={this.decorateCSS("text-group")}>
                      {titleExist && (
                        <Base.SectionTitle className={this.decorateCSS("title")}>
                          {feat.title}
                        </Base.SectionTitle>
                      )}
                      {descriptionExist && (
                        <Base.SectionDescription className={this.decorateCSS("description")}>
                          {feat.description}
                        </Base.SectionDescription>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </Base.MaxContent>
        <div className={this.decorateCSS("mobile-wrapper")}>
          <ComposerSlider
            ref={this.sliderRef}
            className={this.decorateCSS("mobile-slider")}
            infinite={true}
            dots={false}
            speed={0}
            autoplaySpeed={20000}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
            autoplay={false}
          >
            {features.map((feat, idx) => {
              const iconExist = typeof feat.icon === "object" ? (feat.icon?.name || feat.icon?.url) : feat.icon;
              const titleExist = this.castToString(feat.title);
              const descriptionExist = this.castToString(feat.description);
              if (!iconExist && !titleExist && !descriptionExist) return null;
              return (
                <div key={idx} className={this.decorateCSS("feature")}>
                  <div className={this.decorateCSS("top-row")}>
                    {iconExist && (
                      <Base.Media value={typeof feat.icon === "object" ? feat.icon : { type: "icon", name: feat.icon }} className={this.decorateCSS("icon")} />
                    )}
                    {(titleExist || descriptionExist) && (
                      <div className={this.decorateCSS("text-group")}>
                        {titleExist && (
                          <Base.SectionTitle className={this.decorateCSS("title")}>
                            {feat.title}
                          </Base.SectionTitle>
                        )}
                        {descriptionExist && (
                          <Base.SectionDescription className={this.decorateCSS("description")}>
                            {feat.description}
                          </Base.SectionDescription>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </ComposerSlider>
          {(prevIconExist || nextIconExist) && (
            <div className={this.decorateCSS("slider-buttons")}>
              {prevIconExist && (
                <button onClick={this.handlePrev} className={this.decorateCSS("prev-button")}>
                  <Base.Media value={prevIcon} className={this.decorateCSS("prev-icon")} />
                </button>
              )}
              {nextIconExist && (
                <button onClick={this.handleNext} className={this.decorateCSS("next-button")}>
                  <Base.Media value={nextIcon} className={this.decorateCSS("next-icon")} />
                </button>
              )}
            </div>
          )}
        </div>
      </Base.Container>
    );
  }
}

export default Stats12;