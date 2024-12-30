import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action9.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ButtonNavigator from "components/button-navigator/button-navigator";
interface ImageItem {
  image: string
}

class CallToAction9Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "98% designers love Shuffle. Not convinced you're one?",
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "Start 14 days free trail", "", null, "Primary"));

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Trusted by 100+ development team",
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
    });
    this.addProp({
      type: "array",
      key: "imageItems",
      displayer: "Image Items",
      value: [
        {
          type: "object",
          key: "imageItem",
          displayer: "Image Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573"
            }
          ]
        },
        {
          type: "object",
          key: "imageItem",
          displayer: "Image Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaf003?alt=media&timestamp=1719584962573"
            }
          ]
        },
        {
          type: "object",
          key: "imageItem",
          displayer: "Image Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf050?alt=media&timestamp=1719584962573"
            }
          ]
        },
        {
          type: "object",
          key: "imageItem",
          displayer: "Image Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaf006?alt=media&timestamp=1719584962573"
            }
          ]
        },
        {
          type: "object",
          key: "imageItem",
          displayer: "Image Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf055?alt=media&timestamp=1719584962573"
            }
          ]
        },
        {
          type: "object",
          key: "imageItem",
          displayer: "Image Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645516a9f72de2002caaf054?alt=media&timestamp=1719584962573"
            }
          ]
        },
      ]
    })
  }

  getName(): string {
    return "Call To Action 9";
  }

  render() {
    const images = this.castToObject<ImageItem[]>("imageItems");
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("call-to-action9-page")}>
            {this.castToString(this.getPropValue("title")) && (
              <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
            )}
            {this.castToString(button.text) && (
              <ComposerLink path={button.url}>
                <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                  {button.text}
                </Base.Button>
              </ComposerLink>
            )}
            {this.castToString(this.getPropValue("description")) && (
              <Base.P className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.P>
            )}
            {(images.length > 0) && (
              <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount") }} className={this.decorateCSS("image-container")} >
                {images.map((item: ImageItem, index: number) => (
                  <div className={this.decorateCSS("image-wrapper")}>
                    {item.image && (
                      <img alt={item.image} src={item.image} className={this.decorateCSS("image")}></img>
                    )}
                  </div>
                ))}
              </Base.ListGrid>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction9Page;
