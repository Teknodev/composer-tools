import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header2.module.scss";

class Header2 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "wide-text",
      displayer: "Wide Text",
      value: [
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Discover Online Shopping",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Discover a New World of Online Shopping with Our Marketplace",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Discover a new world of online shopping with our marketplace – where you'll find everything you need, from the latest trends in fashion and beauty to high-quality electronics and home goods, all at competitive prices.",
        },
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Go There",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436b1b168c3c2002cd2fab1?alt=media&timestamp=1693233941848",
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: "",
        },
      ],
    });
  }

  getName(): string {
    return "Header 2";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <section className={this.decorateCSS("wide-text-container")}>
            <img
              alt=""
              className={this.decorateCSS("image")}
              src={this.getPropValue("wide-text")[4].value}
            ></img>
            <div className={this.decorateCSS("wide-text")}>
              <h3 className={this.decorateCSS("wide-text1")}>{this.getPropValue("wide-text")[0].value}</h3>
              <h1 className={this.decorateCSS("wide-text2")}>{this.getPropValue("wide-text")[1].value}</h1>
              <p className={this.decorateCSS("wide-text3")}>{this.getPropValue("wide-text")[2].value}</p>
              <ComposerLink path={this.getPropValue("wide-text")[5].value}>
                <span className={this.decorateCSS("button")}>
                  {this.getPropValue("wide-text")[3].value}
                </span>
              </ComposerLink>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Header2;
