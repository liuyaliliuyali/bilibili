<template>
    <div class="fanju-ban">
        <div class="tag-list">
            <div title="全部标签" class="tag-item on">
                <a href="#" class="tag-a">全部标签</a>
            </div>
            <div title="BILITBILI正版" class="tag-item">
                <a href="#" class="tag-a">BILITBILI正版</a>
            </div>
            <div title="OVO.OAD" class="tag-item">
                <a href="#" class="tag-a">OVO.OAD</a>
            </div>
            <div title="剧场版" class="tag-item">
                <a href="#" class="tag-a">剧场版</a>
            </div>
            <div title="TV动画" class="tag-item">
                <a href="#" class="tag-a">TV动画</a>
            </div>
            <div title="日本动画" class="tag-item">
                <a href="#" class="tag-a">日本动画</a>
            </div>
            <div title="MADHOUSE" class="tag-item">
                <a href="#" class="tag-a">MADHOUSE</a>
            </div>
        </div>

    </div>

    
</template>

<script>
    export default {
        name: "FanjuBan"
    }
</script>

<style scoped>
    .tag-list{
        overflow: hidden;
        margin-right: -10px;
        color: #fff;

    }
    .tag-list .tag-item.on .tag-a:hover{
        color: #fff;
    }
    .tag-list .tag-item .tag-a:hover{
        color:#00a1d6;
    }

    .tag-list .tag-item.on{
        color: #fff!important;
        background-color:#00a1d6;
        border-color: #00a1d6;
    }
    .tag-list .tag-item .tag-a{
        display: block;
        line-height: 22px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #222;
        padding: 0 10px;
        font-size: 13px;

    }
    a{
        transition: color .2s;
        text-decoration: none;
    }
    a:hover{
        text-decoration: none;
    }
    .tag-list .tag-item{
        display: inline-block;
        float: left;
        position: relative;
        border: 1px solid #e5e9ef;
        border-radius: 12px;
        background-color: #fff;
        height: 22px;
        margin: 5px 10px 5px 0;
        cursor: pointer;


    }

</style>