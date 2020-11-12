<template>

        <div class="member-nav">
            <el-container style="position: absolute;left: 0;top: 0;bottom: 0;right: 0;overflow: hidden;">
                <el-header class="d-flex align-items-center" style="background: #545c64;">
                    <!-- -->
                    <!-- 顶部导航栏 -->
                    <el-menu
                            :default-active="navBarIndex"
                            class="el-menu-demo"
                            mode="horizontal"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-menu-item index="1">商品</el-menu-item>
                        <el-menu-item index="1">订单</el-menu-item>
                        <el-menu-item index="1">会员</el-menu-item>
                        <el-menu-item index="1">设置</el-menu-item>
                        <el-submenu index="100">
                            <template slot="title">
                                <!-- 头像 -->
                            </template>
                            <el-menu-item index="100-1">修改</el-menu-item>
                            <el-menu-item index="100-2">退出</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-header>
            </el-container>
        </div>
</template>


    <script>
        export default {
            name: "MemberNav",
            data() {
                return {
                    navBarIndex: '1'
                };
            },
            methods: {
                handleSelect(key, keyPath) {
                    console.log(key, keyPath);
                }
            }
        }
    </script>

<style scoped>

</style>