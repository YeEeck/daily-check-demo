<template>
  <div class="home">
    <v-app>
      <v-app-bar color="#456268" dark app>
        <v-app-bar-nav-icon @click="open = true"></v-app-bar-nav-icon>

        <v-toolbar-title>星芒</v-toolbar-title>
      </v-app-bar>
      <v-main class="main">
        <v-row justify="center" class="top-bar">
          <v-col cols="6">
            <div class="text-center top-margin-medium">
              已连续签到 {{ continuous }} 天
            </div>
          </v-col>
          <v-col class="text-center top-margin-medium" cols="6">
            <div>已累计签到 {{ max }} 天</div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" id="btn-col">
            <v-btn color="#79A3B1" id="check-btn" fab dark @click="doing">
              <v-icon
                class="btn-img"
                v-if="buttonIcon"
                transition="fab-transition"
                large
                >mdi-check-bold</v-icon
              >
              <v-icon
                class="btn-img"
                v-if="!buttonIcon"
                transition="fab-transition"
                large
                >mdi-check-decagram</v-icon
              >
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="auto"> </v-col>
        </v-row>
      </v-main>

      <v-navigation-drawer v-model="open" absolute temporary>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>观测中枢</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item link v-for="item in items" :key="item.title">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="font-family:">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    buttonIcon: true,
    today: "2019-01-08",
    open: false,
    items: [
      { icon: "", title: "刻印工房" },
      { icon: "", title: "星台" },
    ],
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
    continuous: 0,
    max: 0,
  }),

  methods: {
    doing() {
      this.buttonIcon = false;
    },
  },
};
</script>

<style>
#check-btn {
  width: 15rem !important;
  height: 15rem !important;
}
.btn-img {
  font-size: 10rem !important;
}
.main {
  width: 100%;
}
#btn-col {
  display: flex;
  justify-content: center;
}
.text-center {
  text-align: center;
}

.top-margin-medium {
  margin-top: 1rem;
}
</style>