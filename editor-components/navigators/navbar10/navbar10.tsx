import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar10.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface CategoryItem {
  label: string;
  description: string;
  url: string;
  icon?: string;
  image: string;
}

interface Category {
  title: string;
  items: CategoryItem[];
  url: string;
  icon?: string;
  image: string;
}

interface RightSection {
  enabled: boolean;
  image: string;
  ctaTitle: string;
  ctaLink: string;
}

interface MenuItems {
  title: string;
  url: string;
  menuType: "Normal" | "Dropdown";
  rowCount?: number;
  categories?: Category[];
  rightCategories?: Category[];
  rightSection?: RightSection;
}
interface Logo {
  image: string;
  urlTo: string;
}

class Navbar10 extends BaseNavigator {
  private containerRef = React.createRef<HTMLDivElement>();

  constructor(props?: any) {
    super(props, styles);

    this.addProp(INPUTS.NAVBAR_POSITION("position", "Navbar Type"));

    this.addProp({
      type: "object",
      key: "defaultLogo",
      displayer: "Default Logo",
      value: [
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67769b510655f8002cafc964?alt=media&timestamp=1735826277716",
          displayer: "Image",
        },
        {
          type: "page",
          key: "urlTo",
          value: "",
          displayer: "URL",
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "absoluteLogo",
      displayer: "Absolute Logo",
      value: [
        {
          type: "image",
          key: "image",
          value:
            "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67769b510655f8002cafc965?alt=media&timestamp=1735826277716",
          displayer: "Image",
        },
        {
          type: "page",
          key: "urlTo",
          value: "",
          displayer: "URL",
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "menuItems",
      displayer: "Menu Items",
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
              value: "Platform",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "select",
              key: "menuType",
              displayer: "Type",
              value: "Dropdown",
              additionalParams: { selectItems: ["Dropdown", "Normal"] },
            },
            {
              type: "number",
              key: "rowCount",
              displayer: "Item Count In a Row",
              value: 3,
            },
            {
              type: "array",
              key: "categories",
              displayer: "Categories",
              value: [
                {
                  type: "object",
                  key: "category",
                  displayer: "Category",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Category Title",
                      value: "BUILD HIGH PERFORMING SITES",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "label",
                              displayer: "Label",
                              value: "Website builder",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Create beautiful websites at scale",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "image",
                      key: "image",
                      displayer: "Image",
                      value: "",
                    },
                    {type: "string",
                      key: "imageUrl",
                      displayer: "Image URL",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "category",
                  displayer: "Category",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Category Title",
                      value: "ACCLERATE YOUR GROWTH",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "label",
                              displayer: "Label",
                              value: "White label platform",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Fully own your customer experience",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
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
                              key: "label",
                              displayer: "Label",
                              value: "Client management",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Manage all of your projects in one place",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
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
                              key: "label",
                              displayer: "Label",
                              value: "Team Collaboration",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Manage all of your projects in one place",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
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
                              key: "label",
                              displayer: "Label",
                              value: "Client billing",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Manage client payments hassle-free",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
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
                              key: "label",
                              displayer: "Label",
                              value: "Automation",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Unlock efficiency with smart automations",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
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
                  key: "category",
                  displayer: "Category",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Category Title",
                      value: "EXPAND YOUR BUSINESS",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "label",
                              displayer: "Label",
                              value: "App Store",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Drive recurring revenue with apps",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
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
                              key: "label",
                              displayer: "Label",
                              value: "The Simple Editor(DIY)",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Simple interface for non-technical users",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "image",
                      key: "image",
                      displayer: "Category Image",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "imageUrl",
                      displayer: "Category Image URL",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "category",
                  displayer: "Category",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Category Title",
                      value: "ALL ESSENTIALS INCLUDED",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "label",
                              displayer: "Label",
                              value: "AI Assistant",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value:
                                "Boost your efficiency with built-in AI tools",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
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
                              key: "label",
                              displayer: "Label",
                              value: "SEO",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Build sites that rank higher",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
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
                              key: "label",
                              displayer: "Label",
                              value: "eCommerce",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Sell products online and offline",
                            },

                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
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
                              key: "label",
                              displayer: "Label",
                              value: "Transactional sites",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Sell services, subscriptions, and more",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "image",
                      key: "image",
                      displayer: "Category Image",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "imageUrl",
                      displayer: "Category Image URL",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "array",
              key: "rightCategories",
              displayer: "Right Categories",
              value: [
                {
                  type: "object",
                  key: "category",
                  displayer: "Category",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Category Title",
                      value: "MORE FROM DUDA",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "label",
                              displayer: "Label",
                              value: "Templates",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "FiArrowUpRight",
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
                              key: "label",
                              displayer: "Label",
                              value: "Made with Duda",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "FiArrowUpRight",
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
                              key: "label",
                              displayer: "Label",
                              value: "Accessibility",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "FiArrowUpRight",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "image",
                      key: "image",
                      displayer: "Category Image",
                      value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68906a03d3784c002c811913?alt=media&timestamp=1754294795993",
                    },
                    {
                      type: "page",
                      key: "imageUrl",
                      displayer: "Category Image URL",
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
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Solutions",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "select",
              key: "menuType",
              displayer: "Type",
              value: "Dropdown",
              additionalParams: { selectItems: ["Dropdown", "Normal"] },
            },
            {
              type: "number",
              key: "rowCount",
              displayer: "Item Count In a Row",
              value: 2,
            },
            {
              type: "array",
              key: "categories",
              displayer: "Categories",
              value: [
                {
                  type: "object",
                  key: "category",
                  displayer: "Category",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Category Title",
                      value: "DUDA FOR",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "label",
                              displayer: "Label",
                              value: "Agencies",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value:
                                "See why Duda is the top website builder for agency growth",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
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
                              key: "label",
                              displayer: "Label",
                              value: "SaaS",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value:
                                "Add a seamless-integrated website builder to your SaaS offering",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "image",
                      key: "image",
                      displayer: "Category Image",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "category",
                  displayer: "Category",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Category Title",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "label",
                              displayer: "Label",
                              value: "Hosts",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value:
                                "Provide high-end website solutions integrated with your services",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "image",
                      key: "image",
                      displayer: "Category Image",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "imageUrl",
                      displayer: "Category Image URL",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "array",
              key: "rightCategories",
              displayer: "Right Categories",
              value: [
                {
                  type: "object",
                  key: "category",
                  displayer: "Category",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Category Title",
                      value: "INDUSTRY CASE STUDIES",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "label",
                              displayer: "Label",
                              value: "Real Estate",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "FiArrowUpRight",
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
                              key: "label",
                              displayer: "Label",
                              value: "Travel & Hospitality",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "FiArrowUpRight",
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
                              key: "label",
                              displayer: "Label",
                              value: "Transportation",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "FiArrowUpRight",
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
                              key: "label",
                              displayer: "Label",
                              value: "View all success stories",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "FiArrowUpRight",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "image",
                      key: "image",
                      displayer: "Category Image",
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
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Resources",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "select",
              key: "menuType",
              displayer: "Type",
              value: "Dropdown",
              additionalParams: { selectItems: ["Dropdown", "Normal"] },
            },
            {
              type: "number",
              key: "rowCount",
              displayer: "Item Count In a Row",
              value: 3,
            },
            {
              type: "array",
              key: "categories",
              displayer: "Categories",
              value: [
                {
                  type: "object",
                  key: "category",
                  displayer: "Category",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Category Title",
                      value: "BUILD",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "label",
                              displayer: "Label",
                              value: "Templates",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Get started with beautiful templates",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
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
                              key: "label",
                              displayer: "Label",
                              value: "Developer portal",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "API, extensions, and developer tools",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
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
                              key: "label",
                              displayer: "Label",
                              value: "Hire an expert",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Get expert help for your next project",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
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
                  key: "category",
                  displayer: "Category",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Category Title",
                      value: "CONNECT",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "label",
                              displayer: "Label",
                              value: "Webinars & events",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Learn from experts, onlnie or in-person",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
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
                              key: "label",
                              displayer: "Label",
                              value: "Community",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Collaborate with other Duda users",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
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
                  key: "category",
                  displayer: "Category",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Category Title",
                      value: "LEARN",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "label",
                              displayer: "Label",
                              value: "Blog",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Get insights to fuel your business",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
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
                              key: "label",
                              displayer: "Label",
                              value: "Product Updates",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Discover Duda's latest releases",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
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
                              key: "label",
                              displayer: "Label",
                              value: "Duda University",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Take your skills to the next level",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
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
                              key: "label",
                              displayer: "Label",
                              value: "Success Stories",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "Get inspired by real wins",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "image",
                      key: "image",
                      displayer: "Category Image",
                      value: "",
                    },
                    {
                      type: "image",
                      key: "image",
                      displayer: "Category Image",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "array",
              key: "rightCategories",
              displayer: "Right Categories",
              value: [
                {
                  type: "object",
                  key: "category",
                  displayer: "Category",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Category Title",
                      value: "GET HELP",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "label",
                              displayer: "Label",
                              value: "Support portal",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "FiArrowUpRight",
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
                              key: "label",
                              displayer: "Label",
                              value: "System health check",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "FiArrowUpRight",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "image",
                      key: "image",
                      displayer: "Category Image",
                      value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/68906a03d3784c002c811913?alt=media&timestamp=1754294795993",
                    },
                    {
                      type: "page",
                      key: "imageUrl",
                      displayer: "Category Image URL",
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
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Pricing",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "select",
              key: "menuType",
              displayer: "Type",
              value: "Normal",
              additionalParams: { selectItems: ["Dropdown", "Normal"] },
            },
            {
              type: "number",
              key: "rowCount",
              displayer: "Item Count In a Row",
              value: 4,
            },
            {
              type: "array",
              key: "categories",
              displayer: "Categories",
              value: [
                {
                  type: "object",
                  key: "category",
                  displayer: "Category",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Category Title",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "label",
                              displayer: "Label",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
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
            {
              type: "array",
              key: "rightCategories",
              displayer: "Right Categories",
              value: [
                {
                  type: "object",
                  key: "category",
                  displayer: "Category",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Category Title",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "label",
                              displayer: "Label",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "image",
                      key: "image",
                      displayer: "Category Image",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "imageUrl",
                      displayer: "Category Image URL",
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
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Enterprise",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
            {
              type: "select",
              key: "menuType",
              displayer: "Type",
              value: "Normal",
              additionalParams: { selectItems: ["Dropdown", "Normal"] },
            },
            {
              type: "number",
              key: "rowCount",
              displayer: "Item Count In a Row",
              value: 4,
            },
            {
              type: "array",
              key: "categories",
              displayer: "Categories",
              value: [
                {
                  type: "object",
                  key: "category",
                  displayer: "Category",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Category Title",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "label",
                              displayer: "Label",
                              value: "",
                            },
                            {
                              type: "string",
                              key: "description",
                              displayer: "Description",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "image",
                      key: "image",
                      displayer: "Category Image",
                      value: "",
                    },
                    {
                      type: "image",
                      key: "image",
                      displayer: "Category Image",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "array",
              key: "rightCategories",
              displayer: "Right Categories",
              value: [
                {
                  type: "object",
                  key: "category",
                  displayer: "Category",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Category Title",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "URL",
                      value: "",
                    },
                    {
                      type: "array",
                      key: "items",
                      displayer: "Items",
                      value: [
                        {
                          type: "object",
                          key: "item",
                          displayer: "Item",
                          value: [
                            {
                              type: "string",
                              key: "label",
                              displayer: "Label",
                              value: "",
                            },
                            {
                              type: "page",
                              key: "url",
                              displayer: "URL",
                              value: "",
                            },
                            {
                              type: "icon",
                              key: "icon",
                              displayer: "Item icon",
                              value: "",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "image",
                      key: "image",
                      displayer: "Category Image",
                      value: "",
                    },
                    {
                      type: "page",
                      key: "imageUrl",
                      displayer: "Category Image URL",
                      value: "",
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
      key: "buttons",
      displayer: "Button",
      value: [
        INPUTS.BUTTON("button", "Button", "Log In", "", null, null, "Tertiary"),
        INPUTS.BUTTON(
          "button",
          "Button",
          "Contact Sales",
          "",
          null,
          null,
          "Tertiary"
        ),
        INPUTS.BUTTON(
          "button",
          "Button",
          "Start free Trial",
          "",
          null,
          null,
          "Tertiary"
        ),
      ],
    });

    this.addProp({
      type: "icon",
      key: "hamburgerIcon",
      displayer: "Hamburger Icon",
      value: "RxHamburgerMenu",
    });

    this.addProp({
        type: "icon",
        key: "linkIcon",
        displayer: "Link Icon",
        value:"FiArrowUpRight",
    })

    this.addProp({
      type: "icon",
      key: "closeIcon",
      displayer: "Close Icon",
      value: "RxCross2",
    });

    this.addProp({
      type: "icon",
      key: "dropdownIcon",
      displayer: "Dropdown Icon",
      value: "BiChevronDown",
    });
    this.addProp({
      type: "icon",
      key: "rightIcon",
      displayer: "Right Arrow Icon",
      value: "MdKeyboardArrowRight",
    });
    this.addProp({
      type: "boolean",
      key: "divider",
      displayer: "Divider",
      value: true,
    })

    this.setComponentState("isScrolled", false);
    this.setComponentState("hamburgerNavActive", false);
    this.setComponentState("navActive", false);
    this.setComponentState("subNavActiveIndex", null);
    this.setComponentState("subNavActive", null);
    this.setComponentState("changeBackground", false);
    this.setComponentState("isMobile", false);
    this.setComponentState("navbarOverflowShow", false);
    this.setComponentState("activeDropdown", null);
  }

  static getName(): string {
    return "Navbar 10";
  }

  onComponentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    document.addEventListener('click', this.handleClickOutside);
  }

  onComponentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    document.removeEventListener('click', this.handleClickOutside);
  }

  private handleResize = () => {
    const el = this.containerRef.current;
    
    if (!el) return;
    
    const width = el.clientWidth;
    const phonePxInt = 640; 
    
    const isMobile = width <= phonePxInt;
    
    this.setComponentState("isMobile", isMobile);
  };

  handleOpenMenu = () => {
    Base.Navigator.changeScrollBehaviour("hidden");
    const wrapper = Base.Navigator.getWrapperContainer();
    this.setComponentState("changeBackground", wrapper?.scrollY === 0);
    setTimeout(() => {
      this.setComponentState("hamburgerNavActive", true);
      setTimeout(() => {
        this.setComponentState("navbarOverflowShow", true);
      }, 300);
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

  navClick = (index: number) => {
    const isActive = this.getComponentState("subNavActiveIndex") === index;
    this.setComponentState("navActive", !isActive);
    this.setComponentState("subNavActiveIndex", isActive ? null : index);
    this.setComponentState("subNavActive", null);
  };

  subNavClick = (index: any) => {
    const currentValue = this.getComponentState("subNavActive");
    if (currentValue === index) {
      this.setComponentState("subNavActive", null);
    } else {
      this.setComponentState("subNavActive", index);
    }
  };

  handleDropdownClick = (index: number, e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const currentActive = this.getComponentState("activeDropdown");
    if (currentActive === index) {
      this.setComponentState("activeDropdown", null);
    } else {
      this.setComponentState("activeDropdown", index);
    }
  };

  handleClickOutside = (e: any) => {
    // Dropdown içindeki tıklamaları kontrol et
    const dropdownElement = e.target.closest(`.${this.decorateCSS("dropdown")}`);
    const menuItemElement = e.target.closest(`.${this.decorateCSS("menuItem")}`);
    
    // Eğer dropdown içinde veya menu item'da tıklanmadıysa dropdown'ı kapat
    if (!dropdownElement && !menuItemElement) {
      this.setComponentState("activeDropdown", null);
    }
  };

  componentWillUnmount(): void {
    this.handleCloseMenu();
  }

  render() {
    const defaultLogo = this.castToObject<Logo>("defaultLogo");
    const absoluteLogo = this.castToObject<Logo>("absoluteLogo");
    const position = this.getPropValue("position");
    const menuItems = this.castToObject<MenuItems[]>("menuItems");
    const hamburgerNavActive = this.getComponentState("hamburgerNavActive");
    const navbarOverflowShow = this.getComponentState("navbarOverflowShow");
    const isScrolled = this.getComponentState("isScrolled");
    const isMobile = this.getComponentState("isMobile");
    const activeDropdown = this.getComponentState("activeDropdown");

    const isStickyTransparent = position === "Sticky Transparent";
    const isAbsolute = position === "Absolute";
    const transparentBackground =
      (isStickyTransparent && !isScrolled) || isAbsolute;

    const changeBackground = this.getComponentState("changeBackground");

    const currentLogo =
      (transparentBackground && !changeBackground) ||
      (hamburgerNavActive && !isMobile)
        ? absoluteLogo
        : defaultLogo;

    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const isVisible = hamburgerNavActive && isMobile;

    return (
      <>
        <Base.Navigator.Container
          ref={this.containerRef}
          position={position}
          hamburgerNavActive={hamburgerNavActive}
          positionContainer={`${this.decorateCSS("navbarContainer")} ${
            changeBackground ? this.decorateCSS("filledBackground") : ""
          }`}
          setIsScrolled={(val: boolean) =>
            this.setComponentState("isScrolled", val)
          }
          className={this.decorateCSS("filledBackground")}
        >
          <Base.MaxContent
            className={`${this.decorateCSS("maxContent")} ${
              [
                "Sticky Transparent" === position && !isScrolled,
                position === "Absolute",
              ].some(Boolean)
                ? this.decorateCSS("transparentBackground")
                : ""
            }`}
          >
            <div className={this.decorateCSS("leftSection")}>
              {currentLogo && (
                <div
                  className={this.decorateCSS("logo")}
                  onClick={() => this.handleCloseMenu()}
                >
                  <ComposerLink path={currentLogo.urlTo}>
                    <img
                      src={currentLogo.image}
                      className={this.decorateCSS("logoImage")}
                    />
                  </ComposerLink>
                </div>
              )}

              {!isMobile && (
              <nav className={this.decorateCSS("pcNavbar")}>
              {menuItems
                .filter((item) => item && item.title)
                .map((item, index) => (
                  <div
                    key={index}
                    className={this.decorateCSS("menuItemContainer")}
                  >
                    {item.menuType === "Dropdown" ? (
                      <div 
                        className={this.decorateCSS("menuItem")}
                        onClick={(e) => this.handleDropdownClick(index, e)}
                      >
                        <Base.P
                          className={`${this.decorateCSS(
                            "menuItemTitle"
                          )}`}
                        >
                          {item.title}
                        </Base.P>
                        <Base.Icon
                          name={this.getPropValue("dropdownIcon")}
                          propsIcon={{
                            className: `${this.decorateCSS("dropdownIcon")} ${
                              activeDropdown === index ? this.decorateCSS("active") : ""
                            }`,
                          }}
                        />
                      </div>
                    ) : (
                      <ComposerLink path={item.url}>
                        <div className={this.decorateCSS("menuItem")}>
                          <Base.P
                            className={`${this.decorateCSS(
                              "menuItemTitle"
                            )}`}
                          >
                            {item.title}
                          </Base.P>
                        </div>
                      </ComposerLink>
                    )}
                    {item.menuType === "Dropdown" && item.categories && activeDropdown === index && (
                      <div className={this.decorateCSS("dropdown")}>
                        {(() => {
                          const rowCount = item.rowCount || 4;
                          const categories = item.categories || [];
                          const rightCategories = item.rightCategories || [];
                          const columns: Category[][] = Array.from(
                            { length: rowCount },
                            () => []
                          );
                          categories.forEach((category, index) => {
                            columns[index % rowCount].push(category);
                          });
                          return (
                            <div
                              className={this.decorateCSS(
                                "dropdownContentContainer"
                              )}
                            >
                              {columns.map((column, colIndex) => (
                                <div
                                  key={colIndex}
                                  className={this.decorateCSS("dropdownColumn")}
                                >
                                  {column.map((category, catIndex) => (
                                    <div
                                      key={catIndex}
                                      className={this.decorateCSS(
                                        "dropdownItem"
                                      )}
                                    >
                                      <ComposerLink path={category.url}>
                                        <Base.H5
                                          className={`${this.decorateCSS(
                                            "dropdownItemTitle"
                                          )}`}
                                        >
                                          {category.title}
                                          {category.icon && (
                                            <Base.Icon
                                              name={category.icon}
                                              propsIcon={{
                                                className: this.decorateCSS(
                                                  "DropdownSectionItemIcon"
                                                ),
                                              }}
                                            />
                                          )}
                                        </Base.H5>
                                      </ComposerLink>
                                      {category.items.map((catItem, iIndex) => (
                                        <ComposerLink
                                          key={iIndex}
                                          path={catItem.url}
                                        >
                                          <div
                                            className={this.decorateCSS(
                                              "DropdownSectionItemContainer"
                                            )}
                                          >
                                            <div
                                              className={this.decorateCSS(
                                                "DropdownSectionItemSectionContainer"
                                              )}
                                            >
                                              <Base.P
                                                className={this.decorateCSS(
                                                  "DropdownSectionItemTitle"
                                                )}
                                              >
                                                {catItem.label}
                                                {catItem.icon && (
                                                  <Base.Icon
                                                    name={catItem.icon}
                                                    propsIcon={{
                                                      className:
                                                        this.decorateCSS(
                                                          "DropdownSectionItemIcon"
                                                        ),
                                                    }}
                                                  />
                                                )}
                                              </Base.P>
                                              {catItem.description && (
                                                <Base.P
                                                  className={this.decorateCSS(
                                                    "DropdownSectionItemDescription"
                                                  )}
                                                >
                                                  {catItem.description}
                                                </Base.P>
                                              )}
                                            </div>
                                          </div>
                                        </ComposerLink>
                                      ))}
                                      {category.image && (
                                        <div className={this.decorateCSS("dropdownCategoryImage")}>
                                          <img
                                            src={category.image}
                                            alt={category.title}
                                            className={this.decorateCSS("categoryImage")}
                                          />
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              ))}

                              {rightCategories.length > 0 && (
                                <div className={this.decorateCSS("dropdownRightColumn")}>
                                  {rightCategories.map((category, catIndex) => {
                                   const rightContainerExists = category.items.length > 0 || category.image || category.url || category.title || category.icon;
                                    console.log(rightContainerExists, "rightContainerExists");
                                    return rightContainerExists && (
                                      <div
                                      key={catIndex}
                                      className={this.decorateCSS(
                                        "dropdownItem"
                                      )}
                                    >
                                      <ComposerLink path={category.url}>
                                        <Base.H5
                                          className={`${this.decorateCSS(
                                            "dropdownItemTitle"
                                          )}`}
                                        >
                                          {category.title}
                                          {category.icon && (
                                            <Base.Icon
                                              name={category.icon}
                                              propsIcon={{
                                                className: this.decorateCSS(
                                                  "DropdownSectionItemIcon"
                                                ),
                                              }}
                                            />
                                          )}
                                        </Base.H5>
                                      </ComposerLink>
                                      {category.items.map((catItem, iIndex) => (
                                        <ComposerLink
                                          key={iIndex}
                                          path={catItem.url}
                                        >
                                          <div
                                            className={this.decorateCSS(
                                              "DropdownSectionItemContainer"
                                            )}
                                          >
                                            <div
                                              className={this.decorateCSS(
                                                "DropdownSectionItemSectionContainer"
                                              )}
                                            >
                                              <Base.P
                                                className={this.decorateCSS(
                                                  "DropdownSectionItemTitle"
                                                )}
                                              >
                                                {catItem.label}
                                                {catItem.icon && (
                                                  <Base.Icon
                                                    name={catItem.icon}
                                                    propsIcon={{
                                                      className:
                                                        this.decorateCSS(
                                                          "DropdownSectionItemIcon"
                                                        ),
                                                    }}
                                                  />
                                                )}
                                              </Base.P>
                                              {catItem.description && (
                                                <Base.P
                                                  className={this.decorateCSS(
                                                    "DropdownSectionItemDescription"
                                                  )}
                                                >
                                                  {catItem.description}
                                                </Base.P>
                                              )}
                                            </div>
                                          </div>
                                        </ComposerLink>
                                      ))}
                                      {category.image && (
                                        <div className={this.decorateCSS("dropdownCategoryImage")}>
                                          <img
                                            src={category.image}
                                            alt={category.title}
                                            className={this.decorateCSS("categoryImage")}
                                          />
                                        </div>
                                      )}
                                    </div>
                                    )
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })()}
                        {item.rightSection?.enabled && (
                          <div
                            className={this.decorateCSS("dropdownRightSection")}
                          >
                            <img
                              src={item.rightSection.image}
                              className={this.decorateCSS("rightImage")}
                            />
                            <ComposerLink path={item.rightSection.ctaLink}>
                              <Base.P className={this.decorateCSS("ctaTitle")}>
                                {item.rightSection.ctaTitle}
                              </Base.P>
                            </ComposerLink>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              )}
            </div>

            <div className={this.decorateCSS("rightSide")}>
              {buttons.length > 0 && !isMobile && (
                <div className={this.decorateCSS("buttons")}>
                  {buttons.map((btn, idx) => (
                    <ComposerLink key={idx} path={btn.url}>
                      <Base.Button
                        className={`${this.decorateCSS("button")} ${
                          [
                            "Sticky Transparent" === position && !isScrolled,
                            position === "Absolute",
                          ].some(Boolean) && !hamburgerNavActive
                            ? this.decorateCSS(`${btn.type}`)
                            : ""
                        }`}
                        buttonType={btn.type}
                      >
                        {btn.text}
                      </Base.Button>
                    </ComposerLink>
                  ))}
                </div>
              )}

              {isMobile &&
                (hamburgerNavActive ? (
                  <Base.Icon
                    name={this.getPropValue("closeIcon")}
                    propsIcon={{
                      className: this.decorateCSS("closeIcon"),
                      onClick: (e: any) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.handleCloseMenu();
                      },
                    }}
                  />
                ) : (
                  <Base.Icon
                    name={this.getPropValue("hamburgerIcon")}
                    propsIcon={{
                      className: this.decorateCSS("hamburgerIcon"),
                      onClick: (e: any) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.handleOpenMenu();
                      },
                    }}
                  />
                ))}
            </div>
          </Base.MaxContent>

          {isVisible && (
            <div
              className={`${this.decorateCSS("hamburgerNav")} ${
                hamburgerNavActive ? this.decorateCSS("active") : ""
              } ${navbarOverflowShow ? this.decorateCSS("overflowShow") : ""}`}
            >
              <div className={this.decorateCSS("hamburgerNavContainer")}>
                <div className={this.decorateCSS("hamburgerNavMaxContent")}>
                  <div className={this.decorateCSS("hamburgerMenu")}>
                    {menuItems
                      .filter((item) => item && item.title)
                      .map((item, index) => {
                        const isActive =
                          this.getComponentState("subNavActiveIndex") === index;
                        return (
                          <div
                            className={this.decorateCSS("hamburgerMenuItem")}
                            key={index}
                          >
                            <div
                              className={`${this.decorateCSS(
                                "hamburgerMenuItemHeader"
                              )}`}
                              onClick={() => this.navClick(index)}
                            >
                              <Base.P
                                className={`${this.decorateCSS(
                                  "hamburgerMenuItemTitle"
                                )}`}
                              >
                                {item.title}
                              </Base.P>
                              {item.menuType === "Dropdown" && (
                                <Base.Icon
                                  name={this.getPropValue("dropdownIcon")}
                                  propsIcon={{
                                    className: `${this.decorateCSS(
                                      "dropdownIcon"
                                    )} ${
                                      isActive ? this.decorateCSS("active") : ""
                                    }`,
                                  }}
                                />
                              )}
                            </div>
                            {item.menuType === "Dropdown" &&
                              ((item.categories && item.categories.length > 0) || (item.rightCategories && item.rightCategories.length > 0)) && (
                                <div
                                  className={`${this.decorateCSS(
                                    "hamburgerSubmenu"
                                  )} ${
                                    isActive ? this.decorateCSS("active") : ""
                                  }`}
                                >
                                  {/* Normal Categories */}
                                  {item.categories?.map((category, catIndex) => (
                                    <div
                                      className={this.decorateCSS(
                                        "hamburgerCategorySection"
                                      )}
                                      key={catIndex}
                                    >
                                      <ComposerLink path={category.url}>
                                        <Base.P
                                          className={`${this.decorateCSS(
                                            "hamburgerCategoryTitle"
                                          )}`}
                                        >
                                          {category.title}
                                          {category.icon && (
                                            <Base.Icon
                                              name={category.icon}
                                              propsIcon={{
                                                className: this.decorateCSS(
                                                  "DropdownSectionItemIcon"
                                                ),
                                              }}
                                            />
                                          )}
                                        </Base.P>
                                      </ComposerLink>
                                      <div
                                        className={this.decorateCSS(
                                          "hamburgerCategoryItems"
                                        )}
                                      >
                                        {category.items?.map(
                                          (subItem, subIndex) => (
                                            <div
                                              className={this.decorateCSS(
                                                "hamburgerCategoryItem"
                                              )}
                                              key={subIndex}
                                            >
                                              <ComposerLink path={subItem.url}>
                                                <Base.P
                                                  className={`${this.decorateCSS(
                                                    "hamburgerCategoryItemTitle"
                                                  )}`}
                                                >
                                                  {subItem.label}
                                                  {subItem.icon && (
                                                    <Base.Icon
                                                      name={subItem.icon}
                                                      propsIcon={{
                                                        className:
                                                          this.decorateCSS(
                                                            "DropdownSectionItemIcon"
                                                          ),
                                                      }}
                                                    />
                                                  )}
                                                </Base.P>
                                              </ComposerLink>
                                            </div>
                                          )
                                        )}
                                      </div>
                                      {category.image && (
                                        <div className={this.decorateCSS("dropdownCategoryImage")}>
                                          <img
                                            src={category.image}
                                            alt={category.title}
                                            className={this.decorateCSS("categoryImage")}
                                          />
                                        </div>
                                      )}
                                    </div>
                                  ))}

                                  {/* Right Categories */}
                                  {item.rightCategories?.map((category, catIndex) => (
                                    <div
                                      className={this.decorateCSS(
                                        "hamburgerCategorySection"
                                      )}
                                      key={`right-${catIndex}`}
                                    >
                                      <ComposerLink path={category.url}>
                                        <Base.P
                                          className={`${this.decorateCSS(
                                            "hamburgerCategoryTitle"
                                          )}`}
                                        >
                                          {category.title}
                                          {category.icon && (
                                            <Base.Icon
                                              name={category.icon}
                                              propsIcon={{
                                                className: this.decorateCSS(
                                                  "DropdownSectionItemIcon"
                                                ),
                                              }}
                                            />
                                          )}
                                        </Base.P>
                                      </ComposerLink>
                                      <div
                                        className={this.decorateCSS(
                                          "hamburgerCategoryItems"
                                        )}
                                      >
                                        {category.items?.map(
                                          (subItem, subIndex) => (
                                            <div
                                              className={this.decorateCSS(
                                                "hamburgerCategoryItem"
                                              )}
                                              key={subIndex}
                                            >
                                              <ComposerLink path={subItem.url}>
                                                <Base.P
                                                  className={`${this.decorateCSS(
                                                    "hamburgerCategoryItemTitle"
                                                  )}`}
                                                >
                                                  {subItem.label}
                                                  {subItem.icon && (
                                                    <Base.Icon
                                                      name={subItem.icon}
                                                      propsIcon={{
                                                        className:
                                                          this.decorateCSS(
                                                            "DropdownSectionItemIcon"
                                                          ),
                                                      }}
                                                    />
                                                  )}
                                                </Base.P>
                                              </ComposerLink>
                                            </div>
                                          )
                                        )}
                                      </div>
                                      {category.image && (
                                        <div className={this.decorateCSS("dropdownCategoryImage")}>
                                          <img
                                            src={category.image}
                                            alt={category.title}
                                            className={this.decorateCSS("categoryImage")}
                                          />
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                          </div>
                        );
                      })}
                  </div>
                  {buttons.length > 0 && isMobile && (
                    <div className={this.decorateCSS("hamburgerButtons")}>
                      {buttons.map((btn, idx) => (
                        <ComposerLink key={idx} path={btn.url}>
                          <Base.Button
                            className={`${this.decorateCSS(
                              "hamburgerButton"
                            )} ${this.decorateCSS(btn.type)}`}
                            buttonType={btn.type}
                            onClick={() => this.handleCloseMenu()}
                          >
                            {btn.text}
                          </Base.Button>
                        </ComposerLink>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </Base.Navigator.Container>

        <Base.Overlay
          className={this.decorateCSS("overlay")}
          isVisible={isVisible}
          onClick={() => this.handleCloseMenu()}
        />
      </>
    );
  }
}

export default Navbar10;
