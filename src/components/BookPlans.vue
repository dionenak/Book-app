<template>
  <v-container class="bg-surface-card">
    <div class="d-flex justify-center">
      <v-card width="600px" height="55px" class="mb-10">
        <v-card-title class="text-center align-center text-md-h5 text-lg-h4">
          What would you like to read today?</v-card-title
        >
      </v-card>
    </div>
    <v-main>
      <v-card>
        <v-tabs v-model="tab" bg-color="pink-lighten-5">
          <v-tab :value="horror" v-on:click="showBooks('horror')">HORROR</v-tab>
          <v-tab :value="psy" v-on:click="showBooks('psy')">PSYCHOLOGY</v-tab>
          <v-tab :value="phi" v-on:click="showBooks('phi')"
            >HISTORY & PHILOSOPHY</v-tab
          >
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item value="horror">
            <v-card>
              <v-card-text text-caption class="font-italic" v-if="tab === 0">
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
                        height="200"
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
              <v-card-text text-caption class="font-italic" v-if="tab === 1">
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
                        height="200"
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
              <v-card-text text-caption class="font-italic" v-if="tab === 2">
                "Historical processes and the way we see the
                world."</v-card-text
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
                        height="200"
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
  </v-container>
</template>

<script>
export default {
  name: "BookPlans",
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
