import * as React from "react";
import styles from "./hero-section15.module.scss";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
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
      value: false,
    });

    this.addProp({
      type: "media",
      key: "background-image",
      displayer: "Background Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6937d1ef875e15002c5eb402?alt=media",
      },
    });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6937d1d3875e15002c5eb3e2?alt=media",
      },
    });

    this.addProp({
      type: "media",
      key: "logo",
      displayer: "Logo",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "",
      },
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
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
              displayer: "Placeholder Text",
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
              displayer: "Placeholder Text",
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

    const backgroundImageValue = this.getPropValue("background-image") as TypeMediaInputValue | undefined;
    const backgroundImageExist = backgroundImageValue;
    const imageValue = this.getPropValue("image") as TypeMediaInputValue | undefined;
    const logoValue = this.getPropValue("logo") as TypeMediaInputValue | undefined;

    function getInitialValue() {
      let value: any = {};
      inputs.map((_: any, indexOfItem: number) => (value["input_" + indexOfItem] = ""));
      return value;
    }
    const imagesExist = !!(backgroundImageValue || imageValue);

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${!imagesExist ? this.decorateCSS("no-image") : ""}`}>
        {backgroundImageValue && (
          <Base.Media
            value={backgroundImageValue}
            className={this.decorateCSS("background-image")}
            autoPlay
            muted
            loop
            playsInline
          />
        )}
        {this.getPropValue("overlay") && <div className={this.decorateCSS("overlay")}></div>}
        <div className={this.decorateCSS("max-content")}>
          <Base.MaxContent className={`${this.decorateCSS("wrapper")} ${this.getPropValue("true") && this.decorateCSS("wrapper-reverse")}`}>
            <div className={`${this.decorateCSS("left")} ${!backgroundImageExist && this.decorateCSS("left-no-image")}`}>
              <div className={this.decorateCSS("content-wrapper")}>
                <Base.VerticalContent className={this.decorateCSS("content")}>
                  {logoValue && (
                    <div className={this.decorateCSS("logo-wrapper")}>
                      <Base.Media value={logoValue} className={`${this.decorateCSS("logo")} ${backgroundImageExist && this.decorateCSS("logo-with-image")}`} />
                    </div>
                  )}
                  {this.castToString(this.getPropValue("subtitle")) && (() => {
                    const subtitleAlignment = Base.getSectionSubTitleType();
                    return (
                      <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${backgroundImageExist && this.decorateCSS("subtitle-with-image")} ${subtitleAlignment === "badge" && backgroundImageExist ? this.decorateCSS("subtitle-badge-with-image") : ""}`}>
                        {this.getPropValue("subtitle")}
                      </Base.SectionSubTitle>
                    );
                  })()}
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
                            this.insertForm("Header 15 - NewsletterForm", data);
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
                                    <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
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
                          <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                        </Base.Button>
                      </ComposerLink>
                    </div>
                  )}
                </Base.VerticalContent>
              </div>
            </div>
            {imageValue && (
              <div className={this.decorateCSS("right")}>
                    <div className={this.decorateCSS("image-wrapper")}>
                      <Base.Media
                        value={imageValue}
                        className={this.decorateCSS("image")}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
              </div>
            )}
          </Base.MaxContent>
        </div>
      </Base.Container>
    );
  }
}

export default HeroSection15;

