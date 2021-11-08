<template>
  <div>
    <v-row justify="center">
      <v-col cols="11" lg="4">
        <v-card
          class="text-center top-margin-medium padding-medium"
          elevation="3"
        >
          <v-row>
            <v-col>
              <v-text-field
                outlined
                label="账户"
                v-model="account"
              ></v-text-field>
              <v-text-field
                outlined
                label="密码"
                v-model="password"
              ></v-text-field>
              <v-btn
                color="#79A3B1"
                dark
                class="big-btn btn-white-text"
                @click="login"
                >登录</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar v-model="failSnackBar">
      {{ failText }}
    </v-snackbar>
  </div>
</template>

<script>
import { login } from "../network/user";
export default {
  data: () => ({
    account: "",
    password: "",
    failSnackBar: false,
    failText: "",
  }),
  mounted() {
    let account = localStorage.getItem("account");
    let password = localStorage.getItem("password");
    if (account != null && password != null) {
      this.account = account;
      this.password = password;
      this.login();
    }
  },
  methods: {
    login() {
      login({ account: this.account, password: this.password }).then((res) => {
        if (res.data.success == "false") {
          this.failText = "登录失败，账号或密码错误";
          this.failSnackBar = true;
        } else {
          localStorage.setItem("account", this.account);
          localStorage.setItem("password", this.password);
          sessionStorage.setItem("logined", true);
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style>
.big-title {
  font-size: 2rem;
  font-weight: bold;
}
.dark-theme-font-color {
  color: #456268;
}
.padding-medium {
  padding: 1rem;
}
.big-btn {
  width: 15rem;
  height: 2rem;
}
</style>