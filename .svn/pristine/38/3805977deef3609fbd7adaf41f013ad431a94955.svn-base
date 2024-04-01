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

		let dataList = jsonObj.chkoutList;
		let pagingHTML = jsonObj.pagingHTML;
		
		console.log(dataList)
		
		let trTags = null;
		
		if(dataList.length > 0){
			$.each(dataList, function(index, chkout){
				trTags += `
					<tr>
						<td class="rnum">${chkout.rnum }</td>
						<td class="rsvtNo">
							<a href="#chkoutList-select" data-bs-toggle="modal">${chkout.chkinNo }</a>
						</td>
						<td class="cstNm">${chkout.chkin.cstmr.cstNm }</td>
						<td class="rsvtYmd">${chkout.chkin.ciDt }</td>
						<td class="rsvtCheckinYmd">${chkout.chkin.ciCowillYmd }</td>
						<td class="rmtTypeCd">${chkout.chkin.rmNo }</td>
						<td class="rsvtRoomCnt">${chkout.coExcclcAmnt }</td>
						<td class="rsvtAdultCnt">${chkout.chkin.ciCarNo }</td>
					</tr>	
				`;
			});
		}else{
			trTags = `
				<tr>
					<td colspan="8">조건에 맞는 예약내역이 없음.</td>
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
