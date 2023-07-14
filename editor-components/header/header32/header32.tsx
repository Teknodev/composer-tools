import * as React from "react";
import styles from "./header32.module.scss";
import { BaseHeader } from "../../EditorComponent";


class Header32 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Real Estate Investments",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "We offer a range of amenities that raise the standard of the property and thus potentially increase rental income",
    });
    this.addProp({
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "button-text",
          displayer: "Button Text",
          value: "CALL ME BACK" 
        },
        {
          type: "string",
          key: "url",
          displayer: "URL",
          value: ""
        }
      ]
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://a6n4d3q9.rocketcdn.me/wp-content/uploads/2021/05/w-investment-pic-opt.png.webp",
    });
    this.addProp({
      type: "string",
      key: "title1",
      displayer: "Description",
      value: "Ease of Management",
    });
    this.addProp({
      type: "string",
      key: "description1",
      displayer: "Description",
      value: "You just buy an apartment, and a professional hotel operator will do the rest for you",
    });
    this.addProp({
      type: "string",
      key: "title2",
      displayer: "Description",
      value: "Guaranteed Income",
    });
    this.addProp({
      type: "string",
      key: "description2",
      displayer: "Description",
      value: "Guaranteed monthly incom is prescribed in advance in the contract selection",
    });
    this.addProp({
      type: "boolean",
      key: "true",
      displayer: "Column direction",
      value: true,
    });
    
  }

  getName(): string {
    return "Header-32";
  }

  render() {

    const button = this.getPropValue('button');
    
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("wrapper")} ${
              this.getPropValue("true") && this.decorateCSS("wrapper-reverse")
            }`}>
            <div className={this.decorateCSS("first")}>
              <div className={this.decorateCSS("up")}>
                <div className={this.decorateCSS("title")}>{this.getPropValue("title")}</div> 
                <div className={this.decorateCSS("description")}>{this.getPropValue("description")}</div>
                <div className={this.decorateCSS("button-and-input")}>
                  <input placeholder="  Your phone number" className={this.decorateCSS("input")} type="text" />
                  <button className={this.decorateCSS("button")}>{button[0].value}</button>
                </div>
              </div>
              <div className={this.decorateCSS("down")}>
                <div className={this.decorateCSS("card1")}>
                  <div className={this.decorateCSS("svg1")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><g clip-path="url(#clip0)"><path d="M15 16.6667C19.6023 16.6667 23.3333 12.9357 23.3333 8.33333C23.3333 3.73096 19.6023 0 15 0C10.3976 0 6.66666 3.73096 6.66666 8.33333C6.66666 12.9357 10.3976 16.6667 15 16.6667Z" fill="#106CD8"></path><path d="M19.2233 34.6667C18.355 33.1633 18.5283 31.3117 19.5617 30C18.5283 28.6883 18.355 26.8383 19.2233 25.3333L20.5717 23C21.3133 21.715 22.6967 20.9167 24.1817 20.9167C24.385 20.9167 24.585 20.9317 24.7833 20.96C24.8383 20.8233 24.9083 20.695 24.9767 20.565C24.0767 20.21 23.105 20 22.0833 20H7.91667C3.55167 20 0 23.5517 0 27.9167V33.75C0 34.44 0.56 35 1.25 35H19.415L19.2233 34.6667Z" fill="#106CD8"></path><path d="M36.1717 30.7816C36.205 30.5233 36.25 30.2666 36.25 30C36.25 29.7316 36.2033 29.4766 36.1717 29.2183L37.6733 28.0816C38.0083 27.8283 38.1017 27.365 37.8917 27L36.5433 24.6666C36.3333 24.3033 35.885 24.1516 35.4983 24.315L33.77 25.0433C33.3483 24.7216 32.9 24.4383 32.405 24.2316L32.175 22.3966C32.1217 21.98 31.7683 21.6666 31.3483 21.6666H28.6533C28.2333 21.6666 27.8783 21.98 27.8267 22.3966L27.5967 24.2316C27.1017 24.4383 26.6517 24.7233 26.2317 25.0433L24.5033 24.315C24.1167 24.1516 23.6683 24.3016 23.4583 24.6666L22.11 27C21.9 27.3633 21.9933 27.8266 22.3283 28.0816L23.83 29.2183C23.7967 29.4766 23.7517 29.7333 23.7517 30C23.7517 30.2683 23.7983 30.5233 23.83 30.7816L22.3283 31.9183C21.9933 32.1716 21.9 32.635 22.11 33L23.4583 35.335C23.6683 35.6983 24.1167 35.85 24.5033 35.6866L26.2317 34.9566C26.6533 35.2783 27.1017 35.5616 27.5967 35.7683L27.8267 37.6033C27.8783 38.02 28.2317 38.3333 28.6517 38.3333H31.3467C31.7667 38.3333 32.1217 38.02 32.1733 37.6033L32.4033 35.7683C32.8983 35.5616 33.3483 35.2766 33.7683 34.9566L35.4967 35.685C35.8833 35.8483 36.3317 35.6983 36.5417 35.3333L37.89 32.9983C38.1 32.635 38.0067 32.1716 37.6717 31.9166L36.1717 30.7816ZM30 33.3333C28.1583 33.3333 26.6667 31.8416 26.6667 30C26.6667 28.1583 28.1583 26.6666 30 26.6666C31.8417 26.6666 33.3333 28.1583 33.3333 30C33.3333 31.8416 31.8417 33.3333 30 33.3333Z" fill="#106CD8"></path></g><defs><clipPath id="svg-2267"><rect width="40" height="40" fill="white"></rect></clipPath></defs></svg>
                  </div>
                  <div className={this.decorateCSS("title1")}>{this.getPropValue("title1")}</div>
                  <div className={this.decorateCSS("description1")}>{this.getPropValue("description1")}</div>
                </div>
                <div className={this.decorateCSS("card2")}>
                  <div className={this.decorateCSS("svg2")}>
                  <svg id="svg-4346" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M7.10938 27.0312C7.10938 34.1391 12.8922 40 20 40C27.1078 40 32.8906 34.1391 32.8906 27.0312C32.8906 19.9234 27.1078 14.1406 20 14.1406C12.8922 14.1406 7.10938 19.9234 7.10938 27.0312ZM21.1719 20V21.7352C22.5266 22.2238 23.5031 23.5098 23.5031 25.0308C23.5031 25.6787 22.9788 26.2027 22.3312 26.2027C21.6833 26.2027 21.1594 25.6787 21.1594 25.0308C21.1594 24.3842 20.6339 23.8589 19.9875 23.8589C19.3408 23.8589 18.8156 24.3842 18.8156 25.0308C18.8156 25.6775 19.3408 26.2027 19.9875 26.2027C21.926 26.2027 23.5031 27.7798 23.5031 29.7183C23.5031 31.2393 22.5266 32.5253 21.1719 33.0142V34.0625C21.1719 34.7101 20.6476 35.2344 20 35.2344C19.3524 35.2344 18.8281 34.7101 18.8281 34.0625V33.0219C17.4606 32.5403 16.4719 31.2488 16.4719 29.7183C16.4719 29.0707 16.9958 28.5464 17.6437 28.5464C18.2913 28.5464 18.8156 29.0707 18.8156 29.7183C18.8156 30.365 19.3408 30.8902 19.9875 30.8902C20.6339 30.8902 21.1594 30.365 21.1594 29.7183C21.1594 29.0717 20.6339 28.5464 19.9875 28.5464C18.0487 28.5464 16.4719 26.9696 16.4719 25.0308C16.4719 23.5004 17.4606 22.2092 18.8281 21.7273V20C18.8281 19.3524 19.3524 18.8281 20 18.8281C20.6476 18.8281 21.1719 19.3524 21.1719 20Z" fill="#106CD8"></path><path d="M20 0C19.7 0 19.4003 0.114441 19.1714 0.343323L14.4842 5.03082C14.1488 5.36621 14.0481 5.86975 14.2303 6.30798C14.411 6.74622 14.8391 7.03125 15.3128 7.03125H17.6562V11.9965C18.4222 11.8774 19.201 11.7969 20 11.7969C20.7989 11.7969 21.5777 11.8774 22.3437 11.9965V7.03125H24.6872C25.1608 7.03125 25.589 6.74622 25.7696 6.30798C25.9518 5.86975 25.8511 5.36621 25.5157 5.03082L20.8285 0.343323C20.5996 0.114441 20.3 0 20 0V0Z" fill="#106CD8"></path></svg>
                  </div>
                  <div className={this.decorateCSS("title2")}>{this.getPropValue("title2")}</div>
                  <div className={this.decorateCSS("description2")}>{this.getPropValue("description2")}</div>
                </div>
              </div>
            </div>
            <div>
                <img className={this.decorateCSS("image")} src={this.getPropValue("image")} alt="image" />
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Header32;
