import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import { Base } from "composer-tools/composer-base-components/base/base";
import ComposerLanguage from "composer-tools/composer-base-components/language/language";

type Item = {
  title: JSX.Element;
  navigate_to: string;
  sub_items: Item[];
};

class Navbar4 extends BaseNavigator {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "select",
      key: "position",
      displayer: "Position",
      value: "Normal",
      additionalParams: {
        selectItems: ["Normal", "Absolute", "Sticky Colorful", "Sticky Transparent"],
      },
    });

    this.addProp({
      type: "image",
      key: "profile",
      displayer: "Profile",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676bc4c70655f8002cac06e4?alt=media",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "SARAH WILLIAMS",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Once, long age, I took intro in a certain skire then More...",
    });

    this.addProp({
      type: "image",
      key: "logo_transparent",
      displayer: "Logo 1",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/676a9ac20655f8002caba0b7?alt=media",
    });

    this.addProp({
      type: "image",
      key: "logo_default",
      displayer: "Logo 2",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6762cc190655f8002ca8c66b?alt=media",
    });

    this.addProp({
      type: "page",
      key: "logo_navigate",
      displayer: "Logo Navigation",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "social",
      displayer: "Social",
      value: [
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "FaFacebook",
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Social Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "FaTwitter",
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Social Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "RiInstagramFill",
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Social Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "footer-social",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "socialIcon",
              displayer: "Social Icon",
              value: "FaTiktok",
            },
            {
              type: "page",
              key: "socialLink",
              displayer: "Social Link",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "language",
      displayer: "Language",
      value: true,
    });

    this.addProp({
      type: "icon",
      key: "hamburger_icon",
      displayer: "Hamburger Icon",
      value: "IoMenu",
    });

    this.addProp({
      type: "icon",
      displayer: "Dropdown Icon",
      key: "dropdown_icon",
      value: "FiPlus",
    });

    this.addProp({
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
              key: "title",
              displayer: "Title",
              value: "HOME",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: "",
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item_group",
                  displayer: "Sub Item Group",
                  value: [
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items Array",
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
                              value: "First Title",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },

                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
                              value: [],
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
                              value: "HOME - SHOP",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            // {
                            //   type: "array",
                            //   key: "sub_items",
                            //   displayer: "Sub Items",
                            //   value: [
                            //     {
                            //       type: "object",
                            //       key: "item",
                            //       displayer: "Item",
                            //       value: [
                            //         {
                            //           type: "string",
                            //           key: "title",
                            //           displayer: "Title",
                            //           value: "",
                            //         },
                            //         {
                            //           type: "image",
                            //           key: "image",
                            //           displayer: "Image",
                            //           value: "",
                            //         },
                            //         {
                            //           type: "page",
                            //           key: "navigate_to",
                            //           displayer: "Navigate to",
                            //           value: "",
                            //         },
                            //       ],
                            //     },
                            //   ],
                            // },
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
                              value: "HOME - FOOD",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            // {
                            //   type: "array",
                            //   key: "sub_items",
                            //   displayer: "Sub Items",
                            //   value: [
                            //     {
                            //       type: "object",
                            //       key: "item",
                            //       displayer: "Item",
                            //       value: [
                            //         {
                            //           type: "string",
                            //           key: "title",
                            //           displayer: "Title",
                            //           value: "",
                            //         },
                            //         {
                            //           type: "image",
                            //           key: "image",
                            //           displayer: "Image",
                            //           value: "",
                            //         },
                            //         {
                            //           type: "page",
                            //           key: "navigate_to",
                            //           displayer: "Navigate to",
                            //           value: "",
                            //         },
                            //       ],
                            //     },
                            //   ],
                            // },
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
                              value: "HOME - MUSIC",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            // {
                            //   type: "array",
                            //   key: "sub_items",
                            //   displayer: "Sub Items",
                            //   value: [
                            //     {
                            //       type: "object",
                            //       key: "item",
                            //       displayer: "Item",
                            //       value: [
                            //         {
                            //           type: "string",
                            //           key: "title",
                            //           displayer: "Title",
                            //           value: "",
                            //         },
                            //         {
                            //           type: "image",
                            //           key: "image",
                            //           displayer: "Image",
                            //           value: "",
                            //         },
                            //         {
                            //           type: "page",
                            //           key: "navigate_to",
                            //           displayer: "Navigate to",
                            //           value: "",
                            //         },
                            //       ],
                            //     },
                            //   ],
                            // },
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
                              value: "HOME - NEWS",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            // {
                            //   type: "array",
                            //   key: "sub_items",
                            //   displayer: "Sub Items",
                            //   value: [
                            //     {
                            //       type: "object",
                            //       key: "item",
                            //       displayer: "Item",
                            //       value: [
                            //         {
                            //           type: "string",
                            //           key: "title",
                            //           displayer: "Title",
                            //           value: "",
                            //         },
                            //         {
                            //           type: "image",
                            //           key: "image",
                            //           displayer: "Image",
                            //           value: "",
                            //         },
                            //         {
                            //           type: "page",
                            //           key: "navigate_to",
                            //           displayer: "Navigate to",
                            //           value: "",
                            //         },
                            //       ],
                            //     },
                            //   ],
                            // },
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
                              value: "HOME - PERSONAL",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            // {
                            //   type: "array",
                            //   key: "sub_items",
                            //   displayer: "Sub Items",
                            //   value: [
                            //     {
                            //       type: "object",
                            //       key: "item",
                            //       displayer: "Item",
                            //       value: [
                            //         {
                            //           type: "string",
                            //           key: "title",
                            //           displayer: "Title",
                            //           value: "",
                            //         },
                            //         {
                            //           type: "image",
                            //           key: "image",
                            //           displayer: "Image",
                            //           value: "",
                            //         },
                            //         {
                            //           type: "page",
                            //           key: "navigate_to",
                            //           displayer: "Navigate to",
                            //           value: "",
                            //         },
                            //       ],
                            //     },
                            //   ],
                            // },
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
              value: "FEATURES",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: "",
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                // {
                //   type: "object",
                //   key: "sub_item_group",
                //   displayer: "Sub Item Group",
                //   value: [
                //     // {
                //     //   type: "array",
                //     //   key: "sub_items",
                //     //   displayer: "Sub Items Array",
                //     //   value: [
                //     //     {
                //     //       type: "object",
                //     //       key: "item",
                //     //       displayer: "Item",
                //     //       value: [
                //     //         {
                //     //           type: "string",
                //     //           key: "title",
                //     //           displayer: "Title",
                //     //           value: "",
                //     //         },
                //     //         {
                //     //           type: "page",
                //     //           key: "navigate_to",
                //     //           displayer: "Navigate to",
                //     //           value: "",
                //     //         },
                //     //         {
                //     //           type: "array",
                //     //           key: "sub_items",
                //     //           displayer: "Sub Items",
                //     //           value: [
                //     //             {
                //     //               type: "object",
                //     //               key: "item",
                //     //               displayer: "Item",
                //     //               value: [
                //     //                 {
                //     //                   type: "string",
                //     //                   key: "title",
                //     //                   displayer: "Title",
                //     //                   value: "",
                //     //                 },
                //     //                 {
                //     //                   type: "page",
                //     //                   key: "navigate_to",
                //     //                   displayer: "Navigate to",
                //     //                   value: "",
                //     //                 },
                //     //               ],
                //     //             },
                //     //           ],
                //     //         },
                //     //       ],
                //     //     },
                //     //   ],
                //     // },
                //   ],
                // },
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
              value: "POST BLOCKS",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: "",
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item_group",
                  displayer: "Sub Item Group",
                  value: [
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items Array",
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
                              value: "Recent Posts Block – Boxed (NEW ?)",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },

                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "Feature Post + Bottom Thumbnails Block",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "Feature Post + Right Thumbnails Block",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "Grid Post Block",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "Modern List",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "Image Background Post Block",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "Recent Posts Block",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "SLIDERS",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
              value: "MEGA MENU",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: "",
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item_group",
                  displayer: "Sub Item Group",
                  value: [
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items Array",
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
                              value: "STYLE",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },

                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "MOUNTAIN",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "FOOD VIDEOS",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "CITY",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "ARCHITECTURE",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "INTERVIEW",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
              value: "HEADERS",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: "",
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item_group",
                  displayer: "Sub Item Group",
                  value: [
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items Array",
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
                              value: "VIDEO HEADER",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },

                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "IMAGE HEADER",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "COLORED HEADER",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "TOP MENU",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "FIXED HEADER",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
              value: "SINGLE POST",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: "",
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item_group",
                  displayer: "Sub Item Group",
                  value: [
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items Array",
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
                              value: "FULL IMAGE - RIGHT SIDEBAR",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },

                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "FULL IMAGE - LEFT SIDEBAR",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "FULL IMAGE - NO SIDEBAR",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "FULL WIDTH IMAGE - RIGHT SIDEBAR",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "FULL WIDTH IMAGE - LEFT SIDEBAR",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "FULL WIDTH IMAGE - NO SIDEBAR",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "HALF IMAGE - RIGHT SIDEBAR",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "HALF IMAGE - LEFT SIDEBAR",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "HALF IMAGE - NO SIDEBAR",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "GALLERY POST FORMAT",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "VIDEO POST FORMAT",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
              value: "SHOP",
            },
            {
              type: "page",
              key: "navigate_to",
              displayer: "Navigate to",
              value: "",
            },
            {
              type: "array",
              key: "sub_items",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "sub_item_group",
                  displayer: "Sub Item Group",
                  value: [
                    {
                      type: "array",
                      key: "sub_items",
                      displayer: "Sub Items Array",
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
                              value: "SHOP CATEGORY",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },

                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "SHOP SINGLE PRODUCT",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "CHECKOUT",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
                              value: "CART",
                            },
                            {
                              type: "page",
                              key: "navigate_to",
                              displayer: "Navigate to",
                              value: "",
                            },
                            {
                              type: "array",
                              key: "sub_items",
                              displayer: "Sub Items",
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
                                      value: "",
                                    },
                                    {
                                      type: "image",
                                      key: "image",
                                      displayer: "Image",
                                      value: "",
                                    },
                                    {
                                      type: "page",
                                      key: "navigate_to",
                                      displayer: "Navigate to",
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
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Language Icon",
      value: "FaBagShopping",
    });

    this.state["componentProps"]["hamburgerNavActive"] = true;
    this.state["componentProps"]["navActive"] = null;
    this.state["componentProps"]["subNavActive"] = null;
    this.state["componentProps"]["selectCardIndex"] = null;
    this.setComponentState("isScrolled", false);
  }

  getName(): string {
    return "Navbar 3";
  }

  hamburgerNavClick() {
    let value: boolean = this.getComponentState("hamburgerNavActive");
    this.setComponentState("hamburgerNavActive", !value);
  }

  navCLick(index: number) {
    const currentValue = this.getComponentState("subNavActiveIndex");
    if (currentValue === index) {
      this.setComponentState("navActive", !this.getComponentState("navActive"));
      this.setComponentState("subNavActiveIndex", null);
      this.setComponentState("subNavActive", null);
    } else {
      this.setComponentState("subNavActiveIndex", null);
      this.setComponentState("navActive", false);
      this.setComponentState("subNavActive", null);

      this.setComponentState("navActive", true);
      this.setComponentState("subNavActiveIndex", index);
    }
  }

  subNavCLick(index: any) {
    const currentValue = this.getComponentState("subNavActive");
    if (currentValue === index) {
      this.setComponentState("subNavActive", null);
    } else {
      this.setComponentState("subNavActive", null);

      this.setComponentState("subNavActive", index);
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      this.setComponentState("isScrolled", scrollPosition);
    });
  }

  render() {
    const navbarElement = document.getElementById(`navbar4-height`);
    const navbarHeight = navbarElement?.clientHeight || "auto";

    const items = this.castToObject<Item[]>("items");

    const formatClassName = (className: any) => className.replace(/\s+/g, "");

    const logoDefault = this.getPropValue("logo_default");
    const logoTransparent = this.getPropValue("logo_transparent");

    const position = this.getPropValue("position");
    const logo = position === "Absolute" || (position === "Sticky Transparent" && this.getComponentState("isScrolled") < navbarHeight) ? logoTransparent : logoDefault;
    const social = this.castToObject<any[]>("social");

    const language = this.getPropValue("language");

    const profile = this.getPropValue("profile");
    const textsExist = this.castToString(this.getPropValue("title")) || this.castToString(this.getPropValue("description"));

    const topNavExist = textsExist || profile || logo || social.length > 0;
    return (
      <Base.Container
        id={"navbar4-height"}
        className={`${this.decorateCSS("container")} 
              ${this.decorateCSS(formatClassName(this.getPropValue("position")))} `}
      >
        <div className={`${this.decorateCSS("max-content")} ${this.getComponentState("isScrolled") > navbarHeight && this.decorateCSS("bg-color")}`}>
          {topNavExist && (
            <div className={this.decorateCSS("top-container")}>
              <Base.MaxContent className={this.decorateCSS("top-max-content")}>
                {topNavExist && (
                  <div className={this.decorateCSS("top-nav")}>
                    {(textsExist || profile) && (
                      <div className={this.decorateCSS("left")}>
                        {profile && <img className={this.decorateCSS("image")} src={this.getPropValue("profile")} alt="" />}
                        {textsExist && (
                          <div className={this.decorateCSS("texts")}>
                            {this.castToString(this.getPropValue("title")) && <Base.H5 className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.H5>}
                            {this.castToString(this.getPropValue("description")) && <Base.P className={this.decorateCSS("description")}> {this.getPropValue("description")}</Base.P>}
                          </div>
                        )}
                      </div>
                    )}

                    {logo && (
                      <div className={this.decorateCSS("image-container")}>
                        <ComposerLink path={this.getPropValue("logo_navigate")}>
                          <img className={this.decorateCSS("image")} src={logo} alt="" />
                        </ComposerLink>
                      </div>
                    )}

                    {social.length > 0 && (
                      <div className={this.decorateCSS("right")}>
                        {social.length > 0 && (
                          <div className={this.decorateCSS("social")}>
                            {social.map(
                              (item: any, indexSocial: number) =>
                                item.socialIcon && (
                                  <ComposerLink key={indexSocial} path={item.socialLink}>
                                    <ComposerIcon propsIcon={{ className: this.decorateCSS("icon") }} name={item.socialIcon} />
                                  </ComposerLink>
                                )
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </Base.MaxContent>
            </div>
          )}

          <Base.MaxContent>
            <div className={this.decorateCSS("contentDown")}>
              <nav className={this.decorateCSS("pc-navigator")}>
                <div className={this.decorateCSS("items")}>
                  {items.map((item: Item, indexItemList: number) => {
                    const titleExist = this.castToString(item.title);
                    return (
                      titleExist && (
                        <div className={this.decorateCSS("menu-item")} key={indexItemList}>
                          <ComposerLink path={item.navigate_to}>
                            <div className={this.decorateCSS("item")}>
                              <Base.H5 className={this.decorateCSS("title")}>
                                {item.sub_items?.length > 0 && (
                                  <ComposerIcon
                                    name={this.getPropValue("dropdown_icon")}
                                    propsIcon={{
                                      className: this.decorateCSS("icon"),
                                    }}
                                  />
                                )}
                                {item.title}
                              </Base.H5>

                              {item.sub_items.length > 0 && (
                                <div className={this.decorateCSS("sub-items")}>
                                  {item.sub_items.map((subItemGroup, subItemGroupIndex) => (
                                    <div className={this.decorateCSS("sub-item-group")} key={subItemGroupIndex}>
                                      {subItemGroup.sub_items.length > 0 &&
                                        subItemGroup.sub_items?.map((subItem, subItemIndex) => {
                                          const subItemExist = this.castToString(subItem.title);
                                          return (
                                            subItemGroup.sub_items.length > 0 &&
                                            subItemExist && (
                                              <div className={this.decorateCSS("sub-item")} key={subItemIndex}>
                                                <Base.P className={this.decorateCSS("sub-item-text")}>
                                                  {subItem.title}
                                                  {subItem.sub_items?.length > 0 && subItemExist && (
                                                    <ComposerIcon
                                                      name={this.getPropValue("right_icon")}
                                                      propsIcon={{
                                                        className: this.decorateCSS("icon"),
                                                      }}
                                                    />
                                                  )}
                                                </Base.P>
                                                {subItem.sub_items?.length > 0 && (
                                                  <div className={this.decorateCSS("list")}>
                                                    {subItem.sub_items.map((subItem2, subItem2Index) => {
                                                      const subItem2Exist = this.castToString(subItem2.title);

                                                      return (
                                                        subItem2Exist && (
                                                          <span className={this.decorateCSS("list-item")} key={subItem2Index}>
                                                            {subItem2.title}
                                                          </span>
                                                        )
                                                      );
                                                    })}
                                                  </div>
                                                )}
                                              </div>
                                            )
                                          );
                                        })}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </ComposerLink>
                        </div>
                      )
                    );
                  })}
                </div>

                {language && (
                  <div className={this.decorateCSS("language")}>
                    <ComposerLanguage type="dropdown" title="code" />
                  </div>
                )}
              </nav>

              {this.getPropValue("hamburger_icon") && (
                <div className={this.decorateCSS("hamburger-navbar")}>
                  <ComposerIcon
                    name={this.getPropValue("hamburger_icon")}
                    propsIcon={{
                      className: this.decorateCSS("hamburger-icon"),
                      onClick: () => {
                        this.hamburgerNavClick();
                      },
                    }}
                  />
                </div>
              )}

              <nav className={this.decorateCSS("navigator-mobile")}>
                {this.getComponentState("hamburgerNavActive") && (
                  <div className={this.decorateCSS("navbar-child")}>
                    {items.map((item: Item, indexItemList: number) => {
                      return (
                        <div className={this.decorateCSS("menu-item")} key={indexItemList}>
                          <div
                            className={this.decorateCSS("item")}
                            onClick={() => {
                              this.navCLick(indexItemList);
                            }}
                          >
                            <ComposerLink path={item.navigate_to}></ComposerLink>
                            <div className={this.decorateCSS("title")}>
                              <span className={this.decorateCSS("title-text")}>{item.title}</span>
                              {item.sub_items?.length > 0 && <ComposerIcon name={this.getPropValue("dropdown_icon")} />}
                            </div>
                          </div>

                          {this.getComponentState("subNavActiveIndex") === indexItemList && (
                            <div className={this.decorateCSS("sub-items")}>
                              {this.getComponentState("navActive") &&
                                item.sub_items?.length > 0 &&
                                item.sub_items.map((subItem, subIndex) => (
                                  <>
                                    <div
                                      className={this.decorateCSS("sub-item")}
                                      onClick={() => {
                                        this.subNavCLick(subIndex);
                                      }}
                                    >
                                      <div className={this.decorateCSS("sub-item-title")}>
                                        <span className={this.decorateCSS("sub-item-title-text")}>{`Section ${subIndex + 1}`}</span>

                                        {subItem.sub_items?.length > 0 && (
                                          <ComposerIcon
                                            name={this.getPropValue("dropdown_icon")}
                                            propsIcon={{
                                              className: this.decorateCSS("down-icon"),
                                            }}
                                          />
                                        )}
                                      </div>
                                    </div>
                                    {this.getComponentState("subNavActive") === subIndex && (
                                      <div className={this.decorateCSS("list")}>
                                        {subItem.sub_items?.map((subItem2) => {
                                          const subItem2Exist = this.castToString(subItem2.title);
                                          return subItem2Exist && <span className={this.decorateCSS("list-item")}>{subItem2.title}</span>;
                                        })}
                                      </div>
                                    )}
                                  </>
                                ))}
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {language && <div className={this.decorateCSS("line")} />}

                    {language && (
                      <div className={this.decorateCSS("language")}>
                        <ComposerLanguage type="accordion" title="name" />
                      </div>
                    )}
                  </div>
                )}
              </nav>
            </div>
          </Base.MaxContent>
        </div>
      </Base.Container>
    );
  }
}

export default Navbar4;
