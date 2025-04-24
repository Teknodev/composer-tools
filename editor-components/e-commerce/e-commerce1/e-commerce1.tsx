import { BaseECommerce } from "composer-tools/editor-components/EditorComponent";
import styles from "./ecommerce1.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "composer-tools/composer-base-components/slider/slider";
import React from "react";

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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680a3d91c1ef0f002c95c2af?alt=media",
            },
            {
              type: "image",
              key: "popup",
              displayer: "Popup Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680a3d91c1ef0f002c95c2af?alt=media",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680a3dbcc1ef0f002c95c2cc?alt=media",
            },
            {
              type: "image",
              key: "popup",
              displayer: "Popup Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680a3dbcc1ef0f002c95c2cc?alt=media",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680a3dd6c1ef0f002c95c2e4?alt=media",
            },
            {
              type: "image",
              key: "popup",
              displayer: "Popup Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680a3dd6c1ef0f002c95c2e4?alt=media",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680a3df1c1ef0f002c95c2f9?alt=media",
            },
            {
              type: "image",
              key: "popup",
              displayer: "Popup Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680a3df1c1ef0f002c95c2f9?alt=media",
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
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680a3e06c1ef0f002c95c301?alt=media",
            },
            {
              type: "image",
              key: "popup",
              displayer: "Popup Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680a3e06c1ef0f002c95c301?alt=media",
            }
          ]
        },
      ],
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
    this.setComponentState("sliderRef", React.createRef());
    this.setComponentState("activeSliderIndex", 0);
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

    const moveRightSlider = () => {
      const slider = this.getComponentState("sliderRef").current;
      if (slider) {
        slider.slickNext();
      }

      let len = images.length-1;
      let index = this.getComponentState("activeSliderIndex");
      if (len <= index) {
        this.setComponentState("activeSliderIndex", 0);
      }
      else {
        this.setComponentState("activeSliderIndex", index+1);
      }
    }

    const moveLeftSlider = () => {
      const slider = this.getComponentState("sliderRef").current;
      if (slider) {
        slider.slickPrev();
      }

      let len = images.length-1;
      let index = this.getComponentState("activeSliderIndex");
      if (index == 0) {
        this.setComponentState("activeSliderIndex", len);
      }
      else {
        this.setComponentState("activeSliderIndex", index-1);
      }
    }

    const settings = {
      arrows: false,
      dots: false,
      speed: 725,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinity: true,
      afterChange: (current: number) => this.setComponentState("activeSliderIndex", current)
    }

    const sliderRef = this.getComponentState("sliderRef");

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
                {images.map((item: Image, index: number) => {
                  return (
                    <div className={this.decorateCSS("img-container")}>
                      <img 
                        key={index} src={item.image} 
                        className={`${this.decorateCSS("img")} ${index === this.getComponentState("activeSliderIndex") && this.decorateCSS("active") }`}
                        onClick={() => handleImageClick(index)}
                      />
                    </div>
                  )
                })}
              </div>
              <div className={this.decorateCSS("right-image")}>
                {isNew && (<span className={this.decorateCSS("new")}>NEW</span>)}
                <ComposerIcon name={leftPopupArrow} propsIcon={{className: this.decorateCSS("left-arrow"), onClick: moveLeftSlider}} />
                <ComposerIcon name={rightPopupArrow} propsIcon={{className: this.decorateCSS("right-arrow"), onClick: moveRightSlider}} />
                {images.length > 0 && (
                  <ComposerSlider ref={sliderRef} {...settings} className={this.decorateCSS("carousel")}>
                    {images.map((item: Image, index: number) => {
                      return (
                        <div className={this.decorateCSS("card")}>
                          <img src={item.image} className={this.decorateCSS("product-img")} onClick={() => handleImageClick(index)} />
                        </div>
                      )
                    })}
                  </ComposerSlider>
                )}
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
                    <label className={this.decorateCSS("label")}>Quantity</label>
                    <ComposerIcon name={leftIcon} propsIcon={{className: this.decorateCSS("left-icon"), onClick: handleLeftClick}}/>
                    <input type="number" value={count} className={this.decorateCSS("input")} min="0" readOnly />
                    <ComposerIcon name={rightIcon} propsIcon={{className: this.decorateCSS("right-icon"), onClick: handleRightClick}}/>
                  </div>
                  <Base.Button className={this.decorateCSS("button")} buttonType="Black">ADD TO CART</Base.Button>
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
                    {categories.map((item: Category) => {
                      return (
                        <span className={this.decorateCSS("category")}>{item.category}</span>
                      )
                    })}
                  </div>
                  <div className={this.decorateCSS("tags")}>
                    <span className={this.decorateCSS("tagLabel")}>Tags:</span>
                    {tags.map((item: Tag) => {
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