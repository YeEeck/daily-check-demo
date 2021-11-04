<template>
  <div class="calendar-y-item">
    <v-btn fab depressed small :color="getColor(isChecked)" style="color:#ffffff;font-weight:bold">{{ date }}</v-btn>
  </div>
</template>

<script>
export default {
  name: "calendarYitem",
  props: {
    isChecked: Boolean,
    type: Number,
    date: Number,
  },
  data: () => ({}),
  mounted() {},
  methods: {
    getColor(isChecked) {
      if (isChecked) {
        return "green";
      } else {
        return "red";
      }
    },
  },
};
</script>

<style>
.calendar-y-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: small;
}
</style>