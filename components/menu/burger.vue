<template>
    <div id="burger"
         :class="{ 'active' : isBurgerActive }"
         @click.prevent="toggle">
        <div>
            <button type="button" class="burger-button" title="Menu">
                <span class="burger-bar burger-bar--1"></span>
                <span class="burger-bar burger-bar--2"></span>
                <span class="burger-bar burger-bar--3"></span>
            </button>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
        data: () => ({
            
        }),
        computed: {
            ...mapGetters({
                isBurgerActive: 'menu/getIsMenuOpen', 
            })
        },
        methods: {
            ...mapActions({
                toggle: 'menu/toggle', 
            }),
        }
    }
</script>
<style lang="scss">


</style>