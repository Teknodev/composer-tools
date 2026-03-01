import * as React from "react";
import styles from "./formmodal1.module.scss";
import { BaseModal } from "../../EditorComponent";
import { Formik, Form } from "formik";
import ComposerModalClose from "../../../composer-base-components/close/close";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import * as Yup from "yup";

type InputItems = {
  label: string;
  inputs: Array<Inputs>;
};

type Inputs = {
  placeholder: string;
  type: string;
};

class FormModal1 extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675207f7506a40002c31e64a?alt=media",
    });
    this.addProp({
      type: "string",
      key: "header",
      displayer: "Title",
      value: "Talk to us",
    });
    this.addProp({
      type: "string",
      key: "context",
      displayer: "Description",
      value: "Need a demo? or help with anything? Get in touch with our amazing team of experts at your service.",
    });
    this.addProp({
      type: "array",
      key: "inputItems",
      displayer: "Input Items",
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
              value: "Name",
            },
            {
              type: "select",
              key: "type",
              displayer: "Type",
              value: "Text",
              additionalParams: {
                selectItems: ["Text", "E-mail", "Number"],
              },
            },
            {
              type: "boolean",
              key: "countrySelection",
              displayer: "Country Selection",
              value: false,
            },
            {
              type: "array",
              key: "countryOptions",
              displayer: "Country Options",
              value: [
                {
                  type: "object",
                  key: "countryOption",
                  displayer: "Country Option",
                  value: [
                    {
                      type: "string",
                      key: "label",
                      displayer: "Country Label",
                      value: "US",
                    },
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "+1(555) 000-0000",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "countryOption",
                  displayer: "Country Option",
                  value: [
                    {
                      type: "string",
                      key: "label",
                      displayer: "Country Label",
                      value: "TR",
                    },
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "+90(555) 000-0000",
                    },
                  ],
                },
              ],
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
              value: "Job Title",
            },
            {
              type: "select",
              key: "type",
              displayer: "Type",
              value: "Text",
              additionalParams: {
                selectItems: ["Text", "E-mail", "Number"],
              },
            },
            {
              type: "boolean",
              key: "countrySelection",
              displayer: "Country Selection",
              value: false,
            },
            {
              type: "array",
              key: "countryOptions",
              displayer: "Country Options",
              value: [
                {
                  type: "object",
                  key: "countryOption",
                  displayer: "Country Option",
                  value: [
                    {
                      type: "string",
                      key: "label",
                      displayer: "Country Label",
                      value: "US",
                    },
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "+1(555) 000-0000",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "countryOption",
                  displayer: "Country Option",
                  value: [
                    {
                      type: "string",
                      key: "label",
                      displayer: "Country Label",
                      value: "TR",
                    },
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "+90(555) 000-0000",
                    },
                  ],
                },
              ],
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
              value: "Work email",
            },
            {
              type: "select",
              key: "type",
              displayer: "Type",
              value: "E-mail",
              additionalParams: {
                selectItems: ["Text", "E-mail", "Number"],
              },
            },
            {
              type: "boolean",
              key: "countrySelection",
              displayer: "Country Selection",
              value: false,
            },
            {
              type: "array",
              key: "countryOptions",
              displayer: "Country Options",
              value: [
                {
                  type: "object",
                  key: "countryOption",
                  displayer: "Country Option",
                  value: [
                    {
                      type: "string",
                      key: "label",
                      displayer: "Country Label",
                      value: "US",
                    },
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "+1(555) 000-0000",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "countryOption",
                  displayer: "Country Option",
                  value: [
                    {
                      type: "string",
                      key: "label",
                      displayer: "Country Label",
                      value: "TR",
                    },
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "+90(555) 000-0000",
                    },
                  ],
                },
              ],
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
              value: "Phone Number",
            },
            {
              type: "array",
              key: "countryOptions",
              displayer: "Country Options",
              value: [
                {
                  type: "object",
                  key: "countryOption",
                  displayer: "Country Option",
                  value: [
                    {
                      type: "string",
                      key: "label",
                      displayer: "Country Label",
                      value: "US",
                    },
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "+1(555) 000-0000",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "countryOption",
                  displayer: "Country Option",
                  value: [
                    {
                      type: "string",
                      key: "label",
                      displayer: "Country Label",
                      value: "TR",
                    },
                    {
                      type: "string",
                      key: "placeholder",
                      displayer: "Placeholder",
                      value: "+90(555) 000-0000",
                    },
                  ],
                },
              ],
            },
            {
              type: "select",
              key: "type",
              displayer: "Type",
              value: "Number",
              additionalParams: {
                selectItems: ["Text", "E-mail", "Number"],
              },
            },
            {
              type: "boolean",
              key: "countrySelection",
              displayer: "Country Selection",
              value: true,
            },
          ],
        },
      ],
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "Get in touch", null, null, null, "Primary"));
    this.addProp({
      type: "icon",
      key: "exitIcon",
      displayer: "ExitIcon",
      value: "IoCloseSharp",
    });
  }

  static getName(): string {
    return "FormModal1";
  }

  getValidationSchema() {
    const inputItems = this.castToObject<any[]>("inputItems") || [];
    let validationSchema: any = {};

    inputItems.forEach((inputItem: any, index: number) => {
      const inputType = inputItem.getPropValue("type").toLowerCase();
      const key = `input_${index}`;

      if (inputType === "text") {
        validationSchema[key] = Yup.string().required("Required.");
      } else if (inputType === "e-mail") {
        validationSchema[key] = Yup.string().email("Invalid email address.").required("Required.");
      } else if (inputType === "number") {
        validationSchema[key] = Yup.number()
          .typeError("Must be a number.")
          .required("Required.");
      }
    });

    return Yup.object().shape(validationSchema);
  }


  render() {
    const header = this.getPropValue("header");
    const context = this.getPropValue("context");
    const inputItems = this.getPropValue("inputItems")!;
    const imageVal = this.getPropValue("image");
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

    const headerExist = this.castToString(header);
    const contextExist = this.castToString(context);
    const buttonTextExist = this.castToString(button.text);

    const hasRightPageProps = headerExist || contextExist || inputItems.length > 0 || buttonTextExist;

    function getInputType(type: string): string {
      switch (type) {
        case "TextArea":
          return "text-area";
        case "Email":
          return "e-mail";
        case "Tel":
          return "tel";
        case "Number":
          return "number";
        default:
          return "text";
      }
    }


    function getInitialValue() {
      let value: any = {};
      inputItems.map((_: any, indexOfItem: number) => (value["input_" + indexOfItem] = ""));
      return value;
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, handleChange: any) {
      handleChange(e);
    }

    const getSelectedItemPlaceholder = (input: any, indexOfInput: number): string => {
      const selectOptions = input.getPropValue("countryOptions");
      const stateKey = "input_placeholder_" + indexOfInput;
      const selectedItemPlaceholder = this.getComponentState(stateKey);

      if (!selectedItemPlaceholder) {
        const placeholder = this.castToString(selectOptions[0]?.getPropValue("placeholder")) || "";
        this.setComponentState(stateKey, placeholder);
      }

      return selectedItemPlaceholder;
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number) => {
      const selectOptions = inputItems[index].getPropValue("countryOptions");
      const selectedOption = selectOptions.find((option: any) => this.castToString(option.getPropValue("label")) == event.target.value);
      const stateKey = "input_placeholder_" + index;
      const placeholder = this.castToString(selectedOption.getPropValue("placeholder")) || "";
      this.setComponentState(stateKey, placeholder);
    };

    return (
      <Base.Container isModal="true" className={this.decorateCSS("container")}>
        <Base.MaxContent className={`${this.decorateCSS("page")} ${!imageVal && this.decorateCSS("single-page")} ${!hasRightPageProps && this.decorateCSS("single-image")}`}>
          <div className={this.decorateCSS("exit-icon")}>
            <ComposerModalClose>
              <Base.Icon propsIcon={{ className: this.decorateCSS("exit-icon") }} name={this.getPropValue("exitIcon")} />
            </ComposerModalClose>
          </div>

          {imageVal && (
            <div className={this.decorateCSS("left-page")}>
              <img className={this.decorateCSS("image")} src={this.getPropValue("image")} alt="" />
            </div>
          )}

          {hasRightPageProps && (
            <div className={this.decorateCSS("right-page")}>
              <div className={this.decorateCSS("right-page-content")}>
                {(headerExist || contextExist) &&
                  <Base.VerticalContent className={this.decorateCSS("title")}>
                    {headerExist && <Base.SectionTitle className={this.decorateCSS("header")}>{this.getPropValue("header")}</Base.SectionTitle>}
                    {contextExist && <Base.SectionDescription className={this.decorateCSS("context")}>{this.getPropValue("context")}</Base.SectionDescription>}
                  </Base.VerticalContent>}
                <div className={this.decorateCSS("form-content")}>
                  <Formik
                    initialValues={{ ...getInitialValue() }}
                    validationSchema={this.getValidationSchema()}
                    onSubmit={(data, { resetForm }) => {
                      this.insertForm("Form Modal 1 - ContactUsForm", data);
                      resetForm();
                    }}
                  >
                    {({ handleChange,
                      values,
                      errors,
                      touched, }) => (
                      <Form className={this.decorateCSS("form")}>
                        {this.castToObject<InputItems[]>("inputItems").map((inputItem: any, inputItemIndex: number) => {
                          const nameKey = "input_" + inputItemIndex;

                          const hasCountrySelection =
                            inputItem.getPropValue("countryOptions") &&
                            inputItem.getPropValue("countryOptions").length > 0 &&
                            inputItem.getPropValue("countrySelection") == true;

                          return hasCountrySelection ? (
                            <div
                              className={this.decorateCSS("phone-input-container")}
                              key={`${inputItemIndex}-${inputItemIndex}`}
                            >
                              <select
                                className={this.decorateCSS("country-dropdown")}
                                onChange={(e) => handleSelectChange(e, inputItemIndex)}
                              >
                                {inputItem.getPropValue("countryOptions").map(
                                  (option: any, idx: number) => {
                                    const label = this.castToString(option.getPropValue("label"));
                                    return (
                                      <option key={idx} value={label}>
                                        {label}
                                      </option>
                                    );
                                  }
                                )}
                              </select>

                              <input
                                placeholder={getSelectedItemPlaceholder(inputItem, inputItemIndex)}
                                type={getInputType(inputItem.type)}
                                onChange={(e) => handleInputChange(e, handleChange)}
                                value={values[nameKey]}
                                name={nameKey}
                                className={this.decorateCSS("form-input")}
                              />

                              {errors[nameKey] && touched[nameKey] && (
                                <div className={this.decorateCSS("error")}>
                                  {errors[nameKey] as string}
                                </div>
                              )}
                            </div>
                          ) : (
                            <div
                              className={this.decorateCSS("input-box")}
                              key={`${inputItemIndex}-${inputItemIndex}`}
                            >
                              <input
                                placeholder={this.castToString(
                                  inputItem.getPropValue("placeholder")
                                )}
                                type={getInputType(inputItem.type)}
                                onChange={(e) => handleInputChange(e, handleChange)}
                                value={values[nameKey]}
                                name={nameKey}
                                className={this.decorateCSS("form-input")}
                              />

                              {errors[nameKey] && touched[nameKey] && (
                                <div className={this.decorateCSS("error")}>
                                  {errors[nameKey] as string}
                                </div>
                              )}
                            </div>
                          );
                        }
                        )}
                        {buttonTextExist && (
                          <Base.Button className={this.decorateCSS("form-button")} buttonType={button.type}>
                            {button.text}
                          </Base.Button>
                        )}
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default FormModal1;
