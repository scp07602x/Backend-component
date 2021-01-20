<template>
  <div class="flex flex-wrap">
    <div class="w-full mb-12 px-4">
      <PageList />
    </div>
  </div>
</template>
<script>
import PageList from "@/components/PageList/PageList.vue";

export default {
  components: {
   PageList,
  },

  methods: {
    getAdPageList(){
      this.$axios.get('/api/menu?action=get_sidebar_menu').then(data => console.log(data));
    }
  },

  created() {
    this.getAdPageList();
  },
};
</script>