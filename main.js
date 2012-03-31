var Iconv = require('iconv').Iconv;

exports.encodeGBKURI = function(uri){
    var iconv = new Iconv('UTF-8','GBK');
    var from = iconv.convert(uri);
    var rt='';
    for(var i=0;i<from.length;i++){
        var c = from.readUInt8(i);
        if(c>127){
            i++;
            var c2 = from.readUInt8(i);
            rt+='%'+c.toString(16)+'%'+c2.toString(16);
        }else{
            rt+=String.fromCharCode(c);
        }
    }
    return rt;
}


