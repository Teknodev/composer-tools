import React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials16.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseSlider } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";

interface Icon {
  icon: { type: string; name: string };
  link: string;
}

class Testimonials16 extends Testimonials {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Hear from Duda’s customers",
    });

    this.addProp({
      type: "array",
      key: "links",
      displayer: "Links",
      value: [
        {
          type: "object",
          key: "link",
          displayer: "Link",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Read reviews",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon or Image",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaCheckCircle" },
            },
            { type: "page", key: "url", displayer: "URL", value: "" },
          ],
        },
        {
          type: "object",
          key: "link",
          displayer: "Link",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "All success stories",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon or Image",
              additionalParams: { availableTypes: ["icon", "image"] },
              value: { type: "icon", name: "FaCheckCircle" },
            },
            { type: "page", key: "url", displayer: "URL", value: "" },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "testimonials",
      displayer: "Testimonials",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Testimonial",
          value: [
            {
              type: "image",
              key: "logoImage",
              displayer: "Logo (Image)",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147e9f3596a1002b257167?alt=media",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147a873596a1002b2568ec?alt=media",
            },
            {
              type: "string",
              key: "quote",
              displayer: "Quote",
              value:
                "Blinkpage is a great option for agencies looking to leverage AI in their website building.",
            },
            {
              type: "string",
              key: "author",
              displayer: "Author",
              value: "Owain Williams",
            },
            { type: "string", key: "role", displayer: "Role", value: "Editor" },
            {
              type: "string",
              key: "company",
              displayer: "Company",
              value: "TechRadar",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Testimonial",
          value: [
            {
              type: "image",
              key: "logoImage",
              displayer: "Logo (Image)",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147ef33596a1002b257280?alt=media",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147ab13596a1002b256929?alt=media",
            },
            {
              type: "string",
              key: "quote",
              displayer: "Quote",
              value:
                "Blinkpage’s AI Assistant should save us 3 to 6 hours on most websites.",
            },
            {
              type: "string",
              key: "author",
              displayer: "Author",
              value: "Nat Rosasco",
            },
            {
              type: "string",
              key: "role",
              displayer: "Role",
              value: "Principal",
            },
            {
              type: "string",
              key: "company",
              displayer: "Company",
              value: "Olive Street Design",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Testimonial",
          value: [
            {
              type: "image",
              key: "logoImage",
              displayer: "Logo (Image)",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147f283596a1002b25733b?alt=media",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147acd3596a1002b256950?alt=media",
            },
            {
              type: "string",
              key: "quote",
              displayer: "Quote",
              value:
                "If I can give my clients value—even if they don’t have the budget—I will. Blinkpage’s AI tools make that possible.",
            },
            {
              type: "string",
              key: "author",
              displayer: "Author",
              value: "Josh Neimark",
            },
            { type: "string", key: "role", displayer: "Role", value: "CEO" },
            {
              type: "string",
              key: "company",
              displayer: "Company",
              value: "Fix8",
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Testimonials 16";
  }

  render() {
    const links = this.castToObject<Icon[]>("links");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("header")}>
            <Base.SectionTitle>{this.getPropValue("title")}</Base.SectionTitle>
            {links.length > 0 && (
              <div className={this.decorateCSS("links")}>
                {links.map((icons: Icon) => {
                  return (
                    icons.icon && (
                      <ComposerLink path={icons.link}>
                        <Base.P>{icons.link}</Base.P>
                        <Base.Media
                          value={icons.icon}
                          className={this.decorateCSS("icon-item")}
                        />
                      </ComposerLink>
                    )
                  );
                })}
              </div>
            )}
          </div>
          <div className={this.decorateCSS("slider")}></div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials16;
