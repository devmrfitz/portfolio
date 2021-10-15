<template>
  <AtomsBaseMainContentContainer wn:space="y-64px xl:y-128px">
    <AtomsBaseSectionCreator name="hero">
      <AtomsAboutHeroSectionHeadingPart wn:w="@xl:2/3">
        Coder. Developer.
        <span class="gradient-text">Designer.</span>
      </AtomsAboutHeroSectionHeadingPart>
    </AtomsBaseSectionCreator>
    <AtomsBaseClassAttacher wn:grid="~ md:cols-2" wn:gap="y-48px md:12px">
      <AtomsBaseSectionCreator
        name="image"
        wn:flex="~"
        wn:justify="center @sm:start"
        wn:items="start"
      >
        <AtomsBaseClassAttacher class="relative">
          <nuxt-img
            src="/about-me.jpg"
            alt="About Me page image"
            class="rounded-2xl z-10 relative"
            wn:object="cover"
            wn:h="[250px] sm:334px md:[300px] lg:[400px] xl:462px 2xl:575px"
            wn:w="[250px] sm:334px md:[300px] lg:[400px] xl:462px 2xl:575px"
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
          <AtomsBaseClassAttacher
            class="absolute"
            wn:w="full"
            wn:h="full"
            wn:top="24px md:36px"
            wn:left="-24px md:-36px"
            wn:border="2 brand-accent"
            wn:bg="brand-accent opacity-5"
            wn:rounded="tl-2xl bl-2xl"
          />
          <AtomsBaseClassAttacher
            class="absolute"
            wn:w="full"
            wn:h="full"
            wn:top="-12px md:-24px"
            wn:left="12px md:24px"
            wn:border="2 brand-scarce"
            wn:bg="brand-scarce opacity-5"
            wn:rounded="tl-2xl tr-2xl"
          />
        </AtomsBaseClassAttacher>
      </AtomsBaseSectionCreator>
      <AtomsBaseSectionCreator
        name="text"
        wn:flex="~ col"
        wn:justify="end"
        wn:space="y-8px sm:y-16px md:y-24px 2xl:y-36px"
      >
        <AtomsAboutTextSectionHeadingPart wn:w="full">
          Who is this dude anyway?
        </AtomsAboutTextSectionHeadingPart>
        <AtomsBaseClassAttacher
          wn:w="xl:11/12"
          wn:space="y-8px xl:y-12px 2xl:y-16px"
        >
          <AtomsAboutTextSectionFeatureTextPart>
            Hello I am Aditya, a student based in India. I love coding, food,
            music, star wars and huskies. I read books and sometimes try to
            write too.
          </AtomsAboutTextSectionFeatureTextPart>
          <AtomsAboutTextSectionFeatureTextPart>
            I am passionate about web development and can make websites and user
            interfaces that make users want to revisit. I am also proficient
            with devops technologies like Docker, AWS, Github Actions,
            deployment and all nitty-gritties related to fullstack. I love
            working on side-projects and always strive to stay up to date with
            new technologies and ideas.
          </AtomsAboutTextSectionFeatureTextPart>
        </AtomsBaseClassAttacher>
      </AtomsBaseSectionCreator>
    </AtomsBaseClassAttacher>
    <AtomsBaseSectionCreator
      name="technologies"
      wn:space="y-24px"
      wn:flex="~ col"
      wn:items="lg:start"
    >
      <AtomsAboutTechnologiesSectionHeadingPart>
        Technologies I generally work with
      </AtomsAboutTechnologiesSectionHeadingPart>
      <AtomsBaseClassAttacher>
        <transition-group
          name="flip-list"
          tag="div"
          wn:grid="~ cols-3 lg:cols-6"
          wn:justify-items="center sm:start"
          wn:gap="y-12px @md:y-24px @lg:x-20px @xl:x-36px @2xl:x-48px"
        >
          <AtomsBaseClassAttacher
            v-for="image in images"
            :key="image"
            wn:flex="~ col"
            wn:items="center"
            wn:justify="center"
          >
            <nuxt-img
              :src="`/about/${image}.svg`"
              wn:h="[50px] sm:[100px] md:[100px] lg:55px xl:[70px] 2xl:[80px]"
              wn:w="[50px] sm:[100px] md:[100px] lg:55px xl:[70px] 2xl:[80px]"
            />
            <AtomsBaseClassAttacher
              wn:text="center lowercase md:24px brand-dark"
            >
              {{ image }}
            </AtomsBaseClassAttacher>
          </AtomsBaseClassAttacher>
        </transition-group>
      </AtomsBaseClassAttacher>
    </AtomsBaseSectionCreator>
  </AtomsBaseMainContentContainer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      images: ['react', 'aws', 'django', 'docker', 'bootstrap'],
      interval: undefined as undefined | number,
    }
  },
  head: () => ({
    title: 'My Story',
  }),
  mounted() {
    this.interval = window.setInterval(() => {
      this.shuffle()
    }, 10000)
  },
  destroyed() {
    window.clearInterval(this.interval)
  },
  methods: {
    shuffle() {
      for (let i = this.images.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i)

        const temp = this.images[i]
        Vue.set(this.images, i, this.images[randomIndex])
        Vue.set(this.images, randomIndex, temp)
      }
    },
  },
})
</script>

<style lang="scss">
.flip-list-move {
  @apply transition-transform ease-out duration-2000;
}
</style>
