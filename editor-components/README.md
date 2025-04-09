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
this.addProp({
  type: "array",
  key: "items",
  displayer: "Items",
  value: [
    {
      type: "object",
      key: "item",
      displayer: "Item",
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
    }
  ]
})
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

Name it like `{entity_name}Type`. e.g.: CardType, ButtonType, SliderItemType...

Use singular names.

For the prop above, the type will be like:

```javascript
type CardItemType = {
  title: React.JSX.Element;
  value: number;
  icon: string;
}
```

### Why React.JSX.Element for a String??

For a property that user can enter a value by hand, we use React.JSX.Element.
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

  const cardList = this.castToObject<CardType[]>("cardItems");

  return (
    ...
```

## How to Map Things?

We should cast our arrays and its items to map. It will make our job easier to do.

Let's assume we have a type named "Card". This Card will take props like: title, background image, button text, button link etc.
```javascript
type Card = {
  title: React.JSX.Element;
  backgroundImage: string;
  buttonText: React.JSX.Element;
  buttonLink: string;
}
```

Why React.JSX.Element and not string? You can read [here](#why-jsxelement-for-a-string).<br>
Then we need to map our array which contains so many "Card"s.

**TIP:** It's better to reference our array between `render` and `return` statements. It will better for a much more cleaner code.

```javascript
render() {

  const cards = this.castToObject<Card[]>("cards");
  // ("cards") -> your props key.
  // Card[] -> tells this is an array.

  return (
    ...
    ...
```

Then we are finally ready to map our array.

```javascript
  cards.map((item: Card, index: number) => (
    <div key={index}>
      ...
      ...
  ))
```

<u>Don't forget to use key</u> for the element that you map. It may be a div or other stuff, it doesn't matter. You must use key. It doesn't mean that it should be the index, it can be one of your item's field. But it must be **unique**.

```javascript
  users.map((user: User) => (
    <div key={user._id}>
      // this works either.
      ...
      ...
  ))
```

## Why all tags must have className?

Users may want to customize the component to suit their preferences. To facilitate this, the system displays a tree structure that allows for easy customization.
This tree is generated based on the class names of elements in the DOM, ensuring proper organization. Therefore, every tag must have a class name. 
If a conditional class name is applied, at least one primary class must always be present.

FOR EXAMPLE:
```javascript
  <div
    className={`${this.decorateCSS("title")} ${
      condition && this.decorateCSS("active")
    }`}
  />
```

## Why shouldn't ID be given to tags when making components??

In the system, users can customize the class names of components. However, there may be cases where styling a specific element rather than an entire class is necessary or preferred.
To accommodate this, the system automatically assigns an ID to every element. 
As a result, any manually assigned IDs will be overridden, meaning you won't have access to the custom ID you specify.