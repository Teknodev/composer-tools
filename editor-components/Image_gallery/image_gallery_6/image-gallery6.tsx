import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery6.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "../../../composer-base-components/base/base";
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
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("left-container")}>
              {galleries.map((item: GalleryItem, index: number) => {
                if (index % 2 === 0) {
                  return (
                    <div className={`${this.decorateCSS("images")} ${(index / 2) % 2 === 0 ? this.decorateCSS("large-image") : this.decorateCSS("small-image")}`}>
                      <div className={this.decorateCSS("image-wrapper")}>
                        <img src={item.image} alt={item.image} className={this.decorateCSS("image")} />
                        <div className={this.decorateCSS("badge")}>
                        </div>
                        <div className={this.decorateCSS("badge-container")}>

                          <div className={this.decorateCSS("text-container")}>
                            <div className={this.decorateCSS("title")}>
                              {item.title}
                            </div>
                            <div className={this.decorateCSS("bottom-container")}>

                              <div className={this.decorateCSS("description")}>
                                {item.description}
                              </div>
                              <button className={this.decorateCSS("button")}></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            <div className={this.decorateCSS("right-container")}>
              {galleries.map((item: GalleryItem, index: number) => {
                if (index % 2 === 1) {
                  return (
                    <div className={`${this.decorateCSS("images")} ${((index - 1) / 2) % 2 === 0 ? this.decorateCSS("small-image") : this.decorateCSS("large-image")}`}>
                      <div className={this.decorateCSS("image-wrapper")}>
                        <img src={item.image} alt={item.image} className={this.decorateCSS("image")} />
                        <div className={this.decorateCSS("badge")}>
                        </div>
                        <div className={this.decorateCSS("badge-container")}>

                          <div className={this.decorateCSS("text-container")}>
                            <div className={this.decorateCSS("title")}>
                              {item.title}
                            </div>
                            <div className={this.decorateCSS("bottom-container")}>

                              <div className={this.decorateCSS("description")}>
                                {item.description}
                              </div>
                              <button className={this.decorateCSS("button")}></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}

            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ImageGalleryComponent6;