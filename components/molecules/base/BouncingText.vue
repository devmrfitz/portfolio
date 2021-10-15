<template>
  <component
    :is="parentComponentName"
    aria-role="attach-text-bounce"
    :aria-label="getText"
    role="heading"
  >
    <component
      :is="componentName"
      v-for="(char, index) in getText"
      :key="index"
      v-hover-animation="{
        duration: 900,
        apply: 'animate-bounce-transform',
      }"
      :component-name="componentName"
      aria-hidden="true"
    >
      {{ char === ' ' ? '&nbsp;' : char }}
    </component>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    componentName: { type: String, required: true },
    parentComponentName: { type: String, required: true },
  },
  computed: {
    getText() {
      return (this.$slots.default![0].text as string).trim()
    },
  },
})
</script>
