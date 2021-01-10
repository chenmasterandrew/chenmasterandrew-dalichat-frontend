# Day 2 - Networking Basics

This repository was designed and developed by [Adam McQuilkin '22](https://github.com/ajmcquilkin), and is intended to teach new DALI lab members the basics of MERN-stack Javascript web development as well as current best practices. To suggest changes to this repository, please create an issue [here](https://github.com/dali-lab/dalichat-frontend/issues) or create a pull request [here](https://github.com/dali-lab/dalichat-frontend/pulls).

## Overview

Today we are focusing on planning out how dtaa flows through web applications. We will be introducing a tool ([UML Sequence Diagrams](#UML-Sequence-Diagrams)) to help you visualize these flows. You will then be planning out the different features of the DALIChat application and creating a UML Sequence Diagram for these features.

## Core Concepts

Before we begin planning out how data will flow through the DALIChat application, we must first introduce a tool for you to create visual representations of interactions within a system.

### UML Sequence Diagrams

Data flow within computer systems can get complicated very quickly, and this becomes a problem when you as a developer are trying to plan out the bahavior of a given application. Thankfully, there is a standardized way to represent this data flow through a given system!

Introducting [UML](https://en.wikipedia.org/wiki/Unified_Modeling_Language) Sequence Diagrams, a standardized method for representing the behaviors of different parts of a system in relation to the user and other parts of the system. Below is a simple example of a UML Sequence Diagram, or Sequence Diagram for short:

> ADD IMAGE HERE IN GH

Below is a more complex example of a UML Sequence Diagram:

> ADD IMAGE HERE IN GH

At their core, Sequence Diagrams are a method of representing interactions between parts of a system over time. In Sequence Diagrams, time is represented vertically with the top of the diagram being the start of the interaction and the bottom of the diagram being the end of the interaction. The horizontal element of the diagram shows the different components of the system in no inherent order (although it is often advantageous to place elements in the order of interaction from left to right).

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

The application will allow users to complete the following actions on each page:

```text
Home / Profile Page:
- View information about user's own profile
- View user's own posts
- Create new posts
- Delete Posts

Search Page:
- Search for users and posts (one function)

Explore Page:
- View newest posts posted on the platform
- View most popular posts on the platform

Settings Page:
- Modify personal account settings

User Page:
- View most recent posts from user
- View most popular posts from user
```

The partner has determined that today we will focus on creating a UML Sequence Diagram showing the system interactions required to make this page functional.

### Create Feature Sequence Diagrams

> TODO

## Readings

Below are the reading materials that will prepare you for next class' material.

### JSX

> TODO: For next class

As always, if you ever need any help feel free to reach out to us at any time. Good luck!
