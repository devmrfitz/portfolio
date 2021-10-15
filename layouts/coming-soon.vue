<template>
  <AtomsBaseMainContentContainer
    class="min-h-screen bg-dark-900 debug-screens"
    wn:flex="~ col"
    wn:items="center"
    wn:justify="center"
    wn:space="y-64px"
  >
    <AtomsBaseSectionCreator name="text" wn:p="x-24px">
      <AtomsBaseClassAttacher
        class="relative add-after-content"
        wn:font="heading"
        wn:text="30px md:72px center uppercase light-900"
        wn:leading="tight"
        wn:after="block mx-auto mt-4px md:mt-8px w-3/5 h-3px md:h-4px bg-orange-500 rounded-xl"
      >
        This page is still being built...
      </AtomsBaseClassAttacher>
    </AtomsBaseSectionCreator>
    <AtomsBaseSectionCreator name="links">
      <nuxt-link
        :to="{ name: 'index' }"
        class="group"
        wn:text="light-300"
        wn:flex="~ col"
        wn:items="center"
        wn:justify="center"
        wn:space="y-8px md:y-16px"
      >
        <HomeIcon
          wn:text="36px md:48px lg:60px"
          class="transform transition-transform duration-300"
          wn:stroke="orange-500 1 md:2"
          wn:group-hover="scale-110"
        />
        <AtomsBaseClassAttacher wn:text="md:30px" wn:group-hover="underline">
          Home
        </AtomsBaseClassAttacher>
      </nuxt-link>
    </AtomsBaseSectionCreator>
  </AtomsBaseMainContentContainer>
</template>

<script lang="ts">
import Vue from 'vue'
import { HomeIcon } from 'vue-feather-icons'

export default Vue.extend({
  components: {
    // @ts-ignore
    HomeIcon,
  },
})
</script>

<style>
.add-after-content::after {
  content: '';
}
</style>
