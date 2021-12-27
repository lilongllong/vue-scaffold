/* eslint-disable */
import { AxiosInstance } from "axios";
import { MessageApi } from 'ant-design-vue';
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $http: AxiosInstance;
    $message: MessageApi;
  }
}

declare module 'vue-quill-editor';
declare module 'quill';
