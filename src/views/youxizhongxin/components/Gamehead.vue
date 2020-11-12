<template>
    <div class="head">
        <div class="head-first">
        </div>
        <div class="head-second">
            <div class="trundle">
                <el-carousel :interval="4000"  height="220px">
                    <el-carousel-item>
                        <img src="../bilibili游戏中心/列表/4a2e14d8bdffc9e13a72619205a7d7af0e0517fd.jpg"/>
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../bilibili游戏中心/列表/4bc8d7d129aa12702272909e843c10fbb04c30d3.jpg"/>
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../bilibili游戏中心/列表/7a534bd2a0f6e72f8974012dc0c429d9581f027a.jpg"/>
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../bilibili游戏中心/列表/84a397fff3d17dd6fe3337ef7f62309427eb3f7f.jpg"/>
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../bilibili游戏中心/列表/3003ddbc570cb6177751a92e5a8c3ea5b8e6fbe5.jpg"/>
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../bilibili游戏中心/列表/6898246f2d96f7a46a82567ea8e26d6069d7ee77.jpg"/>
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../bilibili游戏中心/列表/b8ae74be31c72621833a826616e22b4e7c650bd8.jpg"/>
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../bilibili游戏中心/列表/c3471e94debf6a8506d2df66617c06337851c759.jpg"/>
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../bilibili游戏中心/列表/ed27c651b8d8fd64af5bb11539c1deb8f3d68d16.jpg"/>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="blackbutton">
                <a class="one" href=""></a>
                <a class="two" href=""></a>
                <a class="three" href=""></a>
                <a class="bg1"></a>
                <a class="bg2"></a>
                <a class="bg3"></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Gamehead"
    }
</script>

<style>
    body{
        margin: 0;
        padding: 0;
    }
    .head{
        border: 1px solid blue;
        width: 100%;
        height: 460px;
        top: 0;
        left: 0;
    }
    .head-first{
        border: 1px solid red;
        width: 100%;
        height: 53px;
        top: 0;
        left: 0;
        background: #fff;
    }
    .head-second{
        border: 1px solid green;
        width: 100%;
        height: 400px;
        top: 0;
        left: 0;
        background: url("../bilibili游戏中心/top-gamelist.jpg") no-repeat center center;
    }
    .trundle{

        width: 1000px;
        height: 220px;
        margin: 33px auto;
    }
    .blackbutton{
        border: 1px solid #212121;
        height: 109px;
        width: 1000px;
        margin: -6px auto;
        background: url("../bilibili游戏中心/mainmenu-ul-180523.jpg");
    }
    .bg1{
        border: 1px solid red;
        position: absolute;
        height: 109px;
        width: 330px;
        margin-left:0;
    }
    .bg1:hover{
        background: url("../bilibili游戏中心/mainmenu-a-180523.jpg");
    }
    .bg2{
        border: 1px solid red;
        position: absolute;
        height: 109px;
        width: 330px;
        margin-left:334px;
    }
    .bg2:hover{
        background: url("../bilibili游戏中心/mainmenu-a-180523.jpg");
    }
    .bg3{
        border: 1px solid red;
        position: absolute;
        height: 109px;
        width: 330px;
        margin-left:668px;
    }
    .bg3:hover{
        background: url("../bilibili游戏中心/mainmenu-a-180523.jpg");
    }
    .one{
        position: absolute;
        height: 109px;
        width: 200px;
        background: url("../bilibili游戏中心/mainmenu-li-new.png")0 0;
        margin-left: 70px;
        z-index: 99;
    }
    .one:hover{
        background: url("../bilibili游戏中心/mainmenu-li-new.png")0 -110px;
    }
    .two{
        position: absolute;
        height: 109px;
        width: 200px;
        background: url("../bilibili游戏中心/mainmenu-li-new.png")-205px 0;
        margin-left: 400px;
        z-index: 99;
    }
    .two:hover{
        background: url("../bilibili游戏中心/mainmenu-li-new.png")-205px -110px;
    }
    .three{
        position: absolute;
        height: 109px;
        width: 200px;
        background: url("../bilibili游戏中心/mainmenu-li-new.png")-600px 0;
        margin-left: 730px;
        z-index: 99;
    }
    .three:hover{
        background: url("../bilibili游戏中心/mainmenu-li-new.png")-600px -110px;
    }
    </style>