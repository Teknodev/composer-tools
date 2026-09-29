import { ReactNode } from "react";
import { BaseNavigator, TypeMediaInputValue } from "../../EditorComponent";
import React from "react";
import styles from "./navbar6.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

interface Logo {
  // `defaultLogo` keeps the original keys; `absoluteLogo` was made unique with a
  // prefix by the unique-prop-key rename. currentLogo can be either, so it holds
  // both shapes (optional) and is normalized before use.
  image?: TypeMediaInputValue;
  navigateTo?: string;
  absoluteLogo_image?: TypeMediaInputValue;
  absoluteLogo_navigateTo?: string;
}

interface Icon {
  icon: TypeMediaInputValue;
  page: string;
}

interface MenuItem {
  title: React.JSX.Element;
  navigate_to: string;
  menuType?: "Dropdown" | "Mega" | "Normal";
  sub_item_badge: React.JSX.Element;
  sub_item_media?: TypeMediaInputValue;
  sub_item_description: React.JSX.Element;
  sub_item_button?: INPUTS.CastedButton;
  sub_sub_item_badge: React.JSX.Element;
  sub_sub_item_media?: TypeMediaInputValue;
  sub_sub_item_description: React.JSX.Element;
  sub_items: MenuItem[];
}

interface Language {
  label: "code" | "name";
  language_icon: TypeMediaInputValue;
  showLanguage: boolean;
  showLocalizationAlways: boolean;
  showDivider: boolean;
}

class Navbar6 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Type"));

    this.addProp({
      type: "object",
      key: "defaultLogo",
      displayer: "Default Logo",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Image",
          additionalParams: {
            availableTypes: ["image"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67769b510655f8002cafc965?alt=media&timestamp=1735826277716",
          },
        },
        {
          type: "page",
          key: "navigateTo",
          value: "",
          displayer: "Navigate To",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "absoluteLogo",
      displayer: "Absolute Logo",
      value: [
        {
          type: "media",
          key: "absoluteLogo_image",
          displayer: "Image",
          additionalParams: {
            availableTypes: ["image"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67769b510655f8002cafc964?alt=media&timestamp=1735826277716",
          },
        },
        {
          type: "page",
          key: "absoluteLogo_navigateTo",
          value: "",
          displayer: "Navigate To",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "menuItems",
      displayer: "Menu",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Home",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "select",
              key: "menuType",
              displayer: "Type",
              value: "Mega",
              additionalParams: { selectItems: ["Dropdown", "Mega", "Normal"] },
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Default",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "sub_item_media",
                      displayer: "Media",
                      additionalParams: { availableTypes: ["image", "video"] },
                      value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a383502f8a5b002ce6aa53?alt=media" },
                    },
                    {
                      type: "string",
                      key: "sub_item_description",
                      displayer: "Description",
                      value: "",
                    },
                    INPUTS.BUTTON("sub_item_button", "Button", "", "", null, null, "Primary"),
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Real Estate",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "sub_item_media",
                      displayer: "Media",
                      additionalParams: { availableTypes: ["image", "video"] },
                      value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a383962f8a5b002ce6aa92?alt=media" },
                    },
                    {
                      type: "string",
                      key: "sub_item_description",
                      displayer: "Description",
                      value: "",
                    },
                    INPUTS.BUTTON("sub_item_button", "Button", "", "", null, null, "Primary"),
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Decor",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "sub_item_media",
                      displayer: "Media",
                      additionalParams: { availableTypes: ["image", "video"] },
                      value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a383c62f8a5b002ce6aac7?alt=media" },
                    },
                    {
                      type: "string",
                      key: "sub_item_description",
                      displayer: "Description",
                      value: "",
                    },
                    INPUTS.BUTTON("sub_item_button", "Button", "", "", null, null, "Primary"),
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Retail",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "sub_item_media",
                      displayer: "Media",
                      additionalParams: { availableTypes: ["image", "video"] },
                      value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a383fd2f8a5b002ce6aae3?alt=media" },
                    },
                    {
                      type: "string",
                      key: "sub_item_description",
                      displayer: "Description",
                      value: "",
                    },
                    INPUTS.BUTTON("sub_item_button", "Button", "", "", null, null, "Primary"),
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Shop",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "select",
              key: "menuType",
              displayer: "Type",
              value: "Mega",
              additionalParams: { selectItems: ["Dropdown", "Mega", "Normal"] },
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Shop Layouts",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "sub_item_media",
                      displayer: "Media",
                      additionalParams: { availableTypes: ["image", "video"] },
                      value: { type: "image", url: "" },
                    },
                    {
                      type: "string",
                      key: "sub_item_description",
                      displayer: "Description",
                      value: "",
                    },
                    INPUTS.BUTTON("sub_item_button", "Button", "", "", null, null, "Primary"),
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Filters Area",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "AJAX Shop",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Hidden Sidebar",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "Hot",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "No Page Heading",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Products List View",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Load More Button",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Hover Design",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "Effects",
                    },
                    {
                      type: "media",
                      key: "sub_item_media",
                      displayer: "Media",
                      additionalParams: { availableTypes: ["image", "video"] },
                      value: { type: "image", url: "" },
                    },
                    {
                      type: "string",
                      key: "sub_item_description",
                      displayer: "Description",
                      value: "",
                    },
                    INPUTS.BUTTON("sub_item_button", "Button", "", "", null, null, "Primary"),
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "All Info On Hover",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Icons & Add To Cart",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Icons On Hover",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Quick Shop",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Full Info On Image",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Button On Image",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Products Styles",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "sub_item_media",
                      displayer: "Media",
                      additionalParams: { availableTypes: ["image", "video"] },
                      value: { type: "image", url: "" },
                    },
                    {
                      type: "string",
                      key: "sub_item_description",
                      displayer: "Description",
                      value: "",
                    },
                    INPUTS.BUTTON("sub_item_button", "Button", "", "", null, null, "Primary"),
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Even Product Grid",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Products Color Scheme",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Products Background",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "New",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Products Shadow",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Show SKU",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Advanced Variable Products With Swatches",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "sub_item_media",
                      displayer: "Media",
                      additionalParams: { availableTypes: ["image", "video"] },
                      value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669dfff22f8a5b002ce60115?alt=media" },
                    },
                    {
                      type: "string",
                      key: "sub_item_description",
                      displayer: "Description",
                      value: "Products variations colors and images without any additional plugins.",
                    },
                    INPUTS.BUTTON("sub_item_button", "Button", "View More", "", null, null, "Primary"),
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Blog",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "select",
              key: "menuType",
              displayer: "Type",
              value: "Mega",
              additionalParams: { selectItems: ["Dropdown", "Mega", "Normal"] },
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Theme Elements",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "Features",
                    },
                    {
                      type: "media",
                      key: "sub_item_media",
                      displayer: "Media",
                      additionalParams: { availableTypes: ["image", "video"] },
                      value: { type: "image", url: "" },
                    },
                    {
                      type: "string",
                      key: "sub_item_description",
                      displayer: "Description",
                      value: "",
                    },
                    INPUTS.BUTTON("sub_item_button", "Button", "", "", null, null, "Primary"),
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Alternative",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Small Images",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Blog Chess",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Masonry Grid",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Meta On Image",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Blog Flat",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Theme Elements",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "Examples",
                    },
                    {
                      type: "media",
                      key: "sub_item_media",
                      displayer: "Media",
                      additionalParams: { availableTypes: ["image", "video"] },
                      value: { type: "image", url: "" },
                    },
                    {
                      type: "string",
                      key: "sub_item_description",
                      displayer: "Description",
                      value: "",
                    },
                    INPUTS.BUTTON("sub_item_button", "Button", "", "", null, null, "Primary"),
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Post Example #1",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Post Example #2",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Post Example #3",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Post Example #4",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Post Example #5",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Post Example #6",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Recent Posts",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "sub_item_media",
                      displayer: "Media",
                      additionalParams: { availableTypes: ["image", "video"] },
                      value: { type: "image", url: "" },
                    },
                    {
                      type: "string",
                      key: "sub_item_description",
                      displayer: "Description",
                      value: "",
                    },
                    INPUTS.BUTTON("sub_item_button", "Button", "", "", null, null, "Primary"),
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Collar Brings Back Coffee Brewing Ritual",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00122f8a5b002ce60121?alt=media" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "No Comments",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Green Interior Design Inspiration",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e003a2f8a5b002ce6012d?alt=media" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "No Comments",
                            },
                          ],
                        },
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "Minimalist Living Room Ideas",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e005b2f8a5b002ce60139?alt=media" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "No Comments",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Portfolio",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "select",
              key: "menuType",
              displayer: "Type",
              value: "Normal",
              additionalParams: { selectItems: ["Dropdown", "Mega", "Normal"] },
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "sub_item_media",
                      displayer: "Media",
                      additionalParams: { availableTypes: ["image", "video"] },
                      value: { type: "image", url: "" },
                    },
                    {
                      type: "string",
                      key: "sub_item_description",
                      displayer: "Description",
                      value: "",
                    },
                    INPUTS.BUTTON("sub_item_button", "Button", "", "", null, null, "Primary"),
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "About Us",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "select",
              key: "menuType",
              displayer: "Type",
              value: "Normal",
              additionalParams: { selectItems: ["Dropdown", "Mega", "Normal"] },
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "sub_item_media",
                      displayer: "Media",
                      additionalParams: { availableTypes: ["image", "video"] },
                      value: { type: "image", url: "" },
                    },
                    {
                      type: "string",
                      key: "sub_item_description",
                      displayer: "Description",
                      value: "",
                    },
                    INPUTS.BUTTON("sub_item_button", "Button", "", "", null, null, "Primary"),
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Contact Us",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "select",
              key: "menuType",
              displayer: "Type",
              value: "Normal",
              additionalParams: { selectItems: ["Dropdown", "Mega", "Normal"] },
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item",
                  displayer: "Sub Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "navigate_to",
                      displayer: "Navigate To",
                      value: "",
                    },
                    {
                      type: "string",
                      key: "sub_item_badge",
                      displayer: "Badge",
                      value: "",
                    },
                    {
                      type: "media",
                      key: "sub_item_media",
                      displayer: "Media",
                      additionalParams: { availableTypes: ["image", "video"] },
                      value: { type: "image", url: "" },
                    },
                    {
                      type: "string",
                      key: "sub_item_description",
                      displayer: "Description",
                      value: "",
                    },
                    INPUTS.BUTTON("sub_item_button", "Button", "", "", null, null, "Primary"),
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items",
                      value: [
                        {
                          type: "object",
                          key: "sub_item",
                          displayer: "Sub Item",
                          value: [
                            {
                              type: "string",
                              key: "title",
                              displayer: "Title",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate To",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "icons",
      displayer: "Icons",
      value: [
        {
          type: "object",
          key: "icons_item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "BiLogoFacebookCircle",
              },
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icons_item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaTwitter",
              },
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icons_item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaInstagram",
              },
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "icons_item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaLinkedin",
              },
            },
            {
              type: "page",
              key: "page",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "language",
      displayer: "Language Settings",
      value: [
        {
          type: "select",
          key: "label",
          displayer: "Label",
          value: "code",
          additionalParams: {
            selectItems: ["code", "name"],
          },
        },
        {
          type: "media",
          key: "language_icon",
          displayer: "Icon",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "GrLanguage",
          },
        },
        {
          type: "boolean",
          key: "showLocalizationAlways",
          displayer: "Pin to Navbar",
          value: true,
        },
        {
          type: "boolean",
          key: "showLanguage",
          displayer: "Show Language",
          value: true,
        },
        {
          type: "boolean",
          key: "showDivider",
          displayer: "Divider",
          value: false,
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "navigationIcons",
      displayer: "Navigation Icons",
      value: [
        {
          type: "media",
          key: "dropdownIcon",
          displayer: "Dropdown Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "MdArrowDropDown",
          },
        },
        {
          type: "media",
          key: "rightIcon",
          displayer: "Right Arrow Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "MdKeyboardArrowRight",
          },
        },
        {
          type: "media",
          key: "hamburgerIcon",
          displayer: "Hamburger Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "FaBars",
          },
        },
        {
          type: "media",
          key: "closeIcon",
          displayer: "Close Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "IoMdClose",
          },
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "divider",
      displayer: "Divider",
      value: true,
    });
    this.addProp({
      type:"multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1","animation2"],
      additionalParams:{
        selectItems:["animation1", "animation2"]
      }
    })

    this.setComponentState("isScrolled", false);
    this.setComponentState("hamburgerNavActive", false);
    this.setComponentState("navActive", false);
    this.setComponentState("subNavActiveIndex", null);
    this.setComponentState("subNavActive", null);
    this.setComponentState("changeBackground", false);
    this.setComponentState("navbarOverflowShow", false);
  }

  hasMedia(media?: TypeMediaInputValue): boolean {
    if (!media) return false;
    return media.type === "icon" ? !!media.name : !!media.url;
  }

  static getName(): string {
    return "Navbar 6";
  }


  handleOpenMenu = () => {
    Base.Navigator.changeScrollBehaviour("hidden");
    const wrapperContainer = Base.Navigator.getWrapperContainer();
    this.setComponentState("changeBackground", wrapperContainer?.scrollY === 0);
    setTimeout(() => {
      this.setComponentState("hamburgerNavActive", true);
      setTimeout(() => {
        this.setComponentState("navbarOverflowShow", true);
      }, 300)
    }, 100);
  };

  handleCloseMenu = () => {
    Base.Navigator.changeScrollBehaviour("auto");
    this.setComponentState("hamburgerNavActive", false);
    this.setComponentState("navbarOverflowShow", false);
    setTimeout(() => {
      this.setComponentState("changeBackground", false);
    }, 200);
  };

  navClick(index: number) {
    const isActive = this.getComponentState("subNavActiveIndex") === index;
    this.setComponentState("navActive", !isActive);
    this.setComponentState("subNavActiveIndex", isActive ? null : index);
    this.setComponentState("subNavActive", null);
  }

  subNavClick(index: any) {
    const currentValue = this.getComponentState("subNavActive");
    if (currentValue === index) {
      this.setComponentState("subNavActive", null);
    } else {
      this.setComponentState("subNavActive", index);
    }
  }

  render() {
    const defaultLogo = this.castToObject<Logo>("defaultLogo");
    const absoluteLogo = this.castToObject<Logo>("absoluteLogo");
    const position = this.getPropValue("position");
    const isScrolled = this.getComponentState("isScrolled");
    const isStickyTransparent = position === "Sticky Transparent";
    const isAbsolute = position === "Absolute";
    const transparentBackground =
      (isStickyTransparent && !isScrolled) || isAbsolute;
    const hamburgerNavActive = this.getComponentState("hamburgerNavActive");
    const changeBackground = this.getComponentState("changeBackground");
    const currentLogo =
      transparentBackground && !changeBackground
        ? { image: absoluteLogo.absoluteLogo_image, navigateTo: absoluteLogo.absoluteLogo_navigateTo }
        : { image: defaultLogo.image, navigateTo: defaultLogo.navigateTo };
    const icons = this.castToObject<Icon[]>("icons");
    const menuItems = this.castToObject<MenuItem[]>("menuItems");
    const divider = this.getPropValue("divider");
    const language = this.castToObject<Language>("language");
    const isBigScreen = this.getComponentState("isBigScreen");
    const isVisible = hamburgerNavActive && !isBigScreen;
    const animations = this.getPropValue("animations") && this.getPropValue("animations").map((animation:string) => this.decorateCSS(animation)).join(" ")
    const navigationIcons = this.castToObject<{
      dropdownIcon?: TypeMediaInputValue;
      rightIcon?: TypeMediaInputValue;
      hamburgerIcon?: TypeMediaInputValue;
      closeIcon?: TypeMediaInputValue;
    }>("navigationIcons");
    return (
      <div className={this.decorateCSS("navbar-root")}>
        <Base.Navigator.Container
          position={position}
          positionContainer={`${this.decorateCSS("navbarContainer")} ${
            changeBackground ? this.decorateCSS("filledBackground") : ""
          } ${hamburgerNavActive ? this.decorateCSS("hamburgerActive") : ""}`}
          hamburgerNavActive={hamburgerNavActive}
          setIsScrolled={(value: boolean)=>{
            this.setComponentState("isScrolled", value);
          }}
          setIsBigScreen={(value: boolean)=>{
            this.setComponentState("isBigScreen", value);
          }}
          className={this.decorateCSS("container")}
        >
          <Base.MaxContent
            className={`${this.decorateCSS("maxContent")} ${
              transparentBackground
                ? this.decorateCSS("transparentBackground")
                : ""
            }`}
          >
            <div className={this.decorateCSS("pcNavbarContainer")}>
              {menuItems.length > 0 && (
                <nav className={this.decorateCSS("pcNavbar")}>
                  {menuItems.map(
                    (item: any, index: any) =>
                      this.castToString(item.title) && (
                        <div
                          key={index}
                          className={this.decorateCSS("menuItemContainer")}
                        >
                          <ComposerLink path={item.navigate_to}>
                            <div className={this.decorateCSS("menuItem")}>
                              <Base.P className={`${this.decorateCSS("menuItemTitle")} ${transparentBackground? this.decorateCSS("whiteColor"): ""} ${animations}`}>
                                {item.title}
                              </Base.P>
                              {(item.menuType === "Dropdown" || item.menuType === "Mega") && (
                                <Base.Media
                                  value={navigationIcons?.dropdownIcon}
                                  className={`${this.decorateCSS(
                                    "dropdownIcon"
                                  )} ${
                                    transparentBackground
                                      ? this.decorateCSS("whiteColor")
                                      : ""
                                  }`}
                                />
                              )}
                            </div>
                          </ComposerLink>
                          {item.menuType === "Dropdown" && (
                            <div className={this.decorateCSS("dropdown")}>
                              {item.sub_items?.map(
                                (subItem: any, subIndex: number) => (
                                  <div
                                    key={subIndex}
                                    className={`${this.decorateCSS("dropdownItemContainer")} ${animations}`}
                                  >
                                    <div
                                      className={this.decorateCSS(
                                        "dropdownItem"
                                      )}
                                    >
                                      <ComposerLink path={subItem.navigate_to}>
                                        <div
                                          className={this.decorateCSS(
                                            "dropdownItemContent"
                                          )}
                                        >
                                          <Base.P className={`${this.decorateCSS("dropdownItemTitle")} ${animations}`}>
                                            {subItem.title}
                                          </Base.P>
                                          {this.castToString(subItem.sub_item_badge) && (
                                            <Base.P className={this.decorateCSS("badge")}>
                                              {subItem.sub_item_badge}
                                            </Base.P>
                                          )}
                                        </div>
                                      </ComposerLink>
                                      {subItem.sub_items.length > 0 &&
                                        subItem.sub_items.some((item: any) =>
                                          this.castToString(item.title)
                                        ) && (
                                          <Base.Media
                                            value={navigationIcons?.rightIcon}
                                            className={this.decorateCSS("rightIcon")}
                                          />
                                        )}
                                    </div>
                                    {subItem.sub_items.length > 0 &&
                                      subItem.sub_items.some((item: any) =>
                                        this.castToString(item.title)
                                      ) && (
                                        <div
                                          className={this.decorateCSS(
                                            "subdropdown"
                                          )}
                                        >
                                          {subItem.sub_items.map(
                                            (
                                              subSubItem: MenuItem,
                                              subSubIndex: number
                                            ) => (
                                              <div
                                                key={subSubIndex}
                                                className={`${this.decorateCSS("subdropdownItem")} ${animations}`}
                                              >
                                                <ComposerLink
                                                  path={subSubItem.navigate_to}
                                                >
                                                  <div className={this.decorateCSS("subdropdownItemContent")}>
                                                    <Base.P
                                                      className={this.decorateCSS(
                                                        "dropdownItemTitle"
                                                      )}
                                                    >
                                                      {subSubItem.title}
                                                    </Base.P>
                                                    {this.castToString(subSubItem.sub_sub_item_badge) && (
                                                      <Base.P className={this.decorateCSS("badge")}>
                                                        {subSubItem.sub_sub_item_badge}
                                                      </Base.P>
                                                    )}
                                                  </div>
                                                </ComposerLink>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      )}
                                  </div>
                                )
                              )}
                            </div>
                          )}
                          {item.menuType === "Mega" && item.sub_items?.length > 0 && (
                            <div className={this.decorateCSS("megaMenu")}>
                              {item.sub_items.map((column: MenuItem, columnIndex: number) => {
                                const columnTitleExist = this.castToString(column.title);
                                const columnDescriptionExist = this.castToString(column.sub_item_description);
                                const columnMediaExist = this.hasMedia(column.sub_item_media);
                                const columnButton = column.sub_item_button;
                                const columnButtonExist = columnButton && this.castToString(columnButton.text);
                                const columnLinks = (column.sub_items || []).filter((link: MenuItem) =>
                                  this.castToString(link.title)
                                );
                                const columnExist =
                                  columnTitleExist || columnDescriptionExist || columnMediaExist || columnButtonExist || columnLinks.length > 0;
                                return (
                                  columnExist && (
                                    <div key={columnIndex} className={this.decorateCSS("megaMenuColumn")}>
                                      {columnMediaExist && (
                                        <ComposerLink path={column.navigate_to}>
                                          <Base.Media
                                            value={column.sub_item_media!}
                                            className={this.decorateCSS("megaMenuColumnMedia")}
                                          />
                                        </ComposerLink>
                                      )}
                                      {columnTitleExist && (
                                        <ComposerLink path={column.navigate_to}>
                                          <div className={this.decorateCSS("megaMenuColumnHeader")}>
                                            <Base.P className={this.decorateCSS("megaMenuColumnTitle")}>
                                              {column.title}
                                            </Base.P>
                                            {this.castToString(column.sub_item_badge) && (
                                              <Base.P className={this.decorateCSS("badge")}>
                                                {column.sub_item_badge}
                                              </Base.P>
                                            )}
                                          </div>
                                        </ComposerLink>
                                      )}
                                      {columnDescriptionExist && (
                                        <Base.P className={this.decorateCSS("megaMenuColumnDescription")}>
                                          {column.sub_item_description}
                                        </Base.P>
                                      )}
                                      {columnButtonExist && columnButton && (
                                        <div className={this.decorateCSS("megaMenuColumnButton")}>
                                          <ComposerLink path={columnButton.url}>
                                            <Base.Button buttonType={columnButton.type} className={this.decorateCSS("button")}>
                                              <Base.P className={this.decorateCSS("buttonText")}>{columnButton.text}</Base.P>
                                            </Base.Button>
                                          </ComposerLink>
                                        </div>
                                      )}
                                      {columnLinks.length > 0 && (
                                        <div className={this.decorateCSS("megaMenuLinks")}>
                                          {column.sub_items.map(
                                            (link: MenuItem, linkIndex: number) =>
                                              this.castToString(link.title) && (
                                                <ComposerLink key={linkIndex} path={link.navigate_to}>
                                                  <div className={`${this.decorateCSS("megaMenuLink")} ${animations}`}>
                                                    {this.hasMedia(link.sub_sub_item_media) && (
                                                      <Base.Media
                                                        value={link.sub_sub_item_media!}
                                                        className={this.decorateCSS("megaMenuLinkMedia")}
                                                      />
                                                    )}
                                                    <div className={this.decorateCSS("megaMenuLinkContent")}>
                                                      <div className={this.decorateCSS("megaMenuLinkHeader")}>
                                                        <Base.P className={`${this.decorateCSS("megaMenuLinkTitle")} ${animations}`}>
                                                          {link.title}
                                                        </Base.P>
                                                        {this.castToString(link.sub_sub_item_badge) && (
                                                          <Base.P className={this.decorateCSS("badge")}>
                                                            {link.sub_sub_item_badge}
                                                          </Base.P>
                                                        )}
                                                      </div>
                                                      {this.castToString(link.sub_sub_item_description) && (
                                                        <Base.P className={this.decorateCSS("megaMenuLinkDescription")}>
                                                          {link.sub_sub_item_description}
                                                        </Base.P>
                                                      )}
                                                    </div>
                                                  </div>
                                                </ComposerLink>
                                              )
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  )
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )
                  )}
                </nav>
              )}

              {currentLogo.image && (
                <div className={this.decorateCSS("logo")}>
                  <ComposerLink path={currentLogo.navigateTo}>
                    <div onClick={()=> this.handleCloseMenu()}>
                      <Base.Media
                        value={currentLogo.image}
                        className={this.decorateCSS("logoImage")}
                      />
                    </div>
                  </ComposerLink>
                </div>
              )}

              {menuItems.length > 0 && language.showLanguage && (
                <div className={this.decorateCSS("iconsContainer")}>
                  {icons?.length > 0 && (
                    <div className={this.decorateCSS("icons")}>
                      {icons.map((icon: Icon, index: number) => (
                        <ComposerLink path={icon.page}>
                          <Base.Media
                            value={icon.icon}
                            className={this.decorateCSS("icon")}
                          />
                        </ComposerLink>
                      ))}
                    </div>
                  )}
                  {divider && icons.length > 0 && (
                    <div className={this.decorateCSS("divider")}></div>
                  )}
                  {language.showLanguage && (
                    <Base.Language
                      type="dropdown"
                      title={language.label}
                      icon={language.language_icon}
                      dropdownButtonClassName={`${this.decorateCSS("localization")}`}
                      dropdownLabelClassName={`${this.decorateCSS("localizationLabel")} ${animations}`}
                      iconClassName={this.decorateCSS("languageIcon")}
                      dropdownItemClassName={this.decorateCSS("localizationItem")}
                      dropdownContentClassName={`${this.decorateCSS("localizationContent")} ${animations}`}
                      divider={language.showDivider}
                    />
                  )}
                </div>
              )}
            </div>
            <div className={this.decorateCSS("mobileRight")}>
                 {(language.showLanguage &&language.showLocalizationAlways) && (
                    <Base.Language
                      type="dropdown"
                      title={language.label}
                      icon={(language.language_icon?.type === "icon" ? language.language_icon.name : "GrLanguage") || "GrLanguage"}
                      dropdownButtonClassName={`${this.decorateCSS(
                        "localization"
                      )}`}
                      dropdownLabelClassName={`${this.decorateCSS(
                        "localizationLabel"
                      )}`}
                      iconClassName={this.decorateCSS("languageIcon")}
                      dropdownItemClassName={this.decorateCSS(
                        "localizationItem"
                      )}
                      dropdownContentClassName={this.decorateCSS(
                        "localizationContent"
                      )}
                      divider={language.showDivider}
                    />
                  )}
            {hamburgerNavActive ? (
              <div onClick={() => this.handleCloseMenu()}>
                <Base.Media
                  value={navigationIcons?.closeIcon}
                  className={this.decorateCSS("closeIcon")}
                />
              </div>
            ) : (
              <div onClick={() => this.handleOpenMenu()}>
                <Base.Media
                  value={navigationIcons?.hamburgerIcon}
                  className={this.decorateCSS("hamburgerIcon")}
                />
              </div>
            )}
            </div>
              <div
                className={`${this.decorateCSS("mobileMenu")} ${
                  hamburgerNavActive ? this.decorateCSS("open") : ""
                } ${this.getComponentState("navbarOverflowShow") ? this.decorateCSS("overflowShow") : ""}`}
                onClick={(e) => e.stopPropagation()}
              >
                <nav className={this.decorateCSS("hamburgerMenu")}>
                  {menuItems.map((item: any, index: number) => (
                    <div
                      key={index}
                      className={this.decorateCSS("hamburgerMenuItem")}
                    >
                      <div
                        className={this.decorateCSS("hamburgerMenuItemHeader")}
                        onClick={() => this.navClick(index)}
                      >
                        <ComposerLink path={item.navigate_to}>
                          <Base.P
                            className={this.decorateCSS(
                              "hamburgerMenuItemTitle"
                            )}
                            onClick={()=> this.handleCloseMenu()}
                          >
                            {item.title}
                          </Base.P>
                        </ComposerLink>
                        {(item.menuType === "Dropdown" || item.menuType === "Mega") && (
                          <Base.Media
                            value={navigationIcons?.rightIcon}
                            className={`${this.decorateCSS("dropdownIcon")} ${
                              this.getComponentState("subNavActiveIndex") ===
                              index
                                ? this.decorateCSS("active")
                                : ""
                            }`}
                          />
                        )}
                      </div>
                      {(item.menuType === "Dropdown" || item.menuType === "Mega") && (
                        <div
                          className={`${this.decorateCSS("hamburgerSubmenu")} ${
                            this.getComponentState("subNavActiveIndex") ===
                            index
                              ? this.decorateCSS("active")
                              : ""
                          }`}
                        >
                          {item.sub_items?.map(
                            (subItem: any, subIndex: number) => (
                              <div
                                key={subIndex}
                                className={this.decorateCSS(
                                  "hamburgerSubmenuItem"
                                )}
                              >
                                <div
                                  className={this.decorateCSS(
                                    "hamburgerSubmenuItemHeader"
                                  )}
                                  onClick={() =>
                                    this.subNavClick(`${index}-${subIndex}`)
                                  }
                                >
                                  <ComposerLink path={subItem.navigate_to}>
                                    <Base.P
                                      className={this.decorateCSS(
                                        "hamburgerMenuItemTitle"
                                      )}
                                      onClick={()=> this.handleCloseMenu()}
                                    >
                                      {subItem.title}
                                    </Base.P>
                                  </ComposerLink>
                                  {this.castToString(subItem.sub_item_badge) && (
                                    <Base.P className={this.decorateCSS("badge")}>
                                      {subItem.sub_item_badge}
                                    </Base.P>
                                  )}
                                  {subItem.sub_items.length > 0 &&
                                    subItem.sub_items.some((item: any) =>
                                      this.castToString(item.title)
                                    ) && (
                                      <Base.Media
                                        value={navigationIcons?.rightIcon}
                                        className={`${this.decorateCSS(
                                          "dropdownIcon"
                                        )} ${
                                          this.getComponentState(
                                            "subNavActive"
                                          ) === `${index}-${subIndex}`
                                            ? this.decorateCSS("active")
                                            : ""
                                        }`}
                                      />
                                    )}
                                </div>
                                {subItem.sub_items.length > 0 &&
                                  subItem.sub_items.some((item: any) =>
                                    this.castToString(item.title)
                                  ) && (
                                    <div
                                      className={`${this.decorateCSS(
                                        "hamburgerSubSubmenu"
                                      )} ${
                                        this.getComponentState(
                                          "subNavActive"
                                        ) === `${index}-${subIndex}`
                                          ? this.decorateCSS("active")
                                          : ""
                                      }`}
                                    >
                                      {subItem.sub_items.map(
                                        (
                                          subSubItem: any,
                                          subSubIndex: number
                                        ) => (
                                          <div
                                            key={subSubIndex}
                                            className={this.decorateCSS(
                                              "hamburgerSubSubmenuItem"
                                            )}
                                          >
                                            <ComposerLink
                                              path={subSubItem.navigate_to}
                                            >
                                              <Base.P
                                                className={this.decorateCSS(
                                                  "hamburgerSubSubmenuItemTitle"
                                                )}
                                                onClick={()=> this.handleCloseMenu()}
                                              >
                                                {subSubItem.title}
                                              </Base.P>
                                            </ComposerLink>
                                            {this.castToString(subSubItem.sub_sub_item_badge) && (
                                              <Base.P className={this.decorateCSS("badge")}>
                                                {subSubItem.sub_sub_item_badge}
                                              </Base.P>
                                            )}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                  {(language.showLanguage && !language.showLocalizationAlways) &&
                  <Base.Language
                    type="accordion"
                    title="name"
                    headerClassName={this.decorateCSS("languageAccordion")}
                    itemClassName={this.decorateCSS("languageAccordionItem")}
                    titleClassName={`${this.decorateCSS("languageAccordionTitle")} ${animations}`}
                  />
                  }
                </nav>

                {icons.length > 0 && (
                  <div className={this.decorateCSS("iconsContainer")}>
                    {icons.map((icon: Icon, index: number) => (
                      <ComposerLink path={icon.page}>
                        <div className={this.decorateCSS("icons")} onClick={()=> this.handleCloseMenu()}>
                        <Base.Media
                          value={icon.icon}
                          className={this.decorateCSS("icon")}
                        />
                        </div>
                      </ComposerLink>
                    ))}
                  </div>
                )}
              </div>

          </Base.MaxContent>
        </Base.Navigator.Container>
        <Base.Overlay
          className={this.decorateCSS("overlay")}
          onClick={() => this.handleCloseMenu()}
          isVisible={isVisible}
        />
      </div>
    );
  }
}

export default Navbar6;
