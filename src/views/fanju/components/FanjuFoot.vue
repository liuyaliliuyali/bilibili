<template>

    <div class="fanju-foot">
        <div class="border"></div>
        <div class="three">
            <div class="foot-item">
                <div>
                    <p class="tips">
                        bilibili
                    </p>
                    <span class="six" v-for="(item,index) in abotList" :index="index">{{item}}</span>
                </div>
            </div>
            <div class="foot-item" style="padding-left: 20px;">
                <div>
                    <p class="tips">
                        传送门
                    </p>
                    <span class="six" v-for="(item,index) in tsList" :index="index">{{item}}</span>
                </div>
            </div>
            <div class="foot-item" style="padding-left: 20px;margin-top: 20px;">
                <div style="background: url('https://static.hdslb.com/images/base/icons.png') no-repeat -1024px -194px;width: 60px;
                            height: 80px;position: relative;display: inline-block;margin-left: 20px;">
                    <span class="font">下载APP</span>
                </div>
                <div style="background: url('https://static.hdslb.com/images/base/icons.png') no-repeat -1024px -322px;width: 60px;
                            height: 80px;position: relative;display: inline-block;margin-left: 20px;">
                    <span class="font">新浪微博</span>
                </div>
                <div style="background: url('https://static.hdslb.com/images/base/icons.png') no-repeat -1024px -66px;width: 60px;
                            height: 80px;position: relative;display: inline-block;margin-left: 20px;">
                    <span class="font">官方微信</span>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div>
                <img style="background: url('https://static.hdslb.com/images/v2images/footpic.png') no-repeat;
                            width: 100px;
                            height: 80px;">
            </div>
            <div  style="font-size:12px;color:#99a2aa;margin-left: 10px;">
                <p>
                    营业执照 |信息网络传播视听节目许可证：0910417 网络文化经营许可证 沪网文【2019】3804-274号 广播电视节目制作经营许可证：（沪）字第01248号
                </p>
                <p>
                    增值电信业务经营许可证 沪B2-20100043 互联网ICP备案：沪ICP备13002172号-3 出版物经营许可证 沪批字第U6699 号 互联网药品信息服务资格证 沪-非经营性-2016-0143
                </p>
                <p>
                    营业性演出许可证 沪市文演（经）00-2253
                </p>
                <p>
                    违法不良信息举报邮箱：help@bilibili.com |违法不良信息举报电话：4000233233转3
                </p>
                <p>
                    上海互联网举报中心|12318全国文化市场举报网站|沪公网安备31011002002436号 | 儿童色情信息举报专区 | 扫黄打非举报
                </p>
                <p>
                    网上有害信息举报专区：中国互联网违法和不良信息举报中心
                </p>
                <p>
                    亲爱的市民朋友，上海警方反诈劝阻电话“96110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。
                </p>
                <p>
                    公司名称：上海宽娱数码科技有限公司|公司地址：上海市杨浦区政立路485号|电话：021-25099888
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FanjuFoot",
        el: '#app',
        data: function () {
            return {
                abotList: ['关于我们', '友情链接', '联系我们', '隐私政策', '用户协议', 'bilibili认证','加入我们','Investor',' Relations'],
                tsList: ['协议汇总', '帮助中心', '名人堂', '活动中心', '用户反馈论坛','MCN管理中心','活动专题页','壁纸站','高级弹幕'],
            }

        },
    };
</script>

<style scoped>
   /* .fanju-foot{
        width: 1200px;
        margin: 0 auto;

    }*/
    .fanju-foot {
        overflow: hidden;
        width: 100%;
        margin-top: 40px;
        padding-bottom: 40px;
        background-color: #f4f5f7;
    }
    div{
        display: block;
    }
    *{
        margin: 0;
        padding: 0;
    }
    .border {
        width: 980px;
        height: 1px;
        margin: 0 auto 30px;
        border-top: 1px solid #e5e9ef;
    }
    .three {
        display: flex;
        width: 1160px;
        margin: 0 auto;
    }
    .tips {
        margin-bottom: 22px;
        color: #99a2aa;
    }
    .foot-item {
        width: 33%;
        padding-bottom: 20px;
        border-right: 1px solid #e5e9ef;
    }
    .six {
        display: inline-block;
        width: 32%;
        margin-top: 10px;
        font-size: 14px;
    }
    .font {
        position: absolute;
        bottom: -3px;
        left: -3px;
        display: block;
        width: 100px;
        font-size: 14px;
    }
    .bottom {
        display: flex;
        width: 1160px;
        margin: 0 auto;
        margin-top: 10px;
    }


</style>