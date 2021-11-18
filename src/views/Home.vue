<template>
  <!-- 主页面，开始时会跳转Login页面进行登录操作（包括自动登录） -->
  <div class="home">
    <!-- 页面遮罩，v-card加载时覆盖 -->
    <v-overlay :value="!init">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <!-- margin-left与margin-right消除v-row产生的左右边距导致的页面大小超出出现滚动条 -->
    <v-row
      justify="center"
      style="margin-left: 0; margin-right: 0; margin-top: 1rem"
    >
      <!-- 设置不同页面宽度不同 -->
      <v-col cols="11" lg="6">
        <!-- 文本未完全初始化时init为false，v-card不显示，此时上方的遮罩加载条出现 -->
        <v-card
          elevation="3"
          v-show="init"
          style="
            background: #f0ece3;
            color: #112d4e;
            font-size: large;
            font-weight: bold;
          "
        >
          <v-row justify="center">
            <v-col
              ><div class="text-center top-margin-medium">
                你好, {{ username }}
              </div>
            </v-col>
          </v-row>
          <v-row justify="center" class="top-bar">
            <v-col cols="6">
              <div class="text-center">
                <!-- 在vuex的store里存储连续签到天数与累计签到天数 -->
                已连续签到 {{ this.$store.state.continuity }} 天
              </div>
            </v-col>
            <v-col class="text-center" cols="6">
              <div>已累计签到 {{ this.$store.state.days }} 天</div>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" id="btn-col">
              <!-- 居中的大按钮 -->
              <v-btn
                :loading="bigBtnLoading"
                color="#424874"
                id="check-btn"
                fab
                dark
                large
                @click="doing"
              >
                <!-- 三个图标切换，todayTimes为今天签到的次数，distTimes为当前任务目标要签到的次数，nextTimeArrive为下次签到时间是否到达（两次签到时间需要大于间隔） -->
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
          <!-- 如果今天签到次数已经大于目标签到次数，则直接不显示这些内容，转而显示下方的签到完成提示 -->
          <v-row justify="center" v-if="!(this.todayTimes == this.distTimes)">
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
          <!-- 签到完成提示 -->
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
    <!-- 提示消息条 -->
    <v-snackbar v-model="snackBar1" top>
      <div class="text-center">
        {{ snackText1 }}
      </div>
    </v-snackbar>
  </div>
</template>

<script>
import { getTodayCheckData, setTodayCheckData } from "../network/checkData";
import { setCoin, addCheckDay } from "../network/user";
export default {
  name: "Home",
  components: {},
  data: () => ({
    buttonIcon: true,
    today: "2019-01-08",
    username: "",
    todayTimes: 0,
    lastTime: "",
    nextTime: "",
    lastTimeStemp: "",
    snackBar1: false,
    snackText1: "",
    todayChecked: false,
    nextTimeArrive: false,
    distTimes: 2,
    init: false,
    bigBtnLoading: false,
  }),

  mounted() {
    // let logined = sessionStorage.getItem("logined");
    // 在Login页面里会向store中的logined赋值
    let logined = this.$store.state.logined;
    if (!logined) {
      // 未登陆则跳转到登陆页面
      this.$router.push("/login");
    } else {
      // 已登录则获取用户名
      this.username = localStorage.getItem("account");
      this.getTodayCheckData();
    }
    // setInterval中this与此时的this不同，赋值给then传入
    let then = this;
    this.loopNextTime(then);
    // 每0.5秒更新一次下次签到的剩余时间
    setInterval(() => {
      this.loopNextTime(then);
    }, 500);
  },

  methods: {
    loopNextTime(then) {
      // 仅当今天签到过才执行时间刷新，没签到过就没有下次签到的间隔时间
      if (then.todayChecked) {
        // 36000000在毫秒制时间戳中代表10小时，此处用作10小时签到间隔
        let dist = Number(this.lastTimeStemp) + 36000000;
        // 获取当前时间戳
        let now = new Date().getTime();
        // 两个时间的时间戳相减除1000同时从毫秒转化为秒
        let offset = (dist - now) / 1000;

        // 转化为时分秒形式
        var days = parseInt(offset / 86400);
        let hours = parseInt(offset / 3600) - 24 * days; // 小时 60*60 总小时数-过去的小时数=现在的小时数
        let minutes = parseInt((offset % 3600) / 60); // 分钟 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
        let seconds = parseInt(offset % 60); // 以60秒为一整份 取余 剩下秒数
        // 仅当今天签到过才执行时间刷新，当计算出的剩余秒数第一次小于0则为nextTimeArrive永久置真到刷新页面为止，之后second仍有零值，不使用永久置真会导致反复。
        if (seconds < 0) {
          this.nextTimeArrive = true;
        }
        this.nextTime = hours + "小时" + minutes + "分" + seconds + "秒";
        // 完成card初始化
        this.init = true;
      }
    },
    doing() {
      // 签到按钮触发事件
      // 是大按钮进入加载状态（触发加载动画）
      this.bigBtnLoading = true;
      // 两个判断，是否已经达到今天签到的最大次数，是否已经经过了签到时间间隔，分别对应按钮的两个图标
      if (this.todayTimes < this.distTimes) {
        if (this.nextTimeArrive == true) {
          let account = localStorage.getItem("account");
          // 调用封装好的网络请求模块，进行一次签到，使签到次数+1
          setTodayCheckData({
            account: account,
            date: this.today,
            times: this.todayTimes + 1,
          }).then(() => {
            // 成功签到则继续发送增加货币的请求，货币信息存储在vuex，在login页面登录时加载
            this.$store.commit("setCoin", this.$store.state.coin + 100);
            let password = localStorage.getItem("password");
            // 调用封装好的网络请求模块，设置后端货币量与前端同步
            setCoin({
              account: account,
              password: password,
              coin: this.$store.state.coin,
            }).then(() => {
              // 成功则进一步判断此次签到是否让今天的签到次数达到上限，如果达到上限则意味着今天的签到完成
              if (this.todayTimes + 1 == this.distTimes) {
                // 今天的签到完成，为后端的签到天数计数器与连续签到天数计数器增加数值
                let account = localStorage.getItem("account");
                // password非必要，目前填啥都能过，但是不传入的话后端开头固定的加密组件会报错，还没修改，后期也可以接受password参数增加安全性
                addCheckDay({ account: account, password: password }).then(
                  () => {
                    // 结束签到按钮的加载并且刷新页面（重新获取各项数值）
                    this.bigBtnLoading = false;
                    location.reload();
                  }
                );
              } else {
                // 结束签到按钮的加载并且刷新页面（重新获取各项数值）
                this.bigBtnLoading = false;
                location.reload();
              }
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
      // 获取今天的日期
      let today =
        dateO.getFullYear() +
        "-" +
        (dateO.getMonth() + 1) +
        "-" +
        dateO.getDate();
      this.today = today;
      // 调用封装好的网络模块，获取用户签到信息
      getTodayCheckData({ account: account, date: today }).then((res) => {
        if (res.data["nomatch"] == true) {
          // 没有匹配的签到信息（新用户没签过到或今天没有进行过签到）
          this.nextTimeArrive = true; // 若今天没签过到则自然没有签到间隔限制，即可以立即签到
          this.todayChecked = false;
          this.init = true;
        } else {
          this.todayChecked = true;
          // 获取今天签到的次数
          this.todayTimes = res.data["check_times"];
          // 将上次签到时间的时间戳形式转换为日期
          let rawTime = new Date(Number(res.data["check_time"]));
          // lastTimeStemp存储日期对象
          this.lastTimeStemp = rawTime;
          // lastTime存储上次签到时间的字符串形式
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
      // 用于显示消息条的函数
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