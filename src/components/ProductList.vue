<template>
  <div class="hello">
      <p v-if="loading">Loading...</p>
    <h1>Product List</h1>
    <ul>
        <li v-for="product in products" :key="product.id">
            {{product.title}} - {{product.price  | currency}} - {{product.inventory}}
            <button 
            :disabled="!productIsInStock(product)"
            v-on:click="addProductToCart(product)">Add to cart</button>
        </li>
     </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  name: 'ProductList',
  data(){
      return {
          loading:false
      }
  },
  computed:{
  ...mapState({
    products:state=>state.products.products
  }),
  ...mapGetters('products',{
      productIsInStock:'productIsInStock'
  })
//   {
    //   products(){
    //       return this.$store.state.products
    //   },
    //   productIsInStock(){
    //       return this.$store.getters.productIsInStock
    //   }
   },
  created(){
      this.loading = true

      this.fetchProducts()
      .then(()=> this.loading = false)
  },
  methods: {
      ...mapActions({
          fetchProducts:'products/fetchProducts',
          addProductToCart:'cart/addProductToCart'
      })
    //   addProductToCart(product){
    //       this.$store.dispatch('addProductToCart',product)
    //   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
