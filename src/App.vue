<template>
  <div id="app">
    <v-app>
      <v-app-bar color="#456268" dark app>
        <v-app-bar-nav-icon @click="open = true"></v-app-bar-nav-icon>

        <v-toolbar-title>星芒</v-toolbar-title>
      </v-app-bar>
      <v-main>

        <router-view />

      </v-main>
      <v-navigation-drawer v-model="open" absolute temporary>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>中枢</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item link v-for="item in items" :key="item.title">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
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
      { icon: "", title: "刻印工房" },
      { icon: "", title: "星台" },
    ],
  }),
};
</script>

<style>
html {
  width: 100%;
}
#app {
  width: 100%;
  background-color: #FCF8EC;
}
</style>
