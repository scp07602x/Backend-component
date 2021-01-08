<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-gray-200">
      <admin-navbar />
      <Header />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Header from "@/components/Headers/Header.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
export default {
  name: "setting-layout",
  components: {
    AdminNavbar,
    Sidebar,
    Header,
    FooterAdmin
  },
};
</script>
