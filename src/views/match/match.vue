<template>
    <div>
        <match-header></match-header>
        <match-nav></match-nav>
    </div>
</template>
<script>
    import MatchHead from "./components/MatchHead";
    import MatchSwiper from "./components/MatchSwiper";
    import MatchNav from "./components/MatchNav";
    export default {
        name: "match",
        components: {MatchHead,MatchNav,MatchSwiper}
    }
</script>

<style scoped>

</style>