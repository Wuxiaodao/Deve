$(function(){var t,n=$("#login1"),o=$("#login2"),l=$("#login3"),i=$("#zhuce");function e(t){var n=$(t),o=$(t+"_mistake");return!/^[\u4e00-\u9fa5]{1,7}$|^[\dA-Za-z_]{1,14}$/.test(n.val())||/^[0-9]+$/.test(n.val())?(o.html("用户名仅支持中英文、数字和下划线，且不能为纯数字"),void n.select()):(o.html(""),1)}function c(t){var n=$(t),o=$(t+"_mistake");return/^[1][3,4,5,7,8][0-9]{9}$/.test(n.val())?(o.html(""),1):(o.html("手机号码格式不正确"),void n.select())}function u(t){var n=$(t),o=$(t+"_mistake");return/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test(n.val())?(o.html(""),1):(o.html("密码设置不符合要求"),void n.select())}$login5=$("#login5"),$login5.click(function(){countdown=10,t=setInterval(function(){$login5.attr("disabled",!0),0===countdown?(clearInterval(t),$login5.val("获取验证码"),$login5.removeAttr("disabled"),$("#login4_mistake").html("请求超时，请稍后再试")):$login5.val("发送中("+countdown+")s"),countdown--},1e3)}),i.click(function(){e("#login1")&&c("#login2")&&u("#login3")}),o.focusout(function(){c("#login2")||o.select()}),l.focusout(function(){u("#login3")||l.select()}),n.focusout(function(){e("#login1")||n.select()})});