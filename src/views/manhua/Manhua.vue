<template>
    <div>
        <manhua-header></manhua-header>
        <manhua-swiper></manhua-swiper>
        <manhua-nav></manhua-nav>
        <manhua-recommend :dt="hot"></manhua-recommend>
        <manhua-rank :dt="rankData"></manhua-rank>
        <manhua-hot></manhua-hot>
        <manhua-message></manhua-message>
        <manhua-bottom></manhua-bottom>
    </div>
</template>

<script>
    import ManhuaHeader from "./components/ManhuaHeader";
    import ManhuaSwiper from "./components/ManhuaSwiper";
    import ManhuaNav from "./components/ManhuaNav";
    import ManhuaRecommend from "./components/ManhuaRecommend";
    import ManhuaRank from "./components/ManhuaRank";
    import ManhuaMessage from "./components/ManhuaMessage";
    import ManhuaBottom from "./components/ManhuaBottom";
    import ManhuaHot from "./components/ManhuaHot";
    export default {
        name: "Manhua",
        components: {
            ManhuaHot,
            ManhuaBottom, ManhuaMessage, ManhuaRank, ManhuaRecommend, ManhuaHeader, ManhuaNav, ManhuaSwiper},

        data(){
            return{
                hot:[],
                rankData:[]
            }
        },
        created() {
            //请求数据
            this.$axios.get('../js/manhua-message.json').then((res) => {
                const dt = res.data.data
                this.hot = dt.hot
                this.rankData = dt.rankData
            }).catch((error) => {
                console.log('请求失败！')
            })
        }
    }
</script>

<style>
    body{
        margin: 0;
        padding: 0;
    }

</style>


