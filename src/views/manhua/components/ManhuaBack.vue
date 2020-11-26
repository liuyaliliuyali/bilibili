<template>
    <div class="manhua-back">
        <el-backtop right="90" bottom="60">
            <div
                    style="{
        height: 100%;
        width: 100%;
        background-color: #ffffff;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        border-radius: 10px;
        text-align: center;
        line-height: 40px;
        /*border: 1px solid #6d6d6d;*/
      }"
            >🚀</div>
        </el-backtop>
    </div>
</template>

<script>
    export default {
        name: "ManhuaBack"
    }
</script>

<style scoped>
    .manhua-back{
        height: 100vh;
        overflow-x: hidden;
        position: absolute;
    }

</style>