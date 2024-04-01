/**
 * 
 */
const cPath = document.body.dataset.contextPath;

let checkFlag = false;

document.addEventListener("DOMContentLoaded",()=>{
	cstHp.addEventListener("keyup", function(e){
		convertPhoneNumber(e.target);
	});
	mberHomeTel.addEventListener("keyup", function(e){
		convertPhoneNumber(e.target);
	});
});

function checkMberId(){
	let mberId = document.getElementById("mberId").value;
	
	let jsonData = {
		'mberId':mberId
	};
	fetch(cPath+'/auth/idvalid.do', {
		method:'POST',
		headers:{
			"Content-Type":"application/json",
			"Accept":"application/json"
		},
		body:JSON.stringify(jsonData)
	}).then(resp=>{
		if(resp.ok){
			return resp.json();
		}else{
			throw new Error("오류", {cause:resp})
		}
	}).then(jsonObj=>{
		let message = '';
		checkFlag = true;
		console.log(jsonObj)
		if(jsonObj['check']){
			message = '사용 가능한 아이디입니다.'
		}else{
			message = '중복된 아이디입니다.'
		}
		checkResult.innerHTML = message;
	})
}

mailAddrSelect.addEventListener("change", ()=>{
	if(mailAddrSelect.value != ""){
		 mailAddr.value = mailAddrSelect.value;
	}else{
		mailAddr.value = "";
	}
	
});

joinForm.addEventListener("submit", ()=>{
	if(!checkFlag){
		event.preventDefault();
		Swal.fire({
			title:"아이디 중복 확인을 진행해주세요"
			, icon:'error'
		})
		return false;
	}
	let mberPw = document.getElementById("mberPw").value;
	let mberPwCheck = document.getElementById("mberPwCheck").value;
	
	if(mberPw !== mberPwCheck){
		event.preventDefault();
		pwCheckField.innerHTML = "비밀번호와 새 비밀번호를 동일하게 입력해주세요.";
		return false;
	}
	
	let cstGen = document.getElementById("cstGen").value;
	
	if(cstGen == ""){
		event.preventDefault();
		genCheckField.innerHTML = "성별을 선택해주세요";
		return false;
	}
	
});

function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            if(data.userSelectedType === 'R'){
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
            }
            document.getElementById('postcode').value = data.zonecode;
            document.getElementById("mberAddr").value = addr;
            document.getElementById("mberDetailAddress").focus();
        }
    }).open();
}