function getElementsByClassName(obj,className) {
	var aResult = [];
	var aArr = obj.getElementsByTagName('*');
	for (var i = 0,length = aArr.length; i < length; i++) {
		 var str = " " + aArr[i].className + " ";
		 if (str.indexOf(className) != -1) {
		 	aResult.push(aArr[i])
		 }
	}
	return aResult;
}

var container = document.getElementById('container');
var oUls = getElementsByClassName(container,'myUl')[0];
var oUl_li = oUls.getElementsByTagName('li');
var li_width = oUl_li[0].offsetWidth;
var li_length = oUl_li.length;
var li_index = 1;
setInterval(function() {
	oUls.style.left = -li_width*li_index + 'px';
	li_index++;
	if (li_index>=li_length) {
		li_index = 0;
	}
},1000);