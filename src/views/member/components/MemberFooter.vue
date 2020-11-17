<template>
    <section>
        <div class="footer-wrp">
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
                        <span class="font">手机端下载</span>
                    </div>
                    <div style="background: url('https://static.hdslb.com/images/base/icons.png') no-repeat -1024px -322px;width: 60px;
                            height: 80px;position: relative;display: inline-block;margin-left: 20px;">
                        <span class="font">手机端下载</span>
                    </div>
                    <div style="background: url('https://static.hdslb.com/images/base/icons.png') no-repeat -1024px -66px;width: 60px;
                            height: 80px;position: relative;display: inline-block;margin-left: 20px;">
                        <span class="font">手机端下载</span>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div>
                    <img style="background: url('https://static.hdslb.com/images/v2images/footpic.png') no-repeat;
                            width: 100px;
                            height: 80px;">
                </div>
                <div style="font-size: 14px;color:#99a2aa;margin-left: 10px;">
                    <p>
                        广播电视节目制作经营许可证：（沪）字第1248号 沪网文[2013]0480-056号 | 信息网络传播视听节目许可证：0910417互联网ICP备案：沪ICP备13002172号-3 沪ICP证：沪B2-20100043 | 违法不良信息举报邮箱：help@bilibili.com | 违法不良信息举报电话：4000233233 转 3 ｜营业执照
                    </p>
                    <p>
                        网上有害信息举报专区： 中国互联网违法和不良信息举报中心 上海互联网举报中心12318 全国文化市场举报网站
                    </p>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "MemberFooter",
        el: '#app',
        data: function () {
            return {
                    abotList: ['关于我们', '友情链接', '哔哩哔哩周边', '联系我们', '加入我们', '官方认证'],
                    tsList: ['帮助中心', '高级弹幕', '活动专题页', '侵权申诉', '活动中心'],
            }

                },
    };
</script>

<style scoped>

    .footer-wrp {
        overflow: hidden;
        width: 100%;
        height: 222px;
        margin-top: 40px;
        padding-bottom: 40px;
        background-color: #f4f5f7;
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
        margin-top: 20px;
    }
</style>