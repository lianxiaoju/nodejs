//����fsģ��
var fs=require('fs');
//���ö�ȡ�ļ�����
fs.readFile('content.txt',function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});
fs.readFile('content.txt','UTF-8',function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});

try{
	var data=fs.readFileSync('content.txt','UTF-8');
	console.log(data+"ͬ��ʽ��ȡ");
}catch(e){
	console.log(e)
}