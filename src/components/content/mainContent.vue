<template>
  <div class="content clearFix">
      <div class="left">
          <div class="index-left">
              <h2>全部产品</h2>
              <template v-for="product in productList">
                  <h3>{{product.title}}</h3>
              <ul>
                  <li v-for="item in product.list">
                      <a :href="item.url">{{item.name}}</a>
                  </li>
              </ul>
              <div v-if="!product.last" class="hr"></div>
              </template>
          </div>
          <div class="index-left">
              <h2>最新消息</h2>
              <ul>
                  <li v-for="item in newList">
                      <a :href="item.url" class="new-item">{{item.title}}</a>
                  </li>
              </ul>
          </div>
      </div>
      <div class="right">
          <div class="index-right">
              <slides></slides>
          </div>
          <div class="index-board-list">
        <div
        class="index-board-item"
        v-for="(item, index) in boardList"
        :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
          <div class="index-board-item-inner" >
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path:'detail/'+item.toKey}">立即购买</router-link>
            </div>  
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import slides from './slides'
export default {
    components:{
        slides
    },
    created(){
        this.datas=this.$store.state.data
        this.$store.dispatch('getAllList');
        this.newList=this.datas.getNewsList;
    },
    data (){
        return {
            datas:[],
            boardList: [
                {
                title: '开放产品',
                description: '开放产品是一款开放产品',
                id: 'car',
                toKey: 'analysis',
                saleout: false
                },
                {
                title: '品牌营销',
                description: '品牌营销帮助你的产品更好地找到定位',
                id: 'earth',
                toKey: 'count',
                saleout: false
                },
                {
                title: '使命必达',
                description: '使命必达快速迭代永远保持最前端的速度',
                id: 'loud',
                toKey: 'forecast',
                saleout: true
                },
                {
                title: '勇攀高峰',
                description: '帮你勇闯高峰，到达事业的顶峰',
                id: 'hill',
                toKey: 'publish',
                saleout: false
                }
            ],
            newList:[],
            productList: {
                pc: {
                title: 'PC产品',
                list: [
                    {
                    name: '数据统计',
                    url: 'http://starcraft.com'
                    },
                    {
                    name: '数据预测',
                    url: 'http://warcraft.com'
                    },
                    {
                    name: '流量分析',
                    url: 'http://overwatch.com',
                    hot: true
                    },
                    {
                    name: '广告发布',
                    url: 'http://hearstone.com'
                    }
                ]
                },
                app: {
                title: '手机应用类',
                last: true,
                list: [
                    {
                    name: '91助手',
                    url: 'http://weixin.com'
                    },
                    {
                    name: '产品助手',
                    url: 'http://twitter.com',
                    hot: true
                    },
                    {
                    name: '智能地图',
                    url: 'http://maps.com'
                    },
                    {
                    name: '团队语音',
                    url: 'http://phone.com'
                    }
                ]
                }
            }
        }
    },
    
}
</script>

<style>
.content{
    width: 1200px;
    margin: 0 auto;
    background: rgb(214, 211, 211);
}
.left{
    float: left;
    width: 300px;
    text-align: left;
}
.right{
    float: right;
    width: 900px;
}
.clearFix:after{
    clear: both;
    display: block;
    content: ''
}
.index-left{
    margin: 15px;
    background: #fff
}
.index-left h2{
    background: rgb(114, 221, 114);
    margin-bottom:20px;
    padding: 10px 10px;
    color: #fff;
    font-weight: normal;
    font-size:14px
}
.index-left h3{
    font-size:14px;
    padding: 5px 10px;
    margin-bottom: 10px
}
.index-left ul{
    padding: 5px 10px;
}
.index-left ul li{
    padding: 5px;
    font-size:14px;
    text-overflow: ellipsis;
     overflow: hidden;
}
.new-item{
   white-space: nowrap;
}
.hr{
    margin-bottom: 15px;
    border-top: 1px solid #000
}
.index-right{
    margin: 15px 15px 15px 0
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner{
  background: url(../../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 390px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.button{
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
}
</style>
