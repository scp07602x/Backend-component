import Vue from 'vue'
import Vuex from 'vuex'

// 引入modules
import loginStore from './loginStore'
import adpageStore from './adpageStore'
import managerStore from './managerStore'

Vue.use(Vuex);
// Vue.prototype.$axios = axios;

export default new Vuex.Store({
  state:{
    manageList: {
      list: [{
          "id": "8ustq9wu",
          "account": "admin001",
          "name": "Tony",
          "group": "資訊部",
          "start": "2020.12.31",
          "status": true,
        },
        {
          "id": "vwa5v5pm",
          "account": "admin002",
          "name": "Ted",
          "group": "資訊部",
          "start": "2020.12.31",
          "status": true,
        },
        {
          "id": "mhge4k74",
          "account": "admin003",
          "name": "Amy",
          "group": "行銷部",
          "start": "2020.12.31",
          "status": true,
        },
        {
          "id": "8uw7xrca",
          "account": "admin004",
          "name": "Amber",
          "group": "資訊部",
          "start": "2020.12.31",
          "status": true,
        },
        {
          "id": "sua45mrw",
          "account": "admin005",
          "name": "Peter",
          "group": "行銷部",
          "start": "2020.12.31",
          "status": true,
        },
        {
          "id": "3jpgdez2",
          "account": "admin006",
          "name": "Jack",
          "group": "資訊部",
          "start": "2020.12.31",
          "status": true,
        },
        {
          "id": "ptifng4z",
          "account": "admin007",
          "name": "Jarry",
          "group": "行銷部",
          "start": "2020.12.31",
          "status": true,
        }, {
          "id": "we2kzghb",
          "account": "admin008",
          "name": "Kate",
          "group": "設計部",
          "start": "2020.12.31",
          "status": true,
        }, {
          "id": "nm37wt6c",
          "account": "admin009",
          "name": "Lora",
          "group": "設計部",
          "start": "2020.12.31",
          "status": true,
        }, {
          "id": "rsm74iw4",
          "account": "admin010",
          "name": "Sally",
          "group": "設計部",
          "start": "2020.12.31",
          "status": true,
        },
      ],
    },
    pageList: {
      list: [{
          "id": "8ustq9wu",
          "name": "2021新年快樂",
          "url": "https://www.google.com/",
          "start": "2020.12.31",
          "end": "2021.02.28",
          "status": true,
        },
        {
          "id": "vwa5v5pm",
          "name": "2021情人節快樂",
          "url": "https://tw.yahoo.com/",
          "start": "2020.12.31",
          "end": "2021.02.28",
          "status": true,
        },
        {
          "id": "mhge4k74",
          "name": "端午節快樂",
          "url": "https://tw.yahoo.com/",
          "start": "2020.12.31",
          "end": "2021.02.28",
          "status": true,
        },
        {
          "id": "8uw7xrca",
          "name": "兒童節快樂",
          "url": "https://tw.yahoo.com/",
          "start": "2020.12.31",
          "end": "2021.02.28",
          "status": true,
        },
        {
          "id": "sua45mrw",
          "name": "2021情人節快樂",
          "url": "https://tw.yahoo.com/",
          "start": "2020.12.31",
          "end": "2021.02.28",
          "status": true,
        },
        {
          "id": "3jpgdez2",
          "name": "2021情人節快樂",
          "url": "https://tw.yahoo.com/",
          "start": "2020.12.31",
          "end": "2021.02.28",
          "status": true,
        },
        {
          "id": "ptifng4z",
          "name": "2021情人節快樂",
          "url": "https://tw.yahoo.com/",
          "start": "2020.12.31",
          "end": "2021.02.28",
          "status": true,
        }, {
          "id": "we2kzghb",
          "name": "2021情人節快樂",
          "url": "https://tw.yahoo.com/",
          "start": "2020.12.31",
          "end": "2021.02.28",
          "status": true,
        }, {
          "id": "nm37wt6c",
          "name": "2021情人節快樂",
          "url": "https://tw.yahoo.com/",
          "start": "2020.12.31",
          "end": "2021.02.28",
          "status": true,
        }, {
          "id": "rsm74iw4",
          "name": "2021情人節快樂",
          "url": "https://tw.yahoo.com/",
          "start": "2020.12.31",
          "end": "2021.02.28",
          "status": true,
        },
      ],
    },
  },
  modules: {
    loginStore,
    adpageStore,
    managerStore
  }
});