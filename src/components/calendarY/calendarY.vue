<template>
  <div class="out">
    <div class="month-top">{{ month }} 月</div>
    <div class="topBar">
      <div class="topbar-item">周日</div>
      <div class="topbar-item">周一</div>
      <div class="topbar-item">周二</div>
      <div class="topbar-item">周三</div>
      <div class="topbar-item">周四</div>
      <div class="topbar-item">周五</div>
      <div class="topbar-item">周六</div>
    </div>
    <div class="calendar-main">
      <calendar-y-item
        :isChecked="true"
        class="calendar-item"
      ></calendar-y-item>
      <calendar-y-item
        :isChecked="true"
        class="calendar-item"
      ></calendar-y-item>
      <calendar-y-item
        :isChecked="true"
        class="calendar-item"
      ></calendar-y-item>
      <calendar-y-item
        :isChecked="true"
        class="calendar-item"
      ></calendar-y-item>
      <calendar-y-item
        :isChecked="true"
        class="calendar-item"
      ></calendar-y-item>
      <calendar-y-item
        :isChecked="true"
        class="calendar-item"
      ></calendar-y-item>
      <calendar-y-item
        :isChecked="true"
        class="calendar-item"
      ></calendar-y-item>
    </div>
  </div>
</template>

<script>
import calendarYitem from "./calendarYitem/calendarYitem.vue";
export default {
  name: "calendarY",
  components: {
    "calendar-y-item": calendarYitem,
  },
  data: () => ({
    month: 0,
  }),
  methods: {},
  mounted() {
    this.month = new Date().getMonth() + 1;
  },
};
</script>

<style>
.topBar {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.topbar-item {
  border: 1px lightgray solid;
  width: 100%;
  text-align: center;
  font-size: small;
}

.calendar-main {
  display: flex;
  justify-content: space-evenly;
}

.calendar-item {
  width: 100%;
  height: 3rem;
  border: 1px lightgray solid;
}

.month-top {
  text-align: center;
}
</style>