<template>
  <div class="content clearFix">
      <div class="detail-left">
          <img :src="productorIcon">
          <ul class="text">
              <!-- active-class是给跳转的路由添加样式 -->
              <router-link v-for="item in products" tag='li' active-class="active" :to=item.path>{{item.name}}</router-link>
          </ul>
      </div>
      <div class="right">
           <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            products: [
                {
                name: '数据统计',
                path: 'count',
                active: false
                },
                {
                name: '数据预测',
                path: 'forecast',
                active: false
                },
                {
                name: '流量分析',
                path: 'analysis',
                active: false
                },
                {
                name: '广告发布',
                path: 'publish',
                active: false
                }
            ],
            imgMap: {
                '/detail/count': require("../assets/images/1.png"),
                '/detail/forecast': require("../assets/images/2.png"),
                '/detail/analysis': require("../assets/images/3.png"),
                '/detail/publish': require("../assets/images/4.png")
            }
        }
    },
    computed:{
        productorIcon(){
            return this.imgMap[this.$route.path]
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
.clearFix:after{
    clear: both;
    display: block;
    content: ''
}
.detail-left{
    float: left;
    width: 200px;
    text-align: center;
    margin: 20px 0;
    background: #fff;
}
.detail-left img{
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 50%;
}
.text{
    margin-top: 20px
}
.text li {
    padding: 10px 0 ;
    text-align: center;
    font-size: 14px
}

.text li.active,
.text li:hover {
  background: #4fc08d;
  color: #fff;
}
.text li a {
  display: block;
}
.right{
    margin: 20px 0 20px 20px;
    float: left;
    width: 980px;
}
</style>
