<template>
    <div>
        <manhua-header></manhua-header>
        <manhua-swiper></manhua-swiper>
        <manhua-nav></manhua-nav>
        <manhua-recommend></manhua-recommend>
    </div>
</template>

<script>
    import ManhuaHeader from "./components/ManhuaHeader";
    import ManhuaSwiper from "./components/ManhuaSwiper";
    import ManhuaNav from "./components/ManhuaNav";
    import ManhuaRecommend from "./components/ManhuaRecommend";
    export default {
        name: "Manhua",
        components: {ManhuaRecommend, ManhuaHeader, ManhuaNav, ManhuaSwiper}
    }
</script>

<style>
    body{
        margin: 0;
        padding: 0;
    }

</style>


