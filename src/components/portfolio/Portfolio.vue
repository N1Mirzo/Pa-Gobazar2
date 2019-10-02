<template>
    <div class="portfolio">
        <v-layout row wrap>
            <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
        </v-layout>
        <div v-show="stocks.length <= 0">
            <h1 class="display-3 font-weight-light indigo--text mb-4">
                Oppss... Portfolio vazio...
            </h1>
            <v-tooltip bottom>
                <v-btn fab dark large color="pink" to="/stocks" slot="activator">
                    <v-icon large dark>trending_up</v-icon>
                </v-btn>
                <span>Comprar Ações</span>
            </v-tooltip>
        </div>
    </div>
</template>

<script>
import Stock from './Stock.vue'

export default {
    components: { Stock },
    computed: {
        stocks() {
            return this.$store.getters.stocksPortfolio
        }
    }
}
</script>

<style>

</style>
