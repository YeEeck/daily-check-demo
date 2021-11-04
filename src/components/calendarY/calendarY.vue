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
        v-for="count in weekDay"
        :key="count"
        :isChecked="false"
        :date="getLastMonthDay"
        class="calendar-item"
      ></calendar-y-item>
      <calendar-y-item
        v-for="count in monthDay"
        :key="count"
        :isChecked="true"
        :date="count"
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
    weekDay: 0,
    monthDay: 0,
  }),
  methods: {},
  computed: {
    getLastMonthDay() {
      let date2 = new Date();
      return new Date(date2.getFullYear(), date2.getMonth(), 0).getDate();
    },
  },
  mounted() {
    let date1 = new Date();
    date1.setDate(1);
    this.weekDay = date1.getDay();
    this.monthDay = new Date(
      date1.getFullYear(),
      date1.getMonth() + 1,
      0
    ).getDate();
    this.month = date1.getMonth() + 1;
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
  justify-content: flex-start;
  flex-wrap: wrap;
}

.calendar-item {
  width: 14.28%;
  height: 3rem;
}

.month-top {
  text-align: center;

  font-size: medium;
  font-weight: bold;
}
</style>