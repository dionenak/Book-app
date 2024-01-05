<template>
  <v-app>
    <app-navigation></app-navigation>
    <v-content>
      <v-container class="bg-surface-card">
        <question-comp></question-comp>
        <book-plans v-bind:themesInfo="themesInfo"></book-plans>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
import BookPlans from "@/components/BookPlans";
import QuestionComp from "@/components/QuestionComp";
import { themesInfo } from "../store/index";

// I could have used routers, but we only have one route.
export default {
  name: "App",
  components: {
    AppNavigation,
    QuestionComp,
    BookPlans,
  },
  data() {
    return {
      themesInfo: Object.values(themesInfo),
    };
  },
};
</script>

<style></style>
