import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats14.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type featuresItem = {
  topText: React.JSX.Element;
  bottomText: React.JSX.Element;
  title: React.JSX.Element; 
}

type button = {
  text: React.JSX.Element;
}

class Stats14 extends BaseStats {

  constructor(props?: any) {
    super(props, styles);

this.addProp({
  type: "string",
  key: "title",
  displayer: "Title",
  value: "Super Simple & Quick Way",
});

    this.addProp({
      type: "array",
      key: "features-item",
      displayer: "Feature Items",
      value: [
        {
          type: "object",
          key: "features-item",
          displayer: "Feature 1",
          value: [
            {
              type: "string",
              key: "topText",
              displayer: "Top Text",
              value:
                "From 20 days",
            },
            {
              type: "string",
              key: "bottomText",
              displayer: "Bottom Text",
              value:
                "minimal period",
            },
          ],
        },
                {
          type: "object",
          key: "features-item",
          displayer: "Feature 2",
          value: [
            {
              type: "string",
              key: "topText",
              displayer: "Top Text",
              value:
                "Up to 7.5%",
            },
            {
              type: "string",
              key: "bottomText",
              displayer: "Bottom Text",
              value:
                "yearly income",
            },
          ],
        },
                {
          type: "object",
          key: "features-item",
          displayer: "Feature 3",
          value: [
            {
              type: "string",
              key: "topText",
              displayer: "Top Text",
              value:
                "From $1,000 ",
            },
            {
              type: "string",
              key: "bottomText",
              displayer: "Bottom Text",
              value:
                "minimal deposit",
            },
          ],
        },
      ],
    });



    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Button ",
      value: [
        INPUTS.BUTTON("button", "Button", "Download Free Trial", "", "", "", "Primary"),
        INPUTS.BUTTON("button", "Button", "Learn More", "", "", "", "White")
      ],
    });


this.addProp({
  type: "image",
  key: "image",
  displayer: "Image",
  value: "https://impreza-landing.us-themes.com/wp-content/uploads/2023/10/balazs-ketyi-sScmok4Iq1o-unsplash-1070x803.jpg",
});

}


  static getName(): string {
    return "Stats 14";
  }

  render() {
    const title = this.getPropValue("title");
    const isTitleExist = this.castToString(title);

    const FeaturesItem = this.castToObject<featuresItem[]>("features-item");
    const image = this.getPropValue("image");

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");


    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
        
          <div className={this.decorateCSS("stats14-page")}>
            {(isTitleExist ) && (
              <Base.VerticalContent className={this.decorateCSS("left-container")}>
                {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}

                {(FeaturesItem.length > 0) && (
                  <Base.Row className={this.decorateCSS("features-list")}>
                    {FeaturesItem.map((item: any, index: number) => (
                      <div
                        key={index}
                        className={this.decorateCSS("features-list-item")} 
                      >
                        {this.castToString(item.topText) && (
                          <Base.P className={this.decorateCSS("features-list-items-topText")}>
                            {item.topText}
                          </Base.P>
                        )}
                        {this.castToString(item.bottomText) && (
                          <Base.P className={this.decorateCSS("features-list-items-bottomText")}>
                            {item.bottomText}
                          </Base.P>
                        )}
                      </div>
                    ))}
                  </Base.Row>
                )}


          {buttons.length > 0 && (
            <Base.Row className={this.decorateCSS("button-container")}>
              {buttons.map((item, index) => {
              const buttonText = this.castToString(item.text || "");
              const buttonUrl = item.url || "#"; // url boşsa fallback

              if (!buttonText) return null;

              return (
                <ComposerLink key={`dw-1-btn-${index}`} path={buttonUrl}>
                  <Base.Button buttonType={item.type}>
                    {item.icon && <Base.Icon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }} />}
                    {item.text}
                  </Base.Button>
                </ComposerLink>
              );
            })}
            </Base.Row>
          )}


                
              </Base.VerticalContent>
      )}

            <div className={this.decorateCSS("right-container")}>
            <Base.SectionTitle className={`${this.decorateCSS("right-container")} ${!image ? this.decorateCSS("right-container-without-image") : ""}`}>
              {image && (
                <img
                  src={this.getPropValue("image")}
                  alt=""
                  className={this.decorateCSS("image-circle")}
                />
              )}
            </Base.SectionTitle>
          </div>



          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Stats14;
