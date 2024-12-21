import * as React from "react";
import styles from "./header15.module.scss";
import { BaseHeader } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "composer-tools/composer-base-components/base/base";
import { Form, Formik } from "formik";

interface InputItem {
  placeholder: JSX.Element,
}


class Header15 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.addProp({
      type: "image",
      key: "background-image",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6765394d0655f8002ca9e088?alt=media",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Take your online order within minutes",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "From local fare to restaurant favorites, our wide selection of food will definitely satisfy all your cravings.",
    });
    this.addProp({
      type: "array",
      key: "inputs",
      displayer: "Inputs",
      additionalParams: {
        maxElementCount: 2,
      },
      value: [
        {
          type: "object",
          key: "input",
          displayer: "Input",
          value: [
            {
              type: "string",
              key: "placeholder",
              displayer: "Placeholder",
              value: "Your Order",
            },
          ]
        },
        {
          type: "object",
          key: "input",
          displayer: "Input",
          value: [
            {
              type: "string",
              key: "placeholder",
              displayer: "Placeholder",
              value: "Your Address",
            },
          ]
        }
      ]
    })

    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Make Order",
    });
    this.addProp({
      type: "page",
      key: "buttonLink",
      displayer: "Button Link",
      value: "",
    });
  }

  getName(): string {
    return "Header-15";
  }

  render() {
    const inputs = this.castToObject<InputItem[]>("inputs")

    function getInitialValue() {
      let value: any = {};
      inputs.map((_: any, indexOfItem: number) => (value["input_" + indexOfItem] = ""));
      return value;
    }
    return (
      <Base.Container className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("background-image")})`,
        }}>
        {this.getPropValue("overlay") ? (<div className={this.decorateCSS("overlay")}></div>) : null}
        <div className={this.decorateCSS("max-content")}>
          <Base.MaxContent
            className={`${this.decorateCSS("wrapper")} ${this.getPropValue("true") && this.decorateCSS("wrapper-reverse")}`}>
            <div className={this.getPropValue("background-image") ? this.decorateCSS("left") : this.decorateCSS("left-no-image")}>
              <div className={this.decorateCSS("content-wrapper")}>
                <div className={this.decorateCSS("content")}>
                  {this.castToString(this.getPropValue("title")) && (
                    <div className={this.getPropValue("background-image") ? this.decorateCSS("title") : this.decorateCSS("title-no-image")}>
                      {this.getPropValue("title")}
                    </div>
                  )}
                  {this.castToString(this.getPropValue("description")) && (
                    <div className={this.getPropValue("background-image") ? this.decorateCSS("description") : this.decorateCSS("description-no-image")}>
                      {this.getPropValue("description")}
                    </div>
                  )}
                  {((inputs.length > 0)) && (
                    <div className={this.getPropValue("background-image") ? this.decorateCSS("form-display") : this.decorateCSS("form-display-no-image")}>
                      <div className={this.decorateCSS("form-wrapper")}>
                        <Formik
                          initialValues={{ ...getInitialValue() }}
                          onSubmit={(data, { resetForm }) => {
                            this.insertForm("Contact Us", data);
                            resetForm();
                          }}
                        >
                          {({ handleChange, values }) => (
                            <Form className={this.decorateCSS("form")}>
                              {inputs.map((input: InputItem, index: number) => {
                                if (this.castToString(input.placeholder)) {
                                  return (
                                    <div className={this.decorateCSS("input")}>
                                      <input
                                        placeholder={this.castToString(input.placeholder)}
                                        type="text"
                                        onChange={handleChange}
                                        value={values["input_" + index]}
                                        name={"input_" + index}
                                        className={this.decorateCSS("placeholder")}
                                      />
                                    </div>
                                  )
                                }
                                else {
                                  return "";
                                }
                              })}
                              {this.castToString(this.getPropValue("buttonText")) && (
                                <div className={this.decorateCSS("button-box")}>
                                  <Base.Button className={this.decorateCSS("button")} type="submit">
                                    {this.getPropValue("buttonText")}
                                  </Base.Button>
                                </div>
                              )}
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  )}
                  {((inputs.length == 0) && this.castToString(this.getPropValue("buttonText"))) && (
                    <div className={this.decorateCSS("button-box")}>
                      <ComposerLink path={this.getPropValue("buttonLink")}>
                        <Base.Button className={this.decorateCSS("button")}>
                          {this.getPropValue("buttonText")}
                        </Base.Button>
                      </ComposerLink>

                    </div>
                  )}

                </div>
              </div>
            </div>
          </Base.MaxContent>
        </div>
      </Base.Container >
    );
  }
}

export default Header15;
