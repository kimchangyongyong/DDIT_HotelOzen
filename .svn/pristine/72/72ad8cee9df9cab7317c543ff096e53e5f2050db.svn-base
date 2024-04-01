<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags/form"  prefix="form"%>
<%@taglib uri="http://www.springframework.org/tags"  prefix="spring"%>
<link href="${pageContext.request.contextPath }/resources/vendors/flatpickr/flatpickr.min.css" rel="stylesheet" />

<div class="container" >
<div class="card mb-3" id="getThis" data-div-before="before">
	<div class="card-header">
		<h5 class="mb-0">직원 공지사항 수정</h5>
	</div>
	<div class="card-body bg-light">
		<form:form method="post" enctype="multipart/form-data"
		>
			<div class="row gx-2">
				<div class="col-sm-6 mb-3">
					<label class="form-label" for="emp-nt-nm">제목</label> <input name="empNtNm"
						class="form-control" id="emp-nt-nm" type="text" placeholder="제목" />
				</div>				
<!-- 				 <div class="col-sm-6 mb-3"> -->
<!-- 				    <label class="form-label" for="datepickerVal">작성일</label> -->
<!-- 				    <input name="empNtYmd" class="form-control datetimepicker" id="datepickerVal" type="text" placeholder="dd/mm/yy" required="required" data-options='{"disableMobile":true,"allowInput":true}' /> -->
<!-- 				    <div class="invalid-feedback">This field is required</div> -->
<!-- 				 </div> -->
                    
				<div class="col-sm-6 mb-3">
					<label class="form-label" for="emp-no">사번</label> <input
						name="empNo" class="form-control" id="emp-no" type="text" placeholder="사번" />
				</div>
				<div class="col-sm-6 mb-3">
					<label class="form-label" for="emp-nt-writer">작성자명</label> <input
						class="form-control" id="emp-nt-writer" type="text" placeholder="작성자명" />
				</div>
				
				<div class="col-sm-6 mb-3">
					<label class="form-label" for="empnotice-type">공지사항 종류 </label> 
					<select
						class="form-select" id="empnotice-type">
						<option>공지사항 종류를 선택하세요</option>
						<option>워크샵</option>
						<option>회사휴무</option>
						<option>시설유지보수</option>
						<option>직원교육</option>
						<option>기타</option>
					</select>
				</div>
				
				<div class="col-sm-6 mb-3">
				  <label class="form-label" for="formFileMultiple">첨부파일 등록</label>
				  <input class="form-control" id="formFileMultiple" type="file" multiple="multiple" />
				</div>
				
				<div class="col-12">
					<div class="border-bottom border-dashed my-3"></div>
				</div>
				
				<div class="col-12">
					<label class="form-label" for="emp-nt-cn">내용</label>
					<textarea class="tinymce d-none" data-tinymce="data-tinymce" name="empNtCn"></textarea>
				</div>
				
			
				<div class="col-12">
					<div class="border-bottom border-dashed my-3"></div>
				</div>
				 <div class="col-auto">
<!--                   <button type="reset" class="btn btn-falcon-default btn-sm me-2" role="button">취소</button> -->
<!--                   <button type="submit" class="btn btn-falcon-primary btn-sm" role="button">등록하기</button> -->
                </div>
				
				                <div class="card-footer bg-light" id="preview-footer">
                  <button class="btn btn-falcon-default btn-sm fs--1" type="button" ><span class="fas fa-reply"></span><span class="d-none d-sm-inline-block ms-1">취소</span></button>
                  <button class="btn btn-falcon-default btn-sm fs--1" type="button" ><span class="far fa-edit"></span><span class="d-none d-sm-inline-block ms-1">수정하기</span></button>
                  <button data-emp-nt-no="${empNt.empNtNo }" id="delBtn" onclick="fnDelete()" class="btn btn-falcon-default btn-sm fs--1" type="button" ><span class="fas fa-trash"></span><span class="d-none d-sm-inline-block ms-1">삭제하기</span></button>
                </div>
				
			</div>
			
		</form:form>
	</div>
</div>
</div>

<script>



</script>

<script src="${pageContext.request.contextPath }/resources/vendors/tinymce/tinymce.min.js"></script>
<script src="${pageContext.request.contextPath }/resources/assets/js/flatpickr.js"></script>


