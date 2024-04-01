<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<link href="${pageContext.request.contextPath}/resources/css/emp/pagingCss.css" rel="stylesheet">

<div class="col mb-3">
	<div class="card h-100">
		<div class="card-header">
			<div class="row flex-between-end">
				<div class="col-auto align-self-center">
					<h5 class="mb-0" data-anchor="data-anchor" id="share-dataset">
						<font style="vertical-align: inherit;"> <font
							style="vertical-align: inherit;">현재 비품수량 조회 페이지</font>
						</font>
					</h5>
				</div>

				<div id="fxtrsListTable">
					<div>
						<form id="searchForm" action="<c:url value='/emp/pms/fxtrs/presList.do'/>">
							<input type="hidden" name="page" />
							<input type="hidden" name="searchWord" value="${simpleCondition.searchWord }"/>
							<input type="hidden" name="selectOneSearchWord" value="${simpleCondition.selectOneSearchWord }"/>
						</form>
						<div class="row justify-content-end g-0" data-pg-role="searchUI" data-pg-target="#searchForm">
							<div class="col-auto px-3">
								<div class="input-group" >
							        <select class="form-select form-select-sm mb-3"
							        		name="selectOneSearchWord" data-pg-init-value="${simpleCondition.selectOneSearchWord }">
										<option selected="" value="">==발주 요청 우선도==</option>
										<option value="높음">높음</option>
										<option value="보통">보통</option>
										<option value="낮음">낮음</option>
							        </select>
							      </div>
							</div>
							<div class="col-auto col-sm-5 mb-3">
						        <div class="input-group">
						          <input class="form-control form-control-sm shadow-none search" 
						          		type="search" placeholder="Search..." aria-label="search" 
						          		name ="searchWord" value="${simpleCondition.searchWord }"/>
						          <div class="input-group-text bg-transparent">
						          	<span class="fa fa-search fs-10 text-600" data-pg-role="searchBtn"></span>
						          </div>
						        </div>
							</div>
						</div>
					</div>

					<div class="row justify-content-end g-0">
						<a class="btn float-end border mb-2 col-auto" href="${pageContext.request.contextPath}/emp/pms/fxtrs/rqstListadd.do">
							<i class="bi bi-plus-lg"></i> 비품 요청서 작성
						</a>
					</div>
					
					<div class="table-responsive scrollbar">
						<table class="table table-bordered table-striped fs-10 mb-0 bg-light">
							<thead class="bg-200 border border-bottom">
								<tr>
									<th class="text-black dark__text-white text-900 sort" data-sort="rnum">번호</th>
									<th class="text-black dark__text-white text-900 sort" data-sort="fxCd">비품코드</th>
									<th class="text-black dark__text-white text-900 sort" data-sort="fxNm">비품명</th>
									<th class="text-black dark__text-white text-900 sort" data-sort="fxPresCnt">적정재고량</th>
 									<th class="text-black dark__text-white text-900 sort" data-sort="fxTtrtnCnt">현재고량</th>
									<th class="text-black dark__text-white text-900 sort" data-sort="fxPrfrn">발주 요청 우선도</th>
									<th></th>
								</tr>
							</thead>
							<tbody class="list" id="listBody">
								
							</tbody>
						</table>
					</div>
					
					<!-- 페이징 -->
					<div class="card-footer d-flex justify-content-center paging-div-height" id="pagingArea">
					
					</div>
				</div>

			</div>
			
		</div>
	</div>
</div>

<!-- 쿼리파라미터 안보이게  -->
<script>
	$( document ).ready(function() {
	
		history.replaceState({}, null, location.pathname);
	    
	});
</script>

<script src="<c:url value='/resources/js/app/emp/pms/fxtrs/presList.js'/>"></script>
<script src="<c:url value='/resources/js/app/common/paging.js'/>"></script>