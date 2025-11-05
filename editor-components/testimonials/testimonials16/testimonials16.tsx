"use client";

import React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials16.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type MaybeComposerNode = { getPropValue?: (key: string, opts?: any) => any };

const DEFAULT_ARROW_IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 12H19" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13 6L19 12L13 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  );

const DEFAULT_QUOTE_ICON =
  "https://w7.pngwing.com/pngs/842/793/png-transparent-computer-icons-quotation-mark-symbol-quotation-image-file-formats-logo-monochrome-thumbnail.png";

function isComposerNode(node: unknown): node is MaybeComposerNode {
  return !!node && typeof (node as MaybeComposerNode).getPropValue === "function";
}

interface IRenderCardProps {
  idx: number;
  hasImage: boolean;
  imgUrl: string;
  authorStr: string;
  logoUrl: string;
  quoteKey: number;
  animCls: string;
  quoteIconUrl: string;
  quoteEl: React.ReactNode;
  authorEl: React.ReactNode;
  roleEl: React.ReactNode;
  companyEl: React.ReactNode;
}

interface IRenderData {
  titleEl: React.ReactNode;
  links: MaybeComposerNode[];
  list: MaybeComposerNode[];
  isMobile: boolean;
  hasCardBackground: boolean;
  multi: boolean;
  cardProps: IRenderCardProps;
}

const BASE_BACKGROUND_STYLES: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  zIndex: 1,
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "blur(1.75rem)",
  transform: "scale(1.12)",
  transition: "opacity 300ms ease-in-out",
  pointerEvents: "none",
  willChange: "opacity",
};

class Testimonials16 extends Testimonials {
  private timer: ReturnType<typeof setTimeout> | null = null;
  private dragStartX: number | null = null;
  private dragging = false;
  private prevTotal = 0;
  private mql: MediaQueryList | null = null;
  private inMs: number;
  private outMs: number;

  private readonly sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    centerMode: false,
    speed: 520,
    cssEase: "cubic-bezier(0.2, 0, 0.15, 1)",
    waitForAnimate: true,
    adaptiveHeight: false,
    draggable: true,
    swipe: true,
    touchMove: true,
    swipeToSlide: true,
    touchThreshold: 60,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  constructor(props?: any) {
    super(props, styles);
    this.initializeState();
    this.initializeProps();
    this.inMs = Math.max(120, this.sliderSettings.speed);
    this.outMs = Math.max(80, Math.round(this.inMs * 0.5));
  }

  private initializeState() {
    this.setComponentState("idx", 0);
    this.setComponentState("imgErrIdx", -1);
    this.setComponentState("autoplayMs", this.sliderSettings.autoplaySpeed);
    this.setComponentState("isMobile", false);
    this.setComponentState("animCls", "");
    this.setComponentState("quoteKey", 0);
    this.setComponentState("isDragging", false);
    this.setComponentState("bgA", "");
    this.setComponentState("bgB", "");
    this.setComponentState("bgShowA", true);
  }

  private initializeProps() {
    this.addProp({
      type: "boolean",
      key: "showDivider",
      displayer: "Show Divider",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Hear from\nDuda’s customers",
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
            { type: "string", key: "text", displayer: "Text", value: "Read reviews" },
            { type: "page", key: "url", displayer: "URL", value: "" },
            { type: "image", key: "arrowImage", displayer: "Arrow (Image)", value: DEFAULT_ARROW_IMG },
          ],
        },
        {
          type: "object",
          key: "link",
          displayer: "Link",
          value: [
            { type: "string", key: "text", displayer: "Text", value: "All success stories" },
            { type: "page", key: "url", displayer: "URL", value: "" },
            { type: "image", key: "arrowImage", displayer: "Arrow (Image)", value: DEFAULT_ARROW_IMG },
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
            { type: "image", key: "logoImage", displayer: "Logo (Image)", value: "https://irp.cdn-website.com/a8ff2f1c/dms3rep/multi/trchradar.svg" },
            { type: "image", key: "image", displayer: "Image", value: "https://lirp.cdn-website.com/a8ff2f1c/dms3rep/multi/opt/Owain+Williams+--1920w.png" },
            { type: "image", key: "quoteIcon", displayer: "Quote Icon (Image)", value: DEFAULT_QUOTE_ICON },
            { type: "string", key: "quote", displayer: "Quote", value: "Blinkpage is a great option for agencies looking to leverage AI in their website building." },
            { type: "string", key: "author", displayer: "Author", value: "Owain Williams -" },
            { type: "string", key: "role", displayer: "Role", value: "Editor," },
            { type: "string", key: "company", displayer: "Company", value: "TechRadar" },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Testimonial",
          value: [
            { type: "image", key: "logoImage", displayer: "Logo (Image)", value: "https://irp.cdn-website.com/a8ff2f1c/dms3rep/multi/Olivestreet+logo.svg" },
            { type: "image", key: "image", displayer: "Image", value: "https://lirp.cdn-website.com/a8ff2f1c/dms3rep/multi/opt/Nat+Rosasco+-5146cf12-1920w.png" },
            { type: "image", key: "quoteIcon", displayer: "Quote Icon (Image)", value: DEFAULT_QUOTE_ICON },
            { type: "string", key: "quote", displayer: "Quote", value: "Blinkpage’s AI Assistant should save us 3 to 6 hours on most websites." },
            { type: "string", key: "author", displayer: "Author", value: "Nat Rosasco -" },
            { type: "string", key: "role", displayer: "Role", value: "Principal," },
            { type: "string", key: "company", displayer: "Company", value: "Olive Street Design" },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Testimonial",
          value: [
            { type: "image", key: "logoImage", displayer: "Logo (Image)", value: "https://irp.cdn-website.com/a8ff2f1c/dms3rep/multi/fix8_logo.svg" },
            { type: "image", key: "image", displayer: "Image", value: "https://lirp.cdn-website.com/a8ff2f1c/dms3rep/multi/opt/Josh+Neimark+-ad5cd26e-1920w.png" },
            { type: "image", key: "quoteIcon", displayer: "Quote Icon (Image)", value: DEFAULT_QUOTE_ICON },
            { type: "string", key: "quote", displayer: "Quote", value: "If I can give my clients value—even if they don’t have the budget—I will. Blinkpage’s AI tools make that possible." },
            { type: "string", key: "author", displayer: "Author", value: "Josh Neimark -" },
            { type: "string", key: "role", displayer: "Role", value: "CEO," },
            { type: "string", key: "company", displayer: "Company", value: "Fix8" },
          ],
        },
      ],
    });
  }
  
  static getName(): string { return "Testimonials 16"; }

  private onMqlChange = (e: MediaQueryListEvent | MediaQueryList) => {
    const matches = (e as MediaQueryList).matches;
    this.setComponentState("isMobile", !!matches);
  };

  private fromRow(row: unknown, key: string, opts?: any) {
    if (isComposerNode(row))
      return row.getPropValue!(key, opts);
    if (Array.isArray(row)) return this.getPropValue(key, { ...(opts || {}), parent_object: row });
    return this.getPropValue(key, opts);
  }
  private fromRowStr(row: unknown, key: string) {
    const v = this.fromRow(row, key, { as_string: true });
    const s = typeof v === "string" ? v : "";
    return (s || "").trim();
  }

  private toggleDivider = () => {
    const current = !!this.getPropValue("showDivider");
    (this as any).setPropValue?.("showDivider", !current);
  };

  private start = () => {
    if (this.timer) return;
    const items = (this.getPropValue("testimonials") as MaybeComposerNode[]) || [];
    if (!this.sliderSettings.autoplay) return;
    if (items.length < 2) return;
    this.timer = setTimeout(() => this.next(true), this.sliderSettings.autoplaySpeed);
  };
  private stop = () => { if (this.timer) { clearTimeout(this.timer); this.timer = null; } };
  private restart = () => { this.stop(); this.start(); };

  componentDidMount(): void {
    const list = (this.getPropValue("testimonials") as MaybeComposerNode[]) || [];
    this.prevTotal = list.length;
    const idx = this.getComponentState("idx") || 0;
    const row = list[idx];
    const img = this.fromRowStr(row, "image");

    this.setComponentState("bgA", img || "");
    this.setComponentState("bgB", "");
    this.setComponentState("bgShowA", true);

    if (typeof window !== "undefined" && "matchMedia" in window) {
      this.mql = window.matchMedia("(max-width: 700px)");
      this.onMqlChange(this.mql);
      if ("addEventListener" in this.mql) this.mql.addEventListener("change", this.onMqlChange as any);
      else (this.mql as any).addListener?.(this.onMqlChange as any);
    }

    this.start();
  }
  componentWillUnmount(): void {
    this.stop();
    if (this.mql) {
      if ("removeEventListener" in this.mql) this.mql.removeEventListener("change", this.onMqlChange as any);
      else (this.mql as any).removeListener?.(this.onMqlChange as any);
    }
  }

  componentDidUpdate(): void {
    const list = (this.getPropValue("testimonials") as MaybeComposerNode[]) || [];
    const total = list.length;

    let idx = this.getComponentState("idx") || 0;
    if (total === 0) {
      if (idx !== 0) this.setComponentState("idx", 0);
      this.stop();
      this.setComponentState("bgA", ""); this.setComponentState("bgB", ""); this.setComponentState("bgShowA", true);
    } else {
      if (idx >= total) {
        idx = total - 1;
        this.setComponentState("idx", idx);
        this.setComponentState("animCls", "");
        this.setComponentState("quoteKey", (this.getComponentState("quoteKey") || 0) + 1);
      }

      if (this.prevTotal !== total) {
        const curRow = list[idx];
        const img = this.fromRowStr(curRow, "image");
        if (!img) {
          this.setComponentState("bgA", "");
          this.setComponentState("bgB", "");
          this.setComponentState("bgShowA", true);
        } else {
          this.setComponentState("bgA", img);
          this.setComponentState("bgB", "");
          this.setComponentState("bgShowA", true);
        }
        if (total < 2) this.stop(); else this.restart();
      }
    }

    if (Array.isArray(list) && total > 6) (this as any).setPropValue?.("testimonials", list.slice(0, 6));

    const curIdx = this.getComponentState("idx") || 0;
    const row = list[curIdx];
    const curImg = total ? this.fromRowStr(row, "image") : "";
    const bgA = (this.getComponentState("bgA") as string) || "";
    const bgB = (this.getComponentState("bgB") as string) || "";
    const showA = !!this.getComponentState("bgShowA");
    const visible = showA ? bgA : bgB;

    if (!curImg) {
      if (bgA || bgB) {
        this.setComponentState("bgA", ""); this.setComponentState("bgB", ""); this.setComponentState("bgShowA", true);
      }
    } else if (curImg !== visible) {
      if (showA) { this.setComponentState("bgB", curImg); this.setComponentState("bgShowA", false); }
      else { this.setComponentState("bgA", curImg); this.setComponentState("bgShowA", true); }
    }

    this.prevTotal = total;
  }

  private crossfadeBgToIndex(nextIdx: number) {
    const list = (this.getPropValue("testimonials") as MaybeComposerNode[]) || [];
    const rowNext = list[nextIdx];
    const urlNext = this.fromRowStr(rowNext, "image");
    if (!urlNext) {
      this.setComponentState("bgA", ""); this.setComponentState("bgB", ""); this.setComponentState("bgShowA", true);
      return;
    }
    const showA = !!this.getComponentState("bgShowA");
    if (showA) this.setComponentState("bgB", urlNext); else this.setComponentState("bgA", urlNext);
    this.setComponentState("bgShowA", !showA);
  }

  private playTransition = (dir: "next" | "prev") => {
    if (this.sliderSettings.waitForAnimate && (this.getComponentState("animCls") || "") !== "") return;

    const cur = this.getComponentState("idx") || 0;
    const list = (this.getPropValue("testimonials") as MaybeComposerNode[]) || [];
    const total = list.length;

    if (total <= 1) return;

    if (!this.sliderSettings.infinite) {
      if (dir === "prev" && cur <= 0) return;
      if (dir === "next" && cur >= total - 1) return;
    }

    const outCls = dir === "next" ? "card--slide-out-left" : "card--slide-out-right";
    const inCls = dir === "next" ? "card--slide-in-right" : "card--slide-in-left";

    this.setComponentState("animCls", outCls);

    const targetPreview =
      dir === "next"
        ? (this.sliderSettings.infinite ? (cur + 1) % total : Math.min(cur + 1, total - 1))
        : (this.sliderSettings.infinite ? (cur - 1 + total) % total : Math.max(cur - 1, 0));

    this.crossfadeBgToIndex(targetPreview);

    window.setTimeout(() => {
      this.setComponentState("idx", targetPreview);
      this.setComponentState("quoteKey", (this.getComponentState("quoteKey") || 0) + 1);
      this.setComponentState("animCls", inCls);

      window.setTimeout(() => {
        this.setComponentState("animCls", "");
        this.restart();
      }, this.inMs);
    }, this.outMs);
  };

  private prev = () => this.playTransition("prev");
  private next = (_fromAuto = false) => this.playTransition("next");

  private go = (i: number) => {
    const cur = this.getComponentState("idx") || 0;
    const list = (this.getPropValue("testimonials") as MaybeComposerNode[]) || [];
    const total = list.length;
    if (total <= 1) return;

    const target = this.sliderSettings.infinite ? ((i % total) + total) % total : Math.max(0, Math.min(i, total - 1));
    if (target === cur) return;
    if (this.sliderSettings.waitForAnimate && (this.getComponentState("animCls") || "") !== "") return;
    const dir = target > cur ? "next" : "prev";
    this.playTransition(dir);
  };

  private onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const list = (this.getPropValue("testimonials") as MaybeComposerNode[]) || [];
    if (list.length <= 1) return;
    if (!this.sliderSettings.draggable || !this.sliderSettings.swipe || !this.sliderSettings.touchMove) return;
    this.dragging = true;
    this.dragStartX = "touches" in e ? e.touches[0].clientX : e.clientX;
    this.setComponentState("isDragging", true);
    this.stop();
  };
  private onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    const list = (this.getPropValue("testimonials") as MaybeComposerNode[]) || [];
    if (list.length <= 1) return;
    if (!this.sliderSettings.draggable || !this.sliderSettings.swipe || !this.sliderSettings.touchMove) return;
    if (!this.dragging || this.dragStartX === null) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const dx = clientX - this.dragStartX;
    const THRESH = Number.isFinite(this.sliderSettings.touchThreshold) ? this.sliderSettings.touchThreshold : 60;

    if (dx > THRESH) { this.setComponentState("isDragging", false); this.prev(); this.dragging = false; this.dragStartX = null; }
    else if (dx < -THRESH) { this.setComponentState("isDragging", false); this.next(); this.dragging = false; this.dragStartX = null; }
  };
  private onDragEnd = () => {
    const list = (this.getPropValue("testimonials") as MaybeComposerNode[]) || [];
    if (list.length <= 1) return;
    if (!this.sliderSettings.draggable || !this.sliderSettings.swipe || !this.sliderSettings.touchMove) return;
    this.dragging = false; this.dragStartX = null; this.setComponentState("isDragging", false); this.restart();
  };
  private onMouseLeave = () => { if (this.dragging) this.onDragEnd(); };

  private renderBackgrounds() {
    const bgA = (this.getComponentState("bgA") as string) || "";
    const bgB = (this.getComponentState("bgB") as string) || "";
    const bgShowA = !!this.getComponentState("bgShowA");

    return (
      <>
        {bgA && <div aria-hidden="true" style={{ ...BASE_BACKGROUND_STYLES, backgroundImage: `url(${bgA})`, opacity: (bgShowA ? 1 : 0) }} />}
        {bgB && <div aria-hidden="true" style={{ ...BASE_BACKGROUND_STYLES, backgroundImage: `url(${bgB})`, opacity: (bgShowA ? 0 : 1) }} />}
      </>
    );
  }

  private renderHeader(props: {
    titleEl: React.ReactNode;
    links: MaybeComposerNode[];
    isMobile: boolean;
    hasCardBackground: boolean;
  }) {
    const { titleEl, links, isMobile, hasCardBackground } = props;
    return (
      <div className={this.decorateCSS("header")}>
        <Base.SectionTitle className={this.decorateCSS("title")} style={hasCardBackground ? { color: "var(--composer-font-color-primary)" } : undefined}>
          {titleEl}
        </Base.SectionTitle>

        <div className={this.decorateCSS("links")} style={isMobile ? { width: "100%", marginLeft: 0, justifyContent: "flex-start", marginTop: "var(--composer-gap-xs)", flexWrap: "wrap" } : undefined}>
          {links.map((l: MaybeComposerNode, i: number) => {
            if (!isComposerNode(l)) return null;
            const textEl = l.getPropValue!("text");
            const href = (l.getPropValue!("url", { as_string: true }) as string) || "#";
            const arrowImg = (l.getPropValue!("arrowImage", { as_string: true }) as string) || "";

            return (
              <span key={i} className={`${this.decorateCSS("linkItem")} ${styles.linkItem}`}>
                <ComposerLink path={href}>
                  <span className={styles.linkText} style={{ color: "var(--composer-font-color-primary, var(--color-white))" }}>
                    {textEl}
                  </span>
                </ComposerLink>
                {!!arrowImg && <img src={arrowImg} alt="" aria-hidden="true" className={styles.linkArrowImage} style={{ height: "1.8em" }} />}
              </span>
            );
          })}
        </div>
      </div>
    );
  }

  private renderNavigation(props: { list: MaybeComposerNode[]; multi: boolean; }) {
    const { list, multi } = props;
    if (!this.sliderSettings.arrows || !multi) return null;
    const idx = this.getComponentState("idx") || 0;
    const total = list.length || 1;

    return (
      <div className={this.decorateCSS("navigation")}>
        <button onClick={() => this.playTransition("prev")} className={this.decorateCSS("navigationButton")} aria-label="Previous" disabled={!this.sliderSettings.infinite && idx <= 0}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        {this.sliderSettings.dots && multi && (
          <div className={this.decorateCSS("paginationRail")}>
            <div className={this.decorateCSS("dots")} role="tablist" aria-label="Testimonials">
              {list.map((_: MaybeComposerNode, i: number) => {
                const active = i === idx;
                return (
                  <button key={i} onClick={() => this.go(i)} className={`${this.decorateCSS("dot")} ${active ? this.decorateCSS("dotActive") : ""}`} role="tab" aria-selected={active} aria-label={`Go to ${i + 1}`}>
                    {active && (
                      <>
                        <span className={this.decorateCSS("progressTrack")} aria-hidden="true" />
                        {this.sliderSettings.autoplay
                          ? <span key={`bar-${i}`} className={this.decorateCSS("progressBar")} style={{ animationDuration: `${this.sliderSettings.autoplaySpeed}ms` }} aria-hidden={true} />
                          : <span key={`bar-${i}`} className={this.decorateCSS("progressBar")} style={{ width: "100%", animation: "none" }} aria-hidden={true} />
                        }
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <button onClick={() => this.playTransition("next")} className={this.decorateCSS("navigationButton")} aria-label="Next" disabled={!this.sliderSettings.infinite && idx >= total - 1}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    );
  }

  private renderCard(props: IRenderCardProps) {
    const { idx, hasImage, imgUrl, authorStr, logoUrl, quoteKey, animCls, quoteIconUrl, quoteEl, authorEl, roleEl, companyEl } = props;
    const showDivider = !!this.getPropValue("showDivider");

    const hasLogo = !!logoUrl;
    const hasQuote = !!this.castToString(quoteEl as any);
    const hasAuthor = !!this.castToString(authorEl as any);
    const hasRole = !!this.castToString(roleEl as any);
    const hasCompany = !!this.castToString(companyEl as any);
    const hasContent = hasLogo || hasQuote || hasAuthor || hasRole || hasCompany;
    const imageOnly = hasImage && !hasContent;

    return (
      <div
        className={`${this.decorateCSS("card")} ${animCls ? this.decorateCSS(animCls) : ""} ${this.getComponentState("isDragging") ? this.decorateCSS("card--dragging") : ""} ${!hasImage ? this.decorateCSS("noMedia") : ""} ${imageOnly ? this.decorateCSS("imageOnly") : ""}`}
        onMouseDown={this.onDragStart} onMouseMove={this.onDragMove} onMouseUp={this.onDragEnd}
        onMouseLeave={this.onMouseLeave} onTouchStart={this.onDragStart} onTouchMove={this.onDragMove} onTouchEnd={this.onDragEnd}
        style={{ touchAction: "pan-y" }}
      >
        <div className={this.decorateCSS("imageBox")}>
          {hasImage && (
            <img src={imgUrl} alt={authorStr || "Müşteri görüşü"} className={this.decorateCSS("image")} onError={() => this.setComponentState("imgErrIdx", idx)} loading="lazy" decoding="async" draggable={false} />
          )}
        </div>

        <div className={this.decorateCSS("content")}>
          {logoUrl && (
            <div className={this.decorateCSS("logo")} contentEditable={false} suppressContentEditableWarning data-no-inline="true">
              <img src={logoUrl} alt="" className={this.decorateCSS("logoImage")} loading="lazy" decoding="async" draggable={false} />
            </div>
          )}

          <blockquote key={quoteKey} className={this.decorateCSS("quote")}>
            <span className={this.decorateCSS("quoteRow")}>
              {!!quoteIconUrl && <img src={quoteIconUrl} alt="" aria-hidden="true" className={this.decorateCSS("quoteIconInline")} />}
              <span className={this.decorateCSS("quoteText")}><span className="qwrap">{quoteEl}</span></span>
            </span>
          </blockquote>

          <div className={this.decorateCSS("meta")}>
            {showDivider && (
              <div
                className={this.decorateCSS("divider")}
                onClick={this.toggleDivider}
                role="switch"
                aria-checked={showDivider}
                title={showDivider ? "Hide divider" : "Show divider"}
              />
            )}

            <p className={this.decorateCSS("author")} title={authorStr}>
              {hasImage && (
                <img src={imgUrl!} alt={authorStr || "Avatar"} className={this.decorateCSS("avatar")} loading="lazy" decoding="async" draggable={false} />
              )}
              <span className={this.decorateCSS("authorLine")}>
                {authorEl ? <span className={this.decorateCSS("authorPart")}>{authorEl}</span> : null}
                {roleEl ? <span className={`${this.decorateCSS("authorPart")} ${this.decorateCSS("role")}`}>{roleEl}</span> : null}
                {companyEl ? <span className={`${this.decorateCSS("authorPart")} ${this.decorateCSS("company")}`}>{companyEl}</span> : null}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  private getRenderData(): IRenderData {
    const titleEl = this.getPropValue("title");

    const rawLinks = (this.getPropValue("links") as MaybeComposerNode[]) || [];
    const links = Array.isArray(rawLinks)
      ? rawLinks.filter((l: MaybeComposerNode) => {
          const text = isComposerNode(l) ? (l.getPropValue!("text", { as_string: true }) as string) : "";
          return !!(text && String(text).trim());
        })
      : [];

    const list = ((this.getPropValue("testimonials") as MaybeComposerNode[]) || []).slice(0, 6);
    const idx = this.getComponentState("idx") || 0;
    const row: MaybeComposerNode | undefined = list[idx];

    const authorStr = this.fromRowStr(row, "author");
    const imgUrl = this.fromRowStr(row, "image");
    const useImgFallback = this.getComponentState("imgErrIdx") === idx || !imgUrl;
    const hasImage = !!imgUrl && !useImgFallback;

    const cardProps: IRenderCardProps = {
      idx,
      hasImage,
      imgUrl,
      authorStr,
      logoUrl: this.fromRowStr(row, "logoImage"),
      quoteKey: this.getComponentState("quoteKey") || 0,
      animCls: this.getComponentState("animCls") || "",
      quoteIconUrl: this.fromRowStr(row, "quoteIcon"),
      quoteEl: this.fromRow(row, "quote"),
      authorEl: this.fromRow(row, "author"),
      roleEl: this.fromRow(row, "role"),
      companyEl: this.fromRow(row, "company"),
    };

    return {
      titleEl,
      links,
      list,
      cardProps,
      isMobile: !!this.getComponentState("isMobile"),
      hasCardBackground: hasImage,
      multi: list.length > 1,
    };
  }

  render() {
    const {
      titleEl,
      links,
      list,
      isMobile,
      hasCardBackground,
      multi,
      cardProps
    } = this.getRenderData();

    return (
      <Base.Container className={`${this.decorateCSS("root")} ${hasCardBackground ? this.decorateCSS("hasBackground") : ""}`} style={{ position: "relative", overflow: "hidden" }}>
        {this.renderBackgrounds()}
        {hasCardBackground && <div className="overlay" aria-hidden="true" />}

        <Base.MaxContent className={this.decorateCSS("wrap")} style={{ position: "relative", zIndex: 101 }}>
          {this.renderHeader({ titleEl, links, isMobile, hasCardBackground })}
          {this.renderCard(cardProps)}
          {this.renderNavigation({ list, multi })}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials16;
