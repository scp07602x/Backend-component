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
              <h3 class="font-semibold text-lg text-gray-800 py-1">
                {{ title }}
              </h3>
            </div>
            <button
              class="bg-red-400 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              @click="clear()"
            >
              清除重選
            </button>
          </div>
        </div>
        <div class="block w-full overflow-x-auto px-6 pb-6">
          <div
            class="rounded-t mb-0 px-4 py-2 border bg-gray-300 flex h-350-px"
          >
            <div class="rounded-t mb-0 px-4 py-3 border-0 w-1/3">
              <label class="typo__label"
                ><h3 class="font-semibold text-lg text-gray-800 py-1 px-3">
                  主分類
                </h3></label
              >
              <multiselect
                v-model="category"
                :options="menus"
                placeholder="選擇主分類或輸入關鍵字"
                label="name"
                track-by="name"
              ></multiselect>
            </div>
            <!-- <div class="w-1/8"></div> -->
            <div class="rounded-t mb-0 px-4 py-3 border-0 w-1/3">
              <label class="typo__label"
                ><h3 class="font-semibold text-lg text-gray-800 py-1 px-3">
                  第一階子分類
                </h3></label
              >
              <multiselect
                v-model="firstCategory"
                :options="firstChilds"
                noOptions="請先選擇主分類"
                placeholder="選擇主分類或輸入關鍵字"
                label="name"
                track-by="name"
              ></multiselect>
            </div>
            <!-- <div class="w-1/8"></div> -->
            <div
              class="rounded-t mb-0 px-4 py-3 border-0 w-1/3 cursor-not-allowed"
            >
              <label class="typo__label"
                ><h3 class="font-semibold text-lg text-gray-800 py-1 px-3">
                  第二階子分類
                </h3></label
              >
              <multiselect
                v-model="secondCategory"
                :options="secondChilds"
                placeholder="選擇主分類或輸入關鍵字"
                label="name"
                track-by="name"
              ></multiselect>
            </div>
          </div>
        </div>
        <div class="block w-full overflow-x-auto px-6 pb-6">
          <div class="rounded-t mb-0 px-4 py-2 border bg-gray-300">
            <div class="flex flex-wrap items-center justify-between">
              <div
                class="relative w-full px-4 py-2 max-w-full flex-grow flex-1 inline-block"
              >
                <span
                  class="align-middle text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200 text-center"
                  >分類列表</span
                >
                <span
                  class="align-middle text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200 text-center px-4 text-red-500"
                  >文章分類 {{ category ? ` &gt; ${category.name}` : ""
                  }}{{
                    firstCategory ? ` &gt; ${firstCategory.name}` : ""
                  }}
                  &gt; 目前位置</span
                >
              </div>
              <button
                class="text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                :class="[
                  firstChilds.length !== 0 ? 'bg-yellow-500' : 'bg-green-500',
                ]"
                type="button"
                @click="showAndCloseModal()"
              >
                {{firstChilds.length !== 0
                    ? '新增文章子分類'
                    : '新增文章主分類',
                }}
              </button>
            </div>
          </div>
          <table
            class="items-center w-full bg-transparent border-collapse table-fixed border-r border-l border-b"
          >
            <thead>
              <tr>
                <th
                  class="w-20 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  項次
                </th>
                <th
                  class="w-32 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                >
                  名稱
                </th>
                <th
                  class="w-44 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                >
                  父層id
                </th>
                <th
                  class="w-32 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  分類id
                </th>
                <th
                  class="w-40 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                >
                  combine_id
                </th>
                <th
                  class="w-32 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  排序
                </th>
                <th
                  class="w-24 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  啟用狀態
                </th>
                <!-- <th
                  class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  最後修改時間
                </th> -->
                <th
                  class="w-32 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  文章總數
                </th>
                <th
                  class="w-1/4 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  功能選項
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(category, index) in categoryList"
                :key="category.id"
                :class="[(index + 1) % 2 == 0 ? 'bg-gray-100' : '']"
              >
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  {{ index + 1 }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-left"
                >
                  {{ category.name }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-left"
                >
                  {{ category.parent_id }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  {{ category.subject_id }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-left"
                >
                  {{ category.combine_id }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  <span>{{ category.sort }}</span>
                </td>
                <!-- <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  {{ category.updated_at }}
                </td> -->
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  <span>{{ useful(category.is_useful) }}</span>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  <span>文章數</span>
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center text-left"
                >
                  <button
                    class="text-blue-400 bg-transparent border border-solid border-blue-400 active:bg-blue-200 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    @click="showAndCloseModal('edit', category.id)"
                  >
                    <i class="far fa-edit text-blue-400 text-base"></i> 編輯
                  </button>
                  <button
                    class="text-red-500 bg-transparent border border-solid border-red-500 active:bg-red-200 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    @click="deleteCategory(category.id)"
                  >
                    <i class="far fa-trash-alt text-red-500 text-base"></i> 刪除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      class="overflow-x-hidden overflow-y-auto w-full inset-0 z-50 outline-none focus:outline-none justify-center items-center flex p-4 fixed"
      style="width: 82vw; margin-top: -7.5vh"
      v-if="showModal"
    >
      <div
        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
      >
        <div class="flex items-start justify-between p-3 rounded-t">
          <h3 class="text-lg font-semibold px-4 py-2">
            {{firstChilds.length !== 0
                    ? '新增文章子分類'
                    : '新增文章主分類',
            }}
          </h3>
          <span
            class="align-middle text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200 text-center px-4 text-red-500 pt-3"
            >文章分類 {{ category ? ` &gt; ${category.name}` : ""
            }}{{ firstCategory ? ` &gt; ${firstCategory.name}` : "" }} &gt;
            目前新增位置</span
          >
          <button
            class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            type="button"
            @click="showAndCloseModal()"
          >
            <span
              class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
            >
              ×
            </span>
          </button>
        </div>
        <div class="relative px-4 flex-auto">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(addCategory)">
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
                      v-model="params.subject_id"
                      name="分類id"
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
                      v-model="params.name"
                      name="分類名稱"
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
                      v-model="params.sort"
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
                      v-model="params.is_useful"
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
                  class="bg-red-400 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  @click="clearModal()"
                >
                  清除重填
                </button>
                <button
                  v-if="type == 'edit'"
                  class="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  @click="editCategory(params.id)"
                >
                  更新
                </button>
                <button
                  v-if="type == 'new'"
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
    <div
      v-if="showModal"
      class="opacity-25 fixed inset-0 bg-black w-full"
      style="
        background: rgba(0, 0, 0, 0.3);
        height: 100%;
        weight: 100%;
        top: 0;
        left: 0;
        z-index: 30;
      "
    ></div>
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
      menus: [],
      category: "",
      firstChilds: [],
      firstCategory: "",
      secondChilds: [],
      secondCategory: "",
      showModal: false,
      componentKey: 0,
      params: {
        id: "",
        subject_id: "",
        name: "",
        sort: 0,
        is_useful: "",
      },
      type: "new",
    };
  },
  beforeCreate() {
    this.$store.dispatch("common/fullLoading", true);
  },

  watch: {
    category() {
      if (this.category) {
        this.secondCategory = "";
        this.firstCategory = "";
        this.$api.serviceCarticleIdIndex(this.category.id).then((response) => {
          this.$store.dispatch("carticle/articleCategory", response);
          this.firstChilds = response;
        });
      } else {
        this.category = "";
        this.secondChilds = [];
        this.secondCategory = "";
        this.firstChilds = [];
        this.firstCategory = "";
        setTimeout(() => {
          this.$store.dispatch("carticle/articleCategory", this.menus);
        }, 0);
      }
    },

    firstCategory() {
      this.getCarticleChilds();
    },
  },

  created() {
    this.getcarticle();
  },

  computed: {
    title() {
      return this.$common.getTitleByRoute(this.$route);
    },

    categoryList() {
      return this.$store.state.carticle.articleCategory;
    },

    statusSelect() {
      return this.$common.getRequireSelect();
    },
  },

  methods: {
    getcarticle() {
      this.$api.serviceCarticleTopIndex().then((response) => {
        this.menus = response;
        this.$store.dispatch("carticle/articleCategory", response);
        this.$store.dispatch("common/isLoading", false);
        this.$store.dispatch("common/fullLoading", false);
      });
    },

    getCarticleChilds() {
      if (this.firstCategory) {
        this.$api
          .serviceCarticleIdIndex(this.firstCategory.id)
          .then((response) => {
            this.$store.dispatch("carticle/articleCategory", response);
            this.secondChilds = response;
            this.$store.dispatch("common/isLoading", false);
          });
      } else if (this.category) {
        this.firstCategory = "";
        this.secondChilds = [];
        this.secondCategory = "";
        this.$api.serviceCarticleIdIndex(this.category.id).then((response) => {
          this.$store.dispatch("carticle/articleCategory", response);
          this.firstChilds = response;
          this.$store.dispatch("common/isLoading", false);
        });
      }
    },

    clear() {
      this.secondChilds = [];
      this.secondCategory = "";
      this.firstChilds = [];
      this.firstCategory = "";
      this.category = "";
      setTimeout(() => {
        this.$store.dispatch("carticle/articleCategory", this.menus);
      }, 10);
    },

    useful(data) {
      switch (data) {
        case 0:
          return "上線";
        case 1:
          return "下線";
      }
    },

    clearModal() {
      this.params.id = "";
      this.params.subject_id = "";
      this.params.name = "";
      this.params.sort = "";
      this.params.is_useful = "";
      this.componentKey++;
    },

    showAndCloseModal(type = "new", id = "") {
      this.clearModal();

      if (type == "new") {
        this.type = "new";
      } else {
        this.type = "edit";
        this.getCategoryData(id);
      }

      this.showModal = !this.showModal;
    },

    addCategory() {
      const params = this.params;
      params.sort = params.sort ? params.sort : 0;

      // 代表新增主分類
      if (this.category !== "" && Object.keys(this.category).length == 0) {
        this.$api.serviceCarticleTopAdd(params).then((response) => {
          alert("新增主分類成功，您可關閉視窗或繼續新增");
          if (response) {
            this.clearModal();
            this.getcarticle();
          }
        });
      } else {
        const category = {
          id: this.category.id,
          returnMessage: "新增第一階子分類成功，您可關閉視窗或繼續新增",
        };

        if (
          this.firstCategory !== "" &&
          Object.keys(this.firstCategory).length > 0
        ) {
          category.id = this.firstCategory.id;
          category.returnMessage =
            "新增第二階子分類成功，您可關閉視窗或繼續新增";
        }

        this.$api.serviceCarticleIdAdd(category.id, params).then((response) => {
          alert(category.returnMessage);
          if (response) {
            this.clearModal();
            this.getCarticleChilds();
          }
        });
      }
    },

    getCategoryData(id) {
      if (this.category == "") {
        this.$api.serviceCarticleTopId(id).then((response) => {
          this.params = {
            id: response.id,
            subject_id: response.subject_id,
            name: response.name,
            sort: response.sort,
            is_useful: response.is_useful,
          };
          this.componentKey++;
        });
      } else {
        this.$api.serviceCarticleId(id).then((response) => {
          this.params = {
            id: response.id,
            subject_id: response.subject_id,
            name: response.name,
            sort: response.sort,
            is_useful: response.is_useful,
          };
          this.componentKey++;
        });
      }
    },

    editCategory(id) {
      if (this.category == "") {
        this.$api.serviceCarticleTopIdEdit(id, this.params).then((response) => {
          if (response) {
            alert(`主分類 : ${response.name}，更新成功`);
            this.params = {
              id: response.id,
              subject_id: response.subject_id,
              name: response.name,
              sort: response.sort,
              is_useful: response.is_useful,
            };
            this.componentKey++;
            this.getcarticle();
          }
        });
      } else {
        this.$api.serviceCarticleIdEdit(id, this.params).then((response) => {
          if (response) {
            alert(`子分類 : ${response.name}，更新成功`);
            this.params = {
              id: response.id,
              subject_id: response.subject_id,
              name: response.name,
              sort: response.sort,
              is_useful: response.is_useful,
            };
            this.componentKey++;
            this.getCarticleChilds();
          }
        });
      }
    },
    deleteCategory(id) {
      this.$store.dispatch("common/isLoading", true);
      this.$api.serviceCarticleIdDelete(id).then(() => {
        if (this.category == "") {
          this.getcarticle();
        } else {
          this.getCarticleChilds();
        }
      });
    },
  },
};
</script>

<style lang="scss">
.multiselect__select {
  display: none !important;
}
.multiselect__tags {
  min-height: 46px !important;
}
.multiselect__input,
.multiselect__single {
  padding: 2px 0px 0px 5px !important;
  margin-bottom: 10px !important;
}
.multiselect__tags {
  font-size: 16px !important;
}

.multiselect__placeholder {
  padding: 2px 0px 0px 5px !important;
}
.multiselect__content-wrapper {
  display: block !important;
  max-height: 220px;
  height: 220px;
  z-index: 30 !important;
}
.multiselect__option--selected {
  background: #cbd5e0;
}
.multiselect__option--selected:after {
  color: #fff;
}
</style>