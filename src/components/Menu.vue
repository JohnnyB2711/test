<template>
  <ul :class="['menu', ...menuClass]">
    <li class="menu__item" v-for="(item, index) in menuItems" :key="index">
      <a class="menu__link" href="#">{{ item }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Menu",
  props: {
    lighted: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      menuItems: ["Каталог", "Доставка", "Оплата", "Контакты", "О галерее"],
    };
  },
  computed: {
    menuClass() {
      return {
        menu_lighted: this.lighted,
      };
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/styles"
@import "@/assets/bootstrap/nav"

.menu
    @extend %nav
    align-items: center
    margin-top: 0

.menu__link
    @extend %nav-link
    @include font-styles(normal, 14px, 150%)
    color: $font-color
    padding: 0 48px 0 0

.menu__item:last-child .menu__link
  padding-right: 0

.menu_lighted .menu__link
  color: $footer-text
</style>
