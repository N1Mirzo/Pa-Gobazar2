<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="success white--text">
            <v-card-title class="title">
                <strong>
                    {{ stock.name }} | 
                    <small>
                        {{ stock.price | moeda }}
                    </small>
                </strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-btn icon target="_blank" slot="activator" @click="subQuantity" >
                    <v-icon class="red--text" >remove_circle</v-icon>
                </v-btn>
                <v-text-field 
                    type="number"
                    v-model.number="quantity"
                    label="Quantidade" 
                    :error="insufficientFunds || quantity < 0 || !Number.isInteger(quantity)"
                    @keyup.enter="buyStock"/>
                <v-btn icon href="" target="_blank" slot="activator" @click="addQuantity">
                    <v-icon class="blue--text">add_circle</v-icon>
                </v-btn>
                <v-btn class="green darken-3 white--text"
                    :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
                    @click="buyStock" >
                    Comprar
                </v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    data() {
        return {
            quantity: 0
        }
    },
    props: {
        stock: Object
    },
    methods: {
        buyStock() {
            // monto um obj para representar um ordem de venda
            const order = {
                id: this.stock.id,
                quantity: this.quantity,
                price: this.stock.price
            }

            // deve enviar estar ordem de venda, para o portfolio do usuário
            // através de actions em stocks
            this.$store.dispatch('buyStock', order)

            // quantidade deve ser zerado para proxima compra
            this.quantity = 0
        },
        addQuantity() {
            if(this.insufficientFunds)
                return

            this.quantity++
        },
        subQuantity() {
            if(this.quantity <= 0)
                return 0

            this.quantity--
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds
        },
        insufficientFunds() {
            return (this.quantity * this.stock.price) > this.funds
        }
    }
}
</script>

<style>

</style>
