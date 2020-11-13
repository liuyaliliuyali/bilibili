<template>
    <div class="manhua-recommend">
        <div class="container">
            <div class="title">
                <span>为你推荐</span>
            </div>
            <div class="main">
                <div class="type">
                    <a href="#"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManhuaRecommend"
    }
</script>

<style scoped>
    .main{
        height: 500px;
    }
    .container {
        width: 1160px;
        margin: 0 auto;
    }
    .title span{
        display: inline-block;
        font-size: 32px;
        line-height: 45px;
        padding: 60px 0 16px;
        color: rgba(0,0,0,.87);
    }
    .type a{
        display: inline-block;

    }
</style>