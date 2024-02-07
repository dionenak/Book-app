<template>
  <div v-show="!rendered" class="pt-8">
    <v-row align="center" justify="center">
      <div v-for="theme in themesInfo" :key="theme">
        <v-card>
          <v-img
            cover
            height="500"
            width="304"
            v-on:click="
              tab = theme.name;
              rendered = !rendered;
            "
            :src="theme.image"
          >
          </v-img>
        </v-card>
      </div>
    </v-row>
  </div>
  <v-main v-show="rendered">
    <v-card>
      <v-tabs v-model="tab" bg-color="pink-lighten-5">
        <div v-for="theme in themesInfo" :key="theme">
          <v-tab :value="theme.name" :v-pre="showBooks(theme.name)">{{
            theme.publicTitle
          }}</v-tab>
        </div>
      </v-tabs>
      <v-window v-model="tab">
        <div v-for="theme in themesInfo" :key="theme" :value="theme.name">
          <v-window-item :value="theme.name">
            <v-card>
              <v-card-text text-caption class="font-italic">
                {{ theme.description }}</v-card-text
              >
              <v-container fluid>
                <v-row>
                  <v-col
                    v-for="theme in getBooks(theme.name)"
                    :key="theme.title"
                    :title="theme.title"
                    :cols="2"
                  >
                    <v-card :href="'https://openlibrary.org/' + theme.full_url">
                      <v-img
                        :src="theme.picture.url.replace('S.jpg', 'M.jpg')"
                        cover
                      >
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-window-item>
        </div>
      </v-window>
    </v-card>
  </v-main>
</template>

<script>
export default {
  name: "BookPlans",
  props: ["themesInfo"],
  data() {
    return {
      rendered: false,
      tab: null,
    };
  },
  methods: {
    showBooks(theme) {
      if (this.$store.state[theme].length < 1)
        this.$store.dispatch("getBooks", theme);
    },
    getBooks(theme) {
      if (theme === "horror") {
        return this.$store.state.horror;
      } else if (theme === "psy") {
        return this.$store.state.psy;
      }
      return this.$store.state.phi;
    },
  },
};
</script>

<style scoped></style>
