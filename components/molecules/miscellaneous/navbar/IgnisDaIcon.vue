<template>
  <nuxt-link
    :to="{ name: 'index' }"
    class="group"
    wn:flex="~"
    wn:items="center"
    wn:space="x-8px"
  >
    <IgnisDaIcon
      class="transform group-hover:scale-110"
      :class="{ 'scale-75 sm:scale-50 animate-pulse': loadingState }"
      wn:h="55px sm:70px md:[80px]"
      wn:w="55px sm:70px md:[80px]"
      wn:p="4px"
      wn:fill="current"
      wn:text="black md:brand-scarce"
      wn:bg="brand-scarce md:transparent"
      wn:transition="transform duration-300"
    />
    <div class="hidden md:block" :class="{ 'animate-pulse': loadingState }">
      <div wn:text="sm:18px md:24px group-hover:underline brand-light">
        Aditya Pratap
      </div>
      <div wn:text="sm:18px md:24px group-hover:underline brand-light">
        Singh
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import IgnisDaIcon from '~/static/assets/devmrfitz-icon.svg'

export default Vue.extend({
  components: { IgnisDaIcon },
  computed: {
    ...mapState({
      loadingState: (state: any) => state.animation.loading,
    }),
  },
})
</script>
