<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<link href="${pageContext.request.contextPath}/resources/css/emp/pms/rsvt/rsvt.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/resources/css/emp/pagingCss.css" rel="stylesheet">


<div class="col mb-3">
	<div class="card h-100">
		<div class="card-header">
			<div class="row flex-between-end">
				<div class="col-auto align-self-center">
					<h5 class="mb-0" data-anchor="data-anchor" id="share-dataset">
						<font style="vertical-align: inherit;"> <font
							style="vertical-align: inherit;">예약 내역 조회</font>
						</font>
					</h5>
				</div>

				<!-- 테이블 -->
				<div id="rsvtListTable">
					<div>
						<form id="searchForm"
							action="<c:url value='/emp/pms/rsvt/rsvtList'/>">
							<input type="hidden" name="page" /> <input type="hidden"
								name="searchWord" value="${simpleCondition.searchWord }" /> <input
								type="hidden" name="selectOneSearchWord"
								value="${simpleCondition.selectOneSearchWord }" />
						</form>
						<div class="row justify-content-end g-0" data-pg-role="searchUI"
							data-pg-target="#searchForm">
							<div class="col-auto px-3">
								<div class="input-group">
									<select class="form-select form-select-sm mb-3"
										name="selectOneSearchWord"
										data-pg-init-value="${simpleCondition.selectOneSearchWord }">
										<option value>==예약 현황==</option>
										<option value="예약중">예약중</option>
										<option value="투숙중">투숙중</option>
										<option value="예약취소">예약취소</option>
										<option value="사용완료">사용완료</option>
									</select>
								</div>
							</div>
							<div class="col-auto col-sm-5 mb-3">
								<div class="input-group">
									<input class="form-control form-control-sm shadow-none search"
										type="search" placeholder="Search..." aria-label="search"
										name="searchWord" value="${simpleCondition.searchWord }" />
									<div class="input-group-text bg-transparent">
										<span class="fa fa-search fs-10 text-600"
											data-pg-role="searchBtn"></span>
										<!-- 스타일 변경 -->
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="row justify-content-end g-0">
						<a class="btn float-end border mb-2 col-auto"
							href="${pageContext.request.contextPath}/emp/pms/rsvt/rsvtadd.do">
							<i class="fas fa-plus"></i> 예약추가(워크인)
						</a> 
					</div>
					
					
					<div class="table-responsive scrollbar">
						<table
							class="table table-bordered table-striped fs-10 mb-0 bg-light">
							<thead class="bg-200 border border-bottom">
								<tr>
									<th class="text-900 sort" data-sort="rnum">번호</th>
									<th class="text-900 sort" data-sort="rsvtNo">예약번호</th>
									<th class="text-900 sort" data-sort="cstNm">고객이름</th>
									<th class="text-900 sort" data-sort="rsvtYmd">예약일</th>
									<th class="text-900 sort" data-sort="rsvtCheckinYmd">투숙일</th>
									<th class="text-900 sort" data-sort="rmtTypeCd">객실종류</th>
									<th class="text-900 sort" data-sort="rsvtRoomCnt">객실수</th>
									<th class="text-900 sort" data-sort="rsvtAdultCnt">성인수</th>
									<th class="text-900 sort" data-sort="rsvtChildCnt">아동수</th>
									<th class="text-900 sort" data-sort="rsvtSe">예약상태</th>
								</tr>
							</thead>
							<tbody class="list" id="listBody">

							</tbody>
						</table>
					</div>

					<!-- 페이징 -->
					<div
						class="card-footer d-flex justify-content-center paging-div-height"
						id="pagingArea"></div>
				</div>
			</div>
			<!-- 예약 상세 조회 -->
			<div class="modal fade" id="rsvtList-select" tabindex="-1"
				role="dialog" aria-labelledby="authentication-modal-label"
				aria-hidden="true">
				<div class="modal-dialog modal-lg mt-6" role="document">
					<div class="modal-content border-0">
						<div class="modal-header px-5 position-relative bg-secondary  ">
							<div class="position-relative z-1">
								<h4 class="mb-0 text-white" id="authentication-modal-label">예약
									상세내역 조회</h4>
							</div>
							<button class="btn-close position-absolute top-0 end-0 mt-2 me-2"
								data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body py-4 px-5">
							
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>

<script src="<c:url value='/resources/js/app/emp/pms/rsvt/rsvtList.js'/>"></script>
<script src="<c:url value='/resources/js/app/common/paging.js'/>"></script>

