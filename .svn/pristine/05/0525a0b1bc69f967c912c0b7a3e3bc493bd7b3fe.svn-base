/**
 * 
 */

const cPath = document.body.dataset.contextPath;

//필터 검색
$("select[name=selectOneSearchWord]").on("change", function(event){
	event.preventDefault();
	console.log(event);
	var selected = $("select[name=selectOneSearchWord]").val();
	console.log(selected);
	$("#selectBtn").click();
	return false;
	
})

//목록조회, 페이지 처리
$("#searchForm").on("submit", function(event){
	event.preventDefault();
	let form = this;
	let url = form.action;
	let method = form.method;
	let data = $(form).serialize();
	let $listBody = $('#listBody');
	let $pagingArea = $(pagingArea);
	$.ajax({
		url:url
		, method:method
		, data : data
		, dataType : "json"
		, success:function(jsonObj){
			$listBody.empty();
			$pagingArea.empty();
			
			console.log(jsonObj);
			let dataList = jsonObj.yrycList;
			let pagingHTML = jsonObj.pagingHTML;
			
			let trTags = null;
			
			if(dataList.length > 0){
				$.each(dataList, function(index, yryc){
					
//					trTags += `
//						<tr>
//							<td>${empNt.rnum }</td>
//							<td>${empNt.empNtClassification }</td>
//							<td><a href="${cPath}/emp/hrm/empnotice/${empNt.empNtNo}" onclick='fnShowOne()'>${empNt.empNtNm }</a></td>
//							<td><a href="${cPath}/emp/pbl/emply/view" onclick='fnShowOne()'>${empNt.hrmEmp.empNm }</a></td>
//							<td>${empNt.empNtYmd }</td>
//							<td>${att}</td>
//							<td>${empNt.empNtCnt }</td>
//						</tr>
//					`;

					trTags += `
						<tr>
							<td>${yryc.rnum }</td>
							<td>${yryc.empRqNo }</td>
							<td><a href="${cPath}">${yryc.rqstSe }</a></td>
							<td><a href="${cPath}/emp/pbl/emply/view">${yryc.rqstPurchsYmd}</a></td>
							<td>${yryc.anlLeaUseNo }</td>
							<td>${yryc.empNo}</td>
							<td>${yryc.anlLeaBgnYmd }</td>
							<td>${yryc.anlLeaEndYmd }</td>
							<td>${yryc.anlLeaRm }</td>
							<td>${yryc.anlLeaInfo }</td>
							<td>${yryc.anlLeaYmd }</td>
							<td>${yryc.empNm }</td>
							<td>${yryc.empRqNm }</td>
							<td>${yryc.anlLeaGiveYmd }</td>
							<td>${yryc.anlLeaGiveAmnt }</td>
							<td>${yryc.empAnnualLeave }</td>
						</tr>
					`;



				});
			}else{
				trTags = `
					<tr>
						<td colspan="7">조건에 맞는 공지가 없음.</td>
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
}).submit(); //이벤트를 한번 강제로 발생시켜 1페이지 요청





