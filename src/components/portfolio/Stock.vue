<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="blue white--text">
            <v-card-title class="title">
                <strong>
                    {{ stock.name }} | 
                    <small>
                        {{ stock.price | moeda }}
                        |
                        {{ stock.quantity }} unidades
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
                    :error="insufficientQuantity || quantity < 0 || !Number.isInteger(quantity)"
                    @keyup.enter="sellStock"/>
                <v-btn icon href="" target="_blank" slot="activator" @click="addQuantity">
                    <v-icon class="blue--text">add_circle</v-icon>
                </v-btn>
                <v-btn class="blue darken-3 white--text"
                    :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                    @click="sellStock" >
                    VENDER
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
        sellStock(){
            const order = {
                id: this.stock.id,
                quantity: this.quantity,
                price: this.stock.price
            }

            this.$store.dispatch('sellStock', order)
            this.quantity = 0
        },
        addQuantity() {
            if(this.insufficientQuantity)
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
        insufficientQuantity() {
            return this.stock.quantity < this.quantity
        }
    }
}
</script>

<style>

</style>
