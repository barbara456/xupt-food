<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前美食</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.currentFood }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">大家爱吃</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleFoodClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of foods" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
          <div class="item-list"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleFoodClick(innerItem.name)"
          >
            <div class="item border-bottom">
              {{ innerItem.name }}
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapState, mapMutations } from 'vuex'
export default {
  name: "FoodList",
  props: {
    hot: Array,
    foods: Object,
    letter: String,
  },
  computed:{
    ...mapState({
      currentFood:'food'
    })
  },
  methods: {
    handleFoodClick(food) {
      // this.$store.commit("changeFood", food);
      this.changeFood(food)
      this.$router.push('/home')
    },
    ...mapMutations(['changeFood'])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {click:true});
  },
  watch: {
    letter() {
      const element = this.$refs[this.letter][0];
      this.scroll.scrollToElement(element);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-topbottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
