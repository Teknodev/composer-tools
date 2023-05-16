import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action10.module.scss";

type listedListItem = {
  listedItem: string;
};

class CallToAction10Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Call To Action",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "This is a Call To Action",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Join us now and be a part of the movement to create a better world for future generations",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436ae4968c3c2002cd2f9e5?alt=media&timestamp=1683017803252",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "JOIN FOR FREE",
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "Link",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Placeholder",
      value: "Enter email to get started",
    });
    this.addProp({
      type: "image",
      key: "listImage",
      displayer: "List Image",
      value: "https://cdn-icons-png.flaticon.com/512/6520/6520110.png",
    });
    this.addProp({
      type: "array",
      key: "listedListItem",
      displayer: "Listed Item",
      value: [
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "listedItem",
              value: "Take the first step towards your dreams and start your journey with us",
              displayer: "Item",
            },
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "listedItem",
              value: PlaceholderFiller.shortText(),
              displayer: "Item",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Call To Action 10";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <section className={this.decorateCSS("call-to-action10-container")}>
            <div className={this.decorateCSS("image-background")}>
              <img
                className={this.decorateCSS("image")}
                src={this.getPropValue("image")}
              ></img>
            </div>
            <div className={this.decorateCSS("call-to-action10")}>
              <h2>{this.getPropValue("subtitle")}</h2>
              <h1>{this.getPropValue("title")}</h1>
              <h3>{this.getPropValue("description")}</h3>

              <ul>
                {this.castToObject<listedListItem[]>("listedListItem").map(
                  (tableData: any, index: number) => {
                    return (
                      <li key={index}>
                        <img
                          width={15}
                          height={15}
                          src={this.getPropValue("listImage")}
                        />
                        {tableData.listedItem}
                      </li>
                    );
                  }
                )}
              </ul>

              <ComposerLink path={this.getPropValue("link")}>
                <span className={this.decorateCSS("button")}>
                  {this.getPropValue("buttonText")}
                </span>
              </ComposerLink>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default CallToAction10Page;
