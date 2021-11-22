<template>
  <div id="app">
    <v-app>
      <v-app-bar color="#48466D" dark app>
        <v-app-bar-nav-icon
          v-if="logined"
          @click="open = true"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>星芒</v-toolbar-title>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
      <v-navigation-drawer
        v-model="open"
        class="main-background-color"
        absolute
        temporary
        dark
      >
        <v-list-item>
          <v-list-item-content>
            <div class="special-title">
              星芒袋：{{ this.$store.state.coin }} 星芒
            </div>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            link
            v-for="item in items"
            :key="item.title"
            @click="listClick(item.id)"
          >
            <v-list-item-icon>
              <span class="material-icons"> {{ item.icon }} </span>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    open: false,
    items: [
      { id: 1, icon: "handyman", title: "刻印工房" },
      { id: 2, icon: "auto_awesome", title: "星台" },
      { id: 3, icon: "logout", title: "退出登录" },
    ],
  }),
  computed: {
    logined() {
      return this.$store.state.logined;
    },
  },
  methods: {
    listClick(id) {
      if (id == 3) {
        localStorage.removeItem("account");
        localStorage.removeItem("password");
        // sessionStorage.removeItem("logined");
        this.$store.commit("changeLogined", false);
        this.$router.push("/login");
      } else if (id == 1) {
        this.$router.push("/workplace");
      }
    },
  },
};
</script>

<style>
html {
  width: 100%;
}
body {
  width: 100%;
  font-weight: 500;
}
#app {
  width: 100%;
  background-color: #424874;
}
.special-title {
  font-weight: bold;
  color: #ffde7d;
}

.main-background-color {
  background-color: #424874 !important;
}
</style>
