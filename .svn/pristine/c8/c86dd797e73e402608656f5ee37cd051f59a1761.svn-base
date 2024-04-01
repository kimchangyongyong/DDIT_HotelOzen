<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<link href="${pageContext.request.contextPath}/resources/css/cstmr/comm/noticeList.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/resources/css/cstmr/pagingCss.css" rel="stylesheet">


<section>
	<div>
		<div class="notice-header mx-10">
			<h1 class="cstmr-title mx-5">NOTICE</h1>
			<p class="cstmr-content mx-5 mb-5">호텔 오젠의 새 소식을 알려드립니다.</p>
		</div>
		<div id="tableExample3" class="bg-light mx-10">
			<div class="row justify-content-end">
				<div class="col-sm-5 mb-3">
					<form class="search-form">
						<div class="input-group mt-3 float-end mx-3">
							<input class="form-control form-control-sm shadow-none search" type="search" placeholder="Search..." aria-label="search" />
							<div class="input-group-text bg-transparent"><span class="fa fa-search fs-5 text-700"></span></div>
						</div>
					</form>
				</div>
			</div>
			<div class="table-responsive scrollbar">
				<table class="table table-bordered table-striped mb-0 table table-hover">
					<thead class="bg-light notice-menu visually-hidden">
						<tr>
							<th class="notice-list_number" data-sort="number">번호</th>
							<th class="notice-list_title" data-sort="title">제목</th>
							<th class="notice-list_file" data-sort="file">첨부파일</th>
							<th class="notice-list_cnt" data-sort="cnt">조회수</th>
							<th class="notice-list_date" data-sort="date">날짜</th>
						</tr>
					</thead>
					
					<tbody class="list">
						<c:if test="${not empty memNoticeList}">
							<c:forEach items="${memNoticeList}" var="memNotice" varStatus="loop">
								<tr class="notice-row" data-notice-no="${memNotice.mberNtNo }">
									<td class="number">${memNoticeList.size() - loop.index +1}</td>
									<td class="title">
										<a href="<c:url value='/comm/notice/noticeView.do/${memNotice.mberNtNo } '/>">${memNotice.mberNtNm}</a>
									</td>
									<td class="cnt">${memNotice.mberNtCnt}</td>
									<td class="file"><span class="bi bi-link-45deg"></span></td>
									<td class="date">${memNotice.mberNtYmd}</td>
								</tr>
							</c:forEach>
						</c:if>
						<c:if test="${empty memNoticeList }">
						
						</c:if>
					</tbody>
				<div class="card-footer d-flex justify-content-center paging-div-height" id="pagingArea"></div>
				</table>
			</div>
		</div>
	</div>
</section>


<%-- <script src="<c:url value='/resources/js/app/cstmr/comm/notice/MberNotice.js'/>"></script> --%>
<script src="<c:url value='/resources/js/app/common/paging.js'/>"></script>