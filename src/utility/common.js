export default {
  getTitleByRoute(route) {
    return route.meta.name;
  },

  getRequireSelect() {
    return {
      title: "請選擇必要狀態",
      options: [{
          type: "0",
          description: "0 : 非必要"
        },
        {
          type: "1",
          description: "1 : 必要"
        },
      ],
    };
  },

  getStatusSelect() {
    return {
      title: "請選擇啟用狀態",
      options: [{
          type: "0",
          description: "0 : 未啟用"
        },
        {
          type: "1",
          description: "1 : 啟用"
        },
        {
          type: "2",
          description: "2 : 開發中"
        },
      ],
    };
  },

  getIsUsefulSelect() {
    return {
      title: "請選擇啟用狀態",
      options: [{
          type: "0",
          description: "0 : 未啟用"
        },
        {
          type: "1",
          description: "1 : 啟用"
        },
      ],
    };
  },

  getIsTopSelect() {
    return {
      title: "請選擇是否置頂",
      options: [{
          type: "0",
          description: "0 : 非置頂"
        },
        {
          type: "1",
          description: "1 : 置頂"
        },
      ],
    };
  },
}