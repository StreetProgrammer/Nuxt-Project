<template> </template>
<script>
import burger from "../components/menu/burger";
import sidebar from "../components/menu/sidebar";
import { mapGetters, mapActions } from "vuex";

export default {
  head() {
    return {
      bodyAttrs: {
        class: this.dataLoaded ? "rtl" : "rtl"
      }
    };
  },
  data() {
    return {
      dataLoaded: false,
      show_menu: false
    };
  },
  computed: {
    ...mapGetters({
      isBurgerActive: "menu/getIsMenuOpen"
    })
  },
  methods: {
    ...mapActions({
      toggle: "menu/toggle"
    })
  },
  components: {
    burger,
    sidebar
  }
};
</script>

<style lang="scss">
@import "~/assets/sass/fonts.scss";
@import "~/assets/sass/style.scss";

.space-betwn {
  justify-content: space-between;
}
</style>
