$(searchForm).on("submit", function(event){
	event.preventDefault();
	let form = this;
	let url = form.action;
	let method = form.method;
	let data = $(form).serialize();
	let $listBody = $(listBody);
	let $pagingArea = $(pagingArea);
	
	$.ajax({
		url : url
		, method : method
		, data : data
		, dataType : "json"
		, success: function(jsonObj) {
            $listBody.empty();
			$pagingArea.empty();

		let dataList = jsonObj.chkinList;
		let pagingHTML = jsonObj.pagingHTML;
		
		let trTags = null;
		
		if(dataList.length > 0){
			$.each(dataList, function(index, chkin){
				trTags += `
					<tr>
						<td class="rnum">${chkin.rnum }</td>
						<td class="rsvtNo">
							<a href="#rsvtList-select" data-bs-toggle="modal">${chkin.rsvtNo }</a>
						</td>
						<td class="cstNm">${chkin.cstmr.cstNm }</td>
						<td class="rsvtYmd">${chkin.rsvtYmd }</td>
						<td class="rsvtCheckinYmd">${chkin.rsvtCheckinYmd }</td>
						<td class="rmtTypeCd">${chkin.rsvtDetails[0].rmtTypeCd }</td>
						<td class="rsvtRoomCnt">${chkin.rsvtRoomCnt }</td>
						<td class="rsvtAdultCnt">${chkin.rsvtAdultCnt }</td>
						<td class="rsvtChildCnt">${chkin.rsvtChildCnt }</td>
					</tr>	
				`;
			});
		}else{
			trTags = `
				<tr>
					<td colspan="9">조건에 맞는 예약내역이 없음.</td>
				</tr>
			`;
		}
		
		$listBody.append(trTags);
		$pagingArea.append(pagingHTML);
		
		}, error : function(jqXHR, txt, status){
			console.log(txt, status, jqXHR);
		}
	}).done(()=>{
		form.page.value="";
	});
	return false;
}).submit();
