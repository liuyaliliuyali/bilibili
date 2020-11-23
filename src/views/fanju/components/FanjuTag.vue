<template>
    <div class="fanju-tag">
        <div class="tag">
            <div class="title-clearfix">
                <span class="icon"></span>
                <span class="name">热门标签</span>
                <span class="small">点击即可查看本区标签的相关内容</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "FanjuTag"
    }
</script>

<style scoped>
    .fanju-tag{
        width: 1200px;
        margin: 0 auto;

    }
    div{
        display: block;
    }

    .tag .title-clearfix{
        padding: 10px 0 20px;
    }
    div{
        display: block;
    }
    .tag .title-clearfix .icon{
        background: url("../../../CSS-fanju/icons.png") -83px -1492px no-repeat;
        width: 24px;
        height: 24px;
        display: inline-block;
        /*vertical-align:middle;*/
        margin-right: 10px;

    }
    .tag .name{
        font-size: 18px;
        line-height: 24px;
        color: #222;
        vertical-align: middle;
    }
    .tag .small{
        color: #99a9bf;
        margin-left: 20px;
        margin-bottom: 2px;
        display: inline-block;
        vertical-align: bottom;
        font-size: 12px;
    }

a{
    text-decoration: none;
    transition: color .2s;
}
</style>