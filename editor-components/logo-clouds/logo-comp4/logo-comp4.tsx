import * as React from "react";
import { LogoClouds, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./logo-comp4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type TImage = {
  image: TypeMediaInputValue;
  imageLink: string;
};
class LogoComp4Page extends LogoClouds {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Brands",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Logo Clouds",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Sponsors can range from small local businesses to multinational corporations and can sponsor everything from sports teams to music festivals to non-profit organizations.",
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
      max: 12
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
    this.addProp({
      type: "media",
      key: "backgroundImage",
      displayer: "Background Image",
      additionalParams: {
        availableTypes: ["image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67518e9e506a40002c318fef?alt=media",
      },
    });
    this.addProp({
      type: "array",
      key: "image-items",
      displayer: "Images",
      value: [
        INPUTS.LOGO("section", "Section"),
        INPUTS.LOGO("section", "Section"),
        INPUTS.LOGO("section", "Section"),
        INPUTS.LOGO("section", "Section"),
      ],
    });
  }

  static getName(): string {
    return "Logo Cloud 4";
  }

  render() {
    const background = this.getPropValue("backgroundImage");
    const styling = {
      backgroundImage: `url('${(background)?.url || ""}')`,
    };

    const isSubtitleExists = this.castToString(this.getPropValue("subtitle"));
    const isTitleExists = this.castToString(this.getPropValue("title"));
    const isDescriptionExists = this.castToString(this.getPropValue("description"));

    const images = this.castToObject<TImage[]>("image-items");

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${((background)?.url) ? this.decorateCSS("image-active") : ""} ${((background)?.url && this.getPropValue("overlay")) ? this.decorateCSS("overlay-active") : ""} `} style={styling}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(isTitleExists || isSubtitleExists || isDescriptionExists) && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              {isSubtitleExists && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}

              {isTitleExists && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {isDescriptionExists && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}

          <Base.ListGrid
            gridCount={{
              pc: this.getPropValue("itemCount"),
              tablet: 4,
              phone: 2,
            }}
            className={this.decorateCSS("images-container")}
          >
            {images.map(
              (image: TImage, index: number) => (
                <ComposerLink path={image.imageLink}>
                  <div key={index} className={this.decorateCSS("image-item")}>
                    <Base.Media value={image.image} className={this.decorateCSS("image")} />
                  </div>
                </ComposerLink>
              )
            )}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default LogoComp4Page;
