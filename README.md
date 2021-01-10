# Day 2 - Networking Basics

This repository was designed and developed by [Adam McQuilkin '22](https://github.com/ajmcquilkin), and is intended to teach new DALI lab members the basics of MERN-stack Javascript web development as well as current best practices. To suggest changes to this repository, please create an issue [here](https://github.com/dali-lab/dalichat-frontend/issues) or create a pull request [here](https://github.com/dali-lab/dalichat-frontend/pulls).

## Overview

Today we are focusing on planning out how dtaa flows through web applications. We will be introducing a tool ([UML Sequence Diagrams](#UML-Sequence-Diagrams)) to help you visualize these flows. You will then be planning out the different features of the DALIChat application and creating a UML Sequence Diagram for these features.

## Core Concepts

Before we begin planning out how data will flow through the DALIChat application, we must first introduce a tool for you to create visual representations of interactions within a system.

### UML Sequence Diagrams

Data flow within computer systems can get complicated very quickly, and this becomes a problem when you as a developer are trying to plan out the bahavior of a given application. Thankfully, there is a standardized way to represent this data flow through a given system!

Introducting [UML](https://en.wikipedia.org/wiki/Unified_Modeling_Language) Sequence Diagrams, a standardized method for representing the behaviors of different parts of a system in relation to the user and other parts of the system. Below is a simple example of a UML Sequence Diagram, or Sequence Diagram for short:

![image](https://user-images.githubusercontent.com/46639306/104112985-3965b800-52c3-11eb-8c92-73edc373f67a.png)

Below is a more complex example of a UML Sequence Diagram:

![image](https://user-images.githubusercontent.com/46639306/104113004-60bc8500-52c3-11eb-8921-9e26a89cc1eb.png)

At their core, UML Sequence Diagrams are a method of representing interactions between parts of a system over time. In UML Sequence Diagrams, time is represented vertically with the top of the diagram being the start of the interaction and the bottom of the diagram being the end of the interaction. The horizontal element of the diagram shows the different components of the system in no inherent order (although it is often advantageous to place elements in the order of interaction from left to right).

Additionally, UML Sequence Diagrams contain various notational elements that represent different types of interactions between elements of the system. Before continuing, read through the "Sequence Diagram Notation" section ("Notations" in the sidebar) of [this link](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-sequence-diagram/) to learn more about these elements. Focus mainly on the `Actor`, `Lifeline`, `Activation`, `Call Message`, and `Return Message` elements. For additional information on UML Sequence Diagrams, see [this link](https://www.geeksforgeeks.org/unified-modeling-language-uml-sequence-diagrams/).

We will be creating one of these diagrams today to represent the data flow for different information flows within your DALIChat application.

## Tasks

Below are the tasks to complete before next class.

### Review Feature Spec for DALIChat

For this project, let's imagine that you're working with a partner that has given you the following list of requirements for a new social media platform they're calling DALIChat. The application will have the following pages:

```text
Home / Profile Page
Search Page
Explore Page
Settings Page
User Page
```

The application will allow users to complete the following actions on each page. A star (`*`) denotes a feature the user can initiate through interacting with the site (i.e. by clicking on a button).

```text
Home / Profile Page:
- View information about user's own profile
- View user's own posts
- * Create a new post
- * Delete a post

Search Page:
- * Search for users and posts (one request for both)
- View results of this search

Explore Page:
- View newest posts posted on the platform
- * View most popular posts on the platform

Settings Page:
- View personal account settings
- * Modify personal account settings

User Page:
- View most recent posts from user
- * View most popular posts from user
```

The partner has determined that today we will focus on creating a UML Sequence Diagram showing the system interactions required to make this page functional.

### Create Homepage UML Sequence Diagram

Now we move on to creating a UML Sequence Diagram for the functionality of the homepage. It may seem like you need to have designs for an application before knowing how the data will flow, but we can actually glean a significant amount of information from the feature specification that we've been provided.

> :exclamation: **Important:** This is an exercise, and you should **never** try to glean information from a feature specification. **_If you have questions, reach out to your partner._** This will make sure your team and the partners are on the same page, and make sure that your work won't be wasted.

For one, we know which features will be on which pages. This tells us two things:

1. The first frontend-backend interaction will be requesting and returning the HTML for the frontend application

2. We will then need to make at two API requests to load data for the user after requesting and receiving the HTML for the page

In this case, the information that needs to be requested is the user's own object _from the database_ and their posts _from the database_.

> **Remember:** Your frontend should **never** interact directly with your database. All data you need from the database will be fetched through requests with the backend.

This means that after the page loads, the frontend needs to make two requests to the backend (assume these requests are made one after the other). This also means that the page isn't considered loaded until these requests are complete.

> Pause here and create a new UML Sequence Diagram in a [draft Figma document](https://www.figma.com/blog/the-power-of-figma-drafts/) (as discussed during class) for the initial loading of the site. If you need an example, see the [basic example above](#UML-Sequence-Diagrams).

After these two requests have been made and the initial page load interaction is complete, this page also has two features that are so-called "event-based" (denoted by the `*` in the feature specification). Something being event-based signifies that this action is user-initiated, and does not need to be completed automatically by the site during initial load of the page. The homepage has two of these event-based flows, one for creating a post and one for deleting a post. As a reminder, event-based data flows will be placed below the initial load of the site. The complex example [given above](#UML-Sequence-Diagrams) contains three of these event-based flows ("Create Post", "Update Post", and "Upload Image for Post"). The new post flow in your diagram will be very similar to the "Create Post" example given above, and the delete post flow will also contain many of the same elements.

> Pause here and add the event-based flows for post creation and post deletion. As a note, the "Delete Post" request coming back from the database will contain data on the deletion action and not the object itself. You can write "Deletion Request Metadata" for the response from the database to the server and for the response from the server to the frontend.

Congratulations, you've completed your first UML Sequence Diagram! You will be using this diagram later to implement the actual data flow for your functioning application.

> Pause here and complete a UML Sequence Diagram for the "Settings Page" features. Assume that the user's settings need to be fetched from the user's object within the database on initial page load, an that to update the user's settings you must make an update request to the server similarly to the one shown in the [complex example](#UML-Sequence-Diagrams) above.

## Readings

Below are the reading materials that will prepare you for next class' material.

### JSX

Next class, you will be starting to learn the frontend web development framework ReactJS! [ReactJS](https://reactjs.org/), known simply as React, allows you to make dynamic applications in the Javascript programming language. To give one example, all of Facebook's frontend infrastructure is built in ReactJS!

Before next class, please read through the following articles from the ReactJS documentation:

1. [Hello World](https://reactjs.org/docs/hello-world.html) ([ReactJS](https://reactjs.org/) Documentation)

2. [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html) ([ReactJS](https://reactjs.org/) Documentation)

If you aren't fairly confident with Javascript, please also look over [this tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) before next class.

As always, if you ever need any help feel free to reach out to us at any time. Good luck!
