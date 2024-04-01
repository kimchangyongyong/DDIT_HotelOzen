<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<link href="${pageContext.request.contextPath}/resources/css/emp/pbl/oprtnstts/oprtnstts.css" rel="stylesheet">

<div class="col mb-3">
	<div class="card h-100">
		<div class="card-header">
			<div class="row flex-between-end">
				<nav style="--falcon-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%23748194'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
				  <ol class="breadcrumb">
				    <li class="breadcrumb-item"><a href="${pageContext.request.contextPath}/emp/index.do">Home</a></li>
				    <li class="breadcrumb-item active" aria-current="page">업무현황</li>
				  </ol>
				</nav>

		<div id="tableExample4" data-list='{"valueNames":["number","day","name","title","payment","detail"],"filter":{"key":"payment"}}'>
		  <div class="row justify-content-end g-0">
		    <div class="col-auto px-3">
		      <select class="form-select form-select-sm mb-3" aria-label="Bulk actions" data-list-filter="data-list-filter">
		        <option selected="" value="">상태선택</option>
		        <option value="반려">반려</option>
		        <option value="승인완료">승인완료</option>
		        <option value="대기">대기</option>
		      </select>
		    </div>
		  </div>
		 <div id="tableExample2" data-list='{"valueNames":["number","day","name","title","payment","detail"],"page":7,"pagination":true}'>
		  <div class="table-responsive scrollbar mx-0">
		    <table class="table table-sm table-striped fs-10 mb-0 overflow-hidden">
		      <thead class="bg-200">
		        <tr>
		          <th class="text-900 sort pe-1 align-middle white-space-nowrap" data-sort="number">번호</th>
		          <th class="text-900 sort pe-1 align-middle white-space-nowrap" data-sort="day">날짜</th>
		          <th class="text-900 sort pe-1 align-middle white-space-nowrap" data-sort="name">요청자</th>
		          <th class="text-900 sort pe-1 align-middle white-space-nowrap" data-sort="title">결재명</th>
		          <th class="text-900 sort pe-1 align-middle white-space-nowrap" data-sort="payment">결재상태</th>
		          <th class="text-900 sort pe-1 align-middle white-space-nowrap" data-sort="detail">상세조회</th>
		        </tr>
		      </thead>
		      <tbody class="list" id="table-purchase-body">
		        <tr class="btn-reveal-trigger">
		          <th class="align-middle white-space-nowrap number"><a href="../../app/e-commerce/customer-details.html">1</a></th>
		          <td class="align-middle white-space-nowrap day">2023/11/11</td>
		          <th class="align-middle white-space-nowrap name"><a href="../../app/e-commerce/customer-details.html">남희수</a></th>
		          <td class="align-middle white-space-nowrap title">비품결재 요청</td>
		          <td class="align-middle fs-9 white-space-nowrap payment"><span class="badge badge rounded-pill badge-subtle-success">승인완료<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
		          </td>
		          <td class="align-middle white-space-nowrap detail">
					<button class="btn btn-falcon-default me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#error-modal">상세조회</button>
					<div class="modal fade" id="error-modal" tabindex="-1" role="dialog" aria-hidden="true">
					  <div class="modal-dialog modal-dialog-scrollable" role="document" style="max-width: 500px">
					    <div class="modal-content position-relative">
					      <div class="position-absolute top-0 end-0 mt-2 me-2 z-1">
					        <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
					      </div>
					      <div class="modal-body p-0">
					        <div class="rounded-top-3 py-3 ps-4 pe-6 bg-body-tertiary">
					          <h4 class="mb-1" id="modalExampleDemoLabel">결재상태 상세조회</h4>
					        </div>
					        <div class="p-4 pb-0">
					          <form>
					            <div class="mb-3">
					              <label class="col-form-label" for="req-title">결재명</label>
					              <input class="form-control" id="req-title" type="text" />
					            </div>
					            <div class="mb-3">
					              <label class="col-form-label" for="req-content">결재내용</label>
					              <textarea class="form-control" id="req-content"></textarea>
					            </div>
					            <div class="mb-3">
					              <label class="col-form-label" for="req-file">첨부파일</label>
					              <textarea class="form-control" id="req-file"></textarea>
					            </div>
					            <div class="mb-3">
					              <label class="col-form-label" for="req-date">날짜</label>
					              <textarea class="form-control" id="req-dat"></textarea>
					            </div>
					            <div class="mb-3">
					              <label class="col-form-label" for="req-status">진행현황</label>
					              <textarea class="form-control" id="req-status"></textarea>
					            </div>
					          </form>
					        </div>
					      </div>
					      <div class="modal-footer">
					        <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">닫기</button>
					        <button class="btn btn-falcon-default me-1 mb-1" type="button" onclick="moreCheck">전송</button>
					      </div>
					    </div>
					  </div>
					</div>
		          </td>
		        </tr>
		        <tr class="btn-reveal-trigger">
		          <th class="align-middle white-space-nowrap number"><a href="../../app/e-commerce/customer-details.html">1</a></th>
		          <td class="align-middle white-space-nowrap day">2023/11/11</td>
		          <th class="align-middle white-space-nowrap name"><a href="../../app/e-commerce/customer-details.html">남희수</a></th>
		          <td class="align-middle white-space-nowrap title">비품결재 요청</td>
		          <td class="align-middle fs-9 white-space-nowrap payment"><span class="badge badge rounded-pill badge-subtle-success">승인완료<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
		          </td>
		          <td class="align-middle white-space-nowrap detail">
					<button class="btn btn-falcon-default me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#error-modal">상세조회</button>
					<div class="modal fade" id="error-modal" tabindex="-1" role="dialog" aria-hidden="true">
					  <div class="modal-dialog modal-dialog-scrollable" role="document" style="max-width: 500px">
					    <div class="modal-content position-relative">
					      <div class="position-absolute top-0 end-0 mt-2 me-2 z-1">
					        <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
					      </div>
					      <div class="modal-body p-0">
					        <div class="rounded-top-3 py-3 ps-4 pe-6 bg-body-tertiary">
					          <h4 class="mb-1" id="modalExampleDemoLabel">Add a new illustration </h4>
					        </div>
					        <div class="p-4 pb-0">
					          <form>
					            <div class="mb-3">
					              <label class="col-form-label" for="recipient-name">Recipient:</label>
					              <input class="form-control" id="recipient-name" type="text" />
					            </div>
					            <div class="mb-3">
					              <label class="col-form-label" for="message-text">Message:</label>
					              <textarea class="form-control" id="message-text"></textarea>
					            </div>
					          </form>
					        </div>
					      </div>
					      <div class="modal-footer">
					        <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
					        <button class="btn btn-falcon-default me-1 mb-1" type="button">Understood </button>
					      </div>
					    </div>
					  </div>
					</div>
		          </td>
		        </tr>
		        <tr class="btn-reveal-trigger">
		          <th class="align-middle white-space-nowrap number"><a href="../../app/e-commerce/customer-details.html">1</a></th>
		          <td class="align-middle white-space-nowrap day">2023/11/11</td>
		          <th class="align-middle white-space-nowrap name"><a href="../../app/e-commerce/customer-details.html">남희수</a></th>
		          <td class="align-middle white-space-nowrap title">비품결재 요청</td>
		          <td class="align-middle fs-9 white-space-nowrap payment"><span class="badge badge rounded-pill badge-subtle-secondary">대기<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
		          </td>
		          <td class="align-middle white-space-nowrap detail">
					<button class="btn btn-falcon-default me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#error-modal">상세조회</button>
					<div class="modal fade" id="error-modal" tabindex="-1" role="dialog" aria-hidden="true">
					  <div class="modal-dialog modal-dialog-scrollable" role="document" style="max-width: 500px">
					    <div class="modal-content position-relative">
					      <div class="position-absolute top-0 end-0 mt-2 me-2 z-1">
					        <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
					      </div>
					      <div class="modal-body p-0">
					        <div class="rounded-top-3 py-3 ps-4 pe-6 bg-body-tertiary">
					          <h4 class="mb-1" id="modalExampleDemoLabel">Add a new illustration </h4>
					        </div>
					        <div class="p-4 pb-0">
					          <form>
					            <div class="mb-3">
					              <label class="col-form-label" for="recipient-name">Recipient:</label>
					              <input class="form-control" id="recipient-name" type="text" />
					            </div>
					            <div class="mb-3">
					              <label class="col-form-label" for="message-text">Message:</label>
					              <textarea class="form-control" id="message-text"></textarea>
					            </div>
					          </form>
					        </div>
					      </div>
					      <div class="modal-footer">
					        <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
					        <button class="btn btn-falcon-default me-1 mb-1" type="button">Understood </button>
					      </div>
					    </div>
					  </div>
					</div>
		          </td>
		        </tr>
		        <tr class="btn-reveal-trigger">
		          <th class="align-middle white-space-nowrap number"><a href="../../app/e-commerce/customer-details.html">1</a></th>
		          <td class="align-middle white-space-nowrap day">2023/11/11</td>
		          <th class="align-middle white-space-nowrap name"><a href="../../app/e-commerce/customer-details.html">남희수</a></th>
		          <td class="align-middle white-space-nowrap title">비품결재 요청</td>
		          <td class="align-middle fs-9 white-space-nowrap payment"><span class="badge badge rounded-pill badge-subtle-secondary">대기<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
		          </td>
		          <td class="align-middle white-space-nowrap detail">
					<button class="btn btn-falcon-default me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#error-modal">상세조회</button>
					<div class="modal fade" id="error-modal" tabindex="-1" role="dialog" aria-hidden="true">
					  <div class="modal-dialog modal-dialog-scrollable" role="document" style="max-width: 500px">
					    <div class="modal-content position-relative">
					      <div class="position-absolute top-0 end-0 mt-2 me-2 z-1">
					        <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
					      </div>
					      <div class="modal-body p-0">
					        <div class="rounded-top-3 py-3 ps-4 pe-6 bg-body-tertiary">
					          <h4 class="mb-1" id="modalExampleDemoLabel">Add a new illustration </h4>
					        </div>
					        <div class="p-4 pb-0">
					          <form>
					            <div class="mb-3">
					              <label class="col-form-label" for="recipient-name">Recipient:</label>
					              <input class="form-control" id="recipient-name" type="text" />
					            </div>
					            <div class="mb-3">
					              <label class="col-form-label" for="message-text">Message:</label>
					              <textarea class="form-control" id="message-text"></textarea>
					            </div>
					          </form>
					        </div>
					      </div>
					      <div class="modal-footer">
					        <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
					        <button class="btn btn-falcon-default me-1 mb-1" type="button">Understood </button>
					      </div>
					    </div>
					  </div>
					</div>
		          </td>
		        </tr>
		        <tr class="btn-reveal-trigger">
		          <th class="align-middle white-space-nowrap number"><a href="../../app/e-commerce/customer-details.html">1</a></th>
		          <td class="align-middle white-space-nowrap day">2023/11/11</td>
		          <th class="align-middle white-space-nowrap name"><a href="../../app/e-commerce/customer-details.html">남희수</a></th>
		          <td class="align-middle white-space-nowrap title">비품결재 요청</td>
		          <td class="align-middle fs-9 white-space-nowrap payment"><span class="badge badge rounded-pill badge-subtle-success">승인완료<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
		          </td>
		          <td class="align-middle white-space-nowrap detail">
					<button class="btn btn-falcon-default me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#error-modal">상세조회</button>
					<div class="modal fade" id="error-modal" tabindex="-1" role="dialog" aria-hidden="true">
					  <div class="modal-dialog modal-dialog-scrollable" role="document" style="max-width: 500px">
					    <div class="modal-content position-relative">
					      <div class="position-absolute top-0 end-0 mt-2 me-2 z-1">
					        <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
					      </div>
					      <div class="modal-body p-0">
					        <div class="rounded-top-3 py-3 ps-4 pe-6 bg-body-tertiary">
					          <h4 class="mb-1" id="modalExampleDemoLabel">Add a new illustration </h4>
					        </div>
					        <div class="p-4 pb-0">
					          <form>
					            <div class="mb-3">
					              <label class="col-form-label" for="recipient-name">Recipient:</label>
					              <input class="form-control" id="recipient-name" type="text" />
					            </div>
					            <div class="mb-3">
					              <label class="col-form-label" for="message-text">Message:</label>
					              <textarea class="form-control" id="message-text"></textarea>
					            </div>
					          </form>
					        </div>
					      </div>
					      <div class="modal-footer">
					        <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
					        <button class="btn btn-falcon-default me-1 mb-1" type="button">Understood </button>
					      </div>
					    </div>
					  </div>
					</div>
		          </td>
		        </tr>
		        <tr class="btn-reveal-trigger">
		          <th class="align-middle white-space-nowrap number"><a href="../../app/e-commerce/customer-details.html">1</a></th>
		          <td class="align-middle white-space-nowrap day">2023/11/11</td>
		          <th class="align-middle white-space-nowrap name"><a href="../../app/e-commerce/customer-details.html">남희수</a></th>
		          <td class="align-middle white-space-nowrap title">비품결재 요청</td>
		          <td class="align-middle fs-9 white-space-nowrap payment"><span class="badge badge rounded-pill badge-subtle-success">승인완료<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
		          </td>
		          <td class="align-middle white-space-nowrap detail">
					<button class="btn btn-falcon-default me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#error-modal">상세조회</button>
					<div class="modal fade" id="error-modal" tabindex="-1" role="dialog" aria-hidden="true">
					  <div class="modal-dialog modal-dialog-scrollable" role="document" style="max-width: 500px">
					    <div class="modal-content position-relative">
					      <div class="position-absolute top-0 end-0 mt-2 me-2 z-1">
					        <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
					      </div>
					      <div class="modal-body p-0">
					        <div class="rounded-top-3 py-3 ps-4 pe-6 bg-body-tertiary">
					          <h4 class="mb-1" id="modalExampleDemoLabel">Add a new illustration </h4>
					        </div>
					        <div class="p-4 pb-0">
					          <form>
					            <div class="mb-3">
					              <label class="col-form-label" for="recipient-name">Recipient:</label>
					              <input class="form-control" id="recipient-name" type="text" />
					            </div>
					            <div class="mb-3">
					              <label class="col-form-label" for="message-text">Message:</label>
					              <textarea class="form-control" id="message-text"></textarea>
					            </div>
					          </form>
					        </div>
					      </div>
					      <div class="modal-footer">
					        <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
					        <button class="btn btn-falcon-default me-1 mb-1" type="button">Understood </button>
					      </div>
					    </div>
					  </div>
					</div>
		          </td>
		        </tr>
		        <tr class="btn-reveal-trigger">
		          <th class="align-middle white-space-nowrap number"><a href="../../app/e-commerce/customer-details.html">1</a></th>
		          <td class="align-middle white-space-nowrap day">2023/11/11</td>
		          <th class="align-middle white-space-nowrap name"><a href="../../app/e-commerce/customer-details.html">남희수</a></th>
		          <td class="align-middle white-space-nowrap title">비품결재 요청</td>
		          <td class="align-middle fs-9 white-space-nowrap payment"><span class="badge badge rounded-pill badge-subtle-secondary">대기<span class="ms-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
		          </td>
		          <td class="align-middle white-space-nowrap detail">
					<button class="btn btn-falcon-default me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#error-modal">상세조회</button>
					<div class="modal fade" id="error-modal" tabindex="-1" role="dialog" aria-hidden="true">
					  <div class="modal-dialog modal-dialog-scrollable" role="document" style="max-width: 500px">
					    <div class="modal-content position-relative">
					      <div class="position-absolute top-0 end-0 mt-2 me-2 z-1">
					        <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
					      </div>
					      <div class="modal-body p-0">
					        <div class="rounded-top-3 py-3 ps-4 pe-6 bg-body-tertiary">
					          <h4 class="mb-1" id="modalExampleDemoLabel">Add a new illustration </h4>
					        </div>
					        <div class="p-4 pb-0">
					          <form>
					            <div class="mb-3">
					              <label class="col-form-label" for="recipient-name">Recipient:</label>
					              <input class="form-control" id="recipient-name" type="text" />
					            </div>
					            <div class="mb-3">
					              <label class="col-form-label" for="message-text">Message:</label>
					              <textarea class="form-control" id="message-text"></textarea>
					            </div>
					          </form>
					        </div>
					      </div>
					      <div class="modal-footer">
					        <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
					        <button class="btn btn-falcon-default me-1 mb-1" type="button">Understood </button>
					      </div>
					    </div>
					  </div>
					</div>
		          </td>
		        </tr>
		        <tr class="btn-reveal-trigger">
		          <th class="align-middle white-space-nowrap number"><a href="../../app/e-commerce/customer-details.html">1</a></th>
		          <td class="align-middle white-space-nowrap day">2023/11/11</td>
		          <th class="align-middle white-space-nowrap name"><a href="../../app/e-commerce/customer-details.html">남희수</a></th>
		          <td class="align-middle white-space-nowrap title">비품결재 요청</td>
		          <td class="align-middle fs-9 white-space-nowrap payment"><span class="badge badge rounded-pill badge-subtle-success">승인완료<span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
		          </td>
		          <td class="align-middle white-space-nowrap detail">
					<button class="btn btn-falcon-default me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#error-modal">상세조회</button>
					<div class="modal fade" id="error-modal" tabindex="-1" role="dialog" aria-hidden="true">
					  <div class="modal-dialog modal-dialog-scrollable" role="document" style="max-width: 500px">
					    <div class="modal-content position-relative">
					      <div class="position-absolute top-0 end-0 mt-2 me-2 z-1">
					        <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
					      </div>
					      <div class="modal-body p-0">
					        <div class="rounded-top-3 py-3 ps-4 pe-6 bg-body-tertiary">
					          <h4 class="mb-1" id="modalExampleDemoLabel">Add a new illustration </h4>
					        </div>
					        <div class="p-4 pb-0">
					          <form>
					            <div class="mb-3">
					              <label class="col-form-label" for="recipient-name">Recipient:</label>
					              <input class="form-control" id="recipient-name" type="text" />
					            </div>
					            <div class="mb-3">
					              <label class="col-form-label" for="message-text">Message:</label>
					              <textarea class="form-control" id="message-text"></textarea>
					            </div>
					          </form>
					        </div>
					      </div>
					      <div class="modal-footer">
					        <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
					        <button class="btn btn-falcon-default me-1 mb-1" type="button">Understood </button>
					      </div>
					    </div>
					  </div>
					</div>
		          </td>
		        </tr>
		        <tr class="btn-reveal-trigger">
		          <th class="align-middle white-space-nowrap number"><a href="../../app/e-commerce/customer-details.html">1</a></th>
		          <td class="align-middle white-space-nowrap day">2023/11/11</td>
		          <th class="align-middle white-space-nowrap name"><a href="../../app/e-commerce/customer-details.html">남희수</a></th>
		          <td class="align-middle white-space-nowrap title">비품결재 요청</td>
		          <td class="align-middle fs-9 white-space-nowrap payment"><span class="badge badge rounded-pill badge-subtle-warning">반려<span class="ms-1 fas fa-stream" data-fa-transform="shrink-2"></span></span>
		          </td>
		          <td class="align-middle white-space-nowrap detail">
					<button class="btn btn-falcon-default me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#error-modal">상세조회</button>
					<div class="modal fade" id="error-modal" tabindex="-1" role="dialog" aria-hidden="true">
					  <div class="modal-dialog modal-dialog-scrollable" role="document" style="max-width: 500px">
					    <div class="modal-content position-relative">
					      <div class="position-absolute top-0 end-0 mt-2 me-2 z-1">
					        <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
					      </div>
					      <div class="modal-body p-0">
					        <div class="rounded-top-3 py-3 ps-4 pe-6 bg-body-tertiary">
					          <h4 class="mb-1" id="modalExampleDemoLabel">Add a new illustration </h4>
					        </div>
					        <div class="p-4 pb-0">
					          <form>
					            <div class="mb-3">
					              <label class="col-form-label" for="recipient-name">Recipient:</label>
					              <input class="form-control" id="recipient-name" type="text" />
					            </div>
					            <div class="mb-3">
					              <label class="col-form-label" for="message-text">Message:</label>
					              <textarea class="form-control" id="message-text"></textarea>
					            </div>
					          </form>
					        </div>
					      </div>
					      <div class="modal-footer">
					        <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
					        <button class="btn btn-falcon-default me-1 mb-1" type="button">Understood </button>
					      </div>
					    </div>
					  </div>
					</div>
		          </td>
		        </tr>
		        <tr class="btn-reveal-trigger">
		          <th class="align-middle white-space-nowrap number"><a href="../../app/e-commerce/customer-details.html">1</a></th>
		          <td class="align-middle white-space-nowrap day">2023/11/11</td>
		          <th class="align-middle white-space-nowrap name"><a href="../../app/e-commerce/customer-details.html">남희수</a></th>
		          <td class="align-middle white-space-nowrap title">비품결재 요청</td>
		          <td class="align-middle fs-9 white-space-nowrap payment"><span class="badge badge rounded-pill badge-subtle-warning">반려<span class="ms-1 fas fa-stream" data-fa-transform="shrink-2"></span></span>
		          </td>
		          <td class="align-middle white-space-nowrap detail">
					<button class="btn btn-falcon-default me-1 mb-1" type="button" data-bs-toggle="modal" data-bs-target="#error-modal">상세조회</button>
					<div class="modal fade" id="error-modal" tabindex="-1" role="dialog" aria-hidden="true">
					  <div class="modal-dialog modal-dialog-scrollable" role="document" style="max-width: 500px">
					    <div class="modal-content position-relative">
					      <div class="position-absolute top-0 end-0 mt-2 me-2 z-1">
					        <button class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base" data-bs-dismiss="modal" aria-label="Close"></button>
					      </div>
					      <div class="modal-body p-0">
					        <div class="rounded-top-3 py-3 ps-4 pe-6 bg-body-tertiary">
					          <h4 class="mb-1" id="modalExampleDemoLabel">Add a new illustration </h4>
					        </div>
					        <div class="p-4 pb-0">
					          <form>
					            <div class="mb-3">
					              <label class="col-form-label" for="recipient-name">Recipient:</label>
					              <input class="form-control" id="recipient-name" type="text" />
					            </div>
					            <div class="mb-3">
					              <label class="col-form-label" for="message-text">Message:</label>
					              <textarea class="form-control" id="message-text"></textarea>
					            </div>
					          </form>
					        </div>
					      </div>
					      <div class="modal-footer">
					        <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
					        <button class="btn btn-falcon-default me-1 mb-1" type="button">Understood </button>
					      </div>
					    </div>
					  </div>
					</div>
		          </td>
		        </tr>
		      </tbody>
		    </table>
		  </div>
		  <div class="d-flex justify-content-center mt-3">
		    <button class="btn btn-sm btn-falcon-default me-1" type="button" title="Previous" data-list-pagination="prev"><span class="fas fa-chevron-left"></span></button>
		    <ul class="pagination mb-0"></ul>
		    <button class="btn btn-sm btn-falcon-default ms-1" type="button" title="Next" data-list-pagination="next"><span class="fas fa-chevron-right"></span></button>
		  </div>
		</div>
		</div>
	</div>
</div>
</div>
</div>

