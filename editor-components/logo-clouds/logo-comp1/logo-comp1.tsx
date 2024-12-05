import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp1.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type TImage = {
  image: string;
  imageLink: string;
};
class LogoComp1Page extends LogoClouds {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "We Partnered With Global Brands",
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Partners",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              displayer: "Image",
            },
            {
              type: "page",
              key: "imageLink",
              value: "",
              displayer: "Image Link",
            },
          ],
        },
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              displayer: "Image",
            },
            {
              type: "page",
              key: "imageLink",
              value: "",
              displayer: "Image Link",
            },
          ],
        },
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              displayer: "Image",
            },
            {
              type: "page",
              key: "imageLink",
              value: "",
              displayer: "Image Link",
            },
          ],
        },
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              displayer: "Image",
            },
            {
              type: "page",
              key: "imageLink",
              value: "",
              displayer: "Image Link",
            },
          ],
        },
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              displayer: "Image",
            },
            {
              type: "page",
              key: "imageLink",
              value: "",
              displayer: "Image Link",
            },
          ],
        },
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              displayer: "Image",
            },
            {
              type: "page",
              key: "imageLink",
              value: "",
              displayer: "Image Link",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Logo Cloud 1";
  }

  render() {
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("heading")}>
            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
              {this.getPropValue("subtitle")}
            </Base.SectionSubTitle>
            <Base.SectionTitle className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </Base.SectionTitle>
            <Base.SectionDescription
              className={this.decorateCSS("description")}
            >
              {this.getPropValue("description")}
            </Base.SectionDescription>
          </Base.VerticalContent>
          <Base.ListGrid
            gridCount={{ pc: this.getPropValue("itemCount"), tablet: 3, phone: 2 }}
            className={this.decorateCSS("images-container")}
          >
            {this.castToObject<TImage[]>("image-items").map(
              (image: any, index: number) => (
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
              )
            )}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default LogoComp1Page;
