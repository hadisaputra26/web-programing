// $(document).ready(function(){
// 	$("#p1").hover(function(){
// 		$(this).hide();
// 	});
// 	$("#p2").click(function(){
// 		$(this).hide();
// 	});
// 	$("#p3").dblclick(function(){
// 		$(this).hide();
// 	});
// 	$("#p4").mouseout(function(){
// 		$(this).hide();
// 	});
// 	$(document).keypress(function(){
// 		$("#p5").hide();
// 	});

// });
// =============================================

$(document).ready(function(){
	$(".satu").click(function(){
		// $(this).hide();
		// $(".dua").hide();
		$(".dua").slideToggle(1000);
	});
	$("#btn").click(function(){
		$(".h1").toggle();
	});
});