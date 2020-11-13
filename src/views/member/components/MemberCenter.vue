<template>
    <div class="frame">
        <div class="container">
            <div class="first">
                <img src="../../../CSS-member/center1.jpeg" width="200px">
                <div class="one">
                    <p>苏州·萌二桌游店-ICA推理剧本杀</p>
                    <p></p>
                    <p>苏州·萌二桌游店-ICA推理剧本杀</p>
                    <p>苏州·萌二桌游店-ICA推理剧本杀</p>
                </div>
            </div>

            <div class="second"></div>
            <div class="third"></div>
            <div class="fourth"></div>
            <div class="fifth"></div>
            <div class="six"></div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "MemberCenter"
    }
</script>

<style scoped>
    .container{
        width: 1160px;
        margin: 0 auto;
        display:flex;
        flex-wrap: wrap;
    }
    .frame{
        width: 100%;
        height: 1200px;
        background: #d3dce6 ;
        /*position: relative;*/
}
    .first,.second,.third,.fourth,.fifth,.six{
        width: 560px;
        height: 255px;
        background-color: white;
        border-radius: 20px;
        margin: 70px 20px 20px 0;
        position: relative;
    }
    .second,.fourth,.six{
        margin: 70px 0 20px 20px;
    }

    .first img{
        margin-left: 24px;
        position: absolute;
        bottom: 30px;
    }
    .one{
        position: absolute;
        left: 250px;
    }
</style>