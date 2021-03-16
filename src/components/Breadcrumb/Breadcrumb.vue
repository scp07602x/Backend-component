<template>
  <div class="breadcrumb">
    <ul class="list-reset flex text-white">
      <li
        v-for="(breadcrumb, idx) in breadcrumbs"
        :key="idx"
        :class="{ linked: !!breadcrumb.path }"
      >
        <router-link :to="breadcrumb.path">{{ breadcrumb.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      defaultbreadcrumbs: [{ name: "後台首頁", path: "/admin/dashboard" }],
      breadcrumbs: [],
    };
  },
  mounted() {
    this.updateBreadcrumbsList();
  },

  watch: {
    $route() {
      this.updateBreadcrumbsList();
    },
  },

  methods: {
    updateBreadcrumbsList() {
      if (this.$route.meta.navId !== undefined) {
        this.$api.serviceNavId(this.$route.meta.navId).then((response) => {
          let subBreadcrumbs = response.map((element) => {
            // console.log(element.category_route.replace(':id',element.id))
            // console.log(element.id)
            return {
              name: element.name.split("-").first(),
              path: `/${element.category_route}`,
            };
          });
          this.breadcrumbs = [...this.defaultbreadcrumbs, ...subBreadcrumbs];
        });
      }
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  list-style: none;
  padding: 0;
}
li {
  cursor: pointer;
  /* color: #42b983; */
}
li:last-child {
  cursor: default;
  pointer-events: none;
  opacity: 0.8;
}
li:not(:last-child):after {
  content: "/";
  margin: 10px;
  margin-right: 15px;
}
</style>