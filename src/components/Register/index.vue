<template>
    <div class="box-container">

        <div class="sign-box">
            <div class="input-box">
                 <label for="put1" class="lab1">User Name</label>
                <input type="text" class="put1" id="put1">
            

            <div class="input-box2">
             <label for="put2" class="lab1">Enter Password</label>
              <input type="text" class="put2" id="put2">

            </div>


            <div class="input-box3">
             <label for="put3" class="lab1">ReEnter Password</label>
              <input type="text" class="put3" id="put3">

            </div>

            <button class="regbtn">Submit</button>
            

                
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
    .sign-box{
        width: 300px;
        height: 400px;
        background-color: #51C4D3;
        border-radius: 5%;
        box-shadow: 0px 0px 6px rgb(116, 116, 116);
        padding:15px ;
    }
    .lab1{
        display: block;
        margin-left: 5px;
         margin-top:5px;


    }
     .put1,.put2,.put3{
         width: 80%;
         height: 30px;
         background-color: transparent;
         border:none;
         border-bottom: 1.5px solid #132C33;
         margin-top:5px;

         
     }

        .put1:hover,.put2:hover,.put3:hover{
         border-bottom: 1.5px solid #132C33;
         background-color: #42a1ad;
         transition:0.3s;

        }
        .put1:focus,.put2:focus,.put3:focus{
         outline: none;
         width: 100%;
         transition: 0.5s;


        }
    .iput-box2 {
        margin-top: 10px;
    }
    .regbtn{
        margin-top: 10px;
        width: 100px;
        height: 30px;

    }

</style>