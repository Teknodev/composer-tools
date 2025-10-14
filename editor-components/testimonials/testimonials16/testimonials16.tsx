"use client";

import React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials16.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

class Testimonials16 extends Testimonials {
  private timer: any = null;
  // drag/swipe state
  private dragStartX: number | null = null;
  private dragging: boolean = false;

  // anim lock
  private animating = false;

  // --- BG crossfade state (yalnızca arka plan için eklendi) ---
  // İki katman: A ve B. showA true ise A görünür, false ise B.
  constructor(props?: any) {
    super(props, styles);

    // UI state
    this.setComponentState("idx", 0);
    this.setComponentState("imgErrIdx", -1);
    this.setComponentState("logoErrIdx", -1);
    this.setComponentState("autoplayMs", 6000);

    // anim state
    this.setComponentState("animCls", "");   // card anim class
    this.setComponentState("quoteKey", 0);   // quote yeniden mount için

    // BG state
    this.setComponentState("bgA", "");       // aktif url (katman A)
    this.setComponentState("bgB", "");       // pasif url (katman B)
    this.setComponentState("bgShowA", true); // hangi katman görünür

    // Başlık
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Hear from\nBlinkpage's customers",
    });

    // Üst sağ linkler
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
            { type: "string", key: "text", displayer: "Text", value: "Read Blinkpage reviews" },
            { type: "page", key: "url", displayer: "URL", value: "" },
          ],
        },
        {
          type: "object",
          key: "link",
          displayer: "Link",
          value: [
            { type: "string", key: "text", displayer: "Text", value: "View all success stories" },
            { type: "page", key: "url", displayer: "URL", value: "" },
          ],
        },
      ],
    });

    // Liste
    this.addProp({
      type: "array",
      key: "testimonials",
      displayer: "Testimonials",
      value: [
        [
          { type: "string", key: "logo",    displayer: "Logo",    value: "https://irp.cdn-website.com/a8ff2f1c/dms3rep/multi/trchradar.svg" },
          { type: "image",  key: "image",   displayer: "Image",   value: "https://lirp.cdn-website.com/a8ff2f1c/dms3rep/multi/opt/Owain+Williams+--1920w.png" },
          { type: "string", key: "quote",   displayer: "Quote",   value: "Blinkpage is a great option for agencies looking to leverage AI in their website building." },
          { type: "string", key: "author",  displayer: "Author",  value: "Owain Williams" },
          { type: "string", key: "role",    displayer: "Role",    value: "Editor" },
          { type: "string", key: "company", displayer: "Company", value: "TechRadar" },
        ],
        [
          { type: "string", key: "logo",    displayer: "Logo",    value: "https://irp.cdn-website.com/a8ff2f1c/dms3rep/multi/Olivestreet+logo.svg" },
          { type: "image",  key: "image",   displayer: "Image",   value: "https://lirp.cdn-website.com/a8ff2f1c/dms3rep/multi/opt/Nat+Rosasco+-5146cf12-1920w.png" },
          { type: "string", key: "quote",   displayer: "Quote",   value: "Blinkpage’s AI Assistant should save us 3 to 6 hours on most websites." },
          { type: "string", key: "author",  displayer: "Author",  value: "Sarah Johnson" },
          { type: "string", key: "role",    displayer: "Role",    value: "Tech Journalist" },
          { type: "string", key: "company", displayer: "Company", value: "" },
        ],
        [
          { type: "string", key: "logo",    displayer: "Logo",    value: "https://irp.cdn-website.com/a8ff2f1c/dms3rep/multi/fix8_logo.svg" },
          { type: "image",  key: "image",   displayer: "Image",   value: "https://lirp.cdn-website.com/a8ff2f1c/dms3rep/multi/opt/Josh+Neimark+-ad5cd26e-1920w.png" },
          { type: "string", key: "quote",   displayer: "Quote",   value: "If I can give my clients value—even if they don’t have the budget—I will. Blinkpage’s AI tools make that possible." },
          { type: "string", key: "author",  displayer: "Author",  value: "Michael Chen" },
          { type: "string", key: "role",    displayer: "Role",    value: "Senior Writer" },
          { type: "string", key: "company", displayer: "Company", value: "fix8" },
        ],
      ],
    });
  }

  static getName(): string {
    return "Testimonials 16";
  }

  // ===== autoplay =====
  private autoplayMs = () => this.getComponentState("autoplayMs") || 6000;
  private start = () => {
    if (this.timer) return;
    const items = (this.getPropValue("testimonials") as any[]) || [];
    if (items.length < 2) return;
    this.timer = setTimeout(() => this.next(true), this.autoplayMs());
  };
  private stop = () => { if (this.timer) { clearTimeout(this.timer); this.timer = null; } };
  private restart = () => { this.stop(); this.start(); };

  componentDidMount(): void {
    // İlk arka planı mevcut karttan başlat
    const list = (this.getPropValue("testimonials") as any[]) || [];
    const idx = this.getComponentState("idx") || 0;
    const row = list[idx] || [];
    const img = (this.getPropValue("image", { parent_object: row, as_string: true }) as string) || "";
    this.setComponentState("bgA", img);
    this.start();
  }

  componentWillUnmount(): void { this.stop(); }

  componentDidUpdate(): void {
    // 6 üstü kart eklenmesini sınırla
    const list = (this.getPropValue("testimonials") as any[]) || [];
    if (Array.isArray(list) && list.length > 6) {
      (this as any).setPropValue?.("testimonials", list.slice(0, 6));
    }
  }

  // --- Yardımcı: BG crossfade'i tetikle ---
  private crossfadeBgToIndex(nextIdx: number) {
    const list = (this.getPropValue("testimonials") as any[]) || [];
    const rowNext = list[nextIdx] || [];
    const urlNext = (this.getPropValue("image", { parent_object: rowNext, as_string: true }) as string) || "";
    if (!urlNext) return;

    const showA = !!this.getComponentState("bgShowA");
    if (showA) {
      this.setComponentState("bgB", urlNext);
    } else {
      this.setComponentState("bgA", urlNext);
    }
    // Görünür katmanı değiştir -> opacity transition devreye girer
    this.setComponentState("bgShowA", !showA);
  }

  // === TRANSITION ANIMATION ===
  private playTransition = (dir: "next" | "prev") => {
    // animating lock kaldırıldı, her tıklamada animasyon başlatılır
    const outCls = dir === "next" ? "card--slide-out-left" : "card--slide-out-right";
    const inCls  = dir === "next" ? "card--slide-in-right" : "card--slide-in-left";

    const cur = this.getComponentState("idx") || 0;
    const list = (this.getPropValue("testimonials") as any[]) || [];
    const total = list.length || 1;

    this.setComponentState("animCls", outCls);

    const OUT_MS = 300;
    const IN_MS  = 2000; // orijinalinden aynen bırakıldı

    // BG crossfade'ini HEMEN başlat (kart animasyonuyla aynı anda)
    const targetPreview = dir === "next" ? (cur + 1) % total : (cur - 1 + total) % total;
    this.crossfadeBgToIndex(targetPreview);

    window.setTimeout(() => {
      const target = targetPreview;
      this.setComponentState("idx", target);
      this.setComponentState("quoteKey", (this.getComponentState("quoteKey") || 0) + 1);
      this.setComponentState("animCls", inCls);

      window.setTimeout(() => {
        this.setComponentState("animCls", "");
        // animating lock yok, tekrar tıklanabilir
        this.restart();
      }, IN_MS);
    }, OUT_MS);
  };

  private prev = () => this.playTransition("prev");
  private next = (_fromAuto = false) => this.playTransition("next");
  private go = (i: number) => {
    const cur = this.getComponentState("idx") || 0;
    if (i === cur) return;
    const dir = i > cur ? "next" : "prev";
    const step = () => {
      const now = this.getComponentState("idx") || 0;
      if (now === i) return;
      this.playTransition(dir);
    };
    step();
  };

  // error handlers
  private onImgError = (atIdx: number) => {
    const badIdx = this.getComponentState("imgErrIdx") || -1;
    if (badIdx !== atIdx) this.setComponentState("imgErrIdx", atIdx);
  };
  private onLogoError = (atIdx: number) => {
    const badIdx = this.getComponentState("logoErrIdx") || -1;
    if (badIdx !== atIdx) this.setComponentState("logoErrIdx", atIdx);
  };

  // Mouse/touch swipe
  private onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    this.dragging = true;
    this.dragStartX = "touches" in e ? e.touches[0].clientX : e.clientX;
  };
  private onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!this.dragging || this.dragStartX === null) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const dx = clientX - this.dragStartX;
    if (dx > 60) { this.prev(); this.dragging = false; this.dragStartX = null; }
    else if (dx < -60) { this.next(); this.dragging = false; this.dragStartX = null; }
  };
  private onDragEnd = () => { this.dragging = false; this.dragStartX = null; };

  render() {
    const titleEl = this.getPropValue("title");
    const links = (this.getPropValue("links") as any[]) || [];
    const list  = ((this.getPropValue("testimonials") as any[]) || []).slice(0, 6);

    const idx  = this.getComponentState("idx") || 0;
    const row  = list[idx] || ([] as any[]);
    const quoteEl   = this.getPropValue("quote",   { parent_object: row });
    const authorEl  = this.getPropValue("author",  { parent_object: row });
    const roleEl    = this.getPropValue("role",    { parent_object: row });
    const companyEl = this.getPropValue("company", { parent_object: row });

    const authorStr  = (this.getPropValue("author",  { parent_object: row, as_string: true }) as string) || "";
    const companyStr = (this.getPropValue("company", { parent_object: row, as_string: true }) as string) || "";

    const imgUrl  = (this.getPropValue("image", { parent_object: row, as_string: true }) as string) || "";
    const logoStr = (this.getPropValue("logo",  { parent_object: row, as_string: true }) as string) || "";
    const useImgFallback = this.getComponentState("imgErrIdx") === idx || !imgUrl;

    const isLogoUrl =
      typeof logoStr === "string" &&
      (logoStr.startsWith("http://") || logoStr.startsWith("https://") || logoStr.startsWith("data:image"));
    const logoBroken = this.getComponentState("logoErrIdx") === idx;

    const durationMs = this.autoplayMs();
    const animCls = this.getComponentState("animCls") || "";
    const quoteKey = this.getComponentState("quoteKey") || 0;

    // --- BG current values (render) ---
    const bgA = (this.getComponentState("bgA") as string) || "";
    const bgB = (this.getComponentState("bgB") as string) || "";
    const bgShowA = !!this.getComponentState("bgShowA");

    return (
      // container'ı relative yapıp background katmanlarını yerleştiriyorum
      <Base.Container className={this.decorateCSS("root")} style={{ position: "relative" }}>
        {/* --- Çift katmanlı BLUR/ZOOOM arka plan: cross-fade ile yumuşak geçiş --- */}
        {bgA && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              backgroundImage: `url(${bgA})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(28px)",
              transform: "scale(1.12)",
              opacity: bgShowA ? 1 : 0,
              transition: "opacity 300ms ease-in-out",
              pointerEvents: "none",
            }}
          />
        )}
        {bgB && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              backgroundImage: `url(${bgB})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(28px)",
              transform: "scale(1.12)",
              opacity: bgShowA ? 0 : 1,
              transition: "opacity 300ms ease-in-out",
              pointerEvents: "none",
            }}
          />
        )}

        <Base.MaxContent className={this.decorateCSS("wrap")} style={{ position: "relative", zIndex: 1 }}>

          {/* Header */}
          <div className={this.decorateCSS("hdr")}>
            <Base.SectionTitle className={this.decorateCSS("title")}>
              {titleEl}
            </Base.SectionTitle>

            <div className={this.decorateCSS("lnks")}>
              {links.map((l: any, i: number) => {
                const textEl = l?.getPropValue ? l.getPropValue("text") : null;
                const href   = l?.getPropValue ? (l.getPropValue("url", { as_string: true }) as string) : "#";
                return (
                  <ComposerLink key={i} path={href || "#"} className={`${this.decorateCSS("lnkEnh")} ${styles.lnkEnh}`}>
                    <span className={styles.lnkText}>{textEl}</span>
                    <svg className={styles.lnkArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M3 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </ComposerLink>
                );
              })}
            </div>
          </div>

          {/* Card */}
          <div
            className={`${this.decorateCSS("card")} ${animCls ? this.decorateCSS(animCls) : ""}`}
            onMouseDown={this.onDragStart}
            onMouseMove={this.onDragMove}
            onMouseUp={this.onDragEnd}
            onMouseLeave={this.onDragEnd}
            onTouchStart={this.onDragStart}
            onTouchMove={this.onDragMove}
            onTouchEnd={this.onDragEnd}
            style={{ touchAction: "pan-y" }}
          >
            <div className={this.decorateCSS("imgBox")}>
              {useImgFallback ? (
                <div className={`${this.decorateCSS("img")} ${this.decorateCSS("imgFallback")}`} />
              ) : (
                <img
                  src={imgUrl}
                  alt={authorStr || "testimonial"}
                  className={this.decorateCSS("img")}
                  onError={() => this.onImgError(idx)}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              )}
            </div>

            <div className={this.decorateCSS("cnt")}>
              <div className={this.decorateCSS("logo")}>
                {isLogoUrl && !logoBroken ? (
                  <img
                    src={logoStr}
                    alt={companyStr || "logo"}
                    className={this.decorateCSS("logoImg")}
                    onError={() => this.onLogoError(idx)}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                ) : (
                  <span className={this.decorateCSS("logoText")}>{logoStr}</span>
                )}
              </div>

              {/* ORTA KISIM (quote) — animasyon burada */}
              <blockquote
                key={quoteKey}
                className={`${this.decorateCSS("quote")} ${this.decorateCSS("quote_in")}`}
              >
                &quot;{this.getPropValue("quote", { parent_object: row })}&quot;
              </blockquote>

              <div className={this.decorateCSS("hr")} />
            </div>

            <p className={this.decorateCSS("author")}>
              <strong>{authorEl}</strong>
              {roleEl ? " - " : ""}
              {roleEl}
              {companyEl ? ", " : ""}
              {companyEl}
            </p>
          </div>

          {/* Navigation + Rail + Progress */}
          <div className={this.decorateCSS("nav")}>
            <button onClick={this.prev} className={this.decorateCSS("btn")} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className={this.decorateCSS("rail")}>
              <div className={this.decorateCSS("dots")} role="tablist" aria-label="Testimonials">
                {list.map((_, i) => {
                  const active = i === idx;
                  return (
                    <button
                      key={i}
                      onClick={() => this.go(i)}
                      className={`${this.decorateCSS("dot")} ${active ? this.decorateCSS("dot_on") : ""}`}
                      role="tab"
                      aria-selected={active}
                      aria-label={`Go to ${i + 1}`}
                    >
                      {active && (
                        <>
                          <span className={this.decorateCSS("track")} aria-hidden="true" />
                          <span
                            key={`bar-${idx}`}
                            className={this.decorateCSS("bar")}
                            style={{ animationDuration: `${durationMs}ms` }}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <button onClick={this.next} className={this.decorateCSS("btn")} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials16;
