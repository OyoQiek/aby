<template>
    <div>
        <div id="search">
            <input type="text" placeholder="搜索杭州的美食故事">
            <span class="iconfont icon-iconset0157"></span>
        </div>
        <div id="nav">
          <mt-navbar v-model="selected">
            <mt-tab-item id="1">所有故事</mt-tab-item>
            <mt-tab-item id="2">名宿</mt-tab-item>
            <mt-tab-item id="3">美食</mt-tab-item>
            <mt-tab-item id="4">景点</mt-tab-item>
          </mt-navbar>
        </div>
        <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <h4>所有故事</h4>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <h4>名宿</h4>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <h4>美食</h4>
                </mt-tab-container-item>
                <mt-tab-container-item id="4">
                   <h4>景点</h4>
                </mt-tab-container-item>
            </mt-tab-container>
        
    </div>    
</template>
<script>
export default {
     data(){
        return{
            selected:"1"
        }
    },
}
</script>
<style scoped>
    #search{
        position: relative;
    }
    #search span{
        position: absolute;
        top:24px;
        left:29px;
    }
    #search input{
        box-shadow:0px 0px 15px 5px rgb(0,0,0,0.1);
        border: 0;
        margin: 15px 5%;
        width: 90%;
        padding: 10px 30px;
        outline: none;
        box-sizing: border-box;
    }
    #nav{
        color:#999;
        
        box-shadow:0px 2px 5px 0px rgb(0,0,0,0.1);
    }
    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 2px solid #000;
        color: #000;
    }
</style>
