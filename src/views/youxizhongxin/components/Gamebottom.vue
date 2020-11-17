<template>
    <div class="bottom">
        <div class="minibottom">
            <div class="bottomleft">
                <div class="logoleft">
                    <a href="">
                        <img src="../bilibili游戏中心/bilibili-logo-game.png"/>
                    </a>
                </div>
                <div class="logoright">
                    <a href="">
                        <img src="../bilibili游戏中心/culture-logo.png" height="60px" width="60px"/>
                    </a>
                </div>
            </div>
            <div class="bottomright">
                <div class="daohang">
                    <a href="">游戏中心</a>
                    |
                    <a href="">账号安全</a>
                    |
                    <a href="">找回密码</a>
                    |
                    <a href="">家长监护</a>
                    |
                    <a href="">用户协议</a>
                    |
                    <a href="">隐私政策</a>
                </div>
                <p>本网络游戏适合年满18岁（含）以上的玩家使用</p>
                <p>抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</p>
                <p>上海宽娱数码科技有限公司 | COPYRIGHT © 2009-2020 BILIBILI ALL RIGHTS RESERVED.</p>
                <p>互联网ICP备案：沪ICP备13002172号-3 沪ICP证：沪B2-20100043 | 沪网文
                <a href="">[2016]2296-134</a>号</p>
                <p><a><img style="vertical-align: top;width: 20px;height: 20px;" src="../bilibili游戏中心/record-logo.png"/>沪公网安备 31011002002436 号</a>　|　全国文化市场举报电话：12318</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Gamebottom"
    }
</script>

<style scoped>
    body{
        margin: 0;
        padding: 0;
    }
    .bottom{
        position: relative;
        height: 180px;
        width: 100%;
    }
    .minibottom{
        position: relative;
        height: 160px;
        width: 1080px;
        margin: 0 auto;
    }
    .bottomleft{
        height: 130px;
        width: 350px;
        position: relative;
        top: 15px;
    }
    .logoleft{
        position: relative;
        top: 20px;
        border-right: 1px solid lightseagreen;
        height: 60px;
        width: 220px;
    }
    .logoright{
        position: absolute;
        height: 60px;
        width: 70px;
        right: 30px;
        top: 18px;
    }

    .bottomright{
        position: absolute;
        height: 125px;
        width: 610px;
        right: 0;
        top: 15px;
        display: inline-block;
    }
    .daohang{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 12px;
    }
    .daohang a{
        text-decoration: none;
        color: #0089bc;
        padding: 8px;
    }
    .bottomright p{
        font-size: 12px;
        padding: 0;
        margin: 4px;
        color: #6d6d6d;
    }
    .bottomright a{
        text-align: left;
    }
</style>