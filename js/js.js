var len = $(".move").find("ul li").length
$(".move").find("ul li").on("click",function(){
		var ind = $(this).index()
		$(this).addClass("di").siblings().removeClass("di")
		$(".diwei").animate({"left":(-ind*300)+"px"})
})

	$(".nav li").hover(function(){		
		$(this).find("span").fadeIn()
	},function(){
		$(this).find("span").fadeOut()
		
	})
		

		setInterval(function(){

			$(".l_center ol").find("li").eq(1).find("img").attr("src","images/5.png")
		},2000)

		/*$(document).on("click","a",function(){
			var wen = $(this).data("titie")
			$(".gai").html(wen)
		})*/