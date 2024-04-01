<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<style>
.table-top {
	border-bottom: 2px solid #444444;
	border-collapse: collapse;
}
</style>
<div class="card mb-3">
	<div class="card-header">
		<div>
			<div class="col-auto align-self-center">
				<h5 data-anchor="data-anchor">환불내역</h5>
				<div id="refunListTable" data-list>
					<div class="row justify-content-end g-0">
						<div class="col-auto col-sm-5 mb-3">
							<form:form id="submitForm" method="post">
								<div class="input-group">
									<input class="form-control form-control-sm shadow-none search"
										type="search" placeholder="Search..." aria-label="search" />
									<div class="input-group-text bg-transparent">
										<span class="fa fa-search fs--1 text-600"></span>
									</div>
								</div>
							</form:form>
						</div>
					</div>
					<div class="table-responsive scrollbar">
						<table class="table fs--1 mb-0">
							<thead class="bg-200 text-900">
								<tr>
									<th class="sort" data-sort="refndNo">환불번호</th>
									<th class="sort" data-sort="refndCncdeYmd">환불신청일</th>
									<th class="sort" data-sort="setleYmd">결제일</th>
									<th class="sort" data-sort="setleAmnt">결제금액</th>
									<th class="sort" data-sort="refndAmnt">환불예정금액</th>
									<th class="sort" data-sort="refndSttus">환불상태</th>
									<th></th>
								</tr>
							</thead>
							<tbody class="list" id="listBody">
								<tr>
									<td class="refndNo"></td>
									<td class="refndCncdeYmd"></td>
									<td class="setleYmd"></td>
									<td class="setleAmnt"></td>
									<td class="refndAmnt"></td>
									<td class="refndSttus"></td>
									<td class="detail"></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="d-flex justify-content-center mt-3">
						<button class="btn btn-sm btn-falcon-default me-1" type="button"
							title="Previous" data-list-pagination="prev">
							<span class="fas fa-chevron-left"></span>
						</button>
						<ul class="pagination mb-0"></ul>
						<button class="btn btn-sm btn-falcon-default ms-1" type="button"
							title="Next" data-list-pagination="next">
							<span class="fas fa-chevron-right"> </span>
						</button>
					</div>
				</div>

			</div>
		</div>
	</div>
</div>
<div class="modal fade" id="staticBackdrop" tabindex="-1" role="dialog"
	aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document"
		style="max-width: 1000px">
		<div class="modal-content position-relative">
			<div class="position-absolute top-0 end-0 mt-2 me-2 z-index-1">
				<button
					class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base"
					data-bs-dismiss="modal" aria-label="Close"></button>
			</div>

			<div class="modal-body p-0">
				<div class="rounded-top-lg py-3 ps-4 pe-6 bg-light">
					<h4 class="mb-1" id="modalExampleDemoLabel"></h4>
				</div>
				<div class="p-4 pb-3">
					<form:form>
						<h5 class="mb-2">결제정보</h5>
						<table class="table table-bordered table-striped fs--1 mb-4">
							<thead class="bg-200 text-900">
								<tr>
									<th>결제번호</th>
									<th>결제일</th>
									<th>결제금액</th>
									<th>결제방식</th>
									<th>결제취소일</th>
								</tr>
							</thead>
							<tbody class="list" id="setleTable">

							</tbody>
						</table>
						<h5 class="mb-2">환불정보</h5>
						<table class="table table-bordered table-striped fs--1 mb-3">
							<thead class="bg-200 text-900">
								<tr>
									<th>회원명</th>
									<th>환불계좌</th>
									<th>환불은행</th>
									<th>환불금액</th>
									<th>환불일</th>
								</tr>
							</thead>
							<tbody class="list" id="refndTable">

							</tbody>
						</table>
					</form:form>
				</div>
			</div>
			<div class="modal-footer">
				<button class="btn btn-secondary" type="button"
					data-bs-dismiss="modal">Close</button>

			</div>
		</div>
	</div>
</div>
<script defer src="<c:url value='/resources/js/app/emp/pos/acnt/refund/refndList.js'/>"></script>