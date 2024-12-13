import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action9.module.scss";
import { Base } from "../../../composer-base-components/base/base";
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
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Start 14 days free trail",
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "Button Link",
      value: "",
    });
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c10a40655f8002ca6bf3e?alt=media&timestamp=1734086837440"
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c10c50655f8002ca6bf54?alt=media&timestamp=1734086869537"
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c10ed0655f8002ca6bf75?alt=media&timestamp=1734086909423"
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c110e0655f8002ca6bf87?alt=media&timestamp=1734086943067"
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c11330655f8002ca6bfa0?alt=media&timestamp=1734086979767"
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675c11550655f8002ca6bfd0?alt=media&timestamp=1734087022233"
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
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("call-to-action9-page")}>
            {this.castToString(this.getPropValue("title")) && (
              <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
            )}
            {this.castToString(this.getPropValue("buttonText")) && (
              <ComposerLink path={this.getPropValue("link")}>
                <Base.Button className={this.decorateCSS("button")}>
                  {this.getPropValue("buttonText")}
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
