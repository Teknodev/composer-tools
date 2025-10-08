"use client";

import React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials16.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

class Testimonials16 extends Testimonials {
  // pause sonrası autoplay'i tekilleştirmek için
  private autoplayTimeoutId: any = null;

  constructor(props?: any) {
    super(props, styles);

    // Initialize state
    this.setComponentState("currentSlide", 0);
    this.setComponentState("isPaused", false);
    this.setComponentState("autoPlayInterval", null);

    // Add props
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Hear from\nDuda's customers",
    });

    this.addProp({
      type: "array",
      key: "testimonials",
      displayer: "Testimonials",
      value: [
        this.createTestimonial({
          image:
            "data:image/jpeg;base64,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",
          logo: "OLIVE STREET DESIGN",
          quote:
            "Duda's AI Assistant should save us 3 to 6 hours on most websites",
          name: "Nat Rosasco",
          title: "Principal, Olive Street Design",
          logoType: "olive",
        }),
        this.createTestimonial({
          image:
            "data:image/jpeg;base64,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",
          logo: "fix8",
          quote:
            "If I can give my clients value - even if they don’t have the budget - I will. Duda’s AI tools make that possible",
          name: "Josh Neimark",
          title: "CEO, Fix8",
          logoType: "fix8",
        }),
        this.createTestimonial({
          image:
            "https://lirp.cdn-website.com/a8ff2f1c/dms3rep/multi/opt/Owain+Williams+--1920w.png",
          logo: "techradar.",
          quote:
            "Duda is a great option for agencies looking to leverage AI in their website building.",
          name: "Owain Williams",
          title: "Editor, TechRadar",
          logoType: "techradar",
        }),
      ],
    });

    this.addProp({
      type: "array",
      key: "links",
      displayer: "Links",
      value: [
        this.createLink({
          text: "Read Duda reviews",
          url: "#",
        }),
        this.createLink({
          text: "View all success stories",
          url: "#",
        }),
      ],
    });
  }

  static getName(): string {
    return "Testimonials 16";
  }

  createTestimonial(testimonial: {
    image: string;
    logo: string;
    quote: string;
    name: string;
    title: string;
    logoType: string;
  }) {
    return [
      {
        type: "image",
        key: "image",
        displayer: "Person Image",
        value: testimonial.image,
      },
      {
        type: "string",
        key: "logo",
        displayer: "Company Logo Text",
        value: testimonial.logo,
      },
      {
        type: "string",
        key: "quote",
        displayer: "Quote",
        value: testimonial.quote,
      },
      {
        type: "string",
        key: "name",
        displayer: "Name",
        value: testimonial.name,
      },
      {
        type: "string",
        key: "title",
        displayer: "Title",
        value: testimonial.title,
      },
      {
        type: "string",
        key: "logoType",
        displayer: "Logo Type (olive, fix8, techradar)",
        value: testimonial.logoType,
      },
    ];
  }

  createLink(link: { text: string; url: string }) {
    return [
      { type: "string", key: "text", displayer: "Text", value: link.text },
      { type: "page", key: "url", displayer: "URL", value: link.url },
    ];
  }

  renderLogo(logoType: string, logoText: string) {
    switch (logoType) {
      case "olive":
        return (
          <div className={this.decorateCSS("oliveStreetLogo")}>
            <span className={this.decorateCSS("oliveText")}>OLIVE STREET</span>
            <div className={this.decorateCSS("oliveIcon")}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="15"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 8C16 8 12 12 12 16C12 20 14 22 16 22C18 22 20 20 20 16C20 12 16 8 16 8Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className={this.decorateCSS("designText")}>DESIGN</span>
          </div>
        );
      case "fix8":
        return (
          <div className={this.decorateCSS("fix8Logo")}>
            <span>fix</span>
            <span className={this.decorateCSS("fix8Number")}>8</span>
          </div>
        );
      case "techradar":
        return (
          <div className={this.decorateCSS("techRadarLogo")}>
            <span>techradar</span>
            <span className={this.decorateCSS("techRadarDot")}>.</span>
          </div>
        );
      default:
        return <span className={this.decorateCSS("logoText")}>{logoText}</span>;
    }
  }

  componentDidMount() {
    this.ensureValidIndex();
    this.startAutoPlay();
  }

  componentWillUnmount() {
    this.stopAutoPlay();
    if (this.autoplayTimeoutId) {
      clearTimeout(this.autoplayTimeoutId);
      this.autoplayTimeoutId = null;
    }
  }

  ensureValidIndex = () => {
    const testimonials = this.getPropValue("testimonials") || [];
    const len = Array.isArray(testimonials) ? testimonials.length : 0;
    let currentSlide = this.getComponentState("currentSlide") || 0;
    if (len === 0) {
      currentSlide = 0;
    } else if (currentSlide >= len) {
      currentSlide = len - 1;
    } else if (currentSlide < 0) {
      currentSlide = 0;
    }
    this.setComponentState("currentSlide", currentSlide);
  };

  startAutoPlay = () => {
    const isPaused = this.getComponentState("isPaused");
    if (isPaused) return;

    const existing = this.getComponentState("autoPlayInterval");
    const testimonials = this.getPropValue("testimonials") || [];
    const len = Array.isArray(testimonials) ? testimonials.length : 0;

    if (len <= 1) return; // tek slaytta autoplay gereksiz
    if (existing) return; // zaten interval varsa tekrar kurma

    const interval = setInterval(() => {
      const t = this.getPropValue("testimonials") || [];
      const l = Array.isArray(t) ? t.length : 0;
      if (l <= 1) return;
      const currentSlide = this.getComponentState("currentSlide") || 0;
      this.setComponentState("currentSlide", (currentSlide + 1) % l);
    }, 5000) as any; // SCSS'teki --dot-duration: 5s ile eşleşir

    this.setComponentState("autoPlayInterval", interval);
  };

  stopAutoPlay = () => {
    const interval = this.getComponentState("autoPlayInterval");
    if (interval) {
      clearInterval(interval);
      this.setComponentState("autoPlayInterval", null);
    }
  };

  pauseAutoPlay = () => {
    this.stopAutoPlay();
    this.setComponentState("isPaused", true);

    if (this.autoplayTimeoutId) {
      clearTimeout(this.autoplayTimeoutId);
    }
    this.autoplayTimeoutId = setTimeout(() => {
      this.setComponentState("isPaused", false);
      this.startAutoPlay();
      this.autoplayTimeoutId = null;
    }, 10000);
  };

  nextSlide = () => {
    this.pauseAutoPlay();
    const testimonials = this.getPropValue("testimonials") || [];
    const len = Array.isArray(testimonials) ? testimonials.length : 0;
    const currentSlide = this.getComponentState("currentSlide") || 0;
    this.setComponentState("currentSlide", len ? (currentSlide + 1) % len : 0);
  };

  prevSlide = () => {
    this.pauseAutoPlay();
    const testimonials = this.getPropValue("testimonials") || [];
    const len = Array.isArray(testimonials) ? testimonials.length : 0;
    const currentSlide = this.getComponentState("currentSlide") || 0;
    this.setComponentState(
      "currentSlide",
      len ? (currentSlide - 1 + len) % len : 0
    );
  };

  goToSlide = (index: number) => {
    this.pauseAutoPlay();
    this.setComponentState("currentSlide", index);
  };

  handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") this.prevSlide();
    if (e.key === "ArrowRight") this.nextSlide();
  };

  render() {
    const title = this.getPropValue("title");
    const links = this.castToObject<any[]>("links");
    const testimonials = this.castToObject<any[]>("testimonials");
    const currentSlide = this.getComponentState("currentSlide") || 0;
    const isPaused = this.getComponentState("isPaused");

    const currentTestimonial = testimonials[currentSlide];

    // Extract values
    const testimonialImage = Array.isArray(currentTestimonial)
      ? currentTestimonial.find((item) => item.key === "image")?.value || ""
      : currentTestimonial?.image || "";

    const testimonialLogo = Array.isArray(currentTestimonial)
      ? currentTestimonial.find((item) => item.key === "logo")?.value || ""
      : currentTestimonial?.logo || "";

    const testimonialLogoType = Array.isArray(currentTestimonial)
      ? currentTestimonial.find((item) => item.key === "logoType")?.value || ""
      : currentTestimonial?.logoType || "";

    const testimonialQuote = Array.isArray(currentTestimonial)
      ? currentTestimonial.find((item) => item.key === "quote")?.value || ""
      : currentTestimonial?.quote || "";

    const testimonialName = Array.isArray(currentTestimonial)
      ? currentTestimonial.find((item) => item.key === "name")?.value || ""
      : currentTestimonial?.name || "";

    const testimonialTitle = Array.isArray(currentTestimonial)
      ? currentTestimonial.find((item) => item.key === "title")?.value || ""
      : currentTestimonial?.title || "";

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        tabIndex={0}
        onKeyDown={this.handleKeyDown}
      >
        <Base.MaxContent className={this.decorateCSS("maxContent")}>
          <div className={this.decorateCSS("header")}>
            <h2 className={this.decorateCSS("title")}>{title}</h2>

            <div className={this.decorateCSS("links")}>
              {links.map((link: any, index: number) => {
                const linkText = Array.isArray(link)
                  ? link.find((item) => item.key === "text")?.value || ""
                  : link.text || "";

                const linkUrl = Array.isArray(link)
                  ? link.find((item) => item.key === "url")?.value || "#"
                  : link.url || "#";

                return (
                  <ComposerLink
                    path={linkUrl}
                    key={index}
                    className={this.decorateCSS("link")}
                  >
                    {linkText}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 11L11 5M11 5H5M11 5V11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ComposerLink>
                );
              })}
            </div>
          </div>

          <div
            className={this.decorateCSS("sliderContainer")}
            onMouseEnter={this.pauseAutoPlay}
            onMouseLeave={this.startAutoPlay}
          >
            <div className={this.decorateCSS("card")}>
              <div className={this.decorateCSS("imageSection")}>
                <Base.Media
                  value={{
                    type: "image",
                    url: testimonialImage || "/placeholder.svg",
                  }}
                  className={this.decorateCSS("testimonialImage")}
                />
              </div>

              <div className={this.decorateCSS("contentSection")}>
                <div className={this.decorateCSS("logo")}>
                  {this.renderLogo(testimonialLogoType, testimonialLogo)}
                </div>
                <blockquote className={this.decorateCSS("quote")}>
                  “{testimonialQuote}”
                </blockquote>
                <div className={this.decorateCSS("author")}>
                  <span className={this.decorateCSS("name")}>
                    {testimonialName}
                  </span>
                  <span className={this.decorateCSS("separator")}> - </span>
                  <span className={this.decorateCSS("position")}>
                    {testimonialTitle}
                  </span>
                </div>
              </div>
            </div>

            <div className={this.decorateCSS("navigation")}>
              <button
                onClick={this.prevSlide}
                className={this.decorateCSS("navButton")}
                aria-label="Previous testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={this.decorateCSS("dots")}
                role="tablist"
                aria-label="Testimonials"
              >
                {testimonials.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => this.goToSlide(index)}
                    className={`${this.decorateCSS("dot")} ${
                      index === currentSlide
                        ? this.decorateCSS("dotActive")
                        : ""
                    }`}
                    role="tab"
                    aria-selected={index === currentSlide}
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    {index === currentSlide && !isPaused && (
                      <span className={this.decorateCSS("dotProgress")} />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={this.nextSlide}
                className={this.decorateCSS("navButton")}
                aria-label="Next testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials16;
