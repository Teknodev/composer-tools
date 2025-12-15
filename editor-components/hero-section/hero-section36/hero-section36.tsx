import { BaseHeroSection, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./hero-section36.module.scss";
import { Base } from "../../../composer-base-components/base/base";

type ImageItem = {
  image: TypeMediaInputValue | undefined;
};

class HeroSection36 extends BaseHeroSection {
  private animationRef: number | null = null;
  private translateX: number = 0;
  private containerRef: HTMLDivElement | null = null;

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
    if (this.containerRef) {
      this.forceUpdate();
    }
    // this.startAnimation();
  }

  componentWillUnmount() {
    if (this.animationRef) {
      cancelAnimationFrame(this.animationRef);
    }
  }

  private startAnimation = () => {
    const animate = () => {
      this.translateX -= 1; // Move slides to the left
      this.forceUpdate(); // Trigger re-render for animation
      this.animationRef = requestAnimationFrame(animate);
    };
    this.animationRef = requestAnimationFrame(animate);
  };

  render() {
    const title = this.castToString(this.getPropValue("title"));
    const originalImageArray =
      this.castToObject<ImageItem[]>("image-items") || [];

    const images: ImageItem[] = [];

    if (originalImageArray.length > 0) {
      // Create enough images for seamless loop
      for (let x = 0; x < Math.ceil(15 / originalImageArray.length); x++) {
        images.push(...originalImageArray);
      }
    }
    
    const imageWidth = 300; // Width of each image + gap
    const totalWidth = images.length * imageWidth;
    
    // Reset position for seamless loop
    if (Math.abs(this.translateX) >= totalWidth / 2) {
      this.translateX = 0;
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
          <div 
            className={this.decorateCSS("gallery")}
            ref={(ref) => { this.containerRef = ref; }}
          >
            <div className={this.decorateCSS("panoramic-track")}>
              {images.map((img, idx) => {
                // Calculate horizontal position
                const basePosition = idx * imageWidth + this.translateX;
                const containerWidth = this.containerRef?.offsetWidth || 1920;
                const centerX = containerWidth / 2;
                
                // Normalize position relative to center
                const relativePosition = basePosition - centerX + imageWidth / 2;
                const normalizedPos = relativePosition / (containerWidth / 2);
                
                // Panoramic curve calculations
                const rotateY = normalizedPos * -30; // Max 30 degrees rotation at edges
                // const translateZ = Math.abs(normalizedPos) * 20; // Push back at edges
                const scale = 1 + Math.abs(normalizedPos) * 0.15; 
                const opacity = 1 - Math.abs(normalizedPos) * 0.5; // Fade at edges

                return (
                  <div
                    className={this.decorateCSS("image-child")}
                    key={idx}
                    style={{
                      transform: `translateX(${basePosition}px)`,
                      opacity: Math.max(0.3, opacity),
                    }}
                  >
                    <div
                      style={{
                        transform: `perspective(1000px) rotateY(${rotateY}deg)  scale(${Math.max(0.6, scale)})`,
                      }}
                    >
                      <Base.Media
                        value={img.image}
                        className={this.decorateCSS("image")}
                      />
                    </div>
                  </div>
                );
              })}
              {/* Duplicate set for seamless loop */}
              {images.map((img, idx) => {
                const basePosition = (idx + images.length) * imageWidth + this.translateX;
                const containerWidth = this.containerRef?.offsetWidth || 1920;
                const centerX = containerWidth / 2;
                
                const relativePosition = basePosition - centerX + imageWidth / 2;
                const normalizedPos = relativePosition / (containerWidth / 2);
                
                const rotateY = normalizedPos * -30;
                // const translateZ = Math.abs(normalizedPos) * 20;
                const scale = 1 + Math.abs(normalizedPos) * 0.15; 
                const opacity = 1 - Math.abs(normalizedPos) * 0.5;
                
                return (
                  <div
                    className={this.decorateCSS("image-child")}
                    key={`dup-${idx}`}
                    style={{
                      transform: `translateX(${basePosition}px)`,
                      opacity: Math.max(0.3, opacity),
                    }}
                  >
                    <div
                      style={{
                        transform: `perspective(1000px) rotateY(${rotateY}deg) `,
                      }}
                    >
                      <Base.Media
                        value={img.image}
                        className={this.decorateCSS("image")}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Base.Container>
    );
  }
}

export default HeroSection36;
