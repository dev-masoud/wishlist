<template>
    <div class="box-container">

        <div class="login-box">
            <div class="input-box">
                 <label for="put1" class="lab1">User Name</label>
                <input type="text" class="put1" id="put1">
            

            <div class="input-box2">
             <label for="put2" class="lab1">Password</label>
              <input type="text" class="put2" id="put2">

            </div>

            <button class="subbtn">Submit</button>
            

                
            </div>
       

        </div>

        

    </div>
</template>



<script>
export default {
    
}
</script>



<style lang="scss" scoped>
.box-container{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
}
    .login-box{
        width: 300px;
        height: 400px;
        background-color: #77ACF1;
        border-radius: 5%;
        box-shadow: 0px 0px 6px rgb(116, 116, 116);
        padding:15px ;
    }
    .lab1{
        display: block;
        margin-left: 5px;
         margin-top:5px;


    }
     .put1,.put2{
         width: 80%;
         height: 30px;
         background-color: transparent;
         border:none;
         border-bottom: 1.5px solid black;
         margin-top:5px;

         
     }

        .put1:hover,.put2:hover{
         border-bottom: 1.5px solid black;
         transition: 0.5s;
        background-color: rgb(74, 178, 192);
        }
        .put1:focus,.put2:focus,.put3:focus{
         outline: none;
         width: 100%;
         transition: 0.5s;
        }
    .iput-box2 {
        margin-top: 10px;
    }
    .subbtn{
        margin-top: 10px;
        width: 100px;
        height: 30px;

    }

</style>