<template>
    <div class="manhua-swiper">
        <el-carousel :interval="4000" type="card" height="380px" arrow="always" indicator-position="none">
            <el-carousel-item>
                <a class="part1" href="https://www.bilibili.com/blackboard/activity--J5IrGTFv.html?from=manga_homepage_banner"></a>
            </el-carousel-item>
            <el-carousel-item>
                <img src="../../../CSS-manhua/top-02.jpg" height="380" width="760"/>
            </el-carousel-item>
            <el-carousel-item>
                <img src="../../../CSS-manhua/top-03.jpg" height="380" width="760"/>
            </el-carousel-item>
            <el-carousel-item>
                <img src="../../../CSS-manhua/top-04.jpg" height="380" width="760"/>
            </el-carousel-item>
            <el-carousel-item>
                <img src="../../../CSS-manhua/top-05.jpg" height="380" width="760"/>
            </el-carousel-item>
        </el-carousel>

    </div>
</template>

<script>
    export default {
        name: "ManhuaSwiper"
    }
</script>

<style scoped>


.manhua-swiper{
    height: 380px;
    width: 100%;
    background: #212121;
}
.manhua-swiper a{
    display: inline-block;
    height: 380px;
    width: 760px;
}
.part1{
    background-image: url("../../../CSS-manhua/top-01.jpg");
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

</style>