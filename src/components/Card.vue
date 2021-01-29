<template>
  <div class="card" :class="isBought ? 'card_disabled' : ''">
    <img :src="el.image" class="card__img-top" alt="image" />
    <div class="card__body">
      <h5 class="card__title">
        <q>{{ el.name }}</q
        ><br />
        {{ el.author }}
      </h5>
      <div class="card__price-list" v-if="!isBought">
        <div class="card__price-tag">
          <span v-if="hasDiscount" class="card__price-tag_old">
            {{ oldPrice }}
          </span>
          <span>{{ price }}</span>
        </div>

        <Button
          :disabled="isAddingToBasket"
          :highlighted="inBasket"
          @click="addToBasket"
        >
          <template v-if="inBasket" v-slot:icon>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5315 4.80937L7.63341 14.237L3.34814 10.1924"
                stroke="#F4F6F9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </template>
          <template v-if="inBasket" v-slot>В корзине</template>
          <template v-else-if="isAddingToBasket" v-slot><Spinner /></template>
          <template v-else v-slot> Купить </template>
        </Button>
      </div>
      <span class="card__status" v-else>Продана на аукционе</span>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import { mapActions, mapGetters } from "vuex";
import Spinner from "./Spinner";

export default {
  name: "Card",
  components: { Spinner, Button },
  data() {
    return {
      painting: {},
    };
  },
  props: {
    el: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      isLoading: "pictures/isLoading",
    }),
    price() {
      return this.modifyPrice(this.el.price);
    },
    oldPrice() {
      return this.modifyPrice(this.el.oldPrice);
    },
    hasDiscount() {
      return this.el.oldPrice;
    },
    inBasket() {
      return this.el.inBasket;
    },
    isBought() {
      return this.el.isBought;
    },
    isAddingToBasket() {
      return this.isLoading(this.el.id);
    },
  },
  methods: {
    ...mapActions({
      toBasket: "pictures/TO_BASKET",
    }),
    modifyPrice(price) {
      return (
        price.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ") + " $"
      );
    },
    addToBasket(event) {
      if (!this.inBasket || !this.isBought) {
        event.preventDefault();
        this.toBasket(this.el.id);
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/styles"
@import "@/assets/bootstrap/card"

.card_disabled
    opacity: 50%

.card
    @extend %card
    border-color: $border-grey
    background: transparent
    border-radius: 0
    height: $card-height
    max-width: $card-width
    margin: auto

.card__img-top
    @extend %card-img-top
    border-top-left-radius: 0
    border-top-right-radius: 0
    height: 160px

.card__body
    @extend %card-body
    padding: 20px 24px 24px
    display: flex
    flex-direction: column
    justify-content: space-between

.card__title
    @extend %card-title
    margin: 0
    @include font-styles(normal, 18px, 150%)

.card__price-list
    display: flex
    justify-content: space-between
    align-items: center
    @include font-styles(bold, 16px, 150%)

.card__price-tag
    display: flex
    flex-direction: column

.card__price-tag_old
    @include font-styles(300, 14px, 150%)
    color: $text-grey
    text-decoration: line-through

.card__status
    margin-bottom: 16px
</style>
