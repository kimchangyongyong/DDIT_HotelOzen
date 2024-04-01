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

		let dataList = jsonObj.roomList;
		let pagingHTML = jsonObj.pagingHTML;
		
		let trTags = null;
		let statusBadge = '';
		
		if(dataList.length > 0){
			$.each(dataList, function(index, room){
				
				if (room.rmClean  == '완료'){
					statusBadge= `
						<span class="badge badge rounded-pill badge-subtle-success"> 완료
			 				<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span>
						</span>
					`;
				}else if (room.rmClean  == '청소중'){
					statusBadge = `
						<span class="badge badge rounded-pill badge-subtle-warning"> 청소중
							<span class="ms-1 fas fa-broom" data-fa-transform="shrink-2"></span>
						</span>
					`;
				}else if (room.rmClean == '청소요청'){
					statusBadge = `
						<span class="badge badge rounded-pill badge-subtle-danger"> 청소요청
							<span class="ms-1 fas fa-spinner" data-fa-transform="shrink-2"></span>
						</span>
					`;
				}
		
				trTags += `
					<tr>
						<td class="rnum">${room.rnum }</td>
						<td class="rmNo">
							<a href="#roomList-select" data-bs-toggle="modal">${room.rmNo }</a></td>
						<td class="rmtTypeCd">${room.rmtTypeCd }</td>
						<td class="rmAvlblDetails">${room.rmAvlblDetails }</td>
						<td class="rmClean text-center">${statusBadge}</td>
					</tr>		
				`;
			});
		}else{
			trTags = `
				<tr>
					<td colspan="6">조건에 맞는 예약내역이 없음.</td>
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
