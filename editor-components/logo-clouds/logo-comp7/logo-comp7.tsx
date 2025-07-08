import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { Base } from "../../../composer-base-components/base/base";

type TImage = {
  image: string;
  imageLink: string;
};

class LogoComp7Page extends LogoClouds {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Trusted by thousands worldwide",
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 6,
      max: 12,
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
      ],
    });
  }

  static getName(): string {
    return "Logo Cloud 7";
  }

  render() {
    const isTitleExists = this.castToString(this.getPropValue("title"));
    const images = this.castToObject<TImage[]>("image-items");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {isTitleExists && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              {isTitleExists && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
            </Base.VerticalContent>
          )}

          {images.length > 0 && (
            <Base.ListGrid
              gridCount={{
                pc: this.getPropValue("itemCount"),
                tablet: 3,
                phone: 2,
              }}
              className={this.decorateCSS("images-container")}
            >
              {images.map((image: any, index: number) => (
                <ComposerLink path={image.imageLink}>
                  <div key={index} className={this.decorateCSS("image-item")}>
                    <img
                      className={this.decorateCSS("image")}
                      key={index}
                      src={image.image}
                      alt={image.imageLink || ""}
                    />
                  </div>
                </ComposerLink>
              ))}
            </Base.ListGrid>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default LogoComp7Page;
