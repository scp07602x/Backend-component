<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full mb-12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
          :style="`background-image:url(${index})`"
          style="width: 1535px; height: 1575px; background-size: cover"
        >
          <div id="topbar-left" class="bdr-red-2 cursor-pointer">
            <router-link to="/admin/managers"></router-link>
          </div>
          <div id="topbar-right" class="bdr-red-2"></div>
          <div id="sidebar" class="bdr-red-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import index from "@/assets/img/index.jpg";

export default {
  data() {
    return {
      index,
    };
  },

  computed: {
    background() {
      return `background-image:url(${this.index})`;
    },
  },
};
</script>

<style lang="scss" scoped>
#topbar-left {
  @include absolute(0px, 0px, 0px, 105px);
  @include wh(500px, 45px);
}
#topbar-right {
  @include absolute(0px, 0px, 0px, 1150px);
  @include wh(280px, 45px);
}
#sidebar {
  @include absolute(60px, 0px, 0px, 350px);
  @include wh(1030px, 50px);
}
</style>