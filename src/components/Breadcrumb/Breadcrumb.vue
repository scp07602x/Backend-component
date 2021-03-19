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
      labelId: [],
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

  computed: {
    mapBreads() {
      return this.$store.state.common.breadcrumbs;
    },

    pathId() {
      return this.$route.params.id;
    },
  },

  methods: {
    updateBreadcrumbsList() {
      this.labelId = [];
      if (this.$route.meta.breadcrumbs !== undefined) {
        if (this.pathId !== undefined) {
          this.findParentId(this.$route.params.id);
        }

        let breadIds = this.labelId.reverse();
        let num = 0;
        let breads = this.$route.meta.breadcrumbs.map((element) => {
          if (element.path.match(":") !== null) {
            let pathWithId = element.path.strReplace("/", ":", breadIds[num]);
            num++;
            return { path: pathWithId, name: element.name };
          } else {
            return element;
          }
        });

        this.breadcrumbs = [...this.defaultbreadcrumbs, ...breads];
      }
    },

    findParentId(id) {
      this.mapBreads.forEach((v, k) => {
        if (id == k) {
          this.labelId.push(k);
          if (v.parent_id !== null) {
            this.mapBreads.forEach((vv, kk) => {
              if (v.parent_id == vv.combine_id) {
                this.findParentId(kk);
              }
            });
          }
        }
      });
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