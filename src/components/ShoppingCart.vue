<template>
  <div class="hello">
    <h1>Shopping Cart</h1>
    <ul>
        <li v-for="product in products" :key="product.id">
            {{product.title}} - {{product.price | currency}} - {{product.quantity}}
        </li>
        </ul>
        <p>Total: {{total  | currency}}</p>
        <button v-on:click="checkout">Checkout</button>
        <p v-if="checkoutStatus">{{$store.state.checkoutStatus}}</p>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  name: 'ShoppingCart',
  computed:{
    
      ...mapGetters('cart',{
        products:'cartProducts',
        total:'cartTotal'
      }),
      ...mapState({
        checkoutStatus:state=>state.cart.checkoutStatus
      }),
      
  
      // products(){
      //     return this.$store.getters.cartProducts;
      // },
      // total(){
      //     return this.$store.getters.cartTotal;
      // }
  },
  methods: {
    ...mapActions('cart',['checkout'])
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
