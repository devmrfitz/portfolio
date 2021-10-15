<template>
  <section component-role="section-creator" :data-section="`${name}-section`">
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: { type: String, required: true },
  },
})
</script>
