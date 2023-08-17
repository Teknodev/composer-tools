import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action4.module.scss";

class CallToAction4Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      value: "Ready to Start Your Journey?",
      displayer: "Title",
    });
    this.addProp({
      type: "string",
      key: "description",
      value: "Our online courses are designed to help you learn new skills and advance your career. Enroll today and join a community of learners who are making a difference in their lives.",
      displayer: "Description",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://www.sliderrevolution.com/wp-content/uploads/2020/05/newfeature1-4.jpg",
    });
    this.addProp({
      type: "string",
      key: "firstButtonText",
      value: "Enroll Now",
      displayer: "Button Text",
    });
    this.addProp({
      type: "page",
      key: "firstButtonLink",
      displayer: "First Button Link",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "secondButtonText",
      value: "Learn More",
      displayer: "Button Text",
    });
    this.addProp({
      type: "page",
      key: "secondButtonLink",
      displayer: "Second Button Link",
      value: "",
    });
  }

  getName(): string {
    return "Call To Action 4";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("call-to-action4-page")}>
            <h1>{this.getPropValue("title")}</h1>
            <h2>{this.getPropValue("description")}</h2>
            <div className={this.decorateCSS("buttons")}>
              <ComposerLink path={this.getPropValue("firstButtonLink")}>
                <span
                  className={this.decorateCSS("button")}
                >
                  {this.getPropValue("firstButtonText")}
                </span>
              </ComposerLink>
              <ComposerLink path={this.getPropValue("secondButtonLink")}>
                <span
                  className={this.decorateCSS("button2")}
                >
                  {this.getPropValue("secondButtonText")}
                </span>
              </ComposerLink>
            </div>
          </div>
          <div className={this.decorateCSS("image-container")}>
            <img src={this.getPropValue("image")} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction4Page;
