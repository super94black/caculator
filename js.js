var num = 0,//存储前一个值
	result = 0,//中间变量
	numshow = "0";//获取每个状态时候的value
var quit = 0;//避免重复输入
var	operate = 0;//0是表示操作数可以输入 1是已经输入算符
var	caculal= 0;//计算选择的标志
function on(){	
	var str = String(document.onoff.on.value);
	if(str != "") {
		document.onoff.on.value ="";//关机
	}
	else {
		document.onoff.on.value ="0";//开机
		num = 0;
		result = 0;
		numshow = 0;
		quit = 0;
		operate = 0;
		caculator = 0;
	}
}

function commond(num) {
	
	var str = String(document.caculator.numscreen.value);
	str = (str != 0) ? ((operate ==0 ) ? str: "") : "";
	str = str + String(num);//输入一位数以上的时候如35 2756 不让他们相加 而是保存他们
	
	document.caculator.numscreen.value = str;
	operate = 0;
	quit = 0;
}
function doublezero() {
	
	var str = String(document.caculator.numscreen.value);
	str = (str !=0) ?((operate == 0) ? str + "00" :"0") :"0";
	document.caculator.numscreen.value = str;//为下一个数的输入做准备value归零
	str.value = String(str);
	operate = 0;
}
function pointer() {
	var str = String(document.caculator.numscreen.value);
	str = (str != 0) ? ((operate == 0) ? str : "0") : "0";
	for(j = 0; j <=str.length; j++) {//从0开始取出每一个字符串比较是否已经输入小数点
		if(str.substr(j,1) == ".")
			{
				return false;
			}
	}
	str = str + ".";
	document.caculator.numscreen.value = str;
	operate = 0;
}
function del() {
	var str = String(document.caculator.numscreen.value);
	str = (str != 0) ? str: "0";
	if(str.length ==1 && str == "0" ){
		
		document.caculator.numscreen.value = str;
}
	else if(str.length ==1 && str != "0"){
		
		document.caculator.numscreen.value = 0;
	}
		else{
			str = str.substr(0,str.length - 1);
			document.caculator.numscreen.value = str;
		}
	operate = 0;
}
function clearscreen() {//有些变量要归零 记得补充
	operate = 0;
	quit = 0;
	num = 0;
	numshow = 0;
	result = 0;
	document.caculator.numscreen.value = "0";
}
function plus() {
	caculator();
	operate = 1;
	caculal = 1;
}
function minus() {
	caculator();
	operate = 1;
	caculal = 2;
}
function times() {
	caculator();
	operate = 1;
	caculal = 3;
}
function divdive() {
	caculator();
	operate = 1;
	caculal = 4;
}
function persent() {
	caculator();
	operate = 1;
	caculal = 5;
}
function equal() {
	caculator();
	operate = 1;
    num = 0;
    result = 0;
    numshow = "0";
	// body...
}
function clearnote() { //清空提示 
        document.getElementById("note").innerText = "";
    }

function caculator() {
	numshow = Number(document.caculator.numscreen.value);
	if(num != 0 && quit != 1) {//判断上一个是否有数子和是不是有重复输入
		switch(caculal) {
			case 1 :
				result = num + numshow;
				break;
			case 2 :
				result = num - numshow;
				break;
			case 3 :
				result = num * numshow;
				break;
			case 4 :
				if(numshow != 0) {
					result = num / numshow;
					
				}
				else {
					document.getElementById("status").innertext="被除数不能为零";
					
				}
				setTimeout(clearnote, 4000);
				break;
			case 5:
				result = num % numshow;
				break;
		}
		quit = 1;
	}
	else {
		result = numshow;
	}
	numshow = String(result);
	document.caculator.numscreen.value = numshow;
	num = result;//存储上一个数字

}