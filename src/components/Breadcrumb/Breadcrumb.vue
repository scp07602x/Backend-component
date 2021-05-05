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
    this.getBreadcrumbs();
  },

  watch: {
    $route() {
      this.getBreadcrumbs();
    },
  },

  computed: {
    breadsMap() {
      return this.$store.state.common.breadcrumbs;
    },

    pathId() {
      return this.$route.params.id;
    },
  },

  methods: {
    getBreadcrumbs() {
      this.labelId = [];
      if (this.$route.name == "dashboard") {
        this.breadcrumbs = this.defaultbreadcrumbs;
      } else {
        if (this.pathId) {
          this.findParentId(this.$route.params.id);
        }

        let breadIds = this.labelId.reverse();
        let num = 0;
        let breads = this.$route.meta.breadcrumbs.map((element) => {
          if (element.path.match(/:/) !== null) {
            let pathWithId = this.$common.stringReplace(
              element.path,
              breadIds[num],
              "/",
              ":"
            );
            num++;
            return { path: pathWithId, name: element.name };
          } else {
            return element;
          }
        });

        this.breadcrumbs = [...this.defaultbreadcrumbs, ...breads];
      }
    },

    findParentId(paramsId) {
      const { id, parent_id } = this.breadsMap.get(paramsId);

      if (id == paramsId) {
        this.labelId.push(id);
        if (parent_id) {
          this.breadsMap.forEach((values, key) => {
            if (parent_id == values.combine_id) {
              this.findParentId(key);
            }
          });
        }
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