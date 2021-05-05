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
              <h3 class="font-semibold text-lg text-gray-800">
                {{ title }}子分類
              </h3>
            </div>
            <button
              class="bg-red-400 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              @click="clearAdd()"
            >
              清空重填
            </button>
          </div>
        </div>
        <!-- <div class="flex">
          <div
            @click="test = !test"
            class="ml-2 pl-4 pb-6"
            style="writing-mode: vertical-lr"
          >
            <span
              class="text-orange-500 bg-transparent border border-solid border-orange-500 active:bg-orange-200 font-bold uppercase text-xs px-2 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
              >打開子分類列表</span
            >
          </div>
          <div style="overflow: hidden" :class="[test ? 'w-1/3' : 'w-0']">
            <div class="block w-full overflow-x-auto pl-6 pb-6">
              <table
                class="items-center w-full bg-transparent border-collapse table-fixed border-r border-l border-b"
              >
                <thead>
                  <tr>
                    <th
                      class="w-32 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                    >
                      分類id
                    </th>
                    <th
                      class="w-32 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                    >
                      分頁名稱
                    </th>
                    <th
                      class="w-40 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                    >
                      路由名稱
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(menu, index) in menus"
                    :key="menu.id"
                    :class="[(index + 1) % 2 == 0 ? 'bg-gray-100' : '']"
                  >
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-left"
                    >
                      {{ menu.subject_id }}
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                    >
                      {{ menu.name }}
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-left"
                    >
                      {{ menu.category_route }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div :class="[test ? 'w-2/3' : 'w-full']"> -->
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(menuCategoryAdd)">
            <div class="block w-full overflow-x-auto px-6 pb-6">
              <div class="rounded-t mb-0 px-4 py-3 border bg-gray-300">
                <div class="flex flex-wrap items-center justify-between">
                  <div
                    class="relative w-full px-2 max-w-full flex-grow flex-1 inline-block"
                  >
                    <span
                      class="align-middle py-1 text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200 text-center"
                      >主分類id</span
                    >
                    <span class="px-2 text-red-500 text-xs font-bold">
                      *對應欄位 : subject_id ;
                      英文字母小寫，不可與其他主分類重複。
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
                    分類id :
                  </span>
                  <TextInput
                    class="inline-block px-4"
                    v-model="subject_id"
                    name="分類id"
                    :key="componentKey"
                    rules="required"
                    classStyle="w-1/2"
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
                      >子分類類別</span
                    >
                    <span class="px-2 text-red-500 text-xs font-bold">
                      *對應欄位 : category ; 僅接受index 、 indexTab。
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
                    子分類類別 :
                  </span>
                  <SelectValidate
                    :select="categorySelect"
                    v-model="category"
                    class="inline-block px-4"
                    :key="componentKey"
                    rules="required"
                    name="子分類類別"
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
                      >主分類名稱</span
                    >
                    <span class="px-2 text-red-500 text-xs font-bold">
                      *對應欄位 : name ; 同階名稱不能重複。
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
                    分類名稱 :
                  </span>
                  <TextInput
                    class="inline-block px-4"
                    v-model="name"
                    name="分類名稱"
                    :key="componentKey"
                    rules="required"
                    classStyle="w-1/2"
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
                      >分類路由</span
                    >
                    <span class="px-2 text-red-500 text-xs font-bold">
                      *對應欄位 : category_route ; 後台路徑設定 ，
                      若欄位為變數則以" :
                      "為前綴，例如system/menu/:id/category/add，同變數僅可使用一次，若有兩個變數請分開名稱，例
                      => :id 、 :category。
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="items-center w-full bg-transparent border-collapse border-r border-l border-b"
              >
                <div
                  class="w-full px-6 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                >
                  <span
                    class="inline-block uppercase text-gray-700 text-xs font-bold mb-2"
                  >
                    分類路由 :
                  </span>
                  <span
                    class="inline-block text-gray-700 text-xs font-bold px-2"
                  >
                    {{ parentRoute }}
                  </span>

                  <TextInput
                    class="inline-block"
                    v-model="category_route"
                    name="分類路由"
                    :key="componentKey"
                    rules="required"
                    classStyle="w-1/2"
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
                      >分類小圖</span
                    >
                    <span class="px-2 text-red-500 text-xs font-bold">
                      *對應欄位 : icon ; 請填入Font
                      Awesome對應icon名稱，未輸入則不顯示圖示。
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
                    icon 名稱 :
                  </span>
                  <TextInput
                    class="inline-block px-4"
                    v-model="icon"
                    name="分類小圖"
                    :key="componentKey"
                    rules="required"
                    classStyle="w-1/2"
                  />
                  <span
                    class="inline-block uppercase text-gray-700 text-xs font-bold mb-2"
                  >
                    縮圖 :
                  </span>
                  <i class="px-4 text-base" :class="[icon]"></i>
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
                確認新增
              </button>
            </div>
          </form>
        </ValidationObserver>
        <!-- </div>
        </div> -->
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
      subject_id: "",
      category: "",
      name: "",
      category_route: "",
      icon: "",
      sort: "",
      is_useful: "",
      parentRoute: "",
      componentKey: 0,
      test: false,
      menus: [],
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

  created() {
    this.getMenuWithId(this.$route.params.id);
    this.getMenuCategory();
  },

  computed: {
    title() {
      return this.$common.getTitleByRoute(this.$route);
    },

    statusSelect() {
      return this.$common.getStatusSelect();
    },

    categorySelect() {
      return {
        title: "請選擇子分類",
        options: [
          { type: "index", description: "index" },
          { type: "indexTab", description: "indexTab" },
        ],
      };
    },
  },

  methods: {
    getMenuCategory() {
      this.$api
        .serviceMenuIdCategoryIndex(this.$route.params.id)
        .then((response) => {
          this.menus = response;
          this.$store.dispatch("common/isLoading", false);
        });
    },

    getMenuWithId(id) {
      this.$api.serviceMenuId(id).then((element) => {
        this.parentRoute = `${element.subject_id}/`;
        this.componentKey++;
        this.$store.dispatch("common/fullLoading", false);
        this.$store.dispatch("common/isLoading", false);
      });
    },

    menuCategoryAdd() {
      let params = {
        subject_id: this.subject_id,
        category: this.category,
        name: this.name,
        category_route: this.parentRoute + this.category_route,
        icon: this.icon,
        sort: this.sort == "" ? 0 : this.sort,
        is_useful: this.is_useful,
      };

      this.$api
        .serviceMenuIdCategoryAdd(this.$route.params.id, params)
        .then((response) => {
          if (response) {
            this.$store.dispatch(
              "common/ADD_DIALOG",
              "您可以繼續新增資料或回到分類列表 !"
            );
            this.clearAdd();
          }
        });
    },

    clearAdd() {
      Object.keys(this._data).forEach((element) => {
        if (element !== "componentKey" && element !== "parentRoute") {
          this[element] = "";
        }
      });
      this.componentKey++;
    },
  },
};
</script>