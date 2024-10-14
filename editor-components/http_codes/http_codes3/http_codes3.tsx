import React from "react";
import { BaseHTTPCodes } from "../../EditorComponent";
import styles from "./http_codes3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class HTTP_CODES3 extends BaseHTTPCodes {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "PAGE NOT FOUND",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "The page you were looking for could not bu found. It might have been removed, renamed or did not exist in the first place.",
    });

    this.addProp({
      type: "page",
      key: "url",
      displayer: "URL",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "button",
      displayer: "Button Text",
      value: "GO TO HOME PAGE",
    });

    this.addProp({
      type: "string",
      key: "404",
      displayer: "Error Code",
      value: "ERROR 404",
    });
  }

  getName(): string {
    return "HTTP Codes 3";
  }

  renderTitle() {
    const title = this.getPropValue("title");
    const title_word = title?.props?.html;
    const titleWords = title_word.split(" ");

    return titleWords.map((word: string, index: number) => (
      <span key={index} className={this.decorateCSS("word")} style={{ animationDelay: `${index * 0.2}s` }}>
        {word}&nbsp;
      </span>
    ));
  }

  renderDescription() {
    const description = this.getPropValue("description");
    const description_word = description?.props?.html;
    const words = description_word.split(" ");

    return words.map((word: string, index: number) => (
      <span key={index} className={this.decorateCSS("word")} style={{ animationDelay: `${index * 0.1}s` }}>
        {word}&nbsp;
      </span>
    ));
  }

  render() {
    const label_404 = this.getPropValue("404");
    const label404Word = label_404.props.html;

    const button_words = this.getPropValue("button");
    const buttonWords = button_words.props.html;

    const title_words = this.getPropValue("title");
    const titleWords = title_words.props.html;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("title")}>
              {titleWords && <div className={this.decorateCSS("top-left")}></div>}
              {this.renderTitle()}
              {titleWords && <div className={this.decorateCSS("bottom-right")}></div>}
              {label404Word && <div className={this.decorateCSS("label-404")}>{this.getPropValue("404")}</div>}
            </div>
            <div className={this.decorateCSS("description")}>{this.renderDescription()}</div>
            {buttonWords && (
              <div className={this.decorateCSS("button")}>
                <ComposerLink path={this.getPropValue("url")}>{this.getPropValue("button")}</ComposerLink>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HTTP_CODES3;
