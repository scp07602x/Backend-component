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
              to="/front/social"
              >前往社群設定</router-link
            >
            <button
              class="bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              @click="groupEdit()"
            >
              更新
            </button>
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
                        >基本設定</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : meta_title ;
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
                      class="inline-block text-gray-700 text-xs font-bold mb-2"
                    >
                      網站抬頭 : &emsp; &lt;meta name="title" content="
                    </span>
                    <TextInput
                      class="inline-block"
                      v-model="websiteData.meta_title"
                      name="網站抬頭"
                      :key="componentKey"
                      rules="required"
                      classStyle="w-1/2"
                    />
                    <span
                      class="inline-block text-gray-700 text-xs font-bold mb-2"
                    >
                      "&gt;
                    </span>
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
                        >網站簡述</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : meta_subject ;
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
                      class="inline-block text-gray-700 text-xs font-bold mb-2"
                    >
                      網站簡述 : &emsp; &lt;meta name="subject" content="
                    </span>
                    <TextInput
                      class="inline-block"
                      v-model="websiteData.meta_subject"
                      name="網站抬頭"
                      :key="componentKey"
                      rules="required"
                      classStyle="w-1/2"
                    />
                    <span
                      class="inline-block text-gray-700 text-xs font-bold mb-2"
                    >
                      "&gt;
                    </span>
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
                        >網站描述</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : meta_description ;
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
                      class="inline-block text-gray-700 text-xs font-bold mb-2"
                    >
                      網站描述 : &emsp; &lt;meta name="description" content="
                    </span>
                    <TextInput
                      class="inline-block"
                      v-model="websiteData.meta_description"
                      name="網站描述"
                      :key="componentKey"
                      rules="required"
                      classStyle="w-1/2"
                    />
                    <span
                      class="inline-block text-gray-700 text-xs font-bold mb-2"
                    >
                      "&gt;
                    </span>
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
                        *對應欄位 : meta_keywords ;
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
                      class="inline-block text-gray-700 text-xs font-bold mb-2"
                    >
                      關鍵字 : &emsp; &lt;meta name="keywords" content="
                    </span>
                    <TextInput
                      class="inline-block"
                      v-model="websiteData.meta_keywords"
                      name="網站描述"
                      :key="componentKey"
                      rules="required"
                      classStyle="w-1/2"
                    />
                    <span
                      class="inline-block text-gray-700 text-xs font-bold mb-2"
                    >
                      "&gt;
                    </span>
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
                        >作者</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : meta_author ;
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
                      class="inline-block text-gray-700 text-xs font-bold mb-2"
                    >
                      作者 : &emsp; &lt;meta name="author" content="
                    </span>
                    <TextInput
                      class="inline-block"
                      v-model="websiteData.meta_author"
                      name="作者"
                      :key="componentKey"
                      rules="required"
                      classStyle="w-1/2"
                    />
                    <span
                      class="inline-block text-gray-700 text-xs font-bold mb-2"
                    >
                      "&gt;
                    </span>
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
                        >版權宣告</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : copyright ;
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
                      版權宣告 :
                    </span>
                    <TextInput
                      class="inline-block px-4"
                      v-model="websiteData.copyright"
                      name="版權宣告"
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
                        >客服 Email</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : customer_email ;
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
                      客服 Email :
                    </span>
                    <TextInput
                      class="inline-block px-4"
                      v-model="websiteData.customer_email"
                      name="客服 Email"
                      :key="componentKey"
                      type="email"
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
                        >密件 Email</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : cc_email ;
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
                      密件 Email :
                    </span>
                    <TextInput
                      class="inline-block px-4"
                      v-model="websiteData.cc_email"
                      name="密件 Email"
                      :key="componentKey"
                      type="email"
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
                        >網站icon</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : app_icon_pic ;
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
                      網站icon :
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      class="inline-block px-4"
                      ref="app_icon_pic"
                    />
                    <span
                      class="inline-block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      圖片連結 :
                    </span>
                    <a :href="websiteData.app_icon_pic" target="_blank"
                      ><span
                        class="inline-block uppercase text-gray-700 text-xs font-bold mb-2"
                      >
                        {{ websiteData.app_icon_pic }}
                      </span></a
                    ><img :src="websiteData.app_icon_pic" alt="" />
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
                        >Favicon</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : favicon_pic ; for IE 使用。
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
                      Favicon :
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      class="inline-block px-4"
                      ref="favicon_pic"
                    />
                    <span
                      class="inline-block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      圖片連結 :
                    </span>
                    <a :href="websiteData.favicon_pic" target="_blank"
                      ><span
                        class="inline-block uppercase text-gray-700 text-xs font-bold mb-2"
                      >
                        {{ websiteData.favicon_pic }}
                      </span></a
                    ><img :src="websiteData.favicon_pic" alt="" />
                  </div>
                </div>
              </div>
              <!-- <div class="block w-full overflow-x-auto px-6 pb-6">
                <div class="rounded-t mb-0 px-4 py-3 border bg-gray-300">
                  <div class="flex flex-wrap items-center justify-between">
                    <div
                      class="relative w-full px-2 max-w-full flex-grow flex-1 inline-block"
                    >
                      <span
                        class="align-middle py-1 text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200 text-center"
                        >網站 logo</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : logo ; 前台logo圖片。
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
                      網站 logo :
                    </span>
                    <input type="file" class="inline-block px-4" ref="logo" />
                  </div>
                </div>
              </div> -->
              <div class="block w-full overflow-x-auto px-6 pb-6">
                <div class="rounded-t mb-0 px-4 py-3 border bg-gray-300">
                  <div class="flex flex-wrap items-center justify-between">
                    <div
                      class="relative w-full px-2 max-w-full flex-grow flex-1 inline-block"
                    >
                      <span
                        class="align-middle py-1 text-sm uppercase border-l-0 border-r-0 font-semibold text-left text-gray-600 border-gray-200 text-center"
                        >維修起訖日期</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : system_update_start_date 、
                        system_update_end_date ; 設定維修日期及時間。
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="items-center w-full bg-transparent border-collapse border-r border-l border-b flex justify-start"
                >
                  <div
                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                  >
                    <span
                      class="inline-block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      是否設定維修 :
                    </span>
                    <span
                      class="inline-block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      <label
                        class="inline-block uppercase text-gray-700 text-xs font-bold mb-2 px-2"
                        for="radio-true"
                        >是</label
                      ><input
                        class="form-radio h-4 w-4 text-gray-500 relative"
                        style="bottom: -0.2rem"
                        type="radio"
                        id="radio-true"
                        value="true"
                        v-model="maintenance"
                      />
                      <label
                        class="inline-block uppercase text-gray-700 text-xs font-bold mb-2 px-2 pl-4"
                        for="radio-false"
                        >否</label
                      ><input
                        class="form-radio h-4 w-4 text-gray-500 relative"
                        style="bottom: -0.2rem"
                        type="radio"
                        id="radio-false"
                        value="false"
                        v-model="maintenance"
                      />
                    </span>
                    <span
                      class="inline-block uppercase text-gray-700 text-xs font-bold mb-2 pl-4"
                    >
                      起始日期 :
                    </span>
                    <TextInput
                      class="inline-block px-4"
                      v-model="websiteData.system_update_start_date"
                      name="起始日期"
                      :key="componentKey"
                      type="datetime-local"
                      classStyle="w-full"
                    />
                  </div>
                  <div
                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 text-left"
                  >
                    <span
                      class="inline-block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      結束時間 :
                    </span>
                    <TextInput
                      class="inline-block px-4"
                      v-model="websiteData.system_update_end_date"
                      name="結束時間"
                      :key="componentKey"
                      type="datetime-local"
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
                        >維修顯示圖片</span
                      >
                      <span class="px-2 text-red-500 text-xs font-bold">
                        *對應欄位 : system_update_pic ; 網站維修時要顯示的圖片。
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
                      維修顯示圖片 :
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      class="inline-block px-4"
                      ref="system_update_pic"
                    />
                    <span
                      class="inline-block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      圖片連結 :
                    </span>
                    <a :href="websiteData.system_update_pic" target="_blank"
                      ><span
                        class="inline-block uppercase text-gray-700 text-xs font-bold mb-2"
                      >
                        {{ websiteData.system_update_pic }}
                      </span></a
                    ><img :src="websiteData.system_update_pic" alt="" />
                  </div>
                </div>
              </div>
              <div class="text-right mb-4 px-6 m w-full">
                <router-link
                  class="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  to="/front/social"
                  >前往社群設定</router-link
                >
                <button
                  class="bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
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

export default {
  components: {
    TextInput,
  },

  data() {
    return {
      websiteData: {},
      maintenance: false,
      componentKey: 0,
    };
  },

  beforeCreate() {
    this.$store.dispatch("common/fullLoading", true);
  },

  created() {
    this.getWebsiteBasic();
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
    getWebsiteBasic() {
      this.$api.serviceWebsiteIndex().then((response) => {
        if (
          response.system_update_start_date !== null &&
          response.system_update_end_date !== null
        ) {
          this.maintenance = true;
        }
        this.websiteData = response;
        this.componentKey += 1;
        this.$store.dispatch("common/fullLoading", false);
      });
    },

    groupEdit() {
      let formData = new FormData();
      formData.append("meta_title", this.websiteData.meta_title);
      formData.append("meta_subject", this.websiteData.meta_subject);
      formData.append("meta_description", this.websiteData.meta_description);
      formData.append("meta_keywords", this.websiteData.meta_keywords);
      formData.append("meta_author", this.websiteData.meta_keywords);
      formData.append("copyright", this.websiteData.copyright);
      formData.append("customer_email", this.websiteData.customer_email);
      formData.append("cc_email", this.websiteData.cc_email);
      if (this.websiteData.system_update_start_date) {
        formData.append(
          "system_update_start_date",
          this.websiteData.system_update_start_date
        );
      }
      if (this.websiteData.system_update_end_date) {
        formData.append(
          "system_update_end_date",
          this.websiteData.system_update_end_date
        );
      }
      if (this.$refs.app_icon_pic.files[0]) {
        formData.append("app_icon_pic", this.$refs.app_icon_pic.files[0]);
        this.$refs.app_icon_pic.value = "";
      }
      if (this.$refs.favicon_pic.files[0]) {
        formData.append("favicon_pic", this.$refs.favicon_pic.files[0]);
        this.$refs.favicon_pic.value = "";
      }
      if (this.$refs.system_update_pic.files[0]) {
        formData.append(
          "system_update_pic",
          this.$refs.system_update_pic.files[0]
        );
        this.$refs.system_update_pic.value = "";
      }

      this.$api.serviceWebsiteEdit(formData).then(() => {
        this.$store.dispatch("common/EDIT_DIALOG");
        this.getWebsiteBasic();
      });
    },

    clearAdd() {
     Object.keys(this.websiteData).forEach((element) => {
        this.websiteData[element] = "";
      });

      this.componentKey++;
    },
  },
};
</script>