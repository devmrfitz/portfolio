<template>
  <footer
    id="footer-section"
    wn:flex="~ col"
    wn:justify="center"
    wn:items="center"
    wn:p="16px t-32px"
  >
    <AtomsBaseClassAttacher>
      <nuxt-img
        src="/assets/zickzack.svg"
        wn:opacity="30"
        wn:w="150px sm:200px md:250px"
      />
    </AtomsBaseClassAttacher>
    <AtomsBaseClassAttacher wn:text="center 18px brand-light" wn:m="t-96px">
      <span>Find me at:</span>
    </AtomsBaseClassAttacher>
    <AtomsBaseClassAttacher
      wn:text="brand-light"
      wn:space="x-8px sm:x-16px md:x-24px"
    >
      <AtomsBaseLinkElement
        v-for="(social, index) in getSocials"
        :key="index"
        :link="social.link"
        :name="social.name"
        wn:text="brand-scarce"
        class="hover:underline"
      >
        {{ social.name }}
      </AtomsBaseLinkElement>
    </AtomsBaseClassAttacher>
    <AtomsBaseClassAttacher
      id="copyright"
      wn:text="brand-light center 18px"
      wn:m="t-32px"
    >
      <span>Made with &hearts; by</span>
      <span wn:text="underline-brand-accent underline">
        <a href="https://devmrfitz.netlify.app/">devmrfitz</a>
      </span>
    </AtomsBaseClassAttacher>
    <AtomsBaseClassAttacher id="copyright" wn:text="brand-light center sm:18px">
      <span>Built using</span>
      <span>
        <AtomsBaseLinkElement
          v-for="(technology, index) in getTechnologies"
          :key="index"
          :link="technology.link"
          :name="technology.name"
          :style="{ color: technology.color }"
          class="hover:underline"
        >
          {{ technology.name
          }}{{ index !== getTechnologies.length - 1 ? ',' : '' }}
        </AtomsBaseLinkElement>
      </span>
    </AtomsBaseClassAttacher>
    <AtomsBaseClassAttacher id="copyright" wn:text="center">
      <span wn:text="brand-dark">&copy; 2021</span>
      <span wn:text="brand-light">Aditya Pratap Singh</span>
    </AtomsBaseClassAttacher>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import TECHNOLOGIES from '~/resources/technologies.json'
import SOCIALS from '~/resources/socials.json'

export default Vue.extend({
  computed: {
    getTechnologies() {
      return TECHNOLOGIES
    },
    getSocials() {
      return SOCIALS
    },
  },
})
</script>
