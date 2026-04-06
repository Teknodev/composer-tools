import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseCallToAction, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./call_to_action7.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { Form, Formik } from "formik";
import { INPUTS } from "../../../custom-hooks/input-templates";
import * as Yup from "yup";

type MediaObject = {
  image: TypeMediaInputValue;
  overlay: boolean;
};

class CallToAction7Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Get your free e-book",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Level up your portfolio, read the book today!",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });
    this.addProp({
      type: "object",
      key: "mediaObject",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://vault.uicore.co/e-book/wp-content/uploads/sites/51/2022/08/E-Book-Book.webp",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });

    this.addProp(INPUTS.BUTTON("button", "Button", "Get your FREE copy", null, null, null, "Primary"));

    this.addProp({
      type: "string",
      key: "placeholder",
      displayer: "Placeholder",
      value: "Email",
    });
    this.addProp({
      type: "string",
      key: "submitText",
      displayer: "Submit Text",
      value: "Form successfully submitted!",
    });

    this.addProp({
      type: "boolean",
      key: "animation",
      displayer: "Animation",
      value: true,
    });

    this.setComponentState(
      "placeholderText",
      this.castToString(this.getPropValue("placeholder"))
    );
  }

  onComponentDidUpdate() {
    const currentPlaceholder = this.castToString(this.getPropValue("placeholder"));
    const prevPlaceholder = this.getComponentState("placeholderText");

    if (currentPlaceholder !== prevPlaceholder) {
      this.setComponentState("placeholderText", currentPlaceholder);
    }
  }

  validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
  });

  static getName(): string {
    return "Call To Action 7";
  }

  render() {
    const mediaObject = this.castToObject<MediaObject>("mediaObject");
    const image = mediaObject.image;
    const overlay = mediaObject.overlay;

    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const placeholder = this.castToString(this.getPropValue("placeholder"));
    const animation = this.getPropValue("animation");

    const submitText = this.castToString(this.getPropValue("submitText"));

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${!image && this.decorateCSS("no-image")}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid gridCount={{ pc: 2, tablet: 2 }} className={this.decorateCSS("wrapper")}>
            {image &&
              (<Base.GridCell className={this.decorateCSS("left-page")}>
                <div className={this.decorateCSS("image-container")}>
                  <Base.Media
                    value={image}
                    className={`${this.decorateCSS("image")} ${!animation && this.decorateCSS("no-animation")}`}
                  />
                  {overlay && <div className={this.decorateCSS("overlay")} />}
                </div>
              </Base.GridCell>)
            }
            {(subtitle || title || description || placeholder) &&
              (<Base.GridCell className={this.decorateCSS("right-page")}>
                <Base.VerticalContent className={this.decorateCSS("right-content")}>
                  {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                  {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                  {description && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
                  {placeholder &&
                    <div className={this.decorateCSS("input-button-wrapper")}>
                      <Formik
                        initialValues={{ email: "" }}
                        validationSchema={this.validationSchema}
                        onSubmit={(data, { resetForm }) => {
                          this.setComponentState("placeholderText", submitText);
                          this.insertForm("CTA7 – NewsletterForm", data);
                          setTimeout(() => {
                            const defaultPlaceholder = this.castToString(this.getPropValue("placeholder"));
                            this.setComponentState(
                              "placeholderText",
                              defaultPlaceholder
                            );
                          }, 2000);
                          resetForm();
                        }}
                      >
                        {({ handleSubmit,
                          handleChange,
                          values,
                          errors,
                          touched, }) => (
                          <Form className={this.decorateCSS("input-div")}
                            onSubmit={handleSubmit}>
                            {placeholder && (
                              <input
                                placeholder={
                                  this.getComponentState("placeholderText") ||
                                  placeholder
                                }
                                type="text"
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                className={this.decorateCSS("input")}
                              />
                            )}
                            {errors.email && touched.email && (
                              <div className={this.decorateCSS("error")}>
                                {errors.email}
                              </div>
                            )}
                            {this.castToString(button.text) && (
                              <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                              </Base.Button>
                            )}
                          </Form>
                        )}
                      </Formik>
                    </div>
                  }
                  {(!placeholder && this.castToString(button.text) && (
                    <ComposerLink path={button.url}>
                      <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                        <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                      </Base.Button>
                    </ComposerLink>
                  ))}
                </Base.VerticalContent>
              </Base.GridCell>)}
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction7Page;
