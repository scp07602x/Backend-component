<template>
  <ValidationProvider
    tag="div"
    :rules="rules"
    :name="name"
    :vid="vid"
    v-slot="{ errors }"
  >
    <select
      :type="type"
      v-model="selectType"
      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-40 ease-linear transition-all duration-150"
    >
      <option value="" disabled selected hidden>{{ select.title }}</option>
      <option
        class="text-sm py-2 px-4 font-normal block w-40 whitespace-no-wrap bg-transparent text-gray-800"
        v-for="option in select.options"
        :key="option.type"
        :value="option.type"
      >
        {{ option.description }}
      </option>
    </select>

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
  name: "defaultDropdown",
  components: {
    ValidationProvider,
  },
  props: {
    select: Object,
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
  },

  data() {
    return {
      selectType: "",
    };
  },

  mounted() {
    this.selectType = this.value;
  },

  watch: {
    selectType(val) {
      this.$emit("input", val);
    },
  },
};
</script>
