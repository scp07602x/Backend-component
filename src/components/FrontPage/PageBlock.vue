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
                首頁設定
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
              <div class="flex flex-wrap lg:w-6/12">
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
              <div class="flex flex-wrap lg:w-6/12">
                <div class="w-full lg:w-12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      頁首說明
                    </label>
                    <textarea
                      type="text"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      rows="5"
                      placeholder="請輸入頁首說明"
                    >
                    </textarea>
                  </div>
                  <div class="relative w-full mb-3">
                    <span
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      前台顯示
                    </span>
                    <div class="flex justify-start items-center">
                      <div class="lg:w-32	">
                        <input
                          id="radioTrue"
                          type="radio"
                          class="inline-block"
                          value="true"
                          v-model="isCorrect"
                        />
                        <label
                          for="radioTrue"
                          class="inline-block uppercase text-gray-700 text-base font-bold ml-2 mr-4"
                          >顯示</label
                        >
                      </div>
                      <div class="lg:w-32	">
                        <input
                          id="radioFalse"
                          type="radio"
                          class="inline-block"
                          value="false"
                          v-model="isCorrect"
                        />
                        <label
                          for="radioFalse"
                          class="inline-block uppercase text-gray-700 text-base font-bold m-2"
                          >不顯示</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400" />

            <h6 class="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              頁首圖片
            </h6>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-12 px-4">
                <div class="relative w-full mb-3">
                  <div class="flex justify-between content-center items-center">
                    <span
                      class="inline-block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      圖片連結
                    </span>
                    <button
                      class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mb-2"
                      type="button"
                      @click="pushImg()"
                    >
                      增加
                    </button>
                  </div>
                  <input
                    type="text"
                    class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="請輸入頁面url"
                    v-model="imgPath"
                  />
                </div>
              </div>
              <div class="w-full lg:w-12 px-4">
                <div class="relative w-full mb-3" v-if="image.length > 0">
                  <span
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  >
                    URL
                  </span>
                  <ul class="flex flex-wrap">
                    <li
                      v-for="item in image"
                      :key="item.id"
                      class="w-full lg:w-3/12 relative px-3"
                    >
                      <a
                        :href="item.path"
                        class="text-gray-700 hover:text-gray-900 text-sm font-semibold inline-block"
                        target="_blank"
                      >
                        <img
                          class="w-full h-56 object-cover object-center"
                          :src="item.path"
                          alt="avatar"
                        />
                        {{ item.path }}
                      </a>
                      <div
                        class="absolute bg-white top-0 w-10 h-10 flex items-center justify-center rounded-full shadow-lg cursor-pointer border"
                        style="top: -0.75rem; right: -0.25rem"
                        @click="removeImg(item.id)"
                      >
                        <i class="far fa-trash-alt"></i>
                      </div>
                    </li>
                  </ul>
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
      imgPath: "",
      image: [],
      isCorrect: "",
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
      return this.$common.getTitleByRoute(this.$route);
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

    pushImg() {
      let timeStamp = Math.floor(Date.now());
      if (this.imgPath !== "") {
        this.image.push({ id: timeStamp, path: this.imgPath.trim() });
        this.imgPath = "";
      }
    },

    removeImg(id) {
      this.image = this.image.filter((data) => data.id != id);
      console.log(this.image);
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
