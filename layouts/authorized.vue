<template>
  <div>
    <!--  -->
    <sidebar>
      <div class="page-wrapper chiller-theme toggled">
        <nav id="sidebar" class="sidebar-wrapper">
          <div class="sidebar-content">
            <div class="sidebar-brand">
              <nuxt-link to="/">
                <client-only
                  ><img src="~assets/imgs/logo.png" alt=""
                /></client-only>
              </nuxt-link>
              <div @click.prevent="toggle" id="close-sidebar">
                <font-awesome-icon icon="times" />
              </div>
            </div>
            <hr />
            <div class="sidebar-header">
              <div class="user-info">
                <span class="user-name">
                  <strong>{{ $auth.user.ful_name }}</strong>
                </span>
                <span class="user-role">
                  {{ $auth.user.kind == 0 ? "عضو مستقل" : "صاحب عمل" }}
                </span>
                <!-- <span class="user-status">
                                    <i class="fa fa-circle"></i>
                                    <span>Online</span>
                                </span> -->
              </div>
              <div class="user-pic">
                <img
                  class="img-responsive img-rounded"
                  :src="
                    $auth.user.image == null
                      ? `${require('~/assets/imgs/auth/default-user.png')}`
                      : `http://159.65.85.249${$auth.user.image}`
                  "
                  :alt="$auth.user.ful_name"
                />
              </div>
            </div>
            <!-- sidebar-header  -->

            <div class="sidebar-search">
              <div>
                <div class="input-group">
                  <!-- <input
                    type="text"
                    class="form-control search-menu"
                    :placeholder="
                      $auth.user.kind == 1 ? 'ابحث عن مستقلين' : 'ابحث عن وظائف'
                    "
                  /> -->
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <font-awesome-icon icon="search" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <!-- sidebar-search  -->

            <div class="sidebar-menu">
              <ul>
                <!-- <li class="header-menu">
                                <span>General</span>
                            </li> -->
                <li class="sidebar-dropdown">
                  <nuxt-link to="/account/edit/account-info">
                    <span>تعديل الحساب</span>
                  </nuxt-link>
                  <div class="sidebar-submenu">
                    <ul>
                      <li>
                        <a href="#">Dashboard 1</a>
                      </li>
                      <li>
                        <a href="#">Dashboard 2</a>
                      </li>
                      <li>
                        <a href="#">Dashboard 3</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li v-if="$auth.user.kind == 1" class="sidebar-dropdown">
                  <nuxt-link to="/profile/edit/about">
                    <span>تعديل البروفايل</span>
                  </nuxt-link>
                </li>
                <li v-if="$auth.user.kind == 1" class="sidebar-dropdown">
                  <nuxt-link to="#">
                    <span>تعديل الحساب</span>
                  </nuxt-link>
                </li>
                <li class="sidebar-dropdown">
                  <nuxt-link to="/account/edit/account-info">
                    <span>شراء العطاءات</span>
                  </nuxt-link>
                </li>
                <li class="sidebar-dropdown">
                  <nuxt-link to="#">
                    <span>إدارة الحساب النقدي</span>
                  </nuxt-link>
                </li>
                <li class="sidebar-dropdown">
                  <nuxt-link to="#">
                    <span>المساعده</span>
                  </nuxt-link>
                </li>
                <li>
                  <hr />
                </li>

                <li>
                  <a href="#">
                    <span>Documentation</span>
                    <!-- <span class="badge badge-pill badge-primary">Beta</span> -->
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Calendar</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Examples</span>
                  </a>
                </li>
              </ul>
            </div>
            <!-- sidebar-menu  -->
          </div>
          <!-- sidebar-content  -->

          <div class="sidebar-footer">
            <a href="#">
              <font-awesome-icon icon="bell" />
              <span class="badge badge-pill badge-warning notification">3</span>
            </a>
            <a href="#">
              <font-awesome-icon icon="comment" />
              <span class="badge badge-pill badge-success notification">7</span>
            </a>
            <!-- <a href="#">
                        <i class="fa fa-cog"></i>
                        <span class="badge-sonar"></span>
                    </a> -->
            <a href="#">
              <!-- <i class="fa fa-power-off"></i> -->
              <font-awesome-icon icon="power-off" />
            </a>
          </div>
        </nav>
      </div>
    </sidebar>
    <!--  -->
    <!-- header-start -->
    <header>
      <div class="header-area ">
        <div id="sticky-header" class="main-header-area gray-bg">
          <div class="container">
            <div class="row align-items-center space-betwn">
              <div class="col-xl-2 col-lg-2">
                <div class="logo-img">
                  <nuxt-link to="/">
                    <client-only
                      ><img src="@/assets/imgs/logo.png" alt=""
                    /></client-only>
                  </nuxt-link>
                </div>
              </div>

              <div class="col-xl-3 col-lg-3 .d-none .d-lg-block .d-xl-none">
                <div class="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li v-if="$auth.user.kind == 1">
                        <a href="#">
                          <font-awesome-icon icon="plus" />
                          <span>
                            أضافة وظيفة
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#"><font-awesome-icon icon="comment"/></a>
                      </li>
                      <li>
                        <a href="#"><font-awesome-icon icon="bell"/></a>
                      </li>
                      <li>
                        <nuxt-link to="">
                          <div class="autor-thumb">
                            <img
                              :src="
                                $auth.user.image == null
                                  ? `${require('~/assets/imgs/auth/default-user.png')}`
                                  : `http://159.65.85.249${$auth.user.image}`
                              "
                              :alt="$auth.user.ful_name"
                            />
                          </div>
                        </nuxt-link>
                        <ul class="submenu text-center">
                          <li>
                            <nuxt-link to="/account/edit/account-info">
                              تعديل الحساب
                            </nuxt-link>
                          </li>
                          <li v-if="$auth.user.kind == 0">
                            <nuxt-link to="/profile/edit/about">
                              تعديل البروفايل
                            </nuxt-link>
                          </li>
                          <li>
                            <nuxt-link v-if="$auth.user.kind == 0" to="#">
                              شراء العطاءات
                            </nuxt-link>
                          </li>
                          <li><a href="#">إدارة الحساب النقدي</a></li>
                          <hr />
                          <li><a href="#">المساعدة</a></li>
                          <li>
                            <a href="#" @click="$auth.logout('local')"
                              >تسجيل الخروج</a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div class="col-12">
                <div class="mobile_menu d-block d-lg-none">
                  <div class="slicknav_menu">
                    <burger />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- header-end -->
    <nuxt />
    <!-- footer -->
    <footer class="footer-area ">
      <div class="container" style="border-bottom: 1px solid #ddd;">
        <div class="row justify-content-between">
          <div class="col-sm-6 col-md-2 col-xl-2">
            <div class="single-footer-widget">
              <p>كيف يعمل</p>
              <ul>
                <li><a href="#" style="font-size: 12px">الرئيسية</a></li>
                <li><a href="#" style="font-size: 12px">تسجيل الدخول</a></li>
                <li><a href="#" style="font-size: 12px">التسجيل</a></li>
                <li><a href="#" style="font-size: 12px">نشر وظيفة</a></li>
                <li><a href="#" style="font-size: 12px">بحث مستقلين</a></li>
              </ul>
            </div>
          </div>

          <div class="col-sm-6 col-md-3 col-xl-3">
            <div class="single-footer-widget">
              <p>عن شغل اونلاين</p>
              <ul>
                <li><a href="#" style="font-size: 12px">من نحن</a></li>
                <li><a href="#" style="font-size: 12px">كيف يعمل</a></li>
                <li><a href="#" style="font-size: 12px">الأسئلة الشائعة</a></li>
                <li>
                  <a href="#" style="font-size: 12px">اتفاقية الإستخدام</a>
                </li>
                <li><a href="#" style="font-size: 12px">سياسة الخصوصية</a></li>
              </ul>
            </div>
          </div>

          <div class="col-sm-6 col-md-3 col-xl-3">
            <div class="single-footer-widget">
              <p>عن شغل اونلاين</p>
              <ul>
                <li><a href="#" style="font-size: 12px">اعلن معنا</a></li>
                <li><a href="#" style="font-size: 12px">المدونة</a></li>
                <li>
                  <a href="#" style="font-size: 12px">التسويق بالعمولة</a>
                </li>
                <li><a href="#" style="font-size: 12px">الوسائط المالية</a></li>
                <li><a href="#" style="font-size: 12px">اتصل بنا</a></li>
              </ul>
            </div>
          </div>

          <div class="col-sm-6 col-md-3 col-xl-4">
            <div class="single-footer-widget footer_icon">
              <p>تابعونا</p>
              <client-only
                ><div class="office-location">
                  <span>
                    <!-- <img
                      src="@/assets/imgs/social/fb.png"
                      style="width: 30px"
                      alt=""
                    /> -->
                  </span>
                  <span>
                    <!-- <img
                      src="@/assets/imgs/social/tw.png"
                      style="width: 30px"
                      alt=""
                    /> -->
                  </span>
                  <span>
                    <!-- <img
                      src="@/assets/imgs/social/li.png"
                      style="width: 30px"
                      alt=""
                    /> -->
                  </span>
                  <span>
                    <!-- <img
                      src="@/assets/imgs/social/yt.png"
                      style="width: 30px"
                      alt=""
                    /> -->
                  </span>
                  <span>
                    <!-- <img
                      src="@/assets/imgs/social/in.png"
                      style="width: 30px"
                      alt=""
                    /> -->
                  </span>
                </div></client-only
              >
              <!--  -->
              <p>وسائل الدفع</p>
              <client-only
                ><div class="office-location">
                  <span>
                    <!-- <img
                      src="@/assets/imgs/payment/fawry.png"
                      style="width: 30px"
                      alt=""
                    /> -->
                  </span>
                  <span>
                    <!-- <img
                      src="@/assets/imgs/payment/payoneer.png"
                      style="width: 30px"
                      alt=""
                    /> -->
                  </span>
                  <span>
                    <!-- <img
                      src="@/assets/imgs/payment/Western_Union.png"
                      style="width: 30px"
                      alt=""
                    /> -->
                  </span>
                </div></client-only
              >
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 text-center">
            <div
              class="copyright_part_text text-center"
              style="padding: 5px 15px;margin-top: 45px;"
            >
              <p>شغل أونلاين جميع الحقوق محفوظة</p>
            </div>
          </div>
          <!--  -->
          <div class="col-lg-4 text-center">
            <div
              class="copyright_part_text text-center"
              style="padding: 5px 15px;margin-top: 45px;"
            >
              <client-only
                ><span>
                  <img
                    src="@/assets/imgs/logo.png"
                    style="width: 60px"
                    alt=""
                  /> </span
              ></client-only>
            </div>
          </div>
          <!--  -->
          <div class="col-lg-4 text-center">
            <div
              class="copyright_part_text text-center"
              style="padding: 5px 15px;margin-top: 45px;"
            >
              <client-only>
                <span>
                  <!-- <img
                    src="@/assets/imgs/payment/norton.png"
                    style="width: 60px"
                    alt=""
                  />  -->
                </span></client-only
              >
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </footer>
    <!-- footer end-->
  </div>
</template>
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
