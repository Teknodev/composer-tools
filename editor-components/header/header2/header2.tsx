import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
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
            "https://assets-global.website-files.com/5ad4b5ac3265e94b4f4625ea/6179a579f91da881be2c758b_morning-brew-ShVipPImS6k-unsplash_5c8728bacb20daf02414ecbdf89e0418_2000.png",
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
              className={this.decorateCSS("image")}
              src={this.getPropValue("wide-text")[4].value}
            ></img>
            <div className={this.decorateCSS("wide-text")}>
              <h3>{this.getPropValue("wide-text")[0].value}</h3>
              <h1>{this.getPropValue("wide-text")[1].value}</h1>
              <p>{this.getPropValue("wide-text")[2].value}</p>
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
