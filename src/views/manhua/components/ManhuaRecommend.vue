
<template>
    <div class="manhua-recommend">
        <div class="container">
            <div class="title">
                <span>为你推荐</span>
            </div>
            <div class="main">
                <div class="type" v-for="item in dt">
                    <a href="#" :style="{backgroundImage: 'url('+item.imgUrl+')'}"></a>
                    <div class="type-title">{{item.title}}</div>
                    <span style="font-size: 12px;color: #999999">{{item.tag}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManhuaRecommend",
        props:['dt']
    }
</script>

<style scoped>
    .manhua-recommend{
        margin-bottom: 40px;
    }
    .main{
        /*height: 500px;*/
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

    .main{
        display: flex;
        overflow: hidden;
        flex-wrap: wrap;
    }

    .type{
        padding: 0 20px 24px 0;
        width: 16.6%;
        box-sizing: border-box;
    }
    .type:nth-of-type(6n){
        padding-right: 0;
    }

    .type a{
        display: inline-block;
        height: 240px;
        width: 180px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
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

</style>