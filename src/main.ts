import { createApp } from "vue";
import App from "./views/App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "material-design-icons-iconfont/dist/material-design-icons.css";

loadFonts();

createApp(App).use(store).use(vuetify).mount("#app");
