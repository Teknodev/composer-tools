import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery4.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type NavItem = {
  title: JSX.Element;
  images: { value: any }[];
  hasSubnav: string;
  subnavItems: SubnavItem[];
}

type SubnavItem = {
  value: any;
  title: string;
  images: Object[];
}

class ImageGallery4 extends BaseImageGallery {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "navItems",
      displayer: "Nav Items",
      value: [
        {
          type: "object",
          key: "nav-item",
          displayer: "Nav Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Nav Title",
              value: "Meat"
            },
            {
              type: "select",
              key: "hasSubnav",
              displayer: "Has Sub-items?",
              value: "No",
              additionalParams: {
                selectItems: ["Yes", "No"]
              }
            },
            {
              type: "array",
              key: "images",
              displayer: "Images",
              value: [
                {
                  type: "image",
                  key: "image",
                  displayer: "Image",
                  value: "https://www.medicalpark.com.tr/_uploads/_images/_healthGuide/2rOgynuh.jpeg"
                },
              ]
            },
            {
              type: "array",
              key: "subnavItems",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "subnavItem",
                  displayer: "Subnav Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Beef"
                    },
                    {
                      type: "array",
                      key: "images",
                      displayer: "Images",
                      value: [
                        {
                          type: "image",
                          key: "image",
                          displayer: "Image",
                          value: "https://www.allrecipes.com/thmb/Qch2UpqrMAdaLPi6WwJxPHzz6BY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sous-vide-brisket-mfs-193-4x3-1-24930daf16854a9091eaff1503aac157.jpg"
                        },
                        {
                          type: "image",
                          key: "image",
                          displayer: "Image",
                          value: "https://www.andy-cooks.com/cdn/shop/articles/20231212021337-andy-20cooks-20-20roast-20beef.jpg?v=1702956712"
                        },
                      ]
                    }
                  ]
                },
                {
                  type: "object",
                  key: "subnavItem",
                  displayer: "Subnav Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Pork"
                    },
                    {
                      type: "array",
                      key: "images",
                      displayer: "Images",
                      value: [
                        {
                          type: "image",
                          key: "image",
                          displayer: "Image",
                          value: "https://www.allrecipes.com/thmb/gbMu9ffS-EnGHt1yShdmfVjzD5k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14726-grilled-pork-tenderloin-beauty-3x4-f4efabb5032f464dae47fe4ee57690da.jpg"
                        },
                        {
                          type: "image",
                          key: "image",
                          displayer: "Image",
                          value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXSVW42Zl1zb5DxIYQmHcTyLjZyrTO2e_w7w&s"
                        },
                      ]
                    },
                  ]
                },
                {
                  type: "object",
                  key: "subnavItem",
                  displayer: "Subnav Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Lamb"
                    },
                    {
                      type: "array",
                      key: "images",
                      displayer: "Images",
                      value: [
                        {
                          type: "image",
                          key: "image",
                          displayer: "Image",
                          value: "https://images.getrecipekit.com/v1615995124_RedRubbedBabyLambChopsPg101_xyzuwo.jpg?aspect_ratio=4:3&quality=90&"
                        },
                        {
                          type: "image",
                          key: "image",
                          displayer: "Image",
                          value: "https://images.immediate.co.uk/production/volatile/sites/30/2018/03/One-pan-herby-roast-lamb-with-lemon-potatoes-feta-a0ad1e0.jpg?quality=90&resize=556,505"
                        },
                      ]
                    },
                  ]
                },
              ]
            },
          ]
        },
        {
          type: "object",
          key: "nav-item",
          displayer: "Nav Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Nav Title",
              value: "Seafood"
            },
            {
              type: "select",
              key: "hasSubnav",
              displayer: "Has Sub-items?",
              value: "Yes",
              additionalParams: {
                selectItems: ["Yes", "No"]
              }
            },
            {
              type: "array",
              key: "images",
              displayer: "Images",
              value: [
                {
                  type: "image",
                  key: "image",
                  displayer: "Image",
                  value: "https://images.immediate.co.uk/production/volatile/sites/30/2021/07/Roast-seafood-dish-b585388.jpg?resize=768,574"
                },
              ]
            },
            {
              type: "array",
              key: "subnavItems",
              displayer: "Sub Items",
              value: [
                {
                  type: "object",
                  key: "subnavItem",
                  displayer: "Subnav Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Fish"
                    },
                    {
                      type: "array",
                      key: "images",
                      displayer: "Images",
                      value: [
                        {
                          type: "image",
                          key: "image",
                          displayer: "Image",
                          value: "https://m.economictimes.com/thumb/msid-68495044,width-1600,height-900,resizemode-4,imgsize-1335371/fish.jpg"
                        },
                        {
                          type: "image",
                          key: "image",
                          displayer: "Image",
                          value: "https://img.freepik.com/free-photo/seafoods-fish-food-vegetables-lemons-tomatoes_144627-30628.jpg"
                        },
                      ]
                    }
                  ]
                },
                {
                  type: "object",
                  key: "subnavItem",
                  displayer: "Subnav Item",
                  value: [
                    {
                      type: "string",
                      key: "title",
                      displayer: "Title",
                      value: "Octopus"
                    },
                    {
                      type: "array",
                      key: "images",
                      displayer: "Images",
                      value: [
                        {
                          type: "image",
                          key: "image",
                          displayer: "Image",
                          value: "https://www.allrecipes.com/thmb/J7hX8IQcYGf3vlvfZrz5r7pd29U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6723522-af2855be1a38418ebd9fc516034ffecc.jpg"
                        },
                        {
                          type: "image",
                          key: "image",
                          displayer: "Image",
                          value: "https://www.kalofagas.ca/wp-content/uploads/2009/07/FB_IMG_1590696314277-02.jpeg"
                        },
                      ]
                    },
                  ]
                },
              ]
            },
          ]
        },
      ]
    });

    this.addProp({
      type: "number",
      key: "itemsPerRow",
      displayer: "Item Count Per a Row (max: 4)",
      value: 3,
      max: 4
    });

    this.setComponentState("activeNav", 0)
    this.setComponentState("activeSubnav", 0)
    this.setComponentState("focusedImage", 0)
    this.setComponentState("isFocused", false)
  }

  getName(): string {
    return "Image Gallery 4";
  }

  switchNav(index: number) {
    this.setComponentState("activeNav", index)
    this.setComponentState("activeSubnav", 0)
  }

  switchSubnav(index: number) {
    this.setComponentState("activeSubnav", index)
  }

  focusImage(index: number) {
    this.setComponentState("focusedImage", index)
    this.setComponentState("isFocused", true)
    document.body.style.overflow = 'hidden !important';
    document.getElementById("playground").style.height = "auto";
  }

  closeFocus() {
    this.setComponentState("isFocused", false)
    document.body.style.overflow = '';
    document.getElementById("playground").style.height = "100%";
  }

  render() {
    const itemsPerRow = this.getPropValue("itemsPerRow");

    const navItems = this.castToObject<NavItem[]>("navItems");
    const subnavItems = navItems[this.getComponentState("activeNav")].subnavItems;

    const utilForGalleryItems = navItems[this.getComponentState("activeNav")].images;
    const galleryItems = utilForGalleryItems
      .concat(navItems[this.getComponentState("activeNav")]
        .subnavItems[this.getComponentState("activeSubnav")]
        .value[1]
        .value);

    const doesActiveNavHasSubnav = navItems[this.getComponentState("activeNav")].hasSubnav === "Yes";

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("gallery-wrapper")}>
            <nav className={this.decorateCSS("gallery-nav")}>
              {navItems?.length > 0 &&
                <ul className={`${this.decorateCSS("nav-list")} ${this.decorateCSS("hide-scrollbar")}`}>
                  {navItems?.map((item: NavItem, index: number) => (
                    <li key={index} className={this.decorateCSS("list-item")}>
                      <button
                        className={this.getComponentState("activeNav") === index ? this.decorateCSS("active") : ""}
                        onClick={() => { this.switchNav(index) }}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              }
              {doesActiveNavHasSubnav && subnavItems?.length > 0
                &&
                (<ul className={`${this.decorateCSS("subnav-list")} ${this.decorateCSS("hide-scrollbar")}`}>
                  {subnavItems?.map((item: any, index: number) => (
                    <li key={index} className={this.decorateCSS("list-item")}>
                      <button
                        className={this.getComponentState("activeSubnav") === index ? this.decorateCSS("active") : ""}
                        onClick={() => { this.switchSubnav(index) }}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>)
              }
            </nav>

            <div
              className={this.decorateCSS("gallery-container")}
              style={{ gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)` }}
            >
              {galleryItems?.map((item: any, index: number) => (
                <div key={index} className={this.decorateCSS("gallery-item")}>
                  <img onClick={() => { this.focusImage(index) }} src={item.value} alt="" />
                </div>
              ))}
            </div>
          </div>

          <div className={`${this.decorateCSS("gallery-item-fullscreen")} 
                          ${this.getComponentState("isFocused") ? this.decorateCSS("show-fullscreen") : ""}`}
          >
            <div className={this.decorateCSS("fullscreen-container")}>
              <button onClick={() => { this.closeFocus() }} className={this.decorateCSS("close-button")}>
                <ComposerIcon
                  propsIcon={{ className: this.decorateCSS("Icon") }}
                  name="RxCross1"
                />
              </button>
              <img className={this.decorateCSS("focused-image")} src={galleryItems[this.getComponentState("focusedImage")].value} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageGallery4;
