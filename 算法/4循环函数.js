//给定一个编码字符，按编码规则进行解码，输出字符串。编码规则是`count[letter]`，将letter的内容count次输出，count是0或正整数，letter是区分大小写的纯字母，支持嵌套形式。

let s1 = '10[a]2[bc]'; //decodeString(s); // 返回'aaaaaaaaaabcbc'
// let s2 = '2[3[a]2[bc]]'; //decodeString(s); // 返回 'aaabcbcaaabcbc'

let s2 = '2[3[a]2[bc]]'



 function dealMore(s){
    var reg=/([0-9]*)\[([a-zA-Z]+)\]/;
    while(s.includes('[')){
        let arrInfo=reg.exec(s);
       let needString=arrInfo[0];
       s=s.replace(needString,dealSing(needString)).replace(/\s/g,'')
    }
    return s;

    function dealSing(s){
        var reg=/(\w*)\[(.+?)\]/g;
        var regData=reg.exec(s);
        return regData[2].repeat(Number(regData[1]));
     }
 }

 

console.log( dealMore(s2))
console.log( dealMore(s1))






//     // // var reg = new RegExp('', "g");
//     // let arr1 = [];
//     // let arr2=[]
//     // let data=reg.exec(s)
//     // console.log(data)

// }

// decodeString(s1);

