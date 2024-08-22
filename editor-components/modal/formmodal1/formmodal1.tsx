import * as React from "react";
import styles from "./formmodal1.module.scss";
import { BaseModal, TypeUsableComponentProps } from "../../EditorComponent";
import { Formik, Form } from "formik";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

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
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a2698b2f8a5b002ce67e10?alt=media",
    });
    this.addProp({
      type: "string",
      key: "header",
      displayer: "Header",
      value: "Talk to us",
    });
    this.addProp({
      type: "string",
      key: "context",
      displayer: "Context",
      value: "Need a demo? or help with anything? Get in touch with our amazing team of experts at your service.",
    });
    this.addProp({
      type: "array",
      key: "inputItems",
      displayer: "Input Items",
      value: [
        {
          type: "object",
          key: "inputItem",
          displayer: "Input Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Name",
            },
            {
              type: "array",
              key: "inputs",
              displayer: "Inputs",
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
                              key: "value",
                              displayer: "Country Code",
                              value: "us",
                            },
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
                              key: "value",
                              displayer: "Country Code",
                              value: "tr",
                            },
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
              ],
            },
          ],
        },
        {
          type: "object",
          key: "inputItem",
          displayer: "Input Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Job Title",
            },
            {
              type: "array",
              key: "inputs",
              displayer: "Inputs",
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
                              key: "value",
                              displayer: "Country Code",
                              value: "us",
                            },
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
                              key: "value",
                              displayer: "Country Code",
                              value: "tr",
                            },
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
              ],
            },
          ],
        },
        {
          type: "object",
          key: "inputItem",
          displayer: "Input Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Email",
            },
            {
              type: "array",
              key: "inputs",
              displayer: "Inputs",
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
                              key: "value",
                              displayer: "Country Code",
                              value: "us",
                            },
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
                              key: "value",
                              displayer: "Country Code",
                              value: "tr",
                            },
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
              ],
            },
          ],
        },
        {
          type: "object",
          key: "inputItem",
          displayer: "Input Item",
          value: [
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Phone Number",
            },
            {
              type: "array",
              key: "inputs",
              displayer: "Inputs",
              value: [
                {
                  type: "object",
                  key: "input",
                  displayer: "Input",
                  value: [
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
                              key: "value",
                              displayer: "Country Code",
                              value: "us",
                            },
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
                              key: "value",
                              displayer: "Country Code",
                              value: "tr",
                            },
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
                      value: false,
                    }
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: "Get in touch",
    });
    this.addProp({
      type: "icon",
      key: "exitIcon",
      displayer: "ExitIcon",
      value: "IoCloseSharp",
    });

    this.setComponentState("selected_country", this.getPropValue("inputItems")[0]);
  }

  getName(): string {
    return "FormModal1";
  }


  render() {
    const header = this.getPropValue("header", { as_string: true });
    const context = this.getPropValue("context", { as_string: true });
    const inputItems = this.getPropValue("inputItems")!;
    const imageVal = this.getPropValue("image");
    const buttonVal = this.getPropValue("buttonText", { as_string: true });
    const hasRightPageProps = header || context || inputItems.length > 0 || buttonVal;

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

    function getInputName(
      indexOfLabel: number,
      inputLabel: string,
      indexOfInput: number
    ): string {
      const name = toObjectKey(`${indexOfLabel} ${inputLabel} ${indexOfInput}`);
      return toObjectKey(name);
    }

    function toObjectKey(str: string) {
      if (/^\d/.test(str)) {
        str = "_" + str;
      }
      str = str.replace(/[^a-zA-Z0-9_]/g, "_").toLowerCase();
      return str;
    }

    function getInitialValue() {
      let value: any = {};
      inputItems.map((inputItem: any, indexOfItem: number) => {
        inputItem
          .getPropValue("inputs")
          ?.map((_: TypeUsableComponentProps, indexOfInput: number) => {
            const key = getInputName(
              indexOfItem,
              inputItem.getPropValue("label"),
              indexOfInput
            );
            value[key] = "";
          });
      });
      return value;
    }

    function handleInputChange(
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
      handleChange: any,
      setFieldValue: any,
      inputObj: any
    ) {
      const selectedCountryCode = (e.target as HTMLSelectElement).value;
      let placeholder = "";

      const countryOption = inputObj.getPropValue("countryOptions")?.find((option: any) => {
        const countryCode = option.value.find((item: any) => item.key === "value").value;
        return countryCode === selectedCountryCode;
      });

      if (countryOption) {
        placeholder = countryOption.value.find((item: any) => item.key === "placeholder").value;
      }

      handleChange(e);
    }

    return (

      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            <div className={this.decorateCSS("exit-icon")}>
              <ComposerModalClose>
                <a href={""}>
                  <ComposerIcon
                    propsIcon={{ className: this.decorateCSS("exit-icon"), style: { width: "25px", height: "25px" } }}
                    name={this.getPropValue("exitIcon")}
                  />
                </a>
              </ComposerModalClose>
            </div>

            {imageVal && (
              <div className={this.decorateCSS("left-page")}>
                <img
                  className={this.decorateCSS("image")}
                  src={this.getPropValue("image")}
                  alt=""
                />
              </div>
            )}
            {hasRightPageProps && (
              <div className={this.decorateCSS("right-page")}>
                <div className={this.decorateCSS("right-page-content")}>
                  <div className={this.decorateCSS("title")}>
                    <h1 className={this.decorateCSS("header")}>{header && this.getPropValue("header")}</h1>
                    <p className={this.decorateCSS("context")}>{context && this.getPropValue("context")}</p>
                  </div>
                  <div className={this.decorateCSS("form-content")}>
                    <Formik
                      initialValues={{ ...getInitialValue() }}
                      onSubmit={(data, { resetForm }) => {
                        this.insertForm("Contact Us", data);
                        resetForm();
                      }}
                    >
                      {({ handleChange, values, setFieldValue }) => (
                        <Form className={this.decorateCSS("form")}>
                          {this.castToObject<InputItems[]>("inputItems").map((inputItem: InputItems, inputItemIndex: number) =>
                            inputItem.inputs.map((inputObj: any, inputIndex: number) => (
                              inputObj.getPropValue("countryOptions") && inputObj.getPropValue("countryOptions").length > 0 &&
                                inputObj.getPropValue("countrySelection") == true ? (
                                <div className={this.decorateCSS("phone-input-container")} key={`${inputItemIndex}-${inputIndex}`}>
                                  <select
                                    className={this.decorateCSS("country-dropdown")}
                                    onChange={(e) =>
                                      handleInputChange(e, handleChange, setFieldValue, inputObj)
                                    }
                                  >

                                    {inputObj.getPropValue("countryOptions").map(
                                      (option: any, idx: number) => {
                                        const value = option.value.find((item: any) => item.key === "value").value;
                                        const label = option.value.find((item: any) => item.key === "label").value;
                                        return (
                                          <option key={idx} value={value}>
                                            {label}
                                          </option>
                                        );
                                      }
                                    )}
                                  </select>

                                  <input
                                    placeholder={inputObj.getPropValue("placeholder", { as_string: true })}
                                    type={getInputType(inputObj.type)}
                                    onChange={(e) =>
                                      handleInputChange(e, handleChange, setFieldValue, inputObj)
                                    }
                                    value={values[getInputName(inputItemIndex, inputItem.label, inputIndex)]}
                                    name={getInputName(inputItemIndex, inputItem.label, inputIndex)}
                                    className={this.decorateCSS("form-input")}

                                  />
                                </div>
                              ) : (
                                <div className={this.decorateCSS("input-box")} key={`${inputItemIndex}-${inputIndex}`}>
                                  <input
                                    placeholder={inputObj.getPropValue("placeholder", { as_string: true })}
                                    type={getInputType(inputObj.type)}
                                    onChange={(e) =>
                                      handleInputChange(e, handleChange, setFieldValue, inputObj)
                                    }
                                    value={values[getInputName(inputItemIndex, inputItem.label, inputIndex)]}
                                    name={getInputName(inputItemIndex, inputItem.label, inputIndex)}
                                    className={this.decorateCSS("form-input")}
                                  />
                                </div>
                              )
                            ))
                          )}
                          {buttonVal && (
                            <button className={this.decorateCSS("form-button")} type="submit">
                              {buttonVal}
                            </button>
                          )}
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FormModal1;
