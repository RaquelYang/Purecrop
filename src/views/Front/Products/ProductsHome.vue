<template>
<div id="ProductsHome">
  <v-container class="mt-8 mt-md-16">
    <v-row>
      <v-col></v-col>
      <v-col cols="12" md="9">
        <v-row>
          <v-col cols="12" md="9" >
            <Swiper/>
          </v-col>
          <v-col cols="12" md="3">
            <div class="image  pb-3">
              <v-img src="https://picsum.photos/300/100/?random=10"></v-img>
            </div>
            <div class="image pt-3">
              <v-img src="https://picsum.photos/300/100/?random=10"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
    <v-container class="home mt-8 mt-md-16">
      <h3 class="text-center text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline">小農產品</h3>
      <p class="text-center mt-6 mt-lg-10">新鮮熱賣 x 自產自銷</p>
      <v-row class="mt-16">
        <v-col></v-col>
        <v-col cols="12" md="9">
          <v-row>
          <v-col v-for="product in products" :key="product._id" cols="12" xl="3" md="4">
          <v-card  :ripple="false" >
            <v-img height="200" class="parallax cursor" :src="product.image"  @click="singleproduct(product._id)">
              <!-- <span class="badge"></span> -->
            </v-img>

            <v-card-text class="pb-0">
              <p class="text-h5 grey--text text--darken-3 font-weight-bold">{{product.name}}</p>
              <p class="mb-0 text-h5 red--text font-weight-bold"> $&nbsp;{{ new Intl.NumberFormat('en-IN').format(product.price) }}</p>
            </v-card-text>
            <v-card-actions class="flex-column px-4 pb-4" >
              <v-btn  block text :ripple="false" class="buybtn mx-0 mt-4 text-h6" @click="buyNow(product)">直接購買</v-btn>
              <v-btn block text :ripple="false" class="addcartbtn light-green darken-1 white--text mx-0 mt-4 text-h6" @click="addCart(product)">加入購物車</v-btn>
            </v-card-actions>
          </v-card>
          </v-col>
        </v-row>
        </v-col>
        <v-col></v-col>
      </v-row>
  </v-container>
</div>
</template>

<script>
import Swiper from '@/components/Swiper.vue'

export default {
  components: {
    Swiper
  }
}
</script>
<style lang="scss">
#ProductsHome{
  .image{
    height: 50%;
  }
  .parallax{
    position: relative;
  }
  .badge{
    display: block;
    background-color: red;
    width: 80px;
    height: 40px;
    position: absolute;
    top:10px;
    right: 10px;
    &::before{
      position: absolute;
      content:'HOT';
      font-weight: bold;
      font-size: 30px;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
  .buybtn{
    border:1px solid #333;
    transition: .3s;
    &:hover{
      // border-color: orange;
      background-color: #333;
      color:white
    }
  }
  .cursor{
    cursor: pointer;
  }
}
</style>
<script>
export default{
  data () {
    return {
      products: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products')
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '商品取得失敗'
      })
    }
  },
  methods:{
    addCart(product){
      if (!this.user.isLogin) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '請先登入'
        })
        return
      }
      this.$store.dispatch('user/addCart', { product: product._id, quantity: 1 })
    },
    buyNow(product){
      if (!this.user.isLogin) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '請先登入'
        })
        return
      }
      this.$store.dispatch('user/addCart', { product: product._id, quantity: 1 })
      this.$router.push('/cart')
    },
    singleproduct(id){
      this.$router.push('productintroduction/' + id)
    }
  }
}
</script>
