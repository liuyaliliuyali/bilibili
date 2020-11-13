<template>
    <div class="core">
        <div class="index">
            <h2>游戏列表</h2>
            <div class="classify">
                <a href="">全部</a>
                <a href="">手游</a>
                <a href="">页游</a>
                <a href="">端游</a>
            </div>
        </div>
        <div class="item">
            <a class="el-icon-s-home"></a>
            <a href="">首页</a>
            <span>></span>
            <span>游戏列表</span>
        </div>
        <div class="module">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Gamecore"
    }
</script>

<style scoped>
    body{
        margin: 0;
        padding: 0;
    }
    .core{
        border: 1px solid orange;
        width: 100%;
        height: 2000px;
        top: 0;
        left: 0;
    }
    .index{
        height: 55px;
        width: 1000px;
        margin: -3px auto;
    }
    .index h2{
        padding: 8px 0 7px 10px;
        border-left: 12px solid #2cbdf0;
        border-bottom: 3px solid #2cbdf0;
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        line-height: 1;
        color: #2cbdf0;
    }
    .classify{
        position: relative;
        margin-left: 785px;
        height: 25px;
        width: 220px;
        margin-top: -50px;
        text-align: right;
    }
    .classify a{
        background-color: white;
        font-size: 2px;
        border-radius: 3px;
        border: 1px solid #707070;
        display: inline-block;
        line-height: 15px;
        margin:0 6px;
        height: 16px;
        width: 35px;
        text-align: center;
        text-decoration: none;
    }
    .classify a:hover{
        border-color: #2bcdf0 ;
        color: #2cbdf0;
        text-decoration: none;
    }
    .item{
        height: 30px;
        width: 1000px;
        border: 1px solid green;
        margin: 0 auto;
        font-size: 2px;
        border-top: 3px solid floralwhite;

    }
    .item a{
        position: relative;
        top: 7px;
        left: 5px;
        text-decoration: none;
        color:#707070;
        margin: 5px;
    }
    .item a:hover{
        color: #2cbdf0;
    }
    .item span{
        margin: 6px;
        position: relative;
        top: 7px;
        left: 2px;
        color:#707070;
    }
    .module{
        height: 1500px;
        width: 1000px;
        margin: 0 auto;
        border: 1px solid blue;
    }
</style>