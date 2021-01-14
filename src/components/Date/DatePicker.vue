<template>
  <div>
    <date-picker
      v-model="date"
      type="datetime"
      :default-value="new Date().setHours(8, 0, 0, 0)"
      :disabled-date="notBeforeToday"
      value-type="format"
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

  methods: {
    notBeforeToday(date) {
      return date < new Date(new Date().setHours(0, 0, 0, 0));
    },
  },
};
</script>