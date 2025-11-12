import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Feature = {
  title: React.JSX.Element;
  iconFeature: TypeMediaInputValue;
};

class Feature7 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Image",
      additionalParams: {
        availableTypes: ["image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a25bdb2f8a5b002ce67862?alt=media",
      },
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "FEATURES",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Everything starts with a Marketing plan.",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Turn your business into a sales machine today with lorem Things go wrong have questions.",
    });

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
            {
              type: "string",
              key: "title",
              displayer: "Text",
              value: "Amazing communication.",
            },
            {
              type: "media",
              key: "iconFeature",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaCheck",
              },
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Text",
              value: "Best trending designing experience.",
            },
            {
              type: "media",
              key: "iconFeature",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaCheck",
              },
            },
          ],
        },
        {
          type: "object",
          key: "feature",
          displayer: "Feature",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Text",
              value: "Email & Live chat.",
            },
            {
              type: "media",
              key: "iconFeature",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaCheck",
              },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "links",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Want to learn more? Click here", "", "FaArrowRight", null, "Link")
      ],
    });
  }

  static getName(): string {
    return "Feature 7";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"))
    const descriptionExist = this.castToString(this.getPropValue("description"))
    const image = this.getPropValue("image");

    const features = this.castToObject<Feature[]>("features");
    const links = this.castToObject<INPUTS.CastedButton[]>("links");

    const hasTextContent =
      subtitleExist ||
      titleExist ||
      descriptionExist ||
      (this.getPropValue("links").length > 0) ||
      (this.getPropValue("features").length > 0);

      const alignment = Base.getContentAlignment();
      
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("wrapper")}>
            {!!image?.url && (
              <Base.GridCell className={this.decorateCSS("image-container")}>
                <Base.Media
                  value={image}
                  className={hasTextContent ? this.decorateCSS("image") : this.decorateCSS("image-no-border-radius")}
                />
              </Base.GridCell>
            )}
            {hasTextContent && (
              <Base.GridCell
                className={this.decorateCSS("text-container")}>
                {(subtitleExist || titleExist || descriptionExist || features.length > 0 || links.length > 0) && (
                  <Base.VerticalContent className={`${this.decorateCSS("title-wrapper")}`}>
                    {subtitleExist && (
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                        {this.getPropValue("subtitle")}
                      </Base.SectionSubTitle>
                    )}
                    {titleExist && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {this.getPropValue("title")}
                      </Base.SectionTitle>
                    )}
                    {descriptionExist && (
                      <Base.SectionDescription className={this.decorateCSS("description")}>
                        {this.getPropValue("description")}
                      </Base.SectionDescription>
                    )}
                    {(this.getPropValue("features").length > 0) && (
                      <Base.Row className={this.decorateCSS("featuresList")}>
                        {features.map((item: Feature, index: number) => {
                          const titleExist = !!this.castToString(item.title);

                          if (!titleExist && !item.iconFeature) return null;

                          return (
                            <div key={index} className={`${this.decorateCSS("feature")} ${alignment === "center" ? this.decorateCSS("feature-center") : ""}`}>
                              {item.iconFeature && (
                                <div className={this.decorateCSS("icon-wrapper")}>
                                  <Base.Media
                                    value={item.iconFeature}
                                    className={this.decorateCSS("iconFeature")}
                                  />
                                </div>
                              )}
                              {titleExist && (
                                <Base.H4 className={this.decorateCSS("featureTitle")}>
                                  {item.title}
                                </Base.H4>
                              )}
                            </div>
                          );
                        })}
                      </Base.Row>
                    )}

                    {(this.getPropValue("links").length > 0) && (
                      <Base.Row className={this.decorateCSS("linkList")}>
                        {links.map((item: INPUTS.CastedButton, index: number) => {
                          const buttonExist = this.castToString(item.text) || item.icon;

                          return buttonExist && (
                            <div key={index} className={this.decorateCSS("linkContainer")}>
                              <ComposerLink path={item.url}>
                                <Base.Button buttonType={item.type} className={this.decorateCSS("link")}>
                                  {this.castToString(item.text) && <Base.P className={this.decorateCSS("linkText")}>{item.text}</Base.P>}
                                  {item.icon && (
                                    <Base.Media
                                      value={{ type: "icon", name: item.icon }}
                                      className={this.decorateCSS("iconLink")}
                                    />
                                  )}
                                </Base.Button>
                              </ComposerLink>
                            </div>
                          );
                        })}
                      </Base.Row>
                    )}
                  </Base.VerticalContent>
                )}


              </Base.GridCell>
            )}
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature7;
