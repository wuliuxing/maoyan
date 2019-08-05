<template>
    <div class="detail">
        <!-- 当前ID是：{{$route.params.id}}  -->
        <div class="title" >
            <div class="img">
                <img :src="moviedetail.img | setWH('90.188')">
            </div>
            <div class="txt">
                <h4> {{moviedetail.nm}} </h4>
                <h5> {{moviedetail.enm}} </h5>
                <p class="score"> 观众评分： {{moviedetail.sc}} </p>
                <h5> ({{moviedetail.proScoreNum}}万人评分) </h5>
                <h5> {{moviedetail.cat}} </h5>
                <h5> {{moviedetail.src}} / {{moviedetail.episodeDur}}分钟 </h5>
                <h5> {{moviedetail.pubDesc}} </h5>
            </div>
        </div>
        <div class="content">
            <v-clamp autoresize  :max-lines="5" class="synopsis" id="synopsis">
                {{moviedetail.dra}}    
            </v-clamp>
            <p class="ico" :class="{'ico_up':isChoose}" @click="open"></p>
        </div>
    </div>
</template>

<script> 
import VClamp from 'vue-clamp'
export default {
    name:'detail',
    data(){
        return{
            movieID:'',
            moviedetail:[],
            isChoose:false
        }
    },
    watch: {
        $route: {
            handler: function(val) {
                this.movieID = this.$route.params.id;
        },
            immediate: true
        }
    },
    mounted(){
        this.axios.get('/api/detailmovie?movieId='+ this.movieID).then((res)=>{
            this.moviedetail = res.data.data.detailMovie;
            // console.log(this.moviedetail);
        })
    },
    methods:{
        open:function(){
           this.isChoose = !this.isChoose; 
            if(this.isChoose == true){
                document.getElementById("synopsis").style.height="auto"
            }else {
                document.getElementById("synopsis").style.height="64px"
            }
        }
    },
    components:{
        VClamp
    }
}
</script>

<style scoped>

.detail{
    width: 100%;
    height: 100%;
}
.detail .title{
    width: 100%;
    background-color: #40454d;
}
.detail .img{
    width: 30%;
    padding:14px 14px;
    display: inline-block;
}
.detail .txt{
    display: inline-block;
    vertical-align: top;
    padding:14px 0;
    color: #fff;
}
.detail h4{
    font-size: 1.0rem;
}
.detail h5{
    font-size: 0.7rem;
    opacity: 0.8;
}
.detail .score{
    color: #faaf00
}
.detail .score img{
    width: 14px;
    height: 14px;
}
.synopsis{
    padding: 10px;
    height: 64px;
    overflow: hidden;
    font-size: 1.1rem;
    margin: 0;
    color: #888;
    text-align: left;
}
.content{
    text-align: center;
}
.ico{
    display: inline-block;
    width: 0;
    height: 0;
    border: 6px solid transparent ;
    border-top-color:#000 ;
}
.ico_up{
    width: 0;
    height: 0;
    border: 6px solid transparent ;
    border-bottom-color:#000 ;
}
</style>
