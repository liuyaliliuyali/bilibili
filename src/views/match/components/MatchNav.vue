<template>
    <div class="match-nav">
        <img src="../../../CSS-match/matchbackground.png" height="200" width="1410"/>
        <div class="container">
            <a href="#">赛事首页</a>
            <a href="#">赛程</a>
            <a href="#">视频库</a>
            <a href="#">大数据</a>
            <a href="#">战队</a>
            <a href="#">预测</a>
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

    }
    .container{
        margin-top: 10px;
        width: 1200px;
    }
    .match-nav a{
        margin-left: 20px;
        display: inline-block;
        width: 80px;
        height: 40px;
        line-height: 25px;
        font-size: 16px;
        color: white;
        text-decoration: none;
    }
   </style>
