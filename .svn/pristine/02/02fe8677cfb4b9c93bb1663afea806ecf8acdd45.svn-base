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

		let dataList = jsonObj.fxtrsUseList;
		let pagingHTML = jsonObj.pagingHTML;
		
		console.log("########",jsonObj);
		
		let trTags = null;
		let statusBadge = '';
		
		if(dataList.length > 0){
			$.each(dataList, function(index, fxtrsUse){
				trTags += `
					<tr>
						<td class="rnum">${fxtrsUse.rnum}</td>
						<td class="fxuseNo">
							<a href="#fxtrs-use-det" data-bs-toggle="modal">
								${fxtrsUse.fxuseNo}
							</a>
						</td>
						<td class="rmNo"> ${fxtrsUse.rmManageLedger.rmNo }</td>
						<td class="empNm">${fxtrsUse.rmManageLedger.emp.empNm }</td>
						<td class="fxudYmd">${fxtrsUse.fxuseYmd }</td>
					</tr>		
				`;
			});
		}else{
			trTags = `
				<tr>
					<td colspan="4">조건에 맞는 예약내역이 없음.</td>
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
