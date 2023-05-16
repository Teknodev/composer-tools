import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header6.module.scss";
import VerifiedIcon from "@mui/icons-material/Verified";
import ComposerLink from "../../../composer-base-components/Link/link";

class Header6 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Web & Mobile Development",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "At [Company Name], we specialize in delivering high-quality web and mobile development services that help businesses of all sizes establish a strong online presence and reach their target audience.",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://hepro-react.envytheme.com/images/services/service1.png",
    });

    this.addProp({
      type: "array",
      key: "item-list",
      displayer: "Item List",
      value: [
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Responsive Design",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Custom Web Development",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Mobile App Development",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "E-commerce Development",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Website Maintenance",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Web Design",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header 6";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <section className={this.decorateCSS("child-container")}>
            <div className={this.decorateCSS("left-content")}>
              <h2>{this.getPropValue("title")}</h2>
              <p>{this.getPropValue("description")}</p>
              <div className={this.decorateCSS("row")}>
                {this.getPropValue("item-list").map(
                  (itemData: any, indexItemData: number) => {
                    return (
                      <div key={indexItemData} className={this.decorateCSS("col")}>
                        <ComposerLink path={itemData.value[1].value}>
                          <div className={this.decorateCSS("box")}>
                            <VerifiedIcon />
                            {itemData.value[0].value}
                          </div>
                        </ComposerLink>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div className={this.decorateCSS("right-content")}>
              <img src={this.getPropValue("image")} alt="image" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Header6;
