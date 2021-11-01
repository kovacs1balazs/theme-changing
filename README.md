# Change your theme

## Story

You've always wondered how it is possible to change a web page theme.
Well you have enough knowledge to implement your first theme changing web site.

You got a starting code to work with. You need to create a default light theme and a dark theme.
Also you need to create a button/dropdown/switch for the users to choose between themes.

## What are you going to learn?

- Javascript loops (for/while)
- `querySelectorAll()`
- Arrays

## Tasks

1. You've got an `data.js` file. That file contains the data of the movies. Create cards (based on the example in the index.html file) for each movies from the `movies` array.
    - When we open up the `index.html` file, there are several movies showing up in the page

2. Create a button/switch/dropdown to switch between themes. For now, create a simple light and dark theme.
    - When the page opens up, the cards has a light theme
    - There is a way to change the cards' theme between light and dark
    - When we switch the theme, the colors of the cards change from light to dark and vica versa

## General requirements

None

## Hints

- When you use the `document.querySelectorAll(".light")` method, it collects all the elements that have the class `light`.
  You can get these elements in an array that you need a reference for.
  That's why when you use a method which collects element(s), you need to declare a variable for reference like `let elements = document.querySelectorAll(".light")`.
- You can make different themes in CSS that you can switch between. Also you can create primary and secondary classes in the them. That will help you with the color changing.

## Background materials

- <i class="far fa-exclamation"></i> [Javascript loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- <i class="far fa-exclamation"></i> [For loop in more details](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- <i class="far fa-book-open"></i> [Foreach in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
