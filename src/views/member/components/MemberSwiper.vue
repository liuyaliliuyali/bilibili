<template>
    <div class="member-swiper">
        <el-carousel :interval="4000"  height="190px">
            <el-carousel-item>
                <img src="../../../CSS-member/swiper1.jpeg"  width="100%"/>
            </el-carousel-item>
            <el-carousel-item>
                <img src="../../../CSS-member/swiper2.jpeg"  width="100%"/>
            </el-carousel-item>
        </el-carousel>
        <div class="member-writing">
            <div class="first">
                <span>城市：</span>
                <a href="#">上海</a>
                <a href="#">北京</a>
                <a href="#">成都</a>
                <a href="#">杭州</a>
                <a href="#">南京</a>
                <a href="#">天津</a>
                <a href="#">西安</a>
                <a href="#">厦门</a>
                <a style="width: 70px" href="#">更多城市 ⤵</a>

            </div>

            <div class="second">
                    <span>类型:</span>
                    <a href="#">全部类型</a>
                    <a href="#">演出</a>
                    <a href="#">展览</a>
                    <a href="#">本地生活</a>
                </div>
            <div three>
                <span>筛选:</span>
                <a href="#">时间</a>
                <a href="#">本周</a>
                <a href="#">本月</a>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "memberSwiper"
    }
</script>

<style scoped>


    .member-swiper{

        width: 100%;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .member-writing{
        background-color: white;
        margin-left: 55px;
        margin-right: 55px;
        color: darkgray;
        font-size: 13px;
    }
    .member-writing a {
        display: inline-block;
        width: 60px;
        height: 40px;
        line-height: 40px;
        color: #99a9bf;
        margin: 0 30px 0;
        text-decoration: none;
    }

    .member-writing a:hover{
        color: hotpink;
    }
    .first{
        border-bottom: 1px dashed #e5e9ef;
    }
    .second{
        border-bottom: 1px dashed #e5e9ef;
    }
    .member-center{
        margin: 0px 51px;
        padding: 0px 0px 55px;
    }
</style>