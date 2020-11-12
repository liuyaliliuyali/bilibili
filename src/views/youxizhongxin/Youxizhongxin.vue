<template>
    <div>
        <Gamehead></Gamehead>
        <Gamecore></Gamecore>
        <Gamebottom></Gamebottom>
    </div>
</template>

<script>
    import Gamehead from "./components/Gamehead";
    import Gamecore from "./components/Gamecore";
    import Gamebottom from "./components/Gamebottom";
    export default {
        name: "Youxizhongxin",
        components: {Gamebottom, Gamecore, Gamehead}
    }
</script>

<style scoped>

</style>