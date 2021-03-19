<template>
  <div>
    <a
      class="text-gray-600 block"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <div class="items-center flex">
        <span
          class="w-12 h-12 text-sm text-black bg-white inline-flex items-center justify-center rounded-full"
        >
          {{ userInfo.name }}
        </span>
      </div>
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <span
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
      >
        登入帳號 : {{ userInfo.account }}
      </span>
      <div class="h-0 my-2 border border-solid border-gray-200" />
      <span
        type="button"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 text-left cursor-pointer"
        @click="logout()"
      >
        登出
      </span>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

import image from "@/assets/img/team-1-800x800.jpg";

export default {
  data() {
    return {
      dropdownPopoverShow: false,
      image: image,
    };
  },

  computed: {
    userInfo() {
      return this.$store.state.common.loginInfomation;
    },
  },

  mounted() {
    document.addEventListener("click", this.bodyCloseMenus);
  },

  methods: {
    bodyCloseMenus(e) {
      let _this = this;
      if (this.$refs.popoverDropdownRef && !this.$refs.btnDropdownRef.contains(e.target)) {
        if (_this.dropdownPopoverShow == true) {
          _this.dropdownPopoverShow = false;
        }
      }
    },

    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },

    logout() {
      this.$storage.removeitem("token");
      this.$router.replace({
        path: "/auth/login",
      });
      this.$router.go(0);
    },
  },
};
</script>
