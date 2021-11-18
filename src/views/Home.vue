<template>
  <div class="home">
    <v-overlay :value="!init">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-row
      justify="center"
      style="margin-left: 0; margin-right: 0; margin-top: 1rem"
    >
      <v-col cols="11" lg="6">
        <v-card elevation="3" v-show="init">
          <v-row justify="center">
            <v-col
              ><div class="text-center top-margin-medium">
                你好, {{ username }}
              </div>
            </v-col>
          </v-row>
          <v-row justify="center" class="top-bar">
            <v-col cols="6">
              <div class="text-center">已连续签到 {{ continuous }} 天</div>
            </v-col>
            <v-col class="text-center" cols="6">
              <div>已累计签到 {{ max }} 天</div>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" id="btn-col">
              <v-btn
                :loading="bigBtnLoading"
                color="#424874"
                id="check-btn"
                fab
                dark
                @click="doing"
              >
                <v-icon
                  class="btn-img"
                  v-if="todayTimes < distTimes && nextTimeArrive"
                  large
                  >mdi-check-bold</v-icon
                >
                <v-icon class="btn-img" v-if="todayTimes == distTimes" large
                  >mdi-check-decagram</v-icon
                >
                <span
                  class="material-icons btn-img"
                  v-if="!nextTimeArrive && todayTimes < distTimes"
                >
                  more_time
                </span>
              </v-btn>
            </v-col>
          </v-row>
          <v-row justify="center" v-if="!this.todayTimes == this.distTimes">
            <v-col class="text-center" cols="auto" v-if="!todayChecked">
              今天还没有签到哦
            </v-col>
            <v-col class="text-center" cols="auto" v-if="todayChecked">
              今天已签到 {{ todayTimes }} 次<br />
              上次签到是 {{ lastTime }} <br />
              <span v-if="!nextTimeArrive">
                距离下次签到时间还有 {{ nextTime }}。
              </span>
              <span v-if="nextTimeArrive"> 已经可以签到啦~ </span>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col
              class="text-center"
              cols="auto"
              v-if="this.todayTimes == this.distTimes"
            >
              今天的签到已经完成了哦~
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackBar1" top>
      <div class="text-center">
        {{ snackText1 }}
      </div>
    </v-snackbar>
  </div>
</template>

<script>
import { getTodayCheckData, setTodayCheckData } from "../network/checkData";
import { setCoin } from "../network/user";
export default {
  name: "Home",
  components: {},
  data: () => ({
    buttonIcon: true,
    today: "2019-01-08",
    continuous: 0,
    max: 0,
    username: "",
    todayTimes: 0,
    lastTime: "",
    nextTime: "",
    lastTimeStemp: "",
    snackBar1: false,
    snackText1: "",
    todayChecked: false,
    nextTimeArrive: true,
    distTimes: 2,
    init: false,
    bigBtnLoading: false,
  }),

  mounted() {
    // let logined = sessionStorage.getItem("logined");
    let logined = this.$store.state.logined;
    if (!logined) {
      this.$router.push("/login");
    } else {
      this.username = localStorage.getItem("account");
      this.getTodayCheckData();
    }
    let then = this;
    this.loopNextTime(then);
    setInterval(() => {
      this.loopNextTime(then);
    }, 500);
  },

  methods: {
    loopNextTime(then) {
      if (then.todayChecked) {
        let dist = Number(this.lastTimeStemp) + 36000000;
        let now = new Date().getTime();
        let offset = (dist - now) / 1000;

        var days = parseInt(offset / 86400);
        let hours = parseInt(offset / 3600) - 24 * days; // 小时 60*60 总小时数-过去的小时数=现在的小时数
        let minutes = parseInt((offset % 3600) / 60); // 分钟 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
        let seconds = parseInt(offset % 60); // 以60秒为一整份 取余 剩下秒数
        if (seconds < 0) {
          this.nextTimeArrive = true;
        } else {
          this.nextTimeArrive = false;
        }
        this.nextTime = hours + "小时" + minutes + "分" + seconds + "秒";
        this.init = true;
      }
    },
    doing() {
      this.bigBtnLoading = true;
      if (this.todayTimes < this.distTimes) {
        if (this.nextTimeArrive == true) {
          let account = localStorage.getItem("account");
          setTodayCheckData({
            account: account,
            date: this.today,
            times: this.todayTimes + 1,
          }).then(() => {
            this.$store.commit("setCoin", this.$store.state.coin + 100);
            let password = localStorage.getItem("password");
            setCoin({
              account: account,
              password: password,
              coin: this.$store.state.coin,
            }).then(() => {
              this.bigBtnLoading = false;
              location.reload();
            });
          });
        } else {
          this.showSnackBar1("还没有到下次签到的时间哦");
          this.bigBtnLoading = false;
        }
      } else {
        this.showSnackBar1("今天已经完成签到了哦，明天再来吧");
        this.bigBtnLoading = false;
      }
    },
    getTodayCheckData() {
      let account = localStorage.getItem("account");
      let dateO = new Date();
      let today =
        dateO.getFullYear() +
        "-" +
        (dateO.getMonth() + 1) +
        "-" +
        dateO.getDate();
      this.today = today;
      getTodayCheckData({ account: account, date: today }).then((res) => {
        if (res.data["nomatch"] == true) {
          this.todayChecked = false;
          this.init = true;
        } else {
          this.todayChecked = true;
          this.todayTimes = res.data["check_times"];
          let rawTime = new Date(Number(res.data["check_time"]));
          this.lastTimeStemp = rawTime;
          this.lastTime =
            rawTime.getHours() +
            ":" +
            rawTime.getMinutes() +
            ":" +
            rawTime.getSeconds();
        }
      });
    },
    showSnackBar1(text) {
      this.snackText1 = text;
      this.snackBar1 = true;
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

.sub-background-color {
  background-color: #4f568f !important;
}
</style>