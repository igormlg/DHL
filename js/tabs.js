$(".tab_item").not(":first").hide();
$(".tabs-wrapper .tab").click(function() {
	$(".tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

