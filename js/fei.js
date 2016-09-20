$(".kuai .de").on("click",function(){
	var ind = $(this).index()
		var wen = $(this).data("titie")

	
	$(".gai").html(wen)
	$("section").eq(ind).show().siblings().hide()
})

$(".nav li").hover(function(){		
		$(this).find("span").fadeIn()
	},function(){
		$(this).find("span").fadeOut()
		
	})

$("#hui").on("click",function(){
	history.go(-1)
})