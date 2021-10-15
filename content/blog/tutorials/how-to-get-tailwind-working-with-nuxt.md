---
title: Better websites using Tailwind and Nuxt
subtitle: 'Get tailwindcss running with nuxt within a few minutes'
description: How to get Tailwind working with Nuxt
properties:
  languages:
    - Javascript
    - CSS
    - HTML
outdated:
  reason: Find updated instructions at https://tailwindcss.com/docs/guides/nuxtjs
repository:
  upstream: https://github.com/IgnisDa/tutorials
  location: https://github.com/IgnisDa/tutorials/tree/main/how-to-get-tailwind-working-with-nuxt
---

## Introduction

Recently I decided to start a personal project using [Nuxt][1]. I started off
with [Vuetify][2] but soon decided to switch over to [Tailwind][3] once I read
its documentation and realized how awesome it was. Tailwind CSS is a highly
customizable, low-level CSS framework that gives you all of the building blocks
you need to build bespoke designs without any annoying opinionated styles you
have to fight to override.

### Getting-started

Let us get started by creating a new project.

```bash
npx create-nuxt-app how-to-get-tailwind-working-with-nuxt
✨  Generating Nuxt.js project in how-to-get-tailwind-working-with-nuxt
? Project name: how-to-get-tailwind-working-with-nuxt
? Programming language: JavaScript
? Package manager: Yarn
? UI framework: None
# Output suppressed for brevity
```

Now commit your newly project to git and create a new upstream repository for
it.

### Adding the required files

Let's now install tailwindcss using the following command:

```bash
yarn add -D @nuxtjs/tailwindcss \
            tailwindcss@npm:@tailwindcss/postcss7-compat \
            @tailwindcss/postcss7-compat \
            postcss@^7 \
            autoprefixer@^9
```

Run `npx tailwind init` in the project root directory.

```bash
npx tailwind init

  @tailwindcss/postcss7-compat 2.0.3

  ✅ Created Tailwind config file: tailwind.config.js
```

Finally add the following lines to your nuxt configuration:

```javascript [nuxt.config.js]
export default {
  // other stuff
  buildModules: ['@nuxtjs/tailwindcss'],
}
```

Next create another file `assets/css/tailwind.css`. This will contain all global
css styles you would want to use in your project. Add the following lines in it.

```css [assets/css/tailwind.css]
@tailwind base;
@tailwind components;
@tailwind utilities;
```

You can add your custom CSS in this newly created file but that would soon get
too unmanageable. Let's remedy that now.

```css [assets/css/main.css]
/* custom styles go here */
```

Lets add this file to our nuxt configuration.

```javascript [nuxt.config.js]
export default {
  // other stuff
  css: ['~/assets/css/main.css'],
}
```

### Using some tailwind classes

Lets add a rule to `assets/css/main.css` to make sure it works as expected.

```css [assets/css/main.css]
a {
  @apply text-yellow-300;
}
```

Now let's finally test if everything works as expected. Open up
`pages/index.vue` and remove everything under the `<template></template>`
element and then add the following.

```vue [pages/index.vue]
<template>
  <div class="container">
    <div class="title">This is awesome!</div>
    <div class="text-red-700">Yeah it all works!</div>
    <p class="hover:bg-green-600">Testing hover text</p>
    <a href="http://github.com/IgnisDa">Profile</a>
  </div>
</template>
// Rest of the stuff
```

At this point you will need to restart your development server. Now visit
`http:127.0.0.1:3000/` in your browser and you will have a working example
ready.

## Finishing up

As you can see, the process to achieve what we just did is not really
straightforward. Moreover there isn't a lot of tutorials online to get it done.
It took a little on my part to figure, that's why I decided to write this post.
Hope it helped you and I look forward to seeing you again!

[1]: https://nuxtjs.org/
[2]: https://dev.vuetifyjs.com/en/
[3]: https://tailwindcss.com/
