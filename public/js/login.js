define(['jquery','cookie'],function($){
	//实现登录功能
	$('#loginBtn').click(function(){
        
        $.ajax({
            type:'post',
            url:'/api/login',
            data:$('#formLogin').serialize(),
            dataType:'json',
            success:function(data){
                
                if(data.code==200){
                    //存储用户信息到cookie
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    //登录成功，跳转到index页面
                    location.href='/main/index';
                    
                }else {
                    console.log(111);
                    //alert('用户名或密码错误');
                }
            }
        });

        return false;
    });

});