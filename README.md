# 本後台基於 Vue Notus 及 Taliwind css 既有版型再次開發
- [Vue Notus](https://github.com/creativetimofficial/vue-notus)
- [Taliwind css](https://tailwindcss.com/)

##### 已另外引入功能
- [TinyMCE網頁編輯器](https://www.tiny.cloud/docs/integrations/vue/)

##### 修正模板
- Header，路徑src\components\Headers\Header.vue
  - 以HeaderStatus修正，路徑src\components\Headers\HeaderStatus.vue
  - 取消4張圖表，僅留存背景圖，保留header及footer元件。

##### 新增模板
- Breadcrumb，路徑src\components\Breadcrumb\Breadcrumb.vue
  - 利用擷取路由取得麵包屑路徑

## Files and Folder

This is the project structure that you will get upon the download:
```
vue-notus
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── babel.config.js
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── img
│   │   │   ├── github.svg
│   │   │   └── google.svg
│   │   └── styles
│   │       ├── index.css
│   │       └── tailwind.css
│   ├── components
│   │   ├── Cards
│   │   │   ├── CardBarChart.vue
│   │   │   ├── CardLineChart.vue
│   │   │   ├── CardPageVisits.vue
│   │   │   ├── CardProfile.vue
│   │   │   ├── CardSettings.vue
│   │   │   ├── CardSocialTraffic.vue
│   │   │   ├── CardStats.vue
│   │   │   └── CardTable.vue
│   │   ├── Dropdowns
│   │   │   ├── IndexDropdown.vue
│   │   │   ├── NotificationDropdown.vue
│   │   │   ├── PagesDropdown.vue
│   │   │   ├── TableDropdown.vue
│   │   │   └── UserDropdown.vue
│   │   ├── Footers
│   │   │   ├── Footer.vue
│   │   │   ├── FooterAdmin.vue
│   │   │   └── FooterSmall.vue
│   │   ├── Headers
│   │   │   └── HeaderStats.vue
│   │   ├── Maps
│   │   │   └── MapExample.vue
│   │   ├── Navbars
│   │   │   ├── AdminNavbar.vue
│   │   │   ├── AuthNavbar.vue
│   │   │   └── IndexNavbar.vue
│   │   └── Sidebar
│   │       └── Sidebar.vue
│   ├── layouts
│   │   ├── Admin.vue
│   │   └── Auth.vue
│   ├── main.js
│   └── views
│       ├── Index.vue
│       ├── Landing.vue
│       ├── Profile.vue
│       ├── admin
│       │   ├── Dashboard.vue
│       │   ├── Maps.vue
│       │   ├── Settings.vue
│       │   └── Tables.vue
│       └── auth
│           ├── Login.vue
│           └── Register.vue
├── tailwind.config.js
└── vue.config.js
```