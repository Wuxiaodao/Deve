$(function() {

    var $login1=$('#login1'),
    $login2=$('#login2'),
    $login3=$('#login3'),
    $zhuce=$('#zhuce');
    $login5=$('#login5')
    var login;
    //验证码
    $login5.click(function(){
        countdown=10;
        login=setInterval(function(){
            $login5.attr("disabled",true);
            if(countdown === 0){
                clearInterval(login);
                $login5.val('获取验证码');
                $login5.removeAttr('disabled');
                $('#login4_mistake').html('请求超时，请稍后再试')
            }
            else{
                $login5.val('发送中('+countdown+')s');
            }
            countdown--;
        },1000);
    })
    $zhuce.click(function(){
        if( !check1('#login1') || !check2('#login2') || !check3('#login3'))
        return;
    })
    $login2.focusout(function(){
        if(!check2('#login2')) $login2.select();
    })
    $login3.focusout(function(){
        if(!check3('#login3')) $login3.select();
    })
    $login1.focusout(function(){
        if(!check1('#login1')) $login1.select();
    });
    //用户名验证
    function check1(e){
        var $data=$(e),
        $msg=$(e+'_mistake');
        if(!/^[\u4e00-\u9fa5]{1,7}$|^[\dA-Za-z_]{1,14}$/.test($data.val())){
            $msg.html('用户名仅支持中英文、数字和下划线，且不能为纯数字');
            $data.select();
            return false;
        }
        if(/^[0-9]+$/.test($data.val())){
            $msg.html('用户名仅支持中英文、数字和下划线，且不能为纯数字');
            $data.select();
            return false;
        }
        $msg.html('');
        return true;
    }
    //手机验证
    function check2(e){
        var $data=$(e),
        $msg=$(e+'_mistake');
        if(!/^[1][3,4,5,7,8][0-9]{9}$/.test($data.val())){
            $msg.html('手机号码格式不正确');
            $data.select();
            return false;
        }
        $msg.html('');
        return true;
    }
    //密码验证
    function check3(e){
        var $data=$(e),
        $msg=$(e+'_mistake');
        if(!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test($data.val())){
            $msg.html('密码设置不符合要求');
            $data.select();
            return false;
        }
        $msg.html('');
        return true;
    }

})
