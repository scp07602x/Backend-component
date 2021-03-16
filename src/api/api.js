import ajax from '@/api';

export default {
    // service
    serviceLogin(account, password) {
        return ajax.post('service/login', {
            account,
            password
        });
    },
    serviceRouter() {
        return ajax.post('service/router');
    },
    serviceSidebar() {
        return ajax.post('service/sidebar');
    },
    serviceInfomation() {
        return ajax.post('service/infomation');
    },
    serviceNavId(id) {
        return ajax.post(`service/nav/${id}`);
    },

    // menu
    serviceMenu() {
        return ajax.post('service/menu/index');
    },
    serviceMenuDownload() {
        return ajax.post('service/menu/download');
    },

    serviceMenuAdd(params) {
        return ajax.put('service/menu/add', params);
    },

    serviceMenuIdDelete(id) {
        return ajax.delete(`/service/menu/${id}/delete`);
    },

    serviceMenuId(id) {
        return ajax.post(`/service/menu/${id}`);
    },

    serviceMenuIdEdit(id, params) {
        return ajax.patch(`/service/menu/${id}/edit`, params);
    },

    serviceMenuIdCategoryAdd(id, params) {
        return ajax.put(`/service/menu/${id}/category/add`, params);
    },

    serviceMenuCategoryIdEdit(id, params) {
        return ajax.patch(`/service/menu/category/${id}/edit`, params);
    },

    serviceMenuCategoryIdIndex(id) {
        return ajax.post(`service/menu/category/${id}/index`);
    },

    serviceMenuCategoryIdTabAdd(id, params) {
        return ajax.put(`service/menu/category/${id}/tab/add`, params);
    },

    serviceMenuTabIdEdit(id, params) {
        return ajax.patch(`service/menu/tab/${id}/edit`, params);
    },

    serviceMenuTabIdPageAdd(id, params) {
        return ajax.put(`service/menu/tab/${id}/page/add`, params);
    },

    serviceMenuTabPageIdEdit(id, params) {
        return ajax.patch(`service/menu/tab/page/${id}/edit`, params);
    }
}