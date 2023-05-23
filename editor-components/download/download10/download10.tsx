import * as React from "react";
import styles from "./download10.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload, TypeUsableComponentProps } from "../../EditorComponent";

type Button = {
  buttonText1: string;
  buttonText2: string;
  url: string;
  buttonImage: string;
};

class Download10 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);
    let logo = require("./pngegg.png");
    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "MEET THE APP",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Start with lucky,Grow your business",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "To grow a business, it's important to establish clear goals, identify and target the right audience, continually innovate and adapt to changing market trends, and build strong relationships with customers and stakeholders. ",
    });

    this.addProp({
      type: "string",
      key: "text1",
      displayer: "Text-1",
      value: "Trustes by 2M+ customers",
    });

    this.addProp({
      type: "string",
      key: "text2",
      displayer: "Text-2",
      value: "4.3/5 (55k Reviews)",
    });

    let button: TypeUsableComponentProps = {
      type: "object",
      key: "button",
      displayer: "Displayer",
      value: [
        {
          type: "string",
          key: "buttonText1",
          displayer: "Button Text",
          value: "DOWNLOAD ON THE",
        },
        {
          type: "string",
          key: "buttonText2",
          displayer: "Button Text",
          value: "App Store",
        },
        {
          type: "page",
          key: "url",
          displayer: "Button Url",
          value: "",
        },
        {
          type: "image",
          key: "buttonImage",
          displayer: "In Button Icon",
          value: logo,
        },
      ],
    };

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [JSON.parse(JSON.stringify(button))],
    });

    this.addProp({
      type: "string",
      key: "stars",
      value: "5",
      displayer: "Stars",
    });
  }

  getName(): string {
    return "Download-10";
  }

  render() {
    let Image = require("./img.png");
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("left-container")}>
              <div className={this.decorateCSS("badge")}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9437/9437505.png"
                  alt="hello"
                  className={this.decorateCSS("hand-image")}
                />
                <h1 className={this.decorateCSS("badge-text")}>
                  {this.getPropValue("badge")}
                </h1>
              </div>
              <h1 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h1>
              <p className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </p>
              <div className={this.decorateCSS("button-group")}>
                {this.castToObject<Button[]>("buttons").map(
                  (item: Button, index: number) => {
                    return (
                      <ComposerLink key={`dw-10-btn-${index}`} path={item.url}>
                        <div className={this.decorateCSS("button")}>
                          <img
                            src={item.buttonImage}
                            alt="icon"
                            className={this.decorateCSS("button-logo")}
                          />
                          <div className={this.decorateCSS("button-texts")}>
                            <p className={this.decorateCSS("up-text")}>
                              {item.buttonText1}
                            </p>
                            <p className={this.decorateCSS("down-text")}>
                              {item.buttonText2}
                            </p>
                          </div>
                        </div>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
              <div className={this.decorateCSS("stats")}>
                <h1 className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("text1")}
                </h1>
                <div className={this.decorateCSS("down-description")}>
                  <div className={this.decorateCSS("stars")}>
                    {[...Array(Number(this.getPropValue("stars")))].map(
                      (item: any, index: number) => (
                        <img src="https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646c7aa5fba070002b749808?alt=media&timestamp=1684830888295" />
                      )
                    )}
                  </div>
                  <h1 className={this.decorateCSS("number")}></h1>
                  <p className={this.decorateCSS("info")}>
                    {this.getPropValue("text2")}
                  </p>
                </div>
              </div>
            </div>
            <div className={this.decorateCSS("right-container")}>
              <img
                className={this.decorateCSS("right-image")}
                src={Image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Download10;
