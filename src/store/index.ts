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
    photoUrl: string;
    description: string;
  };
};
export const themesToUniqueIds: ThemeToUniqueIdsType = {
  horror: {
    title: "OL240812L",
    photoUrl:
      "https://ia801401.us.archive.org/view_archive.php?archive=/32/items/l_covers_0008/l_covers_0008_56.tar&file=0008569292-L.jpg",
    description: "Ghosts, vampires, aliens, zombies, family drama and so on.",
  },
  psy: {
    title: "OL240813L",
    photoUrl:
      "https://ia800602.us.archive.org/view_archive.php?archive=/29/items/olcovers648/olcovers648-L.zip&file=6480546-L.jpg",
    description:
      "Critical psychology, demedicalization and psychoanalytic ideas.",
  },
  phi: {
    title: "OL240814L",
    photoUrl:
      "https://ia804703.us.archive.org/view_archive.php?archive=/9/items/l_covers_0012/l_covers_0012_68.zip&file=0012680311-L.jpg",
    description: "Historical processes and the way we see the world.",
  },
} as const;

export const themes: string[] = Object.keys(themesToUniqueIds);
