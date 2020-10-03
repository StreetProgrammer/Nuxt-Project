<template>
  <fragment>
    <nav class="mobile-nav d-lg-none">
      <ul>
        <li class="active"><a href="#intro">Home</a></li>
        <li class=""><a href="#about">About Us</a></li>
        <li class=""><a href="#services">Services</a></li>
        <li class=""><a href="#portfolio">Portfolio</a></li>
        <li class=""><a href="#team">Team</a></li>
        <li class="drop-down">
          <a href="">Drop Down</a>
          <ul style="display: none">
            <li><a href="#">Drop Down 1</a></li>
            <li class="drop-down">
              <a href="#">Drop Down 2</a>
              <ul style="display: none">
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
            <li><a href="#">Drop Down 5</a></li>
          </ul>
        </li>
        <li class=""><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
    <div
      class="mobile-nav-overly"
      :style="isBurgerActive ? 'display: block' : ''"
    ></div>
  </fragment>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isBurgerActive: "menu/getIsMenuOpen"
    })
  },
  methods: {
    ...mapActions({
      toggle: "menu/toggle"
    })
  }
};
</script>
