"use client";

import React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials16.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type MaybeComposerNode = { getPropValue?: (key: string, opts?: any) => any };

class Testimonials16 extends Testimonials {
  private timer: any = null;
  private dragStartX: number | null = null;
  private dragging = false;

  // 🔹 yeni: önceki toplamı hatırla (silme-artma tespiti için)
  private prevTotal = 0;

  private mql: MediaQueryList | null = null;
  private onMqlChange = (e: MediaQueryListEvent | MediaQueryList) => {
    const matches = "matches" in e ? e.matches : (e as MediaQueryList).matches;
    this.setComponentState("isMobile", !!matches);
  };

  private sliderSettings = {
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

    this.setComponentState("idx", 0);
    this.setComponentState("imgErrIdx", -1);
    this.setComponentState("logoErrIdx", -1);
    this.setComponentState("autoplayMs", this.sliderSettings.autoplaySpeed);
    this.setComponentState("isMobile", false);

    this.setComponentState("animCls", "");
    this.setComponentState("quoteKey", 0);
    this.setComponentState("isDragging", false);

    this.setComponentState("bgA", "");
    this.setComponentState("bgB", "");
    this.setComponentState("bgShowA", true);

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
          ],
        },
        {
          type: "object",
          key: "link",
          displayer: "Link",
          value: [
            { type: "string", key: "text", displayer: "Text", value: "All success stories" },
            { type: "page", key: "url", displayer: "URL", value: "" },
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
            { type: "string", key: "quote", displayer: "Quote", value: "Blinkpage is a great option for agencies looking to leverage AI in their website building." },
            { type: "string", key: "author", displayer: "Author", value: "Owain Williams" },
            { type: "string", key: "role", displayer: "Role", value: "Editor" },
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
            { type: "string", key: "quote", displayer: "Quote", value: "Blinkpage’s AI Assistant should save us 3 to 6 hours on most websites." },
            { type: "string", key: "author", displayer: "Author", value: "Nat Rosasco" },
            { type: "string", key: "role", displayer: "Role", value: "Principal" },
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
            { type: "string", key: "quote", displayer: "Quote", value: "If I can give my clients value—even if they don’t have the budget—I will. Blinkpage’s AI tools make that possible." },
            { type: "string", key: "author", displayer: "Author", value: "Josh Neimark" },
            { type: "string", key: "role", displayer: "Role", value: "CEO" },
            { type: "string", key: "company", displayer: "Company", value: "Fix8" },
          ],
        },
      ],
    });
  }

  static getName(): string { return "Testimonials 16"; }

  private fromRow(row: any, key: string, opts?: any) {
    if (row && typeof row.getPropValue === "function") return (row as MaybeComposerNode).getPropValue!(key, opts);
    if (Array.isArray(row)) return this.getPropValue(key, { ...(opts || {}), parent_object: row });
    return this.getPropValue(key, opts);
  }
  private fromRowStr(row: any, key: string) {
    const v = this.fromRow(row, key, { as_string: true });
    return (typeof v === "string" ? v : "") || "";
  }

  private start = () => {
    if (this.timer) return;
    const items = (this.getPropValue("testimonials") as any[]) || [];
    if (!this.sliderSettings.autoplay) return;
    if (items.length < 2) return;
    this.timer = setTimeout(() => this.next(true), this.sliderSettings.autoplaySpeed);
  };
  private stop = () => { if (this.timer) { clearTimeout(this.timer); this.timer = null; } };
  private restart = () => { this.stop(); this.start(); };

  componentDidMount(): void {
    const list = (this.getPropValue("testimonials") as any[]) || [];
    this.prevTotal = list.length; // 🔹 ilk toplam
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
    const list = (this.getPropValue("testimonials") as any[]) || [];
    const total = list.length;

    // 🔹 yeni: idx’i güvenle daralt / silme sonrası kalan karta atla
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

      // 2→1 veya genel sayısal değişimde BG senkronu
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

        // tek karta düştüyse autoplay’i kapat (timer temizle)
        if (total < 2) this.stop(); else this.restart();
      }
    }

    // 6’dan fazla öğeyi sınırla (mevcut davranış)
    if (Array.isArray(list) && total > 6) (this as any).setPropValue?.("testimonials", list.slice(0, 6));

    // mevcut BG görünürlüğünü güncel tut
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
      else       { this.setComponentState("bgA", curImg); this.setComponentState("bgShowA", true); }
    }

    // 🔹 önceki toplamı güncelle
    this.prevTotal = total;
  }

  private crossfadeBgToIndex(nextIdx: number) {
    const list = (this.getPropValue("testimonials") as any[]) || [];
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
    const list = (this.getPropValue("testimonials") as any[]) || [];
    const total = list.length;

    if (total <= 1) return;

    if (!this.sliderSettings.infinite) {
      if (dir === "prev" && cur <= 0) return;
      if (dir === "next" && cur >= total - 1) return;
    }

    const outCls = dir === "next" ? "card--slide-out-left" : "card--slide-out-right";
    const inCls  = dir === "next" ? "card--slide-in-right" : "card--slide-in-left";
    const IN_MS  = Math.max(120, this.sliderSettings.speed);
    const OUT_MS = Math.max(80, Math.round(IN_MS * 0.5));

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
      }, IN_MS);
    }, OUT_MS);
  };

  private prev = () => this.playTransition("prev");
  private next = (_fromAuto = false) => this.playTransition("next");

  private go = (i: number) => {
    const cur = this.getComponentState("idx") || 0;
    const list = (this.getPropValue("testimonials") as any[]) || [];
    const total = list.length;
    if (total <= 1) return;

    const target = this.sliderSettings.infinite ? ((i % total) + total) % total : Math.max(0, Math.min(i, total - 1));
    if (target === cur) return;
    if (this.sliderSettings.waitForAnimate && (this.getComponentState("animCls") || "") !== "") return;
    const dir = target > cur ? "next" : "prev";
    this.playTransition(dir);
  };

  private onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const list = (this.getPropValue("testimonials") as any[]) || [];
    if (list.length <= 1) return;
    if (!this.sliderSettings.draggable || !this.sliderSettings.swipe || !this.sliderSettings.touchMove) return;
    this.dragging = true;
    this.dragStartX = "touches" in e ? e.touches[0].clientX : e.clientX;
    this.setComponentState("isDragging", true);
    this.stop();
  };
  private onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    const list = (this.getPropValue("testimonials") as any[]) || [];
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
    const list = (this.getPropValue("testimonials") as any[]) || [];
    if (list.length <= 1) return;
    if (!this.sliderSettings.draggable || !this.sliderSettings.swipe || !this.sliderSettings.touchMove) return;
    this.dragging = false; this.dragStartX = null; this.setComponentState("isDragging", false); this.restart();
  };
  private onMouseLeave = () => { if (this.dragging) this.onDragEnd(); };

  render() {
    const titleEl = this.getPropValue("title");
    const links = (this.getPropValue("links") as any[]) || [];
    const list = ((this.getPropValue("testimonials") as any[]) || []).slice(0, 6);

    const idx = this.getComponentState("idx") || 0;
    const row: MaybeComposerNode | any[] | undefined = list[idx];

    const quoteEl = this.fromRow(row, "quote");
    const authorEl = this.fromRow(row, "author");
    const roleEl = this.fromRow(row, "role");
    const companyEl = this.fromRow(row, "company");

    const authorStr = this.fromRowStr(row, "author");
    const roleStr = this.fromRowStr(row, "role");
    const companyStr = this.fromRowStr(row, "company");
    const imgUrl = this.fromRowStr(row, "image");

    const logoUrl = this.fromRowStr(row, "logoImage");
    const useImgFallback = this.getComponentState("imgErrIdx") === idx || !imgUrl;

    const animCls = this.getComponentState("animCls") || "";
    const quoteKey = this.getComponentState("quoteKey") || 0;

    const bgA = (this.getComponentState("bgA") as string) || "";
    const bgB = (this.getComponentState("bgB") as string) || "";
    const bgShowA = !!this.getComponentState("bgShowA");

    const hasImage = !!imgUrl && !useImgFallback;
    const hasCardBg = hasImage;

    const isMobile = !!this.getComponentState("isMobile");
    const multi = list.length > 1; // 🔹 tek kart kontrolü

    const quoteCls = this.decorateCSS("quote");
    const scopedCss = `
.${quoteCls}{white-space:normal;}
.${quoteCls} p,.${quoteCls} div{display:inline;margin:0;}
.${quoteCls} br{display:none;}
.${quoteCls} .qwrap{display:inline;white-space:normal;}
.${quoteCls} .qwrap::before{content:"\\201C";white-space:nowrap;}
.${quoteCls} .qwrap::after{content:"\\2060\\201D";white-space:nowrap;}
`;

    return (
      <Base.Container className={`${this.decorateCSS("root")} ${hasCardBg ? this.decorateCSS("hasBg") : ""}`} style={{ position: "relative", overflow: "hidden" }}>
        <style dangerouslySetInnerHTML={{ __html: scopedCss }} />

        {bgA && (
          <div aria-hidden="true" style={{ position:"absolute", inset:0, zIndex:1, backgroundImage:`url(${bgA})`, backgroundSize:"cover", backgroundPosition:"center", filter:"blur(28px)", transform:"scale(1.12)", opacity:(bgShowA?1:0), transition:"opacity 300ms ease-in-out", pointerEvents:"none" }} />
        )}
        {bgB && (
          <div aria-hidden="true" style={{ position:"absolute", inset:0, zIndex:1, backgroundImage:`url(${bgB})`, backgroundSize:"cover", backgroundPosition:"center", filter:"blur(28px)", transform:"scale(1.12)", opacity:(bgShowA?0:1), transition:"opacity 300ms ease-in-out", pointerEvents:"none" }} />
        )}

        {hasCardBg && <div className="overlay" aria-hidden="true" />}

        <Base.MaxContent className={this.decorateCSS("wrap")} style={{ position: "relative", zIndex: 101 }}>
          <div className={this.decorateCSS("header")}>
            <Base.SectionTitle className={this.decorateCSS("title")} style={hasCardBg ? { color: "var(--composer-font-color-primary)" } : undefined}>
              {titleEl}
            </Base.SectionTitle>

            <div className={this.decorateCSS("lnks")} style={isMobile ? { width:"100%", marginLeft:0, justifyContent:"flex-start", marginTop:"var(--composer-gap-xs)", flexWrap:"wrap" } : undefined}>
              {Array.isArray(links) && links.map((l: any, i: number) => {
                const getPV = l?.getPropValue; if (typeof getPV !== "function") return null;
                const textEl = getPV("text");
                const href = (getPV("url", { as_string: true }) as string) || "#";
                return (
                  <span key={i} className={`${this.decorateCSS("lnkEnh")} ${styles.lnkEnh}`}>
                    <ComposerLink path={href} className={styles.lnkA} style={{ color:"var(--composer-font-color-primary, var(--color-white))" }}>{textEl}</ComposerLink>
                    <svg className={styles.lnkArrow} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M3 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                );
              })}
            </div>
          </div>

          <div
            className={`${this.decorateCSS("card")} ${animCls ? this.decorateCSS(animCls) : ""} ${this.getComponentState("isDragging") ? this.decorateCSS("card--dragging") : ""} ${!hasImage ? this.decorateCSS("noMedia") : ""}`}
            onMouseDown={this.onDragStart} onMouseMove={this.onDragMove} onMouseUp={this.onDragEnd}
            onMouseLeave={this.onMouseLeave} onTouchStart={this.onDragStart} onTouchMove={this.onDragMove} onTouchEnd={this.onDragEnd}
            style={{ touchAction: "pan-y" }}
          >
            <div className={this.decorateCSS("imgBox")} style={!hasImage ? { display: "none" } : undefined}>
              {hasImage && (
                <img src={imgUrl} alt={authorStr || "testimonial"} className={this.decorateCSS("img")} onError={() => this.setComponentState("imgErrIdx", idx)} loading="lazy" decoding="async" draggable={false} />
              )}
            </div>

            <div className={this.decorateCSS("cnt")}>
              {logoUrl && (
                <div className={this.decorateCSS("logo")} contentEditable={false} suppressContentEditableWarning data-no-inline="true">
                  <img src={logoUrl} alt={companyStr || "logo"} className={this.decorateCSS("logoImg")} onError={() => this.setComponentState("logoErrIdx", idx)} loading="lazy" decoding="async" draggable={false} />
                </div>
              )}

              <blockquote key={quoteKey} className={this.decorateCSS("quote")}><span className="qwrap">{quoteEl}</span></blockquote>

              <div className={this.decorateCSS("meta")}>
                <div className={this.decorateCSS("hr")} />
                <p
                  className={this.decorateCSS("author")}
                  title={[authorStr, [roleStr, companyStr].filter(Boolean).join(roleStr && companyStr ? ", " : "")].filter(Boolean).join(" — ")}
                >
                  {hasImage && (
                    <img src={imgUrl!} alt={authorStr || "avatar"} className={this.decorateCSS("avatar")} loading="lazy" decoding="async" draggable={false} />
                  )}
                  <span className={this.decorateCSS("authorMeta")}>
                    <strong className={this.decorateCSS("authorName")}>{authorEl}</strong>
                    {(roleEl || companyEl) && (
                      <span className={this.decorateCSS("authorSub")}>
                        {roleEl ? <span>{roleEl}</span> : null}
                        {roleEl && companyEl ? <span>, </span> : null}
                        {companyEl ? <span>{companyEl}</span> : null}
                      </span>
                    )}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className={this.decorateCSS("nav")}>
            {this.sliderSettings.arrows && multi && (
              <>
                <button onClick={() => this.playTransition("prev")} className={this.decorateCSS("btn")} aria-label="Previous" disabled={!this.sliderSettings.infinite && (this.getComponentState("idx") || 0) <= 0}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>

                {this.sliderSettings.dots && multi && (
                  <div className={this.decorateCSS("rail")}>
                    <div className={this.decorateCSS("dots")} role="tablist" aria-label="Testimonials">
                      {list.map((_, i) => {
                        const active = i === (this.getComponentState("idx") || 0);
                        return (
                          <button key={i} onClick={() => this.go(i)} className={`${this.decorateCSS("dot")} ${active ? this.decorateCSS("dot_on") : ""}`} role="tab" aria-selected={active} aria-label={`Go to ${i + 1}`}>
                            {active && (
                              <>
                                <span className={this.decorateCSS("track")} aria-hidden="true" />
                                {this.sliderSettings.autoplay
                                  ? <span key={`bar-${i}`} className={this.decorateCSS("bar")} style={{ animationDuration: `${this.sliderSettings.autoplaySpeed}ms` }} aria-hidden={true} />
                                  : <span key={`bar-${i}`} className={this.decorateCSS("bar")} style={{ width: "100%", animation: "none" }} aria-hidden={true} />
                                }
                              </>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                <button onClick={() => this.playTransition("next")} className={this.decorateCSS("btn")} aria-label="Next" disabled={!this.sliderSettings.infinite && (this.getComponentState("idx") || 0) >= ((this.getPropValue("testimonials") as any[])?.length || 1) - 1}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials16;
