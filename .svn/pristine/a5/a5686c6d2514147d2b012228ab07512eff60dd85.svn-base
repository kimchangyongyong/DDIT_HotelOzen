<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<link href="${pageContext.request.contextPath }/resources/css/emp/headermenu.css" rel="stylesheet"/>

<nav class="navbar navbar-light navbar-glass navbar-top navbar-expand">

	<button	class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse"
				data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation">
		<span class="navbar-toggle-icon"><span class="toggle-line"></span></span>
	</button>
	<a class="navbar-brand me-1 me-sm-3" href="${pageContext.request.contextPath }/emp/index.do">
		<div class="d-flex align-items-center">
			<img class="me-2" src="${pageContext.request.contextPath}/resources/assets/img/generic/hotelozen.png" alt="" width="190" />
		</div>
	</a>
	<ul	class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
		<li class="nav-item dropdown">
			<a class="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait"	id="navbarDropdownNotification" role="button"
					data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-hide-on-body-scroll="data-hide-on-body-scroll">
				<span class="fas fa-bell" data-fa-transform="shrink-6" style="font-size: 33px;"></span>
			</a>
			<div class="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg" aria-labelledby="navbarDropdownNotification">
				<div class="card card-notification shadow-none">
					<div class="card-header">
						<div class="row justify-content-between align-items-center">
							<div class="col-auto">
								<h6 class="card-header-title mb-0">알림</h6>
							</div>
						</div>
					</div>
					<div class="scrollbar-overlay" style="max-height: 19rem">
						<div class="list-group list-group-flush fw-normal fs-10">
							<div class="list-group-item">
								<a class="notification notification-flush notification-unread" href="#!">
									<div class="notification-body">
										<p class="mb-1">결재 요청건이 있습니다.</p>
									</div>
								</a>
							</div>
						</div>
						<div class="card-footer text-center border-top">
							<a class="card-link d-block" href="app/social/notifications.html">View all</a>
						</div>
					</div>
				</div>
			</div>
		</li>
		<li>
			<div class="emp-logout">
				<form:form id="logoutForm" method="post" action="${pageContext.request.contextPath }/emp/logout">
					<a class="material-icons text-900 fs-6" id="logoutTag">exit_to_app</a>
				</form:form>
			</div>
		</li>
	</ul>
</nav>


<script type="text/javascript">

if(document.getElementById('logoutTag') != null){	
	logoutTag.addEventListener('click', function(){
		event.preventDefault();
		logoutForm.submit();
	
	})
}
</script>
