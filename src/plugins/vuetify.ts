import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

const icons = {
  defaultSet: "mdi",
  aliases,
  sets: {
    mdi,
  },
};

export default createVuetify({
  icons,
});
