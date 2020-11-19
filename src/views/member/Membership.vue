<template>
    <div>
        <member-nav></member-nav>
        <member-swiper></member-swiper>
        <MemberCenter></MemberCenter>
        <MemberFooter></MemberFooter>
    </div>
</template>

<script>
    import memberSwiper from "./components/MemberSwiper";
    import MemberNav from "./components/MemberNav";
    import MemberCenter from "./components/MemberCenter";
    import MemberFooter from "./components/MemberFooter";
    export default {
        name: "member",
        components: {MemberFooter, MemberCenter, MemberNav, memberSwiper}
    }
</script>

<style scoped>

</style>


