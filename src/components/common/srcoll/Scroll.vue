<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";
import PullUp from "@better-scroll/pull-up";
import PullDown from "@better-scroll/pull-down";
import ObserveImage from "@better-scroll/observe-image";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
    //封装回到顶部函数
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
  mounted() {
    Bscroll.use(ObserveDOM);
    Bscroll.use(PullUp);
    Bscroll.use(PullDown);
    Bscroll.use(ObserveImage);
    // 创建Bscroll对象
    this.scroll = new Bscroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      observeDOM: true,
      pullUpLoad: this.pullUpLoad,
      // pullDownRefresh: true,
      observeImage: true,
    });

    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
    // this.scroll.on("pullingDown", () => {
    //   console.log("下拉加载更多");
    //   this.scroll.finishPullDown();
    // });
    // 监听滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }
  },
};
</script>

<style scoped></style>
