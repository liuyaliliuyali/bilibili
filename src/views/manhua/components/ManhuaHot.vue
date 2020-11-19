<template>
    <div class="manhua-hot">
        <div class="container">
            <div>
                <span class="title">热门速递</span>
            </div>
            <div class="hot-main">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                       <el-tab-pane label="新作飙升榜" name="first">
                           <div class="main">
                               <div class="type" v-for="data in nw">
                                   <a href="#" :style="{backgroundImage: 'url('+data.Img+')'}"></a>
                                   <div class="type-title">{{data.name}}</div>
                                   <span style="font-size: 12px;color: #999999">{{data.tag}}</span>
                               </div>
                           </div>
                       </el-tab-pane>
                    <el-tab-pane label="一周热议作品！" name="second">
                        <div class="main">
                            <div class="type" v-for="item in ow">
                                <a href="#" :style="{backgroundImage: 'url('+item.Img+')'}"></a>
                                <div class="type-title">{{item.name}}</div>
                                <span style="font-size: 12px;color: #999999">{{item.tag}}</span>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="征服，异世界" name="third">
                        <div class="main">
                            <div class="type" v-for="item in ys">
                                <a href="#" :style="{backgroundImage: 'url('+item.Img+')'}"></a>
                                <div class="type-title">{{item.name}}</div>
                                <span style="font-size: 12px;color: #999999">{{item.tag}}</span>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="二次元养老院" name="forth">
                        <div class="main">
                            <div class="type" v-for="item in od">
                                <a href="#" :style="{backgroundImage: 'url('+item.Img+')'}"></a>
                                <div class="type-title">{{item.name}}</div>
                                <span style="font-size: 12px;color: #999999">{{item.tag}}</span>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ManhuaHot",
        props:['nw','ow','ys','od'],
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
    .main{
        /*height: 500px;*/
    }
    .container {
        width: 1160px;
        margin: 0 auto;
        position: relative;
    }
    .title{
        display: inline-block;
        font-size: 32px;
        line-height: 45px;
        padding: 60px 0 16px;
        color: rgba(0,0,0,.87);
        position: absolute;
        top:-65px
    }

    .main{
        display: flex;
        overflow: hidden;
        flex-wrap: wrap;
    }

    .type{
        padding: 0 20px 30px 0;
        width: 25%;
        box-sizing: border-box;
    }
    .type:nth-of-type(4n){
        padding-right: 0;
    }

    .type a{
        display: inline-block;
        height: 156px;
        width: 278px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
        border-radius: 5px;
    }

    .type-title{
        width: 180px;
        box-sizing: border-box;
        height: 35px;
        line-height: 35px;
        font-size: 18px;
        overflow: hidden; /*设置超出的部分进行影藏*/
        text-overflow: ellipsis; /*设置超出部分使用省略号*/
        white-space:nowrap ;
    }

    /*修改tabs默认下划线*/
    ::v-deep .el-tabs__nav-wrap::after {
        background: none !important;
    }
    ::v-deep .el-tabs__active-bar{
        width: 8px !important;
        left: 8% !important;
    }
    ::v-deep .el-tabs__nav-scroll{
        margin-left: 160px !important;
        margin-bottom: 10px;
    }

    .hot-main{
       margin-top: 60px;
    }

</style>