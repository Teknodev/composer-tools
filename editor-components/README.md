# How to Create a Component and How to Approach Them?

## Prop Types

### Single Value Prop

|           | string                          | number                          | icon                            | image                                 | page                            | object                          | array                           |
| --------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| type      | "string"                        | "number"                        | "icon"                          | "image"                               | "page"                          | "object"                        | "array"                         |
| key       | [be descriptive, use camelCase] | [be descriptive, use camelCase] | [be descriptive, use camelCase] | [be descriptive, use camelCase]       | [be descriptive, use camelCase] | [be descriptive, use camelCase] | [be descriptive, use camelCase] |
| displayer | "Title"                         | "My Numeric Value"              | "Select Icon"                   | "Upload Image"                        | "Enter Link"                    | "Person"                        | "Items"                         |
| value     | "Lorem ipsum."                  | 1024                            | "FaArrowDown"                   | "https://storage.googleapis.com/...." | "https://google.com"            | {...}                           | [...,{..},{..},...]             |

Displayer is on you. Just be descriptive and make it meaningful.

**Key Examples:**

JUST USE CAMEL CASE.

- cardTitle
- backgroundImage
- buttonArray
- sliderItems

#### String

```javascript
this.addProp({
  type: "string",
  key: "title",
  displayer: "Title",
  value: "User Statistics on the Website",
});
```

#### Number

```javascript
this.addProp({
  type: "number",
  key: "num",
  displayer: "Numeric Value",
  value: 1024,
});
```

#### Icon

```javascript
this.addProp({
  type: "icon",
  key: "icon",
  displayer: "Icon",
  value: "FaArrowDown",
});
```

#### Image

```javascript
this.addProp({
  type: "image",
  key: "image",
  displayer: "Image",
  value: "https://storage.googleapis.com/......",
});
```

#### Page

```javascript
this.addProp({
  type: "page",
  key: "link",
  displayer: "Button Link",
  value: "https://google.com",
});
```

#### Object

```javascript
this.addProp({
  type: "object",
  key: "person",
  displayer: "a Person",
  value: [
    {
      type: "string",
      key: "name",
      displayer: "Name",
      value: "John"
    },
    {
      type: "string",
      key: "surname",
      displayer: "Surname",
      value: "Doe"
    },
    {
      type: "number",
      key: "age",
      displayer: "Age",
      value: 22
    },
    {
      type: "image",
      key: "profilePicture",
      displayer: "Profile Picture",
      value: "https://storage.googleapis.com/...."
    },
    {
      type: "icon",
      key: "favoriteIcon",
      displayer: "Their Favorite Icon",
      value: "FaGithub"
    },
    {
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "string",
          key: "item",
          displayer: "Item",
          value: "Bow"
        },
        {
          type: "string",
          key: "item",
          displayer: "Item",
          value: "Arrow"
        },
        {
          type: "string",
          key: "item",
          displayer: "Item",
          value: "Sword"
        },
      ]
    },
  ],
});
```

### Multiple Value Prop

#### Array

```javascript
{
  type: "array",
  key: "items",
  displayer: "Items",
  value: [
    {
      type: "string",
      key: "item",
      displayer: "Item",
      value: "Bow"
    },
    {
      type: "string",
      key: "item",
      displayer: "Item",
      value: "Arrow"
    },
    {
      type: "string",
      key: "item",
      displayer: "Item",
      value: "Sword"
    },
  ]
},
```

## How to Approach Props?

We should create types for props that has the types "object" or "array".

If you have a prop like this:

```javascript
this.addProp({
  type: "array",
  key: "cards",
  displayer: "Card Items",
  value: [
    {
      type: "object",
      key: "card",
      displayer: "Card Item",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Example",
        },
        {
          type: "number",
          key: "value",
          displayer: "Value",
          value: 50000,
        },
        {
          type: "icon",
          key: "description",
          displayer: "Icon",
          value: "FaArrowUp",
        },
      ],
    },
    ....
```

**You should create a type for this prop.**

Name it like `I{entity_name}`. e.g.: ICard, IButton, ISliderItem...

Use singular names.

For the prop above, the type will be like:

```javascript
type CardItem = {
  title: JSX.Element;
  value: number;
  icon: string;
}
```

### Why JSX.Element for a String??

For a property that user can enter a value by hand, we use JSX.Element.
For these props the entered value is returned with a `<blinkpage>` element and will be rendered with it.

That is why we should check if a singular prop does exist or not using `this.castToString()`. Because
even if the input is empty, it will return a `<blinkpage>` element with an empty innerHTML.

### How to Check If a String Prop is Empty?

You can check if its empty or not, like:

```javascript
{this.castToString(this.getPropValue("mainTitle")) &&
  <h1>{this.getPropValue("mainTitle")}</h1>
}
```

This code represents; if mainTitle prop is empty, then do not render `<h1>` element.
Also; for a much cleaner code,
<br>
**Under the `render() {`, above the `return (`.**<br>
We prefer an approach like this:

```javascript
render(){

  const isTitleExist = this.castToString(this.getPropValue("title"));

  return (
    ...
    {isTitleExist &&
      <h1>{this.getPropValue("title")}</h1>
    }
    ...
```

If the case is for an array, then check it like this:

```javascript
{cardItems.length > 0 &&
  <div class={this.decorateCSS("card-items")}>
    ...
  </div>
}
```

If the array does not have any element, then do not render its wrapper container.

## How to Reference Arrays?

**Under the `render() {`, above the `return (`.**

```javascript
render() {

  const cardList = this.castToObject<ICard[]>("cardItems");

  return (
    ...
```
