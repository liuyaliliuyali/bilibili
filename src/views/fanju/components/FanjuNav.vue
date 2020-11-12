<template>
    <div class="fanju-nav">
        <div class="sub-nav-m">
            <div class="clearfix">
                <a href="#">全部</a>
                <a href="#">连载动画</a>
                <a href="#">完结动画</a>
                <a href="#">资讯</a>
                <a href="#">完结动画</a>
                <a href="#">官方延伸</a>
                <a href="#">新番时间表</a>
                <a href="#">番剧索引</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FanjuNav"
    }
</script>

<style scoped>
    div{
        display: block;
    }
    .clearfix{
        zoom: 1;
    }
    .clearfix{
        content: "";
        clear: both;
        overflow: hidden;
        display: inline-block;
        vertical-align: top;

    }
    .clearfix a{
        margin: 0 20px;
        padding-bottom: 5px;
        color: #545C63;
        font-size: 14px;
        text-decoration: none;

    }
    .clearfix a:hover{
        color:#00a1d6

    }

</style>