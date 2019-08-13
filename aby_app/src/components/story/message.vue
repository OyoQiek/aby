<template>
    <div id="container">
        <h1>有趣房东</h1>
        <div class="m-list">
            <div class="message">
                <div class="imga">
                    <img src="../../../public/images/story/tp.jpg" alt="">
                    <span class="iconfont icon-zansel"></span>
                    <div>房源</div>
                </div>
                
                <p>清迈</p><span>清迈有一家有"大象叫早服务"的民宿</span>
                <div class="zan">
                    <div>
                         <img src="../../../public/images/story/tx.jpg" alt="">
                    </div>
                    <div>
                        <span class="iconfont icon-zansel"></span>
                        <span>99+</span>
                    </div>
                    
                    <div>
                        <span class="iconfont icon-message-fill"></span>
                        <span>70</span>
                    </div>
                </div>
            </div>
            <div class="message">
                <img src="../../../public/images/story/tp.jpg" alt="">
                <p>清迈</p><span>清迈有一家有"大象叫早服务"的民宿</span>
            </div>
            <div class="message">
                <img src="../../../public/images/story/tp.jpg" alt="">
                <p>清迈</p><span>清迈有一家有"大象叫早服务"的民宿</span>
            </div>
            <div class="message">
                <img src="../../../public/images/story/tp.jpg" alt="">
                <p>清迈</p><span>清迈有一家有"大象叫早服务"的民宿</span>
            </div>
            <div class="btn">
                <a href="javascript:">显示更多故事</a>
            </div>
        </div>    
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
    #container{
        margin: 40px 20px;
    }
    .m-list{
        display: flex;
        justify-content: space-between;
        flex-flow:row wrap;
    }
    .message{
        width: 48%;
        margin-top:30px;
        font-size: 14px;
    }
    .message img{
        border-radius: 5px;
        width: 100%;
    }
    .message p{
        display: inline;
        margin-right: 8px;
        font-weight: bold;
    }
    .zan{
        display: flex;
        align-items: center;
    }
    .zan img{
        width: 22px;
    }
    .zan div img{
        border-radius: 50%;
        margin-right: 15px;
        margin-top:5px;
    }
    .zan div~div span:first-child{
        color:#666;
        font-size: 18px;
        vertical-align: middle;
        margin:0 2px;
    }
      .zan div~div span:last-child{
        color:#000;
        font-size:12px;
    }
    .btn{
        border:1px solid #008489;
        width: 100%;
        text-align: center;
        padding:12px 0;
        border-radius: 5px;
        margin-top: 20px;
    }
    .btn a{
        color:#008489;
        font-size: 14px;
        font-weight: bold;
    }
    .btn a:hover{
        color:#089ca1;
    }
    .imga{
        position: relative;
    }
    .imga span{
        position: absolute;
        top:10px;
        right:10px;
        font-size: 25px;
        color:#fff;
    }
    .imga div{
        position: absolute;
        bottom:13px;
        right:10px;
        background: #fff;
        padding: 4px 12px;
        border-radius: 3px;
        font-size:10px;
    }
</style>
