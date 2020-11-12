<template>
    <div class="manhua-header">
        <div class="container">
            <div class="left">
                <img src="../../../CSS-manhua/logo-1.png" height="32" width="32"/>
                <span>哔哩哔哩漫画</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManhuaHeader"
    }
</script>

<style scoped>
    .manhua-header{
        height: 50px;
    }
    .container{
        width: 1200px;
        margin: 0 auto;
    }
    .left{
        height: 50px;
        line-height: 50px;
    }

</style>