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

function loadMbrsh(){
	fetch(cPath+'/myinfo/mbrshSetle.do')
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

