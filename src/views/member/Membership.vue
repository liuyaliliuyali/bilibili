<template>
    <div>
        <member-swiper></member-swiper>
        <member-nav></member-nav>
        <MemberCenter></MemberCenter>
    </div>
</template>

<script>
    import memberSwiper from "./components/MemberSwiper";
    import MemberNav from "./components/MemberNav";
    import MemberCenter from "./components/MemberCenter";
    export default {
        name: "member",
        components: {MemberCenter, MemberNav, memberSwiper}
    }
</script>

<style scoped>

</style>


