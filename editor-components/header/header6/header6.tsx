import { BaseHeader } from "../../EditorComponent";
import styles from "./header6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { TypeMediaInputValue } from "../../EditorComponent";

interface BackgroundSettings {
  componentBackground: TypeMediaInputValue;
  overlay: boolean;
}

class Header6 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "backgroundSettings",
      displayer: "Background Media",
      value: [
        {
          type: "media",
          key: "componentBackground",
          displayer: "Background Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/690cc9f93596a1002b205a5f?alt=media",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        }
      ]
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "More Leads & More Customers",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "POWER UP YOUR WEBSITE",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Nanotechnology immersion along the information highway will close the loop on focusing solely",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "START FREE TRIAL", "", null, null, "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Header 6";
  }

  render() {
    const rawSubtitle = this.getPropValue("subtitle");
    const rawTitle = this.getPropValue("title");
    const rawDescription = this.getPropValue("description");
    const subtitle = this.castToString(rawSubtitle);
    const title = this.castToString(rawTitle);
    const description = this.castToString(rawDescription);
    const backgroundSettings = this.castToObject<BackgroundSettings>("backgroundSettings");
    const coverImage = backgroundSettings?.componentBackground;
    const hasMedia = !!coverImage?.url;
    const enableOverlay = backgroundSettings?.overlay;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const alignemnt = Base.getContentAlignment();

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${
          hasMedia && this.decorateCSS("hasBackground")
        } ${
          hasMedia && enableOverlay
            ? this.decorateCSS("overlay")
            : ""
        }`}
      >
        {hasMedia && (
          <div className={this.decorateCSS("background-media")}>
            <Base.Media value={coverImage} className={this.decorateCSS("background-media-element")} />
          </div>
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent
            className={this.decorateCSS("vertical-content")}
          >
            {subtitle && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{rawSubtitle}</Base.SectionSubTitle>)}
            {title && (<Base.SectionTitle className={this.decorateCSS("title")}>{rawTitle}</Base.SectionTitle>)}

            <div
              className={`${this.decorateCSS("description-wrapper")} ${
                alignemnt === "center" ? this.decorateCSS("centered") : ""
              }`}
            >
              {buttons.length > 0 && (() => {
                const validButtons = buttons.filter((item) => {
                  const buttonText = this.castToString(item.text || "");
                  const iconName = (item.icon as { name?: string })?.name;
                  const hasValidIcon = iconName && iconName !== "";
                  return buttonText || hasValidIcon;
                });
                return validButtons.length > 0 ? (
                  <div className={this.decorateCSS("button-wrapper")}>
                    {validButtons.map((item, index) => {
                      const buttonText = this.castToString(item.text || "");
                      const buttonUrl = item.url || "#";
                      const iconName = (item.icon as { name?: string })?.name;
                      const hasValidIcon = iconName && iconName !== "";
                      return (
                        <ComposerLink key={`btn-${index}`} path={buttonUrl}>
                          <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                            {hasValidIcon && (
                              <Base.Media className={this.decorateCSS("icon")} value={{ type: "icon", name: iconName }} />
                            )}
                            {buttonText && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                ) : null;
              })()}

              {description && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {rawDescription}
                </Base.SectionDescription>
              )}
            </div>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Header6;
