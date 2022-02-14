<template>
<div id="delivery">
  <v-container class="mt-8 mt-md-16">
      <h3 class="text-center text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline">新鮮直送</h3>
      <p class="text-center mt-6 mt-lg-10">當季蔬果 <span class="font-weight-bold">x</span>  小農新鮮直送 <span class="font-weight-bold">x</span> 友善土地植栽</p>
      <v-row class="text-center mt-3">
        <v-col></v-col>
        <v-col cols="12" md="11" lg="9">
          <v-row>
            <v-col cols="12">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card
                    class="mx-auto"
                  >
                    <v-img src="https://picsum.photos/1080/400/?random=9"></v-img>
                    <v-fade-transition>
                      <v-overlay
                        v-if="hover"
                        absolute
                        color="rgba(0,0,0,.6)"
                      >
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nihil.</p>
                        <v-btn>了解更多</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
            <v-col cols="12">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card
                    class="mx-auto"
                  >
                    <v-img src="https://picsum.photos/1080/400/?random=1"></v-img>
                    <v-fade-transition>
                      <v-overlay
                        v-if="hover"
                        absolute
                        color="rgba(0,0,0,.6)"
                      >
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nihil.</p>
                        <v-btn>了解更多</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
            <v-col cols="6">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card
                    class="mx-auto"
                  >
                    <v-img src="https://picsum.photos/1080/400/?random=2"></v-img>
                    <v-fade-transition>
                      <v-overlay
                        v-if="hover"
                        absolute
                        color="rgba(0,0,0,.6)"
                      >
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nihil.</p>
                        <v-btn>了解更多</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
            <v-col cols="6">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card
                    class="mx-auto"
                  >
                    <v-img src="https://picsum.photos/1080/400/?random=3"></v-img>
                    <v-fade-transition>
                      <v-overlay
                        v-if="hover"
                        absolute
                        color="rgba(0,0,0,.6)"
                      >
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nihil.</p>
                        <v-btn>了解更多</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
        <v-col></v-col>
        </v-row>
    </v-container>
</div>
</template>
<style lang="scss">

</style>
