const axios=require('axios');
const md5=require('./md5');
async function translateText(value){
    
var appid = process.env.API_ID;
var key = process.env.API_KEY;
var salt = (new Date).getTime();
var query =value;
// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
var from = 'en';
var to = 'zh';
var str1 = appid + query + salt +key;
var sign = md5.MD5(str1);
try{
    let data = await axios({
        method:'get',
        url:'http://api.fanyi.baidu.com/api/trans/vip/translate',
        params:{
            q: query,
            appid: appid,
            salt: salt,
            from: from,
            to: to,
            sign: sign
        }
    });
   return data;
}catch(err){
return err;
}


}
module.exports={translateText};
