<template>
    <div class="search">
        <div class="title">
             <!-- {{messsage}} -->
             <input type="text" placeholder="搜电影、搜影院" class="input" v-model="messsage">
             <span @click="$router.go(-1)">取消</span>
        </div>
        <div class="content">
            <h3>
                电影/电视剧/综艺
            </h3>
            <ul>
                <li v-for="item in movieList1" :key="item.id">
                    <div class="img">
                        <router-link :to ="{name:'detailRoter',params :{id:item.id}}" v-on:click.native="$router.go(0)">
                            <img :src=" item.img | setWH('60.110') ">
                        </router-link>
                    </div>
                    <div class="txt">
                        <h4> {{item.nm}} </h4>
                        <p> {{item.enm}} </p>
                        <p> {{item.cat}} </p>
                        <p> {{item.rt}} </p>
                    </div>
                    <div class="right">
                        <span>
                            {{item.sc}}分
                        </span>
                        <p>
                            购票
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'search',
    data(){
        return{
            messsage:'',
            movieList1 : []
        }
    },
    methods : {
        cancelRequest(){
            if(typeof this.source ==='function'){
                this.source('终止请求')
            }
        },
    },
    watch:{
        messsage(newVal){
            var that = this;
            this.cancelRequest();
            this.axios.get('/api/searchList?cityId=10&kw='+newVal,{
                cancelToken: new this.axios.CancelToken(function executor(c) {
                that.source = c;
            })
        }).then((res)=>{
            var msg1 = res.data.msg;
            var movies1 = res.data.data.movies;
            if(msg1 && movies1){
                this.movieList1 = res.data.data.movies.list;
                console.log(2)
            }
        })
    }
    }
}
</script>

<style scoped>
.search{
    width: 100%;
}
.title{
    padding: 10px;
    text-align: left;
}
.input{
    width: 86%;
    display: inline-block;
    -webkit-box-flex: 1;
    flex: 1;
    border: none;
    font-size: 13px;
    color: #333;
    line-height: 20px;
    padding: 4px 0;
}
.title span{
    height: 30px;
    line-height: 30px;
    padding: 0 6px;
    font-size: 16px;
    color: #f03d37;
}
.content{
    padding: 10px;
}
.content h3{
    font-size: 1.0rem;
    color: #888;
}
.content ul{
    margin: 20px auto;
}
.img{
    display: inline-block
}
.content ul li{
    margin-top: 18px;
    
}
.txt{
    padding-left: 12px;
    display: inline-block;
    vertical-align: top;
}
.txt h4{
    vertical-align: top;
    font-size: 1.0rem;
    font-weight: 600;
}
.txt p{
    color: #888;
    font-size: 0.9rem;
    padding-top: 4px;
}
.right{
    display: inline-block;
    vertical-align: top;
    float: right;
}
.right span{
   color: #fa0;
}
.right p{
    font-size: 0.8rem;
    color: #fff;
    background: #f03d37;
    padding: 4px 10px;
    position: relative;
    margin-top: 12px;
    border: none;
    border-radius:3px;
}
</style>
