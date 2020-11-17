
<template>
    <div>
        <Gamecenterhead></Gamecenterhead>
        <Gamecentercore></Gamecentercore>
        <Gamehead></Gamehead>
        <Gamecore></Gamecore>
        <Gamebottom></Gamebottom>
    </div>
</template>

<script>
    import Gamehead from "./components/Gamehead";
    import Gamecore from "./components/Gamecore";
    import Gamebottom from "./components/Gamebottom";
    import Gamecenterhead from "./components/Gamecenterhead";
    import Gamecentercore from "./components/Gamecentercore";
    export default {
        name: "Youxizhongxin",
        components: {Gamecentercore, Gamecenterhead, Gamebottom, Gamecore, Gamehead}
    }
</script>

<style scoped>

</style>