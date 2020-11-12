<template>
    <div>
        <manhua-header></manhua-header>
        <manhua-swiper></manhua-swiper>
        <manhua-nav></manhua-nav>
    </div>
</template>

<script>
    import ManhuaHeader from "./components/ManhuaHeader";
    import ManhuaSwiper from "./components/ManhuaSwiper";
    import ManhuaNav from "./components/ManhuaNav";
    export default {
        name: "Manhua",
        components: {ManhuaHeader, ManhuaNav, ManhuaSwiper}
    }
</script>

<style scoped>

</style>


