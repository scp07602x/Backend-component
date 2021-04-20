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
            <router-link
              class="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              to="/front/basic"
              >前往網站設定</router-link
            >
          </div>
        </div>
        <div
          class="block w-full overflow-x-auto px-6 pb-6"
          v-for="social in websiteSocial"
          :key="social.id"
        >
          <div class="rounded-t mb-0 px-4 py-2 border bg-gray-300">
            <div class="flex flex-wrap items-center justify-between py-1">
              <div
                class="relative w-full px-4 max-w-full flex-grow flex-1 inline-block"
              >
                <span
                  class="align-middle py-1 text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200 text-center"
                  >{{ social.combine_code }} - {{ social.memo }}</span
                >
              </div>
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
                  class="w-40 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                >
                  群組代碼
                </th>
                <th
                  class="w-1/4 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                >
                  系統參數值
                </th>
                <th
                  class="w-48 px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-center"
                >
                  備註說明
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
                v-for="(data, index) in social.children"
                :key="data.id"
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
                  {{ data.code }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-left"
                >
                  <TextInput
                    class="inline-block"
                    v-model="data.value"
                    name="網站抬頭"
                    :key="componentKey"
                    classStyle="w-full"
                  />
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center"
                >
                  {{ data.memo }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-2 text-gray-600 text-center text-left"
                >
                  <button
                    class="text-green-500 bg-transparent border border-solid border-green-500 active:bg-green-500 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    @click="updateSocial(data, data.id)"
                  >
                    <i class="far fa-edit text-green-500 text-base"></i>更新
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="text-right mb-4 px-6 m w-full">
          <router-link
            class="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            to="/front/basic"
            >前往網站設定</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/ValidateField/TextValidate.vue";

export default {
  components: {
    TextInput,
  },
  data() {
    return { websiteSocial: [], componentKey: 0 };
  },

  created() {
    this.$store.dispatch("common/fullLoading", true);
  },

  mounted() {
    this.getWebsiteSocial();
  },

  computed: {
    title() {
      return this.$route.name.split("-").first();
    },
  },

  methods: {
    getWebsiteSocial() {
      this.$api.serviceWebsiteSocialIndex().then((response) => {
        this.websiteSocial = response;
        this.componentKey++;
        this.$store.dispatch("common/isLoading", false);
        this.$store.dispatch("common/fullLoading", false);
      });
    },

    updateSocial(data, id) {
      this.$store.dispatch("common/isLoading", true);
      let params = {
        value: data.value,
      };

      this.$api.serviceWebsiteSocialIdEdit(id, params).then(() => {
        this.getWebsiteSocial();
      });
    },
  },
};
</script>