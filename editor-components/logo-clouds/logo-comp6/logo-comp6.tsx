import * as React from "react";
import { LogoClouds, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./logo-comp6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type TImage = {
  image: TypeMediaInputValue;
  imageLink: string;
  itemText: React.JSX.Element;
};

class LogoComp6Page extends LogoClouds {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Partners",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 2,
      max: 4,
    });

    this.addProp({
      type: "array",
      key: "list-items",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              value: "",
              displayer: "Navigate To",
            },
            {
              type: "string",
              key: "itemText",
              displayer: "Item Text",
              value:
                "Sound production and light creators. The company has already worked with big city projects as City collectors in 2019.",
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              value: "",
              displayer: "Navigate To",
            },
            {
              type: "string",
              key: "itemText",
              displayer: "Item Text",
              value:
                "Sound production and light creators. The company has already worked with big city projects as City collectors in 2019.",
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              value: "",
              displayer: "Navigate To",
            },
            {
              type: "string",
              key: "itemText",
              displayer: "Item Text",
              value:
                "Sound production and light creators. The company has already worked with big city projects as City collectors in 2019.",
            },
          ],
        },
        {
          type: "object",
          key: "list-item",
          displayer: "List Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/645515d3f72de2002caaefff?alt=media&timestamp=1719584962573",
              },
            },
            {
              type: "page",
              key: "imageLink",
              value: "",
              displayer: "Navigate To",
            },
            {
              type: "string",
              key: "itemText",
              displayer: "Item Text",
              value:
                "Sound production and light creators. The company has already worked with big city projects as City collectors in 2019.",
            },
          ],
        },
      ],
    });
  }
  static getName(): string {
    return "Logo Cloud 6";
  }

  render() {

    const isSubTitleExists = this.castToString(this.getPropValue("subtitle"));
    const isTitleExists = this.castToString(this.getPropValue("subtitle"));
    const isDescriptionExists = this.castToString(this.getPropValue("subtitle"));

    const alignment = Base.getContentAlignment()
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(isSubTitleExists || isTitleExists || isDescriptionExists) && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              {isSubTitleExists && (
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
            gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2 }}
            className={this.decorateCSS("items")}
          >
            {this.castToObject<TImage[]>("list-items").map(
              (listItem: TImage, index: number) => (
                <ComposerLink path={listItem.imageLink}>
                  <div key={index} className={`${this.decorateCSS("card")} ${alignment === "center" && this.decorateCSS("center")}`}>
                    {listItem.image && <Base.Media
                      value={listItem.image}
                      className={this.decorateCSS("image")}
                    />}
                    {this.castToString(listItem.itemText) && 
                      <Base.P className={this.decorateCSS("text")}>
                        {listItem.itemText}
                      </Base.P>
                    }
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

export default LogoComp6Page;
