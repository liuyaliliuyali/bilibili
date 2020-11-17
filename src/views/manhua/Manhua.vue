<template>
    <div>
        <manhua-header></manhua-header>
        <manhua-swiper></manhua-swiper>
        <manhua-nav></manhua-nav>
        <manhua-recommend></manhua-recommend>
        <manhua-rank></manhua-rank>
        <manhua-message></manhua-message>
        <manhua-bottom></manhua-bottom>
    </div>
</template>

<script>
    import ManhuaHeader from "./components/ManhuaHeader";
    import ManhuaSwiper from "./components/ManhuaSwiper";
    import ManhuaNav from "./components/ManhuaNav";
    import ManhuaRecommend from "./components/ManhuaRecommend";
    import ManhuaRank from "./components/ManhuaRank";
    import ManhuaMessage from "./components/ManhuaMessage";
    import ManhuaBottom from "./components/ManhuaBottom";
    export default {
        name: "Manhua",
        components: {ManhuaBottom, ManhuaMessage, ManhuaRank, ManhuaRecommend, ManhuaHeader, ManhuaNav, ManhuaSwiper}
    }
</script>

<style>
    body{
        margin: 0;
        padding: 0;
    }

</style>


