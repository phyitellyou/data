var u = navigator.userAgent;
var ua = navigator.userAgent.toLocaleLowerCase();
var QQbrw=u.indexOf('MQQBrowser') > -1;
var weiXin= u.indexOf('MicroMessenger') > -1;
var QQ= ua.match(/QQ/i) == "qq";
//alert(''+QQ+QQbrw+weiXin);
if(QQ||weiXin){
  alert('��ʹ���������');
  window.location.href="https://www.google.cn/chrome/";
}

