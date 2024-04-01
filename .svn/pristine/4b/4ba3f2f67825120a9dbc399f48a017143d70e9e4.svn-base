<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/security/tags"
	prefix="security"%>
	
<link href="${pageContext.request.contextPath}/resources/css/common/btn.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/resources/css/cstmr/myinfo/mypage.css" rel="stylesheet">

<section>
	<div>
		<div class="clickwrap-header mx-10 mb-6">
			<h1 class="cstmr-title mx-5">
				<a href="#" onclick="myPageHome()">My Page</a>
			</h1>
		</div>
	</div>
	<div style="width:1500px">
	
	<div class="row flex-center mypage-contain">
		
			<div class="col-md-2 mypage-side"> 
				<div class="myinfo">
					<p class="name">${mberUser.cst.cstNm }님</p>
					<div class="info">
						<a href="/mypage/myPointForm.do">
						    <span class="tit">포인트</span>
						    <span class="txt"><abbr title="Point">Point</abbr></span>
						</a>
						<a href="/mypage/myCouponaForm.do">
						    <span class="tit">쿠폰</span>
					        <span id="couponCntDiv" class="txt"></span>
					    </a>
					</div>
				</div>
				<ul class="lnb">
					<li>개인정보관리
						<ul>
							<li>
								<a href="#" onclick="updateForm()"> 회원 정보 수정 </a>  
							</li>
							<li><a href="/mypage/pwChngForm.do">비밀번호 변경</a></li>
							<li><a href="/mypage/withdraPwCfmForm.do">회원 탈퇴</a></li>
						</ul>
					</li>
					<li id="mbrshp1">멤버십확인
						<ul>
							<li><a href="#" onclick="loadMbrsh()">멤버십 가입 내역</a></li>
						</ul>
						</li>
						<li>예약확인
						<ul>
						    <li><a href="/cnfirm/mber/room/reserveList.do">객실 예약 내역</a></li>
					    </ul>
						</li>
						<li>관심 리스트
						<ul>
						    <li><a href="/mber/interest/roomList.do">렌트카 </a></li>
							<li><a href="/mber/interest/packageList.do">부대시설</a></li>
					    </ul>
					</li>
				</ul>
			</div>
			
			<div class="col-md-8 mx-4" id="mypage-content"> 
				<div class="myAccountBox">
					<div class="myAccountInfo">
	                  <dl>
	                      <dt>
	                      멤버십
		                      <span class="side">
			                      <button type="button" class="btnLine" onclick="">
			                      멤버십 혜택
			                      </button>
		                      </span>
	                      </dt>
	                      <dd><span class="accountNum">멤버십 여부</span></dd>
	                  </dl>
						<dl>
							<dt>
								<a href="/mypage/myPointForm.do" class="btnArr">
									
								포인트&nbsp<span class="fas fa-chevron-right fs-10"></span>
								</a>
							</dt>
							<dd>
								<span class="usablePoint">포인트</span>
								<p class="txtGuide"></p>
							</dd>
						</dl>
					</div>
	            </div>
	            <div class="myCouponBox">
                        <dl>
                            <dt>발급 쿠폰</dt>
                            <dd><em>11</em></dd>
                        </dl>
                        <dl>
                            <dt>사용 쿠폰</dt>
                            <dd><a href="/mypage/myCouponeForm.do" title="사용 쿠폰함 바로가기"><em>0</em></a></dd>
                        </dl>
                        <dl>
                            <dt>잔여 쿠폰</dt>
                            <dd><a href="/mypage/myCouponaForm.do" title="잔여 쿠폰함 바로가기"><em class="pointTxt">11</em></a>
                        </dl>
				</div>
				<ul class="membershipCashList">
                  <li class="noData">
                      <p class="txt">
                          예약 내역이 없습니다.<br>조선호텔앤리조트의 다양한 상품을 예약해보세요.
                      </p>
                  </li>
               </ul>
			</div>
		</div>
	</div>
</section>

<script src="<c:url value='/resources/js/app/cstmr/myinfo/mypage.js'/>"></script>
