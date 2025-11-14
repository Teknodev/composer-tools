import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature5.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { TypeMediaInputValue } from "../../../types/declarative";

class Feature5 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Life Hacks",
    });

    this.addProp({
      type: "object",
      key: "row1",
      displayer: "First Row",
      value: [
        {
          type: "media",
          key: "left_image",
          displayer: "Image",
          additionalParams: {
            availableTypes: ["image"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2642f8a5b002ce6c032?alt=media",
          },
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "The 10 Best Apps for Planning Your Next Trip",
        },
        {
          type: "page",
          key: "link",
          displayer: "Navigate To",
          value: "",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "row2",
      displayer: "Second Row",
      value: [
        {
          type: "object",
          key: "first_item",
          displayer: "First Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Newspaper is not only convenient to use, but it also uses very low resources and loads extremely fast. Welcome to the future!",
            },
            INPUTS.BUTTON("button", "Button", "EXPLORE", "", null, null, "Link")
          ],
        },
        {
          type: "object",
          key: "second_item",
          displayer: "Second Item",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Don't Let Your Summer Hard Work Go to Waste",
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "third_item",
          displayer: "Third Item",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2a22f8a5b002ce6c03e?alt=media",
              },
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "row3",
      displayer: "Third Row",
      value: [
        {
          type: "object",
          key: "image_and_subtitle_1",
          displayer: "First Item",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2cc2f8a5b002ce6c04a?alt=media",
              },
            },
            {
              type: "string",
              key: "sub_title",
              displayer: "Subtitle",
              value: "Girl's Guide: Tricks to Save Time in the Morning",
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "image_and_subtitle_2",
          displayer: "Second Item",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2ea2f8a5b002ce6c056?alt=media",
              },
            },
            {
              type: "string",
              key: "sub_title",
              displayer: "Subtitle",
              value: "Motivation Monday: Only 3 Days Left of Summer",
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "image_and_subtitle_3",
          displayer: "Third Item",
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
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c3032f8a5b002ce6c062?alt=media",
              },
            },
            {
              type: "string",
              key: "sub_title",
              displayer: "Subtitle",
              value: "Five Rules For a Long, Healthy and Happy Life",
            },
            {
              type: "page",
              key: "link",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Feature 5";
  }

  render() {
    const row1 = this.castToObject<{
      left_image: { type: "image"; url: string };
      title: React.JSX.Element;
      link: string;
    }>("row1");
    const row2 = this.castToObject<{
      first_item: {
        description: React.JSX.Element;
        button: INPUTS.CastedButton;
      };
      second_item: {
        text: React.JSX.Element;
        link: string;
      };
      third_item: {
        image: { type: "image"; url: string };
        link: string;
      };
    }>("row2");

    const row3 = this.castToObject<{
      image_and_subtitle_1: {
        image: { type: "image"; url: string };
        sub_title: React.JSX.Element;
        link: string;
      };
      image_and_subtitle_2: {
        image: { type: "image"; url: string };
        sub_title: React.JSX.Element;
        link: string;
      };
      image_and_subtitle_3: {
        image: { type: "image"; url: string };
        sub_title: React.JSX.Element;
        link: string;
      };
    }>("row3");

    const isRow1Visible = row1.left_image?.url || this.castToString(row1.title);

    const isFirstColumnVisible =
      this.castToString(row2.first_item.description) ||
      this.castToString(row2.first_item.button.text) ||
      row2.first_item.button.url;
    const isSecondColumnVisible = this.castToString(row2.second_item.text);
    const isThirdColumnVisible = row2.third_item.image?.url;

    const isRow2Visible =
      isFirstColumnVisible || isSecondColumnVisible || isThirdColumnVisible;

    const subtitle1 = this.castToString(row3.image_and_subtitle_1.sub_title);
    const imageOrSubtitleExist1 = row3.image_and_subtitle_1.image?.url || subtitle1;

    const subtitle2 = this.castToString(row3.image_and_subtitle_2.sub_title);
    const imageOrSubtitleExist2 = row3.image_and_subtitle_2.image?.url || subtitle2;

    const subtitle3 = this.castToString(row3.image_and_subtitle_3.sub_title);
    const imageOrSubtitleExist3 = row3.image_and_subtitle_3.image?.url || subtitle3;

    const isRow3Visible =
      row3.image_and_subtitle_1.image?.url ||
      row3.image_and_subtitle_2.image?.url ||
      row3.image_and_subtitle_3.image?.url ||
      subtitle1 ||
      subtitle2 ||
      subtitle3;
    const isFirstImageExist = row3.image_and_subtitle_1.image?.url;
    const isSecondImageExist = row3.image_and_subtitle_2.image?.url;
    const isThirdImageExist = row3.image_and_subtitle_3.image?.url;
    const row3Status =
      !isFirstImageExist || !isSecondImageExist || !isThirdImageExist;

    const noSubtitleFirstImage = !this.castToString(
      row3.image_and_subtitle_1.sub_title
    );
    const noSubtitleSecondImage = !this.castToString(
      row3.image_and_subtitle_2.sub_title
    );
    const noSubtitleThirdImage = !this.castToString(
      row3.image_and_subtitle_3.sub_title
    );
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {this.castToString(this.getPropValue("title")) && (
            <Base.SectionTitle className={this.decorateCSS("section-title")}>
              {this.getPropValue("title")}
            </Base.SectionTitle>
          )}
          {isRow1Visible && (
            <ComposerLink path={row1.link} isFullWidth={true}>
              <div className={this.decorateCSS("row1")}>
                {row1.left_image && (
                  <div
                    className={`
                      ${this.decorateCSS("image-wrapper")}
                      ${!this.castToString(row1.title) ? this.decorateCSS("row1-image-only") : ""}
                    `}
                  >
                    <Base.Media
                      value={row1.left_image}
                      className={this.decorateCSS("left-image")}
                    />
                  </div>
                )}
                {this.castToString(row1.title) && (
                  <Base.H2
                    className={`
                      ${this.decorateCSS("title")}
                      ${!row1.left_image?.url ? this.decorateCSS("row1-title-only") : ""} 
                    `}
                  >
                    {row1.title}
                  </Base.H2>
                )}
              </div>
            </ComposerLink>
          )}

          {isRow2Visible && (
            <div className={this.decorateCSS("row2")}>
              {isFirstColumnVisible && (
                <div className={this.decorateCSS("first")}>
                  {(!!this.castToString(row2.first_item.description) ||
                    !!this.castToString(row2.first_item.button.text)) && (
                      <div className={this.decorateCSS("first-items-wrapper")}>
                        {!!this.castToString(row2.first_item.description) && (
                          <Base.P className={this.decorateCSS("description")}>
                            {row2.first_item.description}
                          </Base.P>
                        )}
                        {!!this.castToString(row2.first_item.button.text) && (
                          <Base.Row className={this.decorateCSS("button-text-container")}>
                            <ComposerLink path={row2.first_item.button.url}>
                              <Base.Button buttonType={row2.first_item.button.type} className={this.decorateCSS("button-text")}>
                                {row2.first_item.button.text}
                              </Base.Button>
                            </ComposerLink>
                          </Base.Row>
                        )}
                      </div>
                    )}
                </div>
              )}
              {isSecondColumnVisible && (
                <div className={this.decorateCSS("second")}>
                  {!!this.castToString(row2.second_item.text) && (
                    <Base.H2 className={this.decorateCSS("text")}>
                      <ComposerLink path={row2.second_item.link}>
                        {row2.second_item.text}
                      </ComposerLink>
                    </Base.H2>
                  )}
                </div>
              )}
              {isThirdColumnVisible && (
                <div
                  className={this.decorateCSS("third")}
                  style={{
                    position: "relative",
                    width: "100%",
                  }}
                >
                  {row2.third_item.image && (
                    <ComposerLink path={row2.third_item.link}>
                      <Base.Media
                        value={row2.third_item.image}
                        className={this.decorateCSS("image")}
                      />
                    </ComposerLink>
                  )}
                </div>
              )}
            </div>
          )}
          {isRow3Visible && (
            <div
              className={`
                  ${this.decorateCSS("row3")} 
                  ${!row3.image_and_subtitle_1.image?.url &&
                  !row3.image_and_subtitle_2.image?.url &&
                  !row3.image_and_subtitle_3.image?.url
                  ? this.decorateCSS("row3-no-image")
                  : ""
                }`}
            >
              {imageOrSubtitleExist1 && (
                <ComposerLink
                  path={row3.image_and_subtitle_1.link}
                  isFullWidth={true}
                >
                  <div className={this.decorateCSS("image_and_subtitle_1")}>
                    {row3.image_and_subtitle_1.image && (
                      <Base.Media
                        value={row3.image_and_subtitle_1.image}
                        className={`
                          ${this.decorateCSS("image")} 
                          ${row3Status ? this.decorateCSS("row3-images-less") : ""} 
                          ${noSubtitleFirstImage ? this.decorateCSS("row3-no-subtitle") : ""}
                        `}
                      />
                    )}

                    {!!this.castToString(row3.image_and_subtitle_1.sub_title) && (
                      <Base.H4 className={this.decorateCSS("subtitle")}>
                        {row3.image_and_subtitle_1.sub_title}
                      </Base.H4>
                    )}
                  </div>
                </ComposerLink>
              )}
              {imageOrSubtitleExist2 && (
                <ComposerLink
                  path={row3.image_and_subtitle_2.link}
                  isFullWidth={true}
                >
                  <div className={this.decorateCSS("image_and_subtitle_2")}>
                    {row3.image_and_subtitle_2.image && (
                      <Base.Media
                        value={row3.image_and_subtitle_2.image}
                        className={`
                          ${this.decorateCSS("image")} 
                          ${row3Status ? this.decorateCSS("row3-images-less") : ""}
                          ${noSubtitleSecondImage ? this.decorateCSS("row3-no-subtitle") : ""}
                        `}
                      />
                    )}
                    {!!this.castToString(row3.image_and_subtitle_2.sub_title) && (
                      <Base.H4 className={this.decorateCSS("subtitle")}>
                        {row3.image_and_subtitle_2.sub_title}
                      </Base.H4>
                    )}
                  </div>
                </ComposerLink>
              )}
              {imageOrSubtitleExist3 && (
                <ComposerLink
                  path={row3.image_and_subtitle_3.link}
                  isFullWidth={true}
                >
                  <div className={this.decorateCSS("image_and_subtitle_3")}>
                    {!!row3.image_and_subtitle_3.image && (
                      <Base.Media
                        value={row3.image_and_subtitle_3.image}
                        className={`
                          ${this.decorateCSS("image")} 
                          ${row3Status ? this.decorateCSS("row3-images-less") : ""}
                          ${noSubtitleThirdImage ? this.decorateCSS("row3-no-subtitle") : ""}
                        `}
                      />
                    )}
                    {!!this.castToString(row3.image_and_subtitle_3.sub_title) && (
                      <Base.H4 className={this.decorateCSS("subtitle")}>
                        {row3.image_and_subtitle_3.sub_title}
                      </Base.H4>
                    )}
                  </div>
                </ComposerLink>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default Feature5;
