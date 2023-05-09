import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header6.module.scss";

class Header6 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "icons",
      displayer: "Icons",
      value: [
        {
          type: "image",
          key: "mail-icon",
          value:
            "https://static-00.iconduck.com/assets.00/mail-icon-512x419-8cvam21t.png",
          displayer: "Mail Icon",
        },
        {
          type: "image",
          key: "phone-icon",
          value: "https://cdn-icons-png.flaticon.com/512/5068/5068731.png",
          displayer: "Phone Icon",
        },
        {
          type: "image",
          key: "icon-left",
          value:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png",
          displayer: "Left Icon",
        },
        {
          type: "image",
          key: "icon-center",
          value:
            "https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png",
          displayer: "Center Icon",
        },
        {
          type: "image",
          key: "icon-right",
          value: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
          displayer: "Right Icon",
        },
        {
          type: "page",
          key: "icon-left-link",
          value: "",
          displayer: "Left Icon Link",
        },
        {
          type: "page",
          key: "icon-center-link",
          value: "",
          displayer: "Center Icon Link",
        },
        {
          type: "page",
          key: "icon-right-link",
          value: "",
          displayer: "Right Icon Link",
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "header",
      displayer: "Header",
      value: [
        {
          type: "string",
          key: "mail",
          value: "mail@gmail.com",
          displayer: "Mail",
        },
        {
          type: "string",
          key: "phone",
          value: "+1-202-555-0000",
          displayer: "Phone",
        },
      ],
    });
  }
  getName(): string {
    return "Header 6";
  }
  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("infobar-left")}>
            <h3>
              <img
                
                className={this.decorateCSS("member-image")}
                src={this.getPropValue("icons")[0].value}
              />
              {this.getPropValue("header")[0].value}
            </h3>
            <h3>
              <img
                
                className={this.decorateCSS("member-image")}
                src={this.getPropValue("icons")[1].value}
              />
              {this.getPropValue("header")[1].value}
            </h3>
          </div>
          <div className={this.decorateCSS("infobar-right")}>
            <ComposerLink path={this.getPropValue("icons")[5].value}>
              <img
                
                className={this.decorateCSS("member-image")}
                src={this.getPropValue("icons")[2].value}
              />
            </ComposerLink>
            <ComposerLink path={this.getPropValue("icons")[6].value}>
              <img
                
                className={this.decorateCSS("member-image")}
                src={this.getPropValue("icons")[3].value}
              />
            </ComposerLink>
            <ComposerLink path={this.getPropValue("icons")[7].value}>
              <img
                
                className={this.decorateCSS("member-image")}
                src={this.getPropValue("icons")[4].value}
              />
            </ComposerLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Header6;
