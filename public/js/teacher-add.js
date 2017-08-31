define(['jquery','template','util'],function($,template,util){

	//设置导航菜单选中
	util.setMenu('/teacher/list');

	//获取讲师的ID
	var tcid=util.qs('tc_id');

	//若ID存在，则编辑讲师
	if(tcid){
		//根据ID查询对应讲师的详细信息
		$.ajax({
			type:'get',
			url:'/api/teacher/edit',
			data:{tc_id:tcid},
			dataType:'json',
			success:function(data){
				data.result.operate="讲师编辑";
				data.result.btn="提 交";
				//分析数据，渲染讲师信息
				var html=template('teacherTpl',data.result);
			    $('#teacherInfo').html(html);
			    //绑定编辑的提交事件
			    submitForm('/api/teacher/update');
			}
		});
	}else {  //若ID不存在，则添加讲师
		
		var html=template('teacherTpl',{operate: "讲师添加",btn:"添 加",tc_gender:1});
		$('#teacherInfo').html(html);
		//绑定添加的提交事件
		submitForm('/api/teacher/add');
	}


	//实现表单提交功能
	function submitForm(url){
		$('#subBtn').click(function(){
			$.ajax({
				type:'post',
				url:url,
				data:$('#formId').serialize(),
				dataType:'json',
				success:function(data){
					if(data.code==200){
						location.href='/teacher/list';
					}
				}
			});
		});
		
	}
	
	


});