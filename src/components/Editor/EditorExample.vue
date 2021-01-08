<template>
  <editor
    v-model="editorHtml"
    api-key="x31d29o1vpv6jn32urvl3v0dl0nzmtomwk2gblbldoot4yyq"
    :init="{
      height: 300,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount',
      ],
      toolbar:
        'undo redo | table | copy cut paste | formatselect | bold italic backcolor underline code| alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | removeformat wordcount | help',
    }"
  />
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "EditorExample",
  components: {
    editor: Editor,
  },

  props: {},

  data() {
    return {
      editorHtml: "",
    };
  },

  watch: {
    editorHtml: function () {
      this.$emit("editorHtml", this.editorHtml);
    },
  },

  methods: {
    clearEditor(data) {
      this.editorHtml = data;
    },
  },
};
</script>