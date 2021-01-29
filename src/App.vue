<template>
  <div class="app">
    <Header :class="['app__header']" />

    <AppContent :class="['app__content']">
      <template v-slot:content>
        <h3>Картины эпохи Возрождение</h3>
        <CardList :data="pictures" />
      </template>
    </AppContent>

    <Footer :class="['app__footer']" />
  </div>
</template>
<script>
import Header from "./components/Header";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import AppContent from "./components/AppContent";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    AppContent,
    Footer,
    CardList,
    Header,
  },
  computed: {
    ...mapGetters({
      pictures: "pictures/pictures",
    }),
  },
};
</script>
<style lang="sass">
@import "~bootstrap/scss/functions"
@import "~bootstrap/scss/variables"
@import "~bootstrap/scss/mixins"
@import "@/assets/styles"

.app
  width: 100%
  min-height: 100%
  display: flex
  flex-flow: nowrap column
  background-color: $background-color

.app__header

.app__content
  min-height: 0
  margin-bottom: 24px

.app__footer
  margin-top: auto

h3
  margin: 0
  padding-top: 45px
  padding-bottom: 39px
  @include font-styles(bold, 24px, 150%)
</style>
