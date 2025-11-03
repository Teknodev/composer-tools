import * as React from "react";
import { BaseImageGallery, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./image-gallery11.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type ImageType = {
  image: string;
  imageTitle: React.JSX.Element;
};

type GalleryRowType = {
  images: ImageType[];
};

class ImageGallery11 extends BaseImageGallery {
  constructor(props?: any) {
    super(props, styles);
    this.initializeProps();
  }

  static getName(): string {
    return "Image Gallery 11";
  }

  private modalVisible = false;
  private modalIndex = 0;
  private zoom = 1;

  private isDragging = false;
  private dragMoved = false;
  private dragThreshold = 5;
  private clickSuppressUntil = 0;
  private startX = 0;
  private activeTrack: HTMLDivElement | null = null;
  private startDragOffset = 0;
  private activeWrap: HTMLDivElement | null = null;

  private canvasRef = React.createRef<HTMLDivElement>();
  private closeBtnRef = React.createRef<HTMLButtonElement>();
  private trackRefs: React.RefObject<HTMLDivElement>[] = [];
  private wrapRefs: React.RefObject<HTMLDivElement>[] = [];
  private innerARefs: React.RefObject<HTMLDivElement>[] = [];

  private initializeProps() {
    this.addProp({
      type: "image",
      key: "bgImage",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689af25436675f002db98b79?alt=media",
    });

    this.addProp({
      type: "boolean",
      key: "bgOverlayEnabled",
      displayer: "Overlay",
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
      displayer: "Description",
      value: "As the studiocontinues to grow, our artists grow alongside it. We may be small, but everyone here is a jack-of-all-trades.",
    });

    this.addProp({ type: "icon", key: "closeIcon", displayer: "Close Icon", value: "GrClose" });
    this.addProp({ type: "icon", key: "navPrevIcon", displayer: "Nav Prev Icon", value: "IoIosArrowBack" });
    this.addProp({ type: "icon", key: "navNextIcon", displayer: "Nav Next Icon", value: "IoIosArrowForward" });
    this.addProp({ type: "icon", key: "zoomOutIcon", displayer: "Zoom Out Icon", value: "TfiZoomOut" });
    this.addProp({ type: "icon", key: "zoomInIcon", displayer: "Zoom In Icon", value: "TfiZoomIn" });

    this.addProp({
      type: "array",
      key: "galleryRows",
      displayer: "Gallery Rows",
      value: [
        {
          type: "object",
          key: "row",
          displayer: "Row 1",
          value: [
            {
              type: "array",
              key: "images",
              displayer: "Images",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Image 1-1",
                  value: [
                    { type: "image", key: "image", displayer: "Image", value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b16de36675f002db9baf2?alt=media" },
                    { type: "string", key: "imageTitle", displayer: "Image Title", value: "Image 1-1" }
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Image 1-2",
                  value: [
                    { type: "image", key: "image", displayer: "Image", value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b177536675f002db9bbfe?alt=media" },
                    { type: "string", key: "imageTitle", displayer: "Image Title", value: "Image 1-2" }
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Image 1-3",
                  value: [
                    { type: "image", key: "image", displayer: "Image", value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b17fb36675f002db9bcd0?alt=media" },
                    { type: "string", key: "imageTitle", displayer: "Image Title", value: "Image 1-3" }
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Image 1-4",
                  value: [
                    { type: "image", key: "image", displayer: "Image", value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b186b36675f002db9bdb5?alt=media" },
                    { type: "string", key: "imageTitle", displayer: "Image Title", value: "Image 1-4" }
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Image 1-5",
                  value: [
                    { type: "image", key: "image", displayer: "Image", value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b188936675f002db9bde7?alt=media" },
                    { type: "string", key: "imageTitle", displayer: "Image Title", value: "Image 1-5" }
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Image 1-6",
                  value: [
                    { type: "image", key: "image", displayer: "Image", value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b18be36675f002db9be9c?alt=media" },
                    { type: "string", key: "imageTitle", displayer: "Image Title", value: "Image 1-6" }
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Image 1-7",
                  value: [
                    { type: "image", key: "image", displayer: "Image", value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b18f336675f002db9bf2a?alt=media" },
                    { type: "string", key: "imageTitle", displayer: "Image Title", value: "Image 1-7" }
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Image 1-8",
                  value: [
                    { type: "image", key: "image", displayer: "Image", value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b191b36675f002db9bffd?alt=media" },
                    { type: "string", key: "imageTitle", displayer: "Image Title", value: "Image 1-8" }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: "object",
          key: "row",
          displayer: "Row 2",
          value: [
            {
              type: "array",
              key: "images",
              displayer: "Images",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Image 2-1",
                  value: [
                    { type: "image", key: "image", displayer: "Image", value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1a6036675f002db9c11e?alt=media" },
                    { type: "string", key: "imageTitle", displayer: "Image Title", value: "Image 2-1" }
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Image 2-2",
                  value: [
                    { type: "image", key: "image", displayer: "Image", value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1a9836675f002db9c143?alt=media" },
                    { type: "string", key: "imageTitle", displayer: "Image Title", value: "Image 2-2" }
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Image 2-3",
                  value: [
                    { type: "image", key: "image", displayer: "Image", value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1aba36675f002db9c164?alt=media" },
                    { type: "string", key: "imageTitle", displayer: "Image Title", value: "Image 2-3" }
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Image 2-4",
                  value: [
                    { type: "image", key: "image", displayer: "Image", value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1ad836675f002db9c1cf?alt=media" },
                    { type: "string", key: "imageTitle", displayer: "Image Title", value: "Image 2-4" }
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Image 2-5",
                  value: [
                    { type: "image", key: "image", displayer: "Image", value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1aff36675f002db9c2f3?alt=media" },
                    { type: "string", key: "imageTitle", displayer: "Image Title", value: "Image 2-5" }
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Image 2-6",
                  value: [
                    { type: "image", key: "image", displayer: "Image", value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1c1e36675f002db9c57f?alt=media" },
                    { type: "string", key: "imageTitle", displayer: "Image Title", value: "Image 2-6" }
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Image 2-7",
                  value: [
                    { type: "image", key: "image", displayer: "Image", value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b1c4636675f002db9c592?alt=media" },
                    { type: "string", key: "imageTitle", displayer: "Image Title", value: "Image 2-7" }
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Image 2-8",
                  value: [
                    { type: "image", key: "image", displayer: "Image", value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689b188936675f002db9bde7?alt=media" },
                    { type: "string", key: "imageTitle", displayer: "Image Title", value: "Image 2-8" }
                  ]
                }
              ]
            }
          ]
        }
      ] as TypeUsableComponentProps[],
    });
  }

  componentDidMount(): void {
    this.setLoopWidths();
    window.addEventListener("resize", this.handleResize);
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentDidUpdate(): void {
    this.setLoopWidths();
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.handleResize);
    document.removeEventListener("keydown", this.onKeyDown);
    this.cleanupModal();
  }

  private handleResize = () => {
    this.setLoopWidths();
    if (this.modalVisible) {
      this.forceUpdate();
    }
  };
  private preventScroll = (e: Event) => e.preventDefault();

  private getRows(): GalleryRowType[] {
    const rowsData = this.castToObject<any[]>("galleryRows") || [];
    return rowsData.map((row: any) => {
      const images: ImageType[] = (row.images || []).map((img: any) => {
        if (img.getPropValue) {
          return {
            image: img.getPropValue('image', img.value),
            imageTitle: img.getPropValue('imageTitle', img.value)
          };
        } else if (img.value && Array.isArray(img.value)) {
          const image = img.value.find((x: any) => x.key === 'image')?.value || '';
          const imageTitle = img.value.find((x: any) => x.key === 'imageTitle')?.value || '';
          return { image, imageTitle };
        } else {
          return { image: '', imageTitle: '' };
        }
      });
      return {
        images: images.filter((img) => img.image)
      } as GalleryRowType;
    }).filter((row: GalleryRowType) => row.images.length > 0);
  }

  private getAllImages(): ImageType[] {
    return this.getRows().flatMap(row => row.images);
  }

  private setLoopWidths = () => {
    this.trackRefs.forEach((trackRef, index) => {
      const innerARef = this.innerARefs[index];
      if (trackRef.current && innerARef.current) {
        const W = innerARef.current.scrollWidth;
        trackRef.current.style.setProperty("--loopW", `${W}px`);
      }
    });
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

  private getClientPosition(e: React.MouseEvent | React.TouchEvent): { x: number; y: number } {
    return 'touches' in e
      ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
      : { x: (e as React.MouseEvent).clientX, y: (e as React.MouseEvent).clientY };
  }

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
    const { x } = this.getClientPosition(e);
    this.startX = x;
    const current = getComputedStyle(wrap).getPropertyValue('--drag').trim();
    this.startDragOffset = parseFloat(current || '0') || 0;
    wrap.classList.add(this.decorateCSS('dragging'));
  };

  private onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!this.isDragging || !this.activeWrap || !this.activeTrack) return;
    const { x } = this.getClientPosition(e);
    const delta = x - this.startX;
    const next = this.startDragOffset + delta;
    if (Math.abs(delta) >= this.dragThreshold) this.dragMoved = true;
    this.activeWrap.style.setProperty('--drag', `${next}px`);
    this.normalizeDrag(this.activeWrap, this.activeTrack);
    (e as any).preventDefault?.();
  };

  private onDragEnd = () => {
    if (!this.isDragging) return;
    this.isDragging = false;

    if (this.activeWrap) {
      this.activeWrap.classList.remove(this.decorateCSS('dragging'));

      if (this.activeTrack) {
        this.normalizeDrag(this.activeWrap, this.activeTrack);
        this.activeTrack.classList.remove(this.decorateCSS("track"));
        void this.activeTrack.offsetWidth;
        this.activeTrack.classList.add(this.decorateCSS("track"));
      }
    }

    if (this.dragMoved) {
      this.clickSuppressUntil = performance.now() + 350;
    }

    this.dragMoved = false;
    this.activeWrap = null;
    this.activeTrack = null;
  };

  private toggleTrackPause(trackElement: HTMLElement | null, pause: boolean) {
    trackElement?.classList.toggle(this.decorateCSS("paused"), pause);
  }

  private openAt = (absIndex: number) => {
    this.modalIndex = absIndex;
    this.modalVisible = true;
    this.zoom = 1;

    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", this.preventScroll, { passive: false });
    window.addEventListener("touchmove", this.preventScroll, { passive: false });

    this.forceUpdate();
    requestAnimationFrame(() => {
      this.forceUpdate();
      this.closeBtnRef.current?.focus();
    });
  };

  private closeModal = () => {
    this.modalVisible = false;
    this.cleanupModal();
    this.forceUpdate();
  };

  private cleanupModal() {
    document.body.style.overflow = "";
    window.removeEventListener("wheel", this.preventScroll);
    window.removeEventListener("touchmove", this.preventScroll);
  }

  private next = () => {
    const total = this.getAllImages().length;
    if (!total) return;
    this.modalIndex = (this.modalIndex + 1) % total;
    this.resetZoomAndPan();
  };

  private prev = () => {
    const total = this.getAllImages().length;
    if (!total) return;
    this.modalIndex = (this.modalIndex - 1 + total) % total;
    this.resetZoomAndPan();
  };

  private resetZoomAndPan() {
    this.zoom = 1;
    this.forceUpdate();
  }

  private toggleZoom = () => {
    this.zoom = this.zoom > 1 ? 1 : 2;
    this.forceUpdate();
  };

  private onImgLoad = () => {
    if (!this.modalVisible) return;
    this.forceUpdate();
  };

  private onKeyDown = (e: KeyboardEvent) => {
    if (!this.modalVisible) return;

    const keyActions: Record<string, () => void> = {
      "Escape": this.closeModal,
      "ArrowRight": this.next,
      "ArrowLeft": this.prev,
      " ": () => { e.preventDefault(); this.toggleZoom(); },
      "Enter": () => { e.preventDefault(); this.toggleZoom(); }
    };

    keyActions[e.key]?.();
  };

  private shouldSuppressClick(): boolean {
    return this.dragMoved || performance.now() < this.clickSuppressUntil;
  }

  render() {
    const rows = this.getRows();
    this.trackRefs = rows.map((_, i) => this.trackRefs[i] || React.createRef());
    this.wrapRefs = rows.map((_, i) => this.wrapRefs[i] || React.createRef());
    this.innerARefs = rows.map((_, i) => this.innerARefs[i] || React.createRef());

    const allImages = this.getAllImages();
    const active = allImages[this.modalIndex];

    const backgroundImage = this.castToString(this.getPropValue("bgImage"));
    const hasBackgroundImage = !!backgroundImage;
    const overlayEnabled = this.getPropValue("bgOverlayEnabled");

    const title = this.getPropValue("title");
    const isTitleExist = this.castToString(title);

    const description = this.getPropValue("description");
    const isDescriptionExist = this.castToString(description);

    const renderTrackInner = (images: ImageType[], rowIndex: number, imageOffset: number, suffix: string) => {
      if (!images || images.length === 0) {
        return null;
      }

      const minImages = 20;
      const repeatCount = Math.ceil(minImages / images.length);
      const repeatedImages = Array(repeatCount).fill(images).flat();

      return (
        <div ref={suffix === "a" ? this.innerARefs[rowIndex] : undefined} className={this.decorateCSS("track__inner")} aria-hidden={suffix === "b"}>
          {repeatedImages.map((it, i) => {
            const originalIndex = i % images.length;
            return (
              <div
                key={`row-${rowIndex}-${suffix}-${i}`}
                className={this.decorateCSS("image-child")}
                style={{ willChange: 'transform' }}
                onMouseEnter={(e) => this.toggleTrackPause(e.currentTarget.closest(`.${this.decorateCSS("track")}`) as HTMLElement, true)}
                onMouseLeave={(e) => this.toggleTrackPause(e.currentTarget.closest(`.${this.decorateCSS("track")}`) as HTMLElement, false)}
                onClick={() => !this.shouldSuppressClick() && this.openAt(imageOffset + originalIndex)}
              >
                <img className={this.decorateCSS("image")} src={it.image} alt="" draggable={false} />
              </div>
            );
          })}
        </div>
      );
    };

    const renderImageTrack = (images: ImageType[], rowIndex: number, imageOffset: number) => {
      const duration = 400;
      return (
        <div
          key={rowIndex}
          className={this.decorateCSS("row")}
          onMouseDown={(e) => this.onDragStart(e, this.wrapRefs[rowIndex], this.trackRefs[rowIndex])}
          onMouseMove={this.onDragMove}
          onMouseUp={this.onDragEnd}
          onMouseLeave={this.onDragEnd}
          onTouchStart={(e) => this.onDragStart(e, this.wrapRefs[rowIndex], this.trackRefs[rowIndex])}
          onTouchMove={this.onDragMove}
          onTouchEnd={this.onDragEnd}
        >
          <div ref={this.wrapRefs[rowIndex]} className={this.decorateCSS("drag-wrap")}>
            <div
              ref={this.trackRefs[rowIndex]}
              className={this.decorateCSS("track")}
              style={{ "--speed": `${duration}s` } as React.CSSProperties}
            >
              {renderTrackInner(images, rowIndex, imageOffset, "a")}
              {renderTrackInner(images, rowIndex, imageOffset, "b")}
            </div>
          </div>
        </div>
      );
    };

    const renderModalButton = (className: string, label: string, onClick: () => void, iconName: string) => {
      const stopEvents = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        e.preventDefault();
      };

      return (
        <button
          ref={className === "close-btn" ? this.closeBtnRef : undefined}
          type="button"
          className={this.decorateCSS(className)}
          aria-label={label}
          title={label}
          onMouseDown={stopEvents}
          onMouseUp={stopEvents}
          onTouchStart={stopEvents}
          onTouchEnd={stopEvents}
          onPointerDown={stopEvents}
          onClick={(e) => { stopEvents(e); onClick(); }}
        >
          <Base.Icon propsIcon={{ className: this.decorateCSS("zoom-icon") }} name={iconName} />
        </button>
      );
    };

    const renderModal = (allImages: ImageType[], active: ImageType) => {
      const total = allImages.length;
      const displayTitle = this.castToString(active?.imageTitle || "");

      return (
        <Base.Overlay isVisible={true}>
          <div
            className={`${this.decorateCSS("lightbox")} ${this.zoom > 1 ? this.decorateCSS("is-zoomed") : ""}`}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <div className={`${this.decorateCSS("nav")} ${this.decorateCSS("prev")}`} onClick={this.prev}>
              <Base.Icon propsIcon={{ className: this.decorateCSS("nav-prev-icon") }} name={this.getPropValue("navPrevIcon")} />
            </div>
            <div
              ref={this.canvasRef}
              className={this.decorateCSS("lightbox-canvas")}
              onDoubleClick={this.toggleZoom}
            >
              <div className={this.decorateCSS("lightbox-img-wrap")}>
                <img
                  className={this.decorateCSS("lightbox-img")}
                  src={active.image}
                  draggable={false}
                  onLoad={this.onImgLoad}
                />
                <div className={this.decorateCSS("counter-badge")}>
                  {this.modalIndex + 1}/{total}
                </div>
                {displayTitle ? (
                  <div className={this.decorateCSS("image-title")}>
                    {displayTitle}
                  </div>
                ) : null}

                {renderModalButton("close-btn", "Close", this.closeModal, this.getPropValue("closeIcon"))}
                {renderModalButton("zoom-btn", this.zoom > 1 ? "Zoom out" : "Zoom in", this.toggleZoom,
                  this.zoom > 1 ? this.getPropValue("zoomOutIcon") : this.getPropValue("zoomInIcon")
                )}
              </div>
            </div>
            <div className={`${this.decorateCSS("nav")} ${this.decorateCSS("next")}`} onClick={this.next}>
              <Base.Icon propsIcon={{ className: this.decorateCSS("nav-next-icon") }} name={this.getPropValue("navNextIcon")} />
            </div>
          </div>
        </Base.Overlay>
      );
    };

    return (
      <div className={this.decorateCSS("container-bg")}>
        <Base.Container
          isFull
          className={this.decorateCSS("container")}
          data-has-bg={hasBackgroundImage}
          data-modal-open={this.modalVisible}
          data-overlay-enabled={overlayEnabled && hasBackgroundImage}
          style={{ backgroundImage: `url(${this.getPropValue("bgImage")})` }}
        >
          {hasBackgroundImage && (
            <div className={this.decorateCSS("bg-wrap")}>
              <div style={{ backgroundImage: `url(${this.getPropValue("bgImage")})` }} className={this.decorateCSS("bg-image")} />
            </div>
          )}

          {this.modalVisible && allImages.length > 0 && renderModal(allImages, active)}

          {(isTitleExist || isDescriptionExist) && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
              {isDescriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}

          {rows.length > 0 && (
            <div className={this.decorateCSS("gallery")}>
              {rows.map((row, rowIndex) => {
                if (row.images.length === 0) return null;
                const imageOffset = rows.slice(0, rowIndex).reduce((acc, r) => acc + r.images.length, 0);
                return renderImageTrack(row.images, rowIndex, imageOffset);
              })}
            </div>
          )}
        </Base.Container>
      </div>
    );
  }
}

export default ImageGallery11;