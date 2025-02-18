$(document).ready(function () {
	let rmTypeCd = null;
	
	$(document).on('click', '.rsvtDtlLink', function (e) {
        e.preventDefault(); // 기본 링크 이벤트 방지

        var rsvtDtlNo = $(this).text(); // 클릭된 예약번호
        console.log("rsvtDtlNo", rsvtDtlNo);
		
		let url = "./QRRsvtList?rsvtDtlNo=" + rsvtDtlNo
		
		console.log(url)


        // AJAX 요청을 통해 컨트롤러에 해당 예약번호를 전달하고 데이터를 받아옵니다.
        $.ajax({
            type: 'POST',
            url: url,
			data: rsvtDtlNo,
            dataType: "json",
            success: function (jsonObj) {
				console.log(jsonObj.rsvtDtl);
				
				if(!(jsonObj.rsvtDtl.rsvtSe === '예약중')){
					
					alert("예약중인 객실이 아닙니다.")
					
				}else{
					
					$('#rsvtDtl-no').val(jsonObj.rsvtDtl.rsvtDtlNo);
					$('#cstmr-name').val(jsonObj.rsvtDtl.rsvt.cstmr.cstNm);
					$('#cstmr-hp').val(jsonObj.rsvtDtl.rsvt.cstmr.cstHp);
					
					$('#end-date').val(jsonObj.rsvtDtl.rsvt.rsvtCheckoutYmd);
					
					$('#total-cnt').val(jsonObj.rsvtDtl.rsvtDtlNmprCnt);
					$('#adults-cnt').val(jsonObj.rsvtDtl.rsvtDtlAdultCnt);
					$('#children-cnt').val(jsonObj.rsvtDtl.rsvtDtlChildCnt);
					
					rmTypeCd = jsonObj.rsvtDtl.rmtTypeCd
					
					$('#room-type').val(jsonObj.rsvtDtl.rmtTypeCd);
					$('#room-price').val(jsonObj.rsvtDtl.rsvtDtlAmnt);
					
					$('#cstmrNo').val(jsonObj.rsvtDtl.rsvt.cstmr.cstNo);
					
					$("input[type='radio']").each(function() {
					    if ($(this).attr('id') == rmTypeCd) {
					        $(this).prop('checked', true);
					    }		
		
						fetchRoomList(rmTypeCd);
					});
					
					$(document).ready(function(){
					    // 현재 날짜와 시간을 가져오는 함수
						getCurrentDateTime()
					
					    // input 요소의 value에 현재 날짜와 시간 설정
					    $('#start-datetime').val(getCurrentDateTime());
					});
				}
            },
            error: function () {
                alert('데이터를 불러오는 중 오류가 발생했습니다.');
            }
        });


	
		function getCurrentDateTime() {
		    const today = new Date();
		    const year = today.getFullYear();
		    let month = today.getMonth() + 1;
		    let day = today.getDate();
		    let hours = today.getHours();
		    let minutes = today.getMinutes();
		
		    // 월과 일, 시간, 분이 한 자리 숫자인 경우 앞에 0을 붙여줌
		    month = month < 10 ? '0' + month : month;
		    day = day < 10 ? '0' + day : day;
		    hours = hours < 10 ? '0' + hours : hours;
		    minutes = minutes < 10 ? '0' + minutes : minutes;
		
		    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
		}
		

		

	
		
	    $("input[name='listingPrivacy']").change(function(){
	        var roomTypeNm = $(this).attr('id');
	        console.log(roomTypeNm)
			
			let $roomListBody = $("#roomListBody");
			let url = './rsvtRoomList?roomTypeNm='+roomTypeNm;
			
			fetchRoomList(roomTypeNm);
			
			return false;
	    });
	
	    // 버튼 클릭 이벤트에 대한 처리
		$(document).on("click", ".roomNo", function(){
		    roomNumber = $(this).text();
		    $("#room-No").val(roomNumber);
	
			roomList.forEach(room => {
				if(room.rmNo == roomNumber){
					$("#room-type").val(room.rmtTypeCd);
				}
			});
		    
		});
    });

	$('#carYN').click(function() {
		
        var carNo = $('#carNo').val();

		let $roomListBody = $("#carYNBody");
		let url = './carYN?carNo='+carNo;

        $.ajax({
            type: 'POST',
            url: url, // 컨트롤러 URL 입력
			dataType: "json",
            success: function(jsonObj) {
			console.log(jsonObj)
			let carYN = jsonObj.carYN
                if (carYN == 1) {
                    $('#carYNBody').html('<p>차량이 존재합니다.</p>');
					$("#cstmr-carNo").val(carNo);
                } else {
                    $('#carYNBody').html('<p style="color:red;">차량이 존재하지 않습니다.</p>');

                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
});

function fetchRoomList(roomTypeNm) {
    let $roomListBody = $("#roomListBody");
    let url = './rsvtRoomList?roomTypeNm=' + roomTypeNm;
    $.ajax({
        type: 'GET',
        url: url,
        dataType: "json",
        success: function(jsonObj) {
            console.log("jsonObj:", jsonObj)
            $roomListBody.empty();
            roomList = jsonObj.rsvtRoomList.rsvtroomList;

            let roomGroups = {}; // 앞의 두 자리를 기준으로 그룹화된 객실들을 저장할 객체

            let headerTags = '';

            headerTags = `
                <div class="row">
                    <h6 class="col-sm-8">객실 호수</h6>
                    <h6 class="col-sm-4 rsvtRmCntTC">예약객실 수 :  ${jsonObj.rsvtYmdCnt} 개</h6>
                </div>
            `
            $roomListBody.append(headerTags);

            roomList.forEach(room => {
                let buttonTags = '';
                if (room.rmAvlblYn == 'Y') {
                    buttonTags = `<button class="btn btn-outline-secondary me-1 mb-1 roomNo" type="button">${room.rmNo}</button>`;
                } else {
                    buttonTags = `<button class="btn btn-secondary me-1 mb-1" disabled="disabled" type="button">${room.rmNo}</button>`;
                }

                let groupKey = room.rmNo.substring(0, (room.rmNo.length === 5 ? 3 : 2)); // 앞의 두 자리 또는 세 자리를 그룹화의 기준으로 사용

                if (!roomGroups[groupKey]) {
                    roomGroups[groupKey] = []; // 새 그룹을 생성
                }
                roomGroups[groupKey].push(buttonTags); // 해당 그룹에 버튼을 추가
            });

            let isFirstGroup = true;

            Object.keys(roomGroups).forEach(groupKey => {
                if (!isFirstGroup) {
                    $roomListBody.append(`<hr>`); // 첫 번째 그룹이 아닌 경우에만 <hr> 태그를 추가
                }

                roomGroups[groupKey].forEach(buttonTags => {
                    $roomListBody.append(buttonTags); // 해당 그룹의 버튼을 추가
                });

                isFirstGroup = false;
            });
        },
        error: function(jqXHR, txt, status) {
            console.log(txt, status, jqXHR);
        }
    });
}

//history.replaceState({}, null, location.pathname)