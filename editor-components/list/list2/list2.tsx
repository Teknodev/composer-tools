import * as React from "react";
import { BaseList } from "../../EditorComponent";
import styles from "./list2.module.scss";

interface List2Props {
  map(arg0: (title: any, indexLinkMain: number) => React.JSX.Element): React.ReactNode;
  List2Items: List2Items;
}
interface List2Items {
  listEmoji: string;
  listTitle: string;
  listDesc: string;
  link: string;
}
class List2 extends BaseList {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "link-main",
      displayer: "Link Main",
      value: [
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
                    {
                      type: "string",
                      key: "listNumber",
                      displayer: "List Number",
                      value: "1",
                    },
                    {
                      type: "image",
                      key: "listEmoji",
                      displayer: "List Emoji",
                      value: "https://cdn-icons-png.flaticon.com/512/1828/1828108.png",
                    },
                    {
                      type: "string",
                      key: "listTitle",
                      displayer: "List Title",
                      value: "Lorem Ipsum",
                    },
                    {
                      type: "string",
                      key: "listDesc",
                      displayer: "List Description",
                      value: "Want to improve your health and well-being?",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
            },
          ],
        },
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
                    {
                      type: "string",
                      key: "listNumber",
                      displayer: "List Number",
                      value: "2",
                    },
                    {
                      type: "image",
                      key: "listEmoji",
                      displayer: "List Emoji",
                      value: "https://cdn-icons-png.flaticon.com/512/1828/1828108.png",
                    },
                    {
                      type: "string",
                      key: "listTitle",
                      displayer: "List Title",
                      value: "Lorem Ipsum",
                    },
                    {
                      type: "string",
                      key: "listDesc",
                      displayer: "List Description",
                      value: "Want to improve your health and well-being?",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
            },
          ],
        },
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
                    {
                      type: "string",
                      key: "listNumber",
                      displayer: "List Number",
                      value: "3",
                    },
                    {
                      type: "image",
                      key: "listEmoji",
                      displayer: "List Emoji",
                      value: "https://cdn-icons-png.flaticon.com/512/1828/1828108.png",
                    },
                    {
                      type: "string",
                      key: "listTitle",
                      displayer: "List Title",
                      value: "Lorem Ipsum",
                    },
                    {
                      type: "string",
                      key: "listDesc",
                      displayer: "List Description",
                      value: "Want to improve your health and well-being?",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
        },
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
                    {
                      type: "string",
                      key: "listNumber",
                      displayer: "List Number",
                      value: "3",
                    },
                    {
                      type: "image",
                      key: "listEmoji",
                      displayer: "List Emoji",
                      value: "https://cdn-icons-png.flaticon.com/512/1828/1828108.png",
                    },
                    {
                      type: "string",
                      key: "listTitle",
                      displayer: "List Title",
                      value: "Lorem Ipsum",
                    },
                    {
                      type: "string",
                      key: "listDesc",
                      displayer: "List Description",
                      value: "Want to improve your health and well-being?",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
        },
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
                    {
                      type: "string",
                      key: "listNumber",
                      displayer: "List Number",
                      value: "3",
                    },
                    {
                      type: "image",
                      key: "listEmoji",
                      displayer: "List Emoji",
                      value: "https://cdn-icons-png.flaticon.com/512/1828/1828108.png",
                    },
                    {
                      type: "string",
                      key: "listTitle",
                      displayer: "List Title",
                      value: "Lorem Ipsum",
                    },
                    {
                      type: "string",
                      key: "listDesc",
                      displayer: "List Description",
                      value: "Want to improve your health and well-being?",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
        },
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
                    {
                      type: "string",
                      key: "listNumber",
                      displayer: "List Number",
                      value: "3",
                    },
                    {
                      type: "image",
                      key: "listEmoji",
                      displayer: "List Emoji",
                      value: "https://cdn-icons-png.flaticon.com/512/1828/1828108.png",
                    },
                    {
                      type: "string",
                      key: "listTitle",
                      displayer: "List Title",
                      value: "Lorem Ipsum",
                    },
                    {
                      type: "string",
                      key: "listDesc",
                      displayer: "List Description",
                      value: "Want to improve your health and well-being?",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
        },
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
                    {
                      type: "string",
                      key: "listNumber",
                      displayer: "List Number",
                      value: "3",
                    },
                    {
                      type: "image",
                      key: "listEmoji",
                      displayer: "List Emoji",
                      value: "https://cdn-icons-png.flaticon.com/512/1828/1828108.png",
                    },
                    {
                      type: "string",
                      key: "listTitle",
                      displayer: "List Title",
                      value: "Lorem Ipsum",
                    },
                    {
                      type: "string",
                      key: "listDesc",
                      displayer: "List Description",
                      value: "Want to improve your health and well-being?",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
        },
        {
          type: "object",
          key: "title",
          displayer: "Title",
          value: [
                    {
                      type: "string",
                      key: "listNumber",
                      displayer: "List Number",
                      value: "3",
                    },
                    {
                      type: "image",
                      key: "listEmoji",
                      displayer: "List Emoji",
                      value: "https://cdn-icons-png.flaticon.com/512/1828/1828108.png",
                    },
                    {
                      type: "string",
                      key: "listTitle",
                      displayer: "List Title",
                      value: "Lorem Ipsum",
                    },
                    {
                      type: "string",
                      key: "listDesc",
                      displayer: "List Description",
                      value: "Want to improve your health and well-being?",
                    },
                    {
                      type: "page",
                      key: "link",
                      displayer: "Link",
                      value: "",
                    },
                  ],
        },
      ],
    });
  }

  getName(): string {
    return "List 2";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
              <ol className={this.decorateCSS("olcards")}>
          {this.castToObject<List2Props>("link-main").map((title: List2Items, indexLinkMain: number) => {
            return (
                <li>
                  <div className={this.decorateCSS("content")}>
                    <img src={title.listEmoji} alt=""/>
                    <div className={this.decorateCSS("title")}>{title.listTitle}</div>
                    <div className={this.decorateCSS("text")}>{title.listDesc}</div>
                  </div>
                </li>
                );
              })}
              </ol>            
        </div>
      </div>
    );
  }
}

export default List2;
