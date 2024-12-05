import * as React from "react";
import styles from "./formmodal1.module.scss";
import { BaseModal, TypeUsableComponentProps } from "../../EditorComponent";
import { Formik, Form } from "formik";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";

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
        const placeholder = selectOptions[0]?.getPropValue("placeholder", { as_string: true }) || "";
        this.setComponentState(stateKey, placeholder);
      }

      return selectedItemPlaceholder;
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number) => {
      const selectOptions = inputItems[index].getPropValue("countryOptions");
      const selectedOption = selectOptions.find((option: any) => option.getPropValue("label", { as_string: true }) == event.target.value);
      const stateKey = "input_placeholder_" + index;
      const placeholder = selectedOption.getPropValue("placeholder", { as_string: true }) || "";
      this.setComponentState(stateKey, placeholder);
    };

    return (
      <Base.Container isModal="true" className={this.decorateCSS("container")}>
        <Base.MaxContent className={`${this.decorateCSS("page")} ${!imageVal && this.decorateCSS("single-page")}`}>
          <div className={this.decorateCSS("exit-icon")}>
            <ComposerModalClose>
              <ComposerIcon propsIcon={{ className: this.decorateCSS("exit-icon") }} name={this.getPropValue("exitIcon")} />
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
                <Base.VerticalContent className={this.decorateCSS("title")}>
                  <Base.SectionTitle className={this.decorateCSS("header")}>{header && this.getPropValue("header")}</Base.SectionTitle>
                  <Base.SectionDescription className={this.decorateCSS("context")}>{context && this.getPropValue("context")}</Base.SectionDescription>
                </Base.VerticalContent>
                <div className={this.decorateCSS("form-content")}>
                  <Formik
                    initialValues={{ ...getInitialValue() }}
                    onSubmit={(data, { resetForm }) => {
                      this.insertForm("Contact Us", data);
                      resetForm();
                    }}
                  >
                    {({ handleChange, values }) => (
                      <Form className={this.decorateCSS("form")}>
                        {this.castToObject<InputItems[]>("inputItems").map((inputItem: any, inputItemIndex: number) =>
                          inputItem.getPropValue("countryOptions") && inputItem.getPropValue("countryOptions").length > 0 && inputItem.getPropValue("countrySelection") == true ? (
                            <div className={this.decorateCSS("phone-input-container")} key={`${inputItemIndex}-${inputItemIndex}`}>
                              <select className={this.decorateCSS("country-dropdown")} onChange={(e) => handleSelectChange(e, inputItemIndex)}>
                                {inputItem.getPropValue("countryOptions").map((option: any, idx: number) => {
                                  const label = option.getPropValue("label", { as_string: true });
                                  return (
                                    <option key={idx} value={label}>
                                      {label}
                                    </option>
                                  );
                                })}
                              </select>

                              <input
                                placeholder={getSelectedItemPlaceholder(inputItem, inputItemIndex)}
                                type={getInputType(inputItem.type)}
                                onChange={(e) => handleInputChange(e, handleChange)}
                                value={values["input_" + inputItemIndex]}
                                name={"input_" + inputItemIndex}
                                className={this.decorateCSS("form-input")}
                              />
                            </div>
                          ) : (
                            <div className={this.decorateCSS("input-box")} key={`${inputItemIndex}-${inputItemIndex}`}>
                              <input
                                placeholder={inputItem.getPropValue("placeholder", { as_string: true })}
                                type={getInputType(inputItem.type)}
                                onChange={(e) => handleInputChange(e, handleChange)}
                                value={values["input_" + inputItemIndex]}
                                name={"input_" + inputItemIndex}
                                className={this.decorateCSS("form-input")}
                              />
                            </div>
                          )
                        )}
                        {buttonVal && (
                          <Base.Button className={this.decorateCSS("form-button")} type="submit">
                            {this.getPropValue("buttonText")}
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
