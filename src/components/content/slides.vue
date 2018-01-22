<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in slides" :key="item.index">
      <a :href="item.href">
          <img :src="item.src">
      </a>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
    export default{
        data(){
        return {
            slides: [
                {
                src: require('../../assets/slideShow/pic1.jpg'),
                title: 'xxx1',
                href: 'detail/analysis'
                },
                {
                src: require('../../assets/slideShow/pic2.jpg'),
                title: 'xxx2',
                href: 'detail/count'
                },
                {
                src: require('../../assets/slideShow/pic3.jpg'),
                title: 'xxx3',
                href: 'http://xxx.xxx.com'
                },
                {
                src: require('../../assets/slideShow/pic4.jpg'),
                title: 'xxx4',
                href: 'detail/forecast'
                }
            ],
        }
    }
    }
</script>
<style>
.el-carousel__container{
    height: 500px;
}
.el-carousel__indicators--outside button{
    background-color: rgb(2, 19, 253)
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>