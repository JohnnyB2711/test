<template>
  <div class="footer container-fluid">
    <div class="footer__content container">
      <div class="footer__block">
        <Logo />
        <Menu :lighted="true" />
      </div>
      <div class="footer__block">
        <PhoneNumber />
        <Address />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo";
import Menu from "./Menu";
import Address from "./Address";
import PhoneNumber from "./PhoneNumber";

export default {
  name: "Footer",
  components: { PhoneNumber, Address, Menu, Logo },
};
</script>

<style lang="sass" scoped>
@import "~bootstrap/scss/functions"
@import "~bootstrap/scss/variables"
@import "~bootstrap/scss/mixins"
@import "@/assets/styles"
.footer
    color: $footer-text!important
    background-color: $footer-color
    height: $footer_height
    display: flex
    z-index: 1
    @include font-styles(400, 14px, 21px)

.footer__content
    display: flex
    align-items: center
    justify-content: space-between

.footer__block
    display: flex

.menu__link
    color: $footer-text!important
</style>
