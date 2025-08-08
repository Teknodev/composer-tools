import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery11.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type TImage = { image: string; imageLink: string };

class ImageGallery11 extends BaseImageGallery {
  constructor(props?: any) {
    super(props, styles);

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
        { type: "object", 
            key: "item", 
            displayer: "Image", 
            value: [
                { 
                    type: "image", 
                    key: "image", 
                    displayer: "Image", 
                    value: "https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
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
                    value: "https://storage.oyungezer.com.tr/ogz-public/public/content/2017/6/24/image_49823.jpg" 
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
                    value: "https://media.istockphoto.com/id/1223390381/tr/fotoğraf/bilgisayar-oyunu-oynayan-bir-adam.jpg?s=612x612&w=is&k=20&c=N2701VPn5EnkioajMwVQjIROlblVIgqGBMifFAe15rc=" 
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
                    value: "https://www.shutterstock.com/image-photo/man-living-room-playing-video-600nw-2513322953.jpg" 
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
                    value: "https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg" 
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
                    value: "https://st4.depositphotos.com/1177973/20514/i/450/depositphotos_205146616-stock-photo-video-game-controller-dark-background.jpg"                
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
                    value: "https://media.istockphoto.com/id/1393796813/tr/fotoğraf/friends-playing-computer-game.jpg?s=612x612&w=0&k=20&c=QKWozH5FKD5_-1TuvPsqvP0s7lxFouRW98gTjTQh1Q8=" 
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
                    value: "https://st3.depositphotos.com/3335375/31801/i/450/depositphotos_318014980-stock-photo-man-hands-playing-computer-game.jpg" 
                }  ] 
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
                    value: "https://www.atombilisim.com.tr/Data/img/blogPost/0/tr_img_2_20.jpg" 
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
                    value: "https://us.123rf.com/450wm/aldiozz/aldiozz1712/aldiozz171200077/92187806-hands-with-a-gamepad.jpg?ver=6"
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
                    value: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
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
                    value: "https://cms-assets.xboxservices.com/assets/30/51/3051219c-789f-4cb6-9a82-b20d1e66c2f8.jpg?n=5229005_Image-0_767x431_03.jpg" 
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
                    value: "https://www.guvenliweb.org.tr/dosya/betuD.jpg" 
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
                    value: "https://cdn1.ntv.com.tr/gorsel/ol7gZiGGMEWKQeeO5_d_Yg.jpg?width=1000&mode=both&scale=both&v=1528192353958"                
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
                    value: "https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603118_640.jpg" 
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
                    value: "https://media.istockphoto.com/id/1560833158/tr/fotoğraf/game-controller-with-purple-lit-keyboard-amidst-various-wireless-devices.jpg?s=612x612&w=0&k=20&c=AE23kOJn0C0B5k9zjx6i225YgMzVTSOSoS8vBEbvx00=" 
                }  ] 
        },
      ],
    });
  }

static getName(): string { return "Image Gallery 11"; }

private modalVisible = false;
private modalImageSrc = "";

private topRowRef = React.createRef<HTMLDivElement>();
private botRowRef = React.createRef<HTMLDivElement>();
private topTrackRef = React.createRef<HTMLDivElement>();
private botTrackRef = React.createRef<HTMLDivElement>();
private topWrapRef = React.createRef<HTMLDivElement>();
private botWrapRef = React.createRef<HTMLDivElement>();

private isDragging = false;
private dragMoved = false;
private startX = 0;
private startScrollLeft = 0;
private activeRow: HTMLDivElement | null = null;
private activeTrack: HTMLDivElement | null = null;
private startDragOffset = 0;
private activeWrap: HTMLDivElement | null = null;

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

  render() {
  const getImagesFromProp = (propKey: string) => {
    const raw = this.castToObject<any[]>(propKey) || [];
    return raw
      .map((it: any) => {
        const arr = Array.isArray(it?.value) ? it.value : [];
        const img = (arr.find((x: any) => x.key === "image") || {}).value || "";
        return { image: img, imageLink: "" } as TImage;
      })
      .filter((x) => x.image);
  };

  let imagesTop = getImagesFromProp("image-items-top");
  let imagesBottom = getImagesFromProp("image-items-bottom");
  if (!imagesTop.length && !imagesBottom.length) {
    const all = getImagesFromProp("image-items");
    imagesTop = all.filter((_, i) => i % 2 === 0);
    imagesBottom = all.filter((_, i) => i % 2 === 1);
  }

  const isTitleExists = this.castToString(this.getPropValue("title"));
  const isDescriptionExists = this.castToString(this.getPropValue("description"));

  const row1Speed = "100s";
  const row2Speed = "100s";

  return (
    <Base.Container isFull={true} className={this.decorateCSS("container")}>

      {this.modalVisible && (
        <div
          className={this.decorateCSS("modal-overlay")}
          onClick={() => { this.modalVisible = false; this.forceUpdate(); }}
        >
          <div className={this.decorateCSS("modal-content")} onClick={(e) => e.stopPropagation()}>
            <button
              className={this.decorateCSS("modal-close")}
              onClick={() => { this.modalVisible = false; this.forceUpdate(); }}
            >
              ×
            </button>
            <img src={this.modalImageSrc} alt="Modal View" />
          </div>
        </div>
      )}

      {(isTitleExists || isDescriptionExists) && (
        <Base.VerticalContent className={this.decorateCSS("heading")}>
          {isTitleExists && (
            <Base.SectionTitle className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </Base.SectionTitle>
          )}
          {isDescriptionExists && (
            <Base.SectionDescription className={this.decorateCSS("description")}>
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
                        onClick={() => {
                          if (this.dragMoved) return;
                          this.modalImageSrc = it.image;
                          this.modalVisible = true;
                          this.forceUpdate();
                        }}
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
                        onClick={() => {
                          if (this.dragMoved) return;
                          this.modalImageSrc = it.image;
                          this.modalVisible = true;
                          this.forceUpdate();
                        }}
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
