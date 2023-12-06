import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class CallToAction7Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Start Living Your Best Life Today",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Starting to live your best life today means making the most of each day and being present in the moment. It means setting goals, pursuing your passions, and taking action towards the life you want to live. Don't wait for the perfect moment, because it may never come. Take risks, step outside of your comfort zone, and embrace new experiences. ",
    });
    // this.addProp({
    //   type: "color",
    //   key: "cardBackgroundColor",
    //   displayer: "Card Background Color",
    //   value: "#e0e0e0",
    // });

    this.addProp({
      type: "array",
      key: "item-list",
      displayer: "Card List",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "Title",
              displayer: "Title",
              value: "About Life",
            },
            {
              type: "string",
              key: "Description",
              displayer: "Description",
              value:
                "Life is a journey full of ups and downs, joys and sorrows, victories and defeats. It's a precious gift that should be cherished and lived to the fullest. Life is unpredictable and can change in an instant, so it's important to appreciate the present moment and make the most of every opportunity. ",
            },
            {
              type: "string",
              key: "ButtonText",
              displayer: "Button Text",
              value: "Reading",
            },
            {
              type: "page",
              key: "ButtonPage",
              displayer: "Button Link",
              value: "https://www.google.com/",
            },
            {
              type: "image",
              key: "ButtonIcon",
              displayer: "Button Icon",
              value:
                "https://freepngimg.com/thumb/web_design/24713-2-right-arrow-transparent-background.png",
            },
            {
              type: "image",
              key: "card-icon",
              displayer: "Card Icon",
              value:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Globe_icon-white.svg/1200px-Globe_icon-white.svg.png",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Call To Action 7";
  }

  render() {
    const styling = {
      backgroundColor: this.getPropValue("cardBackgroundColor"),
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("call-to-action7-page")}>
            <div className={this.decorateCSS("left-child")}>
              <h1 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h1>
              <h3 className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </h3>
            </div>
            <div className={this.decorateCSS("card-child")} style={styling}>
              {this.getPropValue("item-list").map(
                (item: any, index: number) => (
                  <div>
                    <img
                      className={this.decorateCSS("image")}
                      src={item.value[5].value}
                      width={35}
                      height={35}
                      alt=""
                    />
                    <h1 className={this.decorateCSS("title-2")}>
                      {item.value[0].value}
                    </h1>
                    <h3 className={this.decorateCSS("leftDescription")}>
                      {item.value[1].value}
                    </h3>
                    <ComposerLink path={item.value[3].value}>
                      <span className={this.decorateCSS("left-button-text")}>
                        {item.value[2].value}
                        <img
                          alt=""
                          src={item.value[4].value}
                          width={15}
                          height={15}
                        />
                      </span>
                    </ComposerLink>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction7Page;
