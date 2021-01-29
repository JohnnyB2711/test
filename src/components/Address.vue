<template>
  <div class="block">
    <img class="block__img" src="@/assets/img/address.svg" alt="address-icon" />
    <span> г. Москва, ул. Расплетина, 24 </span>
  </div>
</template>
<script>
export default {
  name: "Address",
};
</script>

<style lang="sass" scoped>
.block
  display: flex
  align-items: center

.block__img
  margin-right: 10px
</style>
