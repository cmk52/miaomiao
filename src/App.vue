<template>
    <keep-alive>
    <router-view/> <!-- 切换路由使用缓存而不再次运行js代码,因为vue就算靠js来模拟后端路由的 -->
    </keep-alive>
</template>

