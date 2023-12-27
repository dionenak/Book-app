<template>
  <v-container class="bg-surface-card">
    <div class="d-flex justify-center">
      <v-card width="600px" height="55px" class="mb-10">
        <v-card-title class="text-center align-center text-md-h5 text-lg-h4">
          What would you like to read today?</v-card-title
        >
      </v-card>
    </div>

    <div v-show="notRendered" class="pt-8">
      <v-row align="center" justify="center">
        <v-card>
          <v-img
            cover
            height="500"
            width="304"
            v-on:click="
              notRendered = !notRendered;
              tab = 'psy';
            "
            src="https://ia800602.us.archive.org/view_archive.php?archive=/29/items/olcovers648/olcovers648-L.zip&file=6480546-L.jpg"
          >
          </v-img>
        </v-card>
        <v-card>
          <v-img
            cover
            height="500"
            width="304"
            v-on:click="
              notRendered = !notRendered;
              tab = 'horror';
            "
            src="https://ia801401.us.archive.org/view_archive.php?archive=/32/items/l_covers_0008/l_covers_0008_56.tar&file=0008569292-L.jpg"
          >
          </v-img>
        </v-card>
        <v-card>
          <v-img
            cover
            height="500"
            width="304"
            v-on:click="
              notRendered = !notRendered;
              tab = 'phi';
            "
            src="https://ia804703.us.archive.org/view_archive.php?archive=/9/items/l_covers_0012/l_covers_0012_68.zip&file=0012680311-L.jpg"
          >
          </v-img>
        </v-card>
      </v-row>
    </div>
    <v-main v-show="!notRendered">
      <v-card>
        <v-tabs v-model="tab" bg-color="pink-lighten-5">
          <v-tab :value="horror" :v-pre="showBooks('horror')">HORROR</v-tab>
          <v-tab :value="psy" :v-pre="showBooks('psy')">PSYCHOLOGY</v-tab>
          <v-tab :value="phi" :v-pre="showBooks('phi')"
            >HISTORY & PHILOSOPHY</v-tab
          >
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
                        aspect-ratio="4/3"
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
                        aspect-ratio="4/3"
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
                        aspect-ratio="4/3"
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
      notRendered: true,
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
