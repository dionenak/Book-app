<template>
  <v-app>
    <app-navigation></app-navigation>
    <v-content>
      <book-plans></book-plans>
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
import BookPlans from "@/components/BookPlans";
// I could have used routers, but we only have one route.
export default {
  name: "App",
  components: {
    AppNavigation,
    BookPlans,
  },
};
</script>

<style></style>
