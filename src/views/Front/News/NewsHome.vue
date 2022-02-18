<template>
<div id="newshome" >
  <v-container class="home mt-8 mt-md-16">
      <h3 class="text-center text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline">最新消息</h3>
      <p class="text-center mt-6 mt-lg-10">搶先消息 x 小農活動</p>
      <v-row class="mt-16">
        <v-col></v-col>
        <v-col cols="12" md="9">
          <v-row>
          <v-col cols="12" xl="3" md="4">
          <v-card :ripple="false">
            <v-img height="200" class="imgscale" src="https://picsum.photos/1200/1000/?random=9">
            </v-img>
            <v-card-title>Cafe Badilico</v-card-title>
            <v-card-text>
              <div class="pb-2">2012/12/21</div>
              <p class="ellipsis mb-0">Small plates, salads & sandwiches - a2 indoor seats plus patio seating.</p>
            </v-card-text>
            <v-card-actions class="justify-end px-4 pb-4" >
              <v-btn to="/news/pages" text :ripple="false" class="light-green darken-1 white--text">read more</v-btn>
            </v-card-actions>
          </v-card>
          </v-col>
          <v-col cols="12" xl="3" md="4">
            <v-card :ripple="false">
              <v-img height="200" class="imgscale" src="https://picsum.photos/1200/1000/?random=9">
              </v-img>
              <v-card-title>Cafe Badilico</v-card-title>
              <v-card-text>
                <div class="pb-2">2012/12/21</div>
                <p class="ellipsis mb-0">Small plates, salads & sandwiches - a2 indoor seats plus patio seating.</p>
              </v-card-text>
              <v-card-actions class="justify-end px-4 pb-4" >
                <v-btn to="/news/pages" text :ripple="false" class="light-green darken-1 white--text">read more</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" xl="3" md="4">
            <v-card :ripple="false">
              <v-img height="200" class="imgscale" src="https://picsum.photos/1200/1000/?random=9">
              </v-img>
              <v-card-title>Cafe Badilico</v-card-title>
              <v-card-text>
                <div class="pb-2">2012/12/21</div>
                <p class="ellipsis mb-0">Small plates, salads & sandwiches - a2 indoor seats plus patio seating.</p>
              </v-card-text>
              <v-card-actions class="justify-end px-4 pb-4" >
                <v-btn to="/news/pages" text :ripple="false" class="light-green darken-1 white--text">read more</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" xl="3" md="4">
            <v-card :ripple="false">
              <v-img height="200" class="imgscale" src="https://picsum.photos/1200/1000/?random=9">
              </v-img>
              <v-card-title>Cafe Badilico</v-card-title>
              <v-card-text>
                <div class="pb-2">2012/12/21</div>
                <p class="ellipsis mb-0">Small plates, salads & sandwiches - a2 indoor seats plus patio seating.</p>
              </v-card-text>
              <v-card-actions class="justify-end px-4 pb-4" >
                <v-btn to="/news/pages" text :ripple="false" class="light-green darken-1 white--text">read more</v-btn>
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
#newshome{
  margin-top: 10rem;
  .home{
    .v-image__image.v-image__image--cover{
    z-index: 1;
    transition: .5s;
    &:hover{
      transform: scale(1.2);
      }
    }
  }
  .ellipsis{
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
}

</style>
