var u = navigator.userAgent;
var ua = navigator.userAgent.toLocaleLowerCase();
var QQbrw=u.indexOf('MQQBrowser') > -1;
var weiXin= u.indexOf('MicroMessenger') > -1;
var QQ= ua.match(/QQ/i) == "qq";
//alert(''+QQ+QQbrw+weiXin);
if(QQ||weiXin){
  alert('请使用浏览器打开');
  window.location.href="https://www.google.cn/chrome/";
}

