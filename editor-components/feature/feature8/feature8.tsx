import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature8.module.scss";

type Features = {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
};
class Feature8 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "card-title",
      value: "Card",
      displayer: "Card Title",
    });
    this.addProp({
      type: "string",
      key: "card-button",
      value: "Learn More",
      displayer: "Button Text",
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "Button Link",
      value: "",
    });
    this.addProp({
      type: "array",
      key: "features-card",
      displayer: "Features Card",
      value: [
        {
          type: "object",
          key: "features",
          displayer: "Features",
          value: [
            {
              type: "string",
              key: "title",
              value: "Explore the Latest Tech Gadgets",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "From the newest smartphones to the latest smart home devices, our website features a wide range of tech gadgets to suit every need and budget. Browse our cards to discover the latest tech innovations and stay up-to-date with the ever-evolving world of technology.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://www.re-thinkingthefuture.com/wp-content/uploads/2021/01/A2797-10-must-have-gadgets-for-every-architect.jpg",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "features",
          displayer: "Features",
          value: [
            {
              type: "string",
              key: "title",
              value: "Top 5 Hiking Trails in the Pacific Northwest",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "If you love hiking and exploring the great outdoors, you won't want to miss these top 5 hiking trails in the Pacific Northwest. From scenic coastal hikes to challenging mountain treks, these trails offer stunning views and unforgettable experiences.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://koa.com/blog/images/diablo-lake-north-cascades-national-park.jpg?preset=blogPhoto",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "features",
          displayer: "Features",
          value: [
            {
              type: "string",
              key: "title",
              value: "5 Easy DIY Home Decor Projects",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "Want to give your home a fresh new look without breaking the bank? these 5 easy DIY home decor projects that you can do yourself! From creating a gallery wall to adding a pop of color with a painted accent piece, these projects are simple and affordable update home decor.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://imageio.forbes.com/specials-images/imageserve/6123b033133106144df23946/0x0.jpg?format=jpg&width=1200",
              displayer: "Image",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
    });
  }

  getName(): string {
    return "Feature 8";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <h1>{this.getPropValue("card-title")}</h1>

            <div className={this.decorateCSS("card")}>
              {this.castToObject<Features[]>("features-card").map(
                (features: any, index: number) => (
                  <div className={this.decorateCSS("card-item-count")} style={{
                    width: 90 / this.getPropValue("itemCount") + "%",
                  }}>
                  <div className={this.decorateCSS("features")} key={index}>
                    <img className={this.decorateCSS("image")} src={features.image}></img>
                    <h3 className={this.decorateCSS("title")}>{features.title}</h3>
                    <p className={this.decorateCSS("long-text")}>
                      {features.description}
                    </p>
                  </div>
                  </div>
                )
              )}
            </div>

            <div className={this.decorateCSS("button")}>
              <ComposerLink path={this.getPropValue("link")}>
                {this.getPropValue("card-button")}
              </ComposerLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature8;
