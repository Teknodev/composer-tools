import * as React from "react";
import styles from "./header29.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { ErrorMessage, Formik, Form } from "formik";
import { TypeUsableComponentProps } from "../../EditorComponent";
type InputType = {
  placeholder: JSX.Element,
  button: ButtonType,
  isInput: boolean,
}
interface CardType {
  title: JSX.Element,
  description: JSX.Element,
  icon: string,
}
interface ButtonType {
  buttonText: JSX.Element,
  url: string
}
class Header29 extends BaseHeader {
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
      key: "input",
      displayer: "Input",
      value: [
        {
          type: "boolean",
          key: "isInput",
          displayer: "Input Enable",
          value: true,
        },
        {
          type: "string",
          key: "placeholder",
          displayer: "Placeholder",
          value: "Your phone number"
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "CALL ME BACK"
            },
            {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: ""
            }
          ]
        }
      ]
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661a253bd2970002c626aa7?alt=media&timestamp=1719483639151",
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://websiteseller.net/real-estate-demo-theme/wp-content/uploads/sites/57/2021/08/real-estate-bg-top.svg?id=4903",
    });
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Description",
              value: "Ease of Management",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "You just buy an apartment, and a professional hotel operator will do the rest for you",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "RiUserSettingsFill",
            }
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Description",
              value: "Guaranteed Income",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Guaranteed monthly incom is prescribed in advance in the contract selection",
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaMoneyBillTrendUp",
            },
          ]
        },
      ]
    })
    this.addProp({
      type: "boolean",
      key: "true",
      displayer: "Column direction",
      value: true,
    });
  }

  getName(): string {
    return "Header-29";
  }


  render() {
    const input = this.castToObject<InputType>("input")
    const card = this.castToObject<CardType[]>("cards");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const image = this.getPropValue("image");

    function getInitialValue() {
      let value: any = {};
      return value;
    }
    function getFormData(obj: any) {
      const newObj: any = {};
      Object.values(obj).forEach((value, index) => {
        newObj["input_" + index] = value;
      })
      return newObj;
    }
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("wrapper")} ${this.getPropValue("true") && this.decorateCSS("wrapper-reverse")
            }`}>
            {(this.castToString(title) || this.castToString(description) || input || (card.length > 0)) && (
              <div className={this.decorateCSS("first")} style={{ backgroundImage: `url(${this.getPropValue("backgroundImage")})` }}>
                <div className={this.decorateCSS("up")}>
                  {this.castToString(title) && (
                    <div className={this.decorateCSS("title")}>{title}</div>
                  )}
                  {this.castToString(description) && (
                    <div className={this.decorateCSS("description")}>{description}</div>
                  )}
                  {input && (
                    <div className={this.decorateCSS("form-container")}>
                      {input.isInput ? (
                        <div className={this.decorateCSS("button-and-input")}>
                          <Formik
                            initialValues={getInitialValue()}
                            onSubmit={(data, { resetForm }) => {
                              const formData = getFormData(data)
                              this.insertForm("Contact Us", formData);
                              resetForm();
                            }}
                          >
                            {({ handleChange, values }) => (
                              <Form className={this.decorateCSS("form")}>
                                <input
                                  placeholder={this.castToString(input.placeholder)}
                                  type="text"
                                  onChange={handleChange}
                                  value={values[this.castToString(input.placeholder)]}
                                  name={this.castToString(input.placeholder)}
                                  className={this.decorateCSS("input")}
                                />
                                <ErrorMessage
                                  className={this.decorateCSS("error-message")}
                                  name={this.castToString(input.placeholder)}
                                  component={"span"}
                                />
                              </Form>
                            )}
                          </Formik>
                          <button className={this.decorateCSS("input-button")} type="submit">{input.button.buttonText}</button>
                        </div>
                      ) : (
                        <div className={this.decorateCSS("button-and-input")}>
                          <ComposerLink path={input.button.url}>
                            <button className={this.decorateCSS("button")}>{input.button.buttonText}</button>
                          </ComposerLink>
                        </div>
                      )}
                    </div>

                  )}
                </div>
                {(card.length > 0) && (
                  <div className={this.decorateCSS("down")}>
                    {card.map((cardItem: CardType, index: number) => (
                      <div className={this.decorateCSS("card")}>
                        <ComposerIcon propsIcon={{ className: this.decorateCSS("icon") }} name={cardItem.icon} ></ComposerIcon>
                        <div className={this.decorateCSS("title")}>{cardItem.title}</div>
                        <div className={this.decorateCSS("description")}>{cardItem.description}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            {image && (
              <div className={this.decorateCSS("image-container")}>
                <img className={this.decorateCSS("image")} src={image} alt="" />
              </div>
            )}

          </div>
        </div>
      </div >
    );
  }
}

export default Header29;
