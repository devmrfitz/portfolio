<template>
  <a
    :component-role="`Link to ${name}`"
    :href="link"
    :data-link-to="name"
    :target="newTab ? '_blank' : '_self'"
    :rel="newTab ? 'noreferrer' : ''"
  >
    <slot>{{ name }}</slot>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    link: { type: String, required: true },
    name: { type: String, required: true },
    newTab: { type: Boolean, default: false },
  },
})
</script>
