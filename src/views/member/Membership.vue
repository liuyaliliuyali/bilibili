<template>
    <div>
        <member-swiper></member-swiper>
        <member-nav></member-nav>
    </div>
</template>

<script>
    import memberSwiper from "./components/MemberSwiper";
    import MemberNav from "./components/MemberNav";
    export default {
        name: "member",
        components: {MemberNav, memberSwiper}
    }
</script>

<style scoped>

</style>


