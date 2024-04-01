<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<link href="${pageContext.request.contextPath}/resources/css/cstmr/intrcn/mbrsh/subscribe.css" rel="stylesheet">

<section>
	<div>
		<div class="notice-header">
			<h1 class="cstmr-title mx-6">MEMBERSHIP</h1>
			<p class="cstmr-content mx-6 mb-5">호텔 오젠의 멤버십을 소개합니다.</p>
		</div>
	</div>

<div class="inner">
		<div class="rsvRoomWrap">
             <div class="lCont">
                 <h2 class="titDep2">가입할 멤버십 이름</h2>
				<div style="display: inline-block;" id="subDay"></div>&nbsp;-&nbsp;
				<div style="display: inline-block;" id="expDay"></div>	(1년간)
                 <div class="myContents mt-4">
                 	<div class="defaultTit ">MY INFORMATION</div>
					<ul class="defaultInfo">
                        <li>
                            <p>가입자명 / 가입자 연락처 / yeon6568@naver.com</p>
                            <p>
                            	[자택] 대전 동구 판암동 497-7 어진마을아파트 104동 104호
                            </p>
                        </li>
                    </ul>
                    <p class="txtGuide">전화번호 및 주소, 이메일 등 개인 정보 변경을 원하시면 '바로가기' 버튼을 통해 'My page'에서 변경 가능합니다.
                    </p>
                    <button type="button" class="btnLine" onclick="location.href='${pageContext.request.contextPath}/myinfo/mypage.do';">바로가기</button>
                 	<!-- //멤버십 구입 정보 -->
                 
                 	<!-- 이용 동의 -->
					<h3 class="titDep3">이용 약관</h3>
					<ul class="toggleList agreeCont">
                        <li class="toggleOn">
                            <span class="frm type02">
	                            <input type="checkbox" id="agree1"><label for="agree1">[필수] 본인 사용 규정</label>
	                        </span>
                            <div class="toggleCont" style="display: block;">
                                <div class="toggleInner">
									<div class="designScroll">
										<div class="scrollWrap" style="">
											<div class="customScrollBox">
												멤버십 카드는 회원 본인에 한해 사용 가능하며, 타인에게 대여, 양도할 수 없습니다.<br> 본
												규정을 위반한 경우 이로 인해 발생하는 회원의 불이익에 대해 호텔은 그 책임이 없으며, <br>
												호텔의 판단에 의해 회원 자격 정지 등의 불이익을 받을 수 있습니다.
											</div>
										</div>
									</div>
								</div>
                            </div>
                        </li>
						<li class="toggleOn">
	                        <span class="frm type02"> 
	                        	<input type="checkbox" id="cancelAgree">
								<label for="cancelAgree" class="cancelAgree">[필수] 클럽조선 VIP 취소 규정</label>
							</span>
							<div class="toggleCont" style="display: block;">
								<div class="toggleInner">
									<div class="designScroll">
										<div class="scrollWrap" style="">
											<div class="customScrollBox">
												멤버십 카드 및 혜택 이용 실적이 없는 회원에 한해 멤버십 연회비 결제일 기준 14일 이내에 환불을 요청할 수 있습니다. 
												<br> 
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>

                     </ul>
                 </div>
            </div>
            
			<!-- 결제 상자 -->
			<div class="rCont floating" style="transition: margin-top 0.3s ease-out 0s;">
				<ul class="toggleList rsvList">
					<li>
						<strong class="listTit">
							멤버십 연회비
							<span class="price mt-2">
								<em>750,000 KRW</em></span>
						</strong>
					</li>
				</ul>
				<div class="totalCont">
					<div class="totalPrice">
						<span class="txt">총 결제금액</span>
						<span class="price"><em>750,000 KRW</em></span>
					</div>
					<div class="btnArea row">
						<div>
							<button class="col-md-4 custom-btn btn-6 mt-4" onclick="location.href='${pageContext.request.contextPath}/mbrsh'"><span>취소</span></button>
							<button class="col-md-4 custom-btn btn-6 mt-4">구매하기</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</section>

<script src="<c:url value='/resources/js/app/cstmr/intrcn/mbrsh/subscribe.js'/>"></script>