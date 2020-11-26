<template>
    <div class="match-swiper">
        <div class="container">
            <div class="left">
                <div>
                    <p>{{ ky }}</p>
                    <div class="main2">
                        <div class="main-left">
                            <img src="//i0.hdslb.com/bfs/archive/c0549cdbb80cb993e631b9a8406b901d1b8d6488.png@1077w_431h.webp" alt="">
                        </div>
                        <div class="main-right">
                            <div v-for="data in vl">
                                <a class="right-img" href="#" :style="{backgroundImage: 'url('+data.imgUrl1+')'}"></a>
                                <div class="type-title">{{data.title1}}</div>
                                <span style="font-size: 11px;color: #999999;padding-left: 5px">{{data.tag}}</span>
                                <span style="font-size: 11px;color: #999999;margin-left: 40px">{{data.people}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
<!--                <p>赛事专区</p>-->
<!--                <div>-->
<!--                    <img style="float: left" src="../../../CSS-match/aa02b4fa47ac1853abc5fb37f141245752f96c40.png@126w_126h.png" width="48px" height="48px"/>-->
<!--                    <span style="font-size: 14px">2020英雄联盟全球总决赛</span>-->
<!--                    <span class="time">2020-9-25至2020-10-31</span>-->
<!--                </div>-->
<!--                <div class="more-match">-->
<!--                    <a href="#">更多赛事 ></a>-->
<!--                </div>-->
<!--                <p>最新资讯</p>-->
<!--                <div class="NEW">-->
<!--                    <a href="#" ><span >热门</span> 全新赛事“炉石大赢家” 三大模式同台竞技 11月27日正式开启</a>-->
<!--                    <p>11-20</p>-->
<!--                    <a href="#" ><span >热门</span> 战歌争霸赛第二赛季11月20日吹响决赛战斗号角</a>-->
<!--                    <p>11-20</p>-->
<!--                    <a href="#" ><span >热门</span> 离开你是更好的自己，NiKo率领G2暴打老东家2-0力克FaZe</a>-->
<!--                    <p>11-20</p>-->
<!--                    <a href="#">你从未见过的致胜方式——AWL上演前无古人的兽族内战 </a>-->
<!--                    <p>11-20</p>-->

<!--                </div>-->
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: `MatchSwiper`,
        props:['vl','ky']
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
        height: 280px;
        padding: 5px;
        box-sizing: border-box;
    }

    .main2{
        display: flex;
    }
    .main-left,.main-right{
        flex: 1;
        height: 200px;
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
        background-size: 100%;
    }
    .main-right p{
        display: inline-block;
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
    }

</style>