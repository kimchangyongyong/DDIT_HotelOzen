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
							style="vertical-align: inherit;">비품 요청서 목록</font>
						</font>
					</h5>
				</div>

				<div id="fxtrsRqstListTable">
					<div>
						<form id="searchForm" action="<c:url value='/emp/pms/fxtrs/rqstList.do'/>">
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
						<table class="table table-bordered table-striped fs-10 mb-0 bg-light">
							<thead class="bg-200 border border-bottom">
								<tr>
									<th class="text-900 sort" data-sort="no">번호</th>
 									<th class="text-900 sort" data-sort="rqstNo">요청번호</th>
									<th class="text-900 sort" data-sort="empNm">요청자</th>
									<th class="text-900 sort" data-sort="rqstYmd">작성일</th>
									<th class="text-900 sort" data-sort="rqstAmnt">총가격</th>
									<th class="text-900 sort" data-sort="rqstSe">요청상태</th>
									<th class="text-900 sort" data-sort="empRqNm">요청결재자</th>
									<th class="text-900 sort" data-sort="rqstRqYmd">요쳥결재일</th>
									<th class="text-900 sort" data-sort="empPurchsNm">구매결재자</th>
									<th class="text-900 sort" data-sort="rqstPurchsYmd">구매결재일</th>
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
				
				<div class="modal fade" id="fxtrs-use-det" tabindex="-1"
					role="dialog" aria-labelledby="authentication-modal-label" aria-hidden="true">
					<div class="modal-dialog modal-lg mt-6" role="document">
						<div class="modal-content border-0">
							<div class="modal-header px-5 position-relative bg-secondary  ">
								<div class="position-relative z-1">
									<h4 class="mb-0 text-white" id="authentication-modal-label">비품 결재 신청 상세조회</h4>
								</div>
								<button class="btn-close position-absolute top-0 end-0 mt-2 me-2"
									data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body py-4 px-5">
								<form>
									<div class="row gx-2">
										<div class="mb-3 col-sm-4">
											<label class="form-label" for="model-rsvt-no">작성자</label> <input
												class="form-control" type="text" autocomplete="on"
												id="model-rsvt-no" />
										</div>
										<div class="mb-3 col-sm-4">
											<label class="form-label" for="model-rsvt-no">작성일</label> <input
												class="form-control" type="text" autocomplete="on"
												id="model-rsvt-no" />
										</div>
										<div class="mb-3 col-sm-4">
											<label class="form-label" for="model-rsvt-name">객실호수</label>
											<input class="form-control" type="text" autocomplete="on"
												id="model-rsvt-name" />
										</div>
									</div>
									<div class="row gx-2">
										<div class="mb-3 col-sm-3">
											<label class="form-label" for=model-rsvt-tel>비품코드</label>
											<input class="form-control" type="number" autocomplete="on"
												id="model-rsvt-tel" />
										</div>
										<div class="mb-3 col-sm-3">
											<label class="form-label" for=model-rsvt-tel>비품명</label>
											<input class="form-control" type="number" autocomplete="on"
												id="model-rsvt-tel" />
										</div>
										<div class="mb-3 col-sm-3">
											<label class="form-label" for="model-rsvt-date1">수량</label>
											<input class="form-control" type="number" autocomplete="on"
												id="model-rsvt-date1" />
										</div>
									</div>
									<div>
										<div class="mb-3 col-sm-4 float-end">
											<button class="btn btn-secondary d-block w-100 mt-3"
												type="submit" name="submit">확인</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				
				
			</div>
		</div>
	</div>
</div>

<script src="<c:url value='/resources/js/app/emp/pms/fxtrs/rqstList.js'/>"></script>
<script src="<c:url value='/resources/js/app/common/paging.js'/>"></script>