<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
      >
        <EditorExample v-on:editorHtml="editor" ref="htmlEditor" />
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

export default {
  components: {
    EditorExample,
  },

  data() {
    return {
      editorHtml: "",
    };
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