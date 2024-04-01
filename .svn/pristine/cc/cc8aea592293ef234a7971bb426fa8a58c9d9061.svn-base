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
							style="vertical-align: inherit;">차량 조회 페이지</font>
						</font>
					</h5>
				</div>
				
				<div id="parkingListTable">
					<div>
						<form id="searchForm" action="<c:url value='/emp/pms/parking/carList.do'/>">
							<input type="hidden" name="page" />
							<input type="hidden" name="searchWord" value="${simpleCondition.searchWord }"/>
						</form>
						<div class="row justify-content-end g-0" data-pg-role="searchUI" data-pg-target="#searchForm">
							<div class="col-auto col-sm-5 mb-3">
						        <div class="input-group">
						          <input class="form-control form-control-sm shadow-none search" 
						          		type="search" placeholder="Search..." aria-label="search" 
						          		name ="searchWord" value="${simpleCondition.searchWord }"/>
						          <div class="input-group-text bg-transparent">
						          	<span class="fa fa-search fs-10 text-600" data-pg-role="searchBtn"></span> <!-- 스타일 변경 -->
						          </div>
						        </div>
							</div>
						</div>
					</div>
					<div class="table-responsive scrollbar">
						<table
							class="table table-bordered table-striped fs-10 mb-0 bg-light">
							<thead class="bg-200 border border-bottom">
								<tr>
									<th class="text-900 sort" data-sort="no">번호</th>
									<th class="text-900 sort" data-sort="pkgNo">일련번호</th>
									<th class="text-900 sort" data-sort="pkgNo">차량번호</th>
									<th class="text-900 sort" data-sort="pkgEntvhclTime">입차시간</th>
									<th class="text-900 sort" data-sort="pkgLvvhclTime">출차시간</th>
									<th class="text-900 sort" data-sort="pkgStayYn">투숙 여부</th>
									<th class="text-900 sort" data-sort="pkgAmnt">가격</th>
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

<script src="<c:url value='/resources/js/app/emp/pms/parking/carList.js'/>"></script>
<script src="<c:url value='/resources/js/app/common/paging.js'/>"></script>
