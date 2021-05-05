export default {
  arrayFirst(array) {
    return array[0];
  },

  stringReplace(originalString, replaceString, separatingSymbols, key) {
    if (originalString) {
      return originalString.split(separatingSymbols).map(element => {
        if (element.indexOf(key) !== -1) {
          return replaceString;
        } else {
          return element
        }
      }).join(separatingSymbols);
    } else originalString;
  },

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

  getPermissionsSelect() {
    return {
      title: "請選擇權限類別",
      options: [{
          type: "admin",
          description: "admin"
        },
        {
          type: "system",
          description: "system"
        },
      ],
    };
  },

  isUseful(param) {
    switch (param) {
      case 0:
        return "未啟用";
      case 1:
        return "啟用";
      case 2:
        return "開發中";
    }
  },
}