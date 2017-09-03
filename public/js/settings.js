define(['jquery','template','util','datepicker','language','uploadify','region'],function($,template,util){

	//设置导航菜单选中
	util.setMenu('/main/index');

	//调用后台接口获取所有的个人信息
	$.ajax({
		type:'get',
		url:'/api/teacher/profile',
		dataType:'json',
		success:function(data){

			//解析数据，渲染页面
			var html=template('settingTpl',data.result);
			$('#settingInfo').html(html);


			//处理头像上传  ==============有问题！！！！
			$('#upfile').uploadify({
				width:120,
				height:120,
				fileObjName:'tc_avatar',
				itemTemplate:'<span></span>',
				buttonText:'',
				swf:'/public/assets/uploadify/uploadify.swf',
				uploader:'/api/uploader/avatar',
				onUploadSuccess : function(f,data){  			        
			        // console.log(data);  //返回的是字符串
			        var data=JSON.parse(data);
			        //修改图片的URL地址
			        $('.preview img').attr('src',data.result.path);
			    }


			});



			//省市县三级联动
			$('#pcd').region({
				url:'/public/assets/jquery-region/region.json'
			});


		}
	});
});