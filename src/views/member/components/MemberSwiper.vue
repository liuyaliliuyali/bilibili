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
        <div class="member writing">
            <span>城市：</span>
            <a href="#">上海</a>
            <a href="#">北京</a>
            <a href="#">成都</a>
            <a href="#">杭州</a>
            <a href="#">南京</a>
            <a href="#">天津</a>
            <a href="#">西安</a>
            <a href="#">厦门</a>
            <a href="#">更多城市</a>
            <el-divider></el-divider>
                <div>
                    <span>类型</span>
                    <a href="#">全部类型：</a>
                    <a href="#">演出</a>
                    <a href="#">展览</a>
                    <a href="#">本地生活</a>

                    <el-divider></el-divider>
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
</style>