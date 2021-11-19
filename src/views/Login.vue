<template>
  <!-- 登录与注册页面 -->
  <div>
    <!-- margin-left与margin-right消除v-row产生的左右边距导致的页面大小超出出现滚动条 -->
    <v-row justify="center" style="margin-left: 0; margin-right: 0">
      <!-- 设置不同页面宽度不同 -->
      <v-col cols="11" lg="4">
        <!-- vuetify的过渡动画组件 -->
        <v-scroll-x-transition>
          <!-- showLoginPenal控制登录与注册卡片的切换 -->
          <v-card
            v-show="showLoginPenal"
            class="text-center top-margin-medium padding-medium"
            elevation="3"
          >
            <v-row>
              <v-col>
                <!-- inputColor为输入框统一的颜色参数 -->
                <v-text-field
                  :color="inputColor"
                  outlined
                  label="账户"
                  v-model="account"
                  AUTOCOMPLETE="OFF"
                ></v-text-field>
                <v-text-field
                  type="password"
                  :color="inputColor"
                  outlined
                  label="密码"
                  v-model="password"
                  AUTOCOMPLETE="OFF"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <!-- 用于跳转的副按钮 -->
              <v-col cols="4">
                <v-btn
                  color="#E4E3E3"
                  class="fill-all-width btn-white-text"
                  @click="changeShowPenal"
                  >注册</v-btn
                >
              </v-col>
              <!-- 登录卡片的主按钮 -->
              <v-col cols="8">
                <v-btn
                  color="#424874"
                  dark
                  class="fill-all-width btn-white-text"
                  @click="login"
                  :loading="btn1Loading"
                  >登录</v-btn
                >
              </v-col>
            </v-row>
          </v-card>
        </v-scroll-x-transition>

        <!-- 注册卡片 -->
        <v-scroll-x-reverse-transition>
          <v-card
            v-show="showRegPenal"
            class="text-center top-margin-medium padding-medium"
            elevation="3"
          >
            <v-row>
              <v-col>
                <v-text-field
                  :color="inputColor"
                  outlined
                  label="账户"
                  v-model="account"
                  AUTOCOMPLETE="OFF"
                ></v-text-field>
                <v-text-field
                  type="password"
                  :color="inputColor"
                  outlined
                  label="密码"
                  v-model="password"
                  AUTOCOMPLETE="OFF"
                ></v-text-field>
                <v-text-field
                  type="password"
                  :color="inputColor"
                  outlined
                  label="再次输入密码"
                  v-model="passwordCheck"
                  AUTOCOMPLETE="OFF"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <!-- 副按钮切换占用4格 -->
              <v-col cols="4">
                <v-btn
                  color="#E4E3E3"
                  class="fill-all-width btn-white-text"
                  @click="changeShowPenal"
                  >登录</v-btn
                >
              </v-col>
              <!-- 主按钮占用8格 -->
              <v-col cols="8">
                <v-btn
                  color="#424874"
                  dark
                  class="fill-all-width btn-white-text"
                  @click="reg"
                  :loading="btn2Loading"
                  >注册</v-btn
                >
              </v-col>
            </v-row>
          </v-card>
        </v-scroll-x-reverse-transition>
      </v-col>
    </v-row>

    <!-- 消息条 -->
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
    btn1Loading: false,
    btn2Loading: false,
    inputColor: "#48466D",
  }),
  mounted() {
    // 页面加载后的触发事件
    // 从localStorage中获取账号和密码
    let account = localStorage.getItem("account");
    let password = localStorage.getItem("password");
    // 如果两个参数都没有被定义的话说明当前用户没有登录，如果非空的话，则使用对应参数进行登录
    // 此处由于用作整个应用的登录，所以每次页面刷新，都需要在这里登录+获取更新的信息
    if (account != null && password != null) {
      this.account = account;
      this.password = password;
      this.login();
    }
  },
  methods: {
    login() {
      // 登录按钮进入加载动画
      this.btn1Loading = true;
      // 调用封装好的网络模块
      login({ account: this.account, password: this.password })
        .then((res) => {
          // 如果登录成功则返回success:true否则则为false
          if (res.data.success == "false") {
            // 调用消息条，返回密码错误消息
            this.showSnackBar1("登录失败，账号或密码错误");
          } else {
            // 账号密码正确则向localStorage中写入账号密码
            localStorage.setItem("account", this.account);
            localStorage.setItem("password", this.password);
            // sessionStorage.setItem("logined", true);
            // 旧版本中存储是否登录的信息时使用sessionStorage，为了外层AppBar的实时响应（侧边drawer的按钮的显隐），后来换用了vuex存储。
            // 写入从后端拉取的货币量
            this.$store.commit("setCoin", Number(res.data.coin));
            // 更改登录状态为true
            this.$store.commit("changeLogined", true);
            // 设置累计签到天数
            this.$store.commit("setDays", Number(res.data.checkDays));
            // 设置连续签到天数
            this.$store.commit(
              "setContinuity",
              Number(res.data.continuousCheck)
            );
            // 回到主页
            this.$router.push("/");
          }
          // 结束登录按钮的加载
          this.btn1Loading = false;
        })
        .catch((error) => {
          // 弹出连接异常的报错消息条
          this.showSnackBar1("网络连接异常:" + error);
          this.btn1Loading = false;
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
      // 检测密码与重复密码是否一致
      if (this.password == this.passwordCheck) {
        this.btn2Loading = true;
        // 调用封装的网络模块
        reg({ account: this.account, password: this.password })
          .then((res) => {
            if (res.data.success == "false") {
              this.showSnackBar1("注册失败，该账号已存在");
            } else {
              this.showSnackBar1("注册成功");
              this.changeShowPenal();
            }
            this.btn2Loading = false;
          })
          .catch((error) => {
            this.btn2Loading = false;
            this.showSnackBar1("网络连接异常:" + error);
          });
      } else {
        this.showSnackBar1("两次输入的密码不一致");
      }
    },
    changeShowPenal() {
      // setinterval 中的this与外部的this不同，此处传入then
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
      this.account = "";
      this.password = "";
      this.passwordCheck = "";
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