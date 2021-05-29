<template>
  <div>
    <detail-banner
      :sightName='sightName'
      :bannerImg='bannerImg'
      :bannerImgs='gallaryImgs'
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
    <detail-comment :comment="comment"></detail-comment>
  </div>
</template>

<script>
import ApiUrl from '@/config/api_url'
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import DetailComment from "./components/CommentButton"
import axios from "axios";
import { userUrl } from '../../config/api_url';
import {handleCategoryList} from '../../config/utils';

export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailComment,

  },
  data() {
    return {
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],
      list: [],
      comment: {}
    };
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
    handleGetDataSucc(res) {
      const data = res.data;
      const { gn, an,bn} = data[0];
      this.comment = {
        gn,an,bn
      };
      console.log(data[0])
      this.bannerImg=data[0].imgUrl

      // todo: 优化轮播
      this.gallaryImgs=[data[0].imgUrl]

      this.list = handleCategoryList(data[0].title)

      // 旧逻辑
      // res = res.data;
      // if (res.ret && res.data){
      //   const data = res.data;
      //   this.sightName=data.sightName
      //   this.bannerImg=data.bannerImg
      //   this.gallaryImgs=data.gallaryImgs
      //   this.list=data.categoryList
      // }
    },
  },
  mounted() {
    this.getDetailInfo();
  },
};
</script>

<style lang="stylus" scoped>
.content {
  height: 30rem;
}
</style>
