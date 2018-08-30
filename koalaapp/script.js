
//$(document).ready(function(){
  $(function(){
    $("#koala").dblclick(function(){
        $(this).hide(100);
    });
   /* $("#koala").mouseenter(function(){
        alert("!! I am going to be hidden");
    });*/
   /* $("button").click(function(){
      $("#koala").toggle(1000);
    });*/
    $("button").click(function(){ // note the use of quotes for values, use comma instead of semicolon. 
      $("#koala").animate({ //cannot use color animation without plugiin. use camel case for properties
      left:'250px',
      fontSize: '10px'    
      }); //set the position property to absolute or relative 
    });
    /*$(".heading2").click(function(){
      $(this).css("color","red");
    });
    $(".heading2").mouseleave(function(){
      $(this).css("color","blue");
    });*/
    /*$("button").focus(function(){
    $(this).css("background-color", "green");
    });*/
 /*   $("img").mouseenter(function(){
    $(this).css("opacity", "0.5");
    });*/
     $("img").mouseleave(function(){
    $(this).css("opacity", "1");
    });
     $("img").click(function(){
    $("img").fadeTo("slow",0.7);
    });
    /* $("img").dblclick(function(){
    $("#div1").fadeOut(1000);
    });*/
      $(".heading2").click(function(){
    $("p.intro").slideToggle("medium");
    });
});

