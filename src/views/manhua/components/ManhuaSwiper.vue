<template>
    <div class="manhua-swiper">
        <el-carousel :interval="4000" type="card" height="380px">
            <el-carousel-item>
                <img src="../../../CSS-manhua/top-01.jpg" height="380" width="760"/>
            </el-carousel-item>
            <el-carousel-item>
                <img src="../../../CSS-manhua/top-02.jpg" height="380" width="760"/>
            </el-carousel-item>
            <el-carousel-item>
                <img src="../../../CSS-manhua/top-02.jpg" height="380" width="760"/>
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
    height: 300px;
    width: 100%;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>