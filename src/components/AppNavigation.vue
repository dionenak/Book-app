<template>
  <span>
    <v-toolbar app color="grey-lighten-4" dark>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>Books app</v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
    </v-toolbar>
  </span>
</template>

<script>
//Our navigation will have to work on many different screen sizes.
//For medium and large screens we will be using the Vuetify <v-toolbar> component.
export default {
  name: "AppNavigation",
};
</script>
