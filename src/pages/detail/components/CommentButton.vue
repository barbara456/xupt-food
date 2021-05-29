<template>
  <div class="content">
    <div class="operate" @click="operateComment({isGn:true})">
      <img src="https://z3.ax1x.com/2021/05/29/2A2Gbq.png">
      <div>好评{{comment.gn}}</div>
      </div>
    <div class="operate" @click="operateComment({isAn:true})">
      <img src="https://z3.ax1x.com/2021/05/29/2A2jzQ.png">
        <div>中评{{comment.an}}</div>
    </div >
    <div class="operate" @click="operateComment({isBn:true})"><img src="https://z3.ax1x.com/2021/05/29/2AR9Zq.png"> <div>差评{{comment.bn}}</div></div>
  </div>
</template>

<script>
import axios from "axios";
import { userUrl } from '../../../config/api_url';

export default {
  name: 'Commentdiv',
  props: {
    comment: Object
  },
  methods: {
    getDetailInfo() {
      axios
        .get(userUrl + "/foodDetail", {
          params: {
            id: this.$route.params.id,
          },
        })
        .then(this.handleGetDataSucc);
    },
    operateComment({isGn, isAn, isBn }) {
      axios
        .post(`${userUrl}/operateComment`, {
          gn: isGn ? +this.comment.gn + 1 : +this.comment.gn,
          bn: isBn ? +this.comment.bn + 1 : +this.comment.bn,
          an: isAn ? +this.comment.an + 1 : +this.comment.an,
          id: this.$route.params.id
        })
        .then(res => {
          // 刷新当前页面
          this.$router.go(0);
        })
        .catch(err => {
          alert('评论失败');
        });
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  display flex
  justify-content space-around
  height 1rem
  width 5rem
  position fixed
  left 1rem
  top 12rem
  right 1rem
  bottom 0
  .operate
    width 0.9rem
    height 0.9rem
    border-radius 50%
    display flex
    flex-direction column
    justify-content center
    align-items center
    img
      width 100%
      height auto
</style>
