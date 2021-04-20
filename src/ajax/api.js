import ajax from '@/ajax';

export default {
    // ---------- service ---------- //
    // ALG01 登入
    serviceLogin(account, password) {
        return ajax.post('service/login', {
            account,
            password
        });
    },
    // ALG03 登入者資訊
    serviceInfomation() {
        return ajax.post('service/infomation');
    },



    // ---------- menu ---------- //
    // BKM1 依權限展開左側功能目錄
    serviceSidebar() {
        return ajax.post('service/sidebar');
    },
    // BKM2 依權限展開所有功能
    serviceRouter() {
        return ajax.post('service/router');
    },
    // BKM3 顯示所有sidebar功能
    serviceMenu() {
        return ajax.post('service/menu/index');
    },
    // BKM4 麵包屑nav導覽
    serviceNavId(id) {
        return ajax.post(`service/nav/${id}`);
    },
    // BKM6 取得分類{id}資訊
    serviceMenuId(id) {
        return ajax.post(`/service/menu/${id}`);
    },
    // BKM7 刪除{id}與{id}子層資料
    serviceMenuIdDelete(id) {
        return ajax.delete(`/service/menu/${id}/delete`);
    },
    // BKM8 新增sidebar主分類
    serviceMenuAdd(params) {
        return ajax.put('service/menu/add', params);
    },
    // BKM9 編輯sidebar主分類
    serviceMenuIdEdit(id, params) {
        return ajax.patch(`/service/menu/${id}/edit`, params);
    },
    // BKM10 取得主分類{id}所有子分類
    serviceMenuIdCategoryIndex(id) {
        return ajax.post(`/service/menu/${id}/category/index`);
    },
    // BKM11 新增sidebar子分類
    serviceMenuIdCategoryAdd(id, params) {
        return ajax.put(`/service/menu/${id}/category/add`, params);
    },
    // BKM12 編輯sidebar子分類
    serviceMenuCategoryIdEdit(id, params) {
        return ajax.patch(`/service/menu/category/${id}/edit`, params);
    },
    // BKM13 取得子分類{id}下所有分頁結構
    serviceMenuCategoryIdIndex(id) {
        return ajax.post(`service/menu/category/${id}/index`);
    },
    // BKM14 新增tab
    serviceMenuCategoryIdTabAdd(id, params) {
        return ajax.put(`service/menu/category/${id}/tab/add`, params);
    },
    // BKM15 編輯tab
    serviceMenuTabIdEdit(id, params) {
        return ajax.patch(`service/menu/tab/${id}/edit`, params);
    },
    // BKM16 新增page
    serviceMenuTabIdPageAdd(id, params) {
        return ajax.put(`service/menu/tab/${id}/page/add`, params);
    },
    // BKM17 編輯page
    serviceMenuTabPageIdEdit(id, params) {
        return ajax.patch(`service/menu/tab/page/${id}/edit`, params);
    },
    // ***未實作***
    serviceMenuDownload() {
        return ajax.post('service/menu/download');
    },



    // ---------- param/group ---------- //
    // SP1 系統參數群組列表
    serviceParamGroupIndex() {
        return ajax.post('service/param/group/index');
    },
    // SP2 刪除{id}與{id}子層資料
    serviceParamIdDelete(id) {
        return ajax.delete(`service/param/${id}/delete`);
    },
    // SP3 新增分類
    serviceParamGroupAdd(params) {
        return ajax.put('service/param/group/add', params)
    },
    // SP4 取得系統參數{id}資訊
    serviceParamId(id) {
        return ajax.post(`service/param/${id}`);
    },
    // SP5 更新系統參數分類{id}資訊
    serviceParamGroupIdEdit(id, params) {
        return ajax.patch(`service/param/group/${id}/edit`, params);
    },
    // SP6 分類{id}系統參數列表
    serviceParamGroupIdCodeIndex(id) {
        return ajax.post(`service/param/group/${id}/code/index`);
    },
    // SP7 新增代碼
    serviceParamGroupIdCodeAdd(id, params) {
        return ajax.put(`service/param/group/${id}/code/add`, params)
    },
    // SP8 編輯代碼
    serviceParamGroupCodeIdEdit(id, params) {
        return ajax.patch(`service/param/group/code/${id}/edit`, params);
    },



    // ---------- front/website ---------- //
    // WS1 取得 website 基本資料
    serviceWebsiteIndex() {
        return ajax.post('service/website/index');
    },
    // WS2 編輯 website 基本資料
    serviceWebsiteEdit(params) {
        const config = {
            headers: {
                'X-HTTP-Method-Override': 'PATCH'
            }
        };
        return ajax.post('service/website/edit', params, config);
    },
    // WS3 website 參數列表
    serviceWebsiteSocialIndex() {
        return ajax.post('service/website/social/index')
    },
    // WS4 更新website系統參數
    serviceWebsiteSocialIdEdit(id, params) {
        return ajax.patch(`service/website/social/${id}/edit`, params)
    },



    // ---------- service/carticle ---------- //
    // CA1 文章主分類列表
    serviceCarticleTopIndex() {
        return ajax.post('service/carticle/top/index')
    },
    // CA2 取得主分類{id}資訊
    serviceCarticleTopId(id) {
        return ajax.post(`service/carticle/top/${id}`)
    },
    // CA3 新增文章主分類
    serviceCarticleTopAdd(params) {
        return ajax.put('service/carticle/top/add', params)
    },
    // CA4 更新文章主分類{id}資訊
    serviceCarticleTopIdEdit(id, params) {
        return ajax.patch(`service/carticle/top/${id}/edit`, params)
    },
    // CA5 刪除{id}與以下子分類
    serviceCarticleIdDelete(id) {
        return ajax.delete(`service/carticle/${id}/delete`)
    },
    // CA6 取得{id}之下子分類列表
    serviceCarticleIdIndex(id) {
        return ajax.post(`service/carticle/${id}/index`)
    },
    // CA7 取得{id}資訊
    serviceCarticleId(id) {
        return ajax.post(`service/carticle/${id}`)
    },
    // CA8 新增{id}的子分類
    serviceCarticleIdAdd(id, params) {
        return ajax.put(`service/carticle/${id}/add`, params)
    },
    // CA9 編輯{id}的分類
    serviceCarticleIdEdit(id, params) {
        return ajax.patch(`service/carticle/${id}/edit`, params)
    },
}