<template>
  <div>
    <date-picker
      v-model="date"
      type="datetime"
      :default-value="new Date().setHours(8, 0, 0, 0)"
      :disabled-date="notBeforeToday"
    ></date-picker>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: { DatePicker },
  data() {
    return {
      date: "",
    };
  },

  watch: {
    date: function () {
      this.$emit("date", this.date);
    },
  },

  mounted() {
    let dateDiv = document.querySelector(".mx-datepicker");
    dateDiv.classList.remove("mx-datepicker");
    let dateInput = document.querySelector(".mx-input");
    dateInput.classList.add(
      "px-3",
      "py-3",
      "placeholder-gray-400",
      "text-gray-700",
      "bg-white",
      "rounded",
      "text-sm",
      "shadow",
      "focus:outline-none",
      "focus:shadow-outline",
      "w-full",
      "ease-linear",
      "transition-all",
      "duration-150"
    );
    dateInput.classList.remove("mx-input");
  },

  methods: {
    notBeforeToday(date) {
      return date < new Date(new Date().setHours(0, 0, 0, 0));
    },
  },
};
</script>

<style scoped>
</style>