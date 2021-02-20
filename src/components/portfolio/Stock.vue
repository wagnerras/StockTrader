<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong
          >{{ stock.name }}
          <small>(preço: {{ stock.price | currency}} | {{ stock.quantity }})</small>
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          :error="insufficientQuantity"
          label="Quantidade"
          type="number"
          v-model.number="quantity"
        ></v-text-field>
        <v-btn
          class="blue darken-3 white--text"
          :disabled="
            quantity <= 0 || !Number.isInteger(quantity) || insufficientQuantity
          "
          @click="sellStock"
          >{{ insufficientQuantity ? "Insuficiente" : "Vender" }}</v-btn
        >
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  watch: {
    quantity() {
      if (this.quantity < 0) {
        setTimeout(() => {
          this.quantity = 0;
        }, 1);
      }
    },
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    ...mapActions({ sellStockAction: "sellStock" }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.sellStockAction(order);
      //this.$store.dispatch("sellStock", order);
      this.quantity = 0;
    },
  },
};
</script>

<style>
</style>