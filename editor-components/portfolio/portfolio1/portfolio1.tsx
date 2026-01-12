import * as React from "react";
import styles from "./portfolio1.module.scss";
import { BasePortfolio } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";

interface PortfolioItem {
  Visibility: boolean;
  url: string;
  title: string;
  icon: string;
  icon2: string;
  image: string;
}

class Portfolio1 extends BasePortfolio {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "item-left",
      displayer: "Item Left",
      value: [
        {
          type: "boolean",
          key: "Visibility",
          displayer: "visibility",
          value: true,
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "",
        },
        {
          type: "icon",
          key: "icon",
          displayer: "Icon",
          value: "",
        },
        {
          type: "icon",
          key: "icon2",
          displayer: "Icon2",
          value: "",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-01.jpg",
        },
      ],
    });
    this.addProp({
      type: "object",
      displayer: "Item Right Top Left",
      key: "item-right-top-left",
      value: [
        {
          type: "boolean",
          key: "Visibility",
          displayer: "visibility",
          value: true,
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "",
        },
        {
          type: "icon",
          key: "icon",
          displayer: "Icon",
          value: "",
        },
        {
          type: "icon",
          key: "icon2",
          displayer: "Icon2",
          value: "",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-02.jpg",
        },
      ],
    });
    this.addProp({
      type: "object",
      displayer: "Item Right Top Right",
      key: "item-right-top-right",
      value: [
        {
          type: "boolean",
          key: "Visibility",
          displayer: "visibility",
          value: true,
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Start business with mentors",
        },
        {
          type: "icon",
          key: "icon",
          displayer: "Icon",
          value: "RxDividerVertical",
        },
        {
          type: "icon",
          key: "icon2",
          displayer: "Icon2",
          value: "LuChevronRight",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-03.jpg",
        },
      ],
    });
    this.addProp({
      type: "object",
      displayer: "Item Right Bottom Left",
      key: "item-right-bottom-left",
      value: [
        {
          type: "boolean",
          key: "Visibility",
          displayer: "visibility",
          value: true,
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Achieve goals & coach fast",
        },
        {
          type: "icon",
          key: "icon",
          displayer: "Icon",
          value: "RxDividerVertical",
        },
        {
          type: "icon",
          key: "icon2",
          displayer: "Icon2",
          value: "LuChevronRight",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-04.jpg",
        },
      ],
    });
    this.addProp({
      type: "object",
      displayer: "Item Right Bottom Right",
      key: "item-right-bottom-right",
      value: [
        {
          type: "boolean",
          key: "Visibility",
          displayer: "visibility",
          value: true,
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "",
        },
        {
          type: "icon",
          key: "icon",
          displayer: "Icon",
          value: "",
        },
        {
          type: "icon",
          key: "icon2",
          displayer: "Icon2",
          value: "",
        },
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value:
            "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-05.jpg",
        },
      ],
    });
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2"]
      }
    });
  }
  static getName(): string {
    return "Portfolio 1";
  }

  getBorderClass = (
    itemName: string,
    hasLeftSection: boolean,
    hasRightSection: boolean,
    hasTopLeft: boolean,
    hasTopRight: boolean,
    hasBottomLeft: boolean,
    hasBottomRight: boolean
  ): string => {
    const classes: string[] = [];

    // If both left and right sections exist
    if (hasLeftSection && hasRightSection) {
      // Left item gets inner radius (right side)
      if (itemName === 'left') {
        classes.push(this.decorateCSS('inner-right'));
      }
      // Right top-left and bottom-left items get inner radius (left side)
      if (itemName === 'topLeft' || itemName === 'bottomLeft') {
        classes.push(this.decorateCSS('inner-left'));
      }
    } else {
      // Original behavior: no border radius on outer edges
      if (itemName === 'left') {
        classes.push(this.decorateCSS('edge-left'));
      }
      if (itemName === 'topRight' || itemName === 'bottomRight') {
        classes.push(this.decorateCSS('edge-right'));
      }
    }

    // If both top row items exist
    if (hasTopLeft && hasTopRight) {
      if (itemName === 'topLeft') {
        classes.push(this.decorateCSS('inner-right'));
      }
      if (itemName === 'topRight') {
        classes.push(this.decorateCSS('inner-left'));
      }
    }

    // If both bottom row items exist
    if (hasBottomLeft && hasBottomRight) {
      if (itemName === 'bottomLeft') {
        classes.push(this.decorateCSS('inner-right'));
      }
      if (itemName === 'bottomRight') {
        classes.push(this.decorateCSS('inner-left'));
      }
    }

    return classes.join(' ');
  };

  renderPortfolioItem = (
    item: PortfolioItem,
    itemName: string,
    borderClass: string
  ): JSX.Element | null => {
    if (!item.Visibility) return null;

    return (
      <ComposerLink path={item.url} isFullWidth={true}>
        <div 
          className={`${this.decorateCSS("item")} ${borderClass} ${!item.image ? this.decorateCSS("no-image") : ""}`}
          data-animation={this.getPropValue("hoverAnimation").join(" ")}
        >
          {item.image && (
            <div className={this.decorateCSS("background-image")}>
              <img
                src={item.image}
                alt="content"
                className={this.decorateCSS("image")}
              />
            </div>
          )}
          {(item.title || item.icon || item.icon2) && (
            <div className={this.decorateCSS("content")}>
              {item.title && (
                <Base.H2 className={this.decorateCSS("title")}>
                  {item.title}
                </Base.H2>
              )}
              <div className={this.decorateCSS("icons")}>
                {item.icon && (
                  <Base.Icon
                    name={item.icon}
                    propsIcon={{ className: this.decorateCSS("icon1") }}
                  />
                )}
                {item.icon2 && (
                  <Base.Icon
                    name={item.icon2}
                    propsIcon={{ className: this.decorateCSS("icon2") }}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </ComposerLink>
    );
  };

  render() {
    const itemLeft = this.castToObject<PortfolioItem>("item-left");
    const itemTopLeft = this.castToObject<PortfolioItem>("item-right-top-left");
    const itemTopRight = this.castToObject<PortfolioItem>("item-right-top-right");
    const itemBottomLeft = this.castToObject<PortfolioItem>("item-right-bottom-left");
    const itemBottomRight = this.castToObject<PortfolioItem>("item-right-bottom-right");

    const visibleItems = {
      left: itemLeft.Visibility,
      topLeft: itemTopLeft.Visibility,
      topRight: itemTopRight.Visibility,
      bottomLeft: itemBottomLeft.Visibility,
      bottomRight: itemBottomRight.Visibility
    };

    const hasLeftSection = visibleItems.left;
    const hasRightSection = visibleItems.topLeft || visibleItems.topRight || 
                           visibleItems.bottomLeft || visibleItems.bottomRight;

    return (
      <Base.Container isFull={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {visibleItems.left && (
            <div className={this.decorateCSS("left")}>
              {this.renderPortfolioItem(
                itemLeft,
                'left',
                this.getBorderClass(
                  'left', 
                  hasLeftSection, 
                  hasRightSection,
                  visibleItems.topLeft,
                  visibleItems.topRight,
                  visibleItems.bottomLeft,
                  visibleItems.bottomRight
                )
              )}
            </div>
          )}

          {hasRightSection && (
            <div className={this.decorateCSS("right")}>
              {(visibleItems.topLeft || visibleItems.topRight) && (
                <div className={this.decorateCSS("top")}>
                  {this.renderPortfolioItem(
                    itemTopLeft,
                    'topLeft',
                    this.getBorderClass(
                      'topLeft', 
                      hasLeftSection, 
                      hasRightSection,
                      visibleItems.topLeft,
                      visibleItems.topRight,
                      visibleItems.bottomLeft,
                      visibleItems.bottomRight
                    )
                  )}
                  {this.renderPortfolioItem(
                    itemTopRight,
                    'topRight',
                    this.getBorderClass(
                      'topRight', 
                      hasLeftSection, 
                      hasRightSection,
                      visibleItems.topLeft,
                      visibleItems.topRight,
                      visibleItems.bottomLeft,
                      visibleItems.bottomRight
                    )
                  )}
                </div>
              )}

              {(visibleItems.bottomLeft || visibleItems.bottomRight) && (
                <div className={this.decorateCSS("bottom")}>
                  {this.renderPortfolioItem(
                    itemBottomLeft,
                    'bottomLeft',
                    this.getBorderClass(
                      'bottomLeft', 
                      hasLeftSection, 
                      hasRightSection,
                      visibleItems.topLeft,
                      visibleItems.topRight,
                      visibleItems.bottomLeft,
                      visibleItems.bottomRight
                    )
                  )}
                  {this.renderPortfolioItem(
                    itemBottomRight,
                    'bottomRight',
                    this.getBorderClass(
                      'bottomRight', 
                      hasLeftSection, 
                      hasRightSection,
                      visibleItems.topLeft,
                      visibleItems.topRight,
                      visibleItems.bottomLeft,
                      visibleItems.bottomRight
                    )
                  )}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Portfolio1;
