<template>
    <div>
        <!-- <img src="" alt="" class="" @click="change"> -->
        <div class="txyzm" @click="change" ref="yanzheng">
            <!-- <img src="../../../public/images/reg_img/code.jpeg" /> -->
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        change(){
            var ranNumber1=parseInt(1+Math.random()*19);
            var ranNumber2=parseInt(1+Math.random()*9);
            var ranNumber3=parseInt(1+Math.random()*9);
            var result;
            if(ranNumber1>ranNumber2){//&& ranNumber2!=0
                this.$refs.yanzheng.innerHTML=ranNumber1+`-`+ranNumber2+`=`+`?`
                // console.log(ranNumber1+`-`+ranNumber2+`=`+`?`);
                result=ranNumber1 - ranNumber2;
                console.log(result);
                return result;
            }else if(ranNumber2!=ranNumber3){//&& ranNumber3!=10
                this.$refs.yanzheng.innerHTML=ranNumber2+`+`+ranNumber1+`=`+`?`
                // console.log(ranNumber2+`+`+ranNumber1+`=`+`?`);
                result=ranNumber2 + ranNumber3;
                console.log(result);
                return result;
            }
        },
    },
}
</script>
<style scoped>
    .txyzm{
    height: 28px;
    width: 110px;
    background: url(../../../public/images/reg_img/code.jpeg) no-repeat center;
    /* color: */
    font-size:18px;
    font-weight:bold;
    }
</style>>
    
</style>