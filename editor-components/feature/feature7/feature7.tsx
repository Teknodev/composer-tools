import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature7.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Feature = {
  title: React.JSX.Element;
  iconFeature: string;
};

class Feature7 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a25bdb2f8a5b002ce67862?alt=media",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "FEATURES",
    });

    this.addProp({
      type: "string",
      key: "mainTitle",
      displayer: "Main Title",
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
              displayer: "Feature 1",
              value: "Amazing communication.",
            },
            {
              type: "icon",
              key: "iconFeature",
              displayer: "Icon",
              value: "FaCheck",
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
              displayer: "Feature 2",
              value: "Best trending designing experience.",
            },
            {
              type: "icon",
              key: "iconFeature",
              displayer: "Icon",
              value: "FaCheck",
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
              displayer: "Feature 3",
              value: "Email & Live chat.",
            },
            {
              type: "icon",
              key: "iconFeature",
              displayer: "Icon",
              value: "FaCheck",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "links",
      displayer: "Links",
      value: [
        INPUTS.BUTTON("button", "Button", "Want to learn more? Click here", "", "FaArrowRight", null, "Link")
      ],
    });
  }

  static getName(): string {
    return "Feature 7";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("title"));
    const titleExist = this.castToString(this.getPropValue("mainTitle"))
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

    return (
      <Base.Container className={this.decorateCSS("container")} isFull={true}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("wrapper")}>
            {!!image && (
              <Base.GridCell className={this.decorateCSS("image-container")}>
                <img
                  src={image}
                  className={hasTextContent ? this.decorateCSS("image") : this.decorateCSS("image-no-border-radius")}
                />
              </Base.GridCell>
            )}
            {hasTextContent && (
              <Base.GridCell
                className={`${this.decorateCSS("text-container")} ${!image && this.decorateCSS("padding")}`}
              >
                {(subtitleExist || titleExist || descriptionExist) && (
                  <Base.VerticalContent className={`${this.decorateCSS("title-wrapper")} ${image && this.decorateCSS("left")}`}>
                    {subtitleExist && (
                      <Base.SectionSubTitle className={this.decorateCSS("title")}>
                        {this.getPropValue("title")}
                      </Base.SectionSubTitle>
                    )}
                    {titleExist && (
                      <Base.SectionTitle className={this.decorateCSS("mainTitle")}>
                        {this.getPropValue("mainTitle")}
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
                            <div key={index} className={this.decorateCSS("feature")}>
                              {item.iconFeature && (
                                <div className={this.decorateCSS("icon-wrapper")}>
                                  <ComposerIcon
                                    name={item.iconFeature}
                                    propsIcon={{
                                      className: this.decorateCSS("iconFeature"),
                                    }}
                                  />
                                </div>
                              )}
                              {titleExist && (
                                <div className={this.decorateCSS("featureTitle")}>
                                  {item.title}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </Base.Row>
                    )}

                    {(this.getPropValue("links").length > 0) && (
                      <Base.Row className={this.decorateCSS("linkList")}>
                        {links.map((item: INPUTS.CastedButton, index: number) => {

                          return (
                            <div key={index} className={this.decorateCSS("linkContainer")}>
                              <ComposerLink path={item.url}>
                                <Base.Button buttonType={item.type} className={this.decorateCSS("link")}>
                                  {item.text}
                                  < ComposerIcon
                                    name={item.icon}
                                    propsIcon={{ className: this.decorateCSS("iconLink") }}
                                  />
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
