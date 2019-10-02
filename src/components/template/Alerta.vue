<template>
    <v-sheet :elevation="6" class="pa-2 my-2" :class="cor">
        <v-icon class="white--text mr-3">{{ icon }}</v-icon>
        <span class="white--text font-weight-light headline">
            <slot></slot>
        </span>
    </v-sheet>
</template>

<script>
export default {
    props: [ 'icon', 'cor' ]
}
</script>

<style>

</style>
