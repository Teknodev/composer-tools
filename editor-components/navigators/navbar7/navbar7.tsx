import { BaseNavigator, TypeMediaInputValue } from "../../EditorComponent";
import React from "react";
import styles from "./navbar7.module.scss";
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

class Navbar7 extends BaseNavigator {
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
              value: "Dropdown",
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
                      value: "Home 01",
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
                      value: "Home 02",
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
                      value: "Home 03",
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
                      value: "Home 04",
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
                      value: "Home 05",
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
                      value: "Home 06",
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
                      value: "Home 07",
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
                      value: "Home 08",
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
                      value: "Home 09",
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
                      value: "Home 10",
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
                      value: "Home 11",
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
                      value: "Home 12",
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
                      value: "Home 13",
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
                      value: "Home 14",
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
                      value: "Shop Layout",
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
                              value: "Shop - Left Sidebar",
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
                              value: "Shop - Right Sidebar",
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
                              value: "Shop - Fullwidth V1",
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
                              value: "Shop - Fullwidth V2",
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
                              value: "Shop - Fullwidth V3",
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
                      value: "Shop Features",
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
                              value: "Shop - List View",
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
                              value: "Shop - Filter List",
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
                              value: "Shop - Filter Inline",
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
                              value: "Shop - Filter Top",
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
                              value: "Shop - Infinite Scroll",
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
                      value: "Shop By Popular Parts",
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
                              value: "Chairs",
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
                              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a383502f8a5b002ce6aa53?alt=media" },
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
                              key: "sub_sub_item_badge",
                              displayer: "Badge",
                              value: "",
                            },
                            {
                              type: "media",
                              key: "sub_sub_item_media",
                              displayer: "Media",
                              additionalParams: { availableTypes: ["image", "video"] },
                              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a383962f8a5b002ce6aa92?alt=media" },
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
                              value: "Furnitures",
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
                              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a383c62f8a5b002ce6aac7?alt=media" },
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
                              value: "Sofas",
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
                              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a383fd2f8a5b002ce6aae3?alt=media" },
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
                              value: "Lighting",
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
                              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00772f8a5b002ce60145?alt=media" },
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
              value: "Product",
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
                      value: "Product Layout",
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
                              value: "Left Thumbnail",
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
                              value: "Right Thumbnail",
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
                              value: "Top Thumbnail",
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
                              value: "Bottom Thumbnail",
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
                              value: "Gallery Stacked",
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
                              value: "Product Accordion",
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
                              value: "Product - Fullwidth",
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
                      value: "Product Feature",
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
                              value: "Variant Swatch",
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
                              value: "Variant Dropdown",
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
                              value: "Quantity Dropdown",
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
                              value: "Product Countdown",
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
                              value: "Gift Box",
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
                              value: "PreOrder",
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
                              value: "Video, 3D, AR Models",
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
                      value: "Product Features",
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
                              value: "Frequently Bought",
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
                              value: "Sticky Information",
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
                              value: "Ask A Question",
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
                              value: "Product Zoom",
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
                              value: "Product Recommendations",
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
                              value: "Recently Viewed",
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
                      value: "Featured Products",
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
                              value: "Wicked Lounge Rattan",
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
                              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669dfff22f8a5b002ce60115?alt=media" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "$120.00",
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
                              value: "Wicked Lounge Rattan",
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
                              value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00952f8a5b002ce60151?alt=media" },
                            },
                            {
                              type: "string",
                              key: "sub_sub_item_description",
                              displayer: "Description",
                              value: "$285.99",
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
              value: "Dropdown",
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
                      value: "Blog - Right Sidebar",
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
                      value: "Blog - Left Sidebar",
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
                      value: "Blog - Fullwidth",
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
                      value: "Blog - Grid View 1",
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
                      value: "Blog - Grid View 2",
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
                      value: "Blog - Grid View 3",
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
                      value: "Blog - Grid Simple",
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
                      value: "Blog - List View 1",
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
                      value: "Blog - List View 2",
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
              value: "Pages",
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
              value: "Dropdown",
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
                      value: "About Us",
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
                      value: "FAQ's",
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
                              value: "FAQ's 01",
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
                              value: "FAQ's 02",
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
                      value: "404 Page",
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
                      value: "Password Page",
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
                      value: "Search Page",
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
              value: "Contact",
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
              value: "Dropdown",
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
                      value: "Contact 01",
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
                      value: "Contact 02",
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
                      value: "Contact 03",
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
                      value: "Contact 04",
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
          value: true,
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
      type:"multiSelect",
      key: "animations",
      displayer: "Animations",
      value: ["animation1","animation2"],
      additionalParams:{
        selectItems:["animation1", "animation2",  "animation3"]
      }
    })
    this.setComponentState("isScrolled", false);
    this.setComponentState("isBigScreen", false);
    this.setComponentState("isMobileMenuOpen", false);
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
    return "Navbar 7";
  }

  handleOpenMenu = () => {
    Base.Navigator.changeScrollBehaviour("hidden");
    const wrapper = Base.Navigator.getWrapperContainer();
    this.setComponentState("changeBackground", wrapper?.scrollY === 0);

    setTimeout(() => {
      this.setComponentState("isMobileMenuOpen", true);
      setTimeout(() => {
        this.setComponentState("navbarOverflowShow", true);
      }, 300)
    }, 50);
  };

  handleCloseMenu = () => {
    Base.Navigator.changeScrollBehaviour("auto");
    this.setComponentState("isMobileMenuOpen", false);
    this.setComponentState("navbarOverflowShow", false);
    setTimeout(() => {
      this.setComponentState("changeBackground", false);
    }, 100);
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
    const isBigScreen = this.getComponentState("isBigScreen");
    const isStickyTransparent = position === "Sticky Transparent";
    const isAbsolute = position === "Absolute";
    const transparentBackground =
      (isStickyTransparent && !isScrolled) || isAbsolute;
    const changeBackground = this.getComponentState("changeBackground");

    const isMobileMenuOpen = this.getComponentState("isMobileMenuOpen");

    const currentLogo =
      ((transparentBackground && !changeBackground) || (isMobileMenuOpen && isBigScreen)) && !isScrolled
        ? { image: absoluteLogo.absoluteLogo_image, navigateTo: absoluteLogo.absoluteLogo_navigateTo }
        : { image: defaultLogo.image, navigateTo: defaultLogo.navigateTo };
        
    const icons = this.castToObject<Icon[]>("icons");
    const menuItems = this.castToObject<MenuItem[]>("menuItems");

    const language = this.castToObject<Language>("language");

    const isVisible = (isMobileMenuOpen && !isBigScreen);
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
          positionContainer={`${this.decorateCSS("pcNavbarContainer")}`}
          setIsScrolled={(value: boolean) => this.setComponentState("isScrolled", value)}
          setIsBigScreen={(value: boolean) => this.setComponentState("isBigScreen", value)}
          className={this.decorateCSS("pcNavbarContainer")}
        >
          <Base.MaxContent
            className={`${this.decorateCSS("maxContent")} ${
              transparentBackground
                ? this.decorateCSS("transparentBackground")
                : ""
            }`}
          >
            {currentLogo.image && (
              <div className={this.decorateCSS("logo")}>
                <ComposerLink path={currentLogo.navigateTo}>
                  <Base.Media
                    value={currentLogo.image}
                    className={this.decorateCSS("logoImage")}
                  />
                </ComposerLink>
              </div>
            )}

            {menuItems.length > 0 && (
              <nav className={this.decorateCSS("pcNavbar")}>
                {menuItems.map((item: any, index: any) => (
                  <div
                    key={index}
                    className={`${this.decorateCSS("menuItemContainer")} ${animations}`}
                  >
                    <ComposerLink path={item.navigate_to}>
                      <div className={this.decorateCSS("menuItem")}>
                        <Base.P
                          className={`${this.decorateCSS("menuItemTitle")} ${
                            transparentBackground
                              ? this.decorateCSS("whiteColor")
                              : ""
                          }`}
                        >
                          {item.title}
                        </Base.P>
                        {(item.menuType === "Dropdown" || item.menuType === "Mega") && (
                          <Base.Media
                            value={navigationIcons?.dropdownIcon}
                            className={`${this.decorateCSS("dropdownIcon")} ${
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
                              className={this.decorateCSS(
                                "dropdownItemContainer"
                              )}
                            >
                              <div className={this.decorateCSS("dropdownItem")}>
                                <ComposerLink path={subItem.navigate_to}>
                                  <div
                                    className={this.decorateCSS(
                                      "dropdownItemContent"
                                    )}
                                  >
                                    <Base.P
                                      className={this.decorateCSS(
                                        "dropdownItemTitle"
                                      )}
                                    >
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
                                    className={this.decorateCSS("subdropdown")}
                                  >
                                    {subItem.sub_items.map(
                                      (
                                        subSubItem: MenuItem,
                                        subSubIndex: number
                                      ) => (
                                        <div
                                          key={subSubIndex}
                                          className={this.decorateCSS(
                                            "subdropdownItem"
                                          )}
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
                          const columnLinks = (column.sub_items || []).filter((link: MenuItem) =>
                            this.castToString(link.title)
                          );
                          return (
                            (columnTitleExist || columnLinks.length > 0) && (
                              <div key={columnIndex} className={this.decorateCSS("megaMenuColumn")}>
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
                                {columnLinks.length > 0 && (
                                  <div className={this.decorateCSS("megaMenuLinks")}>
                                    {column.sub_items.map(
                                      (link: MenuItem, linkIndex: number) =>
                                        this.castToString(link.title) && (
                                          <ComposerLink key={linkIndex} path={link.navigate_to}>
                                            <div className={this.decorateCSS("megaMenuLink")}>
                                              {this.hasMedia(link.sub_sub_item_media) && (
                                                <Base.Media
                                                  value={link.sub_sub_item_media!}
                                                  className={this.decorateCSS("megaMenuLinkMedia")}
                                                />
                                              )}
                                              <div className={this.decorateCSS("megaMenuLinkContent")}>
                                                <div className={this.decorateCSS("megaMenuLinkHeader")}>
                                                  <Base.P className={this.decorateCSS("megaMenuLinkTitle")}>
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
                ))}
              </nav>
            )}

            {icons.length > 0 && (
              <div className={this.decorateCSS("iconsContainer")}>
                {icons.map((icon: Icon, index: number) => (
                  <ComposerLink path={icon.page}>
                    <Base.Media
                      value={icon.icon}
                      className={this.decorateCSS("icon")}
                    />
                  </ComposerLink>
                ))}
                {language.showLanguage && (
                  <Base.Language
                    type="dropdown"
                    title={language.label}
                    icon={language.language_icon}
                    dropdownButtonClassName={`${this.decorateCSS(
                      "localization"
                    )}`}
                    dropdownLabelClassName={`${this.decorateCSS("localizationLabel")} ${animations}`}
                    iconClassName={this.decorateCSS("languageIcon")}
                    dropdownItemClassName={`${this.decorateCSS("localizationItem")}`}
                    dropdownContentClassName={`${this.decorateCSS("localizationContent")} ${animations}`}
                    divider={language.showDivider}
                  />
                )}
              </div>
            )}
          </Base.MaxContent>  
        </Base.Navigator.Container>

        <Base.Navigator.Container
          position={position}
          positionContainer={`${this.decorateCSS(
            "smallDeviceNavbar"
          )} ${
            changeBackground ? this.decorateCSS("filledBackground") : ""
          } ${isMobileMenuOpen ? this.decorateCSS("hamburgerActive") : ""}`}
          hamburgerNavActive={isMobileMenuOpen}
          setIsScrolled={(value: boolean) => this.setComponentState("isScrolled", value)}
          setIsBigScreen={(value: boolean) => this.setComponentState("isBigScreen", value)}
          className={this.decorateCSS("smallDeviceNavbar")}
        >
          <Base.MaxContent
            className={`${this.decorateCSS("maxContent")} ${
              transparentBackground
                ? this.decorateCSS("transparentBackground")
                : ""
            }`}
          >
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
            <div className={this.decorateCSS("mobileRight")}>
            {(language.showLanguage && language.showLocalizationAlways) && (
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
                    dropdownItemClassName={this.decorateCSS("localizationItem")}
                    dropdownContentClassName={this.decorateCSS(
                      "localizationContent"
                    )}
                    divider={language.showDivider}
                  />
            )}
            {isMobileMenuOpen ? (
              <div onClick={() => this.handleCloseMenu()}>
                <Base.Media
                  value={navigationIcons?.closeIcon}
                  className={this.decorateCSS("mobileCloseButton")}
                />
              </div>
            ) : (
              <div onClick={() => this.handleOpenMenu()}>
                <Base.Media
                  value={navigationIcons?.hamburgerIcon}
                  className={this.decorateCSS("mobileMenuButton")}
                />
              </div>
            )}
            </div>
            <div
              className={`${this.decorateCSS("mobileMenu")} ${
                isMobileMenuOpen ? this.decorateCSS("open") : ""
              } ${this.getComponentState("navbarOverflowShow") ? this.decorateCSS("overflowShow") : ""}`}
            >
              <div className={this.decorateCSS("mobileMenuContent")}>
              {menuItems.length > 0 && (
                <nav className={this.decorateCSS("hamburgerMenu")}>
                  {menuItems.map((item: any, index: number) => (
                    <div
                      key={index}
                      className={`
                        ${this.decorateCSS("hamburgerMenuItem")}
                        ${animations}
                        ${this.getComponentState("subNavActiveIndex") === index ? this.decorateCSS("active") : ""}
                      `}
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
                        <div className={`${this.decorateCSS("hamburgerSubmenu")}
                        ${this.getComponentState("subNavActiveIndex") ===index? this.decorateCSS("active") : ""}`}>
                          {item.sub_items?.map(
                            (subItem: any, subIndex: number) => (
                              <div
                                key={subIndex}
                                className={`${this.decorateCSS("hamburgerSubmenuItem")} ${animations} 
                                ${
                                  this.getComponentState(
                                    "subNavActive"
                                  ) === `${index}-${subIndex}`
                                    ? this.decorateCSS("active")
                                    : ""
                                }`}
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
                    />
                  }
                </nav>
              )}

              {icons.length > 0 && (
                <div className={this.decorateCSS("iconsContainer")}>
                  {icons.map((icon: Icon, index: number) => (
                    <div className={this.decorateCSS("icons")} onClick={()=> this.handleCloseMenu()}>
                    <ComposerLink path={icon.page}>
                        <Base.Media
                          value={icon.icon}
                          className={this.decorateCSS("icon")}
                        />
                    </ComposerLink>
                    </div>
                  ))}
                </div>
              )}
              </div>
        
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

export default Navbar7;
