<template>
  <div class="home">
    <v-app>
      <v-row>
        <v-col cols="12">
          <calendar-y></calendar-y>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn color="primary" fab dark large @click="doing">
            <v-icon v-if="buttonIcon" transition="fab-transition" large
              >mdi-check-bold</v-icon
            >
            <v-icon v-if="!buttonIcon" transition="fab-transition" large
              >mdi-check-decagram</v-icon
            >
          </v-btn>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
import calendarY from "../components/calendarY/calendarY.vue";
export default {
  name: "Home",
  components: {
    "calendar-y": calendarY,
  },
  data: () => ({
    buttonIcon: true,
    today: "2019-01-08",
    events: [
      {
        name: "Weekly Meeting",
        start: "2019-01-07 09:00",
        end: "2019-01-07 10:00",
      },
      {
        name: `Thomas' Birthday`,
        start: "2019-01-10",
      },
      {
        name: "Mash Potatoes",
        start: "2019-01-09 12:30",
        end: "2019-01-09 15:30",
      },
    ],
  }),

  methods: {
    doing() {
      this.buttonIcon = false;
    },
  },
};
</script>

<style>
</style>