<template>
  <div>
    <main>
      <section class="relative w-full h-full py-40 min-h-screen">
        <div
          class="absolute top-0 w-full h-full bg-gray-700 bg-no-repeat bg-full"
        ></div>
        <router-view />
        <footer-small absolute />
      </section>
    </main>
  </div>
</template>
<script>
import FooterSmall from "@/components/Footers/FooterSmall.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    FooterSmall,
  },
};
</script>
