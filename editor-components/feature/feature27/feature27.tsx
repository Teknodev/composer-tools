import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature27.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";


class FeatureComponent27 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Your Business"
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "#1 SEO Agency to Improve Your Business"
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test."
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/placeholder-image?alt=media"
    });

   
        this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Primary Button", "Get Started", "", "FaArrowRight", null, "Primary"),
        INPUTS.BUTTON("button", "Secondary Button", "Learn More", "", "FaArrowRight", null, "Link")
      ]
    });
  }

  static getName(): string {
    return "Feature 27";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const image = this.getPropValue("image");
    const buttons = this.castToObject<Array<any>>("buttons") || [];

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("content")}>
              {subtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}

              {title && (
                <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>
              )}

              {description && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}

              {buttons.length > 0 && (
                <div className={this.decorateCSS("buttons")}>
                  {buttons.map((button: INPUTS.CastedButton, index: number) => {
                    const buttonTextExists = this.castToString(button.text);
                    const iconExists = button.icon;

                    return (buttonTextExists || iconExists) && (
                      <div key={index} className={this.decorateCSS("button-item")}>
                        <ComposerLink path={button.url || '#'}>
                          <Base.Button 
                            buttonType={button.type}
                            className={this.decorateCSS("button")}
                          >
                            {buttonTextExists && (
                              <Base.P className={this.decorateCSS("button-text")}>
                                {button.text}
                              </Base.P>
                            )}
                            {iconExists && (
                              <Base.Media 
                                value={{ type: "icon", name: iconExists }}
                                className={this.decorateCSS("btn-icon")}
                              />
                            )}
                          </Base.Button>
                        </ComposerLink>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className={this.decorateCSS("visual")}>
              <Base.Media value={{ type: "image", url: image }} className={this.decorateCSS("visual-image")} />
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default FeatureComponent27;
