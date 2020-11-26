<template>
    <div>
        <match-head></match-head>
        <match-nav></match-nav>
        <match-recommend :dt="hot"></match-recommend>
        <match-swiper  v-for="(val,key) in mess" :vl="val" :ky="key"></match-swiper>
        <match-bottom></match-bottom>
    </div>
</template>
<script>
    import MatchHead from "./components/MatchHead";
    import MatchSwiper from "./components/MatchSwiper";
    import MatchNav from "./components/MatchNav";
    import MatchRecommend from "./components/MatchRecommend";
    import MatchBottom from "./components/MatchBottom";
    export default {
        name: "match",
        components: {MatchBottom, MatchHead, MatchNav, MatchSwiper, MatchRecommend},

        data(){
            return{
                hot:[],
                // rankData:[],
                // new1:[],
                // oneWeed:[],
                // yishijie:[],
                // old:[],
                mess:{},
            }
        },
        created() {
            //请求数据
            this.$axios.get('../js/match-recommend.json').then((res) => {
                const dt = res.data.data
                this.hot = dt.hot
                // this.rankData = dt.rankData
                // this.new1 = dt.new1
                // this.oneWeed = dt.oneWeed
                // this.yishijie = dt.yishijie
                this.mess = dt.mess
                //
                // this.old = dt.old
            }).catch((error) => {
                console.log('请求失败！')
            })
        }

    }
</script>

<style scoped>

</style>