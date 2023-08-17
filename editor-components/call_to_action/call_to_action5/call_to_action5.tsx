import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action5.module.scss";

type listedListItem = {
  listedItem: string;
};

class CallToAction5Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "This is a Call To Action",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://clarity.microsoft.com/blog/wp-content/uploads/2021/07/13.png",
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
      displayer: "Button Link",
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
              value: "Join us now and be a part of the movement to create a better world for future generations",
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
              value: "Take the first step towards your dreams and start your journey with us",
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
    return "Call To Action 5";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <section className={this.decorateCSS("call-to-action5-container")}>
            <div className={this.decorateCSS("image-background")}>
              <img className={this.decorateCSS("image")} src={this.getPropValue("image")}></img>
            </div>
            <div className={this.decorateCSS("call-to-action5")}>
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
                  <span className={this.decorateCSS("button")}>
                    {this.getPropValue("buttonText")}
                  </span>
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

export default CallToAction5Page;
