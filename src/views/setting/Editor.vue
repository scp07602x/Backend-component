<template>
  <div class="flex flex-wrap">
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
            活動名稱 :
          </div>
          <div class="pt-0 p-3 mt-3">
            <input
              type="text"
              placeholder="請輸入活動名稱"
              class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <!-- <DatePicker /> -->

        <div class="pr-4 pl-4 pb-4">
          <EditorExample v-on:editorHtml="editor" ref="htmlEditor" />
        </div>
        <div class="pr-4 pl-4 pb-4">
          <EditorExample v-on:editorHtml="editor" ref="htmlEditor" />
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
</template>
<script>
import EditorExample from "@/components/Editor/EditorExample.vue";
// import DatePicker from "@/components/Date/DatePicker.vue";

export default {
  components: {
    EditorExample,
    // DatePicker,
  },

  data() {
    return {
      editorHtml: "",
    };
  },

  created() {
    // 判斷是帶參數的pageEditor還是新增的，若有帶參數則至後端撈資料
    if (Object.keys(this.$route.params).length !== 0) {
      console.log(true);
    }
  },

  methods: {
    editor(data) {
      this.editorHtml = data;
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