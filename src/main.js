import "source-sans-pro/source-sans-pro.css";
import "source-code-pro/source-code-pro.css";
import "@mdi/font/css/materialdesignicons.css";
import "./main.sass";

import App from "./App";
import Vue from "vue";
import Vuelidate from "vuelidate";
import Vuetify from "vuetify";
import VuetifyConfirm from "vuetify-confirm";
import router from "./router";
import store from "./store";
import { dark, vuetifyDark, vuetifyLight } from "./utils/theme";
<<<<<<< HEAD
import axios from "axios";
import "./utils/registerServiceWorker";

Vue.prototype.$axios = axios;
=======

import "./utils/registerServiceWorker";
>>>>>>> 664a7fb6441ccedb2110b813b3688f54fdc67c6b

Vue.use(Vuetify);
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: vuetifyLight,
<<<<<<< HEAD
      dark: vuetifyDark
    },
    dark
=======
      dark: vuetifyDark,
    },
    dark,
>>>>>>> 664a7fb6441ccedb2110b813b3688f54fdc67c6b
  },
  icons: {
    iconfont: "mdi",
    values: {
      success: "mdi-check-circle",
      info: "mdi-information",
      warning: "mdi-alert",
      error: "mdi-alert-octagon",

      checkboxFalse: "mdi-close-box",
      checkboxTrue: "mdi-checkbox-marked",
      checkboxUndefined: "mdi-checkbox-blank-outline",

      "net-controller": "mdi-developer-board",
      "net-dummy": "mdi-label",
      "net-edge": "mdi-ethernet-cable",
      "net-host": "mdi-laptop",
      "net-label": "mdi-label",
      "net-port": "mdi-ethernet",
<<<<<<< HEAD
      "net-switch": "mdi-switch"
    }
  }
=======
      "net-switch": "mdi-switch",
    },
  },
>>>>>>> 664a7fb6441ccedb2110b813b3688f54fdc67c6b
});

Vue.use(Vuelidate);
Vue.use(VuetifyConfirm, { vuetify });

Vue.config.productionTip = false;

<<<<<<< HEAD
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

=======
>>>>>>> 664a7fb6441ccedb2110b813b3688f54fdc67c6b
/* eslint-disable no-new */
new Vue({
  el: "#app",

  router,
  store,
  vuetify,

<<<<<<< HEAD
  render: (h) => h(App)
=======
  render: (h) => h(App),
>>>>>>> 664a7fb6441ccedb2110b813b3688f54fdc67c6b
});
