<template>
  <Tinymce
    v-model="currentValue"
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
import Tinymce from "@tinymce/tinymce-vue";

export default {
  name: "Editor",
  components: {
    Tinymce,
  },

  props: {
    content: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      currentValue: "",
    };
  },

  mounted() {
    this.currentValue = this.content;
  },

  watch: {
    currentValue(val) {
      this.$emit("input", val);
    },
  },
};
</script>