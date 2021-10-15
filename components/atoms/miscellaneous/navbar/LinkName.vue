<template>
  <div
    wn:text="sm:18px md:24px brand-dark hover:brand-light"
    wn:transition="colors"
    wn:font="bold"
  >
    {{ link }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    link: { type: String, required: true },
  },
})
</script>

<style>
li .nuxt-link-active > div {
  @apply !text-brand-light !underline-brand-accent !underline;
}
</style>
