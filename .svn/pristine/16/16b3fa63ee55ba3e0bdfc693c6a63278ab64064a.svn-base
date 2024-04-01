<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags/form"  prefix="form"%>
<%@taglib uri="http://www.springframework.org/tags"  prefix="spring"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<link href="${pageContext.request.contextPath}/resources/css/emp/hrm/pay/payList.css" rel="stylesheet">


<style>

</style>



<div class="card">
<div class="card-header">
<h2>급여관리</h2>
</div>
<div class="card">
<div class="row-auto">
<div class="col-auto">
<br>
<h5 class="text-center">2월 급여 지급 현황</h5>
<table class="table table-bordered  fs--1 mb-0">
<tr>
<th>귀속연월</th>
<th>산정기간</th>
<th>지급일</th>
<th>지급총액</th>
<th>공제총액</th>
<th>실지급액</th>
<th>총 직원수</th>
</tr>
<tr>
<td>2024/01</td>
<td>2024/01/02 ~ 2024/01/31</td>
<td>2024/02/09</td>
<td class="money" id="total-give">-</td>
<td class="money" id="total-deduct">-</td>
<td class="money" id="net">-</td>
<td id='empCnt'>-</td>
</tr>
<tr>

<button class="btn btn-secondary me-1" type="button" data-bs-toggle="modal" data-bs-target="#autoSalaryGive">급여자동계산</button>
<button class="btn btn-danger" id="confirmedSalaryBtn" type="button" data-pay-url='<c:url value="/emp/hrm/pay/payslip/pdf" />' data-pay-method="get">급여확정</button>
</tr>
</table>

</div>
</div>
</div>

<div class="card-body"> 
<div id="tableExample3" data-list>
  <div class="row justify-content-end g-0">
    <div class="col-auto col-sm-5 mb-3">
      <form>
      <div class="d-flex">
      <select id="myname" class="form-select form-select-sm" aria-label="Bulk actions" data-list-filter="data-list-filter">
                            <option  selected="" value="">전체</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            
                          </select>
      </div>
      <div class="d-flex">
      <select id="myage" class="form-select form-select-sm" aria-label="Bulk actions">
                            <option  selected="" value="">전체</option>
                            <option value="12월">12월</option>
                            <option value="1월">1월</option>
                         
                          </select>
      </div>
      
      
      <div class="input-group">
          <input class="form-control form-control-sm shadow-none search" type="search" placeholder="Search..." aria-label="search" />
          <div class="input-group-text bg-transparent"><span class="fa fa-search fs--1 text-600"></span></div>
        </div>
      
      </form>
    </div>
  </div>
  
  
			<div>
				<h4>전송 UI Hidden form</h4>
						    <form id="searchForm" action="${pageContext.request.contextPath }/emp/hrm/pay/payslip">
							   		<input type="text" name="page" placeholder="page"/>
			    					<input name="searchType" placeholder="searchType"/>
									<input name="searchWord" placeholder="searchWord"/>
									<input id="selectOneSearchWord" name="selectOneSearchWord" placeholder="selectOneSearchWord"/>
						    </form>
							<div class="row justify-content-end g-0" data-pg-role="searchUI" data-pg-target="#searchForm" id="searchUI">

								<div  class="col-auto px-3">
									<select name="selectOneSearchWord" data-pg-init-value="${simpleCondition.selectOneSearchWord}" class="form-select form-select-sm mb-3">
										<option selected="" value="">귀속연월</option>
										<option value="2024/02">2024년 02월</option>
										<option value="2024/01">2024년 01월</option>
									</select>
								</div>				
								<div class="col-auto px-3">
									<select name="searchType" class="form-select form-select-sm mb-3">
										<option value="" label="전체" />
										<option value="empNo" label="사번" />
										<option value="empNm" label="성명" />
										<option value="empDept" label="부서" />
									</select>
								</div>
								<div class="col-auto col-sm-5 mb-3">
									<div class="input-group">
										<input name="searchWord" class="form-control form-control-sm shadow-none search" type="search" placeholder="Search..." aria-label="search" />
										<div class="input-group-text bg-transparent">
								          	<span class="fa fa-search fs-10 text-600" id="selectBtn" data-pg-role="searchBtn"></span>
								        </div>
									</div>
<!-- 									<input name="searchWord" class="form-control"/> -->
								</div>
							</div>
			
			</div>  
  
  
<!-- 모달 -->
<div class="modal fade" id="autoSalaryGive" data-keyboard="false" tabindex="-1" aria-labelledby="scrollinglongcontentLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg mt-6">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="scrollinglongcontentLabel">2월 근무 기록</h5>
        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body modal-dialog modal-dialog-scrollable mt-0">
        <p>
           <table class="autoSalaryGive">
			  <tr class="autoSalaryGive">
			    <th class="autoSalaryGive">Column 1 Heading</th>
			    <th class="autoSalaryGive">Column 2 Heading</th>
			  </tr>
			  <tr class="autoSalaryGive">
			    <td class="autoSalaryGive">Row 1: Col 1</td>
			    <td class="autoSalaryGive">Row 1: Col 2</td>
			  </tr>
			</table>
        </p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
        <button class="btn btn-info" type="button" data-bs-dismiss="modal">근무기록수정</button>
        <button id="salaryBtn" class="btn btn-primary" type="button" data-pay-url='<c:url value="/emp/hrm/pay/payslip"/>' data-pay-method="get" >급여계산</button>
      </div>
    </div>
  </div>
</div>
  
  
  
  <div class="table-responsive scrollbar">
    <table class="table table-bordered table-striped fs--1 mb-0">
      <thead class="bg-200 text-900">
        <tr>
          <th class="" data-sort="empNo">사번</th>
          <th class="" data-sort="empNm">이름</th>
          <th class="" data-sort="empJncmpYmd">입사일</th>
          <th class="" data-sort="empDept">부서</th>
          <th class="" data-sort="give">지급액</th>
          <th class="" data-sort="dcc">공제액</th>
          <th class="" data-sort="realgive">실지급액</th>
          <th class="" data-sort="detail">상세보기</th>
        </tr>
      </thead>
      <tbody id="listBody">
      <h6 id="beforeSelectPay">(현재 조회된 급여 기록이 없습니다.)</h6>
      </tbody>
    </table>
    <div class="card-footer d-flex justify-content-center paging-div-height" id="pagingArea"></div>
  </div>
<!--   <div class="d-flex justify-content-center mt-3"> -->
<!--     <button class="btn btn-sm btn-falcon-default me-1" type="button" title="Previous" data-list-pagination="prev"><span class="fas fa-chevron-left"></span></button> -->
<!--     <ul class="pagination mb-0"></ul> -->
<!--     <button class="btn btn-sm btn-falcon-default ms-1" type="button" title="Next" data-list-pagination="next"><span class="fas fa-chevron-right"> </span></button> -->
<!--   </div> -->

<!-- paydetail -->
<form id="myForm">
	<input type="hidden" name="empHealthInsrnc" id="empHealthInsrnc" value="empHealthInsrnc" />
	<input type="hidden" name="empPaymentAmnt" id="empPaymentAmnt" value="empPaymentAmnt" />
	<input type="hidden" name="empNm" id="empNm" value="empNm" />
	<input type="hidden" name="empEmplymInsrnc" id="empEmplymInsrnc" value="empEmplymInsrnc" />
	<input type="hidden" name="empThePay" id="empThePay" value="empThePay" />
	<input type="hidden" name="empDept" id="empDept" value="empDept" />
	<input type="hidden" name="empNo" id="empNo" value="empNo" />
	<input type="hidden" name="empNightWorkAllowance" id="empNightWorkAllowance" value="empNightWorkAllowance" />
	<input type="hidden" name="empJncmpYmd" id="empJncmpYmd" value="empJncmpYmd" />
	<input type="hidden" name="empNationalPension" id="empNationalPension" value="empNationalPension" />
	<input type="hidden" name="empLongTermCareInsrnc" id="empLongTermCareInsrnc" value="empLongTermCareInsrnc" />
	<input type="hidden" name="empDeductionAmnt" id="empDeductionAmnt" value="empDeductionAmnt" />
	<input type="hidden" name="empMslay" id="empMslay" value="empMslay" />
	<input type="hidden" name="empJbgd" id="empJbgd" value="empJbgd" />
</form>





<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content modal-fullsize">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">급여명세서</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
  		<div class="ratio ratio-16x9">
<%-- 		<object data="${pageContext.request.contextPath}/resources/assets/test.pdf" type="application/pdf"> --%>
		<object data="${pageContext.request.contextPath}/resources/assets/E230002.pdf" type="application/pdf">
		<p>이 브라우저는 PDF 파일을 지원하지 않습니다. <a href="${pageContext.request.contextPath}/resources/assets/test.pdf">다운로드</a>하세요.</p>
		</object>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


</div>

</div>
</div>




<script src="<c:url value='/resources/js/app/emp/hrm/pay/payList.js'/>"></script>
<script src="<c:url value='/resources/js/app/common/paging.js'/>"></script>

