<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<link
	href="${pageContext.request.contextPath}/resources/css/cstmr/rsvt/rsvtStep03.css"
	rel="stylesheet">
<link
	href="${pageContext.request.contextPath}/resources/css/common/select2-bootstrap-5-theme.min.css"
	rel="stylesheet">
<link
	href="${pageContext.request.contextPath}/resources/css/common/select2.min.css"
	rel="stylesheet">
<script type="text/javascript"
	src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
<script defer
	src="<c:url value='/resources/js/app/common/jquery.min.js'/>"></script>
<script defer
	src="<c:url value='/resources/js/app/common/select2.min.js'/>"></script>
<script defer
	src="<c:url value='/resources/js/app/common/select2.full.min.js'/>"></script>
<script defer
	src="<c:url value='/resources/js/app/cstmr/rsvt/rsvtStep03.js'/>"></script>



<section>
	<div class=" mt-8 inner">
		<form:form id="submitForm" method="post"
			action="${pageContext.request.contextPath}/cstmr/rsvt/rsvtNber">
			<div class=" d-flex">
				<div class="wid-900">
					<div class="mb-7">
						<h1 class="title-35 font-jung">RESERVATION INFORMATION</h1>
					</div>
					<div>
						<label class="label-font ">RESERVATION NAME</label>
					</div>
					<div class="mb-6 d-flex">
						<input class=" input-phone wd-170 bor-none mar-right" type="text"
							data-valid="Y" aria-required="true" name="cstNm" value="">
						<select class="bor-none  wd-170" name="cstGen">
							<option>성별</option>
							<option>MALE</option>
							<option>FEMALE</option>
						</select>
					</div>
					<div>
						<label class="label-font">BIRTH DATE</label>
					</div>
					<div></div>
					<div>
						<label class="label-font">PHONE NUMBER</label>
					</div>
					<div class="d-flex mb-6">

						<input class="input-phone wd-145 bor-none" type="text"
							data-valid="Y" aria-required="true" id="hp1"
							value="${realMber.cst.cstHp.substring(0,3)}"> <span>-</span>
						<input class="input-phone wd-145 bor-none" type="text"
							data-valid="Y" aria-required="true" id="hp2"
							value="${realMber.cst.cstHp.substring(4,8)}"> <span>-</span>
						<input class="input-phone wd-145 bor-none" type="text"
							data-valid="Y" aria-required="true" id="hp3"
							value="${realMber.cst.cstHp.substring(9,13)}">
					</div>
					<div>
						<label class="label-font">E-MAIL</label>
					</div>
					<div class="d-flex mb-6 form-group">

						<input class="input-phone wd-170 bor-none" type="text"
							data-valid="Y" aria-required="true"
							value="${realMber.cst.cstMail.split("@")[0]}" id="email-front">
						<span>@</span> 
						<input
							class="input-phone wd-170 bor-none mar-right" type="text"
							data-valid="Y" aria-required="true" id="email-end"
							value="${realMber.cst.cstMail.split("@")[1]}""> <select
							class="bor-none  wd-170">
							<option>직접 입력</option>
							<option>naver.com</option>
							<option>google.com</option>
							<option>daum.net</option>
							<option>hanmail.net</option>
							<option>hotmail.com</option>
							<option>nate.com</option>
						</select>
					</div>

					<label class="can-sty mb-0">취소 규정</label>

					<div class="accordion container mb-5" style="padding-left: 0px;"
						id="accordionExample">
						<div class="">
							<h2 class="accordion-header" id="heading1">
								<button class="accordion-button wid-870 font-gray" type="button"
									data-bs-toggle="collapse" data-bs-target="#collapse1"
									aria-expanded="true" aria-controls="collapse1">[필독] 취소
									규정에 동의합니다.</button>
							</h2>
							<div class="accordion-collapse collapse show" id="collapse1"
								aria-labelledby="heading1" data-bs-parent="#accordionExample">
								<div class="">
									<div class="btn-refnd wid-870">
										<table class=" font-gray">
											<tr>
												<th class="refnd-th">체크인 3일전</th>
												<td class="refnd-td">위약금 없이 취소 가능</td>
											</tr>
											<tr>
												<th class="refnd-th">체크인 1일전</th>
												<td class="refnd-td">위약금 50% 발생</td>
											</tr>
											<tr>
												<th class="refnd-th">체크인 당일</th>
												<td class="refnd-td">위약금 100% 발생 및 취소</td>
											</tr>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<c:set var="roomAmnt" value="${roomType.rmtype.rmtAmnt}" />
				<c:set var="rsvtRoomCnt" value="${rsvtRmtMap.rsvtRoomCnt}" />
				<c:set var="rsvtDay" value="${rsvtRmtMap.rsvtDay}" />
				<c:set var="totalAmnt" value="${roomAmnt * rsvtRoomCnt * rsvtDay}" />
				<div>
					<c:forEach var="i" begin="1" end="${rsvtRmtMap.rsvtRoomCnt}">
						<div class="r-box">

							<h5 class="mb-2">객실1</h5>

							<h2 class="rsvt-title mb-4">
								<fmt:formatNumber value="${roomAmnt * rsvtDay}" pattern="#,###" />
								원
							</h2>


							<table class="rs-body">
								<tr>
									<td>1박</td>
									<th><fmt:formatNumber value="${roomType.rmtype.rmtAmnt}"
											pattern="#,###" />원</th>
								</tr>
							</table>
						</div>
					</c:forEach>
					<div class="d-flex mt-5 rs-fo">
						<h5 class="py-cus">총 예약금액</h5>
						<h2 class="rsvt-cost">

							<fmt:formatNumber value="${totalAmnt}" pattern="#,###" />
							원
						</h2>
					</div>
					<button class="btn btn-outline-dark rsv-btn mb-1 mt-3"
						type="button" onclick="javascript:inicis()" id="submitBtn">예약하기</button>
				</div>
			</div>
			<input type="hidden" value="" name="cstMail" id="cstMail">
			<input type="hidden" value="" name="cstHp" id="cstHp">
		</form:form>
	</div>

</section>


<script type="text/javascript">
IMP.init('imp84350861');

function inicis() {
    IMP.request_pay({
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: IMP.makeMerchantUid, // Example: order_no_0001
        name: 'Ozen Hotel',
        amount: 100,
        buyer_email: '${realMber.cst.cstMail}',
        buyer_name: '${realMber.cst.cstNm}',
        buyer_tel: '${realMber.cst.cstHp}',
        buyer_addr: '',
        buyer_postcode: '123-456'
        // m_redirect_url: '{Mobile only - URL to redirect to after payment approval}' // Example: https://www.my-service.com/payments/complete/mobile
    }, function (resp) {
        console.log(resp);
        if (resp.success) {
            const data = new FormData();
           
            data.append('setleImpUid', resp.imp_uid);
            data.append('setleCardNm', resp.card_name);
            data.append('setleCardNumber', resp.card_number);
            data.append('setleMerchantUid', resp.merchant_uid);
            data.append('setlePayMethod', resp.pay_method);
       
            console.log(data);
            
            fetch('${pageContext.request.contextPath}/cstmr/rsvt/rsvtSetle', {
                method: 'POST',
                headers: {
                    'accept': 'application/json; charset=utf8'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(result => {
                    // 서버 응답에 대한 처리
                    console.log(result);
                    combine();
            		$("#submitForm").submit();
            		console.log("전송");
            		window.location.href="${pageContext.request.contextPath}/cstmr/rsvt/rsvtStep03";
                })
                .catch(error => {
                    // 에러 처리
                    console.error('There was a problem with the fetch operation:', error);
                });
            
        }
    });
}
</script>

<script defer
	src="<c:url value='/resources/js/app/cstmr/rsvt/rsvtStep03.js'/>"></script>