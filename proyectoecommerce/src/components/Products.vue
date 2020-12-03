<template>
  <div >

      <b-container fluid class="bv-example-row mt-4">

  <b-row >
    <b-col cols="3" v-for="(fruit,index) in fruits" :key="index">
          <b-card
    :title=fruit.name
    :img-src="require(`@/assets/img/fruits/juego${index+1}.jpeg`)"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-4"
  >
    <b-card-text>
      <h5>Precio: ${{fruit.price}}.00</h5>
       <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
       <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
       <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
        <b-icon  variant="warning" class="h1" icon="star-fill"></b-icon>
         <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
    </b-card-text>

    <b-button v-if="!fruit.cart" :disabled="fruit.cart"  @click="fruit.cart=true,addtocart(JSON.parse(JSON.stringify(fruit)))" block href="#" variant="success">Añadir al Carrito</b-button>
    <b-button  v-if="fruit.cart" :disabled="fruit.cart"   block href="#" variant="warning">Añadido al Carrito</b-button>
  </b-card>
    </b-col>


  </b-row>
</b-container>

  </div>
</template>

<script>

export default {

    data() {
        return {
            fruits: [
                {
                    id:1,
                    quantity:1,
                    name: 'Gran Turismo 6',
                    price:1000,
                    img:'@/assets/fruits/juego1.jpeg',
                    cart:false
                },
                 {
                    id:2,
                    quantity:1,
                    name: 'Pokémon Sword - Shield',
                    price:1300,
                    img:'@/assets/fruits/juego2.jpeg',
                    cart:false
                },
                 {
                    id:3,
                    quantity:1,
                    name: 'Minecraft',
                    price:400,
                    img:'@/assets/fruits/juego3.jpeg',
                    cart:false
                },
                 {
                    id:4,
                    quantity:1,
                    name: 'Call Of Duty',
                    price:1500,
                    img:'@/assets/fruits/juego4.jpeg',
                    cart:false
                },
                 {
                    id:5,
                    quantity:1,
                    name: 'Grand Theft Auto V',
                    price:900,
                    img:'@/assets/fruits/juego5.jpeg',
                    cart:false
                },
                 {
                    id:6,
                    quantity:1,
                    name: 'Crash Bandicoot',
                    price:700,
                    img:'@/assets/fruits/juego6.jpeg',
                    cart:false
                },
                 {
                    id:7,
                    quantity:1,
                    name: 'Ratchet & Clank',
                    price:1200,
                    img:'@/assets/fruits/juego7.jpeg',
                    cart:false
                },
                 {
                    id:8,
                    quantity:1,
                    name: 'The Legend of Zelda',
                    price:1400,
                    img:'@/assets/fruits/juego8.jpeg',
                    cart:false
                },
            ]
        }
    },
    methods: {
      addtocart(product){

       let cart= []
        if (JSON.parse(localStorage.getItem('products'))) {
          cart= JSON.parse(localStorage.getItem('products'))
        } else {
          cart = []
        }
        cart.push(product);
        localStorage.setItem('products',JSON.stringify(cart))
      }
    },
    created(){
       let cart= []
        if (JSON.parse(localStorage.getItem('products'))) {
          cart= JSON.parse(localStorage.getItem('products'))
        } else {
          cart = []
        }
        for (let index = 0; index < cart.length; index++) {
            for (let index2 = 0; index2 < this.fruits.length; index2++) {
              if (cart[index].id == this.fruits[index2].id) {
                this.fruits[index2].cart=true
              }

            }

        }
    }
}
</script>

<style>

</style>
