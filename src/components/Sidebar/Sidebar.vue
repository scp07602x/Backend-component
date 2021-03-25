<template>
    <nav
      class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
      v-if="isShow"
    >
      <div
        class="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
      >
        <router-link
          class="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-base uppercase font-bold p-4 px-0"
          to="/admin/dashboard"
        >
          大樹寵物網後台
        </router-link>
        <div
          class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
          v-bind:class="collapseShow"
        >
          <div
            class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300"
          >
            <div class="flex flex-wrap">
              <div class="w-6/12">
                <router-link
                  class="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-base uppercase font-bold p-4 px-0"
                  to="/"
                >
                  大樹寵物網後台
                </router-link>
              </div>
              <div class="w-6/12 flex justify-end">
                <button
                  type="button"
                  class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  v-on:click="toggleCollapseShow('hidden')"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          <!-- <hr class="my-4 md:min-w-full" /> -->

          <div v-for="item in sidebar" :key="item.name">
            <hr class="my-4 md:min-w-full" />
            <h6
              class="md:min-w-full text-gray-600 text-sm uppercase font-bold block pt-1 pb-4 no-underline"
            >
              {{ item.name }}
            </h6>
            <ul
              class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"
            >
              <li
                class="items-center"
                v-for="tag in item.children"
                :key="tag.name"
              >
                <router-link
                  v-slot="{ href, navigate, isActive }"
                  :to="`/${tag.category_route}`"
                >
                  <a
                    :href="href"
                    @click="navigate"
                    class="text-sm uppercase py-3 font-bold block"
                    :class="[
                      isActive
                        ? 'text-green-500 hover:text-green-600'
                        : 'text-gray-800 hover:text-gray-600',
                    ]"
                  >
                    <i
                      class="mr-2 text-base"
                      :class="[
                        tag.icon,
                        isActive ? 'opacity-75' : 'text-gray-400',
                      ]"
                    ></i>
                    {{ tag.name }}
                  </a>
                </router-link>
              </li>
            </ul>
          </div>

          <hr class="my-4 md:min-w-full" />
          <!-- Heading -->
          <h6
            class="md:min-w-full text-gray-600 text-sm uppercase font-bold block pt-1 pb-4 no-underline"
          >
            參考文件
          </h6>
          <!-- Navigation -->
          <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
            <li class="inline-flex">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/vue/colors/notus"
                target="_blank"
                class="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
              >
                <i class="fas fa-paint-brush mr-2 text-gray-400 text-base"></i>
                Styles
              </a>
            </li>

            <li class="inline-flex">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus"
                target="_blank"
                class="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
              >
                <i class="fab fa-css3-alt mr-2 text-gray-400 text-base"></i>
                CSS Components
              </a>
            </li>
            <li class="inline-flex">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                target="_blank"
                class="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
              >
                <i class="fab fa-vuejs mr-2 text-gray-400 text-base"></i>
                VueJS
              </a>
            </li>
            <li class="inline-flex">
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                class="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
              >
                <i class="fab fa-css3-alt mr-2 text-gray-400 text-base"></i>
                tailwindcss
              </a>
            </li>
            <li class="inline-flex">
              <a
                href="https://fontawesome.com/"
                target="_blank"
                class="text-gray-800 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
              >
                <i class="fab fa-font-awesome mr-2 text-gray-400 text-base"></i>
                Font Awesome
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>

export default {
  data() {
    return {
      collapseShow: "hidden",
      isShow: false,
    };
  },

  computed: {
    sidebar() {
      return this.$store.state.sidebar.list;
    },
  },

  mounted() {
    this.isShow = true;
  },

  methods: {
    toggleCollapseShow: function (classes) {
      this.collapseShow = classes;
    },
  },
};
</script>
