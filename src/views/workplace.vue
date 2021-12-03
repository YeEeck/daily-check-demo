<template>
  <div class="workplace">
    <v-row justify="center" class="row-fix">
      <v-col cols="11" lg="6">
        <v-card>
          <v-card-title>刻印制作</v-card-title>
          <v-card-subtitle>每制作一枚刻印需要消耗100星芒</v-card-subtitle>
          <v-card-actions>
            <v-btn dark color="#424874" @click="createItem"> 点击制作 </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="row-fix">
      <v-col cols="11" lg="6">
        <v-card>
          <v-card-title>刻印仓库</v-card-title>
          <v-card-subtitle>制作的刻印都在这里</v-card-subtitle>
          <v-card-text>
            <v-list rounded outlined class="max-height-scroll">
              <v-list-item-group v-model="selectedItem" color="#424874">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <!-- <v-icon v-text="item.icon"></v-icon> -->
                    <workplace-icon :item="item" :size="32"></workplace-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      <div class="list-item"></div>
                      <span v-text="affectType2Info(item.affectType)"></span>
                    </v-list-item-title>
                    <span v-text="item.affect + '%'"></span>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="createOver" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> 制作结果 </v-card-title>

        <v-card-text>
          <v-row justify="center">
            <v-col cols="12">
              <workplace-icon
                :item="items[items.length - 1]"
                :size="128"
              ></workplace-icon>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" class="flex-center">
              <v-slide-y-transition group>
                <svg
                  t="1638465093492"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2319"
                  width="32"
                  height="32"
                  v-for="count in items[items.length - 1].level"
                  :key="count"
                  v-show="starShow[count]"
                >
                  <path
                    d="M1008.056 454.562c-72.046 87.755-199.442 232.63-199.442 232.63s20.836 159.064 32.514 267.717c5.077 55.339-34.822 79.272-80.005 57.7-85.98-43.192-216.818-110.113-246.25-125.192-29.952 14.928-162.103 80.744-248.973 123.836-45.705 21.52-86.082-2.408-80.945-57.647 11.833-108.493 32.883-267.403 32.883-267.403S88.979 541.633 16.098 453.99c-25.758-31.83-9.219-77.076 41.57-85.395 103.567-19.581 264.104-50.79 264.104-50.79S409.58 155.963 465.134 56.846c30.576-60.313 51.728-53.35 55.345-51.574 9.423 3.246 24.295 14.975 43.712 51.626 54.923 99.27 141.74 261.326 141.74 261.326s158.649 31.212 261.012 50.842c50.178 8.368 66.564 53.666 41.113 85.496z"
                    p-id="2320"
                    fill="#FFDE7D"
                  ></path>
                </svg>
              </v-slide-y-transition>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-expand-transition>
                <div
                  style="text-align: center"
                  v-text="affectType2Info(items[items.length - 1].affectType)"
                  v-show="newItemInfoShow"
                ></div>
              </v-expand-transition>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-expand-transition>
                <div
                  style="text-align: center"
                  v-text="items[items.length - 1].affect + '%'"
                  v-show="newItemInfoShow"
                ></div>
              </v-expand-transition>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="#424874"
            text
            @click="
              createOver = false;
              starShowinit();
            "
          >
            好的
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { getItemsData } from "../network/items";
import WorkplaceIcon from "../components/WorkplaceIcon.vue";
export default {
  data: () => ({
    account: "",
    password: "",
    items: [],
    selectedItem: "",
    createOver: false,
    starShow: [false, false, false, false, false, false],
    newItemInfoShow: false,
    intervalTask: {},
    outTimeTask: {},
  }),
  watch: {
    createOver(val) {
      if (val == false) {
        this.starShowinit();
        this.newItemInfoShow = false;
        window.clearInterval(this.intervalTask);
        window.clearTimeout(this.outTimeTask);
      }
    },
  },
  components: {
    "workplace-icon": WorkplaceIcon,
  },
  mounted() {
    this.account = localStorage.getItem("account");
    this.password = localStorage.getItem("password");
    this.getItemsData_();
  },
  methods: {
    starShowinit() {
      for (let index = 0; index < this.starShow.length; index++) {
        this.$set(this.starShow, index, false);
      }
    },
    createItem() {
      this.newItemInfoShow = false;
      let type = this.randomNum(1, 5);
      let level = this.randomNum(1, 100);
      console.log(level);
      if (level > 98) {
        level = 5;
      } else if (level > 80) {
        level = 4;
      } else if (level > 50) {
        level = 3;
      } else if (level > 20) {
        level = 2;
      } else {
        level = 1;
      }
      let affectType = this.randomNum(1, 4);
      let affect = this.randomNum(level * 3 * 100, level * 5 * 100) / 100;
      this.items[this.items.length] = {
        affectType: affectType,
        affect: affect,
        type: type,
        level: level,
      };
      this.items.sort();
      this.createOver = true;
      let then = this;
      let id = 1;
      then.$set(then.starShow, id, true);
      id++;
      this.intervalTask = setInterval(() => {
        then.$set(then.starShow, id, true);
        if (id == level + 1) {
          then.newItemInfoShow = true;
        }
        id++;
      }, 1000);
      this.outTimeTask = setTimeout(() => {
        window.clearInterval(then.intervalTask);
        then.newItemInfoShow = true;
      }, 5100);
    },
    getItemsData_() {
      getItemsData({ account: this.account, password: this.password }).then(
        (res) => {
          if (res.data.success != "false") {
            this.items = res.data.items;
          }
        }
      );
    },
    type2icon(id, type) {
      if (id == type) {
        return true;
      } else {
        return false;
      }
    },
    affectType2Info(affectType) {
      switch (affectType) {
        case 1:
          return "签到奖励提升";
        case 2:
          return "连续签到奖励提升";
        case 3:
          return "制作刻印消耗减少";
        case 4:
          return "高级刻印出产率提升";
      }
    },
    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10);
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
          return 0;
      }
    },
  },
};
</script>

<style>
.top-margin-medium {
  margin-top: 1rem;
}
.row-fix {
  margin-left: 0;
  margin-right: 0;
  margin-top: 1rem;
}
.max-height-scroll {
  max-height: 20rem;
  overflow-y: auto;
}
</style>