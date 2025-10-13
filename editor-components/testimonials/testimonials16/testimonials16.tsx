"use client";

import React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials16.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

class Testimonials16 extends Testimonials {
  private timer: any = null;

  constructor(props?: any) {
    super(props, styles);

    // UI state
    this.setComponentState("idx", 0);
    this.setComponentState("imgErrIdx", -1);
    this.setComponentState("logoErrIdx", -1);
    this.setComponentState("autoplayMs", 6000); // progress ile eşit

    // Başlık (Duda -> Blinkpage)
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Hear from\nBlinkpage's customers",
    });

    // Üst sağ linkler (yan panelden ayarlanır)
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
        { type: "page", key: "url", displayer: "URL", value: "#" },
        ],
      },
      {
        type: "object",
        key: "link",
        displayer: "Link",
        value: [
        { type: "string", key: "text", displayer: "Text", value: "View all success stories" },
        { type: "page", key: "url", displayer: "URL", value: "#" },
        ],
      },
      ],
    });

    // REGISTER (Duda -> Blinkpage)
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
          { type: "string", key: "company", displayer: "Company", value: "Forbes" },
        ],
        [
          { type: "string", key: "logo",    displayer: "Logo",    value: "https://irp.cdn-website.com/a8ff2f1c/dms3rep/multi/fix8_logo.svg" },
          { type: "image",  key: "image",   displayer: "Image",   value: "https://lirp.cdn-website.com/a8ff2f1c/dms3rep/multi/opt/Josh+Neimark+-ad5cd26e-1920w.png" },
          { type: "string", key: "quote",   displayer: "Quote",   value: "If I can give my clients value—even if they don’t have the budget—I will. Blinkpage’s AI tools make that possible." },
          { type: "string", key: "author",  displayer: "Author",  value: "Michael Chen" },
          { type: "string", key: "role",    displayer: "Role",    value: "Senior Writer" },
          { type: "string", key: "company", displayer: "Company", value: "Wired" },
        ],
      ],
    });
  }

  static getName(): string {
    return "Testimonials 16";
  }

  // ===== helpers (mevcudu bozmadan eklediklerim) =====
  private val = (row: any, key: string, fb = "") => {
    if (!row) return fb;
    if (Array.isArray(row)) return (row.find((x: any) => x?.key === key)?.value) ?? fb;
    if (typeof row === "object") return (row as any)[key] ?? fb;
    return fb;
  };
  private autoplayMs = () => this.getComponentState("autoplayMs") || 6000;

  /** Editörde miyiz? */
  private isEditor = (): boolean => {
    try {
      if (typeof (this as any).isEditing === "function") return (this as any).isEditing();
    } catch {}
    try {
      if (typeof window !== "undefined" && (window as any).__IS_EDITOR__ === true) return true;
    } catch {}
    return false;
  };

  /** Inline edit span — kart içi metinler için */
  private renderEditableSpan(
    value: string,
    onCommit: (val: string) => void,
    className?: string,
    placeholder?: string
  ): JSX.Element {
    const canEdit = this.isEditor();
    return (
      <span
        contentEditable={canEdit}
        suppressContentEditableWarning
        className={className}
        role={canEdit ? "textbox" : undefined}
        aria-label={placeholder}
        onMouseDown={(e) => { if (canEdit) e.stopPropagation(); }}
        onClick={(e) => { if (canEdit) { e.preventDefault(); e.stopPropagation(); } }}
        onBlur={(e) => onCommit((e.currentTarget as HTMLElement).innerText)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            (e.currentTarget as HTMLElement).blur();
          }
        }}
        style={{ pointerEvents: "auto", userSelect: "text", outline: "none" }}
      >
        {value || placeholder || ""}
      </span>
    );
  }

  /** Prop setter'lar */
  private setTopLevelString = (key: string, val: string) => {
    (this as any).setPropValue?.(key, val);
  };
  private setArrayField = (
    arrayKey: "testimonials" | "links",
    index: number,
    fieldKey: string,
    val: string
  ) => {
    const cur = (this.getPropValue(arrayKey) as any[]) || [];
    const next = cur.map((row, i) => {
      if (i !== index) return row;
      if (Array.isArray(row)) {
        return row.map((cell: any) => (cell?.key === fieldKey ? { ...cell, value: val } : cell));
      }
      return { ...row, [fieldKey]: val };
    });
    (this as any).setPropValue?.(arrayKey, next);
  };

  /** 6 üstü kart eklenmesini sınırla */
  componentDidUpdate(): void {
    const list = (this.getPropValue("testimonials") as any[]) || [];
    if (Array.isArray(list) && list.length > 6) {
      (this as any).setPropValue?.("testimonials", list.slice(0, 6));
    }
  }

  // ===== autoplay =====
  private start = () => {
    if (this.timer) return;
    const items = (this.getPropValue("testimonials") as any[]) || [];
    if (items.length < 2) return;
    this.timer = setTimeout(() => this.next(true), this.autoplayMs());
  };
  private stop = () => { if (this.timer) { clearTimeout(this.timer); this.timer = null; } };
  private restart = () => { this.stop(); this.start(); };

  componentDidMount(): void { this.start(); }
  componentWillUnmount(): void { this.stop(); }

  private prev = () => {
    const list = (this.getPropValue("testimonials") as any[]) || [];
    const total = list.length || 1;
    const cur = this.getComponentState("idx") || 0;
    const target = (cur - 1 + total) % total;
    this.setComponentState("idx", target);
    this.restart();
  };
  private next = (_fromAuto = false) => {
    const list = (this.getPropValue("testimonials") as any[]) || [];
    const total = list.length || 1;
    const cur = this.getComponentState("idx") || 0;
    const target = (cur + 1) % total;
    this.setComponentState("idx", target);
    this.restart();
  };
  private go = (i: number) => { this.setComponentState("idx", i); this.restart(); };

  // error handlers
  private onImgError = (atIdx: number) => {
    const badIdx = this.getComponentState("imgErrIdx") || -1;
    if (badIdx !== atIdx) this.setComponentState("imgErrIdx", atIdx);
  };
  private onLogoError = (atIdx: number) => {
    const badIdx = this.getComponentState("logoErrIdx") || -1;
    if (badIdx !== atIdx) this.setComponentState("logoErrIdx", atIdx);
  };

  render() {
    const title = (this.getPropValue("title") as string) || "";
    const links = (this.getPropValue("links") as any[]) || [];
    const list  = ((this.getPropValue("testimonials") as any[]) || []).slice(0, 6); // render güvenliği

    const idx  = this.getComponentState("idx") || 0;
    const row  = list[idx] || {};

    const logoRaw = this.val(row, "logo");
    const imgVal  = this.val(row, "image");
    const quote   = this.val(row, "quote");
    const author  = this.val(row, "author");
    const role    = this.val(row, "role");
    const comp    = this.val(row, "company");

    const rawUrl = typeof imgVal === "string" ? imgVal : (imgVal?.url ?? "");
    const useImgFallback = this.getComponentState("imgErrIdx") === idx || !rawUrl;

    const isLogoUrl =
      typeof logoRaw === "string" &&
      (logoRaw.startsWith("http://") ||
        logoRaw.startsWith("https://") ||
        logoRaw.startsWith("data:image"));

    const logoBroken = this.getComponentState("logoErrIdx") === idx;

    const durationMs = this.autoplayMs();

    return (
      <Base.Container className={this.decorateCSS("root")}>
        <Base.MaxContent className={this.decorateCSS("wrap")}>

          {/* Header */}
          <div className={this.decorateCSS("hdr")}>
            <Base.SectionTitle className={this.decorateCSS("title")}>
              {this.renderEditableSpan(
                title,
                (val) => this.setTopLevelString("title", val),
                this.decorateCSS("title"),
                "Title"
              )}
            </Base.SectionTitle>
            <div className={this.decorateCSS("lnks")}>
              {links.map((l: any, i: number) => (
                <ComposerLink
                  key={i}
                  path={this.val(l, "url", "#")}
                  className={`${this.decorateCSS("lnk")} ${styles.lnkEnh}`}
                >
                  <span className={styles.lnkText}>{this.val(l, "text", "")}</span>
                  {/* ok ikonları: başlangıçta ↗; hover'da → */}
                  <svg
                    className={styles.lnkArrow}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    {/* düz sağ ok; başlangıçta CSS'te -45° döndürülüyor (↗ görünür) */}
                    <path d="M3 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </ComposerLink>
              ))}
            </div>
          </div>

          {/* Card (yazar bilgisi içeride, altta) */}
          <div className={this.decorateCSS("card")}>
            <div className={this.decorateCSS("imgBox")}>
              {useImgFallback ? (
                <div className={`${this.decorateCSS("img")} ${this.decorateCSS("imgFallback")}`} />
              ) : (
                <img
                  src={rawUrl}
                  alt={author || "testimonial"}
                  className={this.decorateCSS("img")}
                  onError={() => this.onImgError(idx)}
                  loading="lazy"
                />
              )}
            </div>

            <div className={this.decorateCSS("cnt")}>
              <div className={this.decorateCSS("logo")}>
                {isLogoUrl && !logoBroken ? (
                  <img
                    src={logoRaw}
                    alt={comp || "logo"}
                    className={this.decorateCSS("logoImg")}
                    onError={() => this.onLogoError(idx)}
                    loading="lazy"
                  />
                ) : (
                  <span className={this.decorateCSS("logoText")}>{logoRaw}</span>
                )}
              </div>

              {/* QUOTE: inline edit */}
              <blockquote className={this.decorateCSS("quote")}>
                &quot;
                {this.renderEditableSpan(
                  quote,
                  (val) => this.setArrayField("testimonials", idx, "quote", val),
                  this.decorateCSS("quote"),
                  "Quote"
                )}
                &quot;
              </blockquote>

              <div className={this.decorateCSS("hr")} />
            </div>

            {/* AUTHOR / ROLE / COMPANY: inline edit */}
            <p className={this.decorateCSS("author")}>
              <strong>
                {this.renderEditableSpan(
                  author,
                  (val) => this.setArrayField("testimonials", idx, "author", val),
                  this.decorateCSS("author"),
                  "Author"
                )}
              </strong>
              {role ? " - " : ""}
              {this.renderEditableSpan(
                role,
                (val) => this.setArrayField("testimonials", idx, "role", val),
                this.decorateCSS("role"),
                "Role"
              )}
              {comp ? ", " : ""}
              {this.renderEditableSpan(
                comp,
                (val) => this.setArrayField("testimonials", idx, "company", val),
                this.decorateCSS("company"),
                "Company"
              )}
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
