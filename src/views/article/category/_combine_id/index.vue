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
              :to="{
                name: addRoute.id,
                params: { combine_id: pageNode.combine_id },
              }"
            >
              新增文章
            </router-link>
          </div>
        </div>
        <div class="block w-full overflow-x-auto px-6 pb-6">
          <div class="rounded-t mb-0 px-4 py-2 border bg-gray-300">
            <div class="flex flex-wrap items-center justify-between">
              <div
                class="relative w-full px-4 py-1 max-w-full flex-grow flex-1 inline-block"
              >
                <span
                  class="align-middle py-1 text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200 text-center"
                  >{{ title }}列表</span
                >
              </div>
            </div>
          </div>
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
                  class="w-1/4 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                >
                  文章標題
                </th>
                <th
                  class="w-20 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  啟用狀態
                </th>
                <th
                  class="w-20 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  是否置頂
                </th>
                <th
                  class="w-40 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  文章建立日期
                </th>
                <th
                  class="w-40 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  最後修改日期
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
                v-for="(category, index) in categories"
                :key="category.id"
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
                  {{ category.title }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  111
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  222
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  {{ category.created_at }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  {{ category.updated_at }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center text-left"
                >
                  <router-link
                    class="text-blue-400 bg-transparent border border-solid border-blue-400 active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    :to="{
                      name: editRoute.id,
                      params: {
                        combine_id: pageNode.combine_id,
                        article_id: category.id,
                      },
                    }"
                  >
                    <i class="far fa-edit text-blue-400 text-base"></i> 編輯文章
                  </router-link>
                  <button
                    class="text-red-500 bg-transparent border border-solid border-red-500 active:bg-red-200 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    @click="deleteArticle(category)"
                  >
                    <i class="far fa-trash-alt text-red-500 text-base"></i>
                    刪除文章
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
      style="width: 20%; margin: 5vh 0 0 30%"
      v-if="showModal"
    >
      <div
        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
      >
        <div class="flex items-start justify-between px-3 py-2 rounded-t">
          <h3 class="text-lg font-semibold px-4 py-2">再次確認</h3>
          <button
            class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            type="button"
            @click="showModal = false"
          >
            <span
              class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
            >
              ×
            </span>
          </button>
        </div>
        <hr class="md:min-w-full" />
        <div class="relative px-6 py-4 flex-auto">
          <div class="block w-full overflow-x-auto pb-6">
            <div class="flex flex-wrap items-center justify-between">
              <div
                class="relative w-full max-w-full flex-grow flex-1 inline-block"
              >
                <span
                  class="align-middle py-1 text-base uppercase border-l-0 border-r-0 font-semibold text-left text-red-500 border-gray-200 text-center"
                  >是否刪除文章 :
                </span>
                <span
                  class="align-middle py-1 text-base uppercase border-l-0 border-r-0 font-semibold text-leftborder-gray-200 text-center"
                >
                  {{ deleteItem.title }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="relative flex-auto">
          <div class="block w-full overflow-x-auto pb-4">
            <div class="flex flex-wrap items-center justify-between">
              <div class="w-full max-w-full flex justify-end">
                <button
                  type="button"
                  class="text-blue-400 bg-transparent border border-solid border-blue-400 active:bg-blue-200 font-bold uppercase text-base px-4 py-2 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 m-2"
                  @click="showModal = false"
                >
                  取消刪除
                </button>
                <button
                  class="text-red-500 bg-transparent border border-solid border-red-500 active:bg-red-200 font-bold uppercase text-base px-4 py-2 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 m-2 mr-4"
                  type="button"
                  @click="comfirmDelete()"
                >
                  確認刪除
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showModal"
      class="opacity-25 fixed inset-0 bg-black w-full"
      style="
        background: rgba(0, 0, 0, 0.3);
        height: 100%;
        weight: 100%;
        top: 0;
        left: 0;
        z-index: 40;
      "
    ></div>
    <div
      class="text-white px-6 py-4 border-0 rounded fixed mb-4 bg-red-500"
      style="width: 82.5%; z-index: 500; transition: all 0.3s"
      :style="{ 'margin-top': [alertOpen ? '-7.7%' : '-12%'] }"
    >
      <span class="text-xl inline-block mr-4 align-middle">
        <i class="fas fa-bell"></i>
      </span>
      <span class="inline-block align-middle">
        <b class="capitalize">lightBlue!</b> This is a lightBlue alert - check
        it out!
      </span>
      <!-- <button
        class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-4 outline-none focus:outline-none"
        v-on:click="closeAlert()"
      >
        <span>×</span>
      </button> -->
    </div>
    <button @click="alertOpen = !alertOpen">點我</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      addRoute: {},
      pageNode: {},
      editRoute: {},
      deleteItem: {},
      showModal: false,
      alertOpen: true,
    };
  },

  created() {
    this.$store.dispatch("common/fullLoading", true);
    this.getDataWithCategoryId(this.$route.params.combine_id);
    this.getAddAdndEditId();
  },

  watch: {
    $route() {
      this.$store.dispatch("common/fullLoading", true);
      this.getDataWithCategoryId(this.$route.params.combine_id);
      this.getAddAdndEditId();
    },
  },

  computed: {
    title() {
      return this.$common.getTitleByRoute(this.$route);
    },

    combine_id() {
      return this.$route.params.combine_id;
    },

    breadMap() {
      return this.$store.state.common.breadcrumbs;
    },
  },

  methods: {
    getDataWithCategoryId(id) {
      this.$api.serviceArticleCategoryCombineIdIndex(id).then((response) => {
        this.categories = response;
        this.$store.dispatch("common/fullLoading", false);
      });
    },

    getAddAdndEditId() {
      const newMap = this.$store.state.common.breadcrumbs;
      const { combine_id, subject_id } = newMap.get(this.$route.name);
      this.$api.serviceCarticleTopIndex().then((response) => {
        this.pageNode = response.find((child) => {
          return child.combine_id == subject_id;
        });
      });
      const add = Array.from(newMap.values()).find((child) => {
        return (
          child.combine_id.match(combine_id) &&
          child.combine_id.match(/add$/i) &&
          child.category_route
        );
      });
      const edit = Array.from(newMap.values()).find((child) => {
        return (
          child.combine_id.match(combine_id) &&
          child.combine_id.match(/edit$/i) &&
          child.category_route
        );
      });

      this.addRoute = add;
      this.editRoute = edit;
    },

    deleteArticle(data) {
      this.deleteItem = data;
      this.showModal = true;
    },

    comfirmDelete() {
      this.$store.dispatch("common/isLoading", true);
      this.$api
        .serviceArticleCategoryCombineIdArticleIdDelete(
          this.$route.params.combine_id,
          this.deleteItem.id
        )
        .then((response) => {
          console.log(response);
          this.getDataWithCategoryId(this.$route.params.combine_id);
          this.showModal = false;
          this.$store.dispatch("common/isLoading", false);
        });
    },
  },
};
</script>