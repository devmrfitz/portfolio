<template>
  <AtomsBaseClassAttacher
    class="bg-darkest min-h-screen debug-screens overflow-x-hidden"
    wn:flex="~ col"
    wn:space="y-64px"
  >
    <OrganismsMiscellaneousNavbarContainerPart class="flex-none" />
    <OrganismsMiscellaneousLoadingContainer
      v-if="loadingState"
      class="absolute"
    />
    <div :class="[{ invisible: loadingState }, 'flex-grow']">
      <Nuxt class="h-full" />
    </div>
    <OrganismsMiscellaneousFooterContainerPart
      class="flex-none"
      :class="{ invisible: loadingState }"
    />
  </AtomsBaseClassAttacher>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState({
      loadingState: (state: any) => state.animation.loading,
    }),
  },
  created() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.stopLoadingMutation()
      }, 2500)
    })
  },
  methods: {
    ...mapMutations({
      stopLoadingMutation: 'animation/stopLoading',
    }),
  },
})
</script>
