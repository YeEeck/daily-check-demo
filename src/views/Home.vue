<template>
  <div class="home">
    <v-row justify="center">
      <v-col
        ><div class="text-center top-margin-medium">你好, {{ username }}</div>
      </v-col>
    </v-row>
    <v-row justify="center" class="top-bar">
      <v-col cols="6">
        <div class="text-center">已连续签到 {{ continuous }} 天</div>
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
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    buttonIcon: true,
    today: "2019-01-08",
    continuous: 0,
    max: 0,
    username: "",
  }),

  mounted() {
    let logined = sessionStorage.getItem("logined");
    if (!logined) {
      this.$router.push("/login");
    }
    this.username = localStorage.getItem("account");
  },

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