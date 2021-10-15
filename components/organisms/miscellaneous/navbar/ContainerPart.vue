<template>
  <nav
    id="navbar-section"
    wn:flex="~"
    wn:p="md:[18px] r-16px"
    wn:items="center"
    wn:justify="between"
  >
    <MoleculesMiscellaneousNavbarIgnisDaIcon />
    <OrganismsMiscellaneousNavbarNavigationSection :links="getAreas" />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import AREAS from '~/resources/areas.json'

export default Vue.extend({
  data() {
    return {
      links: [
        { name: 'Work', path: { name: 'work' } },
        { name: 'education', path: { name: 'education' } },
      ],
    }
  },
  computed: {
    getAreas() {
      return AREAS
    },
  },
})
</script>
