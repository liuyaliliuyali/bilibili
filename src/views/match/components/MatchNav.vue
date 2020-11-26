<template>
    <div class="match-nav">
        <div style="padding-top: 50px">
            <img src="../../../CSS-match/matchbackground.png"  width="100%"/>
        </div>
        <div class="container">
            <div style="z-index: 99;height: 45px;background: #212121">
                <a href="#">赛事首页</a>
                <a href="#">赛程</a>
                <a href="#">视频库</a>
                <a href="#">大数据</a>
                <a href="#">战队</a>
                <a href="#">预测</a>
                <input class="right-ipt" type="text">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "MatchNav"
    }
</script>

<style scoped>
    .match-nav{
        background: #212121;
        width: 100%;
        /*height: 70px;*/

    }
    .container{
        width: 1160px;
        margin: 0 auto;
    }
    .match-nav a{
        display: inline-block;
        width: 77px;
        height: 45px;
        line-height: 45px;
        font-size: 15px;
        color: #999999;
        text-decoration: none;
    }
    .right-ipt{
        line-height: 30px;
        background-color: rgba(79, 79, 79, 0.53);
        border-radius: 25px;
        outline: none;
        border: none;
        height: 28px;
        width: 240px;
        float:right;
        margin-top: 5px;
    }
   </style>
