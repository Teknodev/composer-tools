import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./comp5.module.scss";

type listedListItem = {
  listedItem: string;
};

class Comp5Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Lorem ipsum dolor sit amet consectetur",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://media.istockphoto.com/id/1193287941/photo/business-colleagues-working-together-in-the-office.jpg?s=612x612&w=0&k=20&c=foSMYCMbrBehOUzBLWnyYcj3plBRGM2-rvj0UBUsVUE=",
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
              value: PlaceholderFiller.shortText(),
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
    this.addProp({
      type: "string",
      key: "warning",
      displayer: "Warning Text",
      value: "We don't share or sell your email address publicly",
    });
    this.addProp({
      type: "image",
      key: "warningImage",
      displayer: "Warning Image",
      value: "https://cdn-icons-png.flaticon.com/512/2889/2889676.png",
    });
  }

  getName(): string {
    return "Comp5";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <section className={this.decorateCSS("comp5-container")}>
            <div className={this.decorateCSS("image")}>
              <img src={this.getPropValue("image")}></img>
            </div>
            <div className={this.decorateCSS("comp5")}>
              <h1>{this.getPropValue("title")}</h1>

              <ul className={this.decorateCSS("list")}>
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

              <div className={this.decorateCSS("input-box")}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={this.getPropValue("placeholder")}
                />
                <ComposerLink path={this.getPropValue("link")}>
                  <a
                    className={this.decorateCSS("button")}
                    
                  >
                    {this.getPropValue("buttonText")}
                  </a>
                </ComposerLink>
              </div>

              <p>
                <img
                  width={13}
                  height={13}
                  src={this.getPropValue("warningImage")}
                />
                {this.getPropValue("warning")}
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Comp5Page;
