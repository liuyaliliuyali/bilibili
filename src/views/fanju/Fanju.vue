<template>
    <div>
        <fanju-nav></fanju-nav>
        <fanju-tag></fanju-tag>
        <fanju-ban></fanju-ban>
    </div>
</template>

<script>
    import FanjuNav from "./components/FanjuNav";
    import FanjuTag from "./components/FanjuTag";
    import FanjuBan from "./components/FanjuBan";
    export default {
        name: "Fanju",
        components: {FanjuBan, FanjuTag, FanjuNav}
    }
</script>

<style scoped>

</style>