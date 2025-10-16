import * as React from "react";
import { BaseImageGallery, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./image-gallery11.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type TImage = { image: string; title?: string; imageLink: string };

class ImageGallery11 extends BaseImageGallery {
  constructor(props?: any) {
    super(props, styles);
    this.initializeProps();
  }

  static getName(): string {
    return "Image Gallery 11";
  }

  // State
  private modalVisible = false;
  private modalIndex = 0;
  private zoom = 1;
  private panX = 0;
  private panY = 0;
  private isPanning = false;
  private panStartX = 0;
  private panStartY = 0;
  private baseScale = 1;

  // Drag state
  private isDragging = false;
  private dragMoved = false;
  private dragThreshold = 5;
  private clickSuppressUntil = 0;
  private startX = 0;
  private activeTrack: HTMLDivElement | null = null;
  private startDragOffset = 0;
  private activeWrap: HTMLDivElement | null = null;

  // Refs
  private canvasRef = React.createRef<HTMLDivElement>();
  private closeBtnRef = React.createRef<HTMLButtonElement>();
  private trackRefs: React.RefObject<HTMLDivElement>[] = [];
  private wrapRefs: React.RefObject<HTMLDivElement>[] = [];
  private innerARefs: React.RefObject<HTMLDivElement>[] = [];

  // Props tanımlama fonksiyonu
  private initializeProps() {
    this.addProp({
      type: "image",
      key: "bg-image",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/689af25436675f002db98b79?alt=media",
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
      value: "As the studiocontinues to grow, our artists grow alongside it. We may be small, but everyone here is a jack-of-all-trades.",
    });

    this.addProp({ type: "icon", key: "close-icon", displayer: "Close Icon", value: "GrClose" });
    this.addProp({ type: "icon", key: "nav-prev-icon", displayer: "Nav Prev Icon", value: "IoIosArrowBack" });
    this.addProp({ type: "icon", key: "nav-next-icon", displayer: "Nav Next Icon", value: "IoIosArrowForward" });
    this.addProp({ type: "icon", key: "zoom-out-icon", displayer: "Zoom Out Icon", value: "TfiZoomOut" });
    this.addProp({ type: "icon", key: "zoom-in-icon", displayer: "Zoom in Icon", value: "TfiZoomIn" });

    this.addProp({
      type: "array",
      key: "gallery-rows",
      displayer: "Gallery Rows",
      value: this.getDefaultGalleryRows() as TypeUsableComponentProps[],
    });
  }

  // Varsayılan galeri satırları oluşturma
  private getDefaultGalleryRows(): TypeUsableComponentProps[] {
    const createImage = (url: string, title: string) => ({
      type: "object",
      key: "item",
      displayer: "Image",
      value: [
        { type: "image", key: "image", displayer: "Image", value: url },
        { type: "string", key: "image-title", displayer: "Image Title", value: title },
      ],
    });

    const row1Images = [
      "689b16de36675f002db9baf2", "689b177536675f002db9bbfe", "689b17fb36675f002db9bcd0",
      "689b186b36675f002db9bdb5", "689b188936675f002db9bde7", "689b18be36675f002db9be9c",
      "689b18f336675f002db9bf2a", "689b191b36675f002db9bffd"
    ].map((id, i) => createImage(
      `https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/${id}?alt=media`,
      `blog_${i + 1}`
    ));

    const row2Images = [
      "689b1a6036675f002db9c11e", "689b1a9836675f002db9c143", "689b1aba36675f002db9c164",
      "689b1ad836675f002db9c1cf", "689b1aff36675f002db9c2f3", "689b1c1e36675f002db9c57f",
      "689b1c4636675f002db9c592", "689b188936675f002db9bde7"
    ].map((id, i) => createImage(
      `https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/${id}?alt=media`,
      `photo-${i + 1}`
    ));

    return [
      { type: "object", key: "row", displayer: "Row 1", value: [{ type: "array", key: "images", displayer: "Images", value: row1Images }] as any },
      { type: "object", key: "row", displayer: "Row 2", value: [{ type: "array", key: "images", displayer: "Images", value: row2Images }] as any },
    ] as TypeUsableComponentProps[];
  }

  // Bileşen yükleme
  componentDidMount(): void {
    this.setLoopWidths();
    window.addEventListener("resize", this.handleResize);
    document.addEventListener("keydown", this.onKeyDown);
  }

  // Bileşen güncelleme
  componentDidUpdate(): void {
    this.setLoopWidths();
  }

  // Bileşen kaldırma
  componentWillUnmount(): void {
    window.removeEventListener("resize", this.handleResize);
    document.removeEventListener("keydown", this.onKeyDown);
    this.cleanupModal();
  }

  // Ekran boyutu değişim işleyici
  private handleResize = () => {
    this.setLoopWidths();
    if (this.modalVisible) {
      this.baseScale = this.computeCoverScale();
      this.clampPan();
      this.forceUpdate();
    }
  };

  // Boolean değer dönüştürme
  private asBool(v: any): boolean {
    if (typeof v === "boolean") return v;
    if (typeof v === "number") return v !== 0;
    if (typeof v === "string") {
      const s = v.trim().toLowerCase();
      return s === "true" || s === "1" || s === "yes" || s === "on";
    }
    return false;
  }

  // Sayfa kaydırmasını engelleme
  private preventScroll = (e: Event) => e.preventDefault();

  // Satır verilerini alma
  private getRows(): { images: TImage[] }[] {
    const rowsData = this.castToObject<any[]>("gallery-rows") || [];
    return rowsData.map((rowData: any) => {
      const imagesProp = Array.isArray(rowData.value)
        ? rowData.value.find((p: any) => p.key === "images")
        : null;
      const images = (imagesProp?.value || [])
        .map((it: any) => {
          const arr = Array.isArray(it?.value) ? it.value : [];
          const image = arr.find((x: any) => x.key === "image")?.value || "";
          const title = arr.find((x: any) => x.key === "image-title")?.value || "";
          return image ? ({ image, title, imageLink: "" } as TImage) : null;
        })
        .filter(Boolean) as TImage[];
      return { images };
    });
  }

  // Tüm görselleri alma
  private getAllImages(): TImage[] {
    return this.getRows().flatMap(row => row.images);
  }

  // Döngü genişliklerini ayarlama
  private setLoopWidths = () => {
    this.trackRefs.forEach((trackRef, index) => {
      const innerARef = this.innerARefs[index];
      if (trackRef.current && innerARef.current) {
        const W = innerARef.current.scrollWidth;
        trackRef.current.style.setProperty("--loopW", `${W}px`);
      }
    });
  };

  // Sürükleme pozisyonunu normalleştirme
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

  // İmleç pozisyonu alma
  private getClientPosition(e: React.MouseEvent | React.TouchEvent): { x: number; y: number } {
    return 'touches' in e
      ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
      : { x: (e as React.MouseEvent).clientX, y: (e as React.MouseEvent).clientY };
  }

  // Sürükleme başlatma
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

  // Sürükleme hareketi
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

  // Sürükleme bitirme
  private onDragEnd = () => {
    if (!this.isDragging) return;
    this.isDragging = false;

    if (this.activeWrap) {
      this.activeWrap.classList.remove(this.decorateCSS('dragging'));

      if (this.activeTrack) {
        this.normalizeDrag(this.activeWrap, this.activeTrack);

        // Boşlukları önlemek için animasyonu sıfırla
        this.activeTrack.classList.remove(this.decorateCSS("track"));
        void this.activeTrack.offsetWidth; // Yeniden akışı zorla
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

  // İzleme parçasını durdurma/devam ettirme
  private toggleTrackPause(trackElement: HTMLElement | null, pause: boolean) {
    trackElement?.classList.toggle("paused", pause);
  }

  // Modal açma
  private openAt = (absIndex: number) => {
    this.modalIndex = absIndex;
    this.modalVisible = true;
    this.baseScale = this.computeCoverScale();
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;

    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", this.preventScroll, { passive: false });
    window.addEventListener("touchmove", this.preventScroll, { passive: false });

    this.forceUpdate();
    requestAnimationFrame(() => {
      this.clampPan();
      this.forceUpdate();
      this.closeBtnRef.current?.focus();
    });
  };

  // Modal kapatma
  private closeModal = () => {
    this.modalVisible = false;
    this.cleanupModal();
    this.forceUpdate();
  };

  // Modal temizleme
  private cleanupModal() {
    document.body.style.overflow = "";
    window.removeEventListener("wheel", this.preventScroll);
    window.removeEventListener("touchmove", this.preventScroll);
  }

  // Sonraki görsel
  private next = () => {
    const total = this.getAllImages().length;
    if (!total) return;
    this.modalIndex = (this.modalIndex + 1) % total;
    this.resetZoomAndPan();
  };

  // Önceki görsel
  private prev = () => {
    const total = this.getAllImages().length;
    if (!total) return;
    this.modalIndex = (this.modalIndex - 1 + total) % total;
    this.resetZoomAndPan();
  };

  // Zoom ve kaydırmayı sıfırlama
  private resetZoomAndPan() {
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
    this.forceUpdate();
  }

  // ===== Zoom & Pan =====
  // Yakınlaştırma durumunu değiştirme
  private toggleZoom = () => {
    this.zoom = this.zoom > 1 ? 1 : 2;
    this.panX = 0;
    this.panY = 0;
    this.forceUpdate();
  };

  // Kapsayıcı ölçeği hesaplama
  private computeCoverScale = (): number => {
    const canvas = this.canvasRef.current;
    const imgEl = canvas?.querySelector(`.${this.decorateCSS("lightbox-img")}`) as HTMLImageElement | null;
    if (!canvas || !imgEl || !imgEl.naturalWidth || !imgEl.naturalHeight) return 2;

    const { width: cW, height: cH } = canvas.getBoundingClientRect();
    const nW = imgEl.naturalWidth, nH = imgEl.naturalHeight;

    const rW = cW / nW;
    const rH = cH / nH;
    return Math.max(rW, rH) / Math.min(rW, rH);
  };

  // Kaydırma sınırlarını ayarlama
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

    const maxX = scaledW <= cW ? 0 : (scaledW - cW) / 2;
    const maxY = scaledH <= cH ? 0 : (scaledH - cH) / 2;

    this.panX = Math.round(Math.max(-maxX, Math.min(maxX, this.panX)));
    this.panY = Math.round(Math.max(-maxY, Math.min(maxY, this.panY)));
  }

  // Kaydırma başlatma
  private onPanStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (this.zoom <= 1) return;
    const { x, y } = this.getClientPosition(e);
    this.isPanning = true;
    this.panStartX = x - this.panX;
    this.panStartY = y - this.panY;
    (e as any).preventDefault?.();
    this.forceUpdate();
  };

  // Kaydırma hareketi
  private onPanMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!this.isPanning) return;
    const { x, y } = this.getClientPosition(e);

    const canvas = this.canvasRef.current;
    const imgEl = canvas?.querySelector(`.${this.decorateCSS("lightbox-img")}`) as HTMLImageElement | null;

    if (canvas && imgEl && imgEl.naturalWidth && imgEl.naturalHeight) {
      const { width: cW, height: cH } = canvas.getBoundingClientRect();
      const contain = Math.min(cW / imgEl.naturalWidth, cH / imgEl.naturalHeight);
      const z = Math.max(1, this.zoom);
      const scaledW = imgEl.naturalWidth * contain * z;
      const scaledH = imgEl.naturalHeight * contain * z;
      const maxX = scaledW <= cW ? 0 : (scaledW - cW) / 2;
      const maxY = scaledH <= cH ? 0 : (scaledH - cH) / 2;

      this.panX = Math.max(-maxX, Math.min(maxX, x - this.panStartX));
      this.panY = Math.max(-maxY, Math.min(maxY, y - this.panStartY));
    }

    (e as any).preventDefault?.();
    this.forceUpdate();
  };

  // Kaydırma bitirme
  private onPanEnd = () => {
    this.isPanning = false;
    const canvas = this.canvasRef.current;
    canvas?.classList.add(this.decorateCSS("snapping"));
    this.clampPan();
    this.forceUpdate();
    setTimeout(() => canvas?.classList.remove(this.decorateCSS("snapping")), 160);
  };

  // Görsel yükleme tamamlandı
  private onImgLoad = () => {
    if (!this.modalVisible) return;
    this.baseScale = this.computeCoverScale();
    this.clampPan();
    this.forceUpdate();
  };

  // Klavye tuş olayları
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
  // Tıklama bastırılmalı mı kontrolü
  private shouldSuppressClick(): boolean {
    return this.isPanning || this.dragMoved || performance.now() < this.clickSuppressUntil;
  }

  // Görsel izleme parçası oluşturma
  private renderImageTrack(images: TImage[], rowIndex: number, imageOffset: number) {
    // Sabit animasyon süresi
    const duration = 400; // Sabit, çok yavaş animasyon süresi

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
            {this.renderTrackInner(images, rowIndex, imageOffset, "a")}
            {this.renderTrackInner(images, rowIndex, imageOffset, "b")}
          </div>
        </div>
      </div>
    );
  }

  // İç parça oluşturma
  private renderTrackInner(images: TImage[], rowIndex: number, imageOffset: number, suffix: string) {
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
  }

  // Modal penceresi oluşturma
  private renderModal(allImages: TImage[], active: TImage) {
    const total = allImages.length;
    const imgStyle = this.getImageStyle(active);

    return (
      <Base.Overlay isVisible={true} className={this.decorateCSS("modal-overlay")}>
        <div
          className={`${this.decorateCSS("lightbox")} ${this.zoom > 1 ? this.decorateCSS("is-zoomed") : ""}`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div className={`${this.decorateCSS("nav")} ${this.decorateCSS("prev")}`} onClick={this.prev}>
            <Base.Icon propsIcon={{ className: this.decorateCSS("nav-prev-icon") }} name={this.getPropValue("nav-prev-icon")} />
          </div>

          <div
            ref={this.canvasRef}
            className={this.decorateCSS("lightbox-canvas")}
            onMouseDown={this.zoom > 1 ? undefined : this.onPanStart}
            onMouseMove={this.zoom > 1 ? undefined : this.onPanMove}
            onMouseUp={this.zoom > 1 ? undefined : this.onPanEnd}
            onMouseLeave={this.zoom > 1 ? undefined : this.onPanEnd}
            onTouchStart={this.zoom > 1 ? undefined : this.onPanStart}
            onTouchMove={this.zoom > 1 ? undefined : this.onPanMove}
            onTouchEnd={this.zoom > 1 ? undefined : this.onPanEnd}
            onDoubleClick={this.toggleZoom}
          >
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
              {active?.title && <div className={this.decorateCSS("title-badge")}>{active.title}</div>}

              {this.renderModalButton("close-btn", "Close", this.closeModal, this.getPropValue("close-icon"))}
              {this.renderModalButton("zoom-btn", this.zoom > 1 ? "Zoom out" : "Zoom in", this.toggleZoom,
                this.zoom > 1 ? this.getPropValue("zoom-out-icon") : this.getPropValue("zoom-in-icon")
              )}
            </div>
          </div>

          <button
            className={`${this.decorateCSS("side-hit")} ${this.decorateCSS("left")}`}
            onClick={() => !this.shouldSuppressClick() && this.prev()}
            aria-label="Previous image"
            disabled={this.zoom > 1}
          />
          <button
            className={`${this.decorateCSS("side-hit")} ${this.decorateCSS("right")}`}
            onClick={() => !this.shouldSuppressClick() && this.next()}
            aria-label="Next image"
            disabled={this.zoom > 1}
          />

          <div className={`${this.decorateCSS("nav")} ${this.decorateCSS("next")}`} onClick={this.next}>
            <Base.Icon propsIcon={{ className: this.decorateCSS("nav-next-icon") }} name={this.getPropValue("nav-next-icon")} />
          </div>
        </div>
      </Base.Overlay>
    );
  }

  // Modal butonları oluşturma
  private renderModalButton(className: string, label: string, onClick: () => void, iconName: string) {
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
  }

  // Görsel stil ayarlarını hesaplama
  private getImageStyle(active: TImage): React.CSSProperties {
    const baseStyle: React.CSSProperties = {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain"
    };

    if (this.zoom <= 1 || !this.canvasRef.current || !active) {
      return baseStyle;
    }

    const canvas = this.canvasRef.current;
    const imgEl = canvas.querySelector(`.${this.decorateCSS("lightbox-img")}`) as HTMLImageElement | null;
    const naturalW = imgEl?.naturalWidth || 800;
    const naturalH = imgEl?.naturalHeight || 600;
    const scale = Math.min(canvas.clientWidth / naturalW, canvas.clientHeight / naturalH);

    return {
      width: `${naturalW * scale}px`,
      height: `${naturalH * scale}px`,
      objectFit: "contain",
      maxWidth: "100%",
      maxHeight: "100%"
    };
  }

  // Ana render fonksiyonu
  render() {
    const rows = this.getRows();
    this.trackRefs = rows.map((_, i) => this.trackRefs[i] || React.createRef());
    this.wrapRefs = rows.map((_, i) => this.wrapRefs[i] || React.createRef());
    this.innerARefs = rows.map((_, i) => this.innerARefs[i] || React.createRef());

    const allImages = this.getAllImages();
    const active = allImages[this.modalIndex];

    const backgroundImage = this.castToString(this.getPropValue("bg-image"));
    const hasBackgroundImage = !!backgroundImage;
    const overlayEnabled = this.asBool(this.getPropValue("bg-overlay-enabled"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));

    const containerStyle: React.CSSProperties = hasBackgroundImage ? {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center 150%",
      backgroundRepeat: "no-repeat",
    } : {};

    return (
      <div className={this.decorateCSS("container-bg")}>
        <Base.Container
          isFull
          className={this.decorateCSS("container")}
          data-has-bg={hasBackgroundImage}
          data-modal-open={this.modalVisible}
          data-overlay-enabled={overlayEnabled && hasBackgroundImage}
          style={containerStyle}
        >
          {hasBackgroundImage && (
            <div className={this.decorateCSS("bg-wrap")}>
              <div className={this.decorateCSS("bg-image")} style={containerStyle} />
              {overlayEnabled && <div className={this.decorateCSS("bg-overlay")} />}
            </div>
          )}

          {this.modalVisible && allImages.length > 0 && this.renderModal(allImages, active)}

          {(title || description) && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              {title && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
              {description && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
            </Base.VerticalContent>
          )}

          {rows.length > 0 && (
            <div className={this.decorateCSS("gallery")}>
              {rows.map((row, rowIndex) => {
                if (row.images.length === 0) return null;
                const imageOffset = rows.slice(0, rowIndex).reduce((acc, r) => acc + r.images.length, 0);
                return this.renderImageTrack(row.images, rowIndex, imageOffset);
              })}
            </div>
          )}
        </Base.Container>
      </div>
    );
  }
}

export default ImageGallery11;