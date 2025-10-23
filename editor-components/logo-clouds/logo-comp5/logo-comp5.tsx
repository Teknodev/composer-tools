import * as React from "react";
import { LogoClouds, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./logo-comp5.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type TImage = {
  image: TypeMediaInputValue;
  imageLink: string;
};

class LogoComp5Page extends LogoClouds {
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
      key: "imageCount",
      displayer: "Item Count in a Row",
      value: 3,
      max: 4
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
        INPUTS.LOGO("section", "Section"),
        INPUTS.LOGO("section", "Section"),
        INPUTS.LOGO("section", "Section"),
        INPUTS.LOGO("section", "Section"),
      ],
    });
  }

  static getName(): string {
    return "Logo Cloud 5";
  }

  render() {
    const isSubtitleExists = this.castToString(this.getPropValue("subtitle"));
    const isTitleExists = this.castToString(this.getPropValue("title"));
    const isDescriptionExists = this.castToString(this.getPropValue("description"));
    const images = this.castToObject<TImage[]>("image-items");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(isSubtitleExists || isTitleExists || isDescriptionExists) && (
            <Base.VerticalContent className={this.decorateCSS("left")}>
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

          {images.length > 0 && <Base.ListGrid gridCount={{ pc: this.getPropValue("imageCount"), tablet: 4, phone: 2 }} className={this.decorateCSS("right")}>
            {images.map(
              (image: TImage, index: number) => (
                <ComposerLink path={image.imageLink}>
                  <div key={index} className={this.decorateCSS("image-item")}>
                    <Base.Media value={image.image} className={this.decorateCSS("image")} />
                  </div>
                </ComposerLink>
              )
            )}
          </Base.ListGrid>}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default LogoComp5Page;
