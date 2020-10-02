<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isBurgerActive"></div>
        <transition name="slide">
            <div v-if="isBurgerActive"
                 class="sidebar-panel">
                <slot></slot>
            </div>
        </transition>
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
                closeSidebarPanel: 'menu/toggle', 
            }),
        }
    }
</script>
<style>
/* start the main sidebar style */
    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateX(100%);
        transition: all 150ms ease-in-out 0s
    }

    .sidebar-backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
        z-index: 999;
    }

    .sidebar-panel {
        overflow-y: auto;
        background-color: #fff;
        position: fixed;
        right: 0;
        top: 0;
        height: 100vh;
        z-index: 9999;
        padding: 3rem 20px 2rem 20px;
        width: 300px;
    }
    /* end the main sidebar style */


    /* start the side menu content */

    /* end the side menu content */

</style>