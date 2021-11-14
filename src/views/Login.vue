<template>
  <div>
    <v-row justify="center">
      <v-col cols="11" lg="4">
        <v-scroll-x-transition>
          <v-card
            v-show="showLoginPenal"
            class="text-center top-margin-medium padding-medium"
            elevation="3"
            transition="fade-transition"
          >
            <v-row>
              <v-col>
                <v-text-field
                  color="#79A3B1"
                  outlined
                  label="账户"
                  v-model="account"
                ></v-text-field>
                <v-text-field
                  type="password"
                  color="#79A3B1"
                  outlined
                  label="密码"
                  v-model="password"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-btn
                  color="#E4E3E3"
                  class="fill-all-width btn-white-text"
                  @click="changeShowPenal"
                  >注册</v-btn
                >
              </v-col>
              <v-col cols="8">
                <v-btn
                  color="#204051"
                  dark
                  class="fill-all-width btn-white-text"
                  @click="login"
                  >登录</v-btn
                >
              </v-col>
            </v-row>
          </v-card>
        </v-scroll-x-transition>

        <v-scroll-x-reverse-transition>
          <v-card
            v-show="showRegPenal"
            class="text-center top-margin-medium padding-medium"
            elevation="3"
          >
            <v-row>
              <v-col>
                <v-text-field
                  color="#79A3B1"
                  outlined
                  label="账户"
                  v-model="account"
                ></v-text-field>
                <v-text-field
                  type="password"
                  color="#79A3B1"
                  outlined
                  label="密码"
                  v-model="password"
                ></v-text-field>
                <v-text-field
                  type="password"
                  color="#79A3B1"
                  outlined
                  label="再次输入密码"
                  v-model="passwordCheck"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-btn
                  color="#E4E3E3"
                  class="fill-all-width btn-white-text"
                  @click="changeShowPenal"
                  >登录</v-btn
                >
              </v-col>
              <v-col cols="8">
                <v-btn
                  color="#204051"
                  dark
                  class="fill-all-width btn-white-text"
                  @click="reg"
                  >注册</v-btn
                >
              </v-col>
            </v-row>
          </v-card>
        </v-scroll-x-reverse-transition>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackBar1" top>
      {{ snackText1 }}
    </v-snackbar>
  </div>
</template>

<script>
import { login, reg } from "../network/user";
export default {
  data: () => ({
    account: "",
    password: "",
    passwordCheck: "",
    snackBar1: false,
    snackText1: "",
    showLoginPenal: true,
    showRegPenal: false,
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
          this.showSnackBar1("登录失败，账号或密码错误");
        } else {
          localStorage.setItem("account", this.account);
          localStorage.setItem("password", this.password);
          sessionStorage.setItem("logined", true);
          this.$router.push("/");
        }
      });
    },
    reg() {
      if (this.account == "") {
        this.showSnackBar1("用户名不能为空");
        return;
      }
      if (this.password == "") {
        this.showSnackBar1("密码不能为空");
        return;
      }
      if (this.password == this.passwordCheck) {
        reg({ account: this.account, password: this.password }).then((res) => {
          if (res.data.success == "false") {
            this.showSnackBar1("注册失败，该账号已存在");
          } else {
            this.showSnackBar1("注册成功");
            this.changeShowPenal();
          }
        });
      } else {
        this.showSnackBar1("两次输入的密码不一致");
      }
    },
    changeShowPenal() {
      let then = this;
      if (this.showLoginPenal == true) {
        this.showLoginPenal = false;
        setTimeout(function () {
          then.showRegPenal = true;
        }, 500);
      } else {
        this.showRegPenal = false;
        setTimeout(function () {
          then.showLoginPenal = true;
        }, 500);
      }
    },
    showSnackBar1(text) {
      this.snackText1 = text;
      this.snackBar1 = true;
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
.fill-all-width {
  width: 100%;
}
</style>