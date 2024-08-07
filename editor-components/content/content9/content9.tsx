import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content9.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Content9 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64ec6a8c057bdf002c2aa09a?alt=media&timestamp=1719561551672"
    })
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "About Us"
    })
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Attract Customers with Cryptocurrency"
    })
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ven enatis tellus in scelerisque felis.Aliquam id diam maecenas ultricies mi eget mauris."
    })
    this.addProp({
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Read More"
        },
        {
          type: "page",
          key: "buttonLink",
          displayer: "Button Link",
          value: ""
        }
      ]
    })
  }

  getName(): string {
    return "Content 9";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("child")}>
            <div className={this.decorateCSS("img-div")}>
              <img className={this.decorateCSS("img")} src={
                this.getPropValue("image")
              } alt="" />
            </div>
            <div className={this.decorateCSS("right-side")}>
              <h3 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h3>
              <h1 className={this.decorateCSS("subtitle")}>
                {this.getPropValue("subtitle")}
              </h1>
              <p className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </p>
              <ComposerLink path={
                this.getPropValue("button")[1].value
              }>
                <button className={this.decorateCSS("button")}>
                  {this.getPropValue("button")[0].value}
                </button>
              </ComposerLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content9;
