<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center justify-between">
        <div
          class="relative w-full px-4 max-w-full flex-grow flex-1 inline-block"
        >
          <h3 class="font-semibold text-lg text-gray-800">
            {{ title }}
          </h3>
        </div>
        <router-link
          class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          to="/front/adpage/adpageEdit"
        >
          新增
        </router-link>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
            >
              項次
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
            >
              活動名稱
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
            >
              活動連結
            </th>

            <th
              class="px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
            >
              啟用時間
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
            >
              結束時間
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
            >
              啟用狀態
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-sm uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
            >
              功能選項
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in list"
            :key="item.id"
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
              {{ item.name }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4"
            >
              <a
                :href="item.url"
                class="text-gray-600 hover:text-green-600 text-sm block mb-4 no-underline font-semibold"
                >{{ item.url }}</a
              >
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4"
            >
              {{ item.start }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4"
            >
              {{ item.end }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4"
            >
              <i
                @click="item.status = !item.status"
                class="m-2 text-2xl"
                :class="[
                  item.status
                    ? 'fas fa-toggle-on text-green-500 hover:text-green-600'
                    : 'fas fa-toggle-off text-gray-600 hover:text-gray-400',
                ]"
              ></i>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4 text-left"
            >
              <router-link :to="`/front/adpage/adpageEdit/${item.id}`">
                <i class="far fa-edit text-green-500 m-2 text-base"></i>
              </router-link>

              <i class="far fa-trash-alt text-red-500 m-2 text-base"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import uuidv1 from "uuid/v1";

export default {
  data() {
    return {
      editPath: "",
      title: "",
      pageId: "",
      test: "",
      test2: "",
    };
  },

  computed: {
    list() {
      return this.$store.state.pageList.list;
    },
  },

  created() {
    let listLength = this.$route.meta.breadcrumb;
    this.title = listLength[listLength.length - 1].name;
    // this.editPath = this.$route.meta.editPath;
  },

  mounted() {
    if (this.pageId == "") {
      this.pageId = uuidv1();
    }

    // 封裝方法一:將$axios宣告為全域函式，使用this.$axios.get().then()
    // this.$axios
    //   .get("/user")
    //   // .then((data) => (this.$store.state.pageList.list = data));
    //   .then((data) => (this.test = data));

    // 封裝方法二:將所有api寫在./api/store.js中，並將$api宣告為全域函式，使用this.$api.getAdPageList().then();
    // this.$api.getAdPageList().then((data) => (this.test2 = data));
  },

  methods: {},
};
</script>
