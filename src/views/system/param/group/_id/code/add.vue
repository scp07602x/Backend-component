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
            <form @submit.prevent="handleSubmit(codeAdd)">
              <div class="block w-full overflow-x-auto px-6 pb-6">
                <div class="rounded-t mb-0 px-4 py-3 border bg-gray-300">
                  <div class="flex flex-wrap items-center justify-between">
                    <div
                      class="relative w-full px-2 max-w-full flex-grow flex-1 inline-block"
                    >
                      <span
                        class="align-middle py-1 text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200 text-center"
                        >參數代碼</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : code ; 分類代碼 a~z _
                        -，不可與其他分類重複。
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
                      參數代碼 :
                    </span>
                    <TextInput
                      class="inline-block px-4"
                      v-model="code"
                      name="參數代碼"
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
                        *對應欄位 : memo ; 說明文字 ， 如網站基本設定FB 。
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
                        >排序值</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : sort ; 僅可輸入數字，可指定排序，預設值為 0
                        並自動排序。
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
                      排序值 :
                    </span>
                    <TextInput
                      class="inline-block px-4"
                      v-model="sort"
                      name="排序值"
                      :key="componentKey"
                      type="number"
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
                        >是否必要</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : is_required ; 0 : 非必要 、 1 : 必要 。
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
                      是否必要 :
                    </span>
                    <SelectValidate
                      :select="statusSelect"
                      v-model="is_required"
                      class="inline-block px-4"
                      :key="componentKey"
                      rules="required"
                      name="是否必要"
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
      code: "",
      memo: "",
      sort: "",
      is_required: "",
      componentKey: 0,
    };
  },

  computed: {
    title() {
      return this.$route.name.split("-").first();
    },

    statusSelect() {
      return {
        title: "請選擇必要狀態",
        options: [
          { type: "0", description: "0 : 非必要" },
          { type: "1", description: "1 : 必要" },
        ],
      };
    },
  },

  methods: {
    codeAdd() {
      this.$store.dispatch("common/isLoading", true);
      let params = {
        code: this.code,
        is_required: this.is_required,
        sort: this.sort ? this.sort : 0,
        memo: this.memo,
      };

      this.$api
        .serviceParamGroupIdCodeAdd(this.$route.params.id, params)
        .then((element) => {
          if (element) {
            this.$router.go(-1);
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