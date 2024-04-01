/**
 * 
 */
const baseURI = window.location.href;

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

		let dataList = jsonObj.refndList;
		let pagingHTML = jsonObj.pagingHTML;
		let trTags = null;
		
		if(dataList != null){
			$.each(dataList, function(index, sanctn){
				if (sanctn.prchsSe  == 'Y'){
					statusBadge= `
						<span class="badge badge rounded-pill badge-subtle-success"> 완료
			 				<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span>
						</span>
					`;
				}else if (sanctn.prchsSe  == 'N'){
					statusBadge = `
						<span class="badge badge rounded-pill badge-subtle-warning"> 대기
							<span class="ms-1 fas fa-broom" data-fa-transform="shrink-2"></span>
						</span>
					`;
				}

				trTags += `
				<tr>
					<td class="align-middle white-space-nowrap">
									<div class="form-check mb-0">
										<input class="form-check-input" type="checkbox"
											id="checkbox-${index}"
											data-bulk-select-row="data-bulk-select-row" /></div></td>
					<td class="align-middle">${sanctn.rnum}</th>
					<td class="align-middle">${sanctn.rqstNo}</td>
					<td class="align-middle">${sanctn.fxCd}</td>
					<td class="align-middle">${sanctn.prchsFxCnt}</td>
					<td class="align-middle">${sanctn.prchsFxCnt}</td>
					<td class="align-middle">${sanctn.prchsAmnt}</td>
					<td class="align-middle">${sanctn.prchsYmd}</td>
					<td class="align-middle">${statusBadge}</td>
				</tr>
			`;
		});
		}else{
			trTags = `
			<tr>
				<td colspan="10">조건에 맞는 비품 구매 목록이 없음.</td>
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