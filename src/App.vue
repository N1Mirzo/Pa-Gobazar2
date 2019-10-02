<template>
  <div id="app">
    <v-app id="inspire">
      <Navigator :drawer="drawer" />
      <Header />
      <v-content>
        <v-container fluid fill-height>
            <v-layout justify-center align-center>
                <v-flex text-xs-center>
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </v-flex>
            </v-layout>
        </v-container>
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Navigator from './components/template/Navigator.vue'
import Header from './components/template/Header.vue'
import Footer from './components/template/Footer.vue'

export default {
    props: {
        source: String
    },
    computed: {
        drawer() {
            return this.$store.state.drawer
        }
    },
    components: { 
        Navigator, 
        Header,
        Footer
    },
    created() {
        // aciona a action initStocks injetando o array de açoes 
        // /data/stocks.js no state-store do component Stocks.vue
        this.$store.dispatch('initStocks')
    }
}
</script>

<style>
</style>
