import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseHeroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./hero-section9.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type ITab = {
  title: React.JSX.Element;
  media: TypeMediaInputValue;
  url: string;
};

type ISocial = {
  text: React.JSX.Element;
  icon: TypeMediaInputValue;
  url: string;
};

type ICounter = {
  text: React.JSX.Element;
  active: boolean;
};

const mediaUrl = (id: string) =>
  `https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/${id}?alt=media&timestamp=1719483639150`;

const socialItem = (text: string, icon: string): TypeUsableComponentProps => ({
  type: "object",
  key: "social",
  displayer: "Item",
  value: [
    {
      type: "string",
      key: "text",
      displayer: "Text",
      value: text,
    },
    {
      type: "media",
      key: "icon",
      displayer: "Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: icon,
      },
    },
    {
      type: "page",
      key: "url",
      displayer: "Navigate To",
      value: "",
    },
  ],
});

const tabItem = (title: string, mediaId: string): TypeUsableComponentProps => ({
  type: "object",
  key: "tab",
  displayer: "Tab",
  value: [
    {
      type: "string",
      key: "title",
      displayer: "Title",
      value: title,
    },
    {
      type: "media",
      key: "media",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: mediaUrl(mediaId),
      },
    },
    {
      type: "page",
      key: "url",
      displayer: "Navigate To",
      value: "",
    },
  ],
});

class HeroSection9 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

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
      value: "Selected Works",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "socials",
      displayer: "Socials",
      value: [socialItem("Behance", "FaBehance"), socialItem("Instagram", "FaInstagram"), socialItem("Twitter", "FaTwitter")],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "See All Works", "", null, null, "Link")],
    });

    this.addProp({
      type: "array",
      key: "tabs",
      displayer: "Tabs",
      value: [
        tabItem("Color Flow", "666181aebd2970002c6247df"),
        tabItem("Pal", "666181aebd2970002c6247e2"),
        tabItem("The Lofe", "666181aebd2970002c6247e3"),
        tabItem("Kia", "666181aebd2970002c6247e0"),
        tabItem("Reykjavik", "666181aebd2970002c6247e4"),
        tabItem("Chanel", "666181aebd2970002c6247e1"),
        tabItem("Cazador", "666181aebd2970002c6247de"),
        tabItem("Alabster Co.", "666181aebd2970002c6247dd"),
      ],
    });
    this.addProp({
      type: "object",
      key: "counter",
      displayer: "Counter",
      value: [
        {
          type: "string",
          key: "text",
          displayer: "Text",
          value: "Project",
        },
        {
          type: "boolean",
          key: "active",
          displayer: "Show Counter",
          value: true,
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

    this.setComponentState("activeTab", 0);
  }

  handleMouseEnter(index: number) {
    this.setComponentState("activeTab", index);
  }

  static getName(): string {
    return "Hero Section 9";
  }

  hasMedia(media?: TypeMediaInputValue | null) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  withVideoSettings(media: TypeMediaInputValue) {
    return media?.type === "video"
      ? { ...media, settings: { autoplay: true, loop: true, muted: true, controls: false } }
      : media;
  }

  render() {
    const logo = this.getPropValue("logo");
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const hasLogo = this.hasMedia(logo);
    const isSubtitleExist = this.castToString(subtitle);
    const isTitleExist = this.castToString(title);
    const isDescriptionExist = this.castToString(description);

    const counter = this.castToObject<ICounter>("counter");
    const textExist = this.castToString(counter?.text);
    const isCounterActive = counter?.active;
    const socials = this.castToObject<ISocial[]>("socials").filter(
      (item: ISocial) => this.castToString(item.text) || this.hasMedia(item.icon)
    );
    const tabs = this.castToObject<ITab[]>("tabs");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons").filter((item: INPUTS.CastedButton) =>
      this.castToString(item.text)
    );
    const activeTabIndex: number = this.getComponentState("activeTab");

    const currentMedia = tabs[activeTabIndex]?.media ?? null;
    const hasCurrentMedia = this.hasMedia(currentMedia);

    const socialHeight = typeof document !== "undefined" ? document.getElementById("header9-social")?.clientHeight : undefined;
    const noTabs = (tabs.length < 1 || !isCounterActive) && !textExist;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("tabs")}>
            <Base.GridCell
              className={this.decorateCSS("left-content")}
              style={{ paddingBlock: `calc(${socialHeight ?? 0}px + var(--composer-gap-md) * 3)` }}
            >
              {((tabs.length > 0 && isCounterActive) || textExist) && (
                <div className={this.decorateCSS("buttons")} style={{ paddingLeft: `calc((${socialHeight}px) + var(--composer-gap-xl))` }}>
                  {textExist && <Base.H4 className={this.decorateCSS("text")}>{counter.text}</Base.H4>}

                  {isCounterActive && tabs.length > 0 && (
                    <div className={this.decorateCSS("counter-wrapper")}>
                      <Base.H3 className={this.decorateCSS("active-number")}>{activeTabIndex + 1}</Base.H3>
                      <Base.P className={this.decorateCSS("slash")}>/</Base.P>
                      <Base.H5 className={this.decorateCSS("count")}>{tabs.length}</Base.H5>
                    </div>
                  )}
                </div>
              )}
              <Base.VerticalContent
                className={`${this.decorateCSS("tab-buttons")} ${noTabs ? this.decorateCSS("no-tabs") : ""}`}
              >
                {hasLogo && <Base.Media value={logo} className={this.decorateCSS("logo")} />}
                {isSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
                {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                {isDescriptionExist && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>
                )}
                {tabs.map(
                  (tab: ITab, index: number) =>
                    this.castToString(tab.title) && (
                      <ComposerLink key={index} path={tab.url}>
                        <Base.P
                          className={`${this.decorateCSS("tabText")} ${activeTabIndex === index ? this.decorateCSS("active") : ""}`}
                          onMouseEnter={() => this.handleMouseEnter(index)}
                        >
                          {tab.title}
                        </Base.P>
                      </ComposerLink>
                    )
                )}
                {buttons.length > 0 && (
                  <div className={this.decorateCSS("button-container")}>
                    {buttons.map((item: INPUTS.CastedButton, index: number) => (
                      <ComposerLink key={index} path={item.url}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                        </Base.Button>
                      </ComposerLink>
                    ))}
                  </div>
                )}
              </Base.VerticalContent>
            </Base.GridCell>
            {hasCurrentMedia && (
              <Base.GridCell className={this.decorateCSS("right-content")}>
                <div className={this.decorateCSS("media-wrapper")}>
                  <Base.Media value={this.withVideoSettings(currentMedia)} className={this.decorateCSS("media")} />
                  {this.getPropValue("overlay") && <div className={this.decorateCSS("overlay")} />}
                </div>
              </Base.GridCell>
            )}
            {socials.length > 0 && (
              <div className={this.decorateCSS("social")} id={"header9-social"}>
                {socials.map((item: ISocial, idx: number) => (
                  <div key={idx} style={{ width: `${100 / socials.length} %` }} className={this.decorateCSS("social-item")}>
                    <ComposerLink path={item.url}>
                      <div className={this.decorateCSS("social-link")}>
                        {this.castToString(item.text) && <Base.P className={this.decorateCSS("social-link-text")}>{item.text}</Base.P>}
                        {this.hasMedia(item.icon) && <Base.Media value={item.icon} className={this.decorateCSS("social-icon")} />}
                      </div>
                    </ComposerLink>
                  </div>
                ))}
              </div>
            )}
          </Base.ContainerGrid>
        </div>
      </div>
    );
  }
}

export default HeroSection9;
