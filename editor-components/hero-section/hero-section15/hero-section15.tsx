import * as React from "react";
import styles from "./hero-section15.module.scss";
import { BaseHeroSection } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "composer-tools/composer-base-components/base/base";
import { Form, Formik } from "formik";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface InputItem {
  placeholder: React.JSX.Element;
}

class HeroSection15 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "image",
      key: "background-image",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6765394d0655f8002ca9e088?alt=media",
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
      value: "From local fare to restaurant favorites, our wide selection of food will definitely satisfy all your cravings.",
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
          ],
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
          ],
        },
      ],
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "Primary"));
  }

  static getName(): string {
    return "Hero Section 15";
  }

  render() {
    const inputs = this.castToObject<InputItem[]>("inputs");
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const backgroundImageExist = this.getPropValue("background-image");

    function getInitialValue() {
      let value: any = {};
      inputs.map((_: any, indexOfItem: number) => (value["input_" + indexOfItem] = ""));
      return value;
    }
    return (
      <Base.Container
        className={this.decorateCSS("container")}
        style={{
          backgroundImage: `url(${this.getPropValue("background-image")})`,
        }}
      >
        {this.getPropValue("overlay") && <div className={this.decorateCSS("overlay")}></div>}
        <div className={this.decorateCSS("max-content")}>
          <Base.MaxContent className={`${this.decorateCSS("wrapper")} ${this.getPropValue("true") && this.decorateCSS("wrapper-reverse")}`}>
            <div className={`${this.decorateCSS("left")} ${!backgroundImageExist && this.decorateCSS("left-no-image")}`}>
              <div className={this.decorateCSS("content-wrapper")}>
                <Base.VerticalContent className={this.decorateCSS("content")}>
                  {this.castToString(this.getPropValue("title")) && <Base.SectionTitle className={`${this.decorateCSS("title")} ${backgroundImageExist && this.decorateCSS("title-with-image")}`}>{this.getPropValue("title")}</Base.SectionTitle>}
                  {this.castToString(this.getPropValue("description")) && (
                    <Base.SectionDescription className={`${this.decorateCSS("description")} ${backgroundImageExist && this.decorateCSS("description-with-image")}`}>{this.getPropValue("description")}</Base.SectionDescription>
                  )}
                  {inputs.length > 0 && (
                    <div className={`${this.decorateCSS("form-display")} ${!backgroundImageExist && this.decorateCSS("form-display-no-image")}`}>
                      <div className={this.decorateCSS("form-wrapper")}>
                        <Formik
                          initialValues={{ ...getInitialValue() }}
                          onSubmit={(data, { resetForm }) => {
                            this.insertForm("Make Order", data);
                            resetForm();
                          }}
                        >
                          {({ handleChange, values }) => (
                            <Form className={this.decorateCSS("form")}>
                              {inputs.map((input: InputItem, index: number) => {
                                const placeholderExist = this.castToString(input.placeholder);
                                return (
                                  placeholderExist && (
                                    <div className={this.decorateCSS("input")}>
                                      <input
                                        placeholder={this.castToString(input.placeholder)}
                                        type="text"
                                        onChange={handleChange}
                                        value={values["input_" + index]}
                                        name={"input_" + index}
                                        className={`${this.decorateCSS("placeholder")} ${!backgroundImageExist && this.decorateCSS("placeholder-no-image")}`}
                                      />
                                    </div>
                                  )
                                );
                              })}
                              {this.castToString(button.text) && (
                                <div className={this.decorateCSS("button-box")}>
                                  <Base.Button buttonType={button.type} className={this.decorateCSS("button")} type="submit">
                                    {button.text}
                                  </Base.Button>
                                </div>
                              )}
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                  )}
                  {inputs.length == 0 && this.castToString(button.text) && (
                    <div className={this.decorateCSS("button-box")}>
                      <ComposerLink path={button.url}>
                        <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                          {button.text}
                        </Base.Button>
                      </ComposerLink>
                    </div>
                  )}
                </Base.VerticalContent>
              </div>
            </div>
          </Base.MaxContent>
        </div>
      </Base.Container>
    );
  }
}

export default HeroSection15;

