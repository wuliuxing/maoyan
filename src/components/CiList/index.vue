<template>
    <div class="main">
        <div class="title">
            <ul>
                <li>
                    全城   <i></i>
                </li>
                <li>
                    品牌 <i></i>
                </li>
                <li>
                    特色 <i></i>
                </li>
            </ul>
        </div>
        <div class="content" v-for="item in cinemas" :key="item.id">
            <h4> {{item.nm}} </h4>
            <p class="p1"> {{item.addr}} </p>
            <div class="div1"  v-if="item.tag.vipTag">
                <!-- <p>小吃</p> -->
                <p> {{item.tag.vipTag}} </p>
            </div>
            <p class="p2" v-if="item.promotion.cardPromotionTag"> <img src="../../assets/img/img.png" alt=""> <span> {{item.promotion.cardPromotionTag}} </span> </p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cinemas:[]
        }
    },
    mounted(){
        this.axios.get('api/cinemaList?cityId=10').then((res)=>{
            this.cinemas = res.data.data.cinemas
            // console.log(this.cinemas)
        })
    }
}
</script>

<style scoped>
.main{
    width: 100%;
    height: 100%;
}
.main li{
    width: 33%;
    display: inline-block;
    text-align: center;
    color: #888;
    font-size: 0.9rem;
    padding-top: 6px;
    vertical-align: middle;
}
.main li i{
     width:0;
    height:0;
    border-width:5px 5px 0;
    border-style:solid;
    border-color:#888 transparent transparent;/*灰 透明 透明 */
    position:relative;
    top: 14px;
    left: 4px;
}
.content{
    padding: 10px;
    position: relative;
    top: 20px;
}
.content h4{
    font-size: 1.1rem;
}
.content .p1{
    font-size: 0.7rem;
    color: #888;
}
.content .div1{
    width: 100%;
    padding: 5px 0px;
}
.content .div1 p{
    font-size: 0.7rem;
    border: 1px solid #f90;
    color: #f90;
    padding: 1px 2px;
    display: inline-block;
    margin-right: 4px;
    
}
.content .p2{
    width: 100%;
    font-size: 0.6rem;
    color: #888;
    
}
.content .p2 span{
    vertical-align: top;
    padding-left: 4px;
}
.content .p2 img{
    width: 16px;
    height: 16px;
}
</style>
