<template>
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4"
    >
      <transition name="fade" mode="out-in">
        <BreadCrumb />
      </transition>
      <form
        class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
      ></form>
      <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
        <user-dropdown />
      </ul>
    </div>
  </nav>
</template>

<script>
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
import BreadCrumb from "@/components/Breadcrumb/Breadcrumb.vue";

export default {
  components: {
    UserDropdown,
    BreadCrumb,
  },
};
</script>
