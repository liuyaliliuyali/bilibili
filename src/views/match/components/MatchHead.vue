<template>
    <div class="match-head">

            <div class="left">
                <a href="#"> <i class="left-icon"></i> 主站</a>
                <a href="#" style="color: #32AAFF">首页</a>
                <a href="#">番剧</a>
                <a href="#">游戏中心</a>
                <a href="#">直播</a>
                <a href="#">会员购</a>
                <a href="#">赛事</a>
                <a href="#">漫画</a>
            </div>
            <div class="right">
                <input class="right-ipt" type="text" placeholder="鬼灭之刃">
                <a href="#">大会员</a>
                <a href="#">消息</a>
                <a href="#">动态</a>
                <a href="#">收藏</a>
                <a href="#">历史</a>
                <a href="#">创作中心</a>
            </div>

    </div>
</template>

<script>
    export default {
        name: "MatchHead"
    }
</script>

<style scoped>
    .match-head{
        height: 50px;
        line-height: 50px;
        width: 100%;
        box-shadow: 0 0 5px 1px rgba(158,179,193,.5);
        overflow: visible;
        background-color: white;
        position: absolute;
        z-index: 99;
    }
    .left{
        float: left;
        height: 50px;
        line-height: 50px;
    }
    .left img{
        position: absolute;
        /*top:10px;*/
    }
    .left a,span,.right a{
        display: inline-block;
        /*width: 44px;*/
        height: 45px;
        line-height: 45px;
        font-size: 14px;
        color: rgba(0,0,0,0.8);
        text-decoration: none;
        padding: 0 12px;
    }
    .left a{
        position: relative;
        bottom:7px
    }

    .left span{
        width: 100px;
        margin-left: 30px;
    }
    .left-icon{
        display: inline-block;
        height: 40px;
        width: 140px;
        background: url("../../../CSS-match/billbill.png") -4px -15px;
        position: relative;
        top:14px
    }
    .left a:hover,.right a:hover{
        color: #32AAFF;
    }

    .right{
        float: right;
        height: 50px;
        line-height: 50px;
        margin-right: 20px;
    }
    .right-ipt{
        background-color: #f4f4f4;
        height: 30px;
        line-height: 30px;
        width: 270px;
        border: none;
        padding: 0 20px;
        outline: none;
        margin-right: 80px;
    }

</style>