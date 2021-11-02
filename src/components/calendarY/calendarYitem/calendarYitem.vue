<template>
  <div class="calendar-y-item">
    <div v-show="isChecked">已签到</div>
    <div v-show="!isChecked">未签到</div>
  </div>
</template>

<script>
export default {
  name: "calendarYitem",
  props: {
    isChecked: Boolean,
    type: Number,
  },
};
</script>

<style>
.calendar-y-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>