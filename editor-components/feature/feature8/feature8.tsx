import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature8.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type Card = {
  image: string;
  title: JSX.Element;
  description: JSX.Element;
};

class Feature8 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      value: "Card",
      displayer: "Card Title",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      value: "Learn More",
      displayer: "Button Text",
    });
    this.addProp({
      type: "page",
      key: "buttonLink",
      displayer: "Button Link",
      value: "",
    });
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
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
          key: "card",
          displayer: "Card",
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
          key: "card",
          displayer: "Card",
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
    const cards = this.castToObject<Card[]>("cards");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("wrapper")}>
            <Base.SectionTitle className={this.decorateCSS("section-title")}>
              {this.getPropValue("title")}
            </Base.SectionTitle>

            <Base.ContainerGrid className={this.decorateCSS("cards-container")}>
              {cards.map((item: Card, index: number) => {
                const titleExist = !!this.castToString(item.title);
                const descExist = !!this.castToString(item.description);

                return (
                  <Base.GridCell
                    key={index}
                    className={this.decorateCSS("card")}
                    style={{ width: 90 / this.getPropValue("itemCount") + "%" }}
                  >
                    {!!item.image && <img className={this.decorateCSS("image")} src={item.image} alt="" />}
                    {titleExist && <Base.H2 className={this.decorateCSS("title")}>{item.title}</Base.H2>}
                    {descExist && (
                      <Base.P className={this.decorateCSS("description")}>
                        {item.description}
                      </Base.P>
                    )}
                  </Base.GridCell>
                );
              }
              )}
            </Base.ContainerGrid>

            <div className={this.decorateCSS("button")}>
              <ComposerLink path={this.getPropValue("buttonLink")}>
                {this.getPropValue("buttonText")}
              </ComposerLink>
            </div>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature8;
