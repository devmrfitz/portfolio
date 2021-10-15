<template>
  <AtomsBaseClassAttacher wn:flex="~" wn:space="x-24px">
    <AtomsBaseClassAttacher
      wn:w="6/20 md:5/20"
      wn:flex="~"
      wn:items="center"
      wn:justify="center"
    >
      <nuxt-img :src="image" :alt="image" />
    </AtomsBaseClassAttacher>
    <AtomsBaseClassAttacher wn:w="14/20 md:15/20" wn:flex="~">
      <a :href="path" class="group">
        <AtomsIndexLinksSectionFeatureNamePart>
          <slot name="name" />
        </AtomsIndexLinksSectionFeatureNamePart>
        <AtomsIndexLinksSectionFeatureDescriptionPart>
          <slot name="description" />
        </AtomsIndexLinksSectionFeatureDescriptionPart>
      </a>
    </AtomsBaseClassAttacher>
  </AtomsBaseClassAttacher>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    image: { type: String, required: true },
    path: { type: Object, required: true },
  },
})
</script>
