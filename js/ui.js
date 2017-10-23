$(".full").hover(function(){
	$(this).css("color","orange");
},function(){
	$(this).css("color","#fff");
});
var a=1;
console.log(a);
if(a==1){
$(".full").click(function(){
	var docElm = document.documentElement;
	//W3C  
	if (docElm.requestFullscreen) {  
   		docElm.requestFullscreen();  
	}
	//FireFox  
	else if (docElm.mozRequestFullScreen) {  
    	docElm.mozRequestFullScreen();  
	}
	//Chrome等  
	else if (docElm.webkitRequestFullScreen) {  
    	docElm.webkitRequestFullScreen();  
	}
	//IE11
	else if (elem.msRequestFullscreen) {
 		 elem.msRequestFullscreen();
	}
});
a++;
};

if(a==2){
	$(".full").click(function(){
	if (document.exitFullscreen) {  
    document.exitFullscreen();  
	}  
	else if (document.mozCancelFullScreen) {  
    document.mozCancelFullScreen();  
	}  
	else if (document.webkitCancelFullScreen) {  
    document.webkitCancelFullScreen();  
	}
	else if (document.msExitFullscreen) {
    document.msExitFullscreen();
}
	});
	a--;
}

$(".header-menu a").hover(function(){
		$(this).css("color","orange");
	},function(){
		$(this).css("color","#fff");
	});


$(".slider-text-font-item:gt(0)").hover(function(){
	$(this).css({"font-size":"25px","color":"orange"});
	$(this).stop();
},function(){
	$(this).css({"font-size":"23px","color":"#fff"});

});

var slider_settime=setTimeout(function(){
	$(".slider-text-font a:eq(1)").animate({"left":"650px"},5000,function(){
	 	$(".slider-text-font a:eq(1)").css("left","-600px");
	 });
	$(".slider-text-font a:eq(2)").animate({"left":"650px"},4000,function(){
	 	$(".slider-text-font a:eq(2)").css("left","-70px");
	 });
	  $(".slider-text-font a:eq(3)").animate({"left":"650px"},4000,function(){
	 	$(".slider-text-font a:eq(3)").css("left","-70px");
	 });
	   $(".slider-text-font a:eq(4)").animate({"left":"650px"},4500,function(){
	 	$(".slider-text-font a:eq(4)").css("left","-210px");
	 });
	    $(".slider-text-font a:eq(5)").animate({"left":"650px"},6000,function(){
	 	$(".slider-text-font a:eq(5)").css("left","-275px");
	 });
	     $(".slider-text-font a:eq(6)").animate({"left":"650px"},4000,function(){
	 	$(".slider-text-font a:eq(6)").css("left","-310px");
	 });

},0);
var slider_inttime=setInterval(function(){
	
	 $(".slider-text-font a:eq(1)").animate({"left":"650px"},11000,function(){
	 	$(".slider-text-font a:eq(1)").css("left","-600px");
	 });
	 
	  $(".slider-text-font a:eq(2)").animate({"left":"650px"},7000,function(){
	 	$(".slider-text-font a:eq(2)").css("left","-70px");
	 });
	
	   $(".slider-text-font a:eq(3)").animate({"left":"650px"},8000,function(){
	 	$(".slider-text-font a:eq(3)").css("left","-70px");
	 });
	    $(".slider-text-font a:eq(4)").animate({"left":"650px"},9000,function(){
	 	$(".slider-text-font a:eq(4)").css("left","-600px");
	 });
	     $(".slider-text-font a:eq(5)").animate({"left":"650px"},8500,function(){
	 	$(".slider-text-font a:eq(5)").css("left","-600px");
	 });
	     $(".slider-text-font a:eq(6)").animate({"left":"650px"},8800,function(){
	 	$(".slider-text-font a:eq(6)").css("left","-600px");
	 });
},0);

 $(".slider-input  img").hover(function(){
$(this).css({"opacity":"1.0","width":"300px","height":"300px","left":"0","top":"0"});
 },function(){
$(this).css({"opacity":"0.5","width":"200px","height":"200px","left":"40px","top":"40px"});
 });
// middle style
$(".middle-share-itme").hover(function(){
	$(this).css("background-color","#cccccc");
},function(){
	$(this).css("background-color","#fff");
});
// menu style
$(".menu-all div").hover(function(){
	$(this).css("background-color","#333333");
},function(){
	$(this).css("background-color","#ff8b38");
});


$(".menu-all div:eq(0)").hover(function(){
	$(".menu .two").hide();
	$(".menu .three").hide();
	$(".menu .one").fadeIn(1500);
},function(){
});
$(".menu-all div:eq(1)").hover(function(){
	$(".menu .one").hide();
	$(".menu .three").hide();
	$(".menu .two").fadeIn(1500);
},function(){
});
$(".menu-all div:eq(2)").hover(function(){
	$(".menu .one").hide();
	$(".menu .two").hide();
	$(".menu .three").fadeIn(1500);
},function(){
});

$(".wine-more").hover(function(){
	$(".show-wine").css("display","block");
},function(){
	// $(".show-wine").css("display","none");
});

$(".reg-more").hover(function(){
	$(".show-reg").css("display","block");
},function(){
	// $(".show-reg").css("display","none");
});

$(".show-delet").hover(function(){
	$(".show-delet img").css({"width":"50px","height":"50px"});
},function(){
	$(".show-delet img").css({"width":"40px","height":"40px"});
});
$(".show-delet").click(function(){
	$(".show-wine").css("display","none");
	$(".show-reg").css("display","none");
});


// 留言板部分功能还未开发
// 


