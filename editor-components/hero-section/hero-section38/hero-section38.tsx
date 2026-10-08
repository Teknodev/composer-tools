import styles from "./hero-section38.module.scss";
import { BaseHeroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

interface CardItem {
  visibility: boolean;
  url: string;
  logo: TypeMediaInputValue;
  subtitle: React.JSX.Element;
  title: React.JSX.Element;
  description: React.JSX.Element;
  icon: TypeMediaInputValue;
  secondaryIcon: TypeMediaInputValue;
  buttons: any[];
  media: TypeMediaInputValue;
  overlay: boolean;
}

type CardButton = {
  text: React.JSX.Element;
  type: string;
  url: string;
  media: TypeMediaInputValue | null;
};

const card = (title: string, iconName: string, secondaryIconName: string, mediaUrl: string): TypeUsableComponentProps => ({
  type: "object",
  key: "card",
  displayer: "Card",
  value: [
    {
      type: "boolean",
      key: "visibility",
      displayer: "Visibility",
      value: true,
    },
    {
      type: "page",
      key: "url",
      displayer: "Navigate To",
      value: "",
    },
    {
      type: "media",
      key: "logo",
      displayer: "Logo",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "" },
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
      value: title,
    },
    {
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    },
    {
      type: "media",
      key: "icon",
      displayer: "Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: iconName },
    },
    {
      type: "media",
      key: "secondaryIcon",
      displayer: "Secondary Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: secondaryIconName },
    },
    {
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", "", null, "Primary")],
    },
    {
      type: "media",
      key: "media",
      displayer: "Media",
      additionalParams: { availableTypes: ["image", "video"] },
      value: {
        type: "image",
        url: mediaUrl,
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

class HeroSection38 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        card("", "", "", "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/694e3662f959f6002d79b56d?alt=media"),
        card("", "", "", "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/694e3672f959f6002d79b58a?alt=media"),
        card("Start business with mentors", "RxDividerVertical", "LuChevronRight", "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/694e3680f959f6002d79b5a4?alt=media"),
        card("Achieve goals & coach fast", "RxDividerVertical", "LuChevronRight", "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/694e368df959f6002d79b5be?alt=media"),
        card("", "", "", "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/694e36a0f959f6002d79b610?alt=media"),
      ],
    });
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Animation",
      value: ["Animate1"],
      additionalParams: {
        selectItems: ["Animate1", "Animate2"],
      },
    });
  }
  static getName(): string {
    return "Hero Section 38";
  }

  hasMedia(media?: TypeMediaInputValue | null) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  getButtons(item: CardItem): CardButton[] {
    const buttonsArray = item?.buttons;
    if (!Array.isArray(buttonsArray)) return [];

    return buttonsArray.map((btn: any) => {
      if (Array.isArray(btn?.value)) {
        const parent = btn.value;
        return {
          text: this.getPropValue("text", { parent_object: parent }),
          type: this.getPropValue("type", { parent_object: parent }),
          url: this.getPropValue("url", { parent_object: parent }),
          media: this.getPropValue("icon", { parent_object: parent }) || null,
        };
      }
      return { text: btn?.text, type: btn?.type, url: btn?.url, media: btn?.icon || null };
    });
  }

  hasContent(item: CardItem) {
    if (!item || !item.visibility) return false;
    const hasAnyButton = this.getButtons(item).some((button) => this.castToString(button.text) || this.hasMedia(button.media));
    return !!(
      this.castToString(item.subtitle) ||
      this.castToString(item.title) ||
      this.castToString(item.description) ||
      this.hasMedia(item.media) ||
      this.hasMedia(item.logo) ||
      this.hasMedia(item.icon) ||
      this.hasMedia(item.secondaryIcon) ||
      hasAnyButton
    );
  }

  renderItemContent(item: CardItem) {
    const buttons = this.getButtons(item);
    const hasLogo = this.hasMedia(item.logo);
    const hasIcon = this.hasMedia(item.icon);
    const hasSecondaryIcon = this.hasMedia(item.secondaryIcon);
    const hasSubtitle = this.castToString(item.subtitle);
    const hasTitle = this.castToString(item.title);
    const hasDescription = this.castToString(item.description);
    const visibleButtons = buttons.filter((button) => this.castToString(button.text) || this.hasMedia(button.media));

    return (
      <div className={this.decorateCSS("content")}>
        <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
          {hasLogo && <Base.Media value={item.logo} className={this.decorateCSS("logo")} />}
          {hasSubtitle && (
            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
              {item.subtitle}
            </Base.SectionSubTitle>
          )}

          {(hasTitle || hasIcon || hasSecondaryIcon) && (
            <div className={this.decorateCSS("title-row")}>
              {hasTitle && (
                <Base.P className={this.decorateCSS("title")}>
                  {item.title}
                </Base.P>
              )}

              {(hasIcon || hasSecondaryIcon) && (
                <div className={this.decorateCSS("icons-wrapper")}>
                  {hasIcon && <Base.Media value={item.icon} className={this.decorateCSS("icon1")} />}
                  {hasSecondaryIcon && <Base.Media value={item.secondaryIcon} className={this.decorateCSS("icon2")} />}
                </div>
              )}
            </div>
          )}

          {hasDescription && (
            <Base.SectionDescription className={this.decorateCSS("description")}>
              {item.description}
            </Base.SectionDescription>
          )}

          {visibleButtons.length > 0 && (
            <div className={this.decorateCSS("action-buttons")}>
              {visibleButtons.map((button, index: number) => {
                const btnTextExist = this.castToString(button.text);
                const buttonMediaExist = this.hasMedia(button.media);
                return (
                  <ComposerLink path={button.url} key={`card-btn-${index}`}>
                    <Base.Button buttonType={button.type as any} className={this.decorateCSS("button")}>
                      {buttonMediaExist && <Base.Media value={button.media as TypeMediaInputValue} className={this.decorateCSS("button-icon")} />}
                      {btnTextExist && <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>}
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

  renderItem(item: CardItem, key: string | number, extraClassName: string) {
    const hasItemMedia = this.hasMedia(item.media);
    return (
      <ComposerLink key={key} path={item.url} isFullWidth={true}>
        <div
          className={`${this.decorateCSS("item")} ${!hasItemMedia ? this.decorateCSS("no-media") : ""} ${extraClassName}`}
          data-animation={this.getPropValue("hoverAnimation").join(" ")}
        >
          {hasItemMedia && (
            <div className={this.decorateCSS("background-media")}>
              <Base.Media value={item.media} className={this.decorateCSS("media-element")} />
              {item.overlay && <div className={this.decorateCSS("thumbnail-overlay")} />}
            </div>
          )}
          {this.renderItemContent(item)}
        </div>
      </ComposerLink>
    );
  }

  render() {
    const cards = this.castToObject<CardItem[]>("cards");
    const leftItem = cards[0];
    const hasLeftSection = this.hasContent(leftItem);

    const rows: CardItem[][] = [];
    cards.slice(1).forEach((item: CardItem, index: number) => {
      if (index % 2 === 0) rows.push([]);
      rows[rows.length - 1].push(item);
    });
    const visibleRows = rows
      .map((row) => row.filter((item) => this.hasContent(item)))
      .filter((row) => row.length > 0);
    const renderRight = visibleRows.length > 0;

    return (
      <Base.Container isFull={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasLeftSection && (
            <div className={this.decorateCSS("left")}>
              {this.renderItem(leftItem, "left", renderRight ? this.decorateCSS("right-edge") : "")}
            </div>
          )}

          {renderRight && (
            <div className={this.decorateCSS("right")}>
              {visibleRows.map((row, rowIndex: number) => (
                <div key={rowIndex} className={this.decorateCSS("row")}>
                  {row.map((item, itemIndex: number) => {
                    const classes: string[] = [];
                    if (row.length > 1) {
                      classes.push(this.decorateCSS(itemIndex === 0 ? "inner-right" : "inner-left"));
                    }
                    if (hasLeftSection && itemIndex === 0) {
                      classes.push(this.decorateCSS("left-edge"));
                    }
                    return this.renderItem(item, itemIndex, classes.join(" "));
                  })}
                </div>
              ))}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection38;
