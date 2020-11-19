<template>
    <div class="frame">
        <div class="container">
            <div v-for="item in infoList" :key="item.id" class="box">
                <img
                        class="fir_img"
                        :src="item.url"
                        width="200px"
                />
                <div class="one">
                    <p>{{item.name}}</p>
                    <p>{{item.date}}</p>
                    <p>{{item.address}}</p>
                    <p>
                        ¥ {{item.price}} <span>起 <a>独家</a></span>
                    </p>
                </div>
            </div>
            <div class="block">
                <el-pagination
                        background="transparent"
                        layout="prev, pager, next"
                        :total="100">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MemberCenter",
        data() {
            return {
                infoList:[{
                    id:1,
                    url:"//i2.hdslb.com/bfs/openplatform/202011/oGtkl24L1605061847653.jpeg@350w_466h.jpeg",
                    name:'苏州·萌二桌游店-ICA推理剧本杀',
                    date:'📅 2020.09.21 - 2021.03.20',
                    address:'📍 苏州市 萌二次元杂货铺',
                    price:5
                },{
                    id:1,
                    url:"//i2.hdslb.com/bfs/openplatform/202010/L9L9MkcG1602754968699.jpeg@350w_466h.jpeg",
                    name:'苏州·萌二次元答谢会',
                    date:'📅 2021.02.18 - 02.19',
                    address:'📍 苏州市 萌二次元杂货铺',
                    price:25
                },{
                    id:1,
                    url:"//i0.hdslb.com/bfs/openplatform/202011/1A38EpvL1605168939897.jpeg@350w_466h.jpeg",
                    name:'苏州·开学福利祭',
                    date:'📅 2021.03.20 - 03.20',
                    address:'📍 苏州市 萌二次元杂货铺',
                    price:1
                },{
                    id:1,
                    url:"//i0.hdslb.com/bfs/openplatform/202010/xtVUZVqA1602844337833.jpeg@350w_466h.jpeg",
                    name:'苏州·萤火跨年盛典',
                    date:'📅 2021.01.01 - 01.01',
                    address:'📍 苏州市 天虹商业购物中心',
                    price:47
                },{
                    id:1,
                    url:"//i2.hdslb.com/bfs/openplatform/202011/OqJfLWhL1605079863119.jpeg@350w_466h.jpeg",
                    name:'苏州·萤火粉丝回馈祭',
                    date:'📅 2021.01.02 - 01.04',
                    address:'📍 萌二次元杂货铺',
                    price:2
                },{
                    id:1,
                    url:"//i2.hdslb.com/bfs/openplatform/202011/nfnK39Jv1604314695435.jpeg@350w_466h.jpeg",
                    name:'厦门·X-ACG动漫潮玩会暨“八闽”巡回动漫展 ',
                    date:'📅 2020.12.04 - 12.07',
                    address:'📍 厦门市 厦门国际会展中心',
                    price:88
                },{
                    id:1,
                    url:"//i2.hdslb.com/bfs/openplatform/202010/kZhpRCbx1603770704089.jpeg@350w_466h.jpeg",
                    name:'青岛·动漫节·DCSP 2021幻梦动漫游戏嘉年华',
                    date:'📅 2021.01.01 - 01.01',
                    address:'📍 苏州市 天虹商业购物中心',
                    price:47
                },{
                    id:1,
                    url:"//i0.hdslb.com/bfs/openplatform/202010/in1Pbdci1603267887344.jpeg@350w_466h.jpeg",
                    name:'海口·FOC x 国漫动漫游戏元旦祭',
                    date:'📅 2021.01.01 - 01.02',
                    address:'📍 海口市 玉沙京华城',
                    price:37
                },{
                    id:1,
                    url:"//i1.hdslb.com/bfs/openplatform/202011/5mXi0yPC1604544087776.jpeg@350w_466h.jpeg",
                    name:'西安·第一届世界线动漫展',
                    date:'📅 2021.01.01 - 01.03',
                    address:'📍 西安·第一届世界线动漫展',
                    price:60
                },{
                    id:1,
                    url:"//i1.hdslb.com/bfs/openplatform/202011/WVbL1xVW1604376297515.jpeg@350w_466h.jpeg",
                    name:'漳州·墨卡动漫嘉年华元旦冬日祭',
                    date:'📅 2021.01.02 - 01.02',
                    address:'📍 漳州市 月港公园',
                    price:47
                },{
                    id:1,
                    url:"//i1.hdslb.com/bfs/openplatform/202010/94KLG7gM1603684138101.jpeg@350w_466h.jpeg",
                    name:'洛阳·零次元·DIMENSION ZERO8.1',
                    date:'📅 2021.02.16 - 02.16',
                    address:'📍 洛阳市 洛阳会展中心',
                    price:45
                },{
                    id:1,
                    url:"//i2.hdslb.com/bfs/openplatform/202011/nYVgskWN1604475717500.jpeg@350w_466h.jpeg",
                    name:'普宁·炎音漫展4.0Plus',
                    date:'📅 2021.12.20 - 12.20',
                    address:'📍 揭阳市 康莱酒店',
                    price:40
                },{
                    id:1,
                    url:"//i2.hdslb.com/bfs/openplatform/202011/qcqHwEVP1605366832927.jpeg@350w_466h.jpeg",
                    name:'北京·萤火虫IDO国际动漫游戏嘉年华2nd',
                    date:'📅 2021.01.01 - 01.03',
                    address:'📍 北京市 北京亦创国际会展中心',
                    price:77
                },{
                    id:1,
                    url:"//i1.hdslb.com/bfs/openplatform/202010/i5LgT3Nu1603794694377.jpeg@350w_466h.jpeg",
                    name:'西安·第十届梦乡动漫展',
                    date:'📅 2021.02.18 - 02.21',
                    address:'📍 西安市 中国唐苑会展中心',
                    price:47
                },{
                    id:1,
                    url:"//i0.hdslb.com/bfs/openplatform/202010/f2cZ5eWg1603349401972.jpeg@350w_466h.jpeg",
                    name:'重庆·第六届梦乡动漫展',
                    date:'📅 2021.01.30 - 01.31',
                    address:'📍 重庆市 南坪国际会议展览中心 ',
                    price:58
                },{
                    id:1,
                    url:"//i2.hdslb.com/bfs/openplatform/202010/iI9ehPRg1603877746479.jpeg@350w_466h.jpeg",
                    name:'阳江·结缘纪国风动漫盛典2nd',
                    date:'📅 2021.01.01 - 01.01',
                    address:'📍 阳江市 碧桂园凤凰酒店',
                    price:34.2
                },]
            }
        },
    };
</script>

<style scoped>
    .block{
        margin: 18px auto;
    }

    .container {
        width: 1160px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }
    .frame {
        width: 100%;
        height: 2850px;
        background-color: #F4F5F7;
        /*position: relative;*/
    }
    .box{
        width: 560px;
        height: 255px;
        background-color: white;
        border-radius: 20px;
        margin: 70px 20px 20px 0;
        position: relative;
        cursor: pointer;
    }

    .box:hover {
        box-shadow: 0px 0px 30px 7px #99a9bf;
    }
    .box:hover .fir_img{
        transform: translateY(-7px);
        transition: .7s;
    }

    .second,
    .fourth,
    .six {
        margin: 70px 0 20px 20px;
    }

    .box img {
        margin-left: 24px;
        position: absolute;
        bottom: 30px;
        border-radius: 20px;
    }
    .one {
        position: absolute;
        left: 250px;
        font-size: 15px;
        color: #99a9bf;
    }
    .one p:first-of-type{
        font-size: 18px;
        padding-bottom: 20px;
        color: #212121;
        padding-top: 20px;
    }
    .one p:last-of-type {
        font-size: 26px;
        padding-top: 10px;
        color: hotpink;
    }
    .one span {
        font-size: 15px;
        color: #99a9bf;
    }
    .one a {
        background-color: white;
        color: hotpink;
        font-size: 14px;
        border: 1px solid #ff6699;
        display: inline-block;
        line-height: 15px;
        margin: 0 6px;
        height: 16px;
        width: 28px;
        text-align: center;
        text-decoration: none;
    }
</style>