import React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials16.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseSlider } from "../../EditorComponent";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type Links = {
  text: React.JSX.Element;
  textUrl: string;
  arrow: { type: string; name: string };
};

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
              type: "page",
              key: "textUrl",
              displayer: "URL",
              value: "",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Latest News",
            },
            {
              type: "media",
              key: "arrow",
              displayer: "Arrow",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "LuArrowUpRight",
              },
            },
          ],
        },
        {
          type: "object",
          key: "link",
          displayer: "Link",
          value: [
            {
              type: "page",
              key: "textUrl",
              displayer: "URL",
              value: "",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Latest News",
            },
            {
              type: "media",
              key: "arrow",
              displayer: "Arrow",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "LuArrowUpRight",
              },
            },
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
              type: "media",
              key: "logoImage",
              displayer: "Logo Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147e9f3596a1002b257167?alt=media",
              },
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147a873596a1002b2568ec?alt=media",
              },
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
              type: "media",
              key: "logoImage",
              displayer: "Logo Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147ef33596a1002b257280?alt=media",
              },
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147ab13596a1002b256929?alt=media",
              },
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
              type: "media",
              key: "logoImage",
              displayer: "Logo Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147f283596a1002b25733b?alt=media",
              },
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69147acd3596a1002b256950?alt=media",
              },
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

    this.addProp({
      type: "media",
      key: "prev-button-icon",
      displayer: "Previous Slide Button",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "FaArrowLeft",
      },
    });
    this.addProp({
      type: "media",
      key: "next-button-icon",
      displayer: "Next Slide Button",
      additionalParams: {
        availableTypes: ["icon"],
      },
      value: {
        type: "icon",
        name: "FaArrowRight",
      },
    });
  }

  static getName(): string {
    return "Testimonials 16";
  }

  render() {
    const testimonials = this.castToObject<any>("testimonials");
    const title = this.getPropValue("title");
    const links = this.castToObject<Links>("links");
    const prevIcon: string = this.getPropValue("prev-button-icon");
    const nextIcon: string = this.getPropValue("next-button-icon");

    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 725,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 868,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 500,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      beforeChange: (current: number, next: number) => {
        this.setComponentState("active", next);
        this.setComponentState("activeSlideIndex", next);
      },
    };

    console.log(testimonials);
    return (
      <div>
        <div>null</div>
      </div>
    );
  }
}

export default Testimonials16;
