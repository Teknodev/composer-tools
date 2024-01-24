import { ReactNode } from "react";
import { BaseNavigator } from "../../EditorComponent";
import React from "react";
import styles from "./navbar7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Navbar7 extends BaseNavigator {
  getName(): string {
    return "Navbar 7";
  }

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type : "boolean",
      key : "sticky",
      displayer : "Is sticky",
      value : false,
    })

    this.addProp({
      type: "array",
      key: "left-items",
      displayer: "Left Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "TREATMENTS",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "label",
              value: "PRICES",
              displayer: "Text",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "gallery",
      displayer: "Gallery",
      value:
        "SMILE GALLERY",
    });

    this.addProp({
      type: "string",
      key: "center-text",
      displayer: "Center Text",
      value:
        "+44 20 863 88648",
    });

    this.addProp({
      type: "image",
      key: "left-image",
      displayer: "Left Image",
      value:
        "https://dentalexcellenceturkey.com/wp-content/themes/dectheme/images/logo.png",
    });

    this.addProp({
      type: "array",
      key: "right-items",
      displayer: "Right Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "number",
              key: "insta",
              value: 1,
              displayer: "İnstagram",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "right-items-2",
      displayer: "Right Items 2",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "number",
              key: "face",
              value: 1,
              displayer: "facebook",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "right-items-3",
      displayer: "Right Items 3",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "number",
              key: "pinterest",
              value: 1,
              displayer: "Pinterest",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "right-items-4",
      displayer: "Right Items 4",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "number",
              key: "messenger",
              value: 1,
              displayer: "Messenger",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "right-items-5",
      displayer: "Right Items 5",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "number",
              key: "youtube",
              value: 1,
              displayer: "YouTube",
            },
          ],
        },
      ],
    });

    this.state["componentProps"]["navActive"] = true;
  }

  navClick() {
    let value: boolean = this.getComponentState("navActive");
    this.setComponentState("navActive", !value);
  }

  render(): ReactNode {
    return (
      <div className={`${this.decorateCSS("container")} ${this.getPropValue("sticky") ? this.decorateCSS("sticky") : ""}`}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("middle")}>
              <img
                src={this.getPropValue("left-image")}
                className={this.decorateCSS("image")}
              />
            </div>
            <div className={this.decorateCSS("content-left")}>
              {this.getPropValue("left-items").map((leftItem: any) => (
                <ComposerLink path={leftItem.value[1].value}>
                  <span className={this.decorateCSS("text")}>
                    {leftItem.value[0].value}
                  </span>
                </ComposerLink>
              ))}
            </div>
            <img
              className={`${this.decorateCSS("img-hamburger")} ${this.getComponentState("navActive") ? this.decorateCSS("rotate") : ""}`}
              src="https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646c79affba070002b7497d2?alt=media&timestamp=1684830642187"
              alt=""
              onClick={() => {
                this.navClick();
              }}
            />
            {this.getComponentState("navActive") && (
              <div className={this.decorateCSS("navbar-child")}>
                {this.castToObject<[]>("left-items").map((item: any, index: number) => {
                  return (
                    <ComposerLink
                      key={index}
                      path={item.value[1].value}
                    >
                      <h3 key={index}>{item.value[0].value}</h3>
                    </ComposerLink>
                  )
                })}
                <div className={this.decorateCSS("svgDropdownContainer")}>
                  <svg
                    key={"logo-navbar7"}
                    width="28"
                    height="28"
                    viewBox="-0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6" cy="6" r="2" />
                    <path d="M24,23H4v-4H0V0h20v4h4V23z M6,21h16V6h-2v13H6V21z M3.2,17H18v-1.6l-4-4.8l-3.9,4.9l-3-3L3.2,17z M2,2v13.3l4.9-5.8l3,3
			L14,7.4l4,4.8V2H2z"/>
                  </svg>
                  <h3 className={this.decorateCSS("gallery")}>{this.getPropValue("gallery")}</h3>
                </div>
              </div>
            )}

            {<div className={this.decorateCSS("middle-3")}>

              <div className={this.decorateCSS("svg-container")}>
                <svg

                  width="28"
                  height="28"
                  viewBox="-0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6" cy="6" r="2" />
                  <path d="M24,23H4v-4H0V0h20v4h4V23z M6,21h16V6h-2v13H6V21z M3.2,17H18v-1.6l-4-4.8l-3.9,4.9l-3-3L3.2,17z M2,2v13.3l4.9-5.8l3,3
			L14,7.4l4,4.8V2H2z"/>
                </svg>
              </div>

              <h1 className={this.decorateCSS("gallery")}>{this.getPropValue("gallery")}</h1>
            </div>}


            <div className={this.decorateCSS("middle-2")}>
              
                <div className={this.decorateCSS("svg-container")}>
                  <svg
                    
                    width="28"
                    height="28"
                    viewBox="-0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" />
                  </svg>
                </div>
             
              <b><div className={this.decorateCSS("center-text")}>{this.getPropValue("center-text")}</div></b>
            </div>

            <div className={this.decorateCSS("content-right")}>
              {this.getPropValue("right-items").map((item: any, index: number) => (
                <div key={`svg-container-${index}`} className={this.decorateCSS("svg-container2")}>
                  <svg
                    key={`logo-navbar7${index}`}
                    width="28"
                    height="28"
                    viewBox="-143 145 512 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
		 M339,617c0,5.5-4.5,10-10,10h-432c-5.5,0-10-4.5-10-10V185c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V617z"/>
                    <path d="M191.6,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7
		v-52.3C241,295.2,218.8,273,191.6,273z M205.8,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L205.8,302.5z M76.5,374.7
		c8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1C88,446.1,68,425.8,68,401
		C68,391.2,71.2,382.1,76.5,374.7z M216.1,479.5c0,13.5-11,24.5-24.5,24.5h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2
		c-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3h38.2V479.5z"/>
                  </svg>

                  <svg
                    key={`right-item-2${index}`}
                    width="28"
                    height="28"
                    viewBox="-143 145 512 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
		 M339,617c0,5.5-4.5,10-10,10h-432c-5.5,0-10-4.5-10-10V185c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V617z"/>
                    <path d="M146.8,313.7c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3
		c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H51.2v38.3h26.5v133h49.6v-133h39.3l2.9-38.3h-42.2v-29.9C127.3,317.4,136.5,313.7,146.8,313.7z"
                    />
                  </svg>

                  <svg
                    key={`right-item-3${index}`}
                    width="28"
                    height="28"
                    viewBox="-143 145 512 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
		 M339,617c0,5.5-4.5,10-10,10h-432c-5.5,0-10-4.5-10-10V185c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V617z"/>
                    <path d="M113,272.3c-70.7,0-128,57.3-128,128c0,52.4,31.5,97.4,76.6,117.2c-0.4-8.9-0.1-19.7,2.2-29.4
		c2.5-10.4,16.5-69.7,16.5-69.7s-4.1-8.2-4.1-20.2c0-19,11-33.1,24.7-33.1c11.6,0,17.3,8.7,17.3,19.2c0,11.7-7.5,29.2-11.3,45.4
		c-3.2,13.6,6.8,24.6,20.2,24.6c24.3,0,40.6-31.1,40.6-68c0-28-18.9-49-53.3-49c-38.8,0-63,28.9-63,61.3c0,11.2,3.3,19,8.4,25.1
		c2.4,2.8,2.7,3.9,1.8,7.1c-0.6,2.3-2,8-2.6,10.3c-0.9,3.2-3.5,4.4-6.4,3.2c-17.9-7.3-26.2-26.9-26.2-48.9c0-36.4,30.7-80,91.5-80
		c48.9,0,81,35.4,81,73.3c0,50.2-27.9,87.7-69.1,87.7c-13.8,0-26.8-7.5-31.3-15.9c0,0-7.4,29.5-9,35.2c-2.7,9.9-8,19.7-12.9,27.4
		c11.5,3.4,23.7,5.3,36.3,5.3c70.7,0,128-57.3,128-128C241,329.6,183.7,272.3,113,272.3z"/>
                  </svg>
                  <svg
                    key={`right-item-4${index}`}
                    width="28"
                    height="28"
                    viewBox="0 0 60 60"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M54,2H6C2.748,2,0,4.748,0,8v33c0,3.252,2.748,6,6,6h8v10c0,0.413,0.254,0.784,0.639,0.933C14.757,57.979,14.879,58,15,58
	c0.276,0,0.547-0.114,0.74-0.327L25.442,47H54c3.252,0,6-2.748,6-6V8C60,4.748,57.252,2,54,2z M50.887,13.463l-12,23
	c-0.134,0.257-0.374,0.443-0.657,0.511C38.154,36.991,38.077,37,38,37c-0.208,0-0.414-0.065-0.585-0.189L20.139,24.334L10.74,34.673
	c-0.336,0.368-0.894,0.433-1.305,0.152C9.023,34.543,8.882,34,9.105,33.553l10-20c0.131-0.263,0.371-0.454,0.656-0.523
	c0.286-0.07,0.586-0.011,0.824,0.16L37.839,25.65L49.241,12.35c0.331-0.386,0.897-0.464,1.32-0.178
	C50.981,12.456,51.122,13.012,50.887,13.463z"/>
                  </svg>
                  <svg
                    key={`right-item-5${index}`}
                    width="28"
                    height="28"
                    viewBox="-143 145 512 512"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
		 M339,617c0,5.5-4.5,10-10,10h-432c-5.5,0-10-4.5-10-10V185c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V617z"/>
                    <path d="M196.9,311.2H29.1c0,0-44.1,0-44.1,44.1v91.5c0,0,0,44.1,44.1,44.1h167.8c0,0,44.1,0,44.1-44.1v-91.5
		C241,355.3,241,311.2,196.9,311.2z M78.9,450.3v-98.5l83.8,49.3L78.9,450.3z"/>
                  </svg>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default Navbar7;
