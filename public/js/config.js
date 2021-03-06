require.config({
	baseUrl:'/public/assets',
	paths:{
		jquery:'jquery/jquery.min',
		common:'../js/common',
		cookie:'jquery-cookie/jquery.cookie',
		form:'jquery-form/jquery.form',
		region:'jquery-region/jquery.region',
		template:'artTemplate/template-web',
		teacherlist:'../js/teacher-list',
		teacheradd:'../js/teacher-add',
		settings:'../js/settings',
		bootstrap:'bootstrap/js/bootstrap.min',
		ckeditor:'ckeditor/ckeditor',
		validate:'validate/jquery-validate.min',
		uploadify:'uploadify/jquery.uploadify.min',
		index:'../js/index',
		util:'../js/util',
		datepicker:'bootstrap-datepicker/js/bootstrap-datepicker.min',
		language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
		login:'../js/login'
	},
	shim:{ //把非标准模块转化为标准模块
		bootstrap:{
			deps:['jquery']
		},
		language:{
			deps:['jquery','datepicker']
		},
		validate:{
			deps:['jquery']
		},
		uploadify:{
			deps:['jquery']
		},
		ckeditor:{
			exports:'CKEDITOR'
		}
	}
});