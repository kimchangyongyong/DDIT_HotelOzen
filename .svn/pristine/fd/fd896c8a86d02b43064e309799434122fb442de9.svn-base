<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<link
	href="${pageContext.request.contextPath}/resources/css/cstmr/recom/recomSbrs.css"
	rel="stylesheet">

<section>
	<div>
		<div class="location-header mx-10">
			<h1 class="cstmr-title mx-5">추천</h1>
			<p class="cstmr-content mx-5 mb-5">호텔 오젠 추천</p>
		</div>
	</div>
	<div class="container recom-table text-center mb-5">
		<div class="btn-group btn-group-lg container text-center" role="group"
			aria-label="...">
			<a href="${pageContext.request.contextPath}/recom/recomCar" class="btn btn-outline-dark mb-1 " id="recomCar" type="button">렌터카추천</a>
			<a href="${pageContext.request.contextPath}/recom/recomSbrs" class="btn btn-outline-dark mb-1 btn-dark text-white" id="recomSbrs" type="button">부대시설추천</a>
		</div>
	</div>
	
	<c:forEach items="${recomSbrsList}" var="recomSbrs" varStatus="loop">
	<div class="card mb-3 container recom-table">
		<div class="card-header d-flex align-items-center">
		
			<div class="recom-div">
				<div class="col-auto">
					<div class="card mt-3 mb-3 container">
						<div class="card-header">
							<div class="card-img-top col-5">
								<img
									src="${pageContext.request.contextPath}/resources/assets/img/sbrs/${recomSbrs.sbrsCd }.jpg"
									alt="ben" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mx-3">
				${recomSbrs.sbrsDetail }
			</div>
			
			<div class="wish-area" data-sbrscd="${recomSbrs.sbrsCd }">
                <i class="bi bi-heart" id="heartIcon${loop.index}"></i>
            </div>

            <script>
            document.addEventListener('DOMContentLoaded', function () {
                const icon = document.getElementById(`heartIcon${loop.index}`);
                const sbrsCd = icon.parentElement.dataset.sbrscd;

                // 함수를 사용하여 서버에서 아이콘 상태를 가져오는 코드
                function getIconStateFromServer() {
                    // 실제로는 서버로 Ajax 요청을 보내어 아이콘 상태를 가져와야 합니다.
                    // 아래의 URL은 예시일 뿐, 실제 백엔드 URL로 변경해야 합니다.
                    const getIconStateUrl = `${pageContext.request.contextPath}/recom/getIconState?sbrsCd=${sbrsCd}`;

                    return $.ajax({
                        url: getIconStateUrl,
                        method: "GET",
                        dataType: "json"
                    });
                }

                // 클라이언트 로딩 시 서버에서 아이콘 상태를 가져와서 설정
                getIconStateFromServer()
                    .then((result) => {
                        if (result.isSbrsExist) {
                            icon.classList.remove('bi-heart');
                            icon.classList.add('bi-heart-fill');
                        } else {
                            icon.classList.remove('bi-heart-fill');
                            icon.classList.add('bi-heart');
                        }
                    })
                    .catch((error) => {
                        console.error("Error getting icon state:", error);
                    });

                icon.addEventListener('click', function () {
                    if (icon.classList.contains('bi-heart')) {
                        icon.classList.remove('bi-heart');
                        icon.classList.add('bi-heart-fill');
                        var data = { 'sbrsCd': sbrsCd };
                        $.ajax({
                            url: "${pageContext.request.contextPath}/recom/insertSbrs",
                            method: "POST",
                            data: data,
                            dataType: "json",
                            success: function (jsonObj) {
                                icon.classList.add('bi-heart-fill');
                                alert(`${sbrsCd} 나의 관심목록에 추가되었습니다.`);

                                // 추가한 관심목록을 로컬 스토리지에 저장하는 코드
                                const myFavorites = getLocalStorageItem('myFavorites') || '';
                                localStorage.setItem('myFavorites', `${myFavorites},${sbrsCd}`);
                            },
                            error: function (jqXHR, txt, status) {
                                console.log(txt, status, jqXHR);
                            }
                        });
                    } else {
                        icon.classList.remove('bi-heart-fill');
                        icon.classList.add('bi-heart');
                    }

                    console.log('sbrsCd : ', sbrsCd);
                });

                // 로컬 스토리지에서 값을 읽어오는 코드
                function getLocalStorageItem(key) {
                    return localStorage.getItem(key);
                }
            });
			</script>
            
		</div>
	</div>
	</c:forEach>
</section>
