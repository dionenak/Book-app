import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    theme: "",
    books: [],
    apiUrl: "http://openlibrary.org/people/diodioadio/lists/",
  },
  getters: {},
  mutations: {
    setBooks(state, payload) {
      state.books = payload;
    },
    setTheme(state, payload) {
      state.theme = payload;
    },
  },
  actions: {
    async getBooks({ state, commit }) {
      try {
        const response = await axios.get(
          `${state.apiUrl}` +
            themesToUniqueIds[state.theme].title +
            "/seeds.json"
        );
        commit("setBooks", response.data.entries);
      } catch (error) {
        commit("setBooks", []);
      }
    },
    getTheme({ commit }, themeType) {
      commit("setTheme", themeType);
    },
  },
  modules: {},
});

type ThemeToUniqueIdsType = {
  [themeType in string]: {
    title: string;
    photoUrl: string;
    description: string;
  };
};
export const themesToUniqueIds: ThemeToUniqueIdsType = {
  HORROR: {
    title: "OL240812L",
    photoUrl:
      "https://ia801401.us.archive.org/view_archive.php?archive=/32/items/l_covers_0008/l_covers_0008_56.tar&file=0008569292-L.jpg",
    description: "Ghosts, vampires, aliens, zombies, family drama and so on.",
  },
  "PSYCHOLOGY & PSYCHOANALYSIS": {
    title: "OL240813L",
    photoUrl:
      "https://ia800602.us.archive.org/view_archive.php?archive=/29/items/olcovers648/olcovers648-L.zip&file=6480546-L.jpg",
    description:
      "Critical psychology, demedicalization and psychoanalytic ideas.",
  },
  "HISTORY & PHILOSOPHY": {
    title: "OL240814L",
    photoUrl:
      "https://ia804703.us.archive.org/view_archive.php?archive=/9/items/l_covers_0012/l_covers_0012_68.zip&file=0012680311-L.jpg",
    description: "Historical processes and the way we see the world.",
  },
} as const;

export const themes: string[] = Object.keys(themesToUniqueIds);
