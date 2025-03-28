import * as React from "react";
import { BaseECommerce } from "composer-tools/editor-components/EditorComponent";
import styles from "./ecommerce1.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";

type Image = {
  image: string,
  popup: string,
}

type Category = {
  category: string,
}

type Tag = {
  tag: string,
}

class ECommerce1 extends BaseECommerce {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "images",
      displayer: "Product Images",
      value: [
        {
          type: "object",
          key: "item1",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Product Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67dbc9f6fb049c002cc28545?alt=media",
            },
            {
              type: "image",
              key: "popup",
              displayer: "Popup Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67dc0753fb049c002cc2b94b?alt=media",
            }
          ]
        },
        {
          type: "object",
          key: "item2",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Product Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67dbca09fb049c002cc2858e?alt=media",
            },
            {
              type: "image",
              key: "popup",
              displayer: "Popup Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67dc0fc7fb049c002cc2bb80?alt=media",
            }
          ]
        },
        {
          type: "object",
          key: "item3",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Product Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67dbca1cfb049c002cc285a1?alt=media",
            },
            {
              type: "image",
              key: "popup",
              displayer: "Popup Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67dc1041fb049c002cc2bb94?alt=media",
            }
          ]
        },
        {
          type: "object",
          key: "item4",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Product Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67dbca2cfb049c002cc28613?alt=media",
            },
            {
              type: "image",
              key: "popup",
              displayer: "Popup Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67dc0789fb049c002cc2b966?alt=media",
            }
          ]
        },
        {
          type: "object",
          key: "item5",
          displayer: "Item",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Product Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67dbca3efb049c002cc2862d?alt=media",
            },
            {
              type: "image",
              key: "popup",
              displayer: "Popup Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67dc0796fb049c002cc2b96f?alt=media",
            }
          ]
        }
      ],
      additionalParams: {
        maxElementCount: 5,
      }
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Basket With Handles",
    });
    this.addProp({
      type: "number",
      key: "price",
      displayer: "Price",
      value: 160,
    });
    this.addProp({
      type: "number",
      key: "point",
      displayer: "Point",
      value: 5,
      max: 5,
    });
    this.addProp({
      type: "number",
      key: "review",
      displayer: "Review Count",
      value: 1,
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    });
    this.addProp({
      type: "page",
      key: "cart",
      displayer: "Cart Page",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "code",
      displayer: "Code",
      value: "008",
    });
    this.addProp({
      type: "boolean",
      key: "shownew",
      displayer: "Show New Title",
      value: true,
    });
    this.addProp({
      type: "array",
      key: "categories",
      displayer: "Categories",
      value: [
        {
          type: "object",
          key: "item1",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "category",
              displayer: "Category Name",
              value: "Decoration",
            }
          ]
        },
        {
          type: "object",
          key: "item1",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "category",
              displayer: "Category Name",
              value: "Home Decor",
            }
          ]
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "tags",
      displayer: "Tags",
      value: [
        {
          type: "object",
          key: "item1",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "tag",
              displayer: "Tag Name",
              value: "Black",
            }
          ]
        },
        {
          type: "object",
          key: "item1",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "tag",
              displayer: "Tag Name",
              value: "Modern",
            }
          ]
        },
      ],
    });
    this.setComponentState("count", 0);
    this.setComponentState("activeImage", 0);
    this.setComponentState("isActive", false);
  }

  static getName(): string {
    return "ECommerce 1";
  }

  render() {
    const handleLeftClick = () => {
      let count = this.getComponentState("count");
      if (count > 0) {
        this.setComponentState("count", count - 1);
      }
    }

    const handleRightClick = () => {
      let count = this.getComponentState("count");
      this.setComponentState("count", count + 1);
    }

    const handleImageClick = (index: number) => {
      this.setComponentState("isActive", true);
      this.setComponentState("activeImage", index);
    }

    const handleClose = () => {
      this.setComponentState("isActive", false);
    }

    const moveLeft = () => {
      let index = this.getComponentState("activeImage");
      if (index === 0) {
        this.setComponentState("activeImage", images.length-1);
      }
      else {
        this.setComponentState("activeImage", index-1);
      }
    }

    const moveRight = () => {
      let index = this.getComponentState("activeImage");
      if (index+1 === images.length) {
        this.setComponentState("activeImage", 0);
      }
      else {
        this.setComponentState("activeImage", index+1);
      }
    }

    const images = this.castToObject<Image[]>("images");
    const categories = this.castToObject<Category[]>("categories");
    const tags = this.castToObject<Tag[]>("tags");

    const title = this.getPropValue("title");
    const titleExist = this.castToString(title);
    const price = this.getPropValue("price");
    const point = this.getPropValue("point");
    const review = this.getPropValue("review");
    const description = this.getPropValue("description");
    const descriptionExist = this.castToString(description);
    const cart = this.getPropValue("cart");
    const code = this.getPropValue("code");
    const codeExist = this.castToString(code);
    const isNew = this.getPropValue("shownew");
    const count = this.getComponentState("count");
    const activeImage = this.getComponentState("activeImage");
    const isActive = this.getComponentState("isActive");

    const starIcon = "MdOutlineStar";
    const starIconBorder = "MdOutlineStarBorder";
    const leftIcon = "IoMdArrowDropleft";
    const rightIcon = "IoMdArrowDropright";
    const heartIcon = "FaHeart";
    const leftPopupArrow = "IoIosArrowBack";
    const rightPopupArrow = "IoIosArrowForward";
    const closeIcon = "MdClose";

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section")}>
            <div className={this.decorateCSS("left")}>
              <div className={this.decorateCSS("left-images")}>
                {images.slice(1).map((item: Image, index: number) => {
                  return (
                    <div className={this.decorateCSS("img-container")}>
                      <img key={index} src={item.image} className={this.decorateCSS("img")} onClick={() => handleImageClick(index+1)} />
                    </div>
                  )
                })}
              </div>
              <div className={this.decorateCSS("right-image")}>
                <img src={images[0]?.image} className={this.decorateCSS("product-img")} onClick={() => handleImageClick(0)} />
                {isNew && (<span className={this.decorateCSS("new")}>NEW</span>)}
              </div>
            </div>
            <div className={this.decorateCSS("right")}>
              <Base.VerticalContent className={this.decorateCSS("vertical")}>
                {titleExist && (<Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>)}
                <span className={this.decorateCSS("price")}>${price}</span>
                <div className={this.decorateCSS("review-area")}>
                  {[...Array(5)].map((_, index) => {
                    return (
                      <ComposerIcon
                        name={index < point ? starIcon : starIconBorder}
                        propsIcon={{ className: this.decorateCSS("star") }}
                      />
                    );
                  })}
                  <span className={this.decorateCSS("review-count")}>({review} CUSTOMER REVIEW)</span>
                </div>
                {descriptionExist && (<Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>)}
                <div className={this.decorateCSS("inputs")}>
                  <div className={this.decorateCSS("count-input")}>
                    <label className={this.decorateCSS("label")}>Quantily</label>
                    <ComposerIcon name={leftIcon} propsIcon={{className: this.decorateCSS("left-icon"), onClick: handleLeftClick}}/>
                    <input type= "string" value={count} className={this.decorateCSS("input")} /> 
                    <ComposerIcon name={rightIcon} propsIcon={{className: this.decorateCSS("right-icon"), onClick: handleRightClick}}/>
                  </div>
                  <Base.Button className={this.decorateCSS("button")}  buttonType="Black">ADD TO CART</Base.Button>
                </div>
                <ComposerLink path={cart}>
                  <div className={this.decorateCSS("wishlist")}>
                    <ComposerIcon name={heartIcon} propsIcon={{className: this.decorateCSS("heart-icon")}}/>
                    <span className={this.decorateCSS("cart-title")}>ADD TO WISHLIST</span>
                  </div>
                </ComposerLink>
                <div className={this.decorateCSS("bottom")}>
                  {codeExist && (
                    <div className={this.decorateCSS("code-area")}>
                      <span className={this.decorateCSS("code-tag")}>SKU:</span>
                      <span className={this.decorateCSS("code")}>{code}</span>
                    </div>
                  )}
                  <div className={this.decorateCSS("categories")}>
                    <span className={this.decorateCSS("categoryLabel")}>Categories:</span>
                    {categories.map((item: Category, index: number) => {
                      return (
                        <span className={this.decorateCSS("category")}>{item.category}</span>
                      )
                    })}
                  </div>
                  <div className={this.decorateCSS("tags")}>
                    <span className={this.decorateCSS("tagLabel")}>Tags:</span>
                    {tags.map((item: Tag, index: number) => {
                      return (
                        <span className={this.decorateCSS("tag")}>{item.tag}</span>
                      )
                    })}
                  </div>
                </div>
              </Base.VerticalContent>
            </div>
          </div>
          {isActive && (
            <div className={this.decorateCSS("image-popup")}>
              <div className={this.decorateCSS("overlay")} onClick={handleClose} ></div>
              <div className={this.decorateCSS("popup-content")}>
                <img src={images[activeImage]?.popup} className={this.decorateCSS("popup-image")}/>
                <div className={this.decorateCSS("items")}>
                  <div className={this.decorateCSS("icon-group")}>
                    <ComposerIcon name={leftPopupArrow} propsIcon={{className: this.decorateCSS("left-arrow"), onClick: moveLeft}} />
                    <ComposerIcon name={rightPopupArrow} propsIcon={{className: this.decorateCSS("right-arrow"), onClick: moveRight}} />
                  </div>
                  <span className={this.decorateCSS("pages")}>
                    {activeImage+1}/{images.length}
                  </span>
                  <ComposerIcon name={closeIcon} propsIcon={{className: this.decorateCSS("close"), onClick: handleClose}} />
                </div>
              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    )
  }
}

export default ECommerce1;