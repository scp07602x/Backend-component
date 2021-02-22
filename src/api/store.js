import api from './index';

export default {
    getAdPageList() {
        return api.get("/user");
    },
    getRouteAndSidebar() {
        return api.post('service/sidebar')
    }
}