<template>
  <div class="header container-fluid">
    <div class="header__content container">
      <div class="header__block_left">
        <Logo />
        <Menu />
      </div>
      <SearchInput />
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/SearchInput";
import Menu from "./Menu";
import Logo from "./Logo";

export default {
  name: "Header",
  components: { Logo, Menu, SearchInput },
};
</script>

<style lang="sass" scoped>
@import "~bootstrap/scss/functions"
@import "~bootstrap/scss/variables"
@import "~bootstrap/scss/mixins"
@import "@/assets/styles"

.header
    display: flex
    height: $header_height
    border-bottom: 1px solid $border-grey

.header__content
    display: flex
    align-items: center
    justify-content: space-between

.header__block_left
    display: flex
</style>
