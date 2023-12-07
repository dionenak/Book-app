<template>
  <span>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="bg-grey"
      disable-resize-watcher
    >
      <v-list>
        <span v-for="(item, index) in items" :key="index">
          <v-list-item :key="index">
            <v-list-item-content>
              {{ item.title }}
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="`divider-${index}`"></v-divider>
        </span>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="grey-lighten-4" dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
    </v-toolbar>
  </span>
</template>

<script>
//Our navigation will have to work on many different screen sizes.
//On bigger screens like a laptop or desktop, we will display a menu
//across the top of the screen. On smaller devices like a mobile phone,
// we will display the traditional hamburger menu icon.
// When a user click on the icon a drawer will slide in from the left with our menu.
//This drawer will remain on top of the website until the user closes it.

//Vuetify provides two tools to display the menu for different screen sizes.
//For medium and large screens we will be using the Vuetify <v-toolbar> component.
//On smaller screens we will show the <v-navigation-drawer> component.
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "Books app",
      drawer: false,
      items: [{ title: "I like to read" }, { title: "I want to read" }],
    };
  },
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
