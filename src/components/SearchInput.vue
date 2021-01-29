<template>
  <div class="input-group">
    <input
      type="text"
      class="input-group__input"
      placeholder="Поиск по названию картины"
      aria-label="Поиск по названию картины"
      aria-describedby="button-addon2"
    />
    <div class="input-group__append">
      <Button class="input-group__button" id="button-addon2"> Найти </Button>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "SearchInput",
  components: { Button },
};
</script>

<style lang="sass" scoped>
@import "@/assets/styles"
@import "@/assets/bootstrap/input-group"
.input-group
  @extend %input-group
  height: 48px
  width: 416px

.input-group__input
  @extend %input-group-form-control
  @include font-styles(normal, 14px, 150%)
  font-family: 'Merriweather', serif
  border: 1px solid $border-grey
  border-radius: 0
  background: transparent
  color: $font-color
  padding-left: 16px

.input-group__input:focus
  outline: none
  box-shadow: none
  border: 1px solid $border-active

.input-group__input::placeholder
  color: $light-grey

.input-group__append
  @extend %input-group-append

.input-group__button
  @extend %input-group-append-btn
  width: 122px
</style>
