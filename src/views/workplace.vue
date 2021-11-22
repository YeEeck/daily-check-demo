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
            <v-btn dark color="#424874" @click="create">
              点击制作
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    account: "",
    password: "",
  }),
  mounted() {
    this.account = localStorage.getItem("account");
    this.password = localStorage.getItem("account");
  },
};
</script>

<style>
.top-margin-medium {
  margin-top: 1rem;
}
</style>