// function replace(text) {
//     var regex2 = /\[(.+?)\]/g;
//     if (text){
      
//     }
//   }
// let text="4、线下取票请确认影院支持，本券支持三千多家影院，支持的电影院名单如下：[https://dwz.cn/QSLooSRJ ]（微信内打开）";
//   replace(text)

str = "4、线下取票请确认影院支持，本券支持三千多家影院，支持的电影院名单如下：[https://dwz.cn/QSLooSRJ ]（微信内打开）"
reg = new RegExp('\\[(.+?)\\]',"g");
//reg = /\[em(.+?)\]/g
console.log(reg)
ss =  str .replace(reg,`<a href="$1">$1</a>`);
console.log(ss)