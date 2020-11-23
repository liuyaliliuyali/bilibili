<template>
    <div class="fanju-xin">
        <div class="title">
            <span class="icon"></span>
            <span class="name">最新动态</span>

          <div class="read">
             <i class="icon icon_read"></i>
             <span class="info">换一换</span>
          </div>
        </div>
       <div class="storey-box">
           <div class="v-list">
               <div class="spread-module">
                   <a href="" target="_blank">
                      <div class="pic">
                        <div class="lazy-img">
                            <img alt="【4月】月色真美 03【独家正版" src="../../../CSS-fanju/001.webp">
                        </div>
                          <i class="icon medal golden"></i>
                      </div>
                       <p title="【4月】月色真美 03【独家正版】" class="t">【4月】月色真美 03【独家正版】</p>
                   </a>
               </div>
               <div class="spread-module">
                   <a href="" target="_blank">
                       <div class="pic">
                           <div class="lazy-img">
                               <img alt="【10月】诸神的逆鳞 20【独家正版】" src="../../../CSS-fanju/002.webp">
                           </div>
                           <i class="icon medal golden"></i>
                       </div>
                       <p title="【10月】诸神的逆鳞 20【独家正版】" class="t">【10月】诸神的逆鳞 20【独家正版】</p>
                   </a>
               </div>
               <div class="spread-module">
                   <a href="" target="_blank">
                       <div class="pic">
                           <div class="lazy-img">
                               <img alt="【4月】攻壳机动队 204【独家正版" src="../../../CSS-fanju/003.webp">
                           </div>
                           <i class="icon medal golden"></i>
                       </div>
                       <p title="【4月】攻壳机动队 204【独家正版】" class="t">【4月】攻壳机动队 204【独家正版】</p>
                   </a>
               </div>
               <div class="spread-module">
               <a href="" target="_blank">
                   <div class="pic">
                       <div class="lazy-img">
                           <img alt="【10月】魔法禁书 19【独家正版】" src="../../../CSS-fanju/004.webp">
                       </div>
                       <i class="icon medal golden"></i>
                   </div>
                   <p title="【10月】魔法禁书 19【独家正版】" class="t">【10月】魔法禁书 19 独家正版】</p>
               </a>
           </div>
               <div class="spread-module">
                   <a href="" target="_blank">
                       <div class="pic">
                           <div class="lazy-img">
                               <img alt="【1月】OVERLORD 第二季【独家正版】" src="../../../CSS-fanju/005.webp">
                           </div>
                           <i class="icon medal golden"></i>
                       </div>
                       <p title="【1月】OVERLORD 第二季【独家正版】" class="t">【1月】OVERLORD 第二季 独家正版】</p>
                   </a>
               </div>




           </div>
       </div>

    </div>
</template>

<script>
    export default {
        name: "FanjuXin"
    }
</script>

<style scoped>
    .fanju-xin{
        width: 1200px;
        margin: 20px auto;

    }
    div{
        display: block;
    }

    .fanju-xin .title .icon{
        background: url("../../../CSS-fanju/icons.png") -84px -1427px no-repeat;
        width: 24px;
        height: 24px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
    }
    .fanju-xin .title .name{
        font-size: 18px;
        line-height: 24px;
        color: #222;
        vertical-align: middle;
    }
    .fanju-xin .read{
       float:right;
        cursor: pointer;
        background-color:#fff;
        border: 1px solid #ccd0d7;
        border-radius: 4px;
        height: 22px;
        padding: 0 10px;
        transition: all .2s;
    }
    .fanju-xin .read .icon_read{
        display: inline-block;
        width: 12px;
        height: 13px;
        vertical-align: top;
        transition: all .5s;
        margin-top: 5px;
        background-position: -475px -89px;
        background-image: url("../../../CSS-fanju/icons.png");
    }
    .fanju-xin .read .info{
        display: inline-block;
        vertical-align: top;
        line-height: 22px;
        margin-left: 5px;
        font-size: 12px;
    }
    .storey-box{
        clear: both;
        padding: 20px 0 15px;
    }
    .storey-box .v-list{
        overflow: hidden;
        height: 190px;
        display: flex;
        /*设置子元素可以换行，默认不换行*/
        flex-wrap: wrap;
    }
    .spread-module{
        position: relative;
        width: 20%;
        height: 180px;
        font-size: 12px;
        overflow: hidden;
    }
    .spread-module a{
        text-decoration: none;
    }
    a{
        transition: color .2s;
    }
    .spread-module .pic{
        position: relative;
        width: 180px;
        height: 150px;
        display: block;
        overflow: hidden;
        text-align: center;
        border-radius: 4px;
    }
    .spread-module .pic .medal.golden{
        background-position: -849px -148px;
    }
    .spread-module .pic .medal{
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 24px;
        pointer-events: none;
    }
    .storey-box .icon{
        display: inline-block;
        background-image: url("../../../CSS-fanju/icons.png");
    }

</style>