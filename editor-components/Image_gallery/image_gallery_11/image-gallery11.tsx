import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { FaSearchPlus, FaSearchMinus  } from "react-icons/fa";

type TImage = { image: string; title?: string; imageLink: string };

class ImageGallery11 extends BaseImageGallery {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "background-image",
      displayer: "Background Image",
      value: 
        "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689af25436675f002db98b79?alt=media"
    });

    this.addProp({
      type: "boolean",
      key: "bg-overlay-enabled",
      displayer: "Background Overlay (Enable)",
      value: true
    });
   
    this.addProp({ 
        type: "string", 
        key: "title", 
        displayer: "Title", 
        value: "STUDIO LIFE" 
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "description",
      value:
        "As the studiocontinues to grow, our artists grow alongside it. We may be small, but everyone here is a jack-of-all-trades.",
    });

    this.addProp({
      type: "array",
      key: "image-items-top",
      displayer: "Gallery (Top Row)",
      value: [
        {   
            type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b16de36675f002db9baf2?alt=media"                
                },
                {
                    type: "string",
                    key: "image-title",
                    displayer: "Image Title",
                    value: "blog_1",
                }  ] 
        },
        { 
            type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b177536675f002db9bbfe?alt=media"                
                },
                {
                    type: "string",
                    key: "image-title",
                    displayer: "Image Title",
                    value: "blog_2",
                } ] 
        },
        { 
            type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b17fb36675f002db9bcd0?alt=media" 
                },
                {
                    type: "string",
                    key: "image-title",
                    displayer: "Image Title",
                    value: "blog_3",
                } ] 
        },
        { 
            type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b186b36675f002db9bdb5?alt=media"                
                },
                {
                    type: "string",
                    key: "image-title",
                    displayer: "Image Title",
                    value: "blog_4",
                } ] 
        },
        { 
            type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b188936675f002db9bde7?alt=media" 
                },
                {
                    type: "string",
                    key: "image-title",
                    displayer: "Image Title",
                    value: "blog_5",
                } ] 
        },
        { 
            type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b18be36675f002db9be9c?alt=media"                
                },
                {
                    type: "string",
                    key: "image-title",
                    displayer: "Image Title",
                    value: "blog_6",
                } ] 
        },
        { 
            type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b18f336675f002db9bf2a?alt=media"
                },
                {
                    type: "string",
                    key: "image-title",
                    displayer: "Image Title",
                    value: "blog_7",
                } ] 
        },
        { 
            type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b191b36675f002db9bffd?alt=media" 
                },
                {
                    type: "string",
                    key: "image-title",
                    displayer: "Image Title",
                    value: "blog_8",
                } ] 
        },      
      ],
    });

    this.addProp({
      type: "array",
      key: "image-items-bottom",
      displayer: "Gallery (Bottom Row)",
      value: [
        { type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1a6036675f002db9c11e?alt=media" 
                },  
                {
                    type: "string",
                    key: "image-title",
                    displayer: "Image Title",
                    value: "photo-1",
                } ] 
        },
        { 
            type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1a9836675f002db9c143?alt=media"
                },
                {
                    type: "string",
                    key: "image-title",
                    displayer: "Image Title",
                    value: "photo-2",
                } ] 
        },
        { 
            type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1aba36675f002db9c164?alt=media"
                },
                {
                    type: "string",
                    key: "image-title",
                    displayer: "Image Title",
                    value: "photo-3",
                } ] 
        },
        { 
            type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1ad836675f002db9c1cf?alt=media" 
                },
                {
                    type: "string",
                    key: "image-title",
                    displayer: "Image Title",
                    value: "photo-4",
                } ] 
        },
        { 
            type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1aff36675f002db9c2f3?alt=media" 
                },
                {
                    type: "string",
                    key: "image-title",
                    displayer: "Image Title",
                    value: "photo-5",
                } ] 
        },
        { 
            type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1c1e36675f002db9c57f?alt=media"
                },
                {
                    type: "string",
                    key: "image-title",
                    displayer: "Image Title",
                    value: "photo-6",
                } ] 
        },
        { 
            type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1c4636675f002db9c592?alt=media"
                },
                {
                    type: "string",
                    key: "image-title",
                    displayer: "Image Title",
                    value: "photo-7",
                } ] 
        },
        { 
            type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b188936675f002db9bde7?alt=media" 
                },
                {
                    type: "string",
                    key: "image-title",
                    displayer: "Image Title",
                    value: "photo-8",
                } ] 
        },
      ],
    });
  }

static getName(): string { return "Image Gallery 11"; }

private modalVisible = false;

private zoom = 1;
private panX = 0;
private panY = 0;
private isPanning = false;
private panStartX = 0;
private panStartY = 0;

private canvasRef = React.createRef<HTMLDivElement>();
private topTrackRef = React.createRef<HTMLDivElement>();
private botTrackRef = React.createRef<HTMLDivElement>();
private topWrapRef = React.createRef<HTMLDivElement>();
private botWrapRef = React.createRef<HTMLDivElement>();
private topInnerA = React.createRef<HTMLDivElement>();
private botInnerA = React.createRef<HTMLDivElement>();

private isDragging = false;
private dragMoved = false;
private startX = 0;
private startScrollLeft = 0;
private activeRow: HTMLDivElement | null = null;
private activeTrack: HTMLDivElement | null = null;
private startDragOffset = 0;
private activeWrap: HTMLDivElement | null = null;

private asBool(v: any): boolean {
  if (typeof v === "boolean") return v;
  if (typeof v === "number") return v !== 0;
  if (typeof v === "string") {
    const s = v.trim().toLowerCase();
    return s === "true" || s === "1" || s === "yes" || s === "on";
  }
  return false;
}

private setLoopWidths = () => {
  const apply = (track?: HTMLElement | null, innerA?: HTMLElement | null) => {
    if (!track || !innerA) return;
    const W = innerA.scrollWidth;             // gerçek genişlik
    track.style.setProperty("--loopW", `${W}px`);
  };
  apply(this.topTrackRef.current, this.topInnerA.current);
  apply(this.botTrackRef.current, this.botInnerA.current);
};


private onPointerDown = (
  e: React.MouseEvent | React.TouchEvent,
  rowRef: React.RefObject<HTMLDivElement>,
  trackRef: React.RefObject<HTMLDivElement>
) => {
        if ("preventDefault" in e) (e as any).preventDefault?.();
        if ("target" in e && (e.target as HTMLElement).tagName === "IMG") {
        (e.target as HTMLImageElement).draggable = false;
        }

  const row = rowRef.current;
  const track = trackRef.current;
  if (!row || !track) return;

  this.isDragging = true;
  this.dragMoved = false;
  this.activeRow = row;
  this.activeTrack = track;

  const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
  this.startX = clientX;
  this.startScrollLeft = row.scrollLeft;

  track.style.animationPlayState = "paused";
  row.classList.add(this.decorateCSS("dragging"));
};

private onPointerMove = (e: React.MouseEvent | React.TouchEvent) => {
  if (!this.isDragging || !this.activeRow) return;
  const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
  const delta = clientX - this.startX;

  if (Math.abs(delta) > 3) this.dragMoved = true;
  this.activeRow.scrollLeft = this.startScrollLeft - delta;

  ("preventDefault" in e) && (e as any).preventDefault?.();
};

private onDragStart = (
  e: React.MouseEvent | React.TouchEvent,
  wrapRef: React.RefObject<HTMLDivElement>,
  trackRef: React.RefObject<HTMLDivElement>
) => {
  if ("preventDefault" in e) (e as any).preventDefault?.();
  const wrap = wrapRef.current;
  const track = trackRef.current;
  if (!wrap || !track) return;

  this.isDragging = true;
  this.dragMoved = false;
  this.activeWrap = wrap;
  this.activeTrack = track;

  const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
  this.startX = clientX;

  const current = getComputedStyle(wrap).getPropertyValue("--drag").trim();
  this.startDragOffset = parseFloat(current || "0") || 0;

  wrap.classList.add(this.decorateCSS("dragging"));
};

private onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
  if (!this.isDragging || !this.activeWrap) return;
  const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
  const delta = clientX - this.startX;
  if (Math.abs(delta) > 3) this.dragMoved = true;

  const next = this.startDragOffset + delta;
  this.activeWrap.style.setProperty("--drag", `${next}px`);

  ("preventDefault" in e) && (e as any).preventDefault?.();
};

private onDragEnd = () => {
  if (!this.isDragging) return;
  this.isDragging = false;
  if (this.activeWrap) this.activeWrap.classList.remove(this.decorateCSS("dragging"));
  this.activeWrap = null;
  this.activeTrack = null;
};

private endDrag = () => {
  if (!this.isDragging) return;
  this.isDragging = false;
  if (this.activeTrack) this.activeTrack.style.animationPlayState = "running";
  if (this.activeRow) this.activeRow.classList.remove(this.decorateCSS("dragging"));
  this.activeRow = null;
  this.activeTrack = null;
};
private getImages(propKey: string): TImage[] {
  const raw = this.castToObject<any[]>(propKey) || [];
  return raw
    .map((it: any) => {
      const arr = Array.isArray(it?.value) ? it.value : [];
      const image = arr.find((x: any) => x.key === "image")?.value || "";
      const title = arr.find((x: any) => x.key === "image-title")?.value || "";
      return image ? { image, title, imageLink: "" } as TImage : null;
    })
    .filter(Boolean) as TImage[];
}

private getAllImages(): TImage[] {
  const top = this.getImages("image-items-top");
  const bot = this.getImages("image-items-bottom");
  if (top.length || bot.length) return [...top, ...bot];
  return this.getImages("image-items");
}

private modalIndex = 0;

private setZoom = (next: 1 | 2) => {
  this.zoom = next;
  if (this.zoom === 1) { this.panX = 0; this.panY = 0; } 
  this.forceUpdate();
};

private toggleZoom = () => {
  this.setZoom(this.zoom > 1 ? 1 : 2);
};

private onPanStart = (e: React.MouseEvent | React.TouchEvent) => {
  if (this.zoom <= 1) return;
  const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
  const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
  this.isPanning = true;
  this.panStartX = clientX - this.panX;
  this.panStartY = clientY - this.panY;
  (e as any).preventDefault?.();
  this.forceUpdate();
};
private onPanMove = (e: React.MouseEvent | React.TouchEvent) => {
  if (!this.isPanning) return;
  const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
  const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
  this.panX = clientX - this.panStartX;
  this.panY = clientY - this.panStartY;
  (e as any).preventDefault?.();
  this.forceUpdate();
};
private onPanEnd = () => { 
  this.isPanning = false; 
  this.forceUpdate(); 
};

private closeModal = () => {
  this.modalVisible = false;
  document.body.style.overflow = "";
  this.forceUpdate();
};
private openAt = (absIndex: number) => {
  this.modalIndex = absIndex;
  this.modalVisible = true;
  document.body.style.overflow = "hidden";
  this.forceUpdate();
};

private next = () => {
  const total = this.getAllImages().length;
  if (!total) return;
  this.modalIndex = (this.modalIndex + 1) % total;
  this.forceUpdate();
};

private prev = () => {
  const total = this.getAllImages().length;
  if (!total) return;
  this.modalIndex = (this.modalIndex - 1 + total) % total;
  this.forceUpdate();
};

private onKeyDown = (e: KeyboardEvent) => {
  if (!this.modalVisible) return;
  if (e.key === "Escape") this.closeModal();
  if (e.key === "ArrowRight") this.next();
  if (e.key === "ArrowLeft") this.prev();
};

componentDidMount(): void {
  this.setLoopWidths();
  window.addEventListener("resize", this.setLoopWidths);
  document.addEventListener("keydown", this.onKeyDown);
}
componentDidUpdate(): void { 
  this.setLoopWidths(); 
}
componentWillUnmount(): void {
  window.removeEventListener("resize", this.setLoopWidths);
  document.removeEventListener("keydown", this.onKeyDown);
}

  render() {
  const getImagesFromProp = (propKey: string) => {
    const raw = this.castToObject<any[]>(propKey) || [];
    return raw
      .map((it: any) => {
        const arr = Array.isArray(it?.value) ? it.value : [];
        const img = (arr.find((x: any) => x.key === "image") || {}).value || "";
        return { image: img, title: "" , imageLink: "" } as TImage;
      })
      .filter((x) => x.image);
  };

  const imagesTop = this.getImages("image-items-top");
  const imagesBottom = this.getImages("image-items-bottom");
  const topLen = imagesTop.length;

  const allImages = this.getAllImages();
  const active = allImages[this.modalIndex];
  const total = allImages.length;


  const isTitleExists = this.castToString(this.getPropValue("title"));
  const isDescriptionExists = this.castToString(this.getPropValue("description"));
  const backgroundImage = this.castToString(this.getPropValue("background-image"));
  const hasBackgroundImage = !!backgroundImage;
  const overlayEnabled = this.asBool(this.getPropValue("bg-overlay-enabled"));
  
  const containerStyle: React.CSSProperties & Record<string, any> = {
    backgroundImage: hasBackgroundImage ? `url(${backgroundImage})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const row1Speed = "100s";
  const row2Speed = "100s";

  return (
   <Base.Container
   isFull
    className={this.decorateCSS("container")}
    data-has-bg={hasBackgroundImage ? "true" : "false"}
    data-overlay-enabled={overlayEnabled && hasBackgroundImage ? "true" : "false"}
    style={containerStyle}
  
>
      {this.modalVisible && (
        <>
      <div className={this.decorateCSS("lightbox-overlay")} onClick={this.closeModal}></div>
    <div 
      className={this.decorateCSS("lightbox")} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" >
      <div className={this.decorateCSS("counter")}>
        {this.modalIndex + 1}/{total}
        </div>
        <button
          className={`${this.decorateCSS("nav")} ${this.decorateCSS("prev")}`}
          aria-label="Previous image"
          onClick={this.prev}
            >
              ‹
            </button>
            <div
              ref={this.canvasRef}
              className={`${this.decorateCSS("lightbox-canvas")} ${this.zoom>1 ? this.decorateCSS("zoomable") : ""} ${this.isPanning ? this.decorateCSS("panning") : ""}`}
              onMouseDown={this.onPanStart}
              onMouseMove={this.onPanMove}
              onMouseUp={this.onPanEnd}
              onMouseLeave={this.onPanEnd}
              onTouchStart={this.onPanStart}
              onTouchMove={this.onPanMove}
              onTouchEnd={this.onPanEnd}
              onDoubleClick={this.toggleZoom}
            >
              <img
                className={this.decorateCSS("lightbox-img")}
                src={active.image}
                alt={active.title || ""}
                draggable={false}
                style={{ transform: `translate(${this.panX}px, ${this.panY}px) scale(${this.zoom})` }}
              />
            </div>
        <button
          className={`${this.decorateCSS("nav")} ${this.decorateCSS("next")}`}
          aria-label="Next image"
          onClick={this.next}
        >
          ›
        </button>
       <div className={this.decorateCSS("tools")}>
        <button
          className={this.decorateCSS("icon-btn")}
          onClick={this.toggleZoom}
          aria-label={this.zoom > 1 ? "Uzaklaştır (1x)" : "Yakınlaştır (2x)"}
          title={this.zoom > 1 ? "Uzaklaştır" : "Yakınlaştır"}
        >
          {this.zoom > 1 ? <FaSearchMinus /> : <FaSearchPlus />}
        </button>

        <button className={this.decorateCSS("close")} onClick={this.closeModal} aria-label="Close">×</button>
      </div>

      {active?.title && (
        <div className={this.decorateCSS("caption")}>{active.title}</div>
      )}
    </div>
  </>
)}

  

{(isTitleExists || isDescriptionExists) && (
  <Base.VerticalContent
    className={this.decorateCSS("heading")}
  >
    {isTitleExists && (
      <Base.SectionTitle
        className={this.decorateCSS("title")}
      >
        {this.getPropValue("title")}
      </Base.SectionTitle>
    )}
    {isDescriptionExists && (
      <Base.SectionDescription
        className={this.decorateCSS("description")}
      >
        {this.getPropValue("description")}
      </Base.SectionDescription>
    )}
  </Base.VerticalContent>
)}


      {(imagesTop.length || imagesBottom.length) > 0 && (
        <div className={this.decorateCSS("gallery")}>

          {/* Top */}
          {imagesTop.length > 0 && (
            <div
              className={this.decorateCSS("row")}
              onMouseDown={(e) => this.onDragStart(e, this.topWrapRef, this.topTrackRef)}
              onMouseMove={(e) => this.onDragMove(e)}
              onMouseUp={this.onDragEnd}
              onMouseLeave={this.onDragEnd}
              onTouchStart={(e) => this.onDragStart(e, this.topWrapRef, this.topTrackRef)}
              onTouchMove={(e) => this.onDragMove(e)}
              onTouchEnd={this.onDragEnd}
            >
              <div ref={this.topWrapRef} className={this.decorateCSS("drag-wrap")}>
                <div
                  ref={this.topTrackRef}
                  className={this.decorateCSS("track")}
                  style={{ "--speed": row1Speed } as React.CSSProperties}
                >
                  <div className={this.decorateCSS("track__inner")}>
                    {imagesTop.map((it, i) => (
                      <div
                        key={`top-a-${i}`}
                        className={this.decorateCSS("image-child")}
                        onMouseEnter={(e) => {
                          const track = (e.currentTarget.closest(`.${this.decorateCSS("track")}`) as HTMLElement);
                          track?.classList.add("paused");
                        }}
                        onMouseLeave={(e) => {
                          const track = (e.currentTarget.closest(`.${this.decorateCSS("track")}`) as HTMLElement);
                          track?.classList.remove("paused");
                        }}
                              onClick={() => { if (this.dragMoved) return; this.openAt(i); }}
                      >
                        <img className={this.decorateCSS("image")} src={it.image} alt="" loading="lazy" draggable={false} />
                      </div>
                    ))}
                  </div>
                  <div className={this.decorateCSS("track__inner")} aria-hidden="true">
                    {imagesTop.map((it, i) => (
                      <div key={`top-b-${i}`} className={this.decorateCSS("image-child")}>
                        <img className={this.decorateCSS("image")} src={it.image} alt="" loading="lazy" draggable={false} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom */}
          {imagesBottom.length > 0 && (
            <div
              className={this.decorateCSS("row")}
              onMouseDown={(e) => this.onDragStart(e, this.botWrapRef, this.botTrackRef)}
              onMouseMove={(e) => this.onDragMove(e)}
              onMouseUp={this.onDragEnd}
              onMouseLeave={this.onDragEnd}
              onTouchStart={(e) => this.onDragStart(e, this.botWrapRef, this.botTrackRef)}
              onTouchMove={(e) => this.onDragMove(e)}
              onTouchEnd={this.onDragEnd}
            >
              <div ref={this.botWrapRef} className={this.decorateCSS("drag-wrap")}>
                <div
                  ref={this.botTrackRef}
                  className={`${this.decorateCSS("track")} ${this.decorateCSS("reverse")}`}
                  style={{ "--speed": row2Speed } as React.CSSProperties}
                >
                  <div className={this.decorateCSS("track__inner")}>
                    {imagesBottom.map((it, i) => (
                      <div
                        key={`bot-a-${i}`}
                        className={this.decorateCSS("image-child")}
                        onMouseEnter={(e) => {
                          const track = (e.currentTarget.closest(`.${this.decorateCSS("track")}`) as HTMLElement);
                          track?.classList.add("paused");
                        }}
                        onMouseLeave={(e) => {
                          const track = (e.currentTarget.closest(`.${this.decorateCSS("track")}`) as HTMLElement);
                          track?.classList.remove("paused");
                        }}
                              onClick={() => { if (this.dragMoved) return; this.openAt(topLen + i); }}
                      >
                        <img className={this.decorateCSS("image")} src={it.image} alt="" loading="lazy" draggable={false} />
                      </div>
                    ))}
                  </div>
                  <div className={this.decorateCSS("track__inner")} aria-hidden="true">
                    {imagesBottom.map((it, i) => (
                      <div key={`bot-b-${i}`} className={this.decorateCSS("image-child")}>
                        <img className={this.decorateCSS("image")} src={it.image} alt="" loading="lazy" draggable={false} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Base.Container>
  );
}
}

export default ImageGallery11;
