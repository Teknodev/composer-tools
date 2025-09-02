import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content27.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

// her şeyi güvenle stringe çevir
const toStr = (v: any): string => (typeof v === "string" ? v : v == null ? "" : String(v));
const toOptStr = (v: any): string | undefined => {
  const s = toStr(v).trim();
  return s ? s : undefined;
};
// --- her türlü nested node'dan metin çıkarır ---
const getNodeText = (n: any): string[] => {
    if (!n) return [];
    if (typeof n === "string") return [n];
  
    // yaygın şemalar
    if (n.type === "string" && typeof n.value === "string") return [n.value];
    if (typeof n.value === "string") return [n.value];
    if (typeof n.item === "string") return [n.item];
  
    // { key:'item', value:'...' }
    if (n.key === "item" && typeof n.value === "string") return [n.value];
  
    // medya vb. atla
    if (n.type === "media" || (n.value && typeof n.value === "object" && (n.value.url || n.value.src))) {
      return [];
    }
  
    // dizi ise hepsini topla
    if (Array.isArray(n)) return n.flatMap(getNodeText);
  
    // { value: [...] } veya { item: {...} } gibi
    if (Array.isArray(n.value)) return n.value.flatMap(getNodeText);
    if (Array.isArray(n.item)) return n.item.flatMap(getNodeText);
  
    // child alanlarını dolaş (son çare)
    const acc: string[] = [];
    for (const k of Object.keys(n)) {
      const v = (n as any)[k];
      if (k === "media" || k === "link" || k === "alt") continue;
      acc.push(...getNodeText(v));
    }
    return acc;
  };
  
  // items kökünden düz string listesi üret
  const extractItems = (raw: any): string[] => {
    if (!raw) return [];
    const rootArr = Array.isArray(raw) ? raw : Array.isArray(raw.value) ? raw.value : raw;
    const all = getNodeText(rootArr);
    // sadece boş olmayanları, tekrarları temizle
    return Array.from(new Set(all.map((s) => (s || "").trim()).filter(Boolean)));
  };
  

type InfoLine = { label?: string; text?: string };
type C27State = { activeIndex: number };

class Content27 extends BaseContent {
    private _activeIndex: number = 2; 

  constructor(props?: any) {
    super(props, styles);
    

    this.addProp({ type: "string", key: "title", displayer: "Title",
      value: "Thousands of Agencies Have Chosen Duda as Their White Label Web Design Platform" });

    this.addProp({ type: "string", key: "description", displayer: "Description",
      value: "Discover a private home in the orchard..." });

    this.addProp({ type: "image", key: "background-image", displayer: "Background Image", value: "" });
    this.addProp({ type: "string", key: "accent-color", displayer: "Accent Color (CSS)", value: "" });

    this.addProp({
      type: "array", key: "items", displayer: "Left Items",
      value: [
        { type: "string", key: "item", displayer: "Item", value: "Digital Solutions Provider" },
        { type: "string", key: "item", displayer: "Item", value: "Award-Winning Marketing Firm" },
        { type: "string", key: "item", displayer: "Item", value: "Digital Marketing Leader" },
      ],
    });

    this.addProp({ type: "string", key: "highlightIndex", displayer: "Highlight Index", value: "2" });

    this.addProp({
      type: "object", key: "image", displayer: "Right Image",
      value: [
        {
          type: "media", key: "media", displayer: "Image",
          value: { type: "image",
            url: "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-3@2x.png?v=2" },
          additionalParams: { availableTypes: ["image"] },
        },
        { type: "string", key: "alt", displayer: "Alt Text", value: "Conference audience" },
        { type: "page", key: "link", displayer: "Image Link", value: "" },
      ],
    });

    this.addProp({
      type: "array", key: "info", displayer: "Info Lines",
      value: [
        { type: "object", key: "line", displayer: "Info Line", value: [
          { type: "string", key: "label", displayer: "Label", value: "The Impact" },
          { type: "string", key: "text",  displayer: "Text",
            value: "Achieved their goals of offering a quality, industry-leading product and faster site creation & management at scale." },
        ]},
        { type: "object", key: "line", displayer: "Info Line", value: [
          { type: "string", key: "label", displayer: "Label", value: "How They Did It" },
          { type: "string", key: "text",  displayer: "Text",
            value: "Seamless migration of thousands of legacy websites in just a few months, using APIs to add metadata and create URL redirects." },
        ]},
        { type: "object", key: "line", displayer: "Info Line", value: [
          { type: "string", key: "label", displayer: "Label", value: "Favorite Duda Tool" },
          { type: "string", key: "text",  displayer: "Text",
            value: "Connected Data to prepopulate site templates with structured customer data." },
        ]},
      ],
    });
    const raw = this.getPropValue("highlightIndex");
    const parsed = parseInt(typeof raw === "string" ? raw : String(raw), 10);
    this._activeIndex = Number.isFinite(parsed) ? parsed : 2;
  }

  static getName(): string { return "Content 27"; }

  private getBgStyle(): React.CSSProperties | undefined {
    const bgRaw = this.getPropValue("background-image");
    const v = bgRaw && typeof bgRaw === "object" && "value" in (bgRaw as any) ? (bgRaw as any).value : bgRaw;
    const url = typeof v === "string" ? v : v?.url ?? v?.src ?? (Array.isArray(v?.sources) ? v.sources[0]?.src : "");
    if (!url) return undefined;
    return { backgroundImage: `url("${url}")`, backgroundSize: "cover", backgroundPosition: "center" };
  }
  
  private setActive = (i: number) => {
    this._activeIndex = i;
    this.forceUpdate(); // ✅ BaseContent ile uyumlu, tip çakışması yok
  };

  render() {
    const getStr = (n: any): string => {
        // string ise
        if (typeof n === "string") return n;
        // { value: "..." } veya { value: {url:...} } gibi
        if (n && typeof n === "object") {
          if (typeof n.value === "string") return n.value;
          // bazen { type:'string', key:'text', value:'...' }
          if (n.type === "string" && typeof n.value === "string") return n.value;
        }
        return "";
      };
      
      const findByKey = (arr: any[], key: string): string | undefined => {
        // dizi içindeki nesnelerden istenen key'i bul
        for (const x of arr || []) {
          // doğrudan x[key]
          if (x && typeof x === "object" && x[key] != null) {
            const s = getStr(x[key]);
            if (s) return s;
          }
          // { key:'label', value:'...' } şeması
          if (x && typeof x === "object" && x.key === key) {
            const s = getStr(x.value);
            if (s) return s;
          }
        }
        return undefined;
      };
      
      const extractInfoLine = (o: any): { label?: string; text?: string } => {
        // En yaygın: { value: [ {key:'label', value:'...'}, {key:'text', value:'...'} ] }
        if (o && typeof o === "object") {
          const maybeArr = Array.isArray(o.value) ? o.value : Array.isArray(o.line) ? o.line : Array.isArray(o) ? o : null;
      
          if (maybeArr) {
            const label = findByKey(maybeArr, "label");
            const text = findByKey(maybeArr, "text");
            if (label || text) return { label, text };
      
            // Yedek: ilk iki elemanı sırayla al
            const a = getStr(maybeArr[0]);
            const b = getStr(maybeArr[1]);
            return { label: a || undefined, text: b || undefined };
          }
      
          // Düz nesne ise doğrudan alanları dene
          const label = getStr(o.label);
          const text = getStr(o.text);
          if (label || text) return { label, text };
        }
      
        // Düz string gelirse text kabul et
        if (typeof o === "string") return { text: o };
        return {};
      };
      const pickStr = (n: any): string => {
        if (typeof n === "string") return n;
        if (!n || typeof n !== "object") return "";
        // { type:"string", value:"..." }
        if (n.type === "string" && typeof n.value === "string") return n.value;
        // { value:"..." }
        if (typeof n.value === "string") return n.value;
        // { value:[ ... ] } içinden ilk stringi veya item key'ini çek
        if (Array.isArray(n.value)) {
          // key=item olanı ara
          const k = n.value.find((x: any) => x?.key === "item");
          if (k) return pickStr(k.value);
          // değilse ilk string benzeri
          for (const x of n.value) {
            const s = pickStr(x);
            if (s) return s;
          }
        }
        return "";
      };
      
    const title = this.castToString(this.getPropValue("title"));
    const itemsRaw = this.getPropValue("items"); // castToObject yerine doğrudan al
const items: string[] = extractItems(itemsRaw);

    const hiStr = toStr(this.getPropValue("highlightIndex"));
    const hi = parseInt(hiStr, 10);
    const highlightIndex = Number.isNaN(hi) ? 2 : hi;

    const imageObj = this.castToObject<any>("image");
    const media = imageObj?.media?.value ?? imageObj?.media ?? null;
    const imageUrl: string = media?.url ?? media?.src ?? (Array.isArray(media?.sources) ? media.sources[0]?.src : "");
    const imageAlt = toOptStr(imageObj?.alt);
    const imageLink = imageObj?.link || "";

    const rawInfo = (this.castToObject<any[]>("info") || []);
    const info: InfoLine[] = rawInfo.map(extractInfoLine).filter((x) => x.label || x.text);
    const activeIndex = this._activeIndex;

    const accentColor = toStr(this.getPropValue("accent-color"));
    const styleVars: React.CSSProperties = {};
    if (accentColor) (styleVars as any)["--content27-accent"] = accentColor;

    return (
      <div className={styles.content27} style={this.getBgStyle()}>
        <div className={styles.maxContent} style={styleVars}>

          <div className={styles.grid}>
            <div className={styles.left}>
              {title && <h2 className={styles.leftTitle}>{title}</h2>}

              {items.length > 0 && (
                <ul className={styles.list} role="list">
                {items.map((t, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      className={`${styles.listItem} ${i === activeIndex ? styles.isActive : ""}`}
                      onClick={() => this.setActive(i)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); this.setActive(i); }
                      }}
                      aria-pressed={i === activeIndex}
                    >
                      {t}
                    </button>
                  </li>
                ))}
              </ul>
              )}
            </div>

            <div className={styles.right}>
              {(imageUrl || imageAlt) && (
                <figure className={styles.imageBox}>
                  <ComposerLink path={imageLink}>
                    <img className={styles.image} src={imageUrl} alt={imageAlt ?? ""} loading="lazy" />
                  </ComposerLink>
                </figure>
              )}

              {info.length > 0 && (
                <div className={styles.info}>
                  {info.map((s, idx) => (
                    <p key={idx} className={styles.infoLine}>
                      {s.label ? <strong>{s.label}: </strong> : null}
                      {s.text}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content27;
