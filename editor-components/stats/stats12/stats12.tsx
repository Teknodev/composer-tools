import React, { createRef } from "react";
import styles from "./stats12.module.scss";
import { BaseStats } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import ComposerSlider from "../../../composer-base-components/slider/slider";

interface FeatureItem {
  icon?: string;
  title: string;
  description: string;
}

class Stats12 extends BaseStats {
  containerRef = createRef<HTMLDivElement>();
  sliderRef = createRef<any>();

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "features",
      displayer: "Features",
      value: [
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "icon", key: "icon", displayer: "Icon", value: "FiClock" },
            { type: "string", key: "title", displayer: "Title", value: "90 Days Return" },
            { type: "string", key: "description", displayer: "Description", value: "If goods have problems, consectetur adipiscing elit." },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "icon", key: "icon", displayer: "Icon", value: "BsBookmarkDash" },
            { type: "string", key: "title", displayer: "Title", value: "Free Delivery" },
            { type: "string", key: "description", displayer: "Description", value: "For all orders over $50, consectetur adipim scing elit." },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            { type: "icon", key: "icon", displayer: "Icon", value: "FiCreditCard" },
            { type: "string", key: "title", displayer: "Title", value: "Secure Payment" },
            { type: "string", key: "description", displayer: "Description", value: "100% secure payment, consectetur adipim scing elit." },
          ],
        },
      ],
    });
    this.addProp({
      type: "icon",
      key: "prev-button-icon",
      displayer: "Previous Slide Button",
      value: "MdArrowBackIos",
    });
    this.addProp({
      type: "icon",
      key: "next-button-icon",
      displayer: "Next Slide Button",
      value: "MdArrowForwardIos",
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
    const features = this.castToObject<FeatureItem[]>("features");
    const itemsPerRow = this.getPropValue("itemsPerRow") ?? 3;
    const prevIcon = this.getPropValue("prev-button-icon");
    const nextIcon = this.getPropValue("next-button-icon");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent
          className={`${this.decorateCSS("max-content")} ${this.decorateCSS(`cols-${itemsPerRow}`)} ${this.decorateCSS("desktop-wrapper")}`}
          ref={this.containerRef}
        >
          {features.map((feat, idx) => (
            <div key={idx} className={this.decorateCSS("feature")}>
              <div className={this.decorateCSS("top-row")}>
                {feat.icon && (
                  <Base.Icon
                    name={feat.icon}
                    propsIcon={{ className: this.decorateCSS("icon") }}
                  />
                )}
                <div className={this.decorateCSS("text-group")}>
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {feat.title}
                  </Base.SectionTitle>
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {feat.description}
                  </Base.SectionDescription>
                </div>
              </div>
            </div>
          ))}
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
            {features.map((feat, idx) => (
              <div key={idx} className={this.decorateCSS("feature")}>
                <div className={this.decorateCSS("top-row")}>
                  {feat.icon && (
                    <Base.Icon
                      name={feat.icon}
                      propsIcon={{ className: this.decorateCSS("icon") }}
                    />
                  )}
                  <div className={this.decorateCSS("text-group")}>
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                      {feat.title}
                    </Base.SectionTitle>
                    <Base.SectionDescription className={this.decorateCSS("description")}>
                      {feat.description}
                    </Base.SectionDescription>
                  </div>
                </div>
              </div>
            ))}
          </ComposerSlider>
          <div className={this.decorateCSS("slider-buttons")}>
            <button onClick={this.handlePrev} className={this.decorateCSS("prev-button")}>
              <Base.Icon name={prevIcon} />
            </button>
            <button onClick={this.handleNext} className={this.decorateCSS("next-button")}>
              <Base.Icon name={nextIcon} />
            </button>
          </div>
        </div>
      </Base.Container>
    );
  }
}

export default Stats12;