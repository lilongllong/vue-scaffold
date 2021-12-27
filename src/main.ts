import Vue, { createApp } from "vue";
import Antd, { message } from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./utils/http";

import "ant-design-vue/dist/antd.css";

const appInstance = createApp(App);
(appInstance.config as any).productionTip = false;
appInstance.config.globalProperties.$message = message;
appInstance.config.globalProperties.$http = http;
appInstance.use(store).use(router).use(Antd).mount("#app");
