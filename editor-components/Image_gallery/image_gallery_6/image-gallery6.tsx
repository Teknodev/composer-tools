import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery6.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
interface GalleryItem {
  image: string,
  badge: JSX.Element,
  title: JSX.Element,
  description: JSX.Element,
  buttonText: JSX.Element,
  url: string
}

class ImageGalleryComponent6 extends BaseImageGallery {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "galleries",
      displayer: "Galleries",
      value: [
        {
          type: "object",
          key: "gallery",
          displayer: "Gallery",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/671618cab4a116002cfc6451?alt=media",
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "ARCHITECTURE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "INTERIOR DESIGN STUDIO",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "START A PROJECT",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Join this plan",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "gallery",
          displayer: "Gallery",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67161927b4a116002cfc6483?alt=media",
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "ARCHITECTURE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "INTERIOR DESIGN STUDIO",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "START A PROJECT",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Join this plan",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "gallery",
          displayer: "Gallery",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:

                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67161e2bb4a116002cfc66fd?alt=media",
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "ARCHITECTURE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "INTERIOR DESIGN STUDIO",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "START A PROJECT",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Join this plan",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "gallery",
          displayer: "Gallery",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6716195ab4a116002cfc64c8?alt=media",
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "ARCHITECTURE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "INTERIOR DESIGN STUDIO",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "START A PROJECT",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Join this plan",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "gallery",
          displayer: "Gallery",
          value: [
            {
              type: "image",
              key: "Image",
              displayer: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67161e87b4a116002cfc671a?alt=media",
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "ARCHITECTURE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "INTERIOR DESIGN STUDIO",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "START A PROJECT",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Join this plan",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "gallery",
          displayer: "Gallery",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67161ea2b4a116002cfc6726?alt=media",
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "ARCHITECTURE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "INTERIOR DESIGN STUDIO",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "START A PROJECT",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Join this plan",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "gallery",
          displayer: "Gallery",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67161ebeb4a116002cfc6733?alt=media",
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "ARCHITECTURE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "INTERIOR DESIGN STUDIO",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "START A PROJECT",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Join this plan",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "gallery",
          displayer: "Gallery",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67164553b4a116002cfc7280?alt=media",
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "ARCHITECTURE",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "INTERIOR DESIGN STUDIO",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "START A PROJECT",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Join this plan",
            },
            {
              type: "page",
              key: "url",
              displayer: "Link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Image Gallery 6";
  }

  render() {
    const galleries = this.castToObject<GalleryItem[]>("galleries");
    console.log("galleries", galleries[0].title)

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {galleries.map((item: GalleryItem, index: number) => {
              const position = (index % 4) + 1;
              const smallCard = position === 2 || position === 3;
              const left = (index % 2) === 0;
              return (
                <div className={left ? this.decorateCSS("left-container") : this.decorateCSS("right-container")}>
                  <div className={`${this.decorateCSS("images")} ${smallCard ? this.decorateCSS("small-image") : this.decorateCSS("large-image")}`}>
                    <div className={this.decorateCSS("image-wrapper")}>
                      <img src={item.image} alt={item.image} />
                    </div>
                  </div>
                </div>

              )

            })}
            {/* {galleries.map((item: any, index: number) => {
              const position = (index % 4) + 1;
              const smallCard = position === 2 || position === 3;
              <img src={item.value[0]} className={this.decorateCSS("image")}>
              </img>
            })
              // galleries
              //   .filter((_: unknown, index: number) => index % 2 === 0)
              //   .map((item: any, index: number) => (
              // <div key={index} className={`${this.decorateCSS("images")} ${index % 2 === 0 ? this.decorateCSS("large-image") : this.decorateCSS("small-image")}`}>
              //   <div className={this.decorateCSS("image-wrapper")}>
              //     <img src={item.value[0].value} alt={`Gallery Image ${index + 1}`} />
              //     <div className={this.decorateCSS("badge")}>
              //       {item.value[1]?.value}
              //     </div>
              //   </div>
              //   <div className={this.decorateCSS("title")}>
              //     {item.value[2]?.value}
              //   </div>
              //   <div className={this.decorateCSS("description")}>
              //     {item.value[3]?.value}
              //   </div>
              //   <div className={this.decorateCSS("button")}>
              //     {item.value[4]?.value}
              //   </div>
              // </div>
              // ))
            } */}
          </div>

          {/* <div className={this.decorateCSS("right-content")}>
            {galleries
              .filter((_: unknown, index: number) => index % 2 === 1)
              .map((item: any, index: number) => (
                <div key={index} className={`${this.decorateCSS("images")} ${index % 2 === 0 ? this.decorateCSS("large-image") : this.decorateCSS("small-image")}`}>
                  <div className={this.decorateCSS("image-wrapper")}>
                    <img src={item.value[0].value} alt={`Gallery Image ${index + 1}`} />
                    <div className={this.decorateCSS("badge")}>
                      {item.value[1]?.value}
                    </div>
                  </div>
                  <div className={this.decorateCSS("title")}>
                    {item.value[2]?.value}
                  </div>
                  <div className={this.decorateCSS("description")}>
                    {item.value[3]?.value}
                  </div>
                  <div className={this.decorateCSS("button")}>
                    {item.value[4]?.value}
                  </div>
                </div>
              ))}
          </div> */}
        </div>
      </div>
    );
  }
}

export default ImageGalleryComponent6;