<template>
  <div class="flex flex-wrap">
    <div class="w-full mb-12 px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-200"
      >
        <div class="rounded-t mb-0 px-4 py-3 border-0 bg-white">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 class="font-semibold text-lg text-gray-800">首頁設定</h3>
            </div>
          </div>
        </div>

        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <div class="flex justify-between content-center items-center">
              <h6
                class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase inline-block"
              >
                左側TOP BAR
              </h6>
              <button
                class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mb-2 mr-4"
                type="button"
                @click="addLeftTopbar()"
              >
                增加
              </button>
            </div>
            <div class="flex flex-nowrap lg:w-12/12">
              <div class="w-full lg:w-12 px-4">
                <div class="relative w-full mb-3">
                  <span
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    選項名稱
                  </span>
                  <input
                    type="text"
                    class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="請輸入選項名稱"
                    v-model="topbarleft.name"
                  />
                </div>
              </div>
              <div class="w-full lg:w-12 px-4">
                <div class="relative w-full mb-3">
                  <span
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    選項連結
                  </span>
                  <input
                    type="text"
                    class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="請輸入選項url"
                    v-model="topbarleft.url"
                  />
                </div>
              </div>
              <div class="w-full lg:w-12 px-4">
                <div class="relative w-full mb-3">
                  <span
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    選項icon
                  </span>
                  <input
                    type="text"
                    class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="請輸入icon圖片連結"
                    v-model="topbarleft.iconUrl"
                  />
                </div>
              </div>
            </div>
            <div class="lg:w-12/12 px-4">
              <table
                class="items-center w-full bg-transparent border-collapse table-fixed"
              >
                <thead>
                  <tr>
                    <th
                      class="w-1/4 px-6 align-middle border border-solid py-1 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                    >
                      選項名稱
                    </th>
                    <th
                      class="w-1/4 px-6 align-middle border border-solid py-1 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                    >
                      選項連結
                    </th>
                    <th
                      class="w-1/4 px-6 align-middle border border-solid py-1 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                    >
                      icon連結
                    </th>
                    <th
                      class="px-6 align-middle border border-solid py-1 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                    >
                      啟用狀態
                    </th>
                    <th
                      class="px-6 align-middle border border-solid py-1 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                    >
                      功能選項
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in topbar.left"
                    :key="item.id"
                    :class="[(index + 1) % 2 == 0 ? 'bg-gray-100' : '']"
                  >
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap"
                    >
                      {{ item.name }}
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap"
                    >
                      <a
                        :href="item.url"
                        class="text-gray-600 hover:text-green-600 text-xs block no-underline font-semibold"
                        >{{ item.url }}</a
                      >
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap"
                    >
                      <a
                        :href="item.iconUrl"
                        class="text-gray-600 hover:text-green-600 text-xs block no-underline font-semibold"
                        >{{ item.iconUrl }}</a
                      >
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap"
                    >
                      <i
                        @click="item.status = !item.status"
                        class="m-2 text-2xl cursor-pointer"
                        :class="[
                          item.status
                            ? 'fas fa-toggle-on text-green-500 hover:text-green-600'
                            : 'fas fa-toggle-off text-gray-600 hover:text-gray-400',
                        ]"
                      ></i>
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap text-left"
                    >
                      <i
                        class="far fa-edit text-green-500 m-2 text-base cursor-pointer"
                        @click="editTopbarLeft(index)"
                      ></i>

                      <i
                        class="far fa-trash-alt text-red-500 m-2 text-base cursor-pointer"
                        @click="topbar.left.splice(index, 1)"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400" />
            <div class="w-full px-4 text-right">
              <button
                @click="send()"
                class="flex-1 m-4 bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                更新
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      topbarleft: {
        name: "",
        url: "",
        iconUrl: "",
        status: true,
      },
      topbar: {
        left: [
          {
            name: "大樹官網",
            url: "https://www.greattree.com.tw/",
            iconUrl: "",
            status: true,
          },
          {
            name: "大樹健康購物網",
            url: "https://shop.greattree.com.tw/greattree/",
            iconUrl: "",
            status: true,
          },
        ],
      },
    };
  },

  created() {},

  computed: {
  },

  methods: {
    addLeftTopbar() {
      this.topbar.left.push(this.topbarleft);
      this.topbarleft = {
        name: "",
        url: "",
        iconUrl: "",
        status: true,
      };
    },

    editTopbarLeft(index) {
      console.log(index);
      this.topbar.left[index] = {
        name: "大樹",
        url: "https://gogo.greattree.com.tw/greattree/",
        iconUrl: "",
        status: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  &valid {
    border: 2px solid green;
  }
  &invalid {
    border: 2px solid red;
  }
}
</style>
