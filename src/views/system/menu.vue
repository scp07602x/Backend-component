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
              <h3 class="font-semibold text-lg text-gray-800">{{ title }}</h3>
            </div>
            <router-link
              class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              to="/system/menu/add"
            >
              新增主分類
            </router-link>
            <!-- <button
              class="bg-blue-400 text-white active:bg-blue-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            >
              編輯
            </button> -->
            <button
              class="bg-yellow-500 text-white active:bg-yellow-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 cursor-pointer"
            >
              匯出Excel-未完成
            </button>
          </div>
        </div>
        <div
          class="block w-full overflow-x-auto px-6 pb-6"
          v-for="menu in menus"
          :key="menu.id"
        >
          <div class="rounded-t mb-0 px-4 py-2 border bg-gray-300">
            <div class="flex flex-wrap items-center justify-between">
              <div
                class="relative w-full px-4 max-w-full flex-grow flex-1 inline-block"
              >
                <span
                  class="align-middle py-1 text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200 text-center"
                  >{{ menu.name }}</span
                >
              </div>
              <button
                type="button"
                class="w-28 bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 text-center"
                @click="goSubCategory(menu.id, menu)"
              >
                {{ menu.name }}清單
              </button>
              <router-link
                class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                :to="`/system/menu/${menu.id}/category/add`"
              >
                新增子分類
              </router-link>
              <router-link
                class="bg-blue-400 text-white active:bg-blue-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                :to="`/system/menu/${menu.id}/edit`"
              >
                編輯主分類
              </router-link>
              <button
                class="bg-red-400 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                @click="deleteMenu(menu.id)"
              >
                刪除
              </button>
            </div>
          </div>
          <!-- Projects table -->
          <table
            class="items-center w-full bg-transparent border-collapse table-fixed border-r border-l border-b"
          >
            <thead>
              <tr>
                <th
                  class="w-20 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  項次
                </th>
                <th
                  class="w-32 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                >
                  分類id
                </th>
                <th
                  class="w-44 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                >
                  鍵值
                </th>
                <th
                  class="w-32 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  分頁名稱
                </th>
                <th
                  class="w-1/4 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                >
                  路由名稱
                </th>
                <th
                  class="w-32 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  系統權限
                </th>
                <th
                  class="w-20 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  icon 圖示
                </th>
                <!-- <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  最後修改時間
                </th> -->
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
                v-for="(data, index) in menu.children"
                :key="data.id"
                :class="[(index + 1) % 2 == 0 ? 'bg-gray-100' : '']"
              >
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  {{ index + 1 }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-left"
                >
                  {{ data.subject_id }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-left"
                >
                  {{ data.combine_id }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  {{ data.name }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-left"
                >
                  {{ data.category_route }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  <span>{{ data.default_type }}</span>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  <i class="w-8" :class="data.icon"></i>
                </td>
                <!-- <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  {{ data.updated_at }}
                </td> -->
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  <span>{{ useful(data.is_useful) }}</span>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center text-left"
                >
                  <router-link
                    class="text-orange-500 bg-transparent border border-solid border-orange-500 active:bg-orange-200 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    :to="`/system/menu/category/${data.id}/tab`"
                  >
                    <i class="far fa-edit text-orange-500 text-base"></i>
                    查閱子頁面
                  </router-link>
                  <router-link
                    class="text-blue-400 bg-transparent border border-solid border-blue-400 active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    :to="`/system/menu/category/${data.id}/edit`"
                  >
                    <i class="far fa-edit text-blue-400 text-base"></i> 編輯
                  </router-link>
                  <button
                    class="text-red-500 bg-transparent border border-solid border-red-500 active:bg-red-200 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    @click="deleteMenu(data.id)"
                  >
                    <i class="far fa-trash-alt text-red-500 text-base"></i> 刪除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {
    this.$store.dispatch("common/fullLoading", true);
  },

  mounted() {
    this.getMenu();
  },

  computed: {
    title() {
      return this.$route.name.split("-").first();
    },

    menus() {
      return this.$store.state.menu.list;
    },
  },

  methods: {
    getMenu() {
      this.$api.serviceMenu().then((response) => {
        this.$store.dispatch("menu/list", response);
        this.$store.dispatch("common/isLoading", false);
        this.$store.dispatch("common/fullLoading", false);
      });
    },

    goSubCategory(id, data) {
      this.$store.dispatch("menu/subCategory", data);
      this.$router.replace({
        path: `/system/menu/${id}/category`,
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

    deleteMenu(id) {
      this.$store.dispatch("common/isLoading", true);
      this.$api.serviceMenuIdDelete(id).then(() => {
        this.getMenu();
      });
    },
  },
};
</script>