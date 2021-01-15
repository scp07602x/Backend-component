<template>
  <div class="flex flex-wrap">
    <div class="w-full mb-12 px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-200"
      >
        <div class="rounded-t mb-0 px-4 py-3 border-0 bg-white">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 class="font-semibold text-lg text-gray-800">
                {{ title }}
              </h3>
            </div>
          </div>
        </div>

        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              頁面基本設定
            </h6>
            <div class="flex">
              <div class="flex flex-wrap lg:w-6/12 border">
                <div class="w-full lg:w-12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      活動名稱
                    </label>
                    <input
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="請輸入活動名稱"
                    />
                  </div>
                </div>
                <!-- <div class="w-full lg:w-6/12 px-4">
                <span
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                >
                  活動連結
                </span>
                <a href="https://www.google.com/">https://www.google.com/</a>
              </div> -->
                <div class="w-full lg:w-12 px-4">
                  <div class="relative w-full mb-3">
                    <span
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      活動開始時間
                    </span>
                    <DatePicker v-on:date="beforeDate" />
                  </div>
                </div>
                <div class="w-full lg:w-12 px-4">
                  <div class="relative w-full mb-3">
                    <span
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      活動結束時間
                    </span>
                    <DatePicker v-on:date="afterDate" />
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap lg:w-6/12 border">
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      首圖說明
                    </label>
                    <textarea
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      rows="10"
                      placeholder="請輸入首圖說明"
                    >
                    </textarea>
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      首圖
                    </label>
                    <input
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="請輸入頁面url"
                      v-model="indexImg"
                    />
                  </div>

                  <!-- 圖片未完成 -->
                  <!-- -------------------------------------------------------------------------------------------------------------------- -->
                  <div class="w-full px-4 flex justify-center border">
                    <div>
                      <img
                        alt="廣告首圖"
                        :src="indexImg"
                        class="shadow-xl rounded-full h-auto align-middle border-none absolute max-w-150-px"
                      />
                    </div>
                  </div>
                  <!-- -------------------------------------------------------------------------------------------------------------------- -->
                </div>
              </div>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400" />

            <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              頁面結構
            </h6>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3">
                  <span
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  >
                    HTML
                  </span>
                  <EditorExample v-on:editor="htmlContent" ref="htmlEditor" />
                </div>
              </div>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400" />
            <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              頁面排版
            </h6>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    CSS
                  </label>
                  <textarea
                    type="text"
                    class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    rows="10"
                    v-model="cssString"
                  >
                  </textarea>
                </div>
              </div>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400" />
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
          </form>
        </div>

        <!-- <div class="block w-full overflow-x-auto">
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
      </div>
    </div>
  </div>
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
      cssString: "",
      beforeDateTime: "",
      afterDateTime: "",
      indexImg: "",
    };
  },

  created() {
    // 判斷是帶參數的pageEditor還是新增的，若有帶參數則至後端撈資料
    if (Object.keys(this.$route.params).length !== 0) {
      console.log(true);
    }
  },

  computed: {
    title() {
      let listLength = this.$route.meta.breadcrumb;
      return listLength[listLength.length - 1].name;
    },
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
