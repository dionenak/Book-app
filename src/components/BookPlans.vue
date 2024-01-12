<template>
  <div v-show="!rendered" class="pt-8">
    <v-row align="center" justify="center">
      <div v-for="item in themesInfo" :key="item">
        <v-card>
          <v-img
            cover
            height="500"
            width="304"
            v-on:click="
              tab = item.name;
              rendered = !rendered;
            "
            :src="item.image"
          >
          </v-img>
        </v-card>
      </div>
    </v-row>
  </div>
  <v-main v-show="rendered">
    <v-card>
      <v-tabs v-model="tab" bg-color="pink-lighten-5">
        <div v-for="item in themesInfo" :key="item">
          <v-tab :value="item.name" :v-pre="showBooks(item.name)">{{
            item.publicTitle
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
                    v-for="item in getBooks(theme.name)"
                    :key="item.title"
                    :title="item.title"
                    :cols="2"
                  >
                    <v-card :href="'https://openlibrary.org/' + item.full_url">
                      <v-img
                        :src="item.picture.url.replace('S.jpg', 'M.jpg')"
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
    showBooks(plan) {
      if (this.$store.state.books.length < 1)
        this.$store.dispatch("getBooks", plan);
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
