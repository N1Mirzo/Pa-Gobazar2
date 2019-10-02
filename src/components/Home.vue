<template>
    <div class="home">
        <h1 class="display-3 font-weight-light indigo--text mb-4">
            Bolsa de Valores
        </h1>
        <v-btn fab dark large color="purple">
            <v-icon dark>android</v-icon>
        </v-btn>
        <v-tooltip bottom>
            <v-btn fab dark large color="success" slot="activator" @click="saveData" >
                <v-icon large dark>cloud_upload</v-icon>
            </v-btn>
            <span>Salvar Dados</span>
        </v-tooltip>
        <v-tooltip bottom>
            <v-btn fab dark large color="pink" slot="activator" @click="loadDataLocal">
                <v-icon large dark>cloud_download</v-icon>
            </v-btn>
            <span>Carregar Dados</span>
        </v-tooltip>

        <br>
        <v-tooltip left>
            <v-btn icon large href="" slot="activator">
                <v-icon large>code</v-icon>
            </v-btn>
            <span>Source</span>
        </v-tooltip>

        <br>
        <p><strong>SALDO ATUAL - </strong> {{ funds | moeda }}</p>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    
    methods: {
        ...mapActions(['loadData']),
        saveData() {
            const { stocks, funds, stocksPortfolio } = this.$store.getters

            this.$http.put('data.json', { stocks, funds, stocksPortfolio })
                // eslint-disable-next-line
                //.then(res => console.log('res', res))
                // eslint-disable-next-line
                // .catch(err => console.error('deu ruim', err))
        },
        loadDataLocal() {
            this.loadData()
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>

<style>

</style>
