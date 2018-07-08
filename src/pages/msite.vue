<template>
  <div></div>
</template>
<script>
import { cityGuess } from "@/api/getData";
export default {
  data() {
    return {
      geohash: ""
    };
  },
  // msite 是由一个独立的项目组做的 多个SPA组成
  async beforemount() {
    if (this.$route.query.geohash) {
      this.geohash = this.$route.query.geohash;
    } else {
      const data = await cityGuess();
      console.log(data);
      this.geohash = `${data.latitude},${longitude}`;
    }
    console.log(this.$route.query.grohash);
  }
};
</script>
<style lang="stylus" scoped>
</style>
