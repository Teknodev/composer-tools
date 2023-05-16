import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
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
      key: "backgroundImage",
      displayer: "Background Image",
      value:
        "https://static.vecteezy.com/system/resources/previews/006/852/804/original/abstract-blue-background-simple-design-for-your-website-free-vector.jpg",
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
    const styling = {
      backgroundImage: `url('${this.getPropValue("backgroundImage")}')`,
    };

    return (
      <div className={this.decorateCSS("container")} style={styling}>
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
        </div>
      </div>
    );
  }
}

export default CallToAction4Page;
