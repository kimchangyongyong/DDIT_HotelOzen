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

		let dataList = jsonObj.fxtrsList;
		let pagingHTML = jsonObj.pagingHTML;
		
		let trTags = null;
		let statusBadge = '';
		
		if(dataList.length > 0){
			$.each(dataList, function(index, fxtrs){
				
				if (fxtrs.fxPrfrn  == '높음'){
					statusBadge= `
						<span class="badge badge rounded-pill badge-subtle-danger">높음
			 				<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span>
						</span>
					`;
				}else if (fxtrs.fxPrfrn  == '보통'){
					statusBadge = `
						<span class="badge badge rounded-pill badge-subtle-primary">보통
							<span class="ms-1 fas fa-broom" data-fa-transform="shrink-2"></span>
						</span>
					`;
				}else if (fxtrs.fxPrfrn == '낮음'){
					statusBadge = `
						<span class="badge badge rounded-pill badge-subtle-success">낮음
							<span class="ms-1 fas fa-spinner" data-fa-transform="shrink-2"></span>
						</span>
					`;
				}
		
				trTags += `
					<tr>
						<td class="rnum">${fxtrs.rnum }</td>
						<td class="fxCd">${fxtrs.fxCd }</td>
						<td class="fxNm">${fxtrs.fxNm }</td>
						<td class="fxPresCnt">${fxtrs.fxPresCnt }</td>
						<td class="fxTtrtnCnt">${fxtrs.fxTtrtnCnt }</td>
						<td class="fxPrfrn text-center">${statusBadge}</td>
						<td class="align-middle white-space-nowrap">
		              		<div class="form-check mb-0">
			                	<input class="form-check-input" type="checkbox" id="checkbox-'${fxtrs.rnum }'" data-bulk-select-row="data-bulk-select-row" />
			                </div>
			            </td>
					</tr>		
				`;
			});
		}else{
			trTags = `
				<tr>
					<td colspan="7">조건에 맞는 예약내역이 없음.</td>
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
