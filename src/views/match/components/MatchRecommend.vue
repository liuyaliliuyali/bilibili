<template>
    <div class="match-recommend">
        <div class="container">
            <div class="left">
                <div>
                    <p>精彩推荐</p>
                    <div class="main">
                                            <div class="type" v-for="item in dt">
                                                <a href="#" :style="{backgroundImage: 'url('+item.imgUrl+')'}"></a>
                                                <div class="type-title">{{item.title}}</div>
                                                <span style="font-size: 11px;color: #999999">{{item.tag}}</span>
                                                <span style="font-size: 11px;color: #999999;margin-left: 40px">{{item.people}}</span>
                                            </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <p>赛事专区</p>
                <div>
                    <img style="float: left" src="../../../CSS-match/aa02b4fa47ac1853abc5fb37f141245752f96c40.png@126w_126h.png" width="48px" height="48px"/>
                    <span style="font-size: 14px">2020英雄联盟全球总决赛</span>
                    <span class="time">2020-9-25至2020-10-31</span>
                </div>
                <div class="more-match">
                    <a href="#">更多赛事 ></a>
                </div>
                <p>最新资讯</p>
                <div class="NEW">
                    <a href="#" ><span >热门</span> 全新赛事“炉石大赢家” 三大模式同台竞技 11月27日正式开启</a>
                    <p>11-20</p>
                    <a href="#" ><span >热门</span> 战歌争霸赛第二赛季11月20日吹响决赛战斗号角</a>
                    <p>11-20</p>
                    <a href="#" ><span >热门</span> 离开你是更好的自己，NiKo率领G2暴打老东家2-0力克FaZe</a>
                    <p>11-20</p>
                    <a href="#">你从未见过的致胜方式——AWL上演前无古人的兽族内战 </a>
                    <p>11-20</p>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MatchRecommend",
        props:['dt','vl','ky']
    }
</script>

<style scoped>
    .container{
        display:flex;
        width: 1160px;
        margin: 0 auto;
    }
    .left {
        flex: 3;
        height: 100px;
    }
    .right{
        flex:1;
        height: 450px;
        padding: 5px;
        box-sizing: border-box;
    }
    .right span{
        margin-left: 10px;
    }
    .time{
        display: inline-block;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #999999;
        margin-top: 5px;
    }
    .more-match a{
        display: inline-block;
        text-decoration: none;
        text-align: center;
        width: 100%;
        background-color: #f4f5f7;
        color:#6d757a;
        font-size: 14px;
        border-radius: 5px;
    }
    .more-match a:hover{
        background-color: #999999;
    }
    .NEW a{
        display: inline-block;
        width: 80%;
        text-decoration: none;
        font-size:14px;
        margin-top: 12px;
        color: #222222;
    }
    .NEW p{
        float: right;
        font-size: 12px;
    }
    .NEW span{
        font-size: 12px;
        background-color: #ff6699;
        color: white;
    }
    .NEW span:hover{
        color: #32AAFF;
    }


    /*.title span{*/
    /*    display: inline-block;*/
    /*    font-size: 32px;*/
    /*    line-height: 45px;*/
    /*    padding: 60px 0 16px;*/
    /*    color: rgba(0,0,0,.87);*/
    /*}*/

    .main{
        display: flex;
        overflow: hidden;
        flex-wrap: wrap;
    }

    .type{
        padding: 0 20px 24px 0;
        width: 25%;
        box-sizing: border-box;
    }
    .type:nth-of-type(4n){
        padding-right: 0;
    }

    .type a{
        display: inline-block;
        height: 124px;
        width: 200px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
    }

    .type-title{
        width: 180px;
        box-sizing: border-box;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        overflow: hidden; /*设置超出的部分进行影藏*/
        text-overflow: ellipsis; /*设置超出部分使用省略号*/
        white-space:nowrap ;
    }


    .main2{
        display: flex;
    }
    .main-left,.main-right{
        flex: 1;
        height: 200px;
        border: 1px solid rebeccapurple;
        display: flex;
    }
    .main-right div{
        flex: 1;
        padding: 5px;
        box-sizing: border-box;

    }
    .right-img{
        display: inline-block;
        height: 124px;
        width: 100%;
    }
    .main-right p{
        display: inline-block;
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
    }



</style>