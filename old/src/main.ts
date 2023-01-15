import Vue from 'vue'
import App from './App.vue'
import {Api} from "@/api/generated/strapiApi";

Vue.config.productionTip = false

type SecurityDataType = { token: string }

export const strapiApi = new Api<SecurityDataType>({
  securityWorker: (securityData: SecurityDataType | null) => {
    if (securityData) {
      return {
        headers: {
          ["token-header-name"]: securityData.token,
        }
      }
    }
  }
})

strapiApi.setSecurityData({token: process.env.STRAPI_API_KEY || ''})




new Vue({
  render: h => h(App),
}).$mount('#app')
