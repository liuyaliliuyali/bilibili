<template>
    <div class="frame">
        <div class="container">
            <div class="first">
                <img src="../../../CSS-member/center1.jpeg" width="200px">
                <div class="one">
                    <p>苏州·萌二桌游店-ICA推理剧本杀</p>
                    <p> 📅  2020.09.21 - 2021.03.20</p>
                    <p>📍 苏州市  萌二次元杂货铺</p>
                    <p>¥  5 <span>起  <a>独家</a></span> </p>
                </div>
            </div>

            <div class="second">
                <img src="../../../CSS-member/center2.jpeg" width="200px">
                <div class="two">

                </div>
            </div>
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
        background-color:#F4F5F7;
        /*position: relative;*/
}  .first,.second,.third,.fourth,.fifth,.six{
        width: 560px;
        height: 255px;
        background-color: white;
        border-radius: 20px;
        margin: 70px 20px 20px 0;
        position: relative;
           cursor: pointer;
       }
.first:hover,.second:hover,.third:hover,.fourth:hover,.fifth:hover,.six:hover {
    box-shadow:0px 0px 30px 7px #99a9bf;
}


    .second,.fourth,.six{
        margin: 70px 0 20px 20px;
    }

    .first img{
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
    .one p:last-of-type{
        font-size: 26px;
        padding-top: 10px;
        color: hotpink;
    }
    .one span{
        font-size: 15px;
        color: #99a9bf;

    }
    .one a{
        background-color: white;
        color: hotpink;
        font-size: 14px;
        border: 1px solid #ff6699;
        display: inline-block;
        line-height: 15px;
        margin:0 6px;
        height: 16px;
        width: 28px;
        text-align: center;
        text-decoration: none;
    }

</style>