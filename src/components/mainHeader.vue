<template>
  <div class="header">
        <div class="logo">
            <img src="../assets/logo.png">
        </div>
        <div class="userInfo">
            <button>登录</button>
            <button>注册</button>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .header{
        width: 100%;
        height: 80px;
        box-sizing: border-box;
        padding:15px 100px;
        background: rgb(34, 32, 32)
    }
    .logo{
        width: 50px;
        height: 50px;
        float: left;
    }
    .logo img{
        width: 100%;
        height: 100%;
    }
    .userInfo{
        float: right;
    }
    .userInfo button{
        width: 50px;
        height: 50px;
        font: 18px/50px '微软雅黑';
        margin-right: 5px;
        color: beige;
        background: inherit;
        border: none;
        cursor: pointer;
    }
    .userInfo button:focus{
        outline: none
    }
</style>
