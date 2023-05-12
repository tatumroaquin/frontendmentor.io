# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./screenshots/desktop.png)

<div align="center">
    <img width="50%" src="./screenshots/mobile.png" alt="stats preview card component" />
</div>

### Links

- Solution URL: (https://github.com/tatumroaquin/frontendmentor-stats-preview-card-component)
- Live Site URL: (https://fm-stats-preview-card-1ffbe3.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS variables/custom properties
- Flexbox
- Desktop-first workflow

### What I learned

The most difficulty part of this design is the background tint effect overlayed to the `.card__image`. My first instinct was to use the old trick of using a `span` and decrease the opacity to make the background visible.

```html
<section class="card__image">
  <span class="card__image--tint"></span>
</section>
```
```css
.card__image--tint {
  display: block;
  width: 100%;
  height: 100%;
  background-color: var(--soft-violet);
  opacity: 70%;
}
```

But that did not look aesthetically pleasing, and it ruins the colors of the image I am working with. So instead I used the `background-blend-mode` property to combine the `background-color` and `background-image` together.

```css
.card__image {
  /*... */
  background-color: var(--soft-violet);
  background-image: url('./images/image-header-desktop.jpg');
  background-blend-mode: multiply;
}
```

### Useful resources

- [background-blend-mode - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode) - Documentation for the violet tint for the card background image.
- [flex-direction - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) - Documentation for reversing the direction of flexbox children.

## Author

- Frontend Mentor - [@tatumroaquin](https://www.frontendmentor.io/profile/tatumroaquin)
