# Frontend Mentor - Fylo dark theme landing page solution

This is my solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

Extra things I added:

- A mobile navigation menu (hamburger button) that opens and closes with a smooth transition
- Keyboard focus styles (`:focus-visible`) for links and buttons

### Screenshot

![](./screenshot.jpg)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (variables)
- Flexbox
- CSS Grid
- Responsive design with media queries
- Vanilla JavaScript (mobile menu toggle)
- [Font Awesome](https://fontawesome.com/) - icons
- [Google Fonts](https://fonts.google.com/) - Raleway and Open Sans

### What I learned

- Structuring a page with a reusable `.container` (`max-width` + `margin: 0 auto`) so content stays centered on large screens and has side spacing on small ones.
- Storing the style guide colors as CSS variables and reusing them everywhere:

```css
:root {
  --navy-900: hsl(218, 28%, 13%);
  --teal-200: hsl(176, 68%, 64%);
  --cyan-500: hsl(198, 60%, 50%);
}
```

- Using `clamp()` for fluid font sizes and spacing:

```css
.home h1 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
}
```

- Building layouts with CSS Grid (feature cards, footer) and Flexbox (navigation, testimonials).
- Why `transition` doesn't work with `display`, and using `opacity`, `visibility` and `transform` instead for a smooth menu animation.
- Toggling a class with `classList` in JavaScript instead of setting inline styles, so media queries keep working.
- Accessibility basics: `aria-label`, `aria-expanded`, `alt` text, and `:focus-visible`.

### Continued development

- Build layouts mobile-first with `min-width` media queries and fewer breakpoints.
- Avoid fixed `px`, `vh` and negative margins for layout; rely on `rem`, `max-width`, Grid and Flexbox.
- Keep improving heading order and semantic HTML.
- Practice form validation with JavaScript in the next projects.

### AI collaboration

I used Claude as a learning partner during this project. It reviewed my HTML and CSS, pointed out mistakes (heading order, responsive issues, accessibility), and gave me hints instead of full solutions for most of the work. I wrote the code myself and used the feedback to improve it.

## Author

- Frontend Mentor - [@kkiroo-kk](https://www.frontendmentor.io/profile/kkiroo-kk)
- GitHub - [@kkiroo-kke](https://github.com/kkiroo-kk)