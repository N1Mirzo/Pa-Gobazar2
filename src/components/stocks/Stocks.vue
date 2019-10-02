<template>
    <div class="stocks">
        <v-layout row wrap>
            <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
        </v-layout>
    </div>
</template>

<script>
import Stock from './Stock.vue'
import { mapGetters } from 'vuex'

export default {
    components: { Stock },
    computed: {
        // outra maineira de mapear os metodos no vuex
        ...mapGetters(['stocks'])
    }
}
</script>

<style>

</style>
