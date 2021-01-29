<template>
  <div class="spinner spinner_sm" role="status"></div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>
<style lang="sass" scoped>
@import "~bootstrap/scss/functions"
@import "~bootstrap/scss/variables"
@import "~bootstrap/scss/mixins"
@import "@/assets/bootstrap/spinners"

.spinner
    @extend %spinner-border

.spinner_sm
    @extend %spinner-border-sm
</style>
