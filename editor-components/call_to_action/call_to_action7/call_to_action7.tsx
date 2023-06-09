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
      value: "Starting to live your best life today means making the most of each day and being present in the moment. It means setting goals, pursuing your passions, and taking action towards the life you want to live. Don't wait for the perfect moment, because it may never come. Take risks, step outside of your comfort zone, and embrace new experiences. ",
    });
    this.addProp({
      type: "image",
      key: "leftIcon",
      displayer: "Left Icon",
      value:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Globe_icon-white.svg/1200px-Globe_icon-white.svg.png",
    });
    this.addProp({
      type: "string",
      key: "leftTitle",
      displayer: "Left Title",
      value: "About Life",
    });
    this.addProp({
      type: "string",
      key: "leftDescription",
      displayer: "Left Description",
      value: "Life is a journey full of ups and downs, joys and sorrows, victories and defeats. It's a precious gift that should be cherished and lived to the fullest. Life is unpredictable and can change in an instant, so it's important to appreciate the present moment and make the most of every opportunity. ",
    });
    this.addProp({
      type: "string",
      key: "leftButtonText",
      displayer: "Left Button Text",
      value: "Reading",
    });
    this.addProp({
      type: "page",
      key: "leftButtonPage",
      displayer: "Left Button Page",
      value: "",
    });
    this.addProp({
      type: "image",
      key: "leftButtonIcon",
      displayer: "Left Button Icon",
      value:
        "https://freepngimg.com/thumb/web_design/24713-2-right-arrow-transparent-background.png",
    });
    this.addProp({
      type: "image",
      key: "rightIcon",
      displayer: "Right Icon",
      value:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Globe_icon-white.svg/1200px-Globe_icon-white.svg.png",
    });
    this.addProp({
      type: "string",
      key: "rightTitle",
      displayer: "Right Title",
      value: "First Healty",
    });
    this.addProp({
      type: "string",
      key: "rightDescription",
      displayer: "Right Description",
      value: "The first step towards a healthy lifestyle is taking care of our body and mind. This includes eating a balanced diet, staying active, getting enough sleep, and managing stress. Making small changes to our daily habits can have a big impact on our overall well-being. It's important to prioritize self-care and listen to our body's needs.",
    });
    this.addProp({
      type: "string",
      key: "rightButtonText",
      displayer: "Right Button Text",
      value: "Reading",
    });
    this.addProp({
      type: "page",
      key: "rightButtonPage",
      displayer: "Right Button Page",
      value: "",
    });
    this.addProp({
      type: "image",
      key: "rightButtonIcon",
      displayer: "Right Button Icon",
      value:
        "https://freepngimg.com/thumb/web_design/24713-2-right-arrow-transparent-background.png",
    });
  }

  getName(): string {
    return "Call To Action 7";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("call-to-action7-page")}>
            <div className={this.decorateCSS("left-child")}>
              <h1>{this.getPropValue("title")}</h1>
              <h3>{this.getPropValue("description")}</h3>
            </div>
            <div className={this.decorateCSS("card-child")}>
              <img className={this.decorateCSS("image")} src={this.getPropValue("leftIcon")} width={35} height={35} />
              <h1>{this.getPropValue("leftTitle")}</h1>
              <h3>{this.getPropValue("leftDescription")}</h3>
              <ComposerLink path={this.getPropValue("leftButtonPage")}>
                <span>
                  {this.getPropValue("leftButtonText")}
                  <img
                    src={this.getPropValue("leftButtonIcon")}
                    width={15}
                    height={15}
                  />
                </span>
              </ComposerLink>
            </div>
            <div className={this.decorateCSS("card-child")}>
              <img className={this.decorateCSS("image")} src={this.getPropValue("rightIcon")} width={35} height={35} />
              <h1>{this.getPropValue("rightTitle")}</h1>
              <h3>{this.getPropValue("rightDescription")}</h3>
              <ComposerLink path={this.getPropValue("rightButtonPage")}>
                <span>
                  {this.getPropValue("rightButtonText")}
                  <img
                    src={this.getPropValue("rightButtonIcon")}
                    width={15}
                    height={15}
                  />
                </span>
              </ComposerLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction7Page;
