<template>
  <div class="workplace">
    <v-row
      justify="center"
      style="margin-left: 0; margin-right: 0; margin-top: 1rem"
    >
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
    <v-row justify="center">
      <v-col cols="11" lg="6">
        <v-card>
          <v-card-title>刻印仓库</v-card-title>
          <v-card-subtitle>制作的刻印都在这里</v-card-subtitle>
          <v-card-text>
            <v-list shaped>
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      <div class="list-item">

                      </div>
                      <span v-text="item.name"></span>
                      <span v-text="item.affect"></span>
                    </v-list-item-title>
                    
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getItemsData } from "../network/items";
export default {
  data: () => ({
    account: "",
    password: "",
    items: [],
    selectedItem: "",
  }),
  mounted() {
    this.account = localStorage.getItem("account");
    this.password = localStorage.getItem("password");
    this.getItemsData_();
  },
  methods: {
    createItem() {},
    getItemsData_() {
      getItemsData({ account: this.account, password: this.password }).then(
        (res) => {
          if (res.data.success != "false") {
            this.items = res.data.items;
          }
        }
      );
    },
  },
};
</script>

<style>
.top-margin-medium {
  margin-top: 1rem;
}
</style>