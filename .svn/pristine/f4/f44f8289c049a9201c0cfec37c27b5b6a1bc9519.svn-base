<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags/form"  prefix="form"%>
<%@taglib uri="http://www.springframework.org/tags"  prefix="spring"%>

<!--         전체 직원, 퇴사자, 현재 출근 직원 조회 페이지-->

              <div class="card overflow-hidden">
                <div class="card-header p-0 scrollbar-overlay border-bottom" data-simplebar="init"><div class="simplebar-wrapper" style="margin: 0px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: auto; overflow: hidden;"><div class="simplebar-content" style="padding: 0px;">
                  <ul class="nav nav-tabs border-0 tab-contact-details flex-nowrap" id="contact-details-tab" role="tablist">
                    <li class="nav-item text-nowrap" role="presentation"><a class="nav-link mb-0 d-flex align-items-center gap-1 py-3 px-x1 active" id="contact-timeline-tab" data-bs-toggle="tab" href="#timeline" role="tab" aria-controls="timeline" aria-selected="true">
                   <span class="fas fa-stream icon text-600"></span>  <!-- Font Awesome fontawesome.com -->
                        <h6 class="mb-0 text-600">전체 조회</h6>
                      </a></li>
                    <li class="nav-item text-nowrap" role="presentation"><a class="nav-link mb-0 d-flex align-items-center gap-1 py-3 px-x1" id="contact-tickets-tab" data-bs-toggle="tab" href="#tickets" role="tab" aria-controls="tickets" aria-selected="false" tabindex="-1"><!-- <span class="fas fa-ticket-alt text-600"></span> Font Awesome fontawesome.com -->
                        <span class="fas fa-ticket-alt text-600"></span>
                        <h6 class="mb-0 text-600">출근 직원 조회</h6>
                      </a></li>
                    <li class="nav-item text-nowrap" role="presentation"><a class="nav-link mb-0 d-flex align-items-center gap-1 py-3 px-x1" id="contact-notes-tab" data-bs-toggle="tab" href="#notes" role="tab" aria-controls="notes" aria-selected="false" tabindex="-1">
                    <span class="fas fa-file-alt icon text-600"></span> <!-- Font Awesome fontawesome.com -->
                        <h6 class="mb-0 text-600">퇴사자 조회</h6>
                      </a></li>
                  </ul>
                </div></div></div></div><div class="simplebar-placeholder" style="width: auto; height: 50px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: hidden;"><div class="simplebar-scrollbar" style="height: 0px; display: none;"></div></div></div>
                <div class="tab-content">
                  <div class="card-body tab-pane active" id="timeline" role="tabpanel" aria-labelledby="contact-timeline-tab">
                    
                    
<!--                     전체직원조회 -->
                          <div class="mb-3" id="allEmpList" data-list>
                <div class="card-header border-bottom border-200 px-0">
                  <div class="d-lg-flex justify-content-between">
                    <div class="row flex-between-center gy-2 px-x1">
 
                      <div class="col-auto">
                        <form>
                        <div class="d-flex">
                          <select class="form-select form-select-sm" aria-label="Bulk actions">
                            <option selected="">전체</option>
                            <option value="Abled">이름</option>
                            
                            <option value="Disabled">부서</option>
                          </select>
                		<div class="input-group">
                            <input class="form-control form-control-sm shadow-none search ms-2" type="search" placeholder="검색" aria-label="search">
                            <button class="btn btn-sm btn-outline-secondary border-300 hover-border-secondary">
                            <span class="fa fa-search fs--1"></span></button>
                          </div>
                        </div>
                        

                        </form>
                      </div>
                    </div>
                    <div class="border-bottom border-200 my-3"></div>
                    <div class="d-flex align-items-center justify-content-between justify-content-lg-end px-x1">
                     
                      <div class="d-none" id="retired-actions">
                        <div class="d-flex">
                          <select class="form-select form-select-sm" aria-label="Bulk actions" >
                            <option selected="">계정 상태 변경</option>
                            <option value="Abled">활성화</option>
                            <option value="Disabled">비활성화</option>
                            <option value="Delete">삭제</option>
                          </select>
                          <button class="btn btn-falcon-default btn-sm ms-2" type="button"><span class="bi-forward-fill"></span></button>
                        </div>
                      </div>
                      <div class="d-flex align-items-center" id="retired-replace-element">
                      <button class="btn btn-falcon-default btn-sm" type="button"><span class="fas fa-plus" data-fa-transform="shrink-3 down-2"></span><span class="d-none d-sm-inline-block ms-1">신규 직원 등록</span></button>
                        <button class="btn btn-falcon-default btn-sm mx-2" type="button"><span class="fas fa-external-link-alt" data-fa-transform="shrink-3"></span><span class="d-none d-sm-inline-block d-xl-none d-xxl-inline-block ms-1">Export</span></button>
                        <button class="btn btn-falcon-default btn-sm" type="button"><span class="fas fa-file-import" data--transform="shrink-3"></span><span class="d-none d-sm-inline-block d-xl-none d-xxl-inline-block ms-1">Import</span></button>
                        <div class="dropdown font-sans-serif ms-2">
                          <button class="btn btn-falcon-default text-600 btn-sm dropdown-toggle dropdown-caret-none" type="button" id="preview-dropdown" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><svg class="svg-inline--fa fa-ellipsis-h fa-w-16 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg><!-- <span class="fas fa-ellipsis-h fs--2"></span> Font Awesome fontawesome.com --></button>
                          <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="preview-dropdown"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                            <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body p-0">
                  <div class="table-responsive scrollbar">
                    <table class="table table-sm fs--1 mb-0">
                      <thead class="text-800 bg-light">
                        <tr>
                          <th class="py-2 fs-0 pe-2" style="width: 28px;">
                            <div class="form-check d-flex align-items-center">
                              <input class="form-check-input" id="checkbox-bulk-tickets-select2" type="checkbox" data-bulk-select='{"body":"retired-body","actions":"retired-actions","replacedElement":"retired-replace-element"}'/>
                            </div>
                          </th>
                          <th class="sort align-middle ps-2" data-sort="rnum">순번</th>
                          <th class="sort align-middle pe-5" data-sort="empNm">이름</th>
                          <th class="sort align-middle pe-5" data-sort="empNo">사번</th>
                          <th class="sort align-middle pe-5" data-sort="empTel">전화번호</th>
                          <th class="sort align-middle pe-5" data-sort="empDept">부서명</th>
                          <th class="sort align-middle text-end" data-sort="empJbgd">직급</th>
                          <th class="sort align-middle text-end" data-sort="social">비고</th>
                        </tr>
                      </thead>
                      <tbody class="list" id="retired-body">

                      <c:if test="${not empty hrmEmpList }">
                      <c:forEach items="${hrmEmpList }" var="hrmEmp">

                      	<tr>
                          <td class="align-middle fs-0 py-3">
                            <div class="form-check mb-0">
                              <input class="form-check-input" type="checkbox" id="all-contact-0" data-bulk-select-row="data-bulk-select-row">
                            </div>
                          </td>
                          <td class="align-middle rnum text-center">${hrmEmp.rnum }</td>
                          <td class="align-middle empNm white-space-nowrap pe-5 ps-2">
                            <div class="d-flex align-items-center gap-2 position-relative">
                              <div class="avatar avatar-xl">
                                <div class="avatar-name rounded-circle"><span>EW</span></div>
                              </div>
                              <h6 class="mb-0"><a class="stretched-link text-900" href="${pageContext.request.contextPath}/emp/pbl/emply/view">${hrmEmp.empNm }</a></h6>
                            </div>
                          </td>
                          <td class="align-middle empNo">${hrmEmp.empNo }</td>
                          <td class="align-middle empTel font-sans-serif white-space-nowrap">${hrmEmp.empTel }</td>
                          <td class="align-middle empDept">${hrmEmp.empDept }</td>
                          <td class="align-middle empJbgd fs-0 text-end"><span class="badge badge rounded-pill badge-subtle-secondary">${hrmEmp.empJbgd }</span>
                          </td>
                          <td class="align-middle social text-end ps-4"><a href="#!">${hrmEmp.empBirth }</a>
                          </td>
                        </tr>
                      </c:forEach>
                      </c:if>
                      
                      
                      <tr>
                          <td class="align-middle fs-0 py-3">
                            <div class="form-check mb-0">
                              <input class="form-check-input" type="checkbox" id="all-contact-0" data-bulk-select-row="data-bulk-select-row">
                            </div>
                          </td>
                          <td class="align-middle rnum text-center">1</td>
                          <td class="align-middle empNm white-space-nowrap pe-5 ps-2">
                            <div class="d-flex align-items-center gap-2 position-relative">
                              <div class="avatar avatar-xl">
                                <div class="avatar-name rounded-circle"><span>EW</span></div>
                              </div>
                              <h6 class="mb-0"><a class="stretched-link text-900" href="${pageContext.request.contextPath}/emp/pbl/emply/view">하하하</a></h6>
                            </div>
                          </td>
                          <td class="align-middle empNo">E230001</td>
                          <td class="align-middle empTel font-sans-serif white-space-nowrap"><a class="text-700" href="tel:+611800861302">+61 1800 861 302</a></td>
                          <td class="align-middle empDept">인사부</td>
                          <td class="align-middle empJbgd fs-0 text-end"><span class="badge badge rounded-pill badge-subtle-secondary">결근</span>
                          </td>
                          <td class="align-middle social text-end ps-4"><a href="#!">Facebook</a>
                          </td>
                        </tr>
        
                        <tr>
                        
                          <td class="align-middle fs-0 py-3">
                            <div class="form-check mb-0">
                              <input class="form-check-input" type="checkbox" id="all-contact-2" data-bulk-select-row="data-bulk-select-row">
                            </div>
                          </td>
                          <td class="align-middle rnum text-center">2</td>
                          <td class="align-middle empNm white-space-nowrap pe-5 ps-2">
                            <div class="d-flex align-items-center gap-2 position-relative">
                              <div class="avatar avatar-xl">
                                <img class="rounded-circle" src="${pageContext.request.contextPath}/resources/assets/img/team/1-thumb.png" alt="">

                              </div>
                              <h6 class="mb-0"><a class="stretched-link text-900" href="${pageContext.request.contextPath}/emp/pbl/emply/view">Finley</a></h6>
                            </div>
                          </td>
                          <td class="align-middle empNo">E230002</td>
                          <td class="align-middle empTel">010-4211-4148</td>
                          <td class="align-middle empDept">하우스키핑부</td>
                          <td class="align-middle empJbgd fs-0 text-end"><span class="badge bg-danger">DPM</span>
                          </td>
                          <td class="align-middle social text-end ps-4"><a href="#!">Linkedin</a>
                          </td>
                        </tr>
                        
                        
                        <tr>
                          <td class="align-middle fs-0 py-3">
                            <div class="form-check mb-0">
                              <input class="form-check-input" type="checkbox" id="all-contact-3" data-bulk-select-row="data-bulk-select-row">
                            </div>
                          </td>
                        <td class="align-middle rnum text-center">3</td>
                          <td class="align-middle empNm white-space-nowrap pe-5 ps-2">
                            <div class="d-flex align-items-center gap-2 position-relative">
                              <div class="avatar avatar-xl">
                                <div class="avatar-name rounded-circle"><span>김은대</span></div>
                              </div>
                              <h6 class="mb-0"><a class="stretched-link text-900" href="${pageContext.request.contextPath}/emp/pbl/emply/view">김은대</a></h6>
                            </div>
                          </td>
                          <td class="align-middle empNo">E230001</td>
                          <td class="align-middle empTel">010-4444-3355</td>
                          <td class="align-middle empDept">프론트오피스부</td>
                          <td class="align-middle empJbgd fs-0 text-end"><span class="badge bg-primary">STF</span>
                          </td>
                          <td class="align-middle social text-end ps-4">Twitter
                          </td>
                        </tr>
                        
                        
                        
                        </tbody>
                    </table>
                    <div class="text-center d-none" id="contact-table-fallback">
                      <p class="fw-bold fs-1 mt-3">No contact found</p>
                    </div>
                  </div>
                </div>
                <div class="card-footer d-flex justify-content-center">
                  <button class="btn btn-sm btn-falcon-default me-1 disabled" type="button" title="Previous" data-list-pagination="prev" disabled=""><svg class="svg-inline--fa fa-chevron-left fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg><!-- <span class="fas fa-chevron-left"></span> Font Awesome fontawesome.com --></button>
                  <ul class="pagination mb-0"></ul>
                  <button class="btn btn-sm btn-falcon-default ms-1" type="button" title="Next" data-list-pagination="next"><svg class="svg-inline--fa fa-chevron-right fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg><!-- <span class="fas fa-chevron-right"></span> Font Awesome fontawesome.com --></button>
                </div>
              </div>
                 
          
<!--                     전제직원 조회 끝 -->
                  </div>
                  <div class="card-body tab-pane" id="tickets" role="tabpanel" aria-labelledby="contact-tickets-tab">
<!-- 출근직원 조회 -->

<div class="mb-3" id="dclzEmpList" data-list>
                <div class="card-header border-bottom border-200 px-0">
                  <div class="d-lg-flex justify-content-between">
                    <div class="row flex-between-center gy-2 px-x1">
                      <div class="col-auto pe-0">
<!--                         <h6 class="mb-0">Contacts</h6> -->
                      </div>
                      <div class="col-auto">
                        <form>
                        <div class="d-flex">
                          <select class="form-select form-select-sm" aria-label="Bulk actions">
                            <option selected="">전체</option>
                            <option value="Abled">이름</option>
                            <option value="Disabled">부서</option>
                          </select>
                		<div class="input-group">
                            <input class="form-control form-control-sm shadow-none search ms-2" type="search" placeholder="검색" aria-label="search">
                            <button class="btn btn-sm btn-outline-secondary border-300 hover-border-secondary">
                            <span class="fa fa-search fs--1"></span></button>
                          </div>
                        </div>
                        

                        </form>
                      </div>
                    </div>
                    <div class="border-bottom border-200 my-3"></div>
                    <div class="d-flex align-items-center justify-content-between justify-content-lg-end px-x1">
                     
                      <div class="d-none" id="table-contact-actions">
                        <div class="d-flex">
                          <select class="form-select form-select-sm" aria-label="Bulk actions">
                            <option selected="">계정 상태 변경</option>
                            <option value="Abled">활성화</option>
                            <option value="Disabled">비활성화</option>
                            <option value="Delete">삭제</option>
                          </select>
                          <button class="btn btn-falcon-default btn-sm ms-2" type="button">???</button>
                        </div>
                      </div>
                      <div class="d-flex align-items-center" id="table-contact-replace-element">
                      <button class="btn btn-falcon-default btn-sm" type="button"><span class="fas fa-plus" data-fa-transform="shrink-3 down-2"></span><span class="d-none d-sm-inline-block ms-1">신규 직원 등록</span></button>
                        <button class="btn btn-falcon-default btn-sm mx-2" type="button"><span class="fas fa-external-link-alt" data-fa-transform="shrink-3"></span><span class="d-none d-sm-inline-block d-xl-none d-xxl-inline-block ms-1">Export</span></button>
                        <button class="btn btn-falcon-default btn-sm" type="button"><span class="fas fa-file-import" data--transform="shrink-3"></span><span class="d-none d-sm-inline-block d-xl-none d-xxl-inline-block ms-1">Import</span></button>
                        <div class="dropdown font-sans-serif ms-2">
                          <button class="btn btn-falcon-default text-600 btn-sm dropdown-toggle dropdown-caret-none" type="button" id="preview-dropdown" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><svg class="svg-inline--fa fa-ellipsis-h fa-w-16 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg><!-- <span class="fas fa-ellipsis-h fs--2"></span> Font Awesome fontawesome.com --></button>
                          <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="preview-dropdown"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                            <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body p-0">
                  <div class="table-responsive scrollbar">
                    <table class="table table-sm fs--1 mb-0">
                      <thead class="text-800 bg-light">
                        <tr>
                          <th class="py-2 fs-0 pe-2" style="width: 28px;">
                            <div class="form-check d-flex align-items-center">
                              <input class="form-check-input" id="checkbox-bulk-tickets-select" type="checkbox" data-bulk-select='{"body":"table-contact-body","actions":"table-contact-actions","replacedElement":"table-contact-replace-element"}'/>
                            </div>
                          </th>
                          <th class="sort align-middle ps-2" data-sort="name">이름</th>
                          <th class="sort align-middle pe-5" data-sort="phone-number">전화번호</th>
                          <th class="sort align-middle pe-5" data-sort="report">부서명</th>
                          <th class="sort align-middle text-end" data-sort="subscription">근태상태</th>
                          <th class="sort align-middle text-end" data-sort="social">비고</th>
                        </tr>
                      </thead>
                      <tbody class="list" id="table-contact-body">

                      <c:if test="${not empty hrmEmpDclzList }">
                      	<c:forEach items="${hrmEmpDclzList}" var="dclz">
	                      	<tr>
	                          <td class="align-middle fs-0 py-3">
	                            <div class="form-check mb-0">
	                              <input class="form-check-input" type="checkbox" id="all-contact-0" data-bulk-select-row="data-bulk-select-row">
	                            </div>
	                          </td>
	                          <td class="align-middle name white-space-nowrap pe-5 ps-2">
	                            <div class="d-flex align-items-center gap-2 position-relative">
	                         
	                              <h6 class="mb-0"><a class="stretched-link text-900" href="${pageContext.request.contextPath}/emp/pbl/emply/view">${dclz.empNm }</a></h6>
	                            </div>
	                          </td>
	                          <td class="align-middle phone-number font-sans-serif white-space-nowrap">${dclz.empTel }</td>
	                          <td class="align-middle report">${dclz.empDept }</td>
	                          <td class="align-middle subscription fs-0 text-end"><span class="badge badge rounded-pill badge-subtle-secondary">${dclz.dclz.dclzBgnDt }</span>
	                          </td>
	                          <td class="align-middle social text-end ps-4"><a href="#!">Facebook</a>
	                          </td>
	                        </tr>
                      	</c:forEach>
                      
                      </c:if>
                      
                      
                      
                      
                      
                      
                      <tr>
                          <td class="align-middle fs-0 py-3">
                            <div class="form-check mb-0">
                              <input class="form-check-input" type="checkbox" id="all-contact-0" data-bulk-select-row="data-bulk-select-row">
                            </div>
                          </td>
                          <td class="align-middle name white-space-nowrap pe-5 ps-2">
                            <div class="d-flex align-items-center gap-2 position-relative">
                              <div class="avatar avatar-xl">
                                <div class="avatar-name rounded-circle"><span>EW</span></div>
                              </div>
                              <h6 class="mb-0"><a class="stretched-link text-900" href="${pageContext.request.contextPath}/emp/pbl/emply/view">Emma Watson</a></h6>
                            </div>
                          </td>
                          <td class="align-middle phone-number font-sans-serif white-space-nowrap"><a class="text-700" href="tel:+611800861302">+61 1800 861 302</a></td>
                          <td class="align-middle report"><a href="#!">Analysis of the Top Customers</a></td>
                          <td class="align-middle subscription fs-0 text-end"><span class="badge badge rounded-pill badge-subtle-secondary">결근</span>
                          </td>
                          <td class="align-middle social text-end ps-4"><a href="#!">Facebook</a>
                          </td>
                        </tr>
                        
                        <tr>
                          <td class="align-middle fs-0 py-3">
                            <div class="form-check mb-0">
                              <input class="form-check-input" type="checkbox" id="all-contact-2" data-bulk-select-row="data-bulk-select-row">
                            </div>
                          </td>
                          <td class="align-middle name white-space-nowrap pe-5 ps-2">
                            <div class="d-flex align-items-center gap-2 position-relative">
                              <div class="avatar avatar-xl">
                                <img class="rounded-circle" src="${pageContext.request.contextPath}/resources/assets/img/team/1-thumb.png" alt="">

                              </div>
                              <h6 class="mb-0"><a class="stretched-link text-900" href="${pageContext.request.contextPath}/emp/pbl/emply/view">Finley</a></h6>
                            </div>
                          </td>
                          <td class="align-middle phone-number font-sans-serif white-space-nowrap"><a class="text-700" href="tel:+611800861302">+61 1800 861 302</a></td>
                          <td class="align-middle report"><a href="#!">Performance of Agents</a></td>
                          <td class="align-middle subscription fs-0 text-end"><span class="badge badge rounded-pill badge-subtle-info">퇴근</span>
                          </td>
                          <td class="align-middle social text-end ps-4"><a href="#!">Linkedin</a>
                          </td>
                        </tr>
                        
                        
                        <tr>
                          <td class="align-middle fs-0 py-3">
                            <div class="form-check mb-0">
                              <input class="form-check-input" type="checkbox" id="all-contact-3" data-bulk-select-row="data-bulk-select-row">
                            </div>
                          </td>
                          <td class="align-middle name white-space-nowrap pe-5 ps-2">
                            <div class="d-flex align-items-center gap-2 position-relative">
                              <div class="avatar avatar-xl">
                                <div class="avatar-name rounded-circle"><span>PG</span></div>
                              </div>
                              <h6 class="mb-0"><a class="stretched-link text-900" href="${pageContext.request.contextPath}/emp/pbl/emply/view">Peter Gill</a></h6>
                            </div>
                          </td>
                          <td class="align-middle phone-number font-sans-serif white-space-nowrap"><a class="text-700" href="tel:+992536632566">+99 2536 632 566</a></td>
                          <td class="align-middle report"><a href="#!">Handling Time (on Average)</a></td>
                          <td class="align-middle subscription fs-0 text-end"><span class="badge badge rounded-pill badge-subtle-success">출근</span>
                          </td>
                          <td class="align-middle social text-end ps-4"><a href="#!">Twitter</a>
                          </td>
                        </tr>
                        
                        
                        
                        </tbody>
                    </table>
                    <div class="text-center d-none" id="contact-table-fallback">
                      <p class="fw-bold fs-1 mt-3">No contact found</p>
                    </div>
                  </div>
                </div>
                <div class="card-footer d-flex justify-content-center">
                  <button class="btn btn-sm btn-falcon-default me-1 disabled" type="button" title="Previous" data-list-pagination="prev" disabled=""><svg class="svg-inline--fa fa-chevron-left fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg><!-- <span class="fas fa-chevron-left"></span> Font Awesome fontawesome.com --></button>
                  <ul class="pagination mb-0"></ul>
                  <button class="btn btn-sm btn-falcon-default ms-1" type="button" title="Next" data-list-pagination="next"><svg class="svg-inline--fa fa-chevron-right fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg><!-- <span class="fas fa-chevron-right"></span> Font Awesome fontawesome.com --></button>
                </div>
              </div>
<!-- 출근직원 조회  -->





                  </div>
                  <div class="card-body tab-pane" id="notes" role="tabpanel" aria-labelledby="contact-notes-tab">
<!-- 퇴사자 조회 --> 
                 <div class="mb-3" id="retiredEmpList" data-list>
                <div class="card-header border-bottom border-200 px-0">
                  <div class="d-lg-flex justify-content-between">
                    <div class="row flex-between-center gy-2 px-x1">
 
                      <div class="col-auto">
                        <form>
                        <div class="d-flex">
                          <select class="form-select form-select-sm" aria-label="Bulk actions" data-list-filter="data-list-filter">
                            <option selected="">전체</option>
                            <option value="E230001">이름</option>
                            
                            <option value="E230002">부서</option>
                          </select>
                		<div class="input-group">
                            <input class="form-control form-control-sm shadow-none search ms-2" type="search" placeholder="검색" aria-label="search">
                            <button class="btn btn-sm btn-outline-secondary border-300 hover-border-secondary">
                            <span class="fa fa-search fs--1"></span></button>
                          </div>
                        </div>
                        

                        </form>
                      </div>
                    </div>
                    <div class="border-bottom border-200 my-3"></div>
                    <div class="d-flex align-items-center justify-content-between justify-content-lg-end px-x1">
                     
                      <div class="d-none" id="retired-actions">
                        <div class="d-flex">
                          <select class="form-select form-select-sm" aria-label="Bulk actions">
                            <option selected="">계정 상태 변경</option>
                            <option value="Abled">활성화</option>
                            <option value="Disabled">비활성화</option>
                            <option value="Delete">삭제</option>
                          </select>
                          <button class="btn btn-falcon-default btn-sm ms-2" type="button"><span class="bi-forward-fill"></span></button>
                        </div>
                      </div>
                      <div class="d-flex align-items-center" id="retired-replace-element">
                      <button class="btn btn-falcon-default btn-sm" type="button"><span class="fas fa-plus" data-fa-transform="shrink-3 down-2"></span><span class="d-none d-sm-inline-block ms-1">신규 직원 등록</span></button>
                        <button class="btn btn-falcon-default btn-sm mx-2" type="button"><span class="fas fa-external-link-alt" data-fa-transform="shrink-3"></span><span class="d-none d-sm-inline-block d-xl-none d-xxl-inline-block ms-1">Export</span></button>
                        <button class="btn btn-falcon-default btn-sm" type="button"><span class="fas fa-file-import" data--transform="shrink-3"></span><span class="d-none d-sm-inline-block d-xl-none d-xxl-inline-block ms-1">Import</span></button>
                        <div class="dropdown font-sans-serif ms-2">
                          <button class="btn btn-falcon-default text-600 btn-sm dropdown-toggle dropdown-caret-none" type="button" id="preview-dropdown" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><svg class="svg-inline--fa fa-ellipsis-h fa-w-16 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg><!-- <span class="fas fa-ellipsis-h fs--2"></span> Font Awesome fontawesome.com --></button>
                          <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="preview-dropdown"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                            <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body p-0">
                  <div class="table-responsive scrollbar">
                    <table class="table table-sm fs--1 mb-0">
                      <thead class="text-800 bg-light">
                        <tr>
                          <th class="py-2 fs-0 pe-2" style="width: 28px;">
                            <div class="form-check d-flex align-items-center">
                              <input class="form-check-input" id="checkbox-bulk-tickets-select2" type="checkbox" data-bulk-select='{"body":"retired-body","actions":"retired-actions","replacedElement":"retired-replace-element"}'/>
                            </div>
                          </th>
                          <th class="sort align-middle ps-2" data-sort="rnum">순번</th>
                          <th class="sort align-middle pe-5" data-sort="empNm">이름</th>
                          <th class="sort align-middle pe-5" data-sort="empNo">사번</th>
                          <th class="sort align-middle pe-5" data-sort="empTel">전화번호</th>
                          <th class="sort align-middle pe-5" data-sort="empDept">부서명</th>
                          <th class="sort align-middle text-end" data-sort="empJbgd">직급</th>
                          <th class="sort align-middle text-end" data-sort="social">비고</th>
                        </tr>
                      </thead>
                      <tbody class="list" id="retired-body">

                      <c:if test="${not empty hrmEmpRtrmList }">
                      	<c:forEach items="${hrmEmpRtrmList }" var="rtrm">
                      		<tr>
	                          <td class="align-middle fs-0 py-3">
	                            <div class="form-check mb-0">
	                              <input class="form-check-input" type="checkbox" id="all-contact-0" data-bulk-select-row="data-bulk-select-row">
	                            </div>
	                          </td>
	                          <td class="align-middle rnum text-center">1</td>
	                          <td class="align-middle empNm white-space-nowrap pe-5 ps-2">
	                            <div class="d-flex align-items-center gap-2 position-relative">
	                              <div class="avatar avatar-xl">
	                                <div class="avatar-name rounded-circle"><span>EW</span></div>
	                              </div>
	                              <h6 class="mb-0"><a class="stretched-link text-900" href="${pageContext.request.contextPath}/emp/pbl/emply/view">${rtrm.empNm }</a></h6>
	                            </div>
	                          </td>
	                          <td class="align-middle empNo">${rtrm.empNo }</td>
	                          <td class="align-middle empTel font-sans-serif white-space-nowrap">${rtrm.empTel }</td>
	                          <td class="align-middle empDept">${rtrm.empDept }</td>
	                          <td class="align-middle empJbgd fs-0 text-end"><span class="badge badge rounded-pill badge-subtle-secondary">${rtrm.empJbgd }</span>
	                          </td>
	                          <td class="align-middle social text-end ps-4"><a href="#!">Facebook</a>
	                          </td>
                        </tr>
                      	
                      	</c:forEach>
                      </c:if>
                      
                      <tr>
                          <td class="align-middle fs-0 py-3">
                            <div class="form-check mb-0">
                              <input class="form-check-input" type="checkbox" id="all-contact-0" data-bulk-select-row="data-bulk-select-row">
                            </div>
                          </td>
                          <td class="align-middle rnum text-center">1</td>
                          <td class="align-middle empNm white-space-nowrap pe-5 ps-2">
                            <div class="d-flex align-items-center gap-2 position-relative">
                              <div class="avatar avatar-xl">
                                <div class="avatar-name rounded-circle"><span>EW</span></div>
                              </div>
                              <h6 class="mb-0"><a class="stretched-link text-900" href="${pageContext.request.contextPath}/emp/pbl/emply/view">Emma Watson</a></h6>
                            </div>
                          </td>
                          <td class="align-middle empNo">E230001</td>
                          <td class="align-middle empTel font-sans-serif white-space-nowrap"><a class="text-700" href="tel:+611800861302">+61 1800 861 302</a></td>
                          <td class="align-middle empDept">인사부</td>
                          <td class="align-middle empJbgd fs-0 text-end"><span class="badge badge rounded-pill badge-subtle-secondary">결근</span>
                          </td>
                          <td class="align-middle social text-end ps-4"><a href="#!">Facebook</a>
                          </td>
                        </tr>
                        
                        <tr>
                        
                          <td class="align-middle fs-0 py-3">
                            <div class="form-check mb-0">
                              <input class="form-check-input" type="checkbox" id="all-contact-2" data-bulk-select-row="data-bulk-select-row">
                            </div>
                          </td>
                          <td class="align-middle rnum">2</td>
                          <td class="align-middle empNm white-space-nowrap pe-5 ps-2">
                            <div class="d-flex align-items-center gap-2 position-relative">
                              <div class="avatar avatar-xl">
                                <img class="rounded-circle" src="${pageContext.request.contextPath}/resources/assets/img/team/1-thumb.png" alt="">

                              </div>
                              <h6 class="mb-0"><a class="stretched-link text-900" href="${pageContext.request.contextPath}/emp/pbl/emply/view">Finley</a></h6>
                            </div>
                          </td>
                          <td class="align-middle empNo">E230002</td>
                          <td class="align-middle empTel">010-4211-4148</td>
                          <td class="align-middle empDept">하우스키핑부</td>
                          <td class="align-middle empJbgd fs-0 text-end"><span class="badge bg-danger">DPM</span>
                          </td>
                          <td class="align-middle social text-end ps-4"><a href="#!">Linkedin</a>
                          </td>
                        </tr>
                        
                        
                        <tr>
                          <td class="align-middle fs-0 py-3">
                            <div class="form-check mb-0">
                              <input class="form-check-input" type="checkbox" id="all-contact-3" data-bulk-select-row="data-bulk-select-row">
                            </div>
                          </td>
                        <td class="align-middle rnum">3</td>
                          <td class="align-middle empNm white-space-nowrap pe-5 ps-2">
                            <div class="d-flex align-items-center gap-2 position-relative">
                              <div class="avatar avatar-xl">
                                <div class="avatar-name rounded-circle"><span>김은대</span></div>
                              </div>
                              <h6 class="mb-0"><a class="stretched-link text-900" href="${pageContext.request.contextPath}/emp/pbl/emply/view">김은대</a></h6>
                            </div>
                          </td>
                          <td class="align-middle empNo">E230001</td>
                          <td class="align-middle empTel">010-4444-3355</td>
                          <td class="align-middle empDept">프론트오피스부</td>
                          <td class="align-middle empJbgd fs-0 text-end"><span class="badge bg-primary">STF</span>
                          </td>
                          <td class="align-middle social text-end ps-4">Twitter
                          </td>
                        </tr>
                        
                        </tbody>
                    </table>
                    <div class="text-center d-none" id="contact-table-fallback">
                      <p class="fw-bold fs-1 mt-3">No contact found</p>
                    </div>
                  </div>
                </div>
                <div class="card-footer d-flex justify-content-center">
                  <button class="btn btn-sm btn-falcon-default me-1 disabled" type="button" title="Previous" data-list-pagination="prev" disabled=""><svg class="svg-inline--fa fa-chevron-left fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg><!-- <span class="fas fa-chevron-left"></span> Font Awesome fontawesome.com --></button>
                  <ul class="pagination mb-0"></ul>
                  <button class="btn btn-sm btn-falcon-default ms-1" type="button" title="Next" data-list-pagination="next"><svg class="svg-inline--fa fa-chevron-right fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg><!-- <span class="fas fa-chevron-right"></span> Font Awesome fontawesome.com --></button>
                </div>
              </div>

                 <!-- 퇴사자 조회 끝 -->  

                  </div>
                </div>
              </div>


<!--           여기가 끝 -->
<script src="<c:url value='/resources/js/app/emp/hrm/emply/empList.js'/>"></script>
