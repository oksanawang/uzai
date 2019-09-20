<template>
    <div>
        <div class="txyzm" v-show="change" @click="change" ref="yanzheng">
        <!-- <div class="txyzm" @loadstart="change" ref="yanzheng"> -->
            <canvas id="canvas" height="28" width="110"></canvas>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    props: {
    identifyCode: {
      type: String,
      default: "1234"
    },
    fontSizeMin: {
      type: Number,
      default: 25
    },
    fontSizeMax: {
      type: Number,
      default: 30
    },
    },
    methods:{
        change(){
            var sign1="+";
            var sign2="-";
            var sign3="=";
            var sign4="？";
            var deg=Math.floor(Math.random()*15)
            ctx.font="24px SeiHei"
            ctx.rotate(2*Math.PI/180);
            ctx.fillText(ranNumber1,10,28)
            ctx.fillText("+",20,28)
            ctx.fillText("-",30,28)
            ctx.fillText(ranNumber2,50,28)
            ctx.fillText(ranNumber3,60,28)
            ctx.fillText("=",70,28)
            ctx.fillText("?",80,28)

            var ranNumber1=parseInt(1+Math.random()*19);
            var ranNumber2=parseInt(1+Math.random()*9);
            var ranNumber3=parseInt(1+Math.random()*9);
            var result;
            if(ranNumber1>ranNumber2){//&& ranNumber2!=0
                this.$refs.yanzheng.innerHTML=ranNumber1+`-`+ranNumber2+`=`+`?`
                result=ranNumber1 - ranNumber2;
                console.log(result);
                return result;
            }else if(ranNumber2!=ranNumber3){//&& ranNumber3!=10
                this.$refs.yanzheng.innerHTML=ranNumber2+`+`+ranNumber1+`=`+`?`
                result=ranNumber2 + ranNumber3;
                console.log(result);
                return result;
            }
        },
    },
    // created() {
    //     this.change()
    // },
}
</script>
<style scoped>
    .txyzm{
    box-sizing: border-box;
    height: 28px;
    width: 110px;
    background: url(../../../public/images/reg_img/code.jpeg) no-repeat center;
    font-size:18px;
    font-weight:bold;
    color:#a15525;
    text-align: center;
    padding:5px 0;
    }
    /* #canvas{
    height: 28px;
    width: 110px;  
    } */
</style>