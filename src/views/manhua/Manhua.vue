<template>
    <div>
        <manhua-header></manhua-header>
        <manhua-swiper></manhua-swiper>
        <manhua-nav></manhua-nav>
        <manhua-recommend></manhua-recommend>
        <manhua-rank></manhua-rank>
    </div>
</template>

<script>
    import ManhuaHeader from "./components/ManhuaHeader";
    import ManhuaSwiper from "./components/ManhuaSwiper";
    import ManhuaNav from "./components/ManhuaNav";
    import ManhuaRecommend from "./components/ManhuaRecommend";
    import ManhuaRank from "./components/ManhuaRank";
    export default {
        name: "Manhua",
        components: {ManhuaRank, ManhuaRecommend, ManhuaHeader, ManhuaNav, ManhuaSwiper}
    }
</script>

<style>
    body{
        margin: 0;
        padding: 0;
    }

</style>


