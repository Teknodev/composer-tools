import * as React from "react";
import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./hero-section36.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type ImageItem = {
  image: TypeMediaInputValue | undefined;
};

class HeroSection36 extends BaseHeroSection {
  private carouselRef = React.createRef<HTMLDivElement>();
  private animationFrameId: number | null = null;
  private currentOffset = 0;

  constructor(props?: unknown) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Text",
      value: "Trusted by thousands from worldwide",
    });

    this.addProp({
      type: "array",
      key: "image-items",
      displayer: "Images",
      value: [
        {
          type: "object",
          key: "items1",
          displayer: "Header",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://cdn.prod.website-files.com/676eb533fc85a4a340e80a98/676eb533fc85a4a340e80ae0_slider%20img%201-min.webp",
              },
            },
          ],
        },
        {
          type: "object",
          key: "items4",
          displayer: "Header",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "video",
                url: "https://cdn.website.hautech.ai/cdn/4%20actual%20size.mp4",
                settings: {
                  loop: true,
                  autoplay: true,
                  controls: false,
                },
              },
            },
          ],
        },
        {
          type: "object",
          key: "items3",
          displayer: "Header",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://cdn.prod.website-files.com/676eb533fc85a4a340e80a98/676eb533fc85a4a340e80add_slider%20img%203-min.webp",
              },
            },
          ],
        },
        {
          type: "object",
          key: "items5",
          displayer: "Header",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://cdn.prod.website-files.com/676eb533fc85a4a340e80a98/676eb533fc85a4a340e80ae1_slider%20img%205-min.webp",
              },
            },
          ],
        },
        {
          type: "object",
          key: "items8",
          displayer: "Header",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: { availableTypes: ["image", "video"] },
              value: {
                type: "image",
                url: "https://cdn.prod.website-files.com/676eb533fc85a4a340e80a98/676eb533fc85a4a340e80ae6_slider%20img%2010-min.webp",
              },
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Hero Section 36";
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentWillUnmount() {
    this.stopAnimation();
  }

  startAnimation = () => {
    const speed = 0.3; // pixels per frame
    const animate = () => {
      this.currentOffset += speed;
      this.updateCarousel();
      this.animationFrameId = requestAnimationFrame(animate);
    };
    this.animationFrameId = requestAnimationFrame(animate);
  };

  stopAnimation = () => {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  };

  updateCarousel = () => {
    const carousel = this.carouselRef.current;
    if (!carousel) return;

    const items = carousel.querySelectorAll('[data-carousel-item]') as NodeListOf<HTMLElement>;
    // smaller spacing between items to tighten the gaps
    const itemWidth = 260;
    const totalItems = items.length;
    const totalWidth = itemWidth * totalItems;

    // Reset offset when it exceeds total width
    if (this.currentOffset >= totalWidth) {
      this.currentOffset = 0;
    }

    items.forEach((item, index) => {
      const basePosition = index * itemWidth;
      let position = basePosition - this.currentOffset;

      // Wrap around for infinite effect
      if (position < -itemWidth) {
        position += totalWidth;
      }
      if (position > totalWidth - itemWidth) {
        position -= totalWidth;
      }

      // Calculate distance from center (0 = center)
      const containerWidth = carousel.offsetWidth;
      const centerX = containerWidth / 2;
      const itemCenterX = position + itemWidth / 2;
      const distanceFromCenter = itemCenterX - centerX; // px distance from center

      // Normalize distance (-1 to 1 range, where 0 is center)
      const maxDistance = containerWidth / 2 + itemWidth;
      const normalizedDistance = Math.max(-1, Math.min(1, distanceFromCenter / maxDistance));

      // CURVE BACKWARDS (concave): make center only slightly back and push sides forward more
      const centerDepth = 80; // center pushed back by up to 80px
      const sideForward = 160; // sides come forward up to +160px
      // interpolate so center is negative, sides are positive
      const translateZ = -centerDepth * (1 - Math.abs(normalizedDistance)) + sideForward * Math.abs(normalizedDistance);

      // Stronger rotation on sides to increase curve appearance (inverted sign for concave look)
      const rotateY = -normalizedDistance * 80; // up to ~80deg at sides

      // Scale: center slightly smaller, sides larger to accentuate curve
      const scale = 0.8 + Math.abs(normalizedDistance) * 0.3; // center ~0.8 -> sides ~1.1

      // Opacity: sides more visible
      const opacity = 0.75 + Math.abs(normalizedDistance) * 0.25; // center ~0.75 -> sides ~1.0

      // Z-index so sides render above center (higher for larger abs distance)
      const zIndex = Math.round(Math.abs(normalizedDistance) * 100);

      // TranslateX relative to centered left:50% anchor
      const translateX = distanceFromCenter;

      // Use translateX(-50%) to center each item at left:50% then offset by distance
      item.style.transform = `translateX(-50%) translateX(${translateX}px) perspective(1200px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`;
      item.style.opacity = String(Math.max(0, Math.min(1, opacity)));
      item.style.zIndex = String(zIndex);
    });
  };

  render() {
    const title = this.castToString(this.getPropValue("title"));
    const originalImageArray =
      this.castToObject<ImageItem[]>("image-items") || [];

    const images: ImageItem[] = [];

    // Duplicate images to ensure enough items for the carousel
    if (originalImageArray.length > 0) {
      const minItems = 12;
      const repeats = Math.ceil(minItems / originalImageArray.length);
      for (let x = 0; x < repeats; x++) {
        images.push(...originalImageArray);
      }
    }

    return (
      <Base.Container isFull={true} className={this.decorateCSS("container")}>
        {title && (
          <Base.VerticalContent className={this.decorateCSS("heading")}>
            <Base.H6 className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </Base.H6>
          </Base.VerticalContent>
        )}

        {images.length > 0 && (
          <div className={this.decorateCSS("gallery")}>
            <div
              ref={this.carouselRef}
              className={this.decorateCSS("carousel-3d")}
            >
              {images.map((img, idx) => (
                <div
                  key={idx}
                  data-carousel-item
                  className={this.decorateCSS("carousel-item")}
                >
                  <Base.Media
                    value={img.image}
                    className={this.decorateCSS("carousel-media")}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Base.Container>
    );
  }
}

export default HeroSection36;
