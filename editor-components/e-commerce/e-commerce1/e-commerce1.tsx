import { BaseECommerce } from "composer-tools/editor-components/EditorComponent";
import styles from "./e-commerce1.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "composer-tools/composer-base-components/slider/slider";
import React from "react";
import { getCurrencyInfo } from "components/setting-input/inputs/currency";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { display } from "@mui/system";
import { validate } from "uuid";

type Image = {
  image: string,
}
type Tag = {
  tag: string,
}
type  WishlistItem={
  wishlistIcon: string,
  wishlistText: React.JSX.Element,
  wishlistUrl: string,
}
type  ReviewItem={
  reviewText: React.JSX.Element,
  reviewCount: number,
  starIcon: string,
  starIconBorder: string,
  point: number
}

type  productCodeItem={
  text: React.JSX.Element,
  code: React.JSX.Element,
}

type Category = {
  category: React.JSX.Element,
}
class ECommerce1 extends BaseECommerce {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "images",
      displayer: "Product Images",
      additionalParams: {
        maxElementCount: 5,
      },
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
          ]
        },
      ],
    });
    this.addProp({
      type:"icon",
      key: "leftArrowImage",
      displayer: "Left Arrow Image",
      value: "SlArrowLeft"
    });
    this.addProp({
      type:"icon",
      key: "rightArrowImage",
      displayer: "Right Arrow Image",
      value: "SlArrowRight"
    });
    this.addProp({
      type:"icon",
      key: "closeIcon",
      displayer: "Close Icon",
      value: "MdClose"
    });
    this.addProp({
      type:"icon",
      key: "closeIconPopup",
      displayer: "Close Icon Popup",
      value: "MdClose"
    });
    this.addProp({
      type:"icon",
      key: "leftArrowPopup",
      displayer: "Left Arrow Popup",
      value: "IoMdArrowDropleft"
    });
    this.addProp({
      type:"icon",
      key: "rightArrowPopup",
      displayer: "Right Arrow Popup",
      value: "IoMdArrowDropright"
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Basket With Handles",
    });
    this.addProp({
      type: "currency",
      key: "price",
      displayer: "Price",
      value: {
        value:"160",
        currency: "USD"
      }
    });
    this.addProp({
      type: "object",
      key: "reviewItem",
      displayer: "Review Item",
      value:[
      {
        type: "string",
        key: "reviewText",
        displayer: "Review Text",
        value: "CUSTOM REVIEW",
      },
      {
        type: "number",
        key: "reviewCount",
        displayer: "Review Count",
        value: 1,
      },
      {
        type: "number",
        key: "point",
        displayer: "Point",
        value: 5,
        max: 5,
      },
      {
        type: "icon",
        key: "starIcon",
        displayer: "Star Icon",
        value:"MdOutlineStar"
      },
      {
        type: "icon",
        key: "starIconBorder",
        displayer: "Star Icon Border",
        value:"MdOutlineStarBorder"
      }
    ]
    })
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    });
    this.addProp({
      type:"string",
      key: "quantityText",
      displayer:"Quantity Text",
      value:"Quantity"
    })
    this.addProp({
      type:"icon",
      key: "leftArrow",
      displayer: "Left Arrow",
      value: "IoMdArrowDropleft"
    });
    this.addProp({
      type:"icon",
      key: "rightArrow",
      displayer: "Right Arrow",
      value: "IoMdArrowDropright"
    });
    this.addProp(INPUTS.BUTTON("button", "Button", "ADD TO CART", "", null, null, "Black"));
    this.addProp({
      type: "object", 
      key: "wishlist",
      displayer: "Wishlist",
      value: [
      {
        type: "icon",
        key: "wishlistIcon",
        displayer: "Wishlist Icon",
        value:"FaHeart",
      },
      {
        type: "string",
        key: "wishlistText",
        displayer: "Wishlist Text",
        value:"ADD TO WISHLIST",
      },
      {
        type: "page",
        key: "wishlistUrl",
        displayer: "Wishlist Url",
        value:"",
      },
    ]
    })
    this.addProp({
      type: "object",
      key: "productCode",
      displayer: "Product Code",
      value:[
      {
        type: "string",
        key: "text",
        displayer: "Text",
        value: "SKU: ",
      },
      {
        type: "string",
        key: "code",
        displayer: "Code",
        value: "008",
      }
    ]
    })
    this.addProp({
      type: "string",
      key: "newText",
      displayer: "New Text",
      value:"NEW"
    })
    this.addProp({
      type: "string",
      key: "categoriesText",
      displayer:"Categories Text",
      value:"Categories: "
    })
    this.addProp({
      type: "array",
      key: "items",
      displayer: "Categories",
      value: [
        {
          type: "object",
          key: "item",
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
          key: "item",
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
    })
    this.addProp({
      type:"string",
      key: "tagsText",
      displayer:"Tags Text",
      value:"Tags: "
    })
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
    this.setComponentState("prevIndex", 0);
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
      this.setComponentState("prevIndex", null);
    }

    const handleClose = () => {
      this.setComponentState("isActive", false);
    }

    const moveLeft = () => {
      let index = this.getComponentState("activeImage");
      if (index === 0) {
        this.setComponentState("activeImage", images.length-1);
        this.setComponentState("prevIndex", index)
      }
      else {
        this.setComponentState("activeImage", index-1);
        this.setComponentState("prevIndex", index)
      }
    }

    const moveRight = () => {
      let index = this.getComponentState("activeImage");
      if (index+1 === images.length) {
        this.setComponentState("activeImage", 0);
        this.setComponentState("prevIndex", index)
      }
      else {
        this.setComponentState("activeImage", index+1);
        this.setComponentState("prevIndex", index)
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
    const categoryItem = this.castToObject<Category[]>("items");
    const tags = this.castToObject<Tag[]>("tags");
    const title = this.getPropValue("title");
    const titleExist = this.castToString(title);
    const price = this.getPropValue("price");
    const description = this.getPropValue("description");
    const descriptionExist = this.castToString(description);
    const productItem = this.castToObject<productCodeItem>("productCode")
    const count = this.getComponentState("count");
    const activeImage = this.getComponentState("activeImage");
    const isActive = this.getComponentState("isActive");
    const leftIconImage = this.getPropValue("leftArrowImage");
    const rightIconImage = this.getPropValue("rightArrowImage");
    const leftIcon = this.getPropValue("leftArrow");
    const rightIcon = this.getPropValue("rightArrow");
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const wishlist = this.castToObject<WishlistItem>("wishlist");
    const reviewItem = this.castToObject<ReviewItem>("reviewItem");
    const isRightExist = titleExist || price.value || reviewItem.point || reviewItem.reviewCount || this.castToString(reviewItem.reviewText) || reviewItem.starIcon || reviewItem.starIconBorder ||
    descriptionExist || this.castToString(this.getPropValue("quantityText")) || leftIcon || rightIcon || this.castToString(button.text) || this.castToString(wishlist.wishlistText) || wishlist.wishlistIcon || 
    this.castToString(productItem.text) || this.castToString(productItem.code) || this.castToString(this.getPropValue("categoriesText")) || (categoryItem.length > 0) || this.castToString(this.getPropValue("tagsText")) || (tags.length > 0)
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section")}>
            {(images.length > 0) && (
              <div className={this.decorateCSS("left")}>
                <div className={`${this.decorateCSS("left-images")} ${!isRightExist && this.decorateCSS("without-right")}`}>
                  {images.map((item: Image, index: number) => {
                      return (
                        <div className={this.decorateCSS("img-container")}>
                          {item.image && (
                            <img 
                            key={index} src={item.image} 
                            className={`${this.decorateCSS("img")} ${index === this.getComponentState("activeSliderIndex") && this.decorateCSS("active") }`}
                            onClick={() => handleImageClick(index)}
                          />
                          )}
                        </div>
                      )
                    })}
                </div>
                <div className={`${this.decorateCSS("right-image")} ${!isRightExist && this.decorateCSS("without-right")}`}>
                  {this.castToString(this.getPropValue("newText")) && (<span className={this.decorateCSS("new")}>{this.getPropValue("newText")}</span>)}
                  <ComposerIcon name={leftIconImage} propsIcon={{className: this.decorateCSS("left-arrow"), onClick: moveLeftSlider}} />
                  <ComposerIcon name={rightIconImage} propsIcon={{className: this.decorateCSS("right-arrow"), onClick: moveRightSlider}} />
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
            )}
            {isRightExist && (
              <div className={this.decorateCSS("right")}>
                <div className={this.decorateCSS("vertical")}>
                {(titleExist || price.value) && (
                  <div className={this.decorateCSS("title-and-price")}>
                    {titleExist && (<Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>)}
                    {price.value && (<span className={this.decorateCSS("price")}>{getCurrencyInfo(price.currency)?.symbol}{price.value}</span>)}
                  </div>
                )}
                {(reviewItem.point || reviewItem.reviewCount || this.castToString(reviewItem.reviewText) || reviewItem.starIcon || reviewItem.starIconBorder || descriptionExist) &&(
                  <div className={this.decorateCSS("review-and-description")}>
                  {(reviewItem.point || reviewItem.reviewCount || this.castToString(reviewItem.reviewText) || reviewItem.starIcon || reviewItem.starIconBorder) && (
                    <div className={this.decorateCSS("review-area")}>  
                      {(reviewItem.starIcon || reviewItem.starIconBorder || reviewItem.point) && (
                        <div className={this.decorateCSS("stars")}>
                          {[...Array(5)].map((_, index) => {
                            return (
                              <ComposerIcon
                                name={index < reviewItem.point ? reviewItem.starIcon : reviewItem.starIconBorder}
                                propsIcon={{ className: this.decorateCSS("star") }}
                              />
                            );
                          })}
                        </div> 
                      )}               
                      {(reviewItem.reviewCount || this.castToString(reviewItem.reviewText)) && (
                        <div className={this.decorateCSS("review")}>
                          <span className={this.decorateCSS("brackets")}>(</span>
                          {reviewItem.reviewCount && (<div className={this.decorateCSS("review-count")}>{reviewItem.reviewCount}</div>)}
                          {this.castToString(reviewItem.reviewText) && (<div className={this.decorateCSS("review-text")}>{reviewItem.reviewText}</div>)}
                          <span className={this.decorateCSS("brackets")}>)</span> 
                        </div>
                      )}
                    </div>
                  )}
                  {descriptionExist && (<div className={this.decorateCSS("description")}>{description}</div>)}
                  </div>
                )}
                  {(this.castToString(this.getPropValue("quantityText")) || leftIcon || rightIcon || this.castToString(button.text)) && (
                    <div className={this.decorateCSS("inputs")}>
                      {(this.castToString(this.getPropValue("quantityText")) || leftIcon || rightIcon) && (
                        <div className={`${this.decorateCSS("count-input")} ${this.castToString(button.text) && this.decorateCSS("with-button")}`}>
                          {this.castToString(this.getPropValue("quantityText")) && (<label className={this.decorateCSS("label")}>{this.getPropValue("quantityText")}</label>)}
                          {leftIcon && (<ComposerIcon name={leftIcon} propsIcon={{className: this.decorateCSS("left-icon"), onClick: handleLeftClick}}/>)}
                          <input type="number" value={count} className={this.decorateCSS("input")} min="0" readOnly />
                          {rightIcon && (<ComposerIcon name={rightIcon} propsIcon={{className: this.decorateCSS("right-icon"), onClick: handleRightClick}}/>)}
                        </div>
                      )}
                      {this.castToString(button.text) && (
                        <ComposerLink path={button.url}>
                          <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>{button.text}</Base.Button>
                        </ComposerLink>
                      )}
                    </div>                  
                  )}
                  {(this.castToString(wishlist.wishlistText) || wishlist.wishlistIcon) &&(
                    <ComposerLink path={wishlist.wishlistUrl}>
                      <div className={this.decorateCSS("wishlist")}>
                        <ComposerIcon name={wishlist.wishlistIcon} propsIcon={{className: this.decorateCSS("heart-icon")}}/>
                        {this.castToString(wishlist.wishlistText) && (<span className={this.decorateCSS("cart-title")}>{wishlist.wishlistText}</span>)}
                      </div>
                    </ComposerLink>
                  )}
                  {(this.castToString(productItem.text) || this.castToString(productItem.code) || this.castToString(this.getPropValue("categoriesText")) || (categoryItem.length > 0) || this.castToString(this.getPropValue("tagsText")) || (tags.length > 0)) && (
                    <div className={this.decorateCSS("bottom")}>
                      {(this.castToString(productItem.text) || this.castToString(productItem.code)) && (
                        <div className={this.decorateCSS("code-area")}>
                          {this.castToString(productItem.text) && (<span className={this.decorateCSS("code-tag")}>{productItem.text}</span>)}
                          {this.castToString(productItem.code) && (<span className={this.decorateCSS("code")}>{productItem.code}</span>)}
                        </div>
                      )}
                      {(this.castToString(this.getPropValue("categoriesText")) || (categoryItem.length > 0)) && (
                        <div className={this.decorateCSS("categories")}>
                          {this.castToString(this.getPropValue("categoriesText")) && (<span className={this.decorateCSS("categoryLabel")}>{this.getPropValue("categoriesText")}</span>)}
                          {(categoryItem.length > 0) && (
                            categoryItem.map((item) => {
                              return (
                                <span className={this.decorateCSS("category")}>{item.category}</span>
                              )
                            })
                          )}
                        </div>
                      )}
                      {(this.castToString(this.getPropValue("tagsText")) || (tags.length > 0)) && (
                        <div className={this.decorateCSS("tags")}>
                          {this.castToString(this.getPropValue("tagsText")) && (<span className={this.decorateCSS("tagLabel")}>{this.getPropValue("tagsText")}</span>)}
                          {(tags.length > 0) && (
                            tags.map((item: Tag) => {
                              return (
                                <span className={this.decorateCSS("tag")}>{item.tag}</span>
                              )
                            })
                          )}
                        </div> 
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          {isActive && (
            <div className={this.decorateCSS("image-popup")}>
              <div className={this.decorateCSS("popup-content")}>
                <div className={this.decorateCSS("image-container")}>
                  {images.map((img: Image, index) => { 
                    return(
                      <>
                        <img
                        key={index}
                        src={img.image}
                        className={`${this.decorateCSS("image")} ${((index === activeImage) &&this.decorateCSS("active"))}`}
                        />
                        <img
                        key={index}
                        src={img.image}
                        className={`${this.decorateCSS("image")} ${(index === this.getComponentState("prevIndex") ) &&  this.decorateCSS("exits")}`}
                      />
                      </>
                    )
                  }
                  )}
                </div>
                <div className={this.decorateCSS("items")}>
                  <div className={this.decorateCSS("icon-group")}>
                    <ComposerIcon name={this.getPropValue("leftArrowPopup")} propsIcon={{className: this.decorateCSS("left-arrow"), onClick: moveLeft}} />
                    <ComposerIcon name={this.getPropValue("rightArrowPopup")} propsIcon={{className: this.decorateCSS("right-arrow"), onClick: moveRight}} />
                  </div>
                  <span className={this.decorateCSS("pages")}>
                    {activeImage+1}/{images.length}
                  </span>
                  <ComposerIcon name={this.getPropValue("closeIconPopup")} propsIcon={{className: this.decorateCSS("close"), onClick: handleClose}} />
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