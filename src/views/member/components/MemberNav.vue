<template>
    <body>
    <div id="app">
        <div class="page">
            <nav>
                <div class="nav-header-logo" > </div>
                <div class="icon nav-header-tv-icon"></div>
                <div data-v-7becb7b9="" class="nav-header-mainsite">
                    主站
                </div>
                <div data-v-7becb7b9="" class="nav-header-search-bar-wrapper">
                    <input data-v-7becb7b9="" placeholder="活动、嘉宾、场馆" type="text" name="" class="nav-header-search-bar">
                    <div data-v-7becb7b9="" class="icon search-icon">
                        <a data-v-7becb7b9="" target="_blank" href="javascript:void(0);" class="search-link"></a>
                    </div>
                    <!---->
                </div>
                <div data-v-7becb7b9="" class="user-info">
                    <a data-v-7becb7b9="" target="_blank" href="https://account.bilibili.com/site/home.html" class="user-center-link">
                        <div data-v-7becb7b9="" class="profile-img" style="background-image: url('https://i0.hdslb.com/bfs/face/member/noface.jpg');">

                        </div>
                    </a>
                </div>
                <div data-v-7becb7b9="" class="order-and-icon-wrapper">
                    <div data-v-7becb7b9="" class="icon order-icon">
                    </div>
                    <div data-v-7becb7b9="" class="order-center">订单中心</div>
                </div>
            </nav>
        </div>
    </div>
    </body>
</template>

<script>
    export default {
        name: "MemberNav"
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .page {
        width: 100%;
    }

    nav {
        position: relative;
        display: flex;
        width: 1160px;
        height: 60px;
        margin: 0 auto;
        background: #fff;

        align-items: center;
    }

    .nav-header-logo {
        width: 130px;
        height: 27px;
        background-image: url("https://s1.hdslb.com/bfs/static/platform/static/img/logo.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
    }

    .nav-header-tv-icon {
        margin-right: 6px;
        margin-left: 40px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA0FJREFUWAntl89rE0EUx9/sRitqQRAEf52F9uDRa1FPgkfrwYJomgYvHtK0YE89KTS1oAchTaMoVtCDR0Gk0n/BQ/0LrK2ICK1ga3ZmfG933zKdZje7YZNT9/Jm3r73fZ99O5vMABxcOXVATzfP6Nl3x7PK6dkXJ3T11am0eU6aQG9y8anneety6/eGV6nfSJNDMbJSvye3Wz+k2tmUk42ZNHmiUxB1hmA4ToCQAOJWYaH0ln3trKzW7ysFT/geFmq5F+CYKJdb7GtnO3fo6OAWiv3hZA3aBdDLXqVxk322tWH8+0L8hIkJz4615x2BxOwowdwNOhOkJ0G1g8EH+qtdPSaE0DaAPe/4yjgh6IheDmACrw8pxGjhcek9eWjNKIBnnEPWhwH3+qGF8RXTHzfeB6S1FnKqMY62iAWH0A7GJXfjxy5taw1r2KymOz/RtLu2B0jP1E/LXfEaIS53UyxrjhCw4jqHx0TtzibnRmvI70wfYQgAO3VFqn/UgKgxEZCqLpX61RnuRgSFS4R9BR4oXDM8ZovY6+DAtOsUVsVc8Tv7u7H0eyaVNwIK5vBTO2tqYCOodoN8EZAAPWR+kwTjDhy5KB7d/mUmdzsOH+iNfvDyo9zd+WJC4Y/BMOtGrwwD9v5PCWcqLxguRtbXRG3TZ9aOgMwAGrsDatX25TVP0o4FEg/LG3kB2DpJ2rFAtki/5tGi7lTQm2pcA6XrfpwjyoVa6UNSTtZ41koNRDD4eZ6jRKGAwM6zSFubNT4USf3KGIbyzHFbGCsmTTzrpAbihF7b1ED4r/yNYcwx+2xrxphjO86epwYCXMgk7Ivj2BbaN88aHwqkXtThV5W8kA2qrPGcmr5DnNFjGwtEm7Ve1U7SjgWSu85Ir4CStCMg3G5ER50ARM/hVuFk3lC+plY1U9esHS1q3ESugYZLHEg/ZrRv8ar1XDdoqLl/g0a1wysCws+5iRAREN33N1EKlj3lQasS/I1xYlaLp9/YFAec53wTuxVcCCNkdfETbbzZ1w+LjfjszpeuosXnB9wxhxc5/CMJHk3Y12vrwwzsPdFGHeLiYaeK2LAinpuGcZ7/QRH0V4RpurXSEneG6x/YTh34D8X2aE2nnJqmAAAAAElFTkSuQmCC");
        cursor: pointer;
    }
    .nav-header-search-bar-wrapper {
        position: relative;

        flex: 1 1;
    }

    .nav-header-search-bar {
        width: 360px;
        height: 40px;
        margin-left: 319px;
        padding-left: 20px;
        border: none;
        font-size: 12px;
        line-height: 14px;
        color: #6d757a;
        border-radius: 40px;
        background: #f1f3f5;
        cursor: auto;
    }

    .search-icon {
        position: absolute;
        top: 50%;
        right: 40px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABNJJREFUWAm9WE1sVFUUvue+mQHMlCZo1aSKCboSo65s4k5idIFR66JQaI3YmoqJiazanZGNdCVhYS1OLbGtxVlYNbLQRBo3JkQ3mIAxARIK3YCg0xra+XuX79zxjue9ea9TOg/fYu757s+5553/N6TW+eTz+ez1Qmk3KbPLGPWUIrODFLXzcaNMQRm6RKTOGkWnO9ozp3p6ev5ZJ+vANgqgCJDLTT1WMmpYGbPPKHVPxJaGKTC9pYi+yJAaHRzsv9CwYY2JWIEmJ+c3r5YXPzDKPwRB0mvwiF0C8zIp/dHmdOf7Bw48txq7USxECjR+4uSj1XLpK5jmSbF3wyRM+ZuXzrw29Mbei82YNAh0/PjM0xXlfw+/uL/hMNFlMD9piE7rVObcvVvUdd5zY0V1+JXSTjLWv/bCvI+Ez8LfrmlPvfD2QP/Z8JrEAYGsZkrln8PCYNOCJhoZGuz7koh8ySBMG2P0eG56j2/MEZh6u1xnobxM+tm1NFUXiH1mpXLlTNhMYPLtJm9r38DAK8uSeTN6YuKbtmJ1aRov97Lcy+bbknq4K86nUm5zzYFDPkP62MHB/YeaacXxkCO/ALTVPZabOoqXfNet8QvzXcDDbk6OVkM2tH1zXkYTa+bgW33dGxFGXsAmHPt0ek5qCpeWM5oej0oJmg8jz4wEhVELbKZWhWHezMPygh8y5ofvsrmtBgO/mjMwoqJXzpJWw3fqM/J8mGZezDMwj0Rr7w5MKqVvLK2+BIn/y8AIbYRmPrSvZWh5grdjxHdyKXLYjRoxvMuB2mhmkzBVkGfNdJzD5DzXRYmZ1sSFUjweiqOAiZKcUCVDRFzgbl7TqNI75Ka0Tp2TOEmas3uAHzqGAAbQitRWOdnW5v0pcZK0KzWOJ1KLbV8c5lFLcLfpbDZr8567ByarOtqNMJlacoDH5eXqfRInSS8u3uwI8CP1VwADwGTmkpws+5WdEidJV8k8IflBXQsSM60N2k45WY0IRbneCl015nl5Hib7VWKmNZwoEIrIGL1cf8IbW8Xz8/Mo5LRH8vGIfpKYaZ2h9lNQ3a36ApqrTyameuo4IeL3i4v7UaIecuyQJJc3pTq/c9iN2tYsolk3waPx1Sj3M3KuFXo8n2+H1kclDzI0FdUTWdPg6+AItFR2B1BnttvmysDDWnzY/NW/iyegnQcEq2KK6EOB66QVyPYlREfrsyC4f/k4N4PmauNCsTBjuZlj4PWq5A1fKvue3xmcq6G6BpJuYdlMlUJxEprpjr6YCl7KvDj05utn5HpdIJ5cq8nnfoZbiGadAEfT+QtX90HHo1Dzg/KyMI3S0SBUQCA+0OwzCBfNckfARZjrHpcDzsCc9Gp5BqEtoiksRBiHhWoQiA8k/aEYFiKMpVCRAvGBmk9dPYy3fY974DCTdeIiOzC0mm22n4VKqfQzsQI5Bv/+2TACwXoDra7bEDFy0uM8w6HN0VStEH8JN7QaDUeJ5poK5A5xoiyZwm4fLa/tMrmxs72U8fEXzE048BXs/YXLwbba3zEr7uz4Z593VSr0AzQV6L3cuhvtizhwt0cWqpmmWKDEi2jci3G+4bzDvhK3B+30j+s2WSyTO1yI05QV1FNd/5uGnNysKY4mfNLOWZ/hAFD0tYIw7wz0/3EbU/0A4mUiUMEAAAAASUVORK5CYII=");
        transform: translateY(-50%);
        cursor: pointer;
    }

    .icon {
        width: 18px;
        height: 18px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .user-info {
        z-index: 101;
    }

    .profile-img {
        z-index: 9;
        width: 40px;
        height: 40px;
        margin-right: 10px;
        margin-left: 40px;
        border-radius: 20px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        transition: all .3s;
    }

    .order-and-icon-wrapper {
        z-index: 100;
        display: flex;
        margin-left: 25px;
        align-items: center;
    }

    .order-icon {
        z-index: 100;
        margin-right: 4px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAvFJREFUWAntV09rE0EUf293g3rQUxX8DL31oDcVEQ/WgH6BekirHpIqKtR0g0Sb1FZbKE0FaRMQwbN/68GDHnIr0ptfoaJ4tQ1ms+N7GzZMNrO7s0kVChlYdmfen/nt7703+xZgOA4YA5gE741b9pmWi3kQMCZAnIiyRYQt61Aq/Xyp+DNKLyjTBpSZLuTBFfNBB1FzBPxmHbbOJwGlBWgqV7jgCvEJEJsGwAM0j7xcX7G/h4HJZG3hy5KCIv/xg8KTJS1kMBuV0mIUGNkbgyHbUafhfL55rxgZYt8uEhAzk8kVXhOWNBswM76hzp3DlRRUKCDOGS9MQlwRQnh6uswQ9B0GbBlgJQWlBMTVxAmMiC3yO6PDRkDnK88bu80JTugkoJSAvNImh4giX1srPwlsFjulF1miyxWIDynsM66TMoOgcrn54ypHSkB8zrAyplIv+J50VCtzdYFQoBK2KOwLLWd3p9lo/uAEZ19834PfH1R+lYDIwKuI9eXiL5WRzlpttfSYXukcHZDv6eo5IoSAUyo/lmoxbm0yW9gk0JdUelRVH6trpXGWMVN046tryOdUl4AmSoaCSknmAundBxh9MeQzMMC+oab7zlDoTpqCIaA4ovrKoagqC24oV11Qppr/85Alrbq+GBpWmSq2/2tNK4f8b9H12+WTgwLzfVCyK5t/LUAEwutvRGtvYlBAHR8I2ypfmkltPKXeaNwFeET9jdfK6neP7W2ZGQbDPnjFNAR1A71D+dfhf42pOevIJ3P2LLUTc3472+MKYbNWKV+W10POKwEG2u32RNZuPytDpsqZaqVM/2Th/U2v6+4V7iDJ71sD8WIYGLboMCCbExvvqIlIk/F9/u2RZUmfp6btO64Ly9QPv6lVSlfj7ENyaB9y5m5xxP3jXKMXW6CmlX9bnsWBYbmSIRbE5gwr6Q4DZ6PCJLsx5Yn8vL1Vr4+dPvuFqmuEYn+MZEdledwznzOUN3XLhMzGavlVnP5QfmAZ+AuAtC6WgulmZAAAAABJRU5ErkJggg==");
    }
</style>