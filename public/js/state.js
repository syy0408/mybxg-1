define(['jquery'],function($){
	//监控ajax的状态
	$(document).ajaxStart(function(){
		$('.overlay').show();
	});

	$(document).ajaxStop(function(){

		//可以自己设置遮罩层时间
		// setTimeout(function(){
		// 	$('.overlay').hide();
		// },10);

		$('.overlay').hide();

		
	});
});