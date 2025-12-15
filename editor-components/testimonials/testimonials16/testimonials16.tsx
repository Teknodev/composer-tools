import React from "react";
import { Testimonials, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./testimonials16.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type LinkItem = {
  text?: React.JSX.Element
  textUrl: string
  arrow?: TypeMediaInputValue
}

type TestimonialItem = {
  logoImage?: TypeMediaInputValue
  image?: TypeMediaInputValue
  quote?: React.JSX.Element
  author?: React.JSX.Element
  role?: React.JSX.Element
  company?: React.JSX.Element
}

class Testimonials16 extends Testimonials {
  constructor(props?: unknown) {
    super(props, styles)

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    })

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Hear from Blinkpage's customers",
    })

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
            {
              type: "page",
              key: "textUrl",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Read Blinkpage reviews",
            },
            {
              type: "media",
              key: "arrow",
              displayer: "Arrow",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "LuArrowUpRight",
              },
            },
          ],
        },
        {
          type: "object",
          key: "link",
          displayer: "Link",
          value: [
            {
              type: "page",
              key: "textUrl",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "View all success stories",
            },
            {
              type: "media",
              key: "arrow",
              displayer: "Arrow",
              additionalParams: {
                availableTypes: ["icon", "image"],
              },
              value: {
                type: "icon",
                name: "LuArrowUpRight",
              },
            },
          ],
        },
      ],
    })

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
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147f283596a1002b25733b?alt=media",
              },
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147acd3596a1002b256950?alt=media",
              },
            },
            {
              type: "string",
              key: "quote",
              displayer: "Quote",
              value:
                "If I can give my clients value—even if they don't have the budget—I will. Blinkpage's AI tools make that possible.",
            },
            {
              type: "string",
              key: "author",
              displayer: "Author",
              value: "Josh Neimark",
            },
            {
              type: "string",
              key: "role",
              displayer: "Role",
              value: "CEO",
            },
            {
              type: "string",
              key: "company",
              displayer: "Company",
              value: "Fix8",
            },
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
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147ef33596a1002b257280?alt=media",
              },
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147ab13596a1002b256929?alt=media",
              },
            },
            {
              type: "string",
              key: "quote",
              displayer: "Quote",
              value: "Blinkpage's AI Assistant should save us 3 to 6 hours on most websites.",
            },
            {
              type: "string",
              key: "author",
              displayer: "Author",
              value: "Nat Rosasco",
            },
            {
              type: "string",
              key: "role",
              displayer: "Role",
              value: "Principal",
            },
            {
              type: "string",
              key: "company",
              displayer: "Company",
              value: "Olive Street Design",
            },
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
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147e9f3596a1002b257167?alt=media",
              },
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147a873596a1002b2568ec?alt=media",
              },
            },
            {
              type: "string",
              key: "quote",
              displayer: "Quote",
              value: "Blinkpage is a great option for agencies looking to leverage AI in their website building.",
            },
            {
              type: "string",
              key: "author",
              displayer: "Author",
              value: "Owain Williams",
            },
            {
              type: "string",
              key: "role",
              displayer: "Role",
              value: "Editor",
            },
            {
              type: "string",
              key: "company",
              displayer: "Company",
              value: "TechRadar",
            },
          ],
        },
      ],
    })

    this.addProp({
      type: "boolean",
      key: "backgroundOverlay",
      displayer: "Background Overlay",
      value: true,
    })

    this.addProp({
      type: "boolean",
      key: "mediaOverlay",
      displayer: "Overlay",
      value: false,
    })

    this.addProp({
      type: "boolean",
      key: "autoplay",
      displayer: "Autoplay",
      value: true,
    })

    this.addProp({
      type: "boolean",
      key: "navigation",
      displayer: "Navigation",
      value: true,
    })

    this.addProp({
      type: "boolean",
      key: "divider",
      displayer: "Divider",
      value: true,
    })

    this.addProp({
      type: "media",
      key: "prevButtonIcon",
      displayer: "Previous Slide Button",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "FaArrowLeft",
      },
    })

    this.addProp({
      type: "media",
      key: "nextButtonIcon",
      displayer: "Next Slide Button",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "FaArrowRight",
      },
    })

    this.addProp({
      type: "media",
      key: "quoteIcon",
      displayer: "Quote Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: "FaQuoteLeft",
      },
    })


    this.setComponentState("activeSlideIndex", 0)
    this.setComponentState("sliderRef", React.createRef())
    this.setComponentState("prevBackground", null)
  }

  static getName(): string {
    return "Testimonials 16"
  }

  render() {
    const testimonials = this.castToObject<TestimonialItem[]>("testimonials")
    const filteredTestimonials = testimonials.filter((item: TestimonialItem) => {
      const logoVal = item.logoImage as { url?: string } | undefined
      const imageVal = item.image as { url?: string } | undefined
      const hasLogo = !!logoVal?.url
      const hasImage = !!imageVal?.url
      const hasQuote = item.quote ? this.castToString(item.quote) : ""
      const hasAuthor = item.author ? this.castToString(item.author) : ""
      const hasRole = item.role ? this.castToString(item.role) : ""
      const hasCompany = item.company ? this.castToString(item.company) : ""
      return hasLogo || hasImage || hasQuote || hasAuthor || hasRole || hasCompany
    })
    const subtitleValue = this.getPropValue("subtitle")
    const titleValue = this.getPropValue("title")
    const links = this.castToObject<LinkItem[]>("links")
    const sliderRef = this.getComponentState("sliderRef")
    const storedActiveIndex = this.getComponentState("activeSlideIndex") || 0
    const activeIndex = storedActiveIndex
    const prevBackground = this.getComponentState("prevBackground")
    const prevIcon = this.getPropValue("prevButtonIcon")
    const nextIcon = this.getPropValue("nextButtonIcon")
    const quoteIconValue = this.getPropValue("quoteIcon")
    const dividerEnabled = this.getPropValue("divider") !== false
    const hasSubtitle = this.castToString(subtitleValue)
    const hasTitle = this.castToString(titleValue)
    const showMediaOverlay = this.getPropValue("mediaOverlay") !== false
    const showBackgroundOverlay = this.getPropValue("backgroundOverlay")
    const autoplayEnabled = this.getPropValue("autoplay") !== false
    const showNavigation = this.getPropValue("navigation") !== false
    const activePortraitValue = filteredTestimonials[activeIndex]?.image as { url?: string } | undefined
    const activePortrait = activePortraitValue?.url ? filteredTestimonials[activeIndex]?.image : null
    const subtitleType = Base.getSectionSubTitleType()
    const hideBadgeBackground = subtitleType === "badge" && !!activePortrait
    const lightenLineColor = subtitleType === "line" && !!activePortrait
    const subtitleClasses = `${this.decorateCSS("subtitle")} ${hideBadgeBackground ? this.decorateCSS("subtitle-badge-hidden") : ""} ${lightenLineColor ? this.decorateCSS("subtitle-line-light") : ""}`.trim()

    const baseSettings = {
      arrows: false,
      dots: false,
      infinite: filteredTestimonials.length > 1,
      speed: 700,
      autoplay: autoplayEnabled && filteredTestimonials.length > 1,
      autoplaySpeed: 5200,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      beforeChange: (_current: number, next: number) => {
        this.setComponentState("prevBackground", filteredTestimonials[_current]?.image || null)
        this.setComponentState("activeSlideIndex", next)
      },
    }

    const hasActivePortrait = !!activePortrait
    const containerClassNames = [
      this.decorateCSS("container"),
      hasActivePortrait ? this.decorateCSS("with-background") : "",
      !hasActivePortrait ? this.decorateCSS("no-background") : "",
    ]
      .filter(Boolean)
      .join(" ")

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
          {(hasSubtitle || hasTitle || links.length > 0) && (
            <div className={this.decorateCSS("header")}>
              {(hasSubtitle || hasTitle) && (
                <div className={this.decorateCSS("header-text")}>
                  {hasSubtitle && (
                    <Base.SectionSubTitle className={subtitleClasses}>{subtitleValue}</Base.SectionSubTitle>
                  )}
                  {hasTitle && <Base.SectionTitle className={this.decorateCSS("title")}>{titleValue}</Base.SectionTitle>}
                </div>
              )}
              {links.length > 0 && (
                <div className={this.decorateCSS("links")}>
                  {links.map((link: LinkItem, index: number) => {
                    const hasLinkText = link.text ? this.castToString(link.text) : ""
                    const linkArrow = link.arrow
                    if (!hasLinkText && !linkArrow) return null
                    return (
                      <ComposerLink key={index} path={link.textUrl}>
                        <div className={this.decorateCSS("link-item")}>
                          {hasLinkText && <Base.P className={this.decorateCSS("link-text")}>{link.text}</Base.P>}
                          {linkArrow && <Base.Media value={linkArrow} className={this.decorateCSS("link-icon")} />}
                        </div>
                      </ComposerLink>
                    )
                  })}
                </div>
              )}
            </div>
          )}
          {filteredTestimonials.length > 0 && (
            <div className={this.decorateCSS("slider-wrapper")}>
              <ComposerSlider {...baseSettings} ref={sliderRef} className={this.decorateCSS("slider")}>
                {filteredTestimonials.map((item: TestimonialItem, index: number) => {
                  const hasQuote = item.quote ? this.castToString(item.quote) : ""
                  const hasAuthor = item.author ? this.castToString(item.author) : ""
                  const hasRole = item.role ? this.castToString(item.role) : ""
                  const logoImageValue = item.logoImage as { url?: string } | undefined
                  const portraitValue = item.image as { url?: string } | undefined
                  const logoImage = logoImageValue?.url ? item.logoImage : null
                  const portrait = portraitValue?.url ? item.image : null
                  const hasCompany = item.company ? this.castToString(item.company) : ""
                  const hasCardBody = logoImage || hasQuote || hasAuthor || hasRole || hasCompany
                  const cardClassName = hasCardBody ? this.decorateCSS("card") : `${this.decorateCSS("card")} ${this.decorateCSS("card-single")}`

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
                                  {quoteIconValue && <Base.Media value={quoteIconValue} className={this.decorateCSS("quote-icon")} />}
                                  <Base.H3 className={this.decorateCSS("quote")}>{item.quote}</Base.H3>
                                </div>
                              )}
                              {(hasAuthor || hasRole || hasCompany) && (
                                <>
                                  <div
                                    className={`${this.decorateCSS("author-divider")} ${
                                      !dividerEnabled ? this.decorateCSS("author-divider-hidden") : ""
                                    }`}
                                  />
                                  <div className={this.decorateCSS("author-block")}>
                                    {hasAuthor && (
                                      <Base.P className={this.decorateCSS("author")}>{item.author}</Base.P>
                                    )}
                                    {hasAuthor && (hasRole || hasCompany) && (
                                      <Base.P className={this.decorateCSS("author-separator")}>-</Base.P>
                                    )}
                                    {(hasRole || hasCompany) && (
                                      <Base.P className={this.decorateCSS("role-company")}>
                                        {hasRole && item.role}
                                        {hasRole && hasCompany && ", "}
                                        {hasCompany && item.company}
                                      </Base.P>
                                    )}
                                  </div>
                                </>
                              )}
                              {(hasAuthor || hasRole || hasCompany) && (
                                <div className={`${this.decorateCSS("mobile-author-row")} ${!portrait ? this.decorateCSS("mobile-author-row-no-image") : ""}`}>
                                  {portrait && <Base.Media value={portrait} className={this.decorateCSS("mobile-author-image")} />}
                                  <div className={this.decorateCSS("mobile-author-info")}>
                                    {hasAuthor && <Base.P className={this.decorateCSS("author")}>{item.author}</Base.P>}
                                    {(hasRole || hasCompany) && (
                                      <Base.P className={this.decorateCSS("role")}>
                                        {hasRole && item.role}
                                        {hasRole && hasCompany && ", "}
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
                  )
                })}
              </ComposerSlider>
            </div>
          )}
          {filteredTestimonials.length > 1 && showNavigation && (
            <div className={this.decorateCSS("nav-wrapper")}>
              {prevIcon && (
                <div
                  className={this.decorateCSS("navigation-button")}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    sliderRef?.current?.slickPrev()
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault()
                      sliderRef?.current?.slickPrev()
                    }
                  }}
                >
                  <Base.Media value={prevIcon} className={this.decorateCSS("navigation-icon")} />
                </div>
              )}
              <div className={this.decorateCSS("navigation-dots-panel")}>
                <div className={this.decorateCSS("navigation-dots")}>
                  {filteredTestimonials.map((_: TestimonialItem, index: number) => (
                    <div
                      key={index}
                      className={`${this.decorateCSS("navigation-dot")} ${activeIndex === index ? this.decorateCSS("navigation-dot-active") : ""}`}
                      onClick={() => {
                        sliderRef?.current?.slickGoTo(index)
                      }}
                    />
                  ))}
                </div>
              </div>
              {nextIcon && (
                <div
                  className={this.decorateCSS("navigation-button")}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    sliderRef?.current?.slickNext()
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault()
                      sliderRef?.current?.slickNext()
                    }
                  }}
                >
                  <Base.Media value={nextIcon} className={this.decorateCSS("navigation-icon")} />
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    )
  }
}

export default Testimonials16
