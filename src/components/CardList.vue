<template>
  <div class="card-list__container">
    <div class="card-list__row">
      <div class="card-list__col" v-for="picture in data" :key="picture.id">
        <Card :el="picture" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "CardList",
  components: { Card },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
@import "~bootstrap/scss/functions"
@import "~bootstrap/scss/variables"
@import "~bootstrap/scss/mixins"
.card-list__container
    width: 100%
    margin: auto
    padding: 0

.card-list__row
    @include make-row(0)
    justify-content: space-between

.card-list__col
    @include make-col-auto()
    @include make-col(3)
    flex: 0 0 auto
</style>
