<template>
    <div class="manhua-nav">
        <div class="container">
            <a href="#">正能量</a>
            <a href="#">冒险</a>
            <a href="#">热血</a>
            <a href="#">搞笑</a>
            <a href="#">恋爱</a>
            <a href="#">少女</a>
            <a href="#">纯爱</a>
            <a href="#">日常</a>
            <a href="#">校园</a>
            <a href="#">运动</a>
            <a href="#">治愈</a>
            <a href="#">橘味</a>
            <a href="#">古风</a>
            <a href="#">玄幻</a>
            <a href="#">全部></a>



        </div>
    </div>
</template>

<script>
    export default {
        name: "ManhuaNav"
    }
</script>

<style scoped>
    .manhua-nav{
        background: #212121;
        width: 100%;
        height: 70px;

    }
.container{
    width: 1160px;
    margin: 0 auto;
}
    .manhua-nav a{
        display: inline-block;
        width: 77px;
        height: 70px;
        line-height: 70px;

        font-size: 16px;
        color: white;
        text-decoration: none;
    }
</style>