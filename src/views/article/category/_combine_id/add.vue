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
            <form @submit.prevent="handleSubmit(articleAdd)">
              <div class="block w-full overflow-x-auto px-6 pb-6">
                <div class="rounded-t mb-0 px-4 py-3 border bg-gray-300">
                  <div class="flex flex-wrap items-center justify-between">
                    <div
                      class="relative w-full px-2 max-w-full flex-grow flex-1 inline-block"
                    >
                      <span
                        class="align-middle py-1 text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200 text-center"
                        >文章標題</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : title。
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
                      文章主標題 :
                    </span>
                    <TextInput
                      class="inline-block px-4"
                      v-model="params.title"
                      name="文章主標題"
                      :key="componentKey"
                      rules="required"
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
                        >副標題</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : subject。
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
                      文章副標題 :
                    </span>
                    <TextInput
                      class="inline-block px-4"
                      v-model="params.subject"
                      name="文章副標題"
                      :key="componentKey"
                      rules="required"
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
                        >文章分類</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : category_id。
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
                      文章分類 :
                    </span>
                    <SelectValidate
                      :select="articleCategory"
                      v-model="params.category_id"
                      class="inline-block px-4"
                      :key="componentKey"
                      rules="required"
                      name="文章分類"
                    ></SelectValidate>
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
                      :select="isUsefulSelect"
                      v-model="params.is_useful"
                      class="inline-block px-4"
                      :key="componentKey"
                      rules="required"
                      name="啟用狀態"
                    ></SelectValidate>
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
                        >是否置頂</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : is_top ; 0 : 未啟用 、 1 : 啟用 、 2 :
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
                      是否置頂 :
                    </span>
                    <SelectValidate
                      :select="isTopSelect"
                      v-model="params.is_top"
                      class="inline-block px-4"
                      :key="componentKey"
                      rules="required"
                      name="啟用狀態"
                    ></SelectValidate>
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
                        >關鍵字</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : meta_keywords。
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
                      關鍵字 :
                    </span>
                    <TextInput
                      class="inline-block px-4"
                      v-model="params.meta_keywords"
                      name="關鍵字"
                      :key="componentKey"
                      rules="required"
                      classStyle="w-10/12"
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
                        >seo</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : seo_description ， 多個關鍵字請用 "，"
                        連結。
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
                      seo :
                    </span>
                    <TextInput
                      class="inline-block px-4"
                      v-model="params.seo_description"
                      name="seo"
                      :key="componentKey"
                      rules="required"
                      classStyle="w-10/12"
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
                        >主圖連結</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : main_pic ， 請填入主要圖片網址。
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
                      圖片連結 :
                    </span>
                    <TextInput
                      class="inline-block px-4"
                      v-model="params.main_pic"
                      name="圖片連結"
                      :key="componentKey"
                      rules="required"
                      classStyle="w-10/12"
                    />
                    <div
                      class="block uppercase text-gray-700 text-xs font-bold mb-2 py-4"
                    >
                      <span
                        class="inline-block uppercase text-gray-700 text-xs font-bold mb-2"
                      >
                        縮圖 :
                      </span>
                      <div class="w-1/4">
                        <a :href="params.main_pic" target="_blank"
                          ><img :src="params.main_pic" alt="" class="w-full"
                        /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="w-full px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                ></div>
              </div>
              <div class="block w-full overflow-x-auto px-6 pb-6">
                <div class="rounded-t mb-0 px-4 py-3 border bg-gray-300">
                  <div class="flex flex-wrap items-center justify-between">
                    <div
                      class="relative w-full px-2 max-w-full flex-grow flex-1 inline-block"
                    >
                      <span
                        class="align-middle py-1 text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200 text-center"
                        >頁面內容</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : content。
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
                    <Editor v-model="params.content" />
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
import Editor from "@/components/Editor/default";

export default {
  components: {
    TextInput,
    SelectValidate,
    Editor,
  },

  data() {
    return {
      params: {
        title: "",
        subject: "",
        is_useful: "",
        is_top: "",
        main_pic: "",
        content: "",
        meta_keywords: "",
        category_id: "",
        seo_description: "",
      },
      categories: [],
      componentKey: 0,
    };
  },

  watch: {
    subject_id() {
      this.subject_id = this.subject_id.toLowerCase();
    },
  },

  beforeCreate() {
    this.$store.dispatch("common/fullLoading", true);
  },

  computed: {
    title() {
      return this.$common.getTitleByRoute(this.$route);
    },

    category() {
      return this.$route.params.combine_id;
    },

    isUsefulSelect() {
      return this.$common.getIsUsefulSelect();
    },

    isTopSelect() {
      return this.$common.getIsTopSelect();
    },

    articleCategory() {
      const categories = this.categories.map((element) => {
        return {
          type: element.combine_id,
          description: element.name,
        };
      });

      return {
        title: "請選擇文章分類",
        options: categories,
      };
    },
  },

  mounted() {
    this.getArticleCategory();
  },

  methods: {
    getArticleCategory() {
      this.$api.serviceCarticleTopIndex().then((response) => {
        const { id } = response.find(
          (element) => this.$route.params.combine_id == element.subject_id
        );
        if (id) {
          this.$api.serviceCarticleIdIndex(id).then((res) => {
            this.categories = res;
            this.$store.dispatch("common/fullLoading", false);
          });
        }
      });
    },

    articleAdd() {
      this.$store.dispatch("common/isLoading", true);
      // console.log(this.$route.params.combine_id);
      // console.log(this.params);
      this.$api
        .systemArticleCategoryCombineIdAdd(
          this.$route.params.combine_id,
          this.params
        )
        .then((element) => {
          console.log(element);
          this.$store.dispatch("common/isLoading", true);
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