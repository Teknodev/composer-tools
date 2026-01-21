import { BaseAbout } from "../../EditorComponent";
import styles from "./about8.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Text = {
  description: React.JSX.Element;
};

class About8 extends BaseAbout {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Our Technologies Encircle the World",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "media",
      key: "image-1",
      displayer: "Media 1",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6912efa23596a1002b23acda?alt=media",
      },
    });

    this.addProp({
      type: "media",
      key: "image-2",
      displayer: "Media 2",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6912efdd3596a1002b23ad71?alt=media",
      },
    });

    this.addProp({
      type: "array",
      key: "texts",
      displayer: "Texts",
      value: [
        {
          type: "object",
          key: "text",
          displayer: "Text",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "At the end of the day, going forward, a new normal that has evolved from generation is on the runway towards a cloud solution.",
            },
          ],
        },
        {
          type: "object",
          key: "text",
          displayer: "Text",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "At the end of the day, going forward, a new normal that has evolved from generation is on the runway towards a cloud solution.",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary")],
    });
  }

  static getName(): string {
    return "About 8";
  }

  render() {
    const title = this.getPropValue("title");
    const image1 = this.getPropValue("image-1");
    const image2 = this.getPropValue("image-2");
    const texts = this.castToObject<Text[]>("texts");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");


    const hasTitle = !!this.castToString(title);
    const hasButton = buttons.length > 0;
    const validTexts =
      texts?.filter((t) => !!this.castToString(t.description)) || [];
    const hasTexts = validTexts.length > 0;
    const hasImage1 = !!image1?.url;
    const hasImage2 = !!image2?.url;
    const hasImages = hasImage1 || hasImage2;

    const description = this.getPropValue("description");
    const descriptionExist = this.castToString(description);

    if (!hasTitle && !hasImages && !hasTexts && !hasButton) return null;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(descriptionExist || hasTitle) && (
            <Base.VerticalContent className={`${this.decorateCSS("title-container")} ${hasImages ? this.decorateCSS("with-image") : ""}`}>
              {hasTitle && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}

          <div
            className={`${this.decorateCSS("main-content")} ${!hasTexts && !hasButton ? this.decorateCSS("no-content") : ""
              } ${hasImages ? this.decorateCSS("with-image") : ""}`}
          >
            {hasImages && (
              <div className={this.decorateCSS("images-section")}>
                {hasImage1 && (
                  <div
                    className={`${this.decorateCSS("image-box")} ${this.getPropValue("overlay")
                      ? this.decorateCSS("overlay")
                      : ""
                      }`}
                  >
                    <Base.Media
                      value={image1}
                      className={this.decorateCSS("image")}
                    />
                  </div>
                )}
                {hasImage2 && (
                  <div
                    className={`${this.decorateCSS("image-box")} ${this.getPropValue("overlay")
                      ? this.decorateCSS("overlay")
                      : ""
                      }`}
                  >
                    <Base.Media
                      value={image2}
                      className={this.decorateCSS("image")}
                    />
                  </div>
                )}
              </div>
            )}

            {(hasTexts || buttons.length > 0) && (
              <div className={this.decorateCSS("content-section")}>
                {hasTexts && (
                  <div className={this.decorateCSS("texts-wrapper")}>
                    {validTexts.map((text, index) => (
                      <Base.SectionDescription
                        key={index}
                        className={this.decorateCSS("text")}
                      >
                        {text.description}
                      </Base.SectionDescription>
                    ))}
                  </div>
                )}

                {buttons.length > 0 && (
                  <div className={this.decorateCSS("buttons-container")}>
                    {buttons.map((button: INPUTS.CastedButton, index: number) => (
                      <div key={index} className={this.decorateCSS("button-wrapper")}>
                        {this.castToString(button.text) && (
                          <ComposerLink path={button.url}>
                            <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                              <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                            </Base.Button>
                          </ComposerLink>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default About8;

