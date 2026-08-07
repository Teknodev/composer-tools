import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature5.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import { TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";

class Feature5 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Life Hacks",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "object",
      key: "row1",
      displayer: "First Row",
      value: [
        {
          type: "media",
          key: "left_image",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image","video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2642f8a5b002ce6c032?alt=media",
          },
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "The 10 Best Apps for Planning Your Next Trip",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "",
        },
        {
          type: "array",
          key: "buttons",
          displayer: "Buttons",
          value: [
            INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
          ],
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
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Newspaper is not only convenient to use, but it also uses very low resources and loads extremely fast. Welcome to the future!",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "EXPLORE", "", null, null, "Link"),
              ],
            },
          ],
        },
        {
          type: "object",
          key: "second_item",
          displayer: "Second Item",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Don't Let Your Summer Hard Work Go to Waste",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
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
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image","video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2a22f8a5b002ce6c03e?alt=media",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
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
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image","video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2cc2f8a5b002ce6c04a?alt=media",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Girl's Guide: Tricks to Save Time in the Morning",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
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
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image","video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c2ea2f8a5b002ce6c056?alt=media",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Motivation Monday: Only 3 Days Left of Summer",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
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
              key: "media",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image","video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a4c3032f8a5b002ce6c062?alt=media",
              },
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Five Rules For a Long, Healthy and Happy Life",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "",
            },
            {
              type: "array",
              key: "buttons",
              displayer: "Buttons",
              value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
              ],
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
      subtitle: React.JSX.Element;
      title: React.JSX.Element;
      description: React.JSX.Element;
      buttons: TypeUsableComponentProps[];
      link: string;
    }>("row1");
    const subtitle = this.getPropValue("subtitle");
    const subtitleExist = this.castToString(subtitle);
    const descriptionExist = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));
    const row2 = this.castToObject<{
      first_item: {
        subtitle: React.JSX.Element;
        description: React.JSX.Element;
        buttons: INPUTS.CastedButton[];
      };
      second_item: {
        subtitle: React.JSX.Element;
        text: React.JSX.Element;
        description: React.JSX.Element;
        buttons: INPUTS.CastedButton[];
        link: string;
      };
      third_item: {
        media: { type: "image"; url: string };
        subtitle: React.JSX.Element;
        description: React.JSX.Element;
        buttons: INPUTS.CastedButton[];
        link: string;
      };
    }>("row2");

    const row3 = this.castToObject<{
      image_and_subtitle_1: {
        media: { type: "image"; url: string };
        subtitle: React.JSX.Element;
        description: React.JSX.Element;
        buttons: INPUTS.CastedButton[];
        link: string;
      };
      image_and_subtitle_2: {
        media: { type: "image"; url: string };
        subtitle: React.JSX.Element;
        description: React.JSX.Element;
        buttons: INPUTS.CastedButton[];
        link: string;
      };
      image_and_subtitle_3: {
        media: { type: "image"; url: string };
        subtitle: React.JSX.Element;
        description: React.JSX.Element;
        buttons: INPUTS.CastedButton[];
        link: string;
      };
    }>("row3");

    const row1SubtitleExist = this.castToString(row1.subtitle);
    const row1TitleExist = this.castToString(row1.title);
    const row1DescriptionExist = this.castToString(row1.description);
    const row1Buttons: INPUTS.CastedButton[] = (row1.buttons || []).map((btn) => {
      const buttonProps = btn.value as TypeUsableComponentProps[];
      return {
        text: this.getPropValue("text", { parent_object: buttonProps }),
        url: this.getPropValue("url", { parent_object: buttonProps }),
        icon: this.getPropValue("icon", { parent_object: buttonProps }),
        image: this.getPropValue("image", { parent_object: buttonProps }),
        type: this.getPropValue("type", { parent_object: buttonProps }),
      };
    });
    const row1HasValidButtons = row1Buttons.some((btn) => this.castToString(btn.text));
    const row1ContentExist =
      row1SubtitleExist || row1TitleExist || row1DescriptionExist || row1HasValidButtons;
    const isRow1Visible = row1.left_image?.url || row1ContentExist;

    const firstSubtitleExist = this.castToString(row2.first_item.subtitle);
    const firstDescriptionExist = this.castToString(row2.first_item.description);
    const firstButtons = row2.first_item.buttons || [];
    const firstHasValidButtons = firstButtons.some((btn) => this.castToString(btn.text));
    const firstContentExist = firstSubtitleExist || firstDescriptionExist || firstHasValidButtons;
    const isFirstColumnVisible = firstContentExist || firstButtons.some((btn) => btn.url);

    const secondSubtitleExist = this.castToString(row2.second_item.subtitle);
    const secondTextExist = this.castToString(row2.second_item.text);
    const secondDescriptionExist = this.castToString(row2.second_item.description);
    const secondButtons = row2.second_item.buttons || [];
    const secondHasValidButtons = secondButtons.some((btn) => this.castToString(btn.text));
    const secondContentExist =
      secondSubtitleExist || secondTextExist || secondDescriptionExist || secondHasValidButtons;
    const isSecondColumnVisible = secondContentExist;

    const thirdSubtitleExist = this.castToString(row2.third_item.subtitle);
    const thirdDescriptionExist = this.castToString(row2.third_item.description);
    const thirdButtons = row2.third_item.buttons || [];
    const thirdHasValidButtons = thirdButtons.some((btn) => this.castToString(btn.text));
    const thirdContentExist = thirdSubtitleExist || thirdDescriptionExist || thirdHasValidButtons;
    const isThirdColumnVisible = row2.third_item.media?.url || thirdContentExist;

    const isRow2Visible =
      isFirstColumnVisible || isSecondColumnVisible || isThirdColumnVisible;

    const subtitle1 = this.castToString(row3.image_and_subtitle_1.subtitle);
    const description1 = this.castToString(row3.image_and_subtitle_1.description);
    const buttons1 = row3.image_and_subtitle_1.buttons || [];
    const hasValidButtons1 = buttons1.some((btn) => this.castToString(btn.text));
    const content1Exist = subtitle1 || description1 || hasValidButtons1;
    const imageOrContentExist1 = row3.image_and_subtitle_1.media?.url || content1Exist;

    const subtitle2 = this.castToString(row3.image_and_subtitle_2.subtitle);
    const description2 = this.castToString(row3.image_and_subtitle_2.description);
    const buttons2 = row3.image_and_subtitle_2.buttons || [];
    const hasValidButtons2 = buttons2.some((btn) => this.castToString(btn.text));
    const content2Exist = subtitle2 || description2 || hasValidButtons2;
    const imageOrContentExist2 = row3.image_and_subtitle_2.media?.url || content2Exist;

    const subtitle3 = this.castToString(row3.image_and_subtitle_3.subtitle);
    const description3 = this.castToString(row3.image_and_subtitle_3.description);
    const buttons3 = row3.image_and_subtitle_3.buttons || [];
    const hasValidButtons3 = buttons3.some((btn) => this.castToString(btn.text));
    const content3Exist = subtitle3 || description3 || hasValidButtons3;
    const imageOrContentExist3 = row3.image_and_subtitle_3.media?.url || content3Exist;

    const isRow3Visible =
      imageOrContentExist1 || imageOrContentExist2 || imageOrContentExist3;
    const isFirstImageExist = row3.image_and_subtitle_1.media?.url;
    const isSecondImageExist = row3.image_and_subtitle_2.media?.url;
    const isThirdImageExist = row3.image_and_subtitle_3.media?.url;
    const row3Status =
      !isFirstImageExist || !isSecondImageExist || !isThirdImageExist;

    const noContentFirstImage = !content1Exist;
    const noContentSecondImage = !content2Exist;
    const noContentThirdImage = !content3Exist;
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
        <Base.VerticalContent className={this.decorateCSS("header")}>
          {subtitleExist && (
            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
              {subtitle}
            </Base.SectionSubTitle>
          )}
          {this.castToString(this.getPropValue("title")) && (
            <Base.SectionTitle className={this.decorateCSS("section-title")}>
              {this.getPropValue("title")}
            </Base.SectionTitle>
          )}
          {descriptionExist && (
            <Base.SectionDescription className={this.decorateCSS("description")}>
              {this.getPropValue("description")}
            </Base.SectionDescription>
          )}
          {hasValidButtons && (
            <div className={this.decorateCSS("button-container")}>
              {buttons.map((item: INPUTS.CastedButton, index: number) => {
                const buttonTextExist = this.castToString(item.text);
                if (!buttonTextExist) return null;
                return (
                  <ComposerLink key={index} path={item.url}>
                    <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                    </Base.Button>
                  </ComposerLink>
                );
              })}
            </div>
          )}
        </Base.VerticalContent>
          <div className={this.decorateCSS("rows-wrapper")}>
            {isRow1Visible && (
              <ComposerLink path={row1.link} isFullWidth={true}>
                <div className={this.decorateCSS("row1")}>
                  {row1.left_image && (
                    <div
                      className={`
                        ${this.decorateCSS("image-wrapper")}
                        ${!row1ContentExist ? this.decorateCSS("row1-image-only") : ""}
                      `}
                    >
                      <Base.Media
                        value={row1.left_image}
                        className={this.decorateCSS("left-image")}
                      />
                    </div>
                  )}
                  {row1ContentExist && (
                    <Base.VerticalContent
                      className={`
                        ${this.decorateCSS("card-content")}
                        ${!row1.left_image?.url ? this.decorateCSS("row1-content-only") : ""}
                      `}
                    >
                      {row1SubtitleExist && (
                        <Base.H5 className={this.decorateCSS("card-subtitle")}>
                          {row1.subtitle}
                        </Base.H5>
                      )}
                      {row1TitleExist && (
                        <Base.H3 className={this.decorateCSS("title")}>
                          {row1.title}
                        </Base.H3>
                      )}
                      {row1DescriptionExist && (
                        <Base.P className={this.decorateCSS("card-description")}>
                          {row1.description}
                        </Base.P>
                      )}
                      {row1HasValidButtons && (
                        <div className={this.decorateCSS("card-button-container")}>
                          {row1Buttons.map((item: INPUTS.CastedButton, index: number) => {
                            const buttonTextExist = this.castToString(item.text);
                            if (!buttonTextExist) return null;
                            return (
                              <ComposerLink key={index} path={item.url}>
                                <Base.Button
                                  buttonType={item.type}
                                  className={this.decorateCSS("card-button")}
                                >
                                  <Base.P className={this.decorateCSS("card-button-text")}>
                                    {item.text}
                                  </Base.P>
                                </Base.Button>
                              </ComposerLink>
                            );
                          })}
                        </div>
                      )}
                    </Base.VerticalContent>
                  )}
                </div>
              </ComposerLink>
            )}

            {isRow2Visible && (
              <div className={this.decorateCSS("row2")}>
                {isFirstColumnVisible && (
                  <div className={this.decorateCSS("first")}>
                    {firstContentExist && (
                      <Base.VerticalContent className={this.decorateCSS("card-content")}>
                        {firstSubtitleExist && (
                          <Base.H5 className={this.decorateCSS("card-subtitle")}>
                            {row2.first_item.subtitle}
                          </Base.H5>
                        )}
                        {firstDescriptionExist && (
                          <Base.P className={this.decorateCSS("card-description")}>
                            {row2.first_item.description}
                          </Base.P>
                        )}
                        {firstHasValidButtons && (
                          <div className={this.decorateCSS("card-button-container")}>
                            {firstButtons.map((item: INPUTS.CastedButton, index: number) => {
                              const buttonTextExist = this.castToString(item.text);
                              if (!buttonTextExist) return null;
                              return (
                                <ComposerLink key={index} path={item.url}>
                                  <Base.Button
                                    buttonType={item.type}
                                    className={this.decorateCSS("card-button")}
                                  >
                                    <Base.P className={this.decorateCSS("card-button-text")}>
                                      {item.text}
                                    </Base.P>
                                  </Base.Button>
                                </ComposerLink>
                              );
                            })}
                          </div>
                        )}
                      </Base.VerticalContent>
                    )}
                  </div>
                )}
                {isSecondColumnVisible && (
                  <div className={this.decorateCSS("second")}>
                    <Base.VerticalContent className={this.decorateCSS("card-content")}>
                      {secondSubtitleExist && (
                        <Base.H5 className={this.decorateCSS("card-subtitle")}>
                          {row2.second_item.subtitle}
                        </Base.H5>
                      )}
                      {secondTextExist && (
                        <Base.H4 className={this.decorateCSS("text")}>
                          <ComposerLink path={row2.second_item.link}>
                            {row2.second_item.text}
                          </ComposerLink>
                        </Base.H4>
                      )}
                      {secondDescriptionExist && (
                        <Base.P className={this.decorateCSS("card-description")}>
                          {row2.second_item.description}
                        </Base.P>
                      )}
                      {secondHasValidButtons && (
                        <div className={this.decorateCSS("card-button-container")}>
                          {secondButtons.map((item: INPUTS.CastedButton, index: number) => {
                            const buttonTextExist = this.castToString(item.text);
                            if (!buttonTextExist) return null;
                            return (
                              <ComposerLink key={index} path={item.url}>
                                <Base.Button
                                  buttonType={item.type}
                                  className={this.decorateCSS("card-button")}
                                >
                                  <Base.P className={this.decorateCSS("card-button-text")}>
                                    {item.text}
                                  </Base.P>
                                </Base.Button>
                              </ComposerLink>
                            );
                          })}
                        </div>
                      )}
                    </Base.VerticalContent>
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
                    {row2.third_item.media && (
                      <ComposerLink path={row2.third_item.link}>
                        <Base.Media
                          value={row2.third_item.media}
                          className={this.decorateCSS("image")}
                        />
                      </ComposerLink>
                    )}
                    {thirdContentExist && (
                      <Base.VerticalContent className={this.decorateCSS("card-content")}>
                        {thirdSubtitleExist && (
                          <Base.H5 className={this.decorateCSS("card-subtitle")}>
                            {row2.third_item.subtitle}
                          </Base.H5>
                        )}
                        {thirdDescriptionExist && (
                          <Base.P className={this.decorateCSS("card-description")}>
                            {row2.third_item.description}
                          </Base.P>
                        )}
                        {thirdHasValidButtons && (
                          <div className={this.decorateCSS("card-button-container")}>
                            {thirdButtons.map((item: INPUTS.CastedButton, index: number) => {
                              const buttonTextExist = this.castToString(item.text);
                              if (!buttonTextExist) return null;
                              return (
                                <ComposerLink key={index} path={item.url}>
                                  <Base.Button
                                    buttonType={item.type}
                                    className={this.decorateCSS("card-button")}
                                  >
                                    <Base.P className={this.decorateCSS("card-button-text")}>
                                      {item.text}
                                    </Base.P>
                                  </Base.Button>
                                </ComposerLink>
                              );
                            })}
                          </div>
                        )}
                      </Base.VerticalContent>
                    )}
                  </div>
                )}
              </div>
            )}
            {isRow3Visible && (
              <div
                className={`
                    ${this.decorateCSS("row3")}
                    ${!row3.image_and_subtitle_1.media?.url &&
                    !row3.image_and_subtitle_2.media?.url &&
                    !row3.image_and_subtitle_3.media?.url
                    ? this.decorateCSS("row3-no-image")
                    : ""
                  }`}
              >
                {imageOrContentExist1 && (
                  <ComposerLink
                    path={row3.image_and_subtitle_1.link}
                    isFullWidth={true}
                  >
                    <div className={this.decorateCSS("image_and_subtitle_1")}>
                      {row3.image_and_subtitle_1.media && (
                        <Base.Media
                          value={row3.image_and_subtitle_1.media}
                          className={`
                            ${this.decorateCSS("image")}
                            ${row3Status ? this.decorateCSS("row3-images-less") : ""}
                            ${noContentFirstImage ? this.decorateCSS("row3-no-subtitle") : ""}
                          `}
                        />
                      )}
                      {content1Exist && (
                        <Base.VerticalContent className={this.decorateCSS("card-content")}>
                          {subtitle1 && (
                            <Base.H5 className={this.decorateCSS("card-subtitle")}>
                              {row3.image_and_subtitle_1.subtitle}
                            </Base.H5>
                          )}
                          {description1 && (
                            <Base.P className={this.decorateCSS("card-description")}>
                              {row3.image_and_subtitle_1.description}
                            </Base.P>
                          )}
                          {hasValidButtons1 && (
                            <div className={this.decorateCSS("card-button-container")}>
                              {buttons1.map((item: INPUTS.CastedButton, index: number) => {
                                const buttonTextExist = this.castToString(item.text);
                                if (!buttonTextExist) return null;
                                return (
                                  <ComposerLink key={index} path={item.url}>
                                    <Base.Button
                                      buttonType={item.type}
                                      className={this.decorateCSS("card-button")}
                                    >
                                      <Base.P className={this.decorateCSS("card-button-text")}>
                                        {item.text}
                                      </Base.P>
                                    </Base.Button>
                                  </ComposerLink>
                                );
                              })}
                            </div>
                          )}
                        </Base.VerticalContent>
                      )}
                    </div>
                  </ComposerLink>
                )}
                {imageOrContentExist2 && (
                  <ComposerLink
                    path={row3.image_and_subtitle_2.link}
                    isFullWidth={true}
                  >
                    <div className={this.decorateCSS("image_and_subtitle_2")}>
                      {row3.image_and_subtitle_2.media && (
                        <Base.Media
                          value={row3.image_and_subtitle_2.media}
                          className={`
                            ${this.decorateCSS("image")}
                            ${row3Status ? this.decorateCSS("row3-images-less") : ""}
                            ${noContentSecondImage ? this.decorateCSS("row3-no-subtitle") : ""}
                          `}
                        />
                      )}
                      {content2Exist && (
                        <Base.VerticalContent className={this.decorateCSS("card-content")}>
                          {subtitle2 && (
                            <Base.H5 className={this.decorateCSS("card-subtitle")}>
                              {row3.image_and_subtitle_2.subtitle}
                            </Base.H5>
                          )}
                          {description2 && (
                            <Base.P className={this.decorateCSS("card-description")}>
                              {row3.image_and_subtitle_2.description}
                            </Base.P>
                          )}
                          {hasValidButtons2 && (
                            <div className={this.decorateCSS("card-button-container")}>
                              {buttons2.map((item: INPUTS.CastedButton, index: number) => {
                                const buttonTextExist = this.castToString(item.text);
                                if (!buttonTextExist) return null;
                                return (
                                  <ComposerLink key={index} path={item.url}>
                                    <Base.Button
                                      buttonType={item.type}
                                      className={this.decorateCSS("card-button")}
                                    >
                                      <Base.P className={this.decorateCSS("card-button-text")}>
                                        {item.text}
                                      </Base.P>
                                    </Base.Button>
                                  </ComposerLink>
                                );
                              })}
                            </div>
                          )}
                        </Base.VerticalContent>
                      )}
                    </div>
                  </ComposerLink>
                )}
                {imageOrContentExist3 && (
                  <ComposerLink
                    path={row3.image_and_subtitle_3.link}
                    isFullWidth={true}
                  >
                    <div className={this.decorateCSS("image_and_subtitle_3")}>
                      {!!row3.image_and_subtitle_3.media && (
                        <Base.Media
                          value={row3.image_and_subtitle_3.media}
                          className={`
                            ${this.decorateCSS("image")}
                            ${row3Status ? this.decorateCSS("row3-images-less") : ""}
                            ${noContentThirdImage ? this.decorateCSS("row3-no-subtitle") : ""}
                          `}
                        />
                      )}
                      {content3Exist && (
                        <Base.VerticalContent className={this.decorateCSS("card-content")}>
                          {subtitle3 && (
                            <Base.H5 className={this.decorateCSS("card-subtitle")}>
                              {row3.image_and_subtitle_3.subtitle}
                            </Base.H5>
                          )}
                          {description3 && (
                            <Base.P className={this.decorateCSS("card-description")}>
                              {row3.image_and_subtitle_3.description}
                            </Base.P>
                          )}
                          {hasValidButtons3 && (
                            <div className={this.decorateCSS("card-button-container")}>
                              {buttons3.map((item: INPUTS.CastedButton, index: number) => {
                                const buttonTextExist = this.castToString(item.text);
                                if (!buttonTextExist) return null;
                                return (
                                  <ComposerLink key={index} path={item.url}>
                                    <Base.Button
                                      buttonType={item.type}
                                      className={this.decorateCSS("card-button")}
                                    >
                                      <Base.P className={this.decorateCSS("card-button-text")}>
                                        {item.text}
                                      </Base.P>
                                    </Base.Button>
                                  </ComposerLink>
                                );
                              })}
                            </div>
                          )}
                        </Base.VerticalContent>
                      )}
                    </div>
                  </ComposerLink>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container >
    );
  }
}

export default Feature5;
