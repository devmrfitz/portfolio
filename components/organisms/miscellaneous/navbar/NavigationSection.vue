<template>
  <ul
    class="duration-300"
    :class="loadingState ? 'invisible' : 'animate-fade-in-right animated'"
    wn:flex="~"
    wn:space="x-16px sm:x-32px md:x-48px lg:x-64px"
  >
    <li v-for="(link, index) in links" :key="index" :link="link">
      <a :href="link.path">
        <AtomsMiscellaneousNavbarLinkName :link="link.name" />
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  props: {
    links: { type: Array, required: true },
  },
  computed: {
    ...mapState({
      loadingState: (state: any) => state.animation.loading,
    }),
  },
})
</script>
