<template>
  <div class="flex flex-wrap">
    <div class="w-full mb-12 px-4">
      <ManagersList />
    </div>
  </div>
</template>
<script>
import ManagersList from "@/components/Managers/ManagersList.vue";

export default {
  name: "Managers",
  components: { ManagersList },

  mounted() {
    // console.log(this.$route);
  },

};
</script>
