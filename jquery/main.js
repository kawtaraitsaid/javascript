$(document).ready(function (){

    document.getElementById("btn-hide").on("click",function(){
        $("#title-1").hide();
        $(".paragraph-2").hide();
        $("#title-1").css({'color':'red','backgroundColor':"#333"});
        $(".liste li:nth-child(2n)").css("color", "red");
   })
   
   $("btn-hide").click(function(){
       $("title-1").hide();
       $(".paragraph-2").hide();
       $("#title-1").css('color':'red');
       $(".li")
   
   })
})

 