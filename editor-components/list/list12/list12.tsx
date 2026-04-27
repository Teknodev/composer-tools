import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./list12.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

interface BoxItem {
  item: TypeMediaInputValue;
  subtitle: JSX.Element;
  title: JSX.Element;
  description: JSX.Element;
  overlay: boolean;
}

interface BackgroundMedia {
  media: TypeMediaInputValue;
  overlay: boolean;
}

class List12 extends BaseList {
  static getName(): string {
    return "List 12";
  }

  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "backgroundMedia",
      displayer: "Background Media",
      value: [
        {
          type: "media",
          key: "media",
          displayer: "Media",
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/683dbb7557d0a6002b5dbba8?alt=media&timestamp=1748876160309",
          },
          additionalParams: {
            availableTypes: ["image", "video"],
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
      value: "Simplifying Payments, Fast and Secure",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "object",
      key: "box1",
      displayer: "Box",
      value: [
        {
          type: "media",
          key: "item",
          displayer: "Media",
          value: {
            type: "image",
            url: "https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          additionalParams: {
            availableTypes: ["image", "video", "icon"],
          },
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Experience contactless payments with just a tap of your card or phone.",
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "box2",
      displayer: "Box",
      value: [
        {
          type: "media",
          key: "item",
          displayer: "Media",
          value: {
            type: "image",
            url: "https://plus.unsplash.com/premium_photo-1682511145669-a0b9d9c1dc21?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          additionalParams: {
            availableTypes: ["image", "video", "icon"],
          },
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Accept payments anywhere with reliable and portable card readers.",
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "box3",
      displayer: "Box",
      value: [
        {
          type: "media",
          key: "item",
          displayer: "Media",
          value: {
            type: "image",
            url: "https://images.unsplash.com/photo-1616077167599-cad3639f9cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          additionalParams: {
            availableTypes: ["image", "video", "icon"],
          },
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "Send and receive money instantly, no matter where you are.",
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4"]
      }
    });
  }

  render() {
    const titleExist = this.castToString(this.getPropValue("title"));
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const box1 = this.castToObject<BoxItem>("box1");
    const box2 = this.castToObject<BoxItem>("box2");
    const box3 = this.castToObject<BoxItem>("box3");
    const backgroundMedia = this.castToObject<BackgroundMedia>("backgroundMedia");
    const hasBackgroundMedia = !!backgroundMedia?.media?.url;
    const backgroundOverlay = backgroundMedia?.overlay;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text) || (btn.icon && btn.icon.name));
    const hoverAnimation = (this.getPropValue("hoverAnimation") as string[] || []).join(" ");

    const box1Exist = !!box1;
    const box2Exist = !!box2;
    const box3Exist = !!box3;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {hasBackgroundMedia && (
          <Base.Media
            value={backgroundMedia.media}
            className={`${this.decorateCSS("background-media")} ${this.decorateCSS("media-el")}`}
          />
        )}
        {backgroundOverlay && hasBackgroundMedia && (
          <div className={this.decorateCSS("background-overlay")} />
        )}
        <Base.MaxContent isFull className={`${this.decorateCSS("max-content")} ${this.decorateCSS("alignment-center")}`}>
          <div className={this.decorateCSS("boxes")}>
            {box1Exist && (
              <div className={this.decorateCSS("leftBox")} data-animation={hoverAnimation}>
                {box1.item && (
                  <div className={`${this.decorateCSS("circle")} ${box1.item.type === "icon" && this.decorateCSS("no-circle")} ${hasBackgroundMedia && this.decorateCSS("with-bg")} ${hoverAnimation}`}>
                    <Base.Media
                      className={this.decorateCSS("img")}
                      value={box1.item}
                    />
                    {box1.overlay && (
                      <div className={this.decorateCSS("overlay")} />
                    )}
                  </div>
                )}
                {(this.castToString(box1.subtitle) || this.castToString(box1.title) || this.castToString(box1.description)) && (
                  <Base.VerticalContent className={this.decorateCSS("titles")}>
                    {this.castToString(box1.subtitle) && (
                      <Base.H6 className={`${this.decorateCSS("box-subtitle")} ${hasBackgroundMedia && this.decorateCSS("with-bg")}`}>
                        {box1.subtitle}
                      </Base.H6>
                    )}
                    {this.castToString(box1.title) && (
                      <Base.H5 className={`${this.decorateCSS("box-title")} ${hasBackgroundMedia && this.decorateCSS("with-bg")}`}>
                        {box1.title}
                      </Base.H5>
                    )}
                    {this.castToString(box1.description) && (
                      <Base.P className={`${this.decorateCSS("box-desc")} ${hasBackgroundMedia && this.decorateCSS("with-bg")}`}>
                        {box1.description}
                      </Base.P>
                    )}
                  </Base.VerticalContent>
                )}
              </div>
            )}
            <div className={this.decorateCSS("middleBox")} data-animation={hoverAnimation}>
              {subtitleExist && (
                <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${hasBackgroundMedia && this.decorateCSS("transparent-bg")}`}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {titleExist && (
                <Base.SectionTitle className={this.decorateCSS("section-wrapper")}>
                  <div className={`${this.decorateCSS("title")} ${hasBackgroundMedia && this.decorateCSS("with-bg")}`}>
                    {this.getPropValue("title")}
                  </div>
                </Base.SectionTitle>
              )}
              {descriptionExist && (
                <Base.SectionDescription className={`${this.decorateCSS("description")} ${hasBackgroundMedia && this.decorateCSS("with-bg")}`}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
              {hasValidButtons && (
                <div className={this.decorateCSS("button-wrapper")}>
                  {buttons.map((button: INPUTS.CastedButton, index: number) => {
                    const buttonTextExist = this.castToString(button.text);
                    const buttonIconExist = button.icon && !!button.icon.name;

                    if (!buttonTextExist && !buttonIconExist) return null;

                    return (
                      <ComposerLink key={index} path={button.url}>
                        <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                          {buttonTextExist && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
                          {buttonIconExist && <Base.Media className={this.decorateCSS("button-icon")} value={button.icon!} />}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
              {box2Exist && box2.item && (
                <div className={`${this.decorateCSS("circle")} ${box2.item.type === "icon" && this.decorateCSS("no-circle")} ${hasBackgroundMedia && this.decorateCSS("with-bg")} ${hoverAnimation}`}>
                  <Base.Media
                    className={this.decorateCSS("img")}
                    value={box2.item}
                  />
                  {box2.overlay && (
                    <div className={this.decorateCSS("overlay")} />
                  )}
                </div>
              )}
              {box2Exist && (this.castToString(box2.subtitle) || this.castToString(box2.title) || this.castToString(box2.description)) && (
                <Base.VerticalContent className={this.decorateCSS("titles")}>
                  {this.castToString(box2.subtitle) && (
                    <Base.H6 className={`${this.decorateCSS("box-subtitle")} ${hasBackgroundMedia && this.decorateCSS("with-bg")}`}>
                      {box2.subtitle}
                    </Base.H6>
                  )}
                  {this.castToString(box2.title) && (
                    <Base.H5 className={`${this.decorateCSS("box-title")} ${hasBackgroundMedia && this.decorateCSS("with-bg")}`}>
                      {box2.title}
                    </Base.H5>
                  )}
                  {this.castToString(box2.description) && (
                    <Base.P className={`${this.decorateCSS("box-desc")} ${hasBackgroundMedia && this.decorateCSS("with-bg")}`}>
                      {box2.description}
                    </Base.P>
                  )}
                </Base.VerticalContent>
              )}
            </div>

            {box3Exist && (
              <div className={this.decorateCSS("rightBox")} data-animation={hoverAnimation}>
                {box3.item && (
                  <div className={`${this.decorateCSS("circle")} ${box3.item.type === "icon" && this.decorateCSS("no-circle")} ${hasBackgroundMedia && this.decorateCSS("with-bg")} ${hoverAnimation}`}>
                    <Base.Media
                      className={this.decorateCSS("img")}
                      value={box3.item}
                    />
                    {box3.overlay && (
                      <div className={this.decorateCSS("overlay")} />
                    )}
                  </div>
                )}
                {(this.castToString(box3.subtitle) || this.castToString(box3.title) || this.castToString(box3.description)) && (
                  <Base.VerticalContent className={this.decorateCSS("titles")}>
                    {this.castToString(box3.subtitle) && (
                      <Base.H6 className={`${this.decorateCSS("box-subtitle")} ${hasBackgroundMedia && this.decorateCSS("with-bg")}`}>
                        {box3.subtitle}
                      </Base.H6>
                    )}
                    {this.castToString(box3.title) && (
                      <Base.H5 className={`${this.decorateCSS("box-title")} ${hasBackgroundMedia && this.decorateCSS("with-bg")}`}>
                        {box3.title}
                      </Base.H5>
                    )}
                    {this.castToString(box3.description) && (
                      <Base.P className={`${this.decorateCSS("box-desc")} ${hasBackgroundMedia && this.decorateCSS("with-bg")}`}>
                        {box3.description}
                      </Base.P>
                    )}
                  </Base.VerticalContent>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List12;
