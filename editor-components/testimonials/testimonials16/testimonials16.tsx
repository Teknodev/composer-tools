// Testimonials16.tsx
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

  // mobile arrow/layout kontrolü için
  private mql: MediaQueryList | null = null;
  private onMqlChange = (e: MediaQueryListEvent | MediaQueryList) => {
    const matches = "matches" in e ? e.matches : (e as MediaQueryList).matches;
    this.setComponentState("isMobile", !!matches);
  };

  // ---- SADECE KODDAN AYARLANAN SLIDER SETTINGS ----
  private sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    centerMode: false,
    speed: 520, // animasyon süresi (ms)
    cssEase: "cubic-bezier(0.2, 0, 0.15, 1)",
    waitForAnimate: true,
    adaptiveHeight: false,
    draggable: true,
    swipe: true,
    touchMove: true,
    swipeToSlide: true,
    touchThreshold: 60,
    autoplay: true,      // false yaparsanız autoplay kapanır
    autoplaySpeed: 6000, // progress süresi (ms)
  };

  constructor(props?: any) {
    super(props, styles);

    // UI state
    this.setComponentState("idx", 0);
    this.setComponentState("imgErrIdx", -1);
    this.setComponentState("logoErrIdx", -1);
    this.setComponentState("autoplayMs", this.sliderSettings.autoplaySpeed);
    this.setComponentState("isMobile", false);

    // Anim state
    this.setComponentState("animCls", "");
    this.setComponentState("quoteKey", 0);

    // Drag visuals
    this.setComponentState("dragDx", 0);
    this.setComponentState("isDragging", false);

    // BG state
    this.setComponentState("bgA", "");
    this.setComponentState("bgB", "");
    this.setComponentState("bgShowA", true);

    // Başlık
    this.addProp({ type: "string", key: "title", displayer: "Title", value: "Hear from\nBlinkpage's customers" });

    // Üst sağ linkler
    this.addProp({
      type: "array",
      key: "links",
      displayer: "Links",
      value: [
        { type: "object", key: "link", displayer: "Link", value: [
          { type: "string", key: "text", displayer: "Text", value: "Read Blinkpage reviews" },
          { type: "page",   key: "url",  displayer: "URL",  value: "" },
        ]},
        { type: "object", key: "link", displayer: "Link", value: [
          { type: "string", key: "text", displayer: "Text", value: "View all success stories" },
          { type: "page",   key: "url",  displayer: "URL",  value: "" },
        ]},
      ],
    });

    // Liste
    this.addProp({
      type: "array",
      key: "testimonials",
      displayer: "Testimonials",
      value: [
        {
          type: "object", key: "item", displayer: "Testimonial",
          value: [
            { type: "image",  key: "logoImage", displayer: "Logo (Image)", value: "" },
            { type: "string", key: "logoText",  displayer: "Logo (Text)",  value: "TechRadar" },
            { type: "string", key: "logo",      displayer: "Legacy Logo",  value: "https://irp.cdn-website.com/a8ff2f1c/dms3rep/multi/trchradar.svg" },
            { type: "image",  key: "image",     displayer: "Image",        value: "https://lirp.cdn-website.com/a8ff2f1c/dms3rep/multi/opt/Owain+Williams+--1920w.png" },
            { type: "string", key: "quote",     displayer: "Quote",        value: "Blinkpage is a great option for agencies looking to leverage AI in their website building." },
            { type: "string", key: "author",    displayer: "Author",       value: "Owain Williams" },
            { type: "string", key: "role",      displayer: "Role",         value: "Editor" },
            { type: "string", key: "company",   displayer: "Company",      value: "TechRadar" },
          ],
        },
        {
          type: "object", key: "item", displayer: "Testimonial",
          value: [
            { type: "image",  key: "logoImage", displayer: "Logo (Image)", value: "" },
            { type: "string", key: "logoText",  displayer: "Logo (Text)",  value: "Olivestreet" },
            { type: "string", key: "logo",      displayer: "Legacy Logo",  value: "https://irp.cdn-website.com/a8ff2f1c/dms3rep/multi/Olivestreet+logo.svg" },
            { type: "image",  key: "image",     displayer: "Image",        value: "https://lirp.cdn-website.com/a8ff2f1c/dms3rep/multi/opt/Nat+Rosasco+-5146cf12-1920w.png" },
            { type: "string", key: "quote",     displayer: "Quote",        value: "Blinkpage’s AI Assistant should save us 3 to 6 hours on most websites." },
            { type: "string", key: "author",    displayer: "Author",       value: "Sarah Johnson" },
            { type: "string", key: "role",      displayer: "Role",         value: "Tech Journalist" },
            { type: "string", key: "company",   displayer: "Company",      value: "" },
          ],
        },
        {
          type: "object", key: "item", displayer: "Testimonial",
          value: [
            { type: "image",  key: "logoImage", displayer: "Logo (Image)", value: "" },
            { type: "string", key: "logoText",  displayer: "Logo (Text)",  value: "fix8" },
            { type: "string", key: "logo",      displayer: "Legacy Logo",  value: "https://irp.cdn-website.com/a8ff2f1c/dms3rep/multi/fix8_logo.svg" },
            { type: "image",  key: "image",     displayer: "Image",        value: "https://lirp.cdn-website.com/a8ff2f1c/dms3rep/multi/opt/Josh+Neimark+-ad5cd26e-1920w.png" },
            { type: "string", key: "quote",     displayer: "Quote",        value: "If I can give my clients value—even if they don’t have the budget—I will. Blinkpage’s AI tools make that possible." },
            { type: "string", key: "author",    displayer: "Author",       value: "Josh Neimark" },
            { type: "string", key: "role",      displayer: "Role",         value: "CEO" },
            { type: "string", key: "company",   displayer: "Company",      value: "Fix8" },
          ],
        },
      ],
    });
  }

  static getName(): string { return "Testimonials 16"; }

  private fromRow(row:any,key:string,opts?:any){
    if (row && typeof row.getPropValue === "function") return (row as MaybeComposerNode).getPropValue!(key,opts);
    if (Array.isArray(row)) return this.getPropValue(key,{...(opts||{}),parent_object:row});
    return this.getPropValue(key,opts);
  }
  private fromRowStr(row:any,key:string){ const v=this.fromRow(row,key,{as_string:true}); return (typeof v==="string"?v:"") || ""; }

  private start = () => {
    if (this.timer) return;
    const items = (this.getPropValue("testimonials") as any[]) || [];
    if (!this.sliderSettings.autoplay) return;        // autoplay false -> timer yok
    if (items.length < 2) return;
    this.timer = setTimeout(() => this.next(true), this.sliderSettings.autoplaySpeed);
  };
  private stop = () => { if (this.timer) { clearTimeout(this.timer); this.timer = null; } };
  private restart = () => { this.stop(); this.start(); };

  componentDidMount(): void {
    // bg init
    const list=(this.getPropValue("testimonials") as any[]) || [];
    const idx=this.getComponentState("idx") || 0;
    const row=list[idx];
    const img=this.fromRowStr(row,"image");
    this.setComponentState("bgA", img || "");
    this.setComponentState("bgB", "");
    this.setComponentState("bgShowA", true);

    // mobile kontrol (700px ve altı = mobil)
    if (typeof window !== "undefined" && "matchMedia" in window) {
      this.mql = window.matchMedia("(max-width: 700px)");
      this.onMqlChange(this.mql);
      // modern
      if ("addEventListener" in this.mql) {
        this.mql.addEventListener("change", this.onMqlChange as any);
      } else {
        // safari eski
        (this.mql as any).addListener?.(this.onMqlChange as any);
      }
    }

    this.start();
  }
  componentWillUnmount(): void {
    this.stop();
    if (this.mql) {
      if ("removeEventListener" in this.mql) {
        this.mql.removeEventListener("change", this.onMqlChange as any);
      } else {
        (this.mql as any).removeListener?.(this.onMqlChange as any);
      }
    }
  }
  componentDidUpdate(): void {
    const list=(this.getPropValue("testimonials") as any[]) || [];
    if (Array.isArray(list) && list.length > 6) { (this as any).setPropValue?.("testimonials", list.slice(0,6)); }
  }

  // BG crossfade
  private crossfadeBgToIndex(nextIdx:number){
    const list=(this.getPropValue("testimonials") as any[])||[];
    const rowNext=list[nextIdx];
    const urlNext=this.fromRowStr(rowNext,"image");
    if (!urlNext) { this.setComponentState("bgA",""); this.setComponentState("bgB",""); this.setComponentState("bgShowA",true); return; }
    const showA=!!this.getComponentState("bgShowA");
    if (showA) this.setComponentState("bgB",urlNext); else this.setComponentState("bgA",urlNext);
    this.setComponentState("bgShowA",!showA);
  }

  // Transition
  private playTransition = (dir:"next"|"prev") => {
    if (this.sliderSettings.waitForAnimate && (this.getComponentState("animCls") || "") !== "") return;

    const cur = this.getComponentState("idx") || 0;
    const list = (this.getPropValue("testimonials") as any[]) || [];
    const total = list.length || 1;

    if (!this.sliderSettings.infinite) {
      if (dir === "prev" && cur <= 0) return;
      if (dir === "next" && cur >= total - 1) return;
    }

    const outCls = dir === "next" ? "card--slide-out-left" : "card--slide-out-right";
    const inCls  = dir === "next" ? "card--slide-in-right" : "card--slide-in-left";

    const IN_MS  = Math.max(120, this.sliderSettings.speed);
    const OUT_MS = Math.max(80, Math.round(IN_MS * 0.5));
    const EASE   = this.sliderSettings.cssEase;

    this.setComponentState("animCls", outCls);

    const targetPreview = dir === "next"
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

    this.setComponentState("animInMs", IN_MS);
    this.setComponentState("animOutMs", OUT_MS);
    this.setComponentState("animEase", EASE);
  };

  private prev = () => this.playTransition("prev");
  private next = (_fromAuto=false) => this.playTransition("next");

  private go = (i:number) => {
    const cur = this.getComponentState("idx") || 0;
    const list = (this.getPropValue("testimonials") as any[]) || [];
    const total = list.length || 1;
    const target = this.sliderSettings.infinite ? ((i%total)+total)%total : Math.max(0, Math.min(i, total-1));
    if (target === cur) return;
    if (this.sliderSettings.waitForAnimate && (this.getComponentState("animCls") || "") !== "") return;
    const dir = target > cur ? "next" : "prev";
    this.playTransition(dir);
  };

  // ---- Drag interactions ----
  private onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!this.sliderSettings.draggable || !this.sliderSettings.swipe || !this.sliderSettings.touchMove) return;
    this.dragging = true;
    this.dragStartX = "touches" in e ? e.touches[0].clientX : e.clientX;
    this.setComponentState("isDragging", true);
    this.stop();
  };

  private onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!this.sliderSettings.draggable || !this.sliderSettings.swipe || !this.sliderSettings.touchMove) return;
    if (!this.dragging || this.dragStartX === null) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const dx = clientX - this.dragStartX;
    const CLAMP = 140;
    const dragDx = Math.max(-CLAMP, Math.min(CLAMP, dx));
    this.setComponentState("dragDx", dragDx);

    const THRESH = Number.isFinite(this.sliderSettings.touchThreshold) ? this.sliderSettings.touchThreshold : 60;
    if (dx > THRESH) {
      this.setComponentState("isDragging", false);
      this.setComponentState("dragDx", 0);
      this.prev();
      this.dragging = false;
      this.dragStartX = null;
    } else if (dx < -THRESH) {
      this.setComponentState("isDragging", false);
      this.setComponentState("dragDx", 0);
      this.next();
      this.dragging = false;
      this.dragStartX = null;
    }
  };

  private onDragEnd = () => {
    if (!this.sliderSettings.draggable || !this.sliderSettings.swipe || !this.sliderSettings.touchMove) return;
    if (!this.dragging) {
      this.setComponentState("isDragging", false);
      this.setComponentState("dragDx", 0);
      this.restart();
      return;
    }
    this.dragging = false;
    this.dragStartX = null;
    this.setComponentState("isDragging", false);
    this.setComponentState("dragDx", 0);
    this.restart();
  };

  private onMouseLeave = () => { if (this.dragging) this.onDragEnd(); };

  render(){
    const titleEl=this.getPropValue("title");
    const links=(this.getPropValue("links") as any[])||[];
    const list=((this.getPropValue("testimonials") as any[])||[]).slice(0,6);

    const idx=this.getComponentState("idx")||0;
    const row: MaybeComposerNode | any[] | undefined = list[idx];

    const quoteEl=this.fromRow(row,"quote");
    const authorEl=this.fromRow(row,"author");
    const roleEl=this.fromRow(row,"role");
    const companyEl=this.fromRow(row,"company");

    const authorStr=this.fromRowStr(row,"author");
    const roleStr=this.fromRowStr(row,"role");
    const companyStr=this.fromRowStr(row,"company");
    const imgUrl=this.fromRowStr(row,"image");

    const logoImage=this.fromRowStr(row,"logoImage");
    const logoText=this.fromRowStr(row,"logoText");
    const legacyLogo=this.fromRowStr(row,"logo");
    const logoUrl =
      logoImage ||
      (legacyLogo &&
        (legacyLogo.startsWith("http://") || legacyLogo.startsWith("https://") || legacyLogo.startsWith("data:image")
          ? legacyLogo
          : ""));
    const logoTxt = logoText || (!logoUrl ? legacyLogo : "");

    const useImgFallback=this.getComponentState("imgErrIdx")===idx || !imgUrl;
    const logoBroken=this.getComponentState("logoErrIdx")===idx;

    const animCls=this.getComponentState("animCls")||"";
    const quoteKey=this.getComponentState("quoteKey")||0;

    const bgA=(this.getComponentState("bgA") as string)||"";
    const bgB=(this.getComponentState("bgB") as string)||"";
    const bgShowA=!!this.getComponentState("bgShowA");

    const hasCardBg = !!imgUrl && !useImgFallback;

    const roleCompanyTitle = [roleStr, companyStr].filter(Boolean).join(roleStr && companyStr ? ", " : "");
    const authorTitle = [authorStr, roleCompanyTitle].filter(Boolean).join(" — ");

    const dragDx = this.getComponentState("dragDx") || 0;
    const isDragging = !!this.getComponentState("isDragging");

    const IN_MS  = this.getComponentState("animInMs")  || this.sliderSettings.speed;
    const OUT_MS = this.getComponentState("animOutMs") || Math.round(IN_MS * 0.5);
    const EASE   = this.getComponentState("animEase")  || this.sliderSettings.cssEase;

    const isMobile = !!this.getComponentState("isMobile");

    const dragStyle: React.CSSProperties =
      dragDx !== 0 || isDragging
        ? { transform: `translateX(${dragDx}px) rotate(${dragDx * 0.02}deg)`,
            boxShadow: `0 20px 60px rgba(0,0,0,${0.35 + Math.min(Math.abs(dragDx) / 200, 0.15)})` }
        : {};

    const quoteCls=this.decorateCSS("quote");
    const scopedCss = `
.${quoteCls}{white-space:normal;}
.${quoteCls} p,.${quoteCls} div{display:inline;margin:0;}
.${quoteCls} br{display:none;}
.${quoteCls} .qwrap{display:inline;white-space:normal;}
.${quoteCls} .qwrap::before{content:"\\201C";white-space:nowrap;}
.${quoteCls} .qwrap::after{content:"\\2060\\201D";white-space:nowrap;}
`;

    return (
      <Base.Container
        className={`${this.decorateCSS("root")} ${hasCardBg ? this.decorateCSS("hasBg") : ""}`}
        style={{ position:"relative", overflow:"hidden" }}
      >
        <style dangerouslySetInnerHTML={{ __html: scopedCss }} />

        {/* BG crossfade layer'ları */}
        {bgA && (
          <div aria-hidden="true" style={{
            position:"absolute", inset:0, zIndex:1, backgroundImage:`url(${bgA})`,
            backgroundSize:"cover", backgroundPosition:"center", filter:"blur(28px)",
            transform:"scale(1.12)", opacity: (bgShowA?1:0), transition:"opacity 300ms ease-in-out",
            pointerEvents:"none"
          }} />
        )}
        {bgB && (
          <div aria-hidden="true" style={{
            position:"absolute", inset:0, zIndex:1, backgroundImage:`url(${bgB})`,
            backgroundSize:"cover", backgroundPosition:"center", filter:"blur(28px)",
            transform:"scale(1.12)", opacity: (bgShowA?0:1), transition:"opacity 300ms ease-in-out",
            pointerEvents:"none"
          }} />
        )}

        {/* Overlay sadece foto varsa */}
        {hasCardBg && <div className="overlay" aria-hidden="true" />}

        <Base.MaxContent className={this.decorateCSS("wrap")} style={{ position:"relative", zIndex:101 }}>
          {/* Header */}
          <div className={this.decorateCSS("header")}>
            <Base.SectionTitle
              className={this.decorateCSS("title")}
              style={hasCardBg ? { color: "var(--composer-font-color-primary)", textShadow: "0 1px 2px rgba(0,0,0,.25)" } : undefined}
            >
              {titleEl}
            </Base.SectionTitle>

            {/* Links: masaüstünde sağda; mobilde başlığın ALTINDA ve ok ALTA GEÇER */}
            <div
              className={this.decorateCSS("lnks")}
              style={
                isMobile
                  ? {
                      width: "100%",
                      marginLeft: 0,
                      justifyContent: "flex-start",
                      marginTop: "var(--composer-gap-xs)",
                      flexWrap: "wrap",
                    }
                  : undefined
              }
            >
              {Array.isArray(links) && links.map((l:any, i:number) => {
                const getPV = l?.getPropValue; if (typeof getPV !== "function") return null;
                const textEl = getPV("text");
                const href   = (getPV("url", { as_string: true }) as string) || "#";
                return (
                  <span
                    key={i}
                    className={`${this.decorateCSS("lnkEnh")} ${styles.lnkEnh}`}
                    style={{
                      display: "inline-flex",
                      flexDirection: isMobile ? "column" : "row", // OK MOBİLDE ALTA
                      alignItems: isMobile ? "flex-start" : "center",
                      gap: isMobile ? "var(--composer-gap-xs)" : undefined,
                    }}
                  >
                    <ComposerLink
                      path={href}
                      className={styles.lnkA}
                      style={{
                        color: "var(--composer-font-color-primary, #fff)",
                        fontSize: isMobile ? "var(--composer-font-size-sm)" : undefined, // mobilde küçült
                      }}
                    >
                      {textEl}
                    </ComposerLink>

                    {/* ok: mobilde ALTA, biraz küçük; desktop aynı */}
                    <svg
                      className={styles.lnkArrow}
                      width={isMobile ? 16 : 20}
                      height={isMobile ? 16 : 20}
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      style={{
                        display: isMobile ? "block" : "inline-block",
                        marginTop: isMobile ? "var(--composer-gap-xs)" : 0,
                      }}
                    >
                      <path d="M3 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                );
              })}
            </div>
          </div>

          {/* Card */}
          <div
            className={`${this.decorateCSS("card")} ${animCls ? this.decorateCSS(animCls) : ""} ${isDragging ? this.decorateCSS("card--dragging") : ""}`}
            onMouseDown={this.onDragStart}
            onMouseMove={this.onDragMove}
            onMouseUp={this.onDragEnd}
            onMouseLeave={this.onMouseLeave}
            onTouchStart={this.onDragStart}
            onTouchMove={this.onDragMove}
            onTouchEnd={this.onDragEnd}
            style={{
              touchAction:"pan-y",
              ...dragStyle,
              ["--t16-out" as any]: `${OUT_MS}ms`,
              ["--t16-in"  as any]: `${IN_MS}ms`,
              ["--t16-ease-out" as any]: EASE,
              ["--t16-ease-in"  as any]: EASE,
            }}
          >
            {/* Görsel */}
            <div className={this.decorateCSS("imgBox")}>
              {(() => {
                const err = this.getComponentState("imgErrIdx") === idx;
                if (err || !imgUrl) return <div className={`${this.decorateCSS("img")} ${this.decorateCSS("imgFallback")}`} />;
                return (
                  <img
                    src={imgUrl}
                    alt={authorStr || "testimonial"}
                    className={this.decorateCSS("img")}
                    onError={() => this.setComponentState("imgErrIdx", idx)}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                );
              })()}
            </div>

            {/* İçerik */}
            <div className={this.decorateCSS("cnt")}>
              <div className={this.decorateCSS("logo")}>
                {(() => {
                  const broken = this.getComponentState("logoErrIdx") === idx;
                  if (logoUrl && !broken) {
                    return (
                      <img
                        src={logoUrl}
                        alt={companyStr || "logo"}
                        className={this.decorateCSS("logoImg")}
                        onError={() => this.setComponentState("logoErrIdx", idx)}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                    );
                  }
                  return <span className={this.decorateCSS("logoText")}>{logoTxt}</span>;
                })()}
              </div>

              <blockquote key={quoteKey} className={this.decorateCSS("quote")}><span className="qwrap">{quoteEl}</span></blockquote>

              <div className={this.decorateCSS("hr")} />

              {/* Author / Role / Company */}
              <p className={this.decorateCSS("author")} title={authorTitle}>
                {imgUrl ? (
                  <img
                    src={imgUrl}
                    alt={authorStr || "avatar"}
                    className={this.decorateCSS("avatar")}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                ) : null}

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

          {/* Navigation + Rail */}
          <div className={this.decorateCSS("nav")}>
            {this.sliderSettings.arrows && (
              <button
                onClick={() => this.playTransition("prev")}
                className={this.decorateCSS("btn")}
                aria-label="Previous"
                disabled={!this.sliderSettings.infinite && (this.getComponentState("idx")||0) <= 0}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}

            {this.sliderSettings.dots && (
              <div className={this.decorateCSS("rail")}>
                <div className={this.decorateCSS("dots")} role="tablist" aria-label="Testimonials">
                  {list.map((_, i) => {
                    const active = i === (this.getComponentState("idx")||0);
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
                            {this.sliderSettings.autoplay ? (
                              <span
                                key={`bar-${i}`}
                                className={this.decorateCSS("bar")}
                                style={{ animationDuration: `${this.sliderSettings.autoplaySpeed}ms` }}
                                aria-hidden={true}
                              />
                            ) : (
                              <span
                                key={`bar-${i}`}
                                className={this.decorateCSS("bar")}
                                style={{ width: "100%", animation: "none" }}
                                aria-hidden={true}
                              />
                            )}
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {this.sliderSettings.arrows && (
              <button
                onClick={() => this.playTransition("next")}
                className={this.decorateCSS("btn")}
                aria-label="Next"
                disabled={
                  !this.sliderSettings.infinite &&
                  (this.getComponentState("idx")||0) >= ((this.getPropValue("testimonials") as any[])?.length || 1) - 1
                }
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials16;
