<template>
    <div class="city_body">
				<div class="city_list">
					<div class="city_hot">
						<h2>热门城市</h2>
						<ul class="clearfix">
							<li v-for="data in hotList" :key="data.cityId">{{data.name}}</li>
						</ul>
					</div>
					<div class="city_sort" ref="city_sort">
						<div v-for="item in cityList" :key="item.index">
							<h2>{{item.index}}</h2>
							<ul>
								<li v-for="item2 in item.list" :key="item2.id">{{item2.nm}}</li>
							</ul>
						</div>
					</div>
				</div>
						<!-- <div>
							<h2>B</h2>
							<ul>
								<li>北京</li>
								<li>保定</li>
								<li>蚌埠</li>
								<li>包头</li>
							</ul>
						</div>
						<div>
							<h2>A</h2>
							<ul>
								<li>阿拉善盟</li>
								<li>鞍山</li>
								<li>安庆</li>
								<li>安阳</li>
							</ul>
						</div>
						<div>
							<h2>B</h2>
							<ul>
								<li>北京</li>
								<li>保定</li>
								<li>蚌埠</li>
								<li>包头</li>
							</ul>
						</div>
						<div>
							<h2>A</h2>
							<ul>
								<li>阿拉善盟</li>
								<li>鞍山</li>
								<li>安庆</li>
								<li>安阳</li>
							</ul>
						</div>
						<div>
							<h2>B</h2>
							<ul>
								<li>北京</li>
								<li>保定</li>
								<li>蚌埠</li>
								<li>包头</li>
							</ul>
						</div>	
					</div>
				</div> -->
				<div class="city_index">
					<ul>
						<li v-for="(data,index) in cityList" :key="data.index" @touchstart="handleToIndex(index)">{{data.index}}</li>
					</ul>
				</div>
			</div>
</template>
<script>
export default {
	name:'City',
	data(){
		return{
			cityList:[],
			hotList:[]
		}
	},
	mounted () {
		this.axios({
      url:"/api/gateway?k=9234901",
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res=>{
      console.log(res.data);
	//   this.datalist = this.handleCity(res.data.data.cities)
	var msg=res.data.msg;
	if(msg==="ok"){
		var data=res.data.data.cities;
		this.formatCityList(data);//对所有城市进行操作分成字母分类
	}
    })
	},
	methods: {
		formatCityList(cities){
			var cityList=[];//按字母分好类的集合
			var hotList=[]//热门城市集合
			for(var i=0;i<cities.length;i++){
				if(cities[i].isHot===1){
					hotList.push(cities[i])
				}
			}

			for(var i=0;i<cities.length;i++){
				var firstLetter=cities[i].pinyin.substring(0,1).toUpperCase()
				if(toCom(firstLetter)){//判断集合当中有没有'A'字母这个组
					//如果没有就添加这个组
					cityList.push({index:firstLetter,list:[{nm:cities[i].name,id:cities[i].cityId}]})
				}else{
					//如果有这个组了则找到这个组给这个组再加一个城市
					for(var j=0;j<cityList.length;j++){
						if(cityList[j].index===firstLetter){
							cityList[j].list.push({nm:cities[i].name,id:cities[i].cityId})
						}
					}
				}
			}
			//使用sort方法对错乱顺序的各个字母组城市按照字母顺序排好
			cityList.sort((n1,n2)=>{
				if(n1.index>n2.index){
					return 1;
				}
				else if(n1.index<n2.index){
					return -1;
				}else{
					return 0;
				}
			})
			function toCom(firstLetter){
				//对每个城市进行操作判断集合当中有没有存这个城市有了则返回false没有返回true
				for(var i=0;i<cityList.length;i++){
					if(cityList[i].index===firstLetter){
						return false
					}
				}
				return true
			}
			this.cityList=cityList
			this.hotList=hotList
			// console.log(hotList)
			// console.log(cityList)
		},
		handleToIndex(index){
			var h2=this.$refs.city_sort.getElementsByTagName('h2')//拿到原生dom节点
			//点的是哪个字母就让哪个h2块内容变成父节点的最上面
			//此句话表示把点击的h2位置赋值给父节点滚动的距离
			this.$refs.city_sort.parentNode.scrollTop=h2[index].offsetTop;
		}
	}
}
</script>

<style scoped>
#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>