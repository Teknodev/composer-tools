import * as React from "react";
import styles from "./header29.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Form, Formik } from "formik";

interface TitleItem {
  title1: JSX.Element;
  coloredTitle: JSX.Element;
  title2: JSX.Element;
}

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

interface ButtonItem {
  buttonText: JSX.Element;
  url: JSX.Element;
}

class Header29 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "title",
      displayer: "Title Item",
      value: [
        {
          type: "string",
          key: "title1",
          displayer: "Title 1",
          value: "Real",
        },
        {
          type: "string",
          key: "coloredTitle",
          displayer: "Colored Title",
          value: "Estate",
        },
        {
          type: "string",
          key: "title2",
          displayer: "Title 2",
          value: "Investments",
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "We offer a range of amenities that raise the standard of the property and thus potentially increase rental income",
    });
    this.addProp({
      type: "boolean",
      key: "reverser",
      displayer: "Reverse direction",
      value: true,
    });
    this.addProp({
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "CALL ME BACK",
        },
        {
          type: "page",
          key: "url",
          displayer: "Button Link",
          value: "",
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Placeholder",
      value: "Your phone number",
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a253bd2970002c626aa7?alt=media&timestamp=1719483639151",
    });

    this.addProp({
      type: "array",
      key: "serviceItems",
      displayer: "Service Items",
      value: [
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Ease of Management",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "You just buy an apartment, and a professional hotel operator will do the rest for you",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaUserGear",
            },
          ],
        },
        {
          type: "object",
          key: "cardItem",
          displayer: "Card Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Guaranteed Income",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Guaranteed monthly incom is prescribed in advance in the contract selection",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "AiFillDollarCircle",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Header 29";
  }

  render() {

    const button = this.castToObject<ButtonItem>("button");
    const title = this.castToObject<TitleItem>("title");
    const description = this.castToString(this.getPropValue("description"));
    const serviceItems = this.castToObject<ServiceItem[]>("serviceItems");
    const image = this.getPropValue("image");
    const placeholder = this.castToString(this.getPropValue("placeholder"));
    const buttonText = this.castToString(button.buttonText);
    const showTitle = Boolean(this.castToString(title.title1) || this.castToString(title.coloredTitle) || this.castToString(title.title2));
    const showContent = showTitle || description || serviceItems.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("wrapper")} ${
              this.getPropValue("reverser") &&
              this.decorateCSS("wrapper-reverse")
            } ${!showContent || !image ? this.decorateCSS("center") : ""}`}
          >
            {showContent && (
              <div className={this.decorateCSS("content")}>
                {showTitle && (
                  <div className={this.decorateCSS("title")}>
                    <span>
                    {this.castToString(title.title1)}
                    </span>
                    <span className={this.decorateCSS("colored-title")}>
                      {this.castToString(title.coloredTitle)}
                    </span>
                    <span>
                    {this.castToString(title.title2)}
                    </span>
                  </div>
                )}
                {description && (
                  <div className={this.decorateCSS("description")}>
                    {description}
                  </div>
                )}

                {placeholder && buttonText && (
                    <Formik
                      initialValues={{ phone: "" }}
                      onSubmit={(data, { resetForm }) => {
                        console.log("data", data);
                        this.insertForm("Call Me Back", data);
                        resetForm();
                      }}
                    >
                      {({ handleChange, values }) => (
                        <Form className={this.decorateCSS("form")}>
                          <input
                            placeholder={placeholder}
                            onChange={handleChange}
                            className={this.decorateCSS("input")}
                            type="text"
                            name="phone"
                            value={values.phone}
                          />
                          {this.castToString(button.buttonText) && (
                            <Base.Button className={this.decorateCSS("button")}>
                              {this.castToString(button.buttonText)}
                            </Base.Button>
                          )}
                        </Form>
                      )}
                    </Formik>

                )}

                {!placeholder && buttonText && (
                  <ComposerLink path={button.url}>
                    <Base.Button className={this.decorateCSS("button")}>
                      {buttonText}
                    </Base.Button>
                  </ComposerLink>
                )}

                {serviceItems && (
                  <div className={this.decorateCSS("services")}>
                    {serviceItems.map((item: any, index: number) => (
                      <div className={this.decorateCSS("service-card")}>
                        <div className={this.decorateCSS("service-svg")}>
                          <ComposerIcon name={item.icon} />
                        </div>
                        <div className={this.decorateCSS("service-title")}>
                          {item.title}
                        </div>
                        <div
                          className={this.decorateCSS("service-description")}
                        >
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            {image && (
              <img
                className={this.decorateCSS("image")}
                src={this.getPropValue("image")}
                alt=""
              />
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Header29;
