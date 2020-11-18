<template>
    <div class="manhua-message">
        <div class="container">
            <div class="title">
                <span>{{ ky }}</span>
            </div>
            <div class="main">
                <div class="type" v-for="item in dt">
                    <a href="#" :style="{backgroundImage:'url('+item.imgUrl+')'}"></a>
                    <div class="type-title">{{item.title}}</div>
                    <span style="font-size: 12px;color: #999999">{{item.tag}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManhuaMessage",
        props:['dt','ky']
    }
</script>

<style scoped>
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
        padding: 30px 0 20px;
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
    .type:first-of-type a{
        background-image: url("//i0.hdslb.com/bfs/manga-static/a7dc676429bf6342e5d275a7b797465651165d4f.jpg@360w_480h.jpg")
    }
    .type:nth-of-type(2) a{
        background-image: url("//i0.hdslb.com/bfs/manga-static/0e1c13d444d30e3cf192a853d3b87011b7ed4073.jpg@360w_480h.jpg");
    }
    .type:nth-of-type(3) a{
        background-image: url("//i0.hdslb.com/bfs/manga-static/5d065f26899dc31eb8fec4be4f8ca85a804e0a06.jpg@360w_480h.jpg");
    }
    .type:nth-of-type(4) a{
        background-image: url("//i0.hdslb.com/bfs/manga-static/bbd258a4123ddf8631727e3337dc2a5c99d2f087.jpg@360w_480h.jpg");
    }
    .type:nth-of-type(5) a{
        background-image: url("//i0.hdslb.com/bfs/manga-static/9042fb75ddd325061fa4c221ac203e7a3b8c186f.jpg@360w_480h.jpg");
    }
    .type:nth-of-type(6) a{
        background-image: url("//i0.hdslb.com/bfs/manga-static/5a8d061a2d112c6f96767e82d68bd87fc208e7a7.jpg@360w_480h.jpg");
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