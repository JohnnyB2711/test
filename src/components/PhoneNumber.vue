<template>
  <div class="block">
    <img class="block__img" src="@/assets/img/phone.svg" alt="phone-icon" />
    <a class="phone" href="tel:74955555555">+7 (495) 555-55-55</a>
  </div>
</template>

<script>
export default {
  name: "PhoneNumber",
};
</script>

<style lang="sass" scoped>
.block
  display: flex
  align-items: center
  margin-right: 48px

.block__img
  margin-right: 4px
</style>
