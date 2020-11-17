<template>
    <div class="manhua-rank">
        <div class="container">
            <div class="header">
                <span class="title">高能排行</span>
                <el-menu
                        style="display: inline-block;border: none;margin-left: 30px;height: 40px;line-height: 30px"
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="transparent"
                        active-text-color="#ffffffa8"
                       >
                    <el-menu-item index="1">漫画榜</el-menu-item>
                    <el-menu-item index="1">国漫榜</el-menu-item>
                    <el-menu-item index="1">飙升榜</el-menu-item>
                </el-menu>
            </div>
            <div class="main" style="height: 300px;width: 100%">
                <div class="top" style="display: flex;height:214px;background-color:#393634">
                    <div class="left"></div>
                    <div class="center">
                            <div class="center-1">咒术回战</div>
                            <div class="center-2">芥见下下，集英社</div>
                            <div class="center-main">咒术回战0卷 东京都立咒术高等专门学校（全一册）已更新在第1话前【此漫画的翻译由版权方提供】拥有超人般身体能力的男子高中生虎杖悠仁的黑暗幻想故事。因为某种理由，想要每天17点之前回家的虎杖悠仁来到了不强制出席的灵异现象研究会，享受着悠闲的活动。这样的某一天，来学校寻找被封印的诅咒之物的青年伏黑恵出现于虎杖的面前</div>
                    </div>
                    <div style="margin: 27px 0;
                    border-right: 1px dashed hsla(0,0%,100%,.32);
                    height: calc(100% - 54px);
                    opacity: .6;"></div>
                    <div class="right" style="width: 150px;height: 100%;background-color:#393634">
                        <img src="../../../CSS-manhua/1.png" alt="" width="40px" height="88px">
                    </div>
                </div>
                <div class="others">
                    <a href="#">
                        <div class="others-img">
                            <div class="img-bg">
                                <img src="../../../CSS-manhua/2.png" height="40" width="22"/>
                            </div>
                        </div>
                        <div class="others-title">鬼灭之刃</div>
                    </a>
                    <a href="#">
                        <div class="others-img">
                            <div class="img-bg">
                                <img src="../../../CSS-manhua/2.png" height="40" width="22"/>
                            </div>
                        </div>
                        <div class="others-title">鬼灭之刃</div>
                    </a>
                    <a href="#">
                        <div class="others-img">
                            <div class="img-bg">
                                <img src="../../../CSS-manhua/2.png" height="40" width="22"/>
                            </div>
                        </div>
                        <div class="others-title">鬼灭之刃</div>
                    </a>
                    <a href="#">
                        <div class="others-img">
                            <div class="img-bg">
                                <img src="../../../CSS-manhua/2.png" height="40" width="22"/>
                            </div>
                        </div>
                        <div class="others-title">鬼灭之刃</div>
                    </a>
                    <a href="#">
                        <div class="others-img">
                            <div class="img-bg">
                                <img src="../../../CSS-manhua/2.png" height="40" width="22"/>
                            </div>
                        </div>
                        <div class="others-title">鬼灭之刃</div>
                    </a>
                    <a href="#">
                        <div class="others-img">
                            <div class="img-bg">
                                <img src="../../../CSS-manhua/7.png" height="40" width="22"/>
                            </div>
                        </div>
                        <div class="others-title">辉夜大小姐想让我告白 ~天才们的恋爱头脑战~</div>
                    </a>
                    <a href="#">
                        <div class="others-img">
                            <div class="img-bg">
                                <img src="../../../CSS-manhua/2.png" height="40" width="22"/>
                            </div>
                        </div>
                        <div class="others-title">鬼灭之刃</div>
                    </a>
                    <a href="#">
                        <div class="others-img">
                            <div class="img-bg">
                                <img src="../../../CSS-manhua/2.png" height="40" width="22"/>
                            </div>
                        </div>
                        <div class="others-title">鬼灭之刃</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManhuaRank",
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .manhua-rank{
        height: 700px;
        width: 100%;
        background-image: url(//i0.hdslb.com/bfs/manga-static/manga-pc/static/img/17511fbcafba6.png);
        background-position: 50%;
        background-size: cover;
        background-color: black;
    }
    .container {
        width: 1160px;
        margin: 0 auto;
    }

    .title{
        display: inline-block;
        font-size: 32px;
        line-height: 45px;
        padding: 60px 0 16px;
        color:white;
    }

    /*激活菜单不变色*/
    .el-menu-item.is-active {
        background-color: transparent !important;
        color: #fff;
    }
    /*去掉菜单下划线*/
    .el-menu--horizontal > .el-menu-item.is-active {
        border: none;
    }

    .left{
        width: 160px;
        height: 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("//i0.hdslb.com/bfs/manga-static/3dd4816087977d28e6fe821b791b2b443f7fe959.jpg@180w_240h.jpg");
    }
    .center{
        padding: 30px 40px;
        flex: 1;
        color: #fff;
        font-size: 26px;
        line-height: 37px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .center-2{
        color: hsla(0,0%,100%,.86);
        font-size: 14px;
        line-height: 22px;
    }
    .center-main{
        width: 100%;
        margin: 15px 0 5px;
        font-size: 13px;
        line-height: 22px;
        color: hsla(0,0%,100%,.66);
        max-height: 88px;
        /*超出div部分换行*/
        white-space: normal;
        word-break: break-all;
    }
    .right img{
        margin-left: 55px;
        margin-top: 63px;
    }

    .others{
        display: flex;
        margin-top: 50px;
    }
    .others a{
        display: inline-block;
        padding: 0 5px;
        flex: 1;
    }
    .others-img{
        height: 180px;
        background-image: url("//i0.hdslb.com/bfs/manga-static/932a161a0408311e835c11ef5e04b6807abf5f2e.jpg@180w_240h.jpg");
        width: 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 2px;
    }
    .img-bg{
        position: relative;
        width: 100%;
        height: 120px;
        background: linear-gradient(
         42deg,rgba(39,39,39,0) 54%,rgba(30,30,30,.28) 68%,rgba(22,22,22,.46) 80%,rgba(13,13,13,.6) 91%,rgba(5,5,5,.74)
        );
    }
    .img-bg img{
        position: absolute;
        right: 5px;
        top:-5px;
    }
    .others-title{
        color: #fff;
        height: 48px;
        font-size: 17px;
        line-height: 24px;
        margin-top: 14px;
    }



</style>