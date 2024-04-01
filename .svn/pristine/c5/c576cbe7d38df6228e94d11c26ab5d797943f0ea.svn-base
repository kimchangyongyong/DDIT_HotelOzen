<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<link href="${pageContext.request.contextPath}/resources/css/emp/pagingCss.css" rel="stylesheet">

<div class="col mb-3">
	<div class="card h-100">
		<div class="card-header">
			<div class="row flex-between-end">
				<div class="col-auto align-self-center">
					<h5 class="mb-0" data-anchor="data-anchor" id="share-dataset">
						<font style="vertical-align: inherit;"> <font
							style="vertical-align: inherit;">체크아웃 예정자 명단 페이지</font>
						</font>
					</h5>
				</div>

				<div id="chkinListTable">
					<div>
						<form id="searchForm" action="<c:url value='/emp/pms/stay/checkoutList.do'/>">
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
						          	<span class="fa fa-search fs-10 text-600" data-pg-role="searchBtn"></span>
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
									<th class="text-900 sort" data-sort="rnum">번호</th>
									<th class="text-900 sort" data-sort="rsvtNo">체크인번호</th>
									<th class="text-900 sort" data-sort="cstNm">고객이름</th>
									<th class="text-900 sort" data-sort="rsvtYmd">체크인 시간</th>
									<th class="text-900 sort" data-sort="rsvtCheckinYmd">퇴실일</th>
									<th class="text-900 sort" data-sort="rmtTypeCd">객실 호수</th>
									<th class="text-900 sort" data-sort="rmtTypeCd">정산 가격</th>
									<th class="text-900 sort" data-sort="rmtTypeCd">차량 번호</th>
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
			
			<div class="modal fade" id="chkoutList-select" tabindex="-1"
				role="dialog" aria-labelledby="authentication-modal-label" aria-hidden="true">
				<div class="modal-dialog modal-lg mt-6" role="document">
					<div class="modal-content border-0">
						<div class="modal-header px-5 position-relative bg-secondary  ">
							<div class="position-relative z-1">
								<h4 class="mb-0 text-white" id="authentication-modal-label">체크아웃 상세 조회</h4>
							</div>
							<button class="btn-close position-absolute top-0 end-0 mt-2 me-2"
								data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body py-4 px-5">
							<form>
								<label class="form-label" for="model-rsvt-no">객실번호</label> 
								<input class="form-control" type="text" autocomplete="on"
									id="model-rsvt-no" />
									
								<label class="form-label" for="model-rsvt-name">객실타입</label>
								<input class="form-control" type="text" autocomplete="on"
									id="model-rsvt-name" />
									
								<label class="form-label" for="model-rsvt-date1">객실상태</label>
								<input class="form-control" type="text" autocomplete="on"
									id="model-rsvt-date1" />
									
								<label class="form-label" for="model-rsvt-date2">청소여부</label>
								<input class="form-control" type="text" autocomplete="on"
									id="model-rsvt-date2" />
									
								<div class="mb-3 col-sm-4 mx-2 float-end">
									<button class="btn btn-secondary d-block w-100 mt-3"
										type="submit" name="submit">확인</button>
								</div>
								<div class="mb-3 col-sm-4 float-end">
									<button class="btn btn-secondary d-block w-100 mt-3"
										type="submit" name="submit">청소완료</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</div>

<script src="<c:url value='/resources/js/app/emp/pms/stay/checkOutList.js'/>"></script>
<script src="<c:url value='/resources/js/app/common/paging.js'/>"></script>