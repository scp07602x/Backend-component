<template>
  <ValidationProvider
    tag="div"
    :rules="rules"
    :name="name"
    :vid="vid"
    v-slot="{ errors }"
    :class="[styleClass]"
  >
    <input
      :type="type"
      v-model="currentValue"
      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline ease-linear transition-all duration-150"
      :class="[styleClass]"
    />
    <span
      class="text-xs font-bold mx-4"
      style="color: rgba(249, 32, 32, 0.7)"
      >{{ errors[0] }}</span
    >
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  name: "TextInput",
  components: {
    ValidationProvider,
  },
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    rules: {
      type: [String, Object],
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    vid: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: "text",
    },
    classStyle: {
      type: String,
      default: "w-32",
    },
  },
  data() {
    return {
      currentValue: "",
      styleClass: "",
    };
  },

  mounted() {
    this.currentValue = this.value;
    this.styleClass = this.classStyle;
  },

  watch: {
    currentValue(val) {
      this.$emit("input", val);
    },
  },
};
</script>

