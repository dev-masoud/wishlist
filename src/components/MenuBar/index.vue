<template>
 <div class="menu-container">
     <div class="logo-box">

         <router-link class="item" to='/'><img src="./logo.png" alt="logo" class="logo"></router-link>


         
     </div>
     
     <div class="titles">


        <router-link class="item" to='/login'><button class="loginbtn btn">Login</button></router-link>

        <router-link class="item" to='/register'><button class="registerbtn btn">Register</button></router-link>

         <router-link class="item" to='/account'>account</router-link>


     </div>
     </div>    
</template>




<script>
export default {
    
}
</script>



<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
* {
  box-sizing: border-box;
}
.menu-container{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-content: space-around;
    background-color: rgb(228, 224, 224);
    padding: 10px 0px;

}
.logo{
    height: 50px;
}
.logo-box{
    display: flex;
    justify-content: center;
    align-content: center;
    height: 50px;
}

.titles{
    width: 100%;
    padding: 10px 0px;
}

.item{
    padding: 30px;
    text-decoration: none;
    color: darkgoldenrod;
            box-sizing: border-box;

}
.item:hover{
    color: rgb(255, 184, 6);
        box-sizing: border-box;
        text-decoration: underline;
        transition:0.3s;

}

.btn{
    width: 150px;
    height: 40px;
    font-family: 'Source Sans Pro', sans-serif;
    border: none;

}

.loginbtn{
    background-color:rgb(0, 81, 255);
}
.registerbtn{
    background-color: green;
}
.loginbtn:hover{
    background-color: rgb(0, 140, 255);
    transition:0.3s;
}
.registerbtn:hover{
    background-color: rgb(5, 179, 5);
    transition:0.3s;
}
</style>