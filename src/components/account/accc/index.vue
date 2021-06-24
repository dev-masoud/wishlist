<template>
    <div class="container">
        <div class="box">

            <h2>profile box</h2>
            <div class="avatar"></div>


            <div class="box-items">
        <router-link class="item" to='/account/edit'>edit profile</router-link>

        <router-link class="item" to='/account/wishlist'>wishlist</router-link>

            </div>
             
        </div>
        <div class="other"></div>
    
    
    <router-view/>
    
    </div>
    
</template>



<script>
export default {
    
}
</script>



<style lang="scss" scoped>
.avatar{
    width: 160px;
    height: 160px;
    border-radius:100%;
    background-color: rgb(233, 230, 230);
}
.box-items{
    display: flex;
    flex-direction: column;
}
.container{
    display: flex;
    justify-content:flex-start;
    width: 100%;
    height: 100%;
}
.other{
        width: 100%;

}
.box{
    width: 350px;
    height: 500px;
    background-color:rgb(76, 214, 136);
    border-radius: 5% 0% 0% 5%;
    margin: auto;
    display: flex;
    flex-direction: column;
}
.item{
    margin: 30px;
    text-decoration: none;
    color: darkgoldenrod;
}

</style>