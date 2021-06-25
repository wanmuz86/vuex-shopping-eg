

export default {
   
    
    addToCart(context, product) {
        if (product.inventory > 0) {
            context.commit('pushProductToCart', product)
        }
        else {
            // show out of stocks message
        }
    },
    
}