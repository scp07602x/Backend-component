<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-gray-200">
      <admin-navbar />
      <header-stats v-if="isShow == true" />
      <Header v-if="isShow == false" />
      <div class="px-4 md:px-10 mx-auto w-full -m-24 min-h-screen">
        <router-view />
        <footer-admin />
      </div>
    </div>
    <VLoading
      :active.sync="isLoading"
      loader="bars"
      color="rgb(56,161,105)"
      ref="loading"
    ></VLoading>
    <div class="wrapper" :class="[fullLoading ? '' : 'loaded']">
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
      </div>
    </div>
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
      opacity: 1,
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
    fullLoading() {
      return this.$store.state.common.fullLoading;
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

<style lang="scss" scoped>
.fade-enter {
  opacity: 0;
  transform: translateX(100%);
}

.fade-enter-to,
.fade-leave {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

#content {
  margin: 0 auto;
  padding-bottom: 50px;
  width: 80%;
  max-width: 978px;
}

#loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

#loader {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 100px;
  height: 100px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #3498db;
  z-index: 1001;
  animation: spin 1.5s linear infinite;

  &:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #e74c3c;
    animation: spin 3s linear infinite;
  }

  &:after {
    content: "";
    position: absolute;
    top: 15px;
    right: 15px;
    left: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #f9c922;
    animation: spin 1.5s linear infinite;
  }
}

#loader-wrapper .loader-section {
  position: fixed;
  top: 0;
  width: 51%;
  height: 100%;
  background: #ecf1f6;
  z-index: 1000;
  transform: translateX(0);
}

#loader-wrapper .loader-section.section-left {
  left: 0;
}

#loader-wrapper .loader-section.section-right {
  right: 0;
}

// Animations
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

// Loaded
.loaded #loader-wrapper .loader-section.section-left {
  transform: translateX(-100%);
  transition: all 0.3s 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.loaded #loader-wrapper .loader-section.section-right {
  transform: translateX(100%);
  transition: all 0.3s 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.loaded #loader {
  opacity: 0;
  transition: all 0.3s ease-out;
}

.loaded #loader-wrapper {
  visibility: hidden;
  transform: translateY(-100%);
  transition: all 0.3s 0.5s ease-out;
}
</style>