import * as React from "react";
import styles from "./header13.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type ISliderData = {
  title: string;
  image: string;
  description: string;
  button: IButton[];
};

type IButton = {
  value: string;
};
class HeaderComponent13 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      displayer: "Slider Carousel",
      key: "slider",
      value: [
        {
          type: "object",
          displayer: "Item 1",
          key: "item1",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "The New Google Pixel 7",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Shop gret deals on MacBook, iPad, iPhone and more.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-shopping-event.jpg",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "Pre-Order Now",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "button-url",
                  value: "",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          displayer: "Item 2",
          key: "item2",
          value: [
            {
              type: "string",
              displayer: "Title",
              key: "title",
              value: "The New Google Pixel 7",
            },
            {
              type: "string",
              displayer: "Description",
              key: "description",
              value: "Shop gret deals on MacBook, iPad, iPhone and more.",
            },
            {
              type: "image",
              displayer: "Image",
              key: "image",
              value:
                "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-shopping-event.jpg",
            },
            {
              type: "object",
              displayer: "Button",
              key: "button",
              value: [
                {
                  type: "string",
                  displayer: "Button Text",
                  key: "button-text",
                  value: "Pre-Order Now",
                },
                {
                  type: "page",
                  displayer: "Button URL",
                  key: "button-url",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "object",
      displayer: "Item Right",
      key: "item-right",
      value: [
        {
          type: "string",
          displayer: "Title",
          key: "title",
          value: "Aurora Headset",
        },
        {
          type: "string",
          displayer: "Description",
          key: "description",
          value: "Shop gret deals on MacBook, iPad, iPhone and more.",
        },

        {
          type: "image",
          displayer: "Image",
          key: "image",
          value:
            "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2023/02/logitech-aurora-headset.jpg",
        },
        {
          type: "object",
          displayer: "Button",
          key: "button",
          value: [
            {
              type: "string",
              displayer: "Button Text",
              key: "button-text",
              value: "Pre-Order Now",
            },
            {
              type: "page",
              displayer: "Button URL",
              key: "button-url",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "object",
      displayer: "Item Right Bottom Left",
      key: "item-right-bottom-left",
      value: [
        {
          type: "string",
          displayer: "Title",
          key: "title",
          value: "New Dual Sense",
        },
        {
          type: "string",
          displayer: "Description",
          key: "description",
          value: "For playstation 5",
        },

        {
          type: "image",
          displayer: "Image",
          key: "image",
          value:
            "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2023/02/logitech-aurora-headset.jpg",
        },
        {
          type: "object",
          displayer: "Button",
          key: "button",
          value: [
            {
              type: "string",
              displayer: "Button Text",
              key: "button-text",
              value: "Pre-Order Now",
            },
            {
              type: "page",
              displayer: "Button URL",
              key: "button-url",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "object",
      displayer: "Item Right Bottom Right",
      key: "item-right-bottom-right",
      value: [
        {
          type: "string",
          displayer: "Title",
          key: "title",
          value: "Instant Cameras",
        },
        {
          type: "string",
          displayer: "Description",
          key: "description",
          value: "Get photo paper as a gift",
        },

        {
          type: "image",
          displayer: "Image",
          key: "image",
          value:
            "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2023/02/logitech-aurora-headset.jpg",
        },
        {
          type: "object",
          displayer: "Button",
          key: "button",
          value: [
            {
              type: "string",
              displayer: "Button Text",
              key: "button-text",
              value: "Pre-Order Now",
            },
            {
              type: "page",
              displayer: "Button URL",
              key: "button-url",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header-13";
  }

  render() {
    let itemsRight: any = this.getPropValue("item-right");
    let itemsRightBottomLeft: any = this.getPropValue("item-right-bottom-left");
    let itemsRightBottomRight: any = this.getPropValue("item-right-bottom-right");

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("left")}>
              <ComposerSlider
                {...settings}
                className={this.decorateCSS("carousel")}
              >
                {this.castToObject<ISliderData[]>("slider").map(
                  (item: ISliderData, index: number) => (
                    <div className={this.decorateCSS("item")} key={`key${index}`}>
                      <div className={this.decorateCSS("background-image")}>
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className={this.decorateCSS("content")}>
                        <div className={this.decorateCSS("title")}>
                          {item.title}
                        </div>
                        <div className={this.decorateCSS("description")}>
                          {item.description}
                        </div>
                        <div>
                          <button className={this.decorateCSS("button")}>
                            {item.button[0].value}
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </ComposerSlider>
            </div>
            <div className={this.decorateCSS("right")}>
              <div className={this.decorateCSS("top")}>
                <div className={this.decorateCSS("item")}>
                  <div className={this.decorateCSS("background-image")}>
                    <img src={itemsRight[2].value} alt={itemsRight[0].value} />
                  </div>
                  <div className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("title")}>
                      {itemsRight[0].value}
                    </div>
                    <div className={this.decorateCSS("description")}>
                      {itemsRight[1].value}
                    </div>
                    <div>
                      <button className={this.decorateCSS("button")}>
                        {itemsRight[3].value[0].value}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={this.decorateCSS("bottom")}>
                <div className={this.decorateCSS("item")}>
                  <div className={this.decorateCSS("background-image")}>
                    <img src={itemsRightBottomLeft[2].value} alt={itemsRightBottomLeft[0].value} />
                  </div>
                  <div className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("title")}>
                      {itemsRightBottomLeft[0].value}
                    </div>
                    <div className={this.decorateCSS("description")}>
                      {itemsRightBottomLeft[1].value}
                    </div>
                    <div>
                      <button className={this.decorateCSS("button")}>
                        {itemsRightBottomLeft[3].value[0].value}
                      </button>
                    </div>
                  </div>
                </div>
                <div className={this.decorateCSS("item")}>
                  <div className={this.decorateCSS("background-image")}>
                    <img src={itemsRightBottomRight[2].value} alt={itemsRightBottomRight[0].value} />
                  </div>
                  <div className={this.decorateCSS("content")}>
                    <div className={this.decorateCSS("title")}>
                      {itemsRightBottomRight[0].value}
                    </div>
                    <div className={this.decorateCSS("description")}>
                      {itemsRightBottomRight[1].value}
                    </div>
                    <div>
                      <button className={this.decorateCSS("button")}>
                        {itemsRightBottomRight[3].value[0].value}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent13;
