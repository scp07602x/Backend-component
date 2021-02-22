<template>
  <div>
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
                <h3 class="font-semibold text-lg text-gray-800">功能目錄</h3>
              </div>
              <a
                class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              >
                匯出Excel
              </a>
              <button
                class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              >
                新增
              </button>
            </div>
          </div>
          <div
            class="block w-full overflow-x-auto px-6 pb-6"
            v-for="item in menu"
            :key="item.id"
          >
            <div class="rounded-t mb-0 px-4 py-3 border bg-gray-100">
              <div class="flex flex-wrap items-center justify-between">
                <div
                  class="relative w-full px-4 max-w-full flex-grow flex-1 inline-block"
                >
                  <span
                    class="align-middle py-1 text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200"
                    >{{ item.name }}</span
                  >
                </div>
                <button
                  class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                >
                  新增
                </button>
              </div>
            </div>
            <!-- Projects table -->
            <table
              class="items-center w-full bg-transparent border-collapse table-fixed"
            >
              <thead>
                <tr>
                  <th
                    class="w-16 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                  >
                    項次
                  </th>
                  <th
                    class="w-1/4 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                  >
                    分頁名稱
                  </th>
                  <th
                    class="w-1/4 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                  >
                    分頁icon
                  </th>

                  <th
                    class="w-1/4 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                  >
                    路由名稱
                  </th>
                  <th
                    class="w-16 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                  >
                    啟用狀態
                  </th>
                  <th
                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                  >
                    功能選項
                  </th>
                  <th
                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                  >
                    最後修改時間
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(data, index) in item.children"
                  :key="data.id"
                  :class="[(index + 1) % 2 == 0 ? 'bg-gray-100' : '']"
                >
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4"
                  >
                    {{ index + 1 }}
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4"
                  >
                    {{ data.name }}
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4"
                  >
                    <i class="w-8" :class="data.icon"></i>
                    <span>{{ data.icon }}</span>
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4"
                  >
                    {{ data.subject_id }}
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4"
                  >
                    <i
                      @click="data.is_useful = !data.is_useful"
                      class="m-2 text-2xl"
                      :class="[
                        data.is_useful
                          ? 'fas fa-toggle-on text-green-500 hover:text-green-600'
                          : 'fas fa-toggle-off text-gray-600 hover:text-gray-400',
                      ]"
                    ></i>
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4 text-left"
                  >
                    <i class="far fa-edit text-green-500 m-2 text-base"></i>
                    <i class="far fa-trash-alt text-red-500 m-2 text-base"></i>
                  </td>
                  <td
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4"
                  >
                    {{ data.updated_at }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [],
    };
  },

  mounted() {
    this.$store.dispatch("isLoading", true);
    this.getMenu();
  },

  methods: {
    async getMenu() {
      let getMenu = await this.$store.dispatch("menuStore/getMenu");
      if (getMenu == true) {
        this.menu = this.$store.state.menuStore.menu;
      }
      this.$store.dispatch("isLoading", false);
    },
  },
};
</script>