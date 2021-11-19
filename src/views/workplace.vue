<template>
  <div class="workplace"></div>
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