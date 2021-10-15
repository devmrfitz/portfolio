<template>
  <AtomsBaseMainContentContainer
    wn:space="y-32px md:y-48px lg:y-64px xl:y-96px 2xl:y-110px"
  >
    <AtomsBaseSectionCreator name="introduction" wn:flex="~ col">
      <AtomsBaseClassAttacher
        wn:justify="center"
        wn:flex="~ col"
        wn:items="start"
      >
        <MoleculesBaseBouncingText
          class="gradient-text"
          :class="{ 'animate-back-in-left animated': !loadingState }"
          wn:flex="~"
          component-name="AtomsIndexIntroductionSectionHeadingPart"
          parent-component-name="h1"
        >
          Code. Star Wars.
        </MoleculesBaseBouncingText>
        <MoleculesBaseBouncingText
          wn:flex="~"
          :class="{
            'animate-back-in-left animated animate-delay-200': !loadingState,
          }"
          component-name="AtomsIndexIntroductionSectionHeadingPart"
          parent-component-name="h1"
        >
          Video Games.
        </MoleculesBaseBouncingText>
        <MoleculesBaseBouncingText
          wn:flex="~"
          :class="{
            'animate-back-in-left animated animate-delay-500': !loadingState,
          }"
          component-name="AtomsIndexIntroductionSectionHeadingPart"
          parent-component-name="h1"
        >
          Marvel. Books.
        </MoleculesBaseBouncingText>
      </AtomsBaseClassAttacher>
    </AtomsBaseSectionCreator>
    <AtomsBaseSectionCreator
      name="contacts"
      :class="{ 'animate-slide-in-right animated': !loadingState }"
    >
      <AtomsBaseClassAttacher
        wn:flex="~"
        wn:items="center"
        wn:space="x-16px sm:x-24px md:x-32px lg:x-48px xl:x-64px"
        wn:w="full sm:4/5 md:2/3"
        wn:m="x-auto"
      >
        <AtomsBaseClassAttacher
          wn:w="1/3 xl:1/4"
          wn:h="2px sm:[3px]"
          wn:bg="brand-accent"
        />
        <AtomsBaseClassAttacher
          wn:flex="~"
          wn:w="2/3"
          wn:space="x-16px sm:x-24px md:x-32px"
        >
          <AtomsBaseLinkElement
            v-for="(social, index) in getSocials"
            :key="index"
            v-hover-animation="{
              duration: 1000,
              apply: 'animate-bounce-transform',
            }"
            :link="social.link"
            :name="social.name"
            new-tab
          >
            <component
              :is="social.componentName"
              wn:text="24px sm:30px md:36px lg:48px xl:60px brand-scarce"
              class="stroke-1"
            />
          </AtomsBaseLinkElement>
        </AtomsBaseClassAttacher>
      </AtomsBaseClassAttacher>
    </AtomsBaseSectionCreator>
    <About/>

    <AtomsBaseSectionCreator name="links" wn:space="y-24px">
      <AtomsBaseClassAttacher wn:space="sm:y-4px" wn:w="9/10 lg:4/5 @2xl:2/3">
        <AtomsIndexLinksSectionHeadingPart>
          Education
        </AtomsIndexLinksSectionHeadingPart>
        <AtomsIndexLinksSectionFeatureDescriptionPart>
          • B.Tech. Computer Science Engineering <br />
          Indraprastha Institute of Information Technology, New Delhi <br />
          2020-ongoing <br />
          • Senior Secondary School (12th)<br />
          Mount Mount St. Mary’s School, Delhi Cantt <br />
          2020 <br />
          • Secondary School (10th)<br />
          Happy Hours School, Jodhpur, Rajasthan <br />
          2020
        </AtomsIndexLinksSectionFeatureDescriptionPart>
      </AtomsBaseClassAttacher>
    </AtomsBaseSectionCreator>

    <AtomsBaseSectionCreator name="links" wn:space="y-24px">
      <AtomsBaseClassAttacher wn:space="sm:y-4px" wn:w="9/10 lg:4/5 @2xl:2/3">
        <AtomsIndexLinksSectionHeadingPart>
          Projects
        </AtomsIndexLinksSectionHeadingPart>
        <AtomsIndexLinksSectionSubHeadingPart>
          Some interesting stuff I've been a part of:
        </AtomsIndexLinksSectionSubHeadingPart>
      </AtomsBaseClassAttacher>
      <AtomsBaseClassAttacher
        wn:grid="~ sm:cols-2"
        wn:w="lg:4/5 @2xl:2/3"
        wn:gap="y-24px"
      >
        <MoleculesIndexLinksSectionAreaFeatureItem
          v-for="(area, index) in getAreas"
          :key="index"
          :data-area-feature-item="area.name"
          :image="area.image"
          :path="area.path"
        >
          <template #name>
            {{ area.name }}
          </template>
          <template #description>
            {{ area.description }}
          </template>
        </MoleculesIndexLinksSectionAreaFeatureItem>
      </AtomsBaseClassAttacher>
    </AtomsBaseSectionCreator>

    <AtomsBaseSectionCreator name="links" wn:space="y-24px">
      <AtomsBaseClassAttacher wn:space="sm:y-4px" wn:w="9/10 lg:4/5 @2xl:2/3">
        <AtomsIndexLinksSectionHeadingPart>
          Gallery
        </AtomsIndexLinksSectionHeadingPart>
        <nuxt-img
          src="/assets/work.svg"
          class="rounded-2xl z-10 relative"
          wn:object="cover"
          wn:h="[150px] sm:234px md:[200px] lg:[300px] xl:362px 2xl:475px"
          wn:w="[150px] sm:234px md:[200px] lg:[300px] xl:362px 2xl:475px"
          wn:border="2 brand-light"
          :sizes="{
              xs: '270px',
              sm: '350px',
              md: '300px',
              lg: '400px',
              xl: '462px',
              '2xl': '590px',
            }"
        />

        <nuxt-img
          src="/assets/coming-soon.svg"
          class="rounded-2xl z-10 relative"
          wn:object="cover"
          wn:h="[150px] sm:234px md:[200px] lg:[300px] xl:362px 2xl:475px"
          wn:w="[150px] sm:234px md:[200px] lg:[300px] xl:362px 2xl:475px"
          wn:border="2 brand-light"
          :sizes="{
              xs: '270px',
              sm: '350px',
              md: '300px',
              lg: '400px',
              xl: '462px',
              '2xl': '590px',
            }"
        />
      </AtomsBaseClassAttacher>
    </AtomsBaseSectionCreator>
  </AtomsBaseMainContentContainer>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
  GithubIcon,
  InstagramIcon,
  LinkIcon,
} from 'vue-feather-icons'
import { mapState } from 'vuex'
import SOCIALS from '~/resources/socials.json'
import AREAS from '~/resources/areas.json'

export default Vue.extend({
  components: {
    // @ts-ignore
    LinkedinIcon,
    // @ts-ignore
    MailIcon,
    // @ts-ignore
    TwitterIcon,
    // @ts-ignore
    GithubIcon,
    // @ts-ignore
    InstagramIcon,
    // @ts-ignore
    LinkIcon,
  },
  computed: {
    getSocials() {
      return SOCIALS
    },
    getAreas() {
      return AREAS
    },
    ...mapState({
      loadingState: (state: any) => state.animation.loading,
    }),
  },
})
</script>
