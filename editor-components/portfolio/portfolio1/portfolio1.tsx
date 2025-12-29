import * as React from "react";
import styles from "./portfolio1.module.scss";
import { BasePortfolio } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";

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
          displayer: "Media",
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
          displayer: "Media",
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
          displayer: "Media",
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
          displayer: "Media",
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
          displayer: "Media",
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

  render() {
    const itemLeft = this.castToObject<any>("item-left");
    const itemTopRight = this.castToObject<any>("item-right-top-left");
    const itemTopLeft = this.castToObject<any>("item-right-top-right");
    const itemBottomLeft = this.castToObject<any>("item-right-bottom-left");
    const itemBottomRight = this.castToObject<any>("item-right-bottom-right");

    const renderRight =
      itemTopLeft.Visibility ||
      itemTopRight.Visibility ||
      itemBottomLeft.Visibility ||
      itemBottomRight.Visibility;

    return (
      <Base.Container isFull={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {itemLeft.Visibility && (
            <div className={this.decorateCSS("left")}>
              <ComposerLink path={itemLeft.url} isFullWidth={true}>
                <div 
                  className={`${this.decorateCSS("item")} ${!itemLeft.image ? this.decorateCSS("no-media") : ""}`}
                  data-animation={this.getPropValue("hoverAnimation").join(" ")}
                >
                  {itemLeft.image &&
                    <div className={this.decorateCSS("background-media")}>
                      <img
                        src={itemLeft.image}
                        alt="content"
                        className={this.decorateCSS("media")}
                      />
                    </div>
                  }
                  {(itemLeft.title || itemLeft.icon || itemLeft.icon2) && (
                    <div className={this.decorateCSS("content")}>
                      {itemLeft.title && (
                        <Base.H2 className={this.decorateCSS("title")}>
                          {itemLeft.title}
                        </Base.H2>
                      )}
                      <div className={this.decorateCSS("icons")}>
                        {itemLeft.icon && (
                          <Base.Icon
                            name={itemLeft.icon}
                            propsIcon={{ className: this.decorateCSS("icon1") }}
                          />
                        )}
                        {itemLeft.icon2 && (
                          <Base.Icon
                            name={itemLeft.icon2}
                            propsIcon={{ className: this.decorateCSS("icon2") }}
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </ComposerLink>
            </div>
          )}

          {renderRight && (
            <div className={this.decorateCSS("right")}>
              {itemTopLeft.Visibility || itemTopRight.Visibility ? (
                <div className={this.decorateCSS("top")}>
                  {itemTopRight.Visibility ? (
                    <ComposerLink path={itemTopRight.url} isFullWidth={true}>
                      <div 
                        className={`${this.decorateCSS("item")} ${!itemTopLeft.image ? this.decorateCSS("no-media") : ""}`}
                        data-animation={this.getPropValue("hoverAnimation").join(" ")}
                      >
                        {itemTopRight.image && (
                          <div className={this.decorateCSS("background-media")}>
                            <img
                              src={itemTopRight.image}
                              alt="content"
                              className={this.decorateCSS("media")}
                            />
                          </div>
                        )}
                        {(itemTopRight.title ||
                          itemTopRight.icon ||
                          itemTopRight.icon2) && (
                            <div className={this.decorateCSS("content")}>
                              {itemTopRight.title && (
                                <Base.H2 className={this.decorateCSS("title")}>
                                  {itemTopRight.title}
                                </Base.H2>
                              )}
                              <div className={this.decorateCSS("icons")}>
                                {itemTopRight.icon && (
                                  <Base.Icon
                                    name={itemTopRight.icon}
                                    propsIcon={{
                                      className: this.decorateCSS("icon1"),
                                    }}
                                  />
                                )}
                                {itemTopRight.icon2 && (
                                  <Base.Icon
                                    name={itemTopRight.icon2}
                                    propsIcon={{
                                      className: this.decorateCSS("icon2"),
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                          )}
                      </div>
                    </ComposerLink>
                  ) : null}
                  {itemTopLeft.Visibility ? (
                    <ComposerLink path={itemTopLeft.url} isFullWidth={true}>
                      <div 
                        className={`${this.decorateCSS("item")} ${!itemTopLeft.image ? this.decorateCSS("no-media") : ""}`}
                        data-animation={this.getPropValue("hoverAnimation").join(" ")}
                      >
                        {itemTopLeft.image && (
                          <div className={this.decorateCSS("background-media")}>
                            <img
                              src={itemTopLeft.image}
                              alt="content"
                              className={this.decorateCSS("media")}
                            />
                          </div>
                        )}
                        {(itemTopLeft.title ||
                          itemTopLeft.icon ||
                          itemTopLeft.icon2) && (
                            <div className={this.decorateCSS("content")}>
                              {itemTopLeft.title && (
                                <Base.H2 className={this.decorateCSS("title")}>
                                  {itemTopLeft.title}
                                </Base.H2>
                              )}
                              <div className={this.decorateCSS("icons")}>
                                {itemTopLeft.icon && (
                                  <Base.Icon
                                    name={itemTopLeft.icon}
                                    propsIcon={{
                                      className: this.decorateCSS("icon1"),
                                    }}
                                  />
                                )}
                                {itemTopLeft.icon2 && (
                                  <Base.Icon
                                    name={itemTopLeft.icon2}
                                    propsIcon={{
                                      className: this.decorateCSS("icon2"),
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                          )}
                      </div>
                    </ComposerLink>
                  ) : null}
                </div>
              ) : null}
              {itemBottomLeft.Visibility || itemBottomRight.Visibility ? (
                <div className={this.decorateCSS("bottom")}>
                  {itemBottomLeft.Visibility ? (
                    <ComposerLink path={itemBottomLeft.url} isFullWidth={true}>
                      <div
                        className={`${this.decorateCSS("item")} ${!itemBottomLeft.image ? this.decorateCSS("no-media") : ""}`}
                        data-animation={this.getPropValue("hoverAnimation").join(" ")}
                      >
                        {itemBottomLeft.image &&
                          <div className={this.decorateCSS("background-media")}>
                            <img
                              src={itemBottomLeft.image}
                              alt="content"
                              className={this.decorateCSS("media")}
                            />
                          </div>
                        }
                        {(itemBottomLeft.title ||
                          itemBottomLeft.icon ||
                          itemBottomLeft.icon2) && (
                            <div className={this.decorateCSS("content")}>
                              {itemBottomLeft.title && (
                                <Base.H2 className={this.decorateCSS("title")}>
                                  {itemBottomLeft.title}
                                </Base.H2>
                              )}
                              <div className={this.decorateCSS("icons")}>
                                {itemBottomLeft.icon && (
                                  <Base.Icon
                                    name={itemBottomLeft.icon}
                                    propsIcon={{
                                      className: this.decorateCSS("icon1"),
                                    }}
                                  />
                                )}
                                {itemBottomLeft.icon2 && (
                                  <Base.Icon
                                    name={itemBottomLeft.icon2}
                                    propsIcon={{
                                      className: this.decorateCSS("icon2"),
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                          )}
                      </div>
                    </ComposerLink>
                  ) : null}
                  {itemBottomRight.Visibility ? (
                    <ComposerLink path={itemBottomRight.url} isFullWidth={true}>
                      <div 
                        className={`${this.decorateCSS("item")} ${!itemBottomRight.image ? this.decorateCSS("no-media") : ""}`}
                        data-animation={this.getPropValue("hoverAnimation").join(" ")}
                      >
                        {itemBottomRight.image &&
                          <div className={this.decorateCSS("background-media")}>
                            <img
                              src={itemBottomRight.image}
                              alt="content"
                              className={this.decorateCSS("media")}
                            />
                          </div>
                        }
                        {(itemBottomRight.title ||
                          itemBottomRight.icon ||
                          itemBottomRight.icon2) && (
                            <div className={this.decorateCSS("content")}>
                              {itemBottomRight.title && (
                                <Base.H2 className={this.decorateCSS("title")}>
                                  {itemBottomRight.title}
                                </Base.H2>
                              )}
                              <div className={this.decorateCSS("icons")}>
                                {itemBottomRight.icon && (
                                  <Base.Icon
                                    name={itemBottomRight.icon}
                                    propsIcon={{
                                      className: this.decorateCSS("icon1"),
                                    }}
                                  />
                                )}
                                {itemBottomRight.icon2 && (
                                  <Base.Icon
                                    name={itemBottomRight.icon2}
                                    propsIcon={{
                                      className: this.decorateCSS("icon2"),
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                          )}
                      </div>
                    </ComposerLink>
                  ) : null}
                </div>
              ) : null}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Portfolio1;