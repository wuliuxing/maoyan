<template>
    <div>
        <div id="main">
		<div id="content">
			<div class="movie_body">
				<ul>
					<li v-for="item in movieList" :key="item.id">

						<div class="pic_show">
							<router-link :to ="{name:'detailRoter',params :{id:item.id}}" v-on:click.native="$router.go(0)">
							 <!-- <router-link :to="{path:'/detail/id',query:{id:item.id}}" ref="riguser">  -->
								<img :src="item.img | setWH('128.188')">
							</router-link>
						</div>
						<div class="info_list">
							<h2> {{item.nm}} </h2>
							<p>观众评 <span class="grade"> {{item.sc}} </span></p>
							<p>主演: {{item.star}} </p>
							<p> {{item.showInfo}} </p>
						</div>
						<div class="btn_mall">
							购票
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
    </div>
</template>

<script>

export default {
	name:'NowPlaying',
	data(){
		return{
			movieList:[]
		}
	},
    mounted(){
        this.axios.get('/api/movieOnInfoList?cityId=10').then((res)=>{
			this.movieList = res.data.data.movieList
            // console.log(res.data.data.movieList);
        })
	},
	methods:{
　　}
}
</script>

<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:84px; height: 90px;}
.movie_body .pic_show img{ width:100%;height: 100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:180px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
.movie_body .pullDown{ margin:0; padding:0; border:none;}
</style>

