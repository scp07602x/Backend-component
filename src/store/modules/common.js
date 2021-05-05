export default {
  namespaced: true,
  state: {
    isLoading: false,
    fullLoading: false,
    token: '',
    loginInfomation: {},
    breadcrumbs: {},
    dialog: {},
    dialogStatus: false,
  },

  mutations: {
    isLoading(state, status) {
      state.isLoading = status;
    },
    fullLoading(state, status) {
      state.fullLoading = status;
    },
    token(state, resultToken) {
      state.token = resultToken;
    },
    loginInfomation(state, infomation) {
      state.loginInfomation = infomation;
    },
    breadcrumbs(state, breadcrumbs) {
      state.breadcrumbs = breadcrumbs;
    },
    dialog(state, data) {
      state.dialog = data;
      this.dispatch("common/DIALOG_STATUS", true);
      setTimeout(() => {
        this.dispatch("common/DIALOG_STATUS", false);
      }, 1500);
    },
    dialogStatus(state, dialogStatus) {
      state.dialogStatus = dialogStatus;
    }
  },
  actions: {
    isLoading(context, status) {
      context.commit('isLoading', status);
    },
    fullLoading(context, status) {
      context.commit('fullLoading', status);
    },
    token(context, token) {
      context.commit('token', token);
    },
    loginInfomation(context, infomation) {
      context.commit('loginInfomation', infomation);
    },
    breadcrumbs(context, breadcrumbs) {
      context.commit('breadcrumbs', breadcrumbs);
    },
    ADD_DIALOG(context, tips = null) {
      const data = {
        mes: '新增成功',
        style: 'bg-green-500'
      }
      if (tips) {
        data.mes = `${data.mes}，${tips}`
      }
      context.commit('dialog', data);
    },
    EDIT_DIALOG(context, tips = null) {
      const data = {
        mes: '編輯成功',
        style: 'bg-blue-400'
      }
      if (tips) {
        data.mes = `${data.mes}，${tips}`
      }
      context.commit('dialog', data);
    },
    DELETE_DIALOG(context, tips = null) {
      const data = {
        mes: '刪除成功',
        style: 'bg-red-500'
      }
      if (tips) {
        data.mes = `${data.mes}，${tips}`
      }
      context.commit('dialog', data);
    },
    DIALOG_STATUS(context, status) {
      context.commit('dialogStatus', status);
    }
  },
}