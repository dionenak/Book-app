<template>
  <div v-show="!rendered" class="pt-8">
    <v-row
      align="center"
      justify="center"
      v-for="item in themesInfo"
      :key="item"
    >
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
        <v-window-item value="horror">
          <v-card>
            <v-card-text text-caption class="font-italic">
              "Ghosts, vampires, aliens, zombies, family drama and so
              on."</v-card-text
            >
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="item in horrorBooks"
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
        <v-window-item value="psy">
          <v-card>
            <v-card-text text-caption class="font-italic">
              "Critical psychology, demedicalization and psychoanalytic
              ideas."</v-card-text
            >
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="item in psyBooks"
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

        <v-window-item value="phi">
          <v-card>
            <v-card-text text-caption class="font-italic">
              "Historical processes and the way we see the world."</v-card-text
            >
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="item in phiBooks"
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
      </v-window>
    </v-card>
  </v-main>
</template>

<script>
export default {
  name: "BookPlans",
  props: ["themesInfo"],
  computed: {
    horrorBooks() {
      return this.$store.state.horror;
    },
    psyBooks() {
      return this.$store.state.psy;
    },
    phiBooks() {
      return this.$store.state.phi;
    },
  },
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
  },
};
</script>

<style scoped></style>
