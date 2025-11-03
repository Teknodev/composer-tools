import { BaseFeature } from "../../EditorComponent";
import styles from "./feature26.module.scss";
import { Base } from "../../../composer-base-components/base/base";

class FeatureComponent26 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Expert Solutions"
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Get solutions from real experts"
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646f4870f72de2002c7a771e?alt=media&timestamp=1684927632568"
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Discover More"
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: ""
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaArrowRight"
            }
          ]
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Watch how we work"
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: ""
            },
            {
              type: "icon",
              key: "icon",
              displayer: "Icon",
              value: "FaPlay"
            }
          ]
        }
      ]
    });
  }

  static getName(): string {
    return "Feature 26";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const image = this.getPropValue("image");
    const buttons = this.castToObject<Array<any>>("buttons");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("image-container")}>
              <Base.Media 
                value={{ type: "image", url: image }} 
                className={this.decorateCSS("image")} 
              />
            </div>
            <div className={this.decorateCSS("content")}>
              {subtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {title && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}
              {description && (
                <div className={this.decorateCSS("quote-container")}>
                  <Base.H1 className={this.decorateCSS("quote-mark")}>"</Base.H1>
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {description}
                  </Base.SectionDescription>
                </div>
              )}
              <div className={this.decorateCSS("buttons-container")}>
                {buttons?.map((button: any, index: number) => {
                  const buttonData = this.getPropValue("text", button.value);
                  const buttonUrl = this.getPropValue("url", button.value);
                  const buttonIcon = this.getPropValue("icon", button.value);

                  return (
                    <Base.Button 
                      key={index}
                      path={buttonUrl} 
                      className={this.decorateCSS(index === 0 ? "primary-button" : "secondary-button")}
                    >
                      {index === 1 && (
                        <div className={this.decorateCSS("icon-wrapper")}>
                          <Base.Media 
                            value={{ type: "icon", name: buttonIcon }}
                            className={this.decorateCSS("icon")}
                          />
                        </div>
                      )}
                      {buttonData}
                      {index === 0 && (
                        <Base.Media 
                          value={{ type: "icon", name: buttonIcon }}
                          className={this.decorateCSS("icon")}
                        />
                      )}
                    </Base.Button>
                  );
                })}
              </div>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default FeatureComponent26;