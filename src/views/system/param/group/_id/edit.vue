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
            <form @submit.prevent="handleSubmit(groupEdit)">
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
                      v-model="groups.group_code"
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
                      v-model="groups.memo"
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
                      v-model="groups.is_useful"
                      class="inline-block px-4"
                      :key="componentKey"
                      rules="required"
                      name="啟用狀態"
                    ></SelectValidate>
                  </div>
                </div>
              </div>
              <div class="text-right mb-4 px-6 m w-full">
                <router-link
                  class="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  to="/system/param/group"
                  >返回系統參數</router-link
                >
                <button
                  class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  更新
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
      groups: {},
      componentKey: 0,
    };
  },

  beforeMount() {
    this.getGroupsWithId(this.$route.params.id);
  },

  computed: {
    title() {
      return this.$route.name.split("-").first();
    },

    statusSelect() {
      return {
        title: "請選擇啟用狀態",
        options: [
          { type: "0", description: "0 : 未啟用" },
          { type: "1", description: "1 : 啟用" },
          { type: "2", description: "2 : 開發中" },
        ],
      };
    },
  },

  methods: {
    getGroupsWithId(id) {
      this.$api.serviceParamId(id).then((response) => {
        this.groups = response;
        this.componentKey++;
        this.$store.dispatch("common/isLoading", false);
      });
    },

    groupEdit() {
      this.$store.dispatch("common/isLoading", true);
      let params = {
        group_code: this.groups.group_code,
        memo: this.groups.memo,
        is_useful: this.groups.is_useful,
      };

      this.$api
        .serviceParamGroupIdEdit(this.$route.params.id, params)
        .then((response) => {
          this.groups = response;
          this.$store.dispatch("common/isLoading", false);
          alert("更新成功");
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