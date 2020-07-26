<template>
    <header id="header">
        <h1>{{ title }}</h1>
    </header>
</template>
<script>
export default {
    name : 'Header', //因为本项目都是给每一个组件建一个文件夹然后访问index.vue,这样在浏览器的插件检测到的都是index,我们给组件起一个名字来更好测试
    props: {
        title:{
            type:String,
            default:'喵喵电影'//header会作为很多组件的子组件共用一个头,为了每次头标题不同采用父传子来改变
        }
    }

}
</script>

<style  scoped>
#header{width:100%; height:50px; color: #fff; background: #e54847; border-bottom: 1px solid #e54847; position: relative;}
#header h1{ font-size: 18px; text-align: center; line-height: 50px; font-weight: normal; }
#header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
</style>