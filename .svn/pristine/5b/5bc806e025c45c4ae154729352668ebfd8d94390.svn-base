<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<link href="${pageContext.request.contextPath}/resources/css/cstmr/comm/noticeView.css" rel="stylesheet">

<section>
	<div>
		<div class="notice-header mx-10">
			<h1 class="cstmr-title mx-5">NOTICE</h1>
			<p class="cstmr-content mx-5 mb-5">호텔 오젠의 새 소식을 알려드립니다.</p>
			<hr class="hr-detail mx-5">
		</div>
	</div>
	<div class="row justify-content-center">
		<div class="col-md-8 detail-notice_menu">
			<div class="header-content-container d-flex align-items-center">
				<h1 class="detail-notice_title mx-10 py-3">${memNoti.mberNtNm }</h1>
				<span class="mx-4">작성일자&nbsp;&nbsp;${memNoti.mberNtYmd }</span>
				<span class="mx-4">조회수&nbsp;&nbsp;${memNoti.mberNtCnt }</span>
			</div>
			<hr class="hr-solid">
		</div>
		<div class="col-md-8 detail-notice_content mx-5">
			<p class="has-text-align-left mx-10">
				${memNoti.mberNtCn }
			</p>
			<hr class="hr-solid">
		</div>
		<div class="btn-layout d-flex mb-3 flex-row-reverse">
			<button class="custom-btn btn-11 mx-10" onclick="noticeList();">목록</button>
		</div>
	</div>
</section>

<script>
function noticeList() {
	location.href = "${pageContext.request.contextPath}/comm/notice/noticeList.do";
}
</script>