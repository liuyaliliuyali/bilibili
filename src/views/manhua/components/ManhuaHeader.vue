<template>
    <div class="manhua-header">
        <div class="container">
            <div class="left">
                <img src="../../../CSS-manhua/logo-1.png" height="32" width="32"/>
                <span>哔哩哔哩漫画</span>
                <a href="#"> <i class="left-icon"></i> 主站</a>
                <a href="#">首页</a>
                <a href="#">分类</a>
                <a href="#">排行榜</a>
                <a href="#">更新</a>
            </div>
            <div class="right">
                <input class="right-ipt" type="text" placeholder="鬼灭之刃">
                <a href="#">下载APP</a>
                <a href="#">历史</a>
                <a href="#">追漫</a>
                <div class="user"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManhuaHeader"
    }
</script>

<style scoped>
    .manhua-header{
        height: 50px;
        width: 100%;
        box-shadow: 0 0 5px 1px rgba(158,179,193,.5);
        overflow: visible;
        background-color: white;
        position: absolute;
        z-index: 99;
    }
    .container {
        width: 1160px;
        margin: 0 auto;
    }
    .left{
        float: left;
        height: 50px;
        line-height: 50px;
    }
    .left img{
        position: absolute;
        top:10px
    }
    .left a,span,.right a{
        display: inline-block;
        /*width: 44px;*/
        height: 50px;
        line-height: 50px;

        font-size: 14px;
        color: rgba(0,0,0,0.8);
        text-decoration: none;
        padding: 0 12px;
    }

    .left span{
        width: 100px;
        margin-left: 30px;
    }
    .left-icon{
        display: inline-block;
        height: 25px;
        width: 25px;
        background: url("../../../CSS-manhua/icon-01.png") -4px -4px;

        position: relative;
        top:7px
    }
    .left a:hover,.right a:hover{
        color: #32AAFF;
    }

    .right{
        float: right;
        height: 50px;
        line-height: 50px;
    }
    .right-ipt{
        background-color: #f4f4f4;
        height: 30px;
        line-height: 30px;
        width: 180px;
        border-radius: 25px;
        border: none;
        padding: 0 20px;
        outline: none;
        margin-right: 20px;
    }

</style>