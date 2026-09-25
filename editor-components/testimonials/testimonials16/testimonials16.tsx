import * as React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials16.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type LinkItem = {
  text?: React.JSX.Element;
  textUrl: string;
  arrow?: TypeMediaInputValue;
};

type TestimonialItem = {
  logoImage?: TypeMediaInputValue;
  image?: TypeMediaInputValue;
  text?: React.JSX.Element;
  author?: {
    name: React.JSX.Element;
    position: React.JSX.Element;
  };
  company?: React.JSX.Element;
};

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

class Testimonials16 extends Testimonials {
  constructor(props?: unknown) {
    super(props, styles);

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
      value: "Hear from Blinkpage's customers",
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
      type: "array",
      key: "links",
      displayer: "Links",
      value: [
        {
          type: "object",
          key: "link",
          displayer: "Link",
          value: [
            { type: "page", key: "textUrl", displayer: "Navigate To", value: "" },
            { type: "string", key: "text", displayer: "Text", value: "Read Blinkpage reviews" },
            {
              type: "media",
              key: "arrow",
              displayer: "Arrow",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "LuArrowUpRight" },
            },
          ],
        },
        {
          type: "object",
          key: "link",
          displayer: "Link",
          value: [
            { type: "page", key: "textUrl", displayer: "Navigate To", value: "" },
            { type: "string", key: "text", displayer: "Text", value: "View all success stories" },
            {
              type: "media",
              key: "arrow",
              displayer: "Arrow",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "LuArrowUpRight" },
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "testimonials",
      displayer: "Testimonials",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Testimonial",
          value: [
            {
              type: "media",
              key: "logoImage",
              displayer: "Logo Image",
              additionalParams: { availableTypes: ["image"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147f283596a1002b25733b?alt=media" },
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147acd3596a1002b256950?alt=media" },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "If I can give my clients value—even if they don't have the budget—I will. Blinkpage's AI tools make that possible.",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Josh Neimark" },
                { type: "string", key: "position", displayer: "Position", value: "CEO" },
              ],
            },
            { type: "string", key: "company", displayer: "Company", value: "Fix8" },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Testimonial",
          value: [
            {
              type: "media",
              key: "logoImage",
              displayer: "Logo Image",
              additionalParams: { availableTypes: ["image"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147ef33596a1002b257280?alt=media" },
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147ab13596a1002b256929?alt=media" },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Blinkpage's AI Assistant should save us 3 to 6 hours on most websites.",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Nat Rosasco" },
                { type: "string", key: "position", displayer: "Position", value: "Principal" },
              ],
            },
            { type: "string", key: "company", displayer: "Company", value: "Olive Street Design" },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Testimonial",
          value: [
            {
              type: "media",
              key: "logoImage",
              displayer: "Logo Image",
              additionalParams: { availableTypes: ["image"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147e9f3596a1002b257167?alt=media" },
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image"] },
              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147a873596a1002b2568ec?alt=media" },
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Blinkpage is a great option for agencies looking to leverage AI in their website building.",
            },
            {
              type: "object",
              key: "author",
              displayer: "Author",
              value: [
                { type: "string", key: "name", displayer: "Name", value: "Owain Williams" },
                { type: "string", key: "position", displayer: "Position", value: "Editor" },
              ],
            },
            { type: "string", key: "company", displayer: "Company", value: "TechRadar" },
          ],
        },
      ],
    });

    this.addProp({ type: "boolean", key: "backgroundOverlay", displayer: "Background Overlay", value: true });
    this.addProp({ type: "boolean", key: "mediaOverlay", displayer: "Overlay", value: false });
    this.addProp({ type: "boolean", key: "autoplay", displayer: "Autoplay", value: true });
    this.addProp({ type: "boolean", key: "divider", displayer: "Divider", value: true });

    this.addProp({
      type: "media",
      key: "prevButtonIcon",
      displayer: "Previous Slide Button",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FaArrowLeft" },
    });

    this.addProp({
      type: "media",
      key: "nextButtonIcon",
      displayer: "Next Slide Button",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FaArrowRight" },
    });

    this.addProp({
      type: "media",
      key: "quoteIcon",
      displayer: "Quote Icon",
      additionalParams: { availableTypes: ["icon", "image"] },
      value: { type: "icon", name: "FaQuoteLeft" },
    });

    this.addProp(INPUTS.SLIDER_SETTINGS("slider-settings", "Slider Settings", {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 5200,
      slidesToShow: 1,
      slidesToScroll: 1,
    }));
    this.setComponentState("activeSlideIndex", 0);
    this.setComponentState("sliderRef", React.createRef());
    this.setComponentState("prevBackground", null);
  }

  static getName(): string {
    return "Testimonials 16";
  }

  render() {
    const subtitleExist = this.castToString(this.getPropValue("subtitle"));
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<Button[]>("buttons");
    const hasValidButtons = buttons.some((btn: Button) => {
      const buttonText = this.castToString(btn.text);
      const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
      return buttonText || iconExist;
    });
    const links = this.castToObject<LinkItem[]>("links");
    const hasAnyTopContent = subtitleExist || titleExist || descriptionExist || hasValidButtons || links.length > 0;

    const testimonials = this.castToObject<TestimonialItem[]>("testimonials");
    const filteredTestimonials = testimonials.filter((item: TestimonialItem) => {
      const logoVal = item.logoImage;
      const hasLogo = logoVal && (logoVal.type === "icon" ? logoVal.name : logoVal.url);
      const imgVal = item.image;
      const hasImage = imgVal && imgVal.type === "image" && imgVal.url;
      const hasQuote = this.castToString(item.text);
      const hasAuthorName = item.author && this.castToString(item.author.name);
      const hasAuthorSubtitle = item.author && this.castToString(item.author.position);
      const hasCompany = this.castToString(item.company);
      return hasLogo || hasImage || hasQuote || hasAuthorName || hasAuthorSubtitle || hasCompany;
    });
    const hasAnyPortrait = filteredTestimonials.some((item: TestimonialItem) => {
      const imgVal = item.image;
      return imgVal && imgVal.type === "image" && !!imgVal.url;
    });
    const sliderRef = this.getComponentState("sliderRef");
    const storedActiveIndex = this.getComponentState("activeSlideIndex") || 0;
    const activeIndex = storedActiveIndex;
    const prevBackground = this.getComponentState("prevBackground");
    const prevIcon = this.getPropValue("prevButtonIcon");
    const nextIcon = this.getPropValue("nextButtonIcon");
    const quoteIconValue = this.getPropValue("quoteIcon");
    const dividerEnabled = this.getPropValue("divider") !== false;
    const showMediaOverlay = this.getPropValue("mediaOverlay") !== false;
    const showBackgroundOverlay = this.getPropValue("backgroundOverlay");
    const autoplayEnabled = this.getPropValue("autoplay") !== false;
    const activeItemImage = filteredTestimonials[activeIndex]?.image;
    const activePortrait = activeItemImage && activeItemImage.type === "image" && activeItemImage.url ? activeItemImage : null;
    const subtitleType = Base.getSectionSubTitleType();
    const hideBadgeBackground = subtitleType === "badge" && !!activePortrait;
    const subtitleClasses = `${this.decorateCSS("subtitle")} ${hideBadgeBackground ? this.decorateCSS("subtitle-badge-hidden") : ""}`;

    const rawSettings = this.getPropValue("slider-settings");
    const sliderSettings = Object.fromEntries((rawSettings as any[]).map((p: any) => [p.key, p.value]));
    const baseSettings = {
      ...sliderSettings,
      arrows: false,
      dots: false,
      infinite: filteredTestimonials.length > 1,
      autoplay: autoplayEnabled && filteredTestimonials.length > 1,
      beforeChange: (_current: number, next: number) => {
        const img = filteredTestimonials[_current]?.image;
        this.setComponentState("prevBackground", img && img.type === "image" && img.url ? img : null);
        this.setComponentState("activeSlideIndex", next);
      },
    };

    const hasActivePortrait = !!activePortrait;
    const containerClassNames = [
      this.decorateCSS("container"),
      hasActivePortrait ? this.decorateCSS("with-background") : this.decorateCSS("no-background"),
      !hasAnyPortrait && this.decorateCSS("no-portrait"),
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Base.Container className={containerClassNames}>
        {hasActivePortrait && (
          <div className={this.decorateCSS("background")} data-overlay={showBackgroundOverlay}>
            <div className={this.decorateCSS("background-media-layer")}>
              {prevBackground && prevBackground !== activePortrait && (
                <Base.Media
                  key={`prev-${activeIndex}`}
                  value={prevBackground}
                  className={`${this.decorateCSS("background-media")} ${this.decorateCSS("background-media-prev")}`}
                />
              )}
              <Base.Media
                key={`active-${activeIndex}`}
                value={activePortrait}
                className={`${this.decorateCSS("background-media")} ${this.decorateCSS("background-media-active")}`}
              />
            </div>
            <div className={this.decorateCSS("background-overlay")} data-visible={showBackgroundOverlay} />
          </div>
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasAnyTopContent && (
            <Base.VerticalContent className={this.decorateCSS("top-content")}>
              {subtitleExist && (
                <Base.SectionSubTitle className={subtitleClasses}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              )}
              {(titleExist || links.length > 0) && (
                <div className={this.decorateCSS("header")}>
                  {titleExist && (
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                      {this.getPropValue("title")}
                    </Base.SectionTitle>
                  )}
                  {links.length > 0 && (
                    <div className={this.decorateCSS("links")}>
                      {links.map((link: LinkItem, index: number) => {
                        const hasLinkText = link.text ? this.castToString(link.text) : "";
                        const linkArrow = link.arrow;
                        if (!hasLinkText && !linkArrow) return null;
                        return (
                          <ComposerLink key={index} path={link.textUrl}>
                            <div className={this.decorateCSS("link-item")}>
                              {hasLinkText && <Base.P className={this.decorateCSS("link-text")}>{link.text}</Base.P>}
                              {linkArrow && <Base.Media value={linkArrow} className={this.decorateCSS("link-icon")} />}
                            </div>
                          </ComposerLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
              {descriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
              {hasValidButtons && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((item: Button, index: number) => {
                    const buttonText = this.castToString(item.text);
                    const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                    if (!buttonText && !iconExist) return null;
                    return (
                      <ComposerLink key={index} path={item.url}>
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          {buttonText && (
                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                          )}
                          {iconExist && (
                            <Base.Media className={this.decorateCSS("button-icon")} value={item.icon!} />
                          )}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </div>
              )}
            </Base.VerticalContent>
          )}
          {filteredTestimonials.length > 0 && (
            <div className={this.decorateCSS("slider-wrapper")}>
              <ComposerSlider {...baseSettings} ref={sliderRef} className={this.decorateCSS("slider")}>
                {filteredTestimonials.map((item: TestimonialItem, index: number) => {
                  const hasQuote = this.castToString(item.text);
                  const hasAuthorName = item.author && this.castToString(item.author.name);
                  const hasAuthorSubtitle = item.author && this.castToString(item.author.position);
                  const logoVal = item.logoImage;
                  const logoImage = logoVal && (logoVal.type === "icon" ? logoVal.name : logoVal.url) ? logoVal : null;
                  const imgVal = item.image;
                  const portrait = imgVal && imgVal.type === "image" && imgVal.url ? imgVal : null;
                  const hasCompany = this.castToString(item.company);
                  const hasCardBody = logoImage || hasQuote || hasAuthorName || hasAuthorSubtitle || hasCompany;
                  const cardClassName = hasCardBody
                    ? this.decorateCSS("card")
                    : `${this.decorateCSS("card")} ${this.decorateCSS("card-single")}`;

                  return (
                    <div key={index} className={this.decorateCSS("slide")}>
                      <div className={cardClassName}>
                        {portrait && (
                          <div className={this.decorateCSS("image-wrapper")}>
                            <div className={this.decorateCSS("image-inner")}>
                              <Base.Media value={portrait} className={this.decorateCSS("portrait")} />
                              {showMediaOverlay && <div className={this.decorateCSS("media-overlay")} />}
                            </div>
                          </div>
                        )}
                        {hasCardBody && (
                          <div className={this.decorateCSS("card-body")}>
                            {logoImage && (
                              <div className={this.decorateCSS("logo-row")}>
                                <div className={this.decorateCSS("logo-box")}>
                                  <Base.Media value={logoImage} className={this.decorateCSS("logo")} />
                                </div>
                              </div>
                            )}
                            <div className={this.decorateCSS("content")}>
                              {hasQuote && (
                                <div className={this.decorateCSS("quote-row")}>
                                  {quoteIconValue && (
                                    <Base.Media value={quoteIconValue} className={this.decorateCSS("quote-icon")} />
                                  )}
                                  <Base.H3 className={this.decorateCSS("quote")}>{item.text}</Base.H3>
                                </div>
                              )}
                              {(hasAuthorName || hasAuthorSubtitle || hasCompany) && (
                                <>
                                  <div
                                    className={`${this.decorateCSS("author-divider")} ${
                                      !dividerEnabled && this.decorateCSS("author-divider-hidden")
                                    }`}
                                  />
                                  <div className={this.decorateCSS("author-block")}>
                                    {hasAuthorName && (
                                      <Base.P className={this.decorateCSS("author")}>{item.author!.name}</Base.P>
                                    )}
                                    {hasAuthorName && (hasAuthorSubtitle || hasCompany) && (
                                      <Base.P className={this.decorateCSS("author-separator")}>-</Base.P>
                                    )}
                                    {(hasAuthorSubtitle || hasCompany) && (
                                      <Base.P className={this.decorateCSS("role-company")}>
                                        {hasAuthorSubtitle && item.author!.position}
                                        {hasAuthorSubtitle && hasCompany && ", "}
                                        {hasCompany && item.company}
                                      </Base.P>
                                    )}
                                  </div>
                                </>
                              )}
                              {(hasAuthorName || hasAuthorSubtitle || hasCompany) && (
                                <div
                                  className={`${this.decorateCSS("mobile-author-row")} ${
                                    !portrait && this.decorateCSS("mobile-author-row-no-image")
                                  }`}
                                >
                                  {portrait && (
                                    <Base.Media value={portrait} className={this.decorateCSS("mobile-author-image")} />
                                  )}
                                  <div className={this.decorateCSS("mobile-author-info")}>
                                    {hasAuthorName && (
                                      <Base.P className={this.decorateCSS("author")}>{item.author!.name}</Base.P>
                                    )}
                                    {(hasAuthorSubtitle || hasCompany) && (
                                      <Base.P className={this.decorateCSS("role")}>
                                        {hasAuthorSubtitle && item.author!.position}
                                        {hasAuthorSubtitle && hasCompany && ", "}
                                        {hasCompany && item.company}
                                      </Base.P>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </ComposerSlider>
            </div>
          )}
          {filteredTestimonials.length > 1 && (sliderSettings.arrows || sliderSettings.dots) && (
            <div className={this.decorateCSS("nav-wrapper")}>
              {sliderSettings.arrows && prevIcon && (
                <div
                  className={this.decorateCSS("navigation-button")}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    sliderRef?.current?.slickPrev();
                  }}
                >
                  <Base.Media value={prevIcon} className={this.decorateCSS("navigation-icon")} />
                </div>
              )}
              {sliderSettings.dots && (
                <div className={this.decorateCSS("navigation-dots-panel")}>
                  <div className={this.decorateCSS("navigation-dots")}>
                    {filteredTestimonials.map((_: TestimonialItem, index: number) => (
                      <div
                        key={index}
                        className={`${this.decorateCSS("navigation-dot")} ${
                          activeIndex === index && this.decorateCSS("navigation-dot-active")
                        }`}
                        onClick={() => {
                          sliderRef?.current?.slickGoTo(index);
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
              {sliderSettings.arrows && nextIcon && (
                <div
                  className={this.decorateCSS("navigation-button")}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    sliderRef?.current?.slickNext();
                  }}
                >
                  <Base.Media value={nextIcon} className={this.decorateCSS("navigation-icon")} />
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials16;
