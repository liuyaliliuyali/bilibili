<template>
    <div>
        <fanju-head></fanju-head>
        <fanju-nav></fanju-nav>
        <fanju-tag></fanju-tag>
        <fanju-ban></fanju-ban>
        <fanju-xin></fanju-xin>
        <fanju-tou></fanju-tou>
        <fanju-foot></fanju-foot>
    </div>
</template>

<script>
    import FanjuNav from "./components/FanjuNav";
    import FanjuTag from "./components/FanjuTag";
    import FanjuBan from "./components/FanjuBan";
    import FanjuXin from "./components/FanjuXin";
    import FanjuTou from "./components/FanjuTou";
    import FanjuFoot from "./components/FanjuFoot";
    import FanjuHead from "./components/FanjuHead";
    export default {
        name: "Fanju",
        components: {FanjuHead, FanjuFoot, FanjuTou, FanjuXin, FanjuBan, FanjuTag, FanjuNav}
    }
</script>

<style scoped>

</style>