<template>
  <div class="txyzm" v-show="change" @click="change" ref="yanzheng">
    <canvas id="canvas" height="28" width="110"></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {
      result:0
    };
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    randomColor(min, max) {
      let r = 252;
      let g = this.randomNum(min, max);
      let b = this.randomNum(min, max);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    drawDot(ctx) {
      for (let i = 0; i <100; i++) {
        ctx.fillStyle = this.randomColor(128, 255);
        ctx.beginPath();
        ctx.arc(
          this.randomNum(0, 110),
          this.randomNum(0, 28),
          1,
          0,
          2 * Math.PI
        );
        ctx.fill();
      }
    },
    change() {
      var sign1 = "+";
      var sign2 = "-";
      var sign3 = "=";
      var sign4 = "？";

      var ranNumber1 = parseInt(1 + Math.random() * 19);
      var ranNumber2 = parseInt(1 + Math.random() * 9);
      var ranNumber3 = parseInt(1 + Math.random() * 9);

      var x1 = Math.floor(1 + Math.random() * 10);
      var x2 = Math.floor(27 + Math.random() * 10);
      var x3 = Math.floor(44 + Math.random() * 10);
      var x4 = Math.floor(66 + Math.random() * 10);
      var x5 = Math.floor(88 + Math.random() * 10);

      var deg = Math.floor(1 + Math.random() * 14);
      var size = Math.floor(19 + Math.random() * 2);

      var c3 = document.getElementById("canvas");
      var ctx = c3.getContext("2d");

      let result ;
      if (ranNumber1 > ranNumber2) {
        ctx.clearRect(0, 0, 110, 28);
        ctx.fillStyle = "#9d4812";
        ctx.font = size + "px SeiHei";
        ctx.fillText(ranNumber1, x1, 20);

        ctx.font = size + "px SeiHei";
        ctx.fillText(sign2, x2, 18);

        ctx.font = size + "px SeiHei";
        ctx.fillText(ranNumber2, x3, 20);

        ctx.font = size + "px SeiHei";
        ctx.fillText(sign3, x4, 22);

        ctx.font = size + "px SeiHei";
        ctx.fillText(sign4, x5, 20);
        // this.$refs.yanzheng.innerHTML=ranNumber1+`-`+ranNumber2+`=`+`?`
        this.drawDot(ctx);
        result = ranNumber1 - ranNumber2;
        console.log(result);
        this.result=result;
      } else if (ranNumber2 != ranNumber3) {
        //&& ranNumber3!=10
        // this.$refs.yanzheng.innerHTML=ranNumber2+`+`+ranNumber1+`=`+`?`
        ctx.clearRect(0, 0, 110, 28);
        ctx.font = size + "px SeiHei";
        ctx.fillStyle = "#a15525";
        ctx.fillText(ranNumber2, x1, 15);

        ctx.font = size + "px SeiHei";
        ctx.fillText(sign1, x2, 20);

        ctx.font = size + "px SeiHei";
        ctx.fillText(ranNumber3, x3, 18);

        ctx.font = size + "px SeiHei";
        ctx.fillText(sign3, x4, 18);

        ctx.font = size + "px SeiHei";
        ctx.fillText(sign4, x5, 22);
        this.drawDot(ctx);
        result = ranNumber2 + ranNumber3;
        // console.log(result);
        this.result= result;
      }
    }
  },
  beforeUpdate() {
    this.$emit("showpro", this.result);
  },
};
</script>
<style scoped>
.txyzm {
  box-sizing: border-box;
  height: 28px;
  width: 110px;
  background:#fff;
}
</style>