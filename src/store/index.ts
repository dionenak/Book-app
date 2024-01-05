import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    theme: "",
    horror: [],
    books: [],
    psy: [],
    phi: [],
    apiUrl: "http://openlibrary.org/people/diodioadio/lists/",
  },
  getters: {},
  mutations: {
    setBooks(state, payload: { theme: string; data: never[] }) {
      if (payload.theme === "horror") {
        state.horror = payload.data;
      } else if (payload.theme === "psy") {
        state.psy = payload.data;
      } else {
        state.phi = payload.data;
      }
    },
  },
  actions: {
    async getBooks({ state, commit }, theme) {
      try {
        const response = await axios.get(
          `${state.apiUrl}` + themesInfo[theme].title + "/seeds.json"
        );
        commit("setBooks", { theme, data: response.data.entries });
      } catch (error) {
        commit("setBooks", []);
      }
    },
  },
  modules: {},
});

type ThemeToUniqueIdsType = {
  [themeType in string]: {
    name: "horror" | "phi" | "psy";
    title: string;
    publicTitle: string;
    image: string;
  };
};
export const themesInfo: ThemeToUniqueIdsType = {
  horror: {
    name: "horror",
    publicTitle: "HORROR",
    title: "OL240812L",
    image:
      "https://ia801401.us.archive.org/view_archive.php?archive=/32/items/l_covers_0008/l_covers_0008_56.tar&file=0008569292-L.jpg",
  },
  psy: {
    name: "psy",
    publicTitle: "PSYCHOLOGY",
    title: "OL240813L",
    image:
      "https://ia800602.us.archive.org/view_archive.php?archive=/29/items/olcovers648/olcovers648-L.zip&file=6480546-L.jpg",
  },
  phi: {
    name: "phi",
    publicTitle: "HISTORY & PHILOSOPHY",
    title: "OL240814L",
    image:
      "https://ia804703.us.archive.org/view_archive.php?archive=/9/items/l_covers_0012/l_covers_0012_68.zip&file=0012680311-L.jpg",
  },
} as const;

export const themes: string[] = Object.keys(themesInfo);
