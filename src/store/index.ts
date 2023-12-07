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
    setTheme(state, payload) {
      state.theme = payload;
    },
  },
  actions: {
    async getBooks({ state, commit }, theme) {
      try {
        const response = await axios.get(
          `${state.apiUrl}` + themesToUniqueIds[theme].title + "/seeds.json"
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
    title: string;
  };
};
export const themesToUniqueIds: ThemeToUniqueIdsType = {
  horror: {
    title: "OL240812L",
  },
  psy: {
    title: "OL240813L",
  },
  phi: {
    title: "OL240814L",
  },
} as const;

export const themes: string[] = Object.keys(themesToUniqueIds);
