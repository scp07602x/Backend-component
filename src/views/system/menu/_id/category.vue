<template>
  <div class="flex flex-wrap">
    <div class="w-full mb-12 px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
      >
        <div class="rounded-t mb-0 px-4 py-3 border-0">
          <div class="flex flex-wrap items-center justify-between">
            <div
              class="relative w-full px-4 max-w-full flex-grow flex-1 inline-block"
            >
              <h3 class="font-semibold text-lg py-1 text-gray-800">
                {{ title }}
              </h3>
            </div>
            <!-- <router-link
              class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              to="/system/menu/add"
            >
              新增主分類
            </router-link> -->
            <!-- <button
              class="bg-blue-400 text-white active:bg-blue-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            >
              編輯
            </button> -->
          </div>
        </div>
        <div class="block w-full overflow-x-auto px-6 pb-6">
          <div class="rounded-t mb-0 px-4 py-3 border bg-gray-300">
            <div class="flex flex-wrap items-center justify-between">
              <div
                class="relative w-full px-4 max-w-full flex-grow flex-1 inline-block"
              >
                <span
                  class="align-middle py-1 text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200 text-center"
                  >功能目錄子分類</span
                >
              </div>
            </div>
          </div>
          <!-- Projects table -->
          <!-- <div class="overflow-x-auto"> -->
          <table
            class="items-center bg-transparent border-collapse table-fixed border-r border-l border-b w-full"
          >
            <thead>
              <tr>
                <th
                  class="w-20 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  項次
                </th>
                <th
                  class="w-44 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                >
                  返回路由
                </th>
                <th
                  class="w-24 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  分頁名稱
                </th>
                <th
                  class="w-24 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  分頁類別
                </th>
                <th
                  class="w-1/4 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                >
                  鍵值
                </th>
                <th
                  class="w-48 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                >
                  分頁路由
                </th>
                <th
                  class="w-24 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  啟用狀態
                </th>
                <th
                  class="w-1/4 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  功能選項
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(menu, index) in menus"
                :key="menu.id"
                class="border-b"
                :class="[tebColor(menu.category)]"
              >
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  {{ index + 1 }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-left"
                >
                  <div class="w-full whitespace-normal break-words break-all">
                    {{ menu.return_route }}
                  </div>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  {{ menu.name }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  {{ menu.category }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-left"
                >
                  <div class="w-full whitespace-normal break-words break-all">
                    <span>{{ menu.combine_id }}</span>
                  </div>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-left"
                >
                  <div class="w-full whitespace-normal break-words break-all">
                    {{ menu.category_route }}
                  </div>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  <span>{{ useful(menu.is_useful) }}</span>
                </td>

                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center text-left"
                  v-if="menu.category == 'tab'"
                >
                  <router-link
                    class="text-blue-400 bg-transparent border border-solid border-blue-400 active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    :to="`/system/menu/category/tab/${menu.id}/edit`"
                  >
                    <i class="far fa-edit text-blue-400 text-base"></i>
                    編輯頁籤
                  </router-link>
                  <router-link
                    class="text-green-500 bg-transparent border border-solid border-green-500 active:bg-green-200 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    :to="`/system/menu/category/tab/${menu.id}/page/add`"
                  >
                    <i class="fas fa-file text-green-500 text-base"></i>
                    新增分頁
                  </router-link>
                  <button
                    class="text-red-500 bg-transparent border border-solid border-red-500 active:bg-red-200 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    @click="deleteCategory(menu.id)"
                  >
                    <i class="far fa-trash-alt text-red-500 text-base"></i>
                    刪除頁籤
                  </button>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center text-left"
                  v-else-if="menu.category == 'page'"
                >
                  <router-link
                    class="bg-blue-400 text-white active:bg-blue-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    :to="`/system/menu/category/page/${menu.id}/edit`"
                  >
                    <i class="far fa-edit text-white text-base"></i>
                    編輯分頁
                  </router-link>
                  <router-link
                    class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    :to="`/system/menu/category/${menu.id}/tab/add`"
                  >
                    <i class="fas fa-file text-white text-base"></i> 新增頁籤
                  </router-link>
                  <button
                    class="bg-red-400 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    @click="deleteCategory(menu.id)"
                  >
                    <i class="far fa-trash-alt text-white text-base"></i>
                    刪除分頁
                  </button>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center text-left"
                  v-if="menu.category == 'indexTab'"
                >
                  <router-link
                    class="text-green-500 bg-transparent border border-solid border-green-500 active:bg-green-200 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    :to="`/system/menu/category/tab/${menu.id}/page/add`"
                  >
                    <i class="fas fa-file text-green-500 text-base"></i>
                    新增分頁
                  </router-link>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center text-left"
                  v-else-if="menu.category == 'index'"
                >
                  <router-link
                    class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    :to="`/system/menu/category/${menu.id}/tab/add`"
                  >
                    <i class="fas fa-file text-white text-base"></i> 新增頁籤
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { menus: {}, categoryNumber: 0 };
  },

  mounted() {
    this.$store.dispatch("common/isLoading", true);
    this.getMenuCategory(this.$route.params.id);
  },

  computed: {
    title() {
      return this.$route.name.split("-").first();
    },
  },

  beforeMount() {
    this.getMenuWithId(this.$route.params.id);
  },

  methods: {
    getMenuWithId(id) {
      this.$api.serviceMenuId(id).then((element) => {
        this.$store.dispatch("menu/subPagePath", `${element.category_route}/`);
      });
    },

    getMenuCategory(id) {
      this.$api.serviceMenuCategoryIdIndex(id).then((response) => {
        let categoryMap = new Map();
        this.categoryMapProcessing(response, categoryMap);
        this.menus = Array.from(categoryMap.values());
        this.$store.dispatch("common/isLoading", false);
      });
    },

    categoryMapProcessing(data, categoryMap) {
      data.forEach((element) => {
        categoryMap.set(this.categoryNumber, element);
        this.categoryNumber++;
        if (element.children.length > 0) {
          this.categoryMapProcessing(element.children, categoryMap);
        }
      });
    },

    deleteCategory(id) {
      this.$store.dispatch("common/isLoading", true);
      this.$api.serviceMenuIdDelete(id).then(() => {
        this.getMenuCategory(this.$route.params.id);
      });
    },

    useful(data) {
      switch (data) {
        case 0:
          return "未啟用";
        case 1:
          return "啟用";
        case 2:
          return "開發中";
      }
    },

    tebColor(key) {
      switch (key) {
        case "index":
          return "bg-white";
        case "indexTab":
          return "bg-red-50";
        case "tab":
          return "bg-yellow-50";
        case "page":
          return "bg-indigo-50";
        default:
          return "bg-gray-100";
      }
    },
  },
};
</script>