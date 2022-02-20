<template>
<div id="ProductsHome">
  <v-container class="mt-8 mt-md-16">
    <v-row>
      <v-col></v-col>
      <v-col cols="12" md="9">
        <v-row>
          <v-col cols="12" md="12" >
            <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
              <swiper-slide v-for="productcarousel in productscarousel" :key="productcarousel._id">
                <v-img :src="productcarousel.file"></v-img>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
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
          <v-col class="productcard" v-for="product in products" :key="product._id" cols="12" xl="3" md="4">
          <v-card  :ripple="false" >
            <v-img height="200" class="cursor" :src="product.image"  @click="singleproduct(product._id)">
            </v-img>

            <v-card-text class="pb-0">
              <p class="text-h5 grey--text text--darken-3 font-weight-bold">{{product.name}}</p>
              <p class="mb-0 text-h5 orange--text text--darken-4 font-weight-bold"> $&nbsp;{{ new Intl.NumberFormat('en-IN').format(product.price) }}</p>
            </v-card-text>
            <v-card-actions class="px-4 pb-4" >
              <v-btn width="50%" text large :ripple="false" class="buybtn  mt-4 text-h6 font-weight-bold" @click="buyNow(product)">直接購買</v-btn>
              <v-btn width="50%" text large :ripple="false" class="addcartbtn light-green darken-1 white--text  mt-4 text-h6 font-weight-medium" @click="addCart(product)">
              <v-icon>mdi-cart</v-icon>
              </v-btn>
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

<style lang="scss">
#ProductsHome{
  .home{
    .v-image__image.v-image__image--cover{
    z-index: 1;
    transition: .5s;
    &:hover{
      transform: scale(1.2);
      }
    }
  }
  .image{
    height: 50%;
  }
  .productcard{
    margin-top: 3rem;
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
    border:1px solid #689F38;
    transition: .3s;
    color: #689F38;
  }
  .cursor{
    cursor: pointer;
  }
  .swiper-pagination-bullet-active{
  background-color:#8BC34A !important;
  }
}
</style>
<script>
export default {
  data () {
    return {
      products: [],
      productscarousel: [],
      swiperOptions: {
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products')
      this.products = data.result
      this.getProduct()
    } catch (error) {
      console.log(error)
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '商品取得失敗'
      })
    }
  },
  methods: {
    addCart (product) {
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
    buyNow (product) {
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
    singleproduct (id) {
      this.$router.push('productintroduction/' + id)
    },
    async getProduct () {
      try {
        const { data } = await this.api.get('/images')
        // console.log(data.result[0].productsiper)
        this.productscarousel = data.result[0].productswiper
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '取得圖片失敗'
        })
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
