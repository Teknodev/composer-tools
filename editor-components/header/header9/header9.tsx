import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header9.module.scss";

class Header9 extends BaseHeader {
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
          value: "Online Store",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Welcome to Our Online Store",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Browse our wide selection of products and find exactly what you're looking for. From fashion to electronics, we have everything you need to stay ahead of the curve",
        },
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value:"Shop Now",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://theairambulanceservice.org.uk/wp-content/uploads/fly-images/202063/Screenshot-2020-06-30-at-09.18.45-e1596723111517-652x278-c.png",
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
    return "Header 9";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <section className={this.decorateCSS("wide-text-container")}>
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
          <div className={this.decorateCSS("image-background")}>
            <img className={this.decorateCSS("image")} src={this.getPropValue("wide-text")[4].value} alt=""></img>
          </div>
        </section>
      </div>
    );
  }
}

export default Header9;
