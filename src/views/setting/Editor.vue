<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center justify-between">
        <div
          class="relative w-full px-4 max-w-full flex-grow flex-1 inline-block"
        >
          <h3 class="font-semibold text-lg text-gray-800">{{ title }}111111</h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <div class="flex flex-wrap">
        <div class="w-full px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded"
          >
            <div class="flex items-center ml-3">
              <div
                class="md:block text-left text-gray-700 whitespace-no-wrap text-base uppercase font-bold px-0"
              >
                活動名稱 :
              </div>
              <div class="pt-0 pr-3 pl-3 mt-3">
                <input
                  type="text"
                  placeholder="請輸入活動名稱"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div class="flex items-center ml-3">
              <div
                class="md:block text-left text-gray-700 whitespace-no-wrap text-base uppercase font-bold px-0"
              >
                開始日期 :
              </div>
              <div class="pt-0 p-3 mt-3">
                <DatePicker v-on:date="beforeDate" />
              </div>
            </div>
            <div class="flex items-center ml-3">
              <div
                class="md:block text-left text-gray-700 whitespace-no-wrap text-base uppercase font-bold px-0"
              >
                結束日期 :
              </div>
              <div class="pt-0 p-3 mt-3">
                <DatePicker v-on:date="afterDate" />
              </div>
            </div>
            <div class="pr-4 pl-4 pb-4">
              <div
                class="md:block text-left text-gray-700 whitespace-no-wrap text-base uppercase font-bold px-0"
              >
                HTML :
              </div>
              <EditorExample v-on:editor="htmlContent" ref="htmlEditor" />
            </div>

<div class="pr-4 pl-4 pb-4">
              <div
                class="md:block text-left text-gray-700 whitespace-no-wrap text-base uppercase font-bold px-0"
              >
                HTML :
              </div>
              <EditorExample v-on:editor="htmlContent" ref="htmlEditor" />
            </div>

            <div class="w-full px-4 text-right">
              <button
                @click="clear()"
                class="flex-1 m-4 bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                清空
              </button>
              <button
                @click="send()"
                class="flex-1 m-4 bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                送出
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects table -->
      <!-- <table class="items-center w-full bg-transparent border-collapse">
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
              <router-link :to="`/setting/adpage/editor/${item.id}`">
                <i class="far fa-edit text-green-500 m-2 text-base"></i>
              </router-link>

              <i class="far fa-trash-alt text-red-500 m-2 text-base"></i>
            </td>
          </tr>
        </tbody>
      </table> -->
    </div>
  </div>

  <!-- <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
      >
        <div class="flex items-center ml-3">
          <div
            class="md:block text-left text-gray-700 whitespace-no-wrap text-base uppercase font-bold px-0"
          >
            活動名稱 :
          </div>
          <div class="pt-0 pr-3 pl-3 mt-3">
            <input
              type="text"
              placeholder="請輸入活動名稱"
              class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div class="flex items-center ml-3">
          <div
            class="md:block text-left text-gray-700 whitespace-no-wrap text-base uppercase font-bold px-0"
          >
            開始日期 :
          </div>
          <div class="pt-0 p-3 mt-3">
            <DatePicker v-on:date="beforeDate" />
          </div>
        </div>
        <div class="flex items-center ml-3">
          <div
            class="md:block text-left text-gray-700 whitespace-no-wrap text-base uppercase font-bold px-0"
          >
            結束日期 :
          </div>
          <div class="pt-0 p-3 mt-3">
            <DatePicker v-on:date="afterDate" />
          </div>
        </div>
        <div class="pr-4 pl-4 pb-4">
          <div
            class="md:block text-left text-gray-700 whitespace-no-wrap text-base uppercase font-bold px-0"
          >
            HTML :
          </div>
          <EditorExample v-on:editor="htmlContent" ref="htmlEditor" />
        </div>
        <div class="w-full px-4 text-right">
          <button
            @click="clear()"
            class="flex-1 m-4 bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            清空
          </button>
          <button
            @click="send()"
            class="flex-1 m-4 bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            送出
          </button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import EditorExample from "@/components/Editor/EditorExample.vue";
import DatePicker from "@/components/Date/DatePicker.vue";

export default {
  components: {
    EditorExample,
    DatePicker,
  },

  data() {
    return {
      htmlString: "",
      // contentCss: "",
      beforeDateTime: "",
      afterDateTime: "",
    };
  },

  created() {
    // 判斷是帶參數的pageEditor還是新增的，若有帶參數則至後端撈資料
    if (Object.keys(this.$route.params).length !== 0) {
      console.log(true);
    }
  },

  methods: {
    htmlContent(data) {
      this.htmlString = data;
    },

    beforeDate(data) {
      this.beforeDateTime = data;
    },

    afterDate(data) {
      this.afterDateTime = data;
    },

    send() {
      console.log(this.editorHtml);
    },

    clear() {
      this.editorHtml = "";
      this.$refs.htmlEditor.clearEditor(this.editorHtml);
    },
  },
};
</script>
