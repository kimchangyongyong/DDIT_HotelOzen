/**
 * 
 */

const cPath = document.body.dataset.contextPath;

let content = document.querySelector("#mypage-content");

let today = document.querySelector(".txtGuide")

let initialContent;
document.addEventListener("DOMContentLoaded", ()=>{
	initialContent = content.innerHTML;
})


today.innerHTML = new Date().toLocaleDateString();

function myPageHome(){
	content.innerHTML = initialContent;
}

function mileageList(){
	fetch(cPath+'/myinfo/mileageList.do')
		.then(resp=> resp.text())
		.then(data=>{
			content.innerHTML= data;
	});
}

function couponList(){
	fetch(cPath+'/myinfo/couponList.do')
		.then(resp=> resp.text())
		.then(data=>{
			content.innerHTML= data;
	});
	
}

function updateForm(){
	fetch(cPath+'/myinfo/updateInfo.do')
		.then(resp=> resp.text())
		.then(data=>{
			content.innerHTML= data;
	});
}

function mypwchange(){
	fetch(cPath+'/myinfo/mypwchange.do')
		.then(resp=> resp.text())
		.then(data=>{
			content.innerHTML= data;
	});
}

function secsn(){
	fetch(cPath+'/myinfo/secsn.do')
		.then(resp=> resp.text())
		.then(data=>{
			content.innerHTML= data;
	});
}

function mbrshSetle(){
	fetch(cPath+'/myinfo/mbrshSetle.do')
		.then(resp=> resp.text())
		.then(data=>{
			content.innerHTML= data;
	});
}


function scrapList(){
	fetch(cPath+'/myinfo/scrapList.do')
		.then(resp=> resp.text())
		.then(data=>{
			content.innerHTML= data;
	});	
}
