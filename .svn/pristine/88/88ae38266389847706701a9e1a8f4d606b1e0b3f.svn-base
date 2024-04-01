/**
 * 
 */

document.addEventListener("DOMContentLoaded",()=>{
	empTel.addEventListener("keyup", function(e){
		convertPhoneNumber(e.target);
	});
});

let findIdForm = document.querySelector("#findIdForm");

findIdForm.addEventListener("submit", ()=>{
	event.preventDefault();
	let url = findIdForm.action;
	let method = findIdForm.method;
	
	let formData = new FormData(findIdForm);
	let jsonData = {};
	formData.forEach((value, key)=>{
		jsonData[key] = value;
	});
	console.log(jsonData)
	fetch(url, {
		method:method,
		headers:{
			"Content-Type":"application/json",
			"Accept":"application/json"
		},
		body:JSON.stringify(jsonData)
	}).then(resp =>{
		if(resp.ok){
			return resp.json();
		}else{
			throw new Error("오류발생", {cause:resp})
		}
	}).then(jsonObj =>{
		otpAuth.style.display = "block";
		console.log(jsonObj);
		otpCd.value = jsonObj;
	})
	
	return false;
});

let otpAuthForm = document.querySelector("#otpAuthForm");

otpAuthForm.addEventListener("submit", ()=>{
	event.preventDefault();
	let url = otpAuthForm.action;
	let method = otpAuthForm.method;
	
	let formData = new FormData(otpAuthForm);
	let jsonData = {};
	
	formData.forEach((value,key)=>{
		jsonData[key] = value;
	});
	console.log(jsonData)
	
	fetch(url, {
		method:method,
		headers:{
			"Content-Type":"application/json",
			"Accept":"application/json"
		},
		body:JSON.stringify(jsonData)
	}).then(resp=>{
		if(resp.ok){
			return resp.json();
		}else{
			throw new Error("오류발생", {cause:resp})			
		}
	}).then(jsonObj=>{
		console.log(jsonObj);
		if(jsonObj['message'].includes("error")){
			failDiv.style.display = "block";
		}else{
			$('#showIdModal').modal('show');
			showId.value = jsonObj['empNo']
		}
	});
	return false;
});

