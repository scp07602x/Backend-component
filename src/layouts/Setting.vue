<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-gray-200">
      <admin-navbar />
      <header-stats v-if="isShow == true" />
      <Header v-if="isShow == false" />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <vue-page-transition name="fade-in-up">
          <router-view />
        </vue-page-transition>
        <footer-admin />
      </div>
    </div>
    <VLoading
      :active.sync="isLoading"
      loader="bars"
      color="rgb(56,161,105)"
      ref="loading"
    ></VLoading>
  </div>
</template>
<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Header from "@/components/Headers/Header.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";

export default {
  name: "setting-layout",
  components: {
    AdminNavbar,
    Sidebar,
    Header,
    FooterAdmin,
    HeaderStats,
  },

  data() {
    return {
      isShow: true,
    };
  },

  watch: {
    $route() {
      this.showBar();
    },
  },

  mounted() {
    this.showBar();
  },

  computed: {
    isLoading() {
      return this.$store.state.common.isLoading;
    },
  },

  methods: {
    showBar() {
      if (this.$route.path == "/admin/dashboard") {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
  },
};
</script>

<style scoped>
.fade-in-up-leave-to {
  transition: opacity 0.5s !important;
}

.fade-in-up-enter-to {
  opacity: 0;
  animation-duration: 0.7s;
  animation-fill-mode: both;
  animation-name: fadeInUp;
}

@keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
</style>
