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
      <v-card class="mt-3" :elevation="8">
        <v-toolbar density="compact" color="pink-lighten-5">
          <v-btn
            v-on:click="
              horror = !horror;
              if (horror) {
                showBooks('horror');
              }
            "
            >HORROR <v-icon class="ml-3">mdi-heart-search</v-icon></v-btn
          >
        </v-toolbar>
        <v-card v-if="horror !== false">
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
                    <v-container fill-height fluid>
                      <v-main fill-height> </v-main> </v-container
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-card>

      <v-card class="mt-3" :elevation="8">
        <v-toolbar :elevation="8" density="compact" color="pink-lighten-5">
          <v-btn
            v-on:click="
              psy = !psy;
              if (psy) {
                showBooks('psy');
              }
            "
            >PSYCHOLOGY <v-icon class="ml-3">mdi-heart-search</v-icon></v-btn
          >
        </v-toolbar>
        <v-card v-if="psy !== false">
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
                    <v-container fill-height fluid>
                      <v-main fill-height> </v-main> </v-container
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-card>

      <v-card class="mt-3" :elevation="8">
        <v-toolbar :elevation="8" density="compact" color="pink-lighten-5">
          <v-btn
            v-on:click="
              phi = !phi;
              if (phi) {
                showBooks('phi');
              }
            "
            >HISTORY & PHILOSOPHY
            <v-icon class="ml-3">mdi-heart-search</v-icon></v-btn
          >
        </v-toolbar>
        <v-card v-if="phi !== false">
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
                    <v-container fill-height fluid>
                      <v-main fill-height> </v-main> </v-container
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
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
      horror: false,
      psy: false,
      phi: false,
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

<style scoped>
.full-height {
  height: 100%;
}
</style>
