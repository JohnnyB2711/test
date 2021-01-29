<template>
  <button type="button" :class="['btn', ...buttonClass]" @click="buttonClick">
    <span v-if="!!$slots.icon" class="btn__icon">
      <slot name="icon"></slot>
    </span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    highlighted: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    buttonClass() {
      return {
        btn_highlighted: this.highlighted,
        btn_disabled: this.disabled,
      };
    },
  },
  methods: {
    buttonClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/bootstrap/buttons"
@import "@/assets/styles"
.btn
    @extend %btn
    background-color: $brown
    display: flex
    align-items: center
    justify-content: center
    border-radius: 0
    border: 0
    height: $button_height
    width: $button_width
    padding: 0
    color: $white
    @include font-styles(700, 14px, 21px)
    font-family: 'Merriweather', serif

.btn_disabled
    background-color: $button-disabled
    pointer-events: none

.btn_highlighted
    background-color: $button-selected
    pointer-events: none

.btn__icon
    width: 20px
    height: 20px
    margin-right: 4px

.btn:hover
    background-color: $button-hover
.btn:focus
    outline: none
    box-shadow: none
</style>
