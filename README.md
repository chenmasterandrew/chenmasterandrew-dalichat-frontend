# Day 4 - React Basics

This repository was designed and developed by [Adam McQuilkin '22](https://github.com/ajmcquilkin), and is intended to teach new DALI lab members the basics of MERN-stack Javascript web development as well as current best practices. To suggest changes to this repository, please create an issue [here](https://github.com/dali-lab/dalichat-frontend/issues) or create a pull request [here](https://github.com/dali-lab/dalichat-frontend/pulls).

## Overview

Welcome to the wonderful and wacky world of React! Using the knowledge you learned during class today, we're going to be creating the first building blocks of your DALIChat application. We will first walk through some basics of how to convert designs into well-written, maintainable code and then walk through the basics of how we write React code at DALI. Finally, we will turn you loose and you will build the rest of today's components on your own.

## Core Concepts

Before we start writing code, we first need to review two core concepts of developing user interfaces in ReactJS.

### Developing Designs

Before we begin, take a look at the [designs](https://www.figma.com/file/xyiPBrqZVD3YZ9vyciycbY/DALI-Dev-Intro-DALIChat?node-id=67%3A0) we will be working with today. When building components today you will be expected to reference these designs.

A few things to note before we dive into the tasks for today about working with Figma designs. Firstly, every Figma component is fundamentlly a group of Figma basic elements (rectangles, ellipses, lines, images, etc...) that are built into "Components" that can be referenced elsewhere (very similarly to React if you think about it \*wink wink\*). To view properties of an element, click on the component and open the "Inspect" tab in the upper right of the window. This will give you the CSS properties needed to build the element (although you can usually ignore the `position` suggestion).

> If you're having trouble selecting a specific element, try `ctrl+click` on the element.

Additionally, you can see the component layout in the left panel of the Figma window. You can twirl open components and see what layers are required to create a component. Each layer will almost always correlate directly to a JSX element in a React component, so this panel is very useful when building from Figma designs.

For this lesson we have already provided all of the needed styling files, but you will still need to know how to compose the components you will be building today.

> **Important:** Elements you will be building today may contain SVG elements. We will discuss how to load these elements later in the course, so for now replace these with empty `<svg />` tags.

## Tasks

Below are the tasks to complete before next class.

### Initialize JSConfig.json

Create a new file at the root of your project named `jsconfig.json`. This is a configuration file that tells VSCode 1) that this is a Javascript project and 2) to type-check props and functions within the project. Click here for [more information](https://code.visualstudio.com/docs/languages/jsconfig) on `jsconfig.json` files. Paste the following code into the file you created:

```json
{
  "compilerOptions": {
    "checkJs": true,
    "jsx": "react"
  },
  "include": ["src/**/*"]
}
```

### Start Dev Server

As you discussed in class, to view the changes you make to the code live in browser, we use a package called `webpack-dev-server` to serve your website, watch for changes to the files within the project, and refresh your UI to reflect these changes. We have already configured this plugin for you in your `webpack.config.js` file, but there are still a few commands you need to run before you can view your app in the browser.

Even though you have downloaded all of the starter code for this app, if you try running your dev server you will see many errors in the console saying things along the lines of "package or file not found". This is due to the fact that, as listed in your `package.json` file, this project requires pre-written packages to perform various required tasks. These files are stored in the cloud and are not currently installed, so before we can run anything we must download these packages.

To download these packages, we will be using the [`yarn` package manager](https://yarnpkg.com/). To download all required files from the [NPM package repository](https://www.npmjs.com/), run the following command:

```shell
yarn install
```

This command will request the required packages from NPM and load them into the `node_modules` folder in the root of your project. You can also simply run the `yarn` command, which is an alias for the `yarn install` command.

If this completes successfully, you will see a green "success" message in the console output. Once you see this message, all required files have been installed and we can now start the development server. To start the dev server, run the following command:

```shell
yarn start
```

You should see webpack begin compiling your application's code, and once this is complete you can open `localhost:8080` in your browser and see your project in the browser!

> As a reminder, running `yarn COMMAND` will tell yarn to search in the `scripts` field of your project's `package.json` file for a key that matches the `COMMAND` string you entered. In this case, `yarn start` tells yarn to run the command associated with the `start` key in the `package.json/scripts` object, which initializes the webpack development server.

### Component Prop Requirements

Now that we have started the dev server, we can begin creating React components! Before we begin doing this though, we must first discuss what information each component will require to function. We will then be able to pass this information in through the component's `props` object.

> As a note, it is best practice to always do this before creating a component. Even though these props may change over time, thinking about which information each component requires ahead of time will save you and your team headaches later in the dev process.

Let's start with a simple `Button` component. This component standardizes the styling of buttons within the app, but will need to function similarly to a normal HTML `button` element. Let's think about the values this component will need to function.

First, let's think about which values this component will need to render itself effectively. Since this is a button and as such needs to be human-readable, we need to pass a `label` prop into the button to tell it what text to render to the user within the button.

Next, let's think about which values this component will need to complete its intended functionality. Since this is a button, we will need to know what to do when the button is clicked. As such, we need to pass a function to the button called `onClick` that will tell the button what to do when it is clicked. To support buttons within HTML forms (more on this later), we will also need to pass an `isSubmit` prop to tell the button whether or not it is meant to submit a `form` element.

Finally, since this is a component that we intend to reuse in many places throughout the app, it is good practice to pass a `className` prop that will allow the user of the component to pass additional class names to the element to add custom styles.

This leaves us with the following props:

```text
label: string - text to display within button
onClick: function - callback to call when button is clicked
* isSubmit: boolean - whether or not the button is of type `submit`
* className: string - additional class names to append to the top level of the component
```

Note the props that are labelled with a star. These are props that aren't required for the component to function, but add additional functionality when needed. The fact that these props are optional means that we need to assign them default values in the event that the user doesn't pass these props.

Below is a list of the components you will be building today and the props that they should accept, with optional props being assigned a value:

```text
Button:
  label: string
  onClick: function
  isSubmit: boolean = false
  className: string = ''

ErrorPopover:
  errorMessage: string
  clearCurrent: function
  errorTitle: string = ''

LoadingIcon:
  -- No props --

ProfileCard:
  fullName: string
  profileUrl: string
  username: string
  blurb: string
  portfolioUrl: string
  numPosts: number
  uid: string
  className: string = '',

ProfileIcon:
  imgUrl: string
  username: string
  uid: string
  className: string = ''

Tab:
  label: string
  isActive: boolean
  onClick: function

TabContainer:
  activeTab: string
  setActiveTab: function
  children: JSX.Element | JSX.Element
  className: string = ''

TabGroup:
  activeTab: string
  setActiveTab: function
  user: object
  children: JSX.Element | JSX.Element[]
  className: string = ''
```

As a note, the `children` prop is a prop that the `react` library passes into all React components. It represents any JSX elements (of type `JSX.Element` or an array of `JSX.Element` objects) nested (contained) within the component. For example:

```jsx
<ComponentOne id="one">
  <p id="two">Hello, world!</p>
</div>
```

The `children` prop for `ComponentOne` would automatically resolve to contain the following nested JSX elements:

```jsx
<p id="two">Hello, world!</p>
```

The same goes for native JSX elements (think `p`, `a`, `div`, etc...). As such, the `children` prop for the `p` JSX element would contain the string `"Hello, world!"`.

The most common use for the `children` prop is for displaying content within another element. For example, the `ComponentOne` component could be implemented as shown below:

```js
// ... imports here

const ComponentOne = ({ children }) => (
  <div id="componentone-container">{children}</div>
);

export default ComponentOne;
```

This would render the contents of the `children` prop within the `ComponentOne` element. This is useful for layout elements that contain other JSX elements, such as modals (popups).

Additionally, you can also modify the way you render components based on attributes of child elements passed via the `children` prop. Since the `children` prop is a complete JSX element, it is possible to access props of children components contained within the `children` prop. As a note, only do this of you are confident of the structure of the children JSX elements. We will discuss this more within the `TabContainer` component ([see below](#TabContainer-Component)).

### Configure Folder Structure

Now that we've discussed what props each component will require, we need to set up the file structure of your project directory. Your working directory should already contain a `src/components` directory. If not, create one now. The `components` directory is where we will place all React components that we create for the project.

We now need to create subdirectories that contain the code for each of the components we will be creating. In DALI we create a directory for each React component that we create with the same name as the component. For example, for the `ComponentOne` component we would create a `components/ComponentOne` directory. This directory will contain all of the code required to render this component. At a minimum this includes the `index.js` file which contains the component's declaration and a `SCSS` file with the same name as the component. Below is an example directory following this pattern:

```text
/src
  /components
    /ComponentOne
      index.js
      ComponentOne.scss
```

> Any files with the name of `index.js` have special import abilities within Javascript. Instead of importing the file `index.js` as `import ComponentOne from '../ComponentOne/index.js`, we can instead say `import ComponentOne from '../ComponentOne`. This tells JS that we want to import the `ComponentOne` component from the `index.js` file within the `/ComponentOne` directory.

As a project gets larger, this `components` directory will become very large and difficult to work with. To avoid this, it is often advantageous to group similar components within subdirectories of the `components` directory. This grouping can be by use case (think `/pages`), by function (think `/tabs`), or by any other grouping that you and your team decide to be useful. Just make sure that these groupings make sense to outside observers and that you stay consistent with what goes in each subdirectory, since inconsistency defeats the point of this increased organization.

With this in mind, we now need to create these subdirectories for the DALIChat application. For today we will need to create three function-based subdirectories of the `/components` directory, as shown below:

```text
/src
  /components
    /generic
    /profile
    /tabs
```

Once you have created these three subdirectories, create the following subdirectories within the following folders:

```text
/src
  /components
    /generic
      /Button
      /ErrorPopover
      /LoadingIcon

    /profile
      /ProfileCard
      /ProfileIcon

    /tabs
      /Tab
      /TabContainer
      /TabGroup
```

You will populate these subdirectories later within the lesson, but for now they will remain empty.

Finally, place the `App.js` component into an `/App` subdirectory of the `components` directory. Then, open the `src/index.js` file and update the App import line from `import App from './App'` to `import App from './components/App`. This completes the stetup of the `components` directory!

### Import Styling

#### Generic Styling

Next, you will be importing pre-made styles into your application. These styles work with a file called `variables.scss`, which contains style elements that are reused across your application. We will discuss this file more in later classes. For now, create a `src/utils` folder to contain utility files for use across the application and create a `variables.scss` file within this new directory. Place the following styles into the `variables.scss` file:

```scss
/* -------- Imports -------- */

@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@600;700&display=swap"); // Dosis
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"); // Open Sans

/* -------- Variables -------- */

$dosis: "Dosis", sans-serif;
$open-sans: "Open Sans", sans-serif;

$blue: #1e5779;
$white: #ffffff;
$error-light: #ff8b81;
$error-dark: #e71d0c;

$dark-gray: #404040;
$mid-gray: #8a8e90;
$light-gray: #f0f0f0;
$background: #f4f6f8;

$page-width: 960px;
$post-margin: 30px;

/* -------- Standard Styling -------- */

h1 {
  margin: 0px;
  color: $dark-gray;
  font-family: $dosis;
  font-weight: 700;
  font-size: 72px;
}

h2 {
  margin: 0px 0px 60px;
  color: $dark-gray;
  font-family: $dosis;
  font-weight: 600;
  font-size: 60px;
}

/* -------- Mixins -------- */

@mixin header-image {
  margin-bottom: -62px;
}

@mixin page-layout {
  width: $page-width;
  margin: auto auto 48px;
}

@mixin label-styling {
  margin: 0px 0px 9px;
  color: $dark-gray;

  font-family: $open-sans;
  font-weight: 400;
  font-size: 12px;
}

@mixin input-styling {
  padding: 12px 18px;
  color: $dark-gray;

  font-family: $open-sans;
  font-weight: 400;
  font-size: 12px;

  background: $light-gray;
  border-radius: 8px;
  border: none;

  &:-moz-ui-invalid {
    border: 2px solid $error-dark;
    box-shadow: none;
  }

  &::placeholder {
    font-family: $open-sans;
    color: $mid-gray;
  }
}
```

#### File-Specific Styling

With your `variables.scss` file populated, create the following files and paste the included styling code into each respective file. For example, create a file called `ErrorPopover.scss` in the `src/components/generic/ErrorPopover` directory and paste in the included `SCSS` code.

##### Generic

<details>

<summary>src/components/generic/Button/Button.scss</summary>

```scss
@import "../../../utils/variables.scss";

.button-container {
  margin: 0px auto;
  padding: 12px 36px;
  font-family: $open-sans;
  color: $white;

  background: $blue;
  box-shadow: 0px 4px 10px rgba(94, 99, 102, 0.25);
  border-radius: 8px;
  border: none;

  cursor: pointer;
}
```

</details>

<details>

<summary>src/components/generic/ErrorPopover/ErrorPopover.scss</summary>

```scss
@import "../../../utils/variables.scss";

#error-popover-container {
  display: flex;
  flex-direction: column;
  padding: 15px 30px 15px 21px;
  box-sizing: border-box;
  width: 250px;

  position: fixed;
  z-index: 999;
  right: 0px;
  top: 120px;

  background: $white;
  border-radius: 8px 0px 0px 8px;
  box-shadow: 0px 4px 10px rgba(94, 99, 102, 0.125);
  border: 1px solid $light-gray;

  font-family: $open-sans;
  transform: translateX(100%);
  transition: 0.3s ease-in-out transform;

  &.active {
    transform: translateX(0%);
  }

  #error-title-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    margin: 0px auto 7px 0px;

    svg {
      margin: auto 7px auto 0px;
    }

    #error-title {
      margin: auto 0px;
      color: $error-dark;
      font-weight: 600;
      font-size: 15px;
    }
  }

  #error-content {
    margin: 0px auto 0px 0px;
    color: $dark-gray;
    font-weight: 400;
    font-size: 12px;
  }
}
```

</details>

<details>

<summary>src/components/generic/LoadingIcon/LoadingIcon.scss</summary>

```scss
@import "../../../utils/variables.scss";

.loading-icon-container {
  font-family: $open-sans;
  font-weight: 400;
  font-size: 12px;
}
```

</details>

##### Profile

<details>

<summary>src/components/profile/ProfileCard/ProfileCard.scss</summary>

```scss
@import "../../../utils/variables.scss";

.profile-card-container {
  display: flex;
  flex-direction: column;
  width: 257px;
  padding: 20px;
  position: relative;

  font-family: $open-sans;
  background: $white;
  box-shadow: 0px 4px 10px rgba(94, 99, 102, 0.125);
  border-radius: 8px;

  svg {
    position: absolute;
    left: 20px;
    top: 20px;
  }

  .profile-image {
    width: 96px;
    height: 96px;
    margin: 0px auto 12px;
  }

  .portfolio-card-name {
    margin: 0px 0px 3px;
    text-decoration: none;

    color: $dark-gray;
    text-align: center;
    font-weight: 600;
    font-size: 15px;
  }

  .portfolio-card-username {
    margin: 0px;
    text-decoration: none;

    color: $mid-gray;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
  }

  p,
  a {
    margin: 9px 0px 0px;
    text-align: center;
    color: $dark-gray;
    font-weight: 400;
    font-size: 12px;
    line-height: 155%;
  }

  .portfolio-card-portfolio-url {
    color: $blue;
  }

  .portfolio-card-posts {
    color: $mid-gray;
  }
}
```

</details>

</details>

<details>

<summary>src/components/profile/ProfileIcon/ProfileIcon.scss</summary>

```scss
@import "../../../utils/variables.scss";

.profile-icon-container {
  width: 40px;
  height: 40px;

  .profile-icon {
    width: 100%;
    height: 100%;

    border-radius: 50%;
    object-fit: cover;
    border: 2px solid $light-gray;
  }
}
```

</details>

</details>

</details>

##### Tabs

<details>

<summary>src/components/tabs/Tab/Tab.scss</summary>

```scss
@import "../../../utils/variables.scss";

.tab-container {
  list-style: none;

  button {
    color: $dark-gray;
    font-family: $open-sans;
    font-weight: 400;
    font-size: 12px;

    width: 100%;
    height: 100%;
    padding: 20px 30px 19px;
    box-sizing: border-box;
    background: none;
    border: none;

    cursor: pointer;
  }

  &.active {
    color: $blue;
    border-bottom: 2px solid $blue;
    margin-bottom: -1px; // Positions bottom border correctly
  }
}
```

</details>

<details>

<summary>src/components/tabs/TabContainer/TabContainer.scss</summary>

```scss
@import "../../../utils/variables.scss";

.tab-container-container {
  background: $white;
  box-shadow: 0px 4px 10px rgba(94, 99, 102, 0.125);
  border-radius: 8px;
  flex: 1;

  .tab-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0px;
    padding: 0px;
    border-bottom: 1px solid $light-gray;
  }

  .tab-container-content {
    display: flex;
    flex-direction: column;
    padding: 30px;
  }
}
```

</details>

<details>

<summary>src/components/tabs/TabGroup/TabGroup.scss</summary>

```scss
@import "../../../utils/variables.scss";

.tabgroup-container {
  display: flex;
  flex-direction: row;
  margin: auto auto 48px;
  width: 100%;

  position: relative;
  z-index: 2;

  .tabgroup-profile-card {
    position: sticky;
    margin: 0px 24px auto 0px;
  }
}
```

</details>

### Creating Basic Components

Once you've pasted all of the required styling into its respective files, we are finally ready to write some React components! You will be walked through creating the `Button`, `ProfileIcon`, and `ProfileCard` components and you will then create the `Tab` and `TabGroup` components. You will be provided the code for the `TabContainer` component.

#### Button Component

We will first start with the `Button` component, which is arguably the most basic component within the DALIChat application. The `Button` component is a wrapper for the default `button` JSX element that standardizes how buttons within the app are styled.

When creating the `Button` component, we will follow the following steps:

1. Import React and styles file
2. Create empty Button component and export default (with parens shortcut)
3. Destructure required props with required defaults
4. Lay out JSX structure with all required elements (using sematic html)
5. Fill in JSX props and callbacks
6. Assign classnames and ids (depending on context) to elements
7. Style components in scss (this has been provided already)

To begin, we will create the `index.js` file within the `components/generic/Button` directory. We will then import React and the styling file with the following lines:

```js
import React from "react"; // This is needed whenever using JSX syntax
import "./Button.scss"; // Tells browser how to style the component
```

Next, we will create an empty `Button` component and export it as default from the file.

> As a note, using `export default SOMETHING` allows the import of `SOMETHING` from the root of the file in the following way: `import SOMETHING from './someFile`. You can also simply export `SOMETHING` from a file (known as a named export) using `export SOMETHING` and access it with `import { SOMETHING } from './someFile'`.

Create the empty `Button` component in the following way:

```js
/* ... */

const Button = () => (
  <div>
    <div>This is content in the Button component!</div>
  </div>
);

export default Button;
```

> As a note, `const Button = () => (...);` is shorthand for `const Button = () => { return (...); }`

We now need to specify which props are needed by this component. As we specified above, the `Button` component needs the following props:

```text
label: string
onClick: function
isSubmit: boolean = false
className: string = ''
```

We specify these props in the declaration of the functional component as below. Note how optional props are given a default value with the `=` operator:

```js
/* ... */

const Button = ({ label, onClick, isSubmit = false, className = "" }) => (
  <div>
    <div>This is content in the Button component!</div>
  </div>
);

/* ... */
```

We can now access these props from within the `Button` component. With these props, we can create the JSX content of the `Button` component:

```js
/* ... */

const Button = ({ label, onClick, isSubmit = false, className = "" }) => (
  <div>
    <button>{label}</button>
  </div>
);

/* ... */
```

Then we specify callbacks and additional props to sub-elements of the `Button` component:

```js
/* ... */

const Button = ({ label, onClick, isSubmit = false, className = "" }) => (
  <button
    type={isSubmit ? "submit" : "button"}
    onClick={isSubmit ? () => {} : onClick}
  >
    {label}
  </button>
);

/* ... */
```

We can now add class names and ids to the children JSX elements:

```js
/* ... */

const Button = ({ label, onClick, isSubmit = false, className = "" }) => (
  <button
    type={isSubmit ? "submit" : "button"}
    className={`button-container ${className}`}
    onClick={isSubmit ? () => {} : onClick}
  >
    {label}
  </button>
);

/* ... */
```

Note how we give the `button` JSX element a `className` of `"button-container"` but also allow the user to specify their own custom `className` prop and add it to the `button` element. This is intended to be used to add layout styles, such as `margin` and `flex`.

Normally we would style the component during this final step, but to save time and effort we will be providing many of the styles for this class directly to you. This means that you will need to follow along with the layout of the styles within the `*.scss` files to make sure the structure of your components' JSX is the same as that of the styling file.

> Remember that `SCSS` allows nesting of rules, which limits the scope of these rules. For example, take the following style:
>
> ```scss
> .class-one {
>   #id-two
>     color: green;
>   }
> }
> ```
>
> This rule will only apply to elements of the following form:
>
> ```jsx
> <element className="class-one">
>   <element id="id-two">I will be green</element>
> </element>
> ```
>
> In this case the type of the element doesn't matter, but an element with the id `id-one` must be contaned within an element with a class name of `class-one` for the style to take effect. For example, the rule will **not** apply to the following sets of JSX:
>
> ```jsx
> <element>
>   <element id="id-two">I will NOT be green</element>
> </element>
> ```
>
> ```jsx
> <element>I will NOT be green</element>
> ```
>
> ```jsx
> <element className="class-two">
>   <element id="id-two">I will NOT be green</element>
> </element>
> ```
>
> This means that your SCSS will follow the structure of the JSX you are writing, but it also means that you can infer the structure of the JSX from the SCSS file. Again gleaning information from a file is generally not advised, but in this case we both want to provide you the styles ahead of time and we want you to follow what DALI considers to be good code layout practices.

You should end up with a `Button` component that looks like this!

```js
import React from "react";
import "./Button.scss";

const Button = ({ label, onClick, isSubmit = false, className = "" }) => (
  <button
    type={isSubmit ? "submit" : "button"}
    className={`button-container ${className}`}
    onClick={isSubmit ? () => {} : onClick}
  >
    {label}
  </button>
);

export default Button;
```

To view this component in your browser, import the `Button` component and then insert the following JSX into the `App` component and open `localhost:8080` with your dev server running:

```jsx
<Button label="Test Label" onClick={() => console.log("clicked!")} />
```

For the following components that you will be creating, we recommend that you import each component into the `App` component to view your progress on the component and to get a feel for working with a live-reloading dev server.

#### ProfileIcon Component

You will now be creating the `ProfileIcon` component. This component will be a single `img` element with a `className` of `profile-icon` contained within a single `div` element with a `className` of `profile-icon-container`. This component will take an `imageUrl` prop, a `username` prop, a `uid` prop, and a `className` prop.

The `imageUrl` prop will be passed into the `src` prop of the `img` element, the `username` prop needs to be placed into the `alt` prop of the `img` element as below:

```jsx
alt={`profile of user ${username}`}
```

Insert the `className` prop into the top-level container of the element (in this case the `div`) as follows:

```jsx
className={`profile-icon-container ${className}`}
```

> As a reminder, you can view the end result of these components in the [included design files](https://www.figma.com/file/xyiPBrqZVD3YZ9vyciycbY/DALI-Dev-Intro-DALIChat?node-id=67%3A0).

#### ProfileCard Component

To create the `ProfileCard` component, again walk through the basic steps to creating a React component. Insert the basic JSX elements into the `ProfileCard` component with appropriate class names and ids by following the structure of the `ProfileCard.scss` file. This component will use anchors (`a`) for the `fullName` and `username` props with `href` props of `/user/{uid}`

When including the `blurb` and `portfolioUrl` props, note that we haven't assigned these props defaults while they are technically optional. The reason we have done this is because we want to use the existence (or lack thereof) to change how the component is rendered. We do this using the [`logical AND` operator (`&&`)](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator), which you may be familiar with from previous CS classes. In React, we can use this operator to modify the rendering of components based on boolean conditions. Within React, logical AND has the following behavior:

```jsx
<div>{blurb && <p>{blurb}</p>}</div> // If blurb is undefined (not passed as a prop), this expression returns false
```

This means that if blurb doesn't exist, this expression will not render the paragraph element (`p`) and will return `false` (telling React to not render anything for this line).

We will be using this behavior on the `blurb` and `portfolioUrl` props to not render anything in the event that either are not defined.

#### TabContainer Component

To create the `TabContainer` component, first create the outline of a basic React component, then create a container `div` with a child ordered list (`ol`) element and a child `div` element. For this component, we must explicitly return JSX and cannot use the shorthand mentioned above.

Above the `return (...)` function call, insert the following line:

```js
const childrenArray = React.Children.toArray(children);
```

This allows us access to an array of JSX elements representing the children of the current React component (as discussed [above](#Component-Prop-Requirements)). We will then be able to iterate through these children and render content based on each child JSX element.

The `TabContainer` component is intended to simplify the process of creating a series of tabs and rendering only the content from the active tab. Below is an example of the usage of the `TabContainer` component:

```jsx
<TabContainer activeTab="{activeTab}" setActiveTab="{setActiveTab}">
  <div label="New Posts">Content of "New Posts" tab</div>
  <div label="Popular Posts">Content of "Popular Posts" tab</div>
</TabContainer>
```

Each child of the `TabContainer` component is expected to be passed a `label` prop, and this label prop is what will be rendered into the Tab element created for each child. In this example there will be two tabs created, one called "New Posts" and one called "Popular Posts". Again, each tab is identified by its `label` prop.

If the `label` prop of a given child element matches with the `activeTab` prop of the `TabContainer` component, the `TabContainer` element will render the content of only that specific child element, allowing the user to only see the content of one tab at a time.

We can implement this functionality by acessing the `children` prop of the `TabContainer` component. To do this, we need to complete the following steps:

1. Iterate through each child of the `TabContainer` component
2. Extract the `label` prop of the child component
3. Render a tab with the given label
4. Render the content of the given tab below the tab

To iterate through all of the children of the `TabContainer` component, we first need to ensure that the `children` prop is an array of valid JSX elements. To do this, we need to use th `childrenArray` we declared above. With this, we can use the [Array Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function to return a tab for each child encountered:

```jsx
<div>
  {
    childrenArray.map((child) => {
      const { label } = child.props;
      return (
        <Tab
          isActive={activeTab === label}
          label={label}
          key={label}
          onClick={() => setActiveTab(label)}
        />
      );
    });
  }
</div>
```

We haven't built the `Tab` component yet, so this code will throw errors unless you have written an outline for the `Tab` component and imported it into the `TabContainer` component.

To render the appropriate content for the given active tab, we need to render the content of the `div` element with the label matching the active tab. We do this with the JSX below:

```jsx
<div>
  {childrenArray.find((child) => child.props.label === activeTab)?.props
    ?.children || "Tab Empty"}
</div>
```

This expression loops through all of the children of the `TabContainer` component and finds the child with a `label` prop matching the current `activeTab` string. Once the appropriate tab is found, we then access the `children` prop of this element and render these children. If no child elements exist for the `TabContainer` element or the child element with the corresponding `label` prop doesn't have any valid children, the string `"Tab Empty"` will be rendered.

> As a note, the `?.` syntax is known as [Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) and is a very useful syntax to be familiar with!

Now that we have introduced more advanced topics dealing with React's `children` prop, place the Tab-creation code snippet as a child of the ordered list element you created earlier. Place the code snippet that renders the content of each tab within the `div` container that we created before (below the `ol`). You should now have a component that looks like this!

```jsx
import React from "react";
import { useHistory } from "react-router-dom";
import Tab from "../Tab";

import "./TabContainer.scss";

const TabContainer = ({
  activeTab,
  setActiveTab,
  updateUrls = false,
  urlBase = "",
  className = "",
  children,
}) => {
  const childrenArray = React.Children.toArray(children);
  const history = useHistory();

  return (
    <div className={`tab-container-container ${className}`}>
      <ol className="tab-list">
        {childrenArray.map((child) => {
          const { label } = child.props;
          return (
            <Tab
              isActive={activeTab === label}
              label={label}
              key={label}
              onClick={() => {
                if (updateUrls) {
                  history.push(`${urlBase}/${label.toLowerCase()}`);
                }
                setActiveTab(label);
              }}
            />
          );
        })}
      </ol>
      <div className="tab-container-content">
        {childrenArray.find((child) => child.props.label === activeTab)?.props
          ?.children || "Tab Empty"}
      </div>
    </div>
  );
};

export default TabContainer;
```

### Create Other Generics

You should now have created the `Button`, `ProfileIcon`, `ProfileCard`, and `TabContainer` elements. With the provided designs, it's your turn to create the `Tab`, `TabGroup`, `LoadingIcon`, and `ErrorPopover` components. Remember to use the `TabContainer` component within the `TabGroup` component and to follow the structure of the `*.scss` file to determine the structure of the JSX you will be creating. The `LoadingIcon` component will simply be a paragraph element with no props, and the `ErrorPopover`, `Tab`, and `TabGroup` components are specified within the provided designs.

As always, if you ever need any help feel free to reach out to us at any time. Good luck!

## Readings

Below are some readings building on the idea of component reusability we discussed in today's out of class work and introducing concepts we will be discussing in the next class section.

### Component Reusability

- [The Three Levels of Reusability in React](https://hackernoon.com/the-three-types-of-reusable-react-components-37a6bf7c2d69)
- [How to Maximize Reusability for Your React Components](https://medium.com/better-programming/how-to-maximize-reusability-for-your-react-components-d9607c04f2aa)

### Intro to Lifecycle Methods

- [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) (ReactJS)
- [React.Component](https://reactjs.org/docs/react-component.html) (ReactJS)
- [React Lifecycle Methods Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### Intro to Hooks

- [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html) (skim this through "✌️ Rules of Hooks ")

### Misc

- [JS Destructuring in 100 Seconds](https://www.youtube.com/watch?v=UgEaJBz3bjY) (highly recommend you subscribe to this channel!)
