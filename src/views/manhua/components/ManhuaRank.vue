<template>
    <div class="manhua-rank">
        <div class="container">
            <div class="header">
                <span class="title">高能排行</span>
                <el-menu
                        style="display: inline-block;border: none;margin-left: 30px;height: 40px;line-height: 30px"
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="transparent"
                        active-text-color="#ffffffa8"
                       >
                    <el-menu-item index="1">漫画榜</el-menu-item>
                    <el-menu-item index="1">国漫榜</el-menu-item>
                    <el-menu-item index="1">飙升榜</el-menu-item>
                </el-menu>
            </div>
            <div class="main" style="height: 300px;width: 100%"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManhuaRank",
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .manhua-rank{
        width: 100%;
        background-image: url(//i0.hdslb.com/bfs/manga-static/manga-pc/static/img/17511fbcafba6.png);
        background-position: 50%;
        background-size: cover;
    }
    .container {
        width: 1160px;
        margin: 0 auto;
    }

    .title{
        display: inline-block;
        font-size: 32px;
        line-height: 45px;
        padding: 60px 0 16px;
        color:white;
    }

    /*激活菜单不变色*/
    .el-menu-item.is-active {
        background-color: transparent !important;
        color: #fff;
    }
    /*去掉菜单下划线*/
    .el-menu--horizontal > .el-menu-item.is-active {
        border: none;
    }


</style>