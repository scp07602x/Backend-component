<template>
  <div>
    <div class="flex justify-between content-center items-center">
      <h6
        class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase inline-block"
      >
        {{ barlist.name }}
      </h6>
      <div>
        <button
          class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          @click="addTopbar()"
        >
          新增
        </button>
        <button
          class="bg-blue-400 text-white active:bg-blue-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        >
          編輯
        </button>
      </div>
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
            v-model="barinfo.name"
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
            v-model="barinfo.url"
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
            v-model="barinfo.iconUrl"
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
              class="w-16 px-6 align-middle border border-solid py-3 p-2 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center bg-gray-100 text-gray-600 border-gray-200"
            >
              項次
            </th>
            <th
              class="w-1/8 px-6 align-middle border border-solid py-3 p-2 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center bg-gray-100 text-gray-600 border-gray-200"
            >
              選項名稱
            </th>
            <th
              class="w-1/4 px-6 align-middle border border-solid py-3 p-2 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center bg-gray-100 text-gray-600 border-gray-200"
            >
              選項連結
            </th>
            <th
              class="w-1/4 px-6 align-middle border border-solid py-3 p-2 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center bg-gray-100 text-gray-600 border-gray-200"
            >
              fontawsome
            </th>
            <th
              class="w-32 px-6 align-middle border border-solid py-3 p-2 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center bg-gray-100 text-gray-600 border-gray-200"
            >
              icon圖示
            </th>
            <th
              class="w-24 px-6 align-middle border border-solid py-3 p-2 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center bg-gray-100 text-gray-600 border-gray-200"
            >
              啟用狀態
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 p-2 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center bg-gray-100 text-gray-600 border-gray-200"
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
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-2 text-center"
            >
              {{ index + 1 }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-2 text-center"
            >
              {{ item.name }}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-2 text-center"
            >
              <a
                :href="item.url"
                class="text-gray-600 hover:text-green-600 text-xs block no-underline font-semibold"
                >{{ item.url }}</a
              >
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-2 text-center"
            >
              <a
                :href="item.iconUrl"
                class="text-gray-600 hover:text-green-600 text-xs block no-underline font-semibold"
                >{{ item.iconUrl }}</a
              >
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-2 text-center"
            >
              <i class="w-8" :class="item.iconUrl"></i>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-2 text-center"
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
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-2 text-center"
            >
              <i
                class="far fa-edit text-green-500 m-2 text-base cursor-pointer"
                @click="editbarinfo(index)"
              ></i>

              <i
                class="far fa-trash-alt text-red-500 m-2 text-base cursor-pointer"
                @click="list.splice(index, 1)"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="my-6 border-b-1 border-gray-400" />
  </div>
</template>

<script>
export default {
  name: "footerbar",
  props: {
    barlist: Object,
  },
  data() {
    return {
      barinfo: {
        name: "",
        url: "",
        iconUrl: "",
        status: true,
      },

      list: this.barlist.list,
    };
  },

  methods: {
    addTopbar() {
      this.list.push(this.barinfo);
      this.barinfo = {
        name: "",
        url: "",
        iconUrl: "",
        status: true,
      };
    },

    editbarinfo(index) {
      // console.log(index);
      this.list[index] = {
        name: "大樹",
        url: "https://gogo.greattree.com.tw/greattree/",
        iconUrl: "",
        status: true,
      };
    },
  },
};
</script>
