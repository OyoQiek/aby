<template>
    <div>
        <div class="fixed_top">
            <div class="pr">
                <div>&lt;</div>
                <div><span class="iconfont icon-aixin collect"></span></div>
            </div>
        </div>
        <div style="height:240px">asd</div>
    </div>
</template>
<script>
import Carousel from '../../components/carousel'
export default {
    components:{
        Carousel,
    }
}
</script>
<style scoped>
    .fixed_top{
        position: absolute;
        background: transparent;
        width: 100%;
    }
    .fixed_top .pr{
        position: relative;
        text-align: center;
    }
    .fixed_top .pr div:first-child{
        width: 32px;
        height: 32px;
        background: rgba(0,0,0,.35);
        border-radius: 50%;

    }
</style>
