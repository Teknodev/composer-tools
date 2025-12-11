import * as React from "react";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery11.module.scss";
import { Base } from "../../../composer-base-components/base/base";


type TImage = { image: string; title?: string; imageLink: string };
class ImageGallery11 extends BaseImageGallery {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "bg-image",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689af25436675f002db98b79?alt=media",
    });

    this.addProp({
      type: "boolean",
      key: "bg-overlay-enabled",
      displayer: "Background Overlay",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "STUDIO LIFE",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "description",
      value:
        "As the studiocontinues to grow, our artists grow alongside it. We may be small, but everyone here is a jack-of-all-trades.",
    });

    this.addProp({
      type: "icon",
      key: "close-icon",
      displayer: "Close Icon",
      value: "IoIosClose",
    });

    this.addProp({
      type: "icon",
      key: "nav-prev-icon",
      displayer: "Nav Prev Icon",
      value: "IoIosArrowBack",
    });

    this.addProp({
      type: "icon",
      key: "nav-next-icon",
      displayer: "Nav Next Icon",
      value: "IoIosArrowForward",
    });


    this.addProp({
      type: "icon",
      key: "zoom-in-icon",
      displayer: "Zoom In Icon",
      value: "MdOutlineZoomIn",
    });
    this.addProp({
      type: "icon",
      key: "zoom-out-icon",
      displayer: "Zoom Out Icon",
      value: "MdOutlineZoomOut",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b16de36675f002db9baf2?alt=media",
            },
            {
              type: "string",
              key: "image-title",
              displayer: "Image Title",
              value: "blog_1"
            },
          ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b177536675f002db9bbfe?alt=media",
            },
            {
              type: "string",
              key: "image-title",
              displayer: "Image Title",
              value: "blog_2"
            },
          ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b17fb36675f002db9bcd0?alt=media",
            },
            {
              type: "string",
              key: "image-title",
              displayer: "Image Title",
              value: "blog_3"
            },
          ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b186b36675f002db9bdb5?alt=media",
            },
            {
              type: "string",
              key: "image-title",
              displayer: "Image Title",
              value: "blog_4"
            },
          ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b188936675f002db9bde7?alt=media",
            },
            {
              type: "string",
              key: "image-title",
              displayer: "Image Title",
              value: "blog_5"
            },
          ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b18be36675f002db9be9c?alt=media",
            },
            {
              type: "string",
              key: "image-title",
              displayer: "Image Title",
              value: "blog_6"
            },
          ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b18f336675f002db9bf2a?alt=media",
            },
            {
              type: "string",
              key: "image-title",
              displayer: "Image Title",
              value: "blog_7"
            },
          ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b191b36675f002db9bffd?alt=media",
            },
            {
              type: "string",
              key: "image-title",
              displayer: "Image Title",
              value: "blog_8"
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "image-items-bottom",
      displayer: "Gallery (Bottom Row)",
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1a6036675f002db9c11e?alt=media",
            },
            {
              type: "string",
              key: "image-title",
              displayer: "Image Title",
              value: "photo-1"
            },
          ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1a9836675f002db9c143?alt=media",
            },
            {
              type: "string",
              key: "image-title",
              displayer: "Image Title",
              value: "photo-2"
            },
          ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1aba36675f002db9c164?alt=media",
            },
            {
              type: "string",
              key: "image-title",
              displayer: "Image Title",
              value: "photo-3"
            },
          ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1ad836675f002db9c1cf?alt=media",
            },
            {
              type: "string",
              key: "image-title",
              displayer: "Image Title",
              value: "photo-4"
            },
          ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1aff36675f002db9c2f3?alt=media",
            },
            {
              type: "string",
              key: "image-title",
              displayer: "Image Title",
              value: "photo-5"
            },
          ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1c1e36675f002db9c57f?alt=media",
            },
            {
              type: "string",
              key: "image-title",
              displayer: "Image Title",
              value: "photo-6"
            },
          ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1c4636675f002db9c592?alt=media",
            },
            {
              type: "string",
              key: "image-title",
              displayer: "Image Title",
              value: "photo-7"
            },
          ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b188936675f002db9bde7?alt=media",
            },
            {
              type: "string",
              key: "image-title",
              displayer: "Image Title",
              value: "photo-8"
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Image Gallery 11";
  }

  private modalVisible = false;

  private zoom = 1;
  private panX = 0;
  private panY = 0;
  private isPanning = false;
  private panStartX = 0;
  private panStartY = 0;
  private baseScale = 1;

  private canvasRef = React.createRef<HTMLDivElement>();
  private topTrackRef = React.createRef<HTMLDivElement>();
  private botTrackRef = React.createRef<HTMLDivElement>();
  private topWrapRef = React.createRef<HTMLDivElement>();
  private botWrapRef = React.createRef<HTMLDivElement>();
  private topInnerA = React.createRef<HTMLDivElement>();
  private botInnerA = React.createRef<HTMLDivElement>();
  private closeBtnRef = React.createRef<HTMLButtonElement>();

  private isDragging = false;
  private dragMoved = false;
  private dragThreshold = 5;
  private clickSuppressUntil = 0
  private startX = 0;
  private activeTrack: HTMLDivElement | null = null;
  private startDragOffset = 0;
  private activeWrap: HTMLDivElement | null = null;

  private preventScroll = (e: Event) => e.preventDefault();

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
      const W = innerA.scrollWidth;
      track.style.setProperty("--loopW", `${W}px`);
    };
    apply(this.topTrackRef.current, this.topInnerA.current);
    apply(this.botTrackRef.current, this.botInnerA.current);
  };
  private normalizeDrag = (wrap: HTMLDivElement, track: HTMLDivElement) => {
    const half = track.scrollWidth / 2;
    let cur = parseFloat(getComputedStyle(wrap).getPropertyValue("--drag")) || 0;

    if (half > 0) {
      cur = ((cur % half) + half) % half;
      if (cur > 0) cur -= half;
    } else {
      cur = 0;
    }
    wrap.style.setProperty("--drag", `${Math.round(cur)}px`);
  };


  private onDragStart = (
    e: React.MouseEvent | React.TouchEvent,
    wrapRef: React.RefObject<HTMLDivElement | null>,
    trackRef: React.RefObject<HTMLDivElement | null>
  ) => {
    (e as any).preventDefault?.();
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    this.isDragging = true;
    this.dragMoved = false;
    this.activeWrap = wrap;
    this.activeTrack = track;

    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    this.startX = clientX;

    const current = getComputedStyle(wrap).getPropertyValue('--drag').trim();
    this.startDragOffset = parseFloat(current || '0') || 0;

    wrap.classList.add(this.decorateCSS('dragging'));
  };

  private onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!this.isDragging || !this.activeWrap || !this.activeTrack) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const delta = clientX - this.startX;
    const next = this.startDragOffset + delta;
    if (Math.abs(delta) >= this.dragThreshold) this.dragMoved = true;
    this.activeWrap.style.setProperty('--drag', `${next}px`);
    this.normalizeDrag(this.activeWrap, this.activeTrack);
    (e as any).preventDefault?.();
  };

  private onDragEnd = () => {
    if (!this.isDragging) return;
    this.isDragging = false;
    if (this.activeWrap) this.activeWrap.classList.remove(this.decorateCSS('dragging'));
    if (this.activeWrap && this.activeTrack) {
      this.normalizeDrag(this.activeWrap, this.activeTrack);
    }

    if (this.dragMoved) {
      this.clickSuppressUntil = performance.now() + 350;
    }

    this.dragMoved = false;
    this.activeWrap = null;
    this.activeTrack = null;
  };

  private pauseTracks = () => {
    this.topTrackRef?.current?.classList.add("paused");
    this.botTrackRef?.current?.classList.add("paused");
  };

  private resumeTracks = () => {
    this.topTrackRef?.current?.classList.remove("paused");
    this.botTrackRef?.current?.classList.remove("paused");
  };

  private modalIndex = 0;
  private setZoom = (next: number) => {
    this.zoom = next;
    this.panX = 0;
    this.panY = 0;
    this.forceUpdate();
  };

  private toggleZoom = (e?: React.MouseEvent | React.TouchEvent) => {
    if (this.zoom > 1) {
      this.setZoom(1);
      return;
    }
    this.setZoom(2);
  };

  private clampPan(nextZoom?: number) {
    const canvas = this.canvasRef.current;
    const imgEl = canvas?.querySelector(`.${this.decorateCSS("lightbox-img")}`) as HTMLImageElement | null;
    if (!canvas || !imgEl || !imgEl.naturalWidth || !imgEl.naturalHeight) return;

    const { width: cW, height: cH } = canvas.getBoundingClientRect();
    const nW = imgEl.naturalWidth, nH = imgEl.naturalHeight;
    const contain = Math.min(cW / nW, cH / nH);
    const zUser = nextZoom ?? this.zoom;
    const zTotal = Math.max(1, zUser) * this.baseScale;
    const scaledW = nW * contain * zTotal;
    const scaledH = nH * contain * zTotal;
    const SAFE = 0;
    const maxX = scaledW <= cW ? 0 : (scaledW - cW) / 2 + SAFE;
    const maxY = scaledH <= cH ? 0 : (scaledH - cH) / 2 + SAFE;
    this.panX = Math.max(-maxX, Math.min(maxX, this.panX));
    this.panY = Math.max(-maxY, Math.min(maxY, this.panY));
    this.panX = Math.round(this.panX);
    this.panY = Math.round(this.panY);
  }

  private onPanStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (this.zoom <= 1) return;
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    this.isPanning = true;
    this.panStartX = clientX - this.panX;
    this.panStartY = clientY - this.panY;
    (e as any).preventDefault?.();
    this.forceUpdate();
  };

  private onPanMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!this.isPanning) return;
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

    let nextX = clientX - this.panStartX;
    let nextY = clientY - this.panStartY;

    const canvas = this.canvasRef.current;
    const imgEl = canvas?.querySelector(`.${this.decorateCSS("lightbox-img")}`) as HTMLImageElement | null;
    if (canvas && imgEl && imgEl.naturalWidth && imgEl.naturalHeight) {
      const { width: cW, height: cH } = canvas.getBoundingClientRect();
      const nW = imgEl.naturalWidth, nH = imgEl.naturalHeight;
      const contain = Math.min(cW / nW, cH / nH);
      const z = Math.max(1, this.zoom);
      const scaledW = nW * contain * z;
      const scaledH = nH * contain * z;
      const maxX = scaledW <= cW ? 0 : (scaledW - cW) / 2;
      const maxY = scaledH <= cH ? 0 : (scaledH - cH) / 2;

      nextX = Math.max(-maxX, Math.min(maxX, nextX));
      nextY = Math.max(-maxY, Math.min(maxY, nextY));
    }

    this.panX = nextX;
    this.panY = nextY;

    (e as any).preventDefault?.();
    this.forceUpdate();
  };

  private onPanEnd = () => {
    this.isPanning = false;
    const canvas = this.canvasRef.current;
    canvas?.classList.add(this.decorateCSS("snapping"));
    this.clampPan();
    this.forceUpdate();
    setTimeout(() => canvas?.classList.remove(this.decorateCSS("snapping")), 160);
  };

  private onImgLoad = () => {
    if (!this.modalVisible) return;
    this.baseScale = this.computeCoverScale();
    this.clampPan();
    this.forceUpdate();
  };

  private closeModal = () => {
    this.modalVisible = false;
    this.resumeTracks();
    document.body.style.overflow = "";
    window.removeEventListener("wheel", this.preventScroll);
    window.removeEventListener("touchmove", this.preventScroll);
    this.forceUpdate();
  };

  private openAt = (absIndex: number) => {
    this.modalIndex = absIndex;
    this.modalVisible = true;
    this.pauseTracks();
    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", this.preventScroll, { passive: false });
    window.addEventListener("touchmove", this.preventScroll, { passive: false });

    this.baseScale = this.computeCoverScale();
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;

    this.forceUpdate();
    requestAnimationFrame(() => {
      this.clampPan();
      this.forceUpdate();
      this.closeBtnRef.current?.focus();
    });
    this.forceUpdate?.();
  };

  private next = () => {
    const total = this.getAllImages().length;
    if (!total) return;
    this.modalIndex = (this.modalIndex + 1) % total;
    this.zoom = 1; this.panX = 0; this.panY = 0;
    this.forceUpdate();
  };

  private prev = () => {
    const total = this.getAllImages().length;
    if (!total) return;
    this.modalIndex = (this.modalIndex - 1 + total) % total;
    this.zoom = 1; this.panX = 0; this.panY = 0;
    this.forceUpdate();
  };

  private onKeyDown = (e: KeyboardEvent) => {
    if (!this.modalVisible) return;
    if (e.key === "Escape") this.closeModal();
    if (e.key === "ArrowRight") this.next();
    if (e.key === "ArrowLeft") this.prev();
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); this.toggleZoom(); }
  };

  private computeCoverScale = (): number => {
    const canvas = this.canvasRef.current;
    const imgEl = canvas?.querySelector(`.${this.decorateCSS("lightbox-img")}`) as HTMLImageElement | null;
    if (!canvas || !imgEl || !imgEl.naturalWidth || !imgEl.naturalHeight) return 2;

    const { width: cW, height: cH } = canvas.getBoundingClientRect();
    const nW = imgEl.naturalWidth, nH = imgEl.naturalHeight;

    const rW = cW / nW;
    const rH = cH / nH;
    const coverOverContain = Math.max(rW, rH) / Math.min(rW, rH);
    return coverOverContain;
  };

  componentDidMount(): void {
    this.setLoopWidths();
    window.addEventListener("resize", this.setLoopWidths);
    document.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("resize", this.onResizeRecomputeZoom);
  }
  componentDidUpdate(): void {
    this.setLoopWidths();
  }
  componentWillUnmount(): void {
    window.removeEventListener("resize", this.setLoopWidths);
    document.removeEventListener("keydown", this.onKeyDown);
    window.removeEventListener("resize", this.onResizeRecomputeZoom);
    document.body.style.overflow = "";
    window.removeEventListener("wheel", this.preventScroll);
    window.removeEventListener("touchmove", this.preventScroll);
  }
  private onResizeRecomputeZoom = () => {
    if (!this.modalVisible) return;
    this.baseScale = this.computeCoverScale();
    this.clampPan();
    this.forceUpdate();
  };



  private getImages(propKey: string): TImage[] {
    const raw = this.castToObject<any[]>(propKey) || [];
    return raw
      .map((it: any) => {
        const arr = Array.isArray(it?.value) ? it.value : [];
        const image = arr.find((x: any) => x.key === "image")?.value || "";
        const title = arr.find((x: any) => x.key === "image-title")?.value || "";
        return image ? ({ image, title, imageLink: "" } as TImage) : null;
      })
      .filter(Boolean) as TImage[];
  }

  private getAllImages(): TImage[] {
    const top = this.getImages("image-items-top");
    const bot = this.getImages("image-items-bottom");
    if (top.length || bot.length) return [...top, ...bot];
    return this.getImages("image-items");
  }

  render() {
    const imagesTop = this.getImages("image-items-top");
    const imagesBottom = this.getImages("image-items-bottom");
    const topLen = imagesTop.length;

    const allImages = this.getAllImages();
    const total = allImages.length;
    const active = allImages[this.modalIndex];

    const isTitleExists = this.castToString(this.getPropValue("title"));
    const isDescriptionExists = this.castToString(this.getPropValue("description"));
    const backgroundImage = this.castToString(this.getPropValue("bg-image"));
    const hasBackgroundImage = !!backgroundImage;
    const overlayEnabled = this.asBool(this.getPropValue("bg-overlay-enabled"));

    const containerStyle: React.CSSProperties & Record<string, any> = {
      backgroundImage: hasBackgroundImage ? `url(${backgroundImage})` : "none",
      backgroundSize: "cover",
      backgroundPosition: "center 150%",
      backgroundRepeat: "no-repeat",
    };
    const row1Speed = "200s";
    const row2Speed = "200s";

    let imgStyle: React.CSSProperties = {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain"
    };
    if (this.zoom > 1 && this.canvasRef.current && active) {
      const canvas = this.canvasRef.current;
      const cW = canvas.clientWidth;
      const cH = canvas.clientHeight;
      const nW = active.image ? 800 : 800;
      const nH = active.image ? 600 : 600;
      const imgEl = canvas.querySelector(`.${this.decorateCSS("lightbox-img")}`) as HTMLImageElement | null;
      const naturalW = imgEl?.naturalWidth || nW;
      const naturalH = imgEl?.naturalHeight || nH;
      const scale = Math.min(cW / naturalW, cH / naturalH);
      imgStyle = {
        width: `${naturalW * scale}px`,
        height: `${naturalH * scale}px`,
        objectFit: "contain",
        maxWidth: "100%",
        maxHeight: "100%"
      };
    }

    console.log("this.modalVisible", this.modalVisible);
    console.log(total > 0, "total > 0 &&")

    return (
      <div className={this.decorateCSS("container-bg")}>
        <Base.Container
          isFull
          className={this.decorateCSS("container")}
          data-has-bg={hasBackgroundImage ? "true" : "false"}
          data-modal-open={this.modalVisible ? "true" : "false"}
          data-overlay-enabled={overlayEnabled && hasBackgroundImage ? "true" : "false"}
          style={containerStyle}
        >
          {hasBackgroundImage && (
            <div className={this.decorateCSS("bg-wrap")}>
              <div
                className={this.decorateCSS("bg-image")}
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center 150%",
                  backgroundRepeat: "no-repeat",
                }}
              />
              {overlayEnabled && <div className={this.decorateCSS("bg-overlay")} />}
            </div>
          )}
          {this.modalVisible && total > 0 && (
            <Base.Overlay isVisible={true} className={this.decorateCSS("modal-overlay")}>
              <div
                className={`${this.decorateCSS("lightbox")} ${this.zoom > 1 ? this.decorateCSS("is-zoomed") : ""}`}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Image viewer"
              >
                <div
                  className={`${this.decorateCSS("nav")} ${this.decorateCSS("prev")}`}
                  onClick={this.prev}
                >
                  <Base.Icon
                    propsIcon={{ className: this.decorateCSS("nav-prev-icon") }}
                    name={this.getPropValue("nav-prev-icon")}
                  />
                </div>

                <div
                  ref={this.canvasRef}
                  className={`${this.decorateCSS("lightbox-canvas")}`}
                  onMouseDown={this.zoom > 1 ? undefined : this.onPanStart}
                  onMouseMove={this.zoom > 1 ? undefined : this.onPanMove}
                  onMouseUp={this.zoom > 1 ? undefined : this.onPanEnd}
                  onMouseLeave={this.zoom > 1 ? undefined : this.onPanEnd}
                  onTouchStart={this.zoom > 1 ? undefined : this.onPanStart}
                  onTouchMove={this.zoom > 1 ? undefined : this.onPanMove}
                  onTouchEnd={this.zoom > 1 ? undefined : this.onPanEnd}
                  onDoubleClick={(e) => this.toggleZoom(e)}
                >

                  {active && (
                    <div className={this.decorateCSS("lightbox-img-wrap")}>
                      <img
                        className={this.decorateCSS("lightbox-img")}
                        src={active.image}
                        alt={active.title || ""}
                        draggable={false}
                        onLoad={this.onImgLoad}
                        style={imgStyle}
                      />
                      <div className={this.decorateCSS("counter-badge")}>
                        {this.modalIndex + 1}/{total}
                      </div>
                      {active?.title && (
                        <div className={this.decorateCSS("title-badge")}>
                          {active.title}
                        </div>
                      )}
                      <button
                        ref={this.closeBtnRef}
                        type="button"
                        className={this.decorateCSS("close-btn")}
                        aria-label="Close"
                        title="Close"
                        onMouseDown={(e) => e.stopPropagation()}
                        onMouseUp={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onTouchEnd={(e) => e.stopPropagation()}
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.closeModal(); }}
                      >
                        <Base.Icon
                          propsIcon={{ className: this.decorateCSS("close-icon") }}
                          name={this.getPropValue("close-icon")}
                        />
                      </button>

                      <button
                        type="button"
                        className={this.decorateCSS("zoom-btn")}
                        aria-label={this.zoom > 1 ? "Zoom out" : "Zoom in"}
                        title={this.zoom > 1 ? "Zoom out" : "Zoom in"}
                        onMouseDown={(e) => e.stopPropagation()}
                        onMouseUp={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onTouchEnd={(e) => e.stopPropagation()}
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.toggleZoom(); }}
                      >
                        {this.zoom > 1 ? (
                          <Base.Icon
                            propsIcon={{ className: this.decorateCSS("zoom-icon") }}
                            name={this.getPropValue("zoom-out-icon")}
                          />
                        ) : (
                          <Base.Icon
                            propsIcon={{ className: this.decorateCSS("zoom-icon") }}
                            name={this.getPropValue("zoom-in-icon")}
                          />
                        )}
                      </button>
                    </div>
                  )}
                </div>
                <button
                  className={this.decorateCSS("side-hit") + " " + this.decorateCSS("left")}
                  onClick={() => {
                    if (this.isPanning) return;
                    if (this.dragMoved) return;
                    if (performance.now() < this.clickSuppressUntil) return;
                    this.prev();
                  }}
                  aria-label="Previous image"
                  disabled={this.zoom > 1}
                />
                <button
                  className={this.decorateCSS("side-hit") + " " + this.decorateCSS("right")}
                  onClick={() => {
                    if (this.isPanning) return;
                    if (this.dragMoved) return;
                    if (performance.now() < this.clickSuppressUntil) return;
                    this.next();
                  }}
                  aria-label="Next image"
                  disabled={this.zoom > 1}
                />



                <div
                  className={`${this.decorateCSS("nav")} ${this.decorateCSS("next")}`}
                  onClick={this.next}
                >
                  <Base.Icon
                    propsIcon={{ className: this.decorateCSS("nav-next-icon") }}
                    name={this.getPropValue("nav-next-icon")}
                  />
                </div>

              </div>
            </Base.Overlay>
          )}

          {(isTitleExists || isDescriptionExists) && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              {isTitleExists && (
                <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
              )}
              {isDescriptionExists && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </Base.VerticalContent>
          )}

          {(imagesTop.length + imagesBottom.length) > 0 && (
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
                      <div ref={this.topInnerA} className={this.decorateCSS("track__inner")}>
                        {imagesTop.map((it, i) => (
                          <div
                            key={`top-a-${i}`}
                            className={this.decorateCSS("image-child")}
                            onMouseEnter={(e) => {
                              const track = e.currentTarget.closest(`.${this.decorateCSS("track")}`) as HTMLElement | null;
                              track?.classList.add("paused");
                            }}
                            onMouseLeave={(e) => {
                              const track = e.currentTarget.closest(`.${this.decorateCSS("track")}`) as HTMLElement | null;
                              track?.classList.remove("paused");
                            }}
                            onClick={() => {
                              if (this.isDragging) return;
                              if (this.dragMoved) return;
                              if (performance.now() < this.clickSuppressUntil) return;
                              this.openAt(i);
                            }}
                          >
                            <img className={this.decorateCSS("image")} src={it.image} alt="" loading="lazy" draggable={false} />
                          </div>
                        ))}
                      </div>
                      <div ref={this.botInnerA} className={this.decorateCSS("track__inner")} aria-hidden="true">
                        {imagesTop.map((it, i) => (
                          <div
                            key={`top-b-${i}`}
                            className={this.decorateCSS("image-child")}
                            onMouseEnter={(e) => {
                              const track = e.currentTarget.closest(`.${this.decorateCSS("track")}`) as HTMLElement | null;
                              track?.classList.add("paused");
                            }}
                            onMouseLeave={(e) => {
                              const track = e.currentTarget.closest(`.${this.decorateCSS("track")}`) as HTMLElement | null;
                              track?.classList.remove("paused");
                            }}
                            onClick={() => {
                              if (this.isDragging) return;
                              if (this.dragMoved) return;
                              if (performance.now() < this.clickSuppressUntil) return;
                              this.openAt(i);
                            }}
                          >
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
                              const track = e.currentTarget.closest(`.${this.decorateCSS("track")}`) as HTMLElement | null;
                              track?.classList.add("paused");
                            }}
                            onMouseLeave={(e) => {
                              const track = e.currentTarget.closest(`.${this.decorateCSS("track")}`) as HTMLElement | null;
                              track?.classList.remove("paused");
                            }}
                            onClick={() => {
                              if (this.isDragging) return;
                              if (this.dragMoved) return;
                              if (performance.now() < this.clickSuppressUntil) return;
                              this.openAt(topLen + i);
                            }}
                          >
                            <img className={this.decorateCSS("image")} src={it.image} alt="" loading="lazy" draggable={false} />
                          </div>
                        ))}
                      </div>
                      <div className={this.decorateCSS("track__inner")}>
                        {imagesBottom.map((it, i) => (
                          <div
                            key={`bot-b-${i}`}
                            className={this.decorateCSS("image-child")}
                            onMouseEnter={(e) => {
                              const track = e.currentTarget.closest(`.${this.decorateCSS("track")}`) as HTMLElement | null;
                              track?.classList.add("paused");
                            }}
                            onMouseLeave={(e) => {
                              const track = e.currentTarget.closest(`.${this.decorateCSS("track")}`) as HTMLElement | null;
                              track?.classList.remove("paused");
                            }}
                            onClick={() => {
                              if (this.isDragging) return;
                              if (this.dragMoved) return;
                              if (performance.now() < this.clickSuppressUntil) return;
                              this.openAt(topLen + i);
                            }}
                          >
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
      </div>
    );
  }
}

export default ImageGallery11;