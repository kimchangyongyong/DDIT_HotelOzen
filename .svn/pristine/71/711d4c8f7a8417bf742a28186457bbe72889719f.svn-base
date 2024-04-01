$(document).ready(function() {
	
	let rqstEmpNo = $('.rqstEmpNo').attr('id');
	let realEmpNo = $('.empNo').val();
	let rqstSe = $('.rqstSe').text();
	
	let $approvalBody = $("#approvalBody");
	let tags;
	
	console.log("rqstEmpNo",rqstEmpNo)
	console.log("realEmpNo",realEmpNo)
	console.log("rqstSe",rqstSe)
	
	if(rqstEmpNo != realEmpNo){
		console.log("다름");
		tags = '';
	}else if(rqstSe == '요청대기'){
		console.log("같음");
		tags = `
		<div class="text-end">
			<a class="btn btn-outline-danger me-1 mb-1" type="button" onclick="refusalClick()">거부</a>
			<a class="btn btn-outline-info me-1 mb-1" type="button" onclick="approvalClick()">승인</a>
		</div>
		`;	
	}

	$approvalBody.append(tags);	
	
	var currentDate = new Date();
    var formattedDate = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + currentDate.getDate().toString().padStart(2, '0');
    $('.ymd').text(formattedDate);
	
    var totalAmnt = 0;
    $('.fxtrsAmnt').each(function() {
        totalAmnt += parseInt($(this).text());
    });
    $('.fxtrsTotalAmnt').text(totalAmnt);
});

function approvalClick(){
	
	console.log("승인 누름");
	
	let fxRqstNo = $('.rqstNo').text();
	console.log("fxRqstNo",fxRqstNo);
		
	let url = "/hotelOzen/emp/pms/fxtrs/fxtrsUseApproval?fxRqstNo="+fxRqstNo;
	
	$.ajax({
		url: url,
		type: "POST",
		dataType : "json",
	    success: function(response) {
	        // 요청이 성공한 경우의 처리
	    	console.log("요청이 성공적으로 처리되었습니다.");
	    	console.log(response); // 서버에서 받은 응답 확인
 			window.location.href = response;
	  	},
	  	error: function(xhr, status, error) {
	     	 // 요청이 실패한 경우의 처리
	      	console.error("요청을 처리하는 도중 오류가 발생했습니다.");
	      	console.error(error); // 발생한 오류 출력
	  	}
	});
};

function refusalClick(){
	
	console.log("거부 누름");
	
	let fxRqstNo = $('.rqstNo').text();
	console.log("fxRqstNo",fxRqstNo);
		
	let url = "/hotelOzen/emp/pms/fxtrs/fxtrsUseRefusal?fxRqstNo="+fxRqstNo;
	
	$.ajax({
		url: url,
		type: "POST",
		dataType : "json",
	    success: function(response) {
	        // 요청이 성공한 경우의 처리
	    	console.log("요청이 성공적으로 처리되었습니다.");
	    	console.log(response); // 서버에서 받은 응답 확인
 			window.location.href = response;
	  	},
	  	error: function(xhr, status, error) {
	     	 // 요청이 실패한 경우의 처리
	      	console.error("요청을 처리하는 도중 오류가 발생했습니다.");
	      	console.error(error); // 발생한 오류 출력
	  	}
	});
};