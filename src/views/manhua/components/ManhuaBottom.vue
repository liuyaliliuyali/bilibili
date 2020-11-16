<template>
    <div class="manhua-bottom">
        <div class="container">
            <div class="left">
                <img src="../../../CSS-manhua/bottom-1.png" height="78px" width="255px"/>
                <div class="a-href">
                    <a href="#">关于我们</a>
                    <a href="#">联系我们</a>
                    <a href="#">友情链接</a>
                    <a href="#">加入我们</a>
                </div>
            </div>
            <div style="width: 1px;
            height: 88px;
            background-color: hsla(0,0%,100%,.2);"></div>
            <div class="right">
                <a href="#">
                    <img src="../../../CSS-manhua/bzgw-logo.png" height="66" width="67"/>
                    <p>B 站官号</p>
                    <div><div class="sanjiao"></div>关注即送券</div>
                </a>
                <a href="#">
                    <img style="opacity: .75;" src="../../../CSS-manhua/xlwb-logo.png" height="64" width="64"/>
                    <p>新浪微博</p>
                </a>
                <a href="#">
                    <img style="opacity: .75;" src="../../../CSS-manhua/xz-logo.png" height="64" width="64"/>
                    <p>下载bilibili客户端</p>
                </a>
            </div>
            <div class="bottom">
                <img src="../../../CSS-manhua/bottom-2.png" height="55" width="200"/>
                <div style="color: hsla(0,0%,100%,.4);font-size: 12px ">
                    <p>互联网 ICP 备案：沪 ICP17039440 号 - 1 | 网络文化经营许可证：沪网文 [2017]10251-781 号</p>
                    <p>全国网安备案号：31011002003092 | 增值电信业务经营许可证 沪 B2-20190879</p>
                    <p>12318 全国文化市场举报网站|上海市互联网违法和不良信息举报中心</p>
                    <p>上海呵呵呵文化传播有限公司 | 地址：上海市杨浦区政立路485号 | 电话：021-25099888</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManhuaBottom"
    }
</script>

<style scoped>
    .manhua-bottom{
        margin-top: 50px;
        background: #212121;
        padding-top: 40px;
        padding-bottom: 20px;
    }
    .container {
        width: 1160px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }
    .left{
        width: 660px;
        display: flex;
        font-size: 14px;
    }
    .a-href{
        width: 260px;
        margin-left: 30px;
    }
    .a-href a{
        display: inline-block;
        margin: 10px 30px;
        color: hsla(0,0%,100%,.6);
        text-decoration: none;
    }
    .right{
        display: flex;
        margin-left: 50px;

    }
    .right a{
        position: relative;
        margin: 0 38px;
    }
    .right a p{
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        white-space: nowrap;
        color: hsla(0,0%,100%,.4);
        font-size: 12px;
    }
    .right  a div{
        padding: 2px 6px;
        left: 50%;
        top: 130%;
        transform: translate(-50%);
        border-radius: 2px;
        background-color: #fb7299;
        color: #fff;
        white-space: nowrap;
        font-size: 12px;
        position: absolute;
    }
    /*.sanjiao{*/
    /*    clear: both;*/
    /*    background-color:#212121;*/
    /*    height: 0;*/
    /*    width: 0;*/
    /*    content: "";*/
    /*    display: block;*/
    /*    border: 4px solid #fb7299;*/
    /*    border-top: none;*/
    /*    border-right-color: transparent;*/
    /*    border-left-color: transparent;*/
    /*    position: absolute;*/
    /*    top:-50px;*/
    /*    left: 50%;*/
    /*    transform: translate(-50%,-100%);*/
    /*}*/
    .bottom {
        display: flex;
        margin-top: 30px;
    }
    .bottom img{
        margin: 35px 30px 0 0;
        display: block;
    }
</style>