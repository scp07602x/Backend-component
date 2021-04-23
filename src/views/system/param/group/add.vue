<template>
  <div class="flex flex-wrap">
    <div class="w-full mb-12 px-4">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
      >
        <div class="rounded-t mb-0 px-4 py-3 border-0">
          <div class="flex flex-wrap items-center justify-between">
            <div
              class="relative w-full px-4 max-w-full flex-grow flex-1 inline-block"
            >
              <h3 class="font-semibold text-lg text-gray-800">{{ title }}</h3>
            </div>
            <button
              class="bg-red-400 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              @click="clearAdd()"
            >
              清空重填
            </button>
          </div>
        </div>
        <div>
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(groupAdd)">
              <div class="block w-full overflow-x-auto px-6 pb-6">
                <div class="rounded-t mb-0 px-4 py-3 border bg-gray-300">
                  <div class="flex flex-wrap items-center justify-between">
                    <div
                      class="relative w-full px-2 max-w-full flex-grow flex-1 inline-block"
                    >
                      <span
                        class="align-middle py-1 text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200 text-center"
                        >群組代碼</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : group_code ;
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="items-center w-full bg-transparent border-collapse border-r border-l border-b"
                >
                  <div
                    class="w-full px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                  >
                    <span
                      class="inline-block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      群組代碼 :
                    </span>
                    <TextInput
                      class="inline-block px-4"
                      v-model="group_code"
                      name="群組代碼"
                      :key="componentKey"
                      rules="required"
                      classStyle="w-full"
                    />
                  </div>
                </div>
              </div>
              <div class="block w-full overflow-x-auto px-6 pb-6">
                <div class="rounded-t mb-0 px-4 py-3 border bg-gray-300">
                  <div class="flex flex-wrap items-center justify-between">
                    <div
                      class="relative w-full px-2 max-w-full flex-grow flex-1 inline-block"
                    >
                      <span
                        class="align-middle py-1 text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200 text-center"
                        >備註說明</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : memo ;
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="items-center w-full bg-transparent border-collapse border-r border-l border-b"
                >
                  <div
                    class="w-full px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                  >
                    <span
                      class="inline-block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      備註說明 :
                    </span>
                    <TextInput
                      class="inline-block px-4"
                      v-model="memo"
                      name="備註說明"
                      :key="componentKey"
                      type="text-area"
                      classStyle="w-full"
                    />
                  </div>
                </div>
              </div>
              <div class="block w-full overflow-x-auto px-6 pb-6">
                <div class="rounded-t mb-0 px-4 py-3 border bg-gray-300">
                  <div class="flex flex-wrap items-center justify-between">
                    <div
                      class="relative w-full px-2 max-w-full flex-grow flex-1 inline-block"
                    >
                      <span
                        class="align-middle py-1 text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200 text-center"
                        >啟用狀態</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : is_useful ; 0 : 未啟用 、 1 : 啟用 、 2 :
                        開發中。
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="items-center w-full bg-transparent border-collapse border-r border-l border-b"
                >
                  <div
                    class="w-full px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                  >
                    <span
                      class="inline-block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      啟用狀態 :
                    </span>
                    <SelectValidate
                      :select="statusSelect"
                      v-model="is_useful"
                      class="inline-block px-4"
                      :key="componentKey"
                      rules="required"
                      name="啟用狀態"
                    ></SelectValidate>
                  </div>
                </div>
              </div>
              <div class="text-right mb-4 px-6 m w-full">
                <button
                  class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  儲存
                </button>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/ValidateField/TextValidate.vue";
import SelectValidate from "@/components/ValidateField/SelectValidate";

export default {
  components: {
    TextInput,
    SelectValidate,
  },

  data() {
    return {
      group_code: "",
      is_useful: "",
      memo: "",
      componentKey: 0,
    };
  },

  beforeCreate() {
    this.$store.dispatch("common/fullLoading", true);
  },
  
  mounted() {
    this.$store.dispatch("common/fullLoading", false);
  },

  computed: {
    title() {
      return this.$common.getTitleByRoute(this.$route);
    },

    statusSelect() {
      return this.$common.getStatusSelect();
    },
  },

  methods: {
    groupAdd() {
      this.$store.dispatch("common/isLoading", true);
      let params = {
        group_code: this.group_code,
        is_useful: this.is_useful,
        memo: this.memo,
      };

      this.$api.serviceParamGroupAdd(params).then((element) => {
        if (element) {
          this.$router.replace({
            path: "/system/param/group",
          });
        }
      });
    },

    clearAdd() {
      Object.keys(this._data).forEach((element) => {
        if (element !== "componentKey") {
          this[element] = "";
        }
      });
      this.componentKey += 1;
    },
  },
};
</script>