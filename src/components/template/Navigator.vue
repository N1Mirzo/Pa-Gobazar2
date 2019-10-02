<template>
    <v-navigation-drawer fixed v-model="drawer" app>
        <v-list dense>
            <v-list-tile to="/" >
                <v-list-tile-action><v-icon>home</v-icon></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Início</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/portfolio" >
                <v-list-tile-action><v-icon>contact_mail</v-icon></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Portfólio</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to="/stocks" >
                <v-list-tile-action><v-icon>trending_up</v-icon></v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Ações</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        drawer: Boolean
    }
}
</script>

<style>

</style>
