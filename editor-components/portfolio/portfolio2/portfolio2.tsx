import * as React from "react";
import styles from "./portfolio2.module.scss";
import { BasePortfolio, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type SideCard = {
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  text: React.JSX.Element;
  buttons?: INPUTS.CastedButton[];
};

class Portfolio2 extends BasePortfolio {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "leftCard",
      displayer: "Left Card",
      value: [
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "GANACHE",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "CREATION",
        },
        {
          type: "string",
          key: "text",
          displayer: "Text",
          value:
            "Lorem ipsum dolor sit amet, ea mel modo qualisque, possit nemore facilis vel te. Laudem aeterno dolorum no vix, ea sed falli option. Doming legendos his cu. Te nonumy eleifend expetenda usu. Quo appetere gubergren et.",
        },
        {
          type: "array",
          key: "buttons",
          displayer: "Buttons",
          value: [
            INPUTS.BUTTON(
              "button",
              "Button",
              "READ MORE",
              "",
              "BsArrowRight",
              null,
              "Tertiary"
            ),
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Image",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://swissdelight.qodeinteractive.com/wp-content/uploads/2021/02/h2-img-1-729x1024.png",
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.addProp({
      type: "object",
      key: "rightCard",
      displayer: "Right Card",
      value: [
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "SWEET",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "MASTERPIECES",
        },
        {
          type: "string",
          key: "text",
          displayer: "Text",
          value:
            "Lorem ipsum dolor sit amet, ea mel modo qualisque, possit nemore facilis vel te. Laudem aeterno dolorum no vix, ea sed falli option. Doming legendos his cu. Te nonumy eleifend expetenda usu. Quo appetere gubergren et.",
        },
        {
          type: "array",
          key: "buttons",
          displayer: "Buttons",
          value: [
            INPUTS.BUTTON(
              "button",
              "Button",
              "READ MORE",
              "",
              "BsArrowRight",
              null,
              "Tertiary"
            ),
          ],
        },
      ],
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Animation",
      value: ["animate1", "animate2"],
      additionalParams: {
        selectItems: ["animate1", "animate2"],
      },
    });
  }

  private getButtonsFromItem(item: SideCard) {
    const buttonsArray = item?.buttons;
    if (!Array.isArray(buttonsArray)) return [];

    return buttonsArray.map((btn: any) => {
      const parent = btn?.value ?? btn;
      const icon = this.getPropValue("icon", { parent_object: parent });
      const image = this.getPropValue("image", { parent_object: parent });
      const media = icon || null;
      return {
        text: this.getPropValue("text", { parent_object: parent }),
        type: this.getPropValue("type", { parent_object: parent }),
        url: this.getPropValue("url", { parent_object: parent }),
        media,
      };
    });
  }

  private hasAnyButton(
    buttons: { text?: string; media?: TypeMediaInputValue }[]
  ) {
    if (!Array.isArray(buttons)) return false;
    return buttons.some((b: any) => {
      return (
        this.castToString(b?.text) ||
        (b?.media && ((b as any).media?.name || (b as any).media?.url))
      );
    });
  }

  static getName(): string {
    return "Portfolio 2";
  }

  private renderLeftSide() {
    const card = this.castToObject<SideCard>("leftCard");
    const buttons = this.getButtonsFromItem(card);

    const subtitle = card?.subtitle;
    const title = card?.title;
    const text = card?.text;

    const hasSubtitle = this.castToString(subtitle);
    const hasTitle = this.castToString(title);
    const hasText = this.castToString(text);
    const hasButtons = this.hasAnyButton(buttons);

    const hasContent = hasSubtitle || hasTitle || hasText || hasButtons;

    if (!hasContent) return null;

    return (
      <div className={this.decorateCSS("left-side-container")}>
        <Base.VerticalContent className={this.decorateCSS("side")}>
          {hasSubtitle && (
            <Base.SectionSubTitle className={this.decorateCSS("sub-title")}>
              {subtitle}
            </Base.SectionSubTitle>
          )}
          {hasTitle && (
            <Base.SectionTitle className={this.decorateCSS("title")}>
              {title}
            </Base.SectionTitle>
          )}
          {hasText && (
            <Base.SectionDescription className={this.decorateCSS("text")}>
              {text}
            </Base.SectionDescription>
          )}
          {hasButtons && (
            <div className={this.decorateCSS("button-wrapper")}>
              {buttons.map((btn, btnIndex: number) => {
                const buttonText = btn.text;
                const buttonMedia = btn.media;
                const buttonUrl = btn.url || "#";
                const buttonType = btn.type;

                const btnTextExist = this.castToString(buttonText);
                const buttonMediaExist =
                  buttonMedia &&
                  ((buttonMedia as any).name || (buttonMedia as any).url);

                if (!btnTextExist && !buttonMediaExist) return null;

                return (
                  <ComposerLink path={buttonUrl} key={`left-btn-${btnIndex}`}>
                    <Base.Button
                      buttonType={buttonType}
                      className={this.decorateCSS("button")}
                      data-animation={this.getPropValue("hoverAnimation").join(
                        " "
                      )}
                    >
                      {btnTextExist && (
                        <Base.P className={this.decorateCSS("navigate-text")}>
                          {buttonText}
                        </Base.P>
                      )}
                      {buttonMediaExist && (
                        <Base.Media
                          value={buttonMedia}
                          className={this.decorateCSS("navigate-icon")}
                        />
                      )}
                    </Base.Button>
                  </ComposerLink>
                );
              })}
            </div>
          )}
        </Base.VerticalContent>
      </div>
    );
  }

  private renderRightSide() {
    const card = this.castToObject<SideCard>("rightCard");
    const buttons = this.getButtonsFromItem(card);

    const subtitle = card?.subtitle;
    const title = card?.title;
    const text = card?.text;

    const hasSubtitle = this.castToString(subtitle);
    const hasTitle = this.castToString(title);
    const hasText = this.castToString(text);
    const hasButtons = this.hasAnyButton(buttons);

    const hasContent = hasSubtitle || hasTitle || hasText || hasButtons;

    if (!hasContent) return null;

    return (
      <div className={this.decorateCSS("right-side-container")}>
        <Base.VerticalContent className={this.decorateCSS("side")}>
          {hasSubtitle && (
            <Base.SectionSubTitle className={this.decorateCSS("sub-title")}>
              {subtitle}
            </Base.SectionSubTitle>
          )}
          {hasTitle && (
            <Base.SectionTitle className={this.decorateCSS("title")}>
              {title}
            </Base.SectionTitle>
          )}
          {hasText && (
            <Base.SectionDescription className={this.decorateCSS("text")}>
              {text}
            </Base.SectionDescription>
          )}
          {hasButtons && (
            <div className={this.decorateCSS("button-wrapper")}>
              {buttons.map((btn, btnIndex: number) => {
                const buttonText = btn.text;
                const buttonMedia = btn.media;
                const buttonUrl = btn.url || "#";
                const buttonType = btn.type;

                const btnTextExist = this.castToString(buttonText);
                const buttonMediaExist =
                  buttonMedia &&
                  ((buttonMedia as any).name || (buttonMedia as any).url);

                if (!btnTextExist && !buttonMediaExist) return null;

                return (
                  <ComposerLink path={buttonUrl} key={`right-btn-${btnIndex}`}>
                    <Base.Button
                      buttonType={buttonType}
                      className={this.decorateCSS("button")}
                      data-animation={this.getPropValue("hoverAnimation").join(
                        " "
                      )}
                    >
                      {btnTextExist && (
                        <Base.P className={this.decorateCSS("navigate-text")}>
                          {buttonText}
                        </Base.P>
                      )}
                      {buttonMediaExist && (
                        <Base.Media
                          value={buttonMedia}
                          className={this.decorateCSS("navigate-icon")}
                        />
                      )}
                    </Base.Button>
                  </ComposerLink>
                );
              })}
            </div>
          )}
        </Base.VerticalContent>
      </div>
    );
  }

  render() {
    const image = this.getPropValue("image");
    const overlay = this.getPropValue("overlay");

    const hasImage =
      image && typeof image === "object" && "url" in image && image.url;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {this.renderLeftSide()}
          {hasImage && (
            <div
              className={this.decorateCSS("middle-container")}
              data-animation={this.getPropValue("hoverAnimation").join(" ")}
            >
              <div className={this.decorateCSS("middle")}>
                <Base.Media
                  value={image}
                  className={this.decorateCSS("image")}
                />
                {overlay && (
                  <div className={this.decorateCSS("thumbnail-overlay")} />
                )}
              </div>
            </div>
          )}
          {this.renderRightSide()}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Portfolio2;
