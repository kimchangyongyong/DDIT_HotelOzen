<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib uri="http://www.springframework.org/security/tags"
	prefix="security"%>
<link href="${pageContext.request.contextPath}/resources/css/cstmr/intrcn/mbrsh/mbrshView.css" rel="stylesheet">
<script type="text/javascript">
	let auth = false;
</script>
	<security:authorize access="isAuthenticated()">
<script type="text/javascript">
		auth = true;
</script>
	</security:authorize>

<security:authorize access="isAnonymous()">

<script type="text/javascript">
		auth = false;
</script>
</security:authorize>


<section class="${mbsGrdCd }">

	<div class="d-flex justify-content-center">
		<div class="col-md-10">
			<div class="d-flex b-class justify-content-center mt-6">
				<div class="">
					<img src='<c:url value="/resources/assets/img/mbrsh/B${mbsGrdCd }.png"/>' class="mbrsh-card" />
					<div class="row mt-3">
						<div class="col-md-5 card-tax">
							<p class="mt-4 mbsGrdNm">${mbsGrdList[0].mbsGrdCd }</p>
							<p class="mbsGrdAmnt"><fmt:formatNumber value="${mbsGrdList[0].mbsGrdAmnt }" pattern="#,###" />KRW</p>
							<p><button type="button" class="btnLine" onclick="layerPopUp(this.id)" id="B${mbsGrdCd }">
			                      more details
		                      </button></p>
						</div>
						<div class="col-md-6">
	                    <button class="custom-btn btn-6 mt-4" onclick="subLocate(event);" id="${mbsGrdList[0].mbsGrdCd }">
	                    <span>
		                	 구매
	                	 </span>
		                </button>						
						</div>
					</div>
				</div>
				<div class="benetfitPrev" style="margin-right: 0px; margin-top: 60px;">
                    <div class="benetfitPrevList">
                        <span class="tit">객실 숙박권</span>
                        <strong class="tax">
                        	<em>${mbsGrdList[0].accomCouponCnt }</em>
                        	<span class="unit type01">night</span>
                       	</strong>
                        <span class="txt">${mbsGrdList[0].accomCoupon }형 ${mbsGrdList[0].accomCouponCnt }매</span>

                    </div>
                    <div class="benetfitPrevList">
                        <span class="tit">금액 할인권</span>
                        <strong class="tax">
                        	<em>
                        		<fmt:formatNumber value="${mbsGrdList[0].discount }" pattern="#,###" />
                        	</em>
                        </strong>
                        <span class="txt">객실·레스토랑 사용 가능</span>
                    </div>
                    <div class="benetfitPrevList"> 
                        <span class="tit">할인 특전</span>
                        <strong class="tax"><span class="grd-prk">${mbsGrdList[0].mbsGrdPrk }</span></strong>
                        <span class="txt">이용 및 할인권</span>
                        <span class="txt"><em> ${mbsGrdList[0].totalCoupon }매</em> 제공</span>
                    </div>
                </div>
			</div>
			
			
			<div class="b-classmt-5 d-flex justify-content-center" style="display: flex; justify-content: center;"mt-5 d-flex justify-content-center" style="display: flex; justify-content: center;">
				<div class="d-flex second-mbrsh">
				<div class="benetfitPrev" style="margin-left: 0px; margin-top: 60px;">
                    <div class="benetfitPrevList">
                        <span class="tit">객실 숙박권</span>
                        <strong class="tax">
                        	<em>${mbsGrdList[1].accomCouponCnt }</em>
                        	<span class="unit type01">night</span>
                       	</strong>
                        <span class="txt">${mbsGrdList[1].accomCoupon }형 ${mbsGrdList[1].accomCouponCnt }매</span>
                    </div>
                    <div class="benetfitPrevList">
                        <span class="tit">금액 할인권</span>
                        <strong class="tax">
                        	<em>
                        		<fmt:formatNumber value="${mbsGrdList[1].discount }" pattern="#,###" />
                        	</em>
                        </strong>
                        <span class="txt">객실·레스토랑 사용 가능</span>
                    </div>
                    <div class="benetfitPrevList"> 
                        <span class="tit">할인 특전</span>
                        <strong class="tax"><span class="grd-prk">${mbsGrdList[1].mbsGrdPrk }</span></strong>
                        <span class="txt">이용 및 할인권</span>
                        <span class="txt"><em> ${mbsGrdList[1].totalCoupon }매</em> 제공</span>

                    </div>
                </div>				
				<div class="second-card">
					<img src='<c:url value="/resources/assets/img/mbrsh/L${mbsGrdCd }.png"/>' class="mbrsh-card" />
					<div class="row mt-3">
						<div class="col-md-5 card-tax">
							<p class="mt-4 mbsGrdNm">${mbsGrdList[1].mbsGrdCd }</p>
							<p class="mbsGrdAmnt"><fmt:formatNumber value="${mbsGrdList[1].mbsGrdAmnt }" pattern="#,###" />KRW</p>
							<p><button type="button" class="btnLine" onclick="layerPopUp(this.id)" id="L${mbsGrdCd }">
			                      more details
		                      </button></p>						
						</div>
						<div class="col-md-6">
	                    <button class="custom-btn btn-6 mt-4" onclick="location.href='${pageContext.request.contextPath}/mbrsh/subscribe/${mbsGrdList[0].mbsGrdCd }'">
	                    <span>
		                	 구매
	                    </span>
		                </button>						
						</div>
					</div>
				</div>
				</div>
			</div>
			
			
			<div class="d-flex b-class  mt-5 justify-content-center" style="display: flex; justify-content: center;">
				<div class="">
					<img src='<c:url value="/resources/assets/img/mbrsh/D${mbsGrdCd }.png"/>' class="mbrsh-card" />
					<div class="row mt-3">
						<div class="col-md-5 card-tax" >
							<p class="mt-4 mbsGrdNm">${mbsGrdList[2].mbsGrdCd }</p>
							<p class="mbsGrdAmnt"><fmt:formatNumber value="${mbsGrdList[2].mbsGrdAmnt }" pattern="#,###" />KRW</p>
							<p><button type="button" class="btnLine" onclick="layerPopUp(this.id)" id="D${mbsGrdCd }">
			                      more details
		                      </button></p>						
						</div>
						<div class="col-md-6">
	                    <button class="custom-btn btn-6 mt-4" onclick="location.href='${pageContext.request.contextPath}/mbrsh/subscribe/${mbsGrdList[0].mbsGrdCd }'">
	                    <span>
		                	 구매
	                    </span>
		                </button>						
						</div>
					</div>
				</div>
				<div class="benetfitPrev" style="margin-right: 0px; margin-top: 60px;">
                    <div class="benetfitPrevList">
                        <span class="tit">객실 숙박권</span>
                        <strong class="tax">
                        	<em>${mbsGrdList[2].accomCouponCnt }</em>
                        	<span class="unit type01">night</span>
                       	</strong>
                        <span class="txt">${mbsGrdList[2].accomCoupon }형 ${mbsGrdList[2].accomCouponCnt }매</span>

                    </div>
                    <div class="benetfitPrevList">
                        <span class="tit">금액 할인권</span>
                        <strong class="tax">
                        	<em>
                        		<fmt:formatNumber value="${mbsGrdList[2].discount }" pattern="#,###" />
                        	</em>
                        </strong>
                        <span class="txt">객실·레스토랑 사용 가능</span>
                    </div>
                    <div class="benetfitPrevList"> 
                        <span class="tit">할인 특전</span>
                        <strong class="tax"><span class="grd-prk">${mbsGrdList[2].mbsGrdPrk }</span></strong>
                        <span class="txt">이용 및 할인권</span>
                        <span class="txt"><em> ${mbsGrdList[2].totalCoupon }매</em> 제공</span>
                    </div>
                </div>
			</div>
		</div>
	</div>

</section>

<div id="layerPop1" class="layerPop" style="display: none;">
	<div class="layerCont" tabindex="0" style="top: 50%; left: 50%; margin-top: -245.338px; margin-left: -470px;" data-gtm-vis-recent-on-screen36519946_61="1150" data-gtm-vis-first-on-screen36519946_61="1150" data-gtm-vis-total-visible-time36519946_61="100" data-gtm-vis-has-fired36519946_61="1">
		<div class="compLayer" data-gtm-vis-has-fired36519946_61="1">
            <h2 class="compTit" data-gtm-vis-has-fired36519946_61="1">오젠 멤버십 구매</h2>
            <div class="membershipInfoArea" data-gtm-vis-has-fired36519946_61="1">                
                <div class="membershipInfo" data-gtm-vis-has-fired36519946_61="1">
                    <span class="tit" data-gtm-vis-has-fired36519946_61="1">아직 회원이 아니신가요?</span>
                    <span class="txt" data-gtm-vis-has-fired36519946_61="1">회원이 아닌 경우, 신규 회원가입 후 멤버십 구매가 가능합니다.</span>
                    <a href="${pageContext.request.contextPath }/auth/join/terms.do" class="btnSC btnM" data-gtm-vis-has-fired36519946_61="1">회원가입</a>
                </div>
                <div class="membershipInfo" data-gtm-vis-has-fired36519946_61="1">
                    <span class="tit" data-gtm-vis-has-fired36519946_61="1">이미 회원이신가요?</span>
                    <span class="txt" data-gtm-vis-has-fired36519946_61="1">로그인 시 바로 멤버십 구매가 가능합니다.</span>
                    <a href="${pageContext.request.contextPath }/auth/Login.do" class="btnSC btnM active" data-gtm-vis-has-fired36519946_61="1">로그인</a>
                </div>
            </div>
		</div>
		<button type="button" class="btn-close btnClose" onclick="fncCancel()" data-gtm-vis-has-fired36519946_61="1">닫기</button>
	</div>
</div>

<div id="layerPop2" class="layerPop" style="display: none;">
	<div class="layerCont" style="top: 50%; left: 50%; margin-top: -375.438px; margin-left: -540px;" tabindex="" data-gtm-vis-has-fired36519946_61="1">
		<div class="membershipConsult" data-gtm-vis-has-fired36519946_61="1">
			<h2 class="compTit" data-gtm-vis-has-fired36519946_61="1">멤버십 상담신청</h2>
			<div class="designScroll" style="height: 465px; width: 100%; overflow: hidden;" data-gtm-vis-has-fired36519946_61="1"><div class="scrollWrap" tabindex="0" style="margin-right: -25px; overflow-y: scroll; padding-right: 40px; box-sizing: border-box;" data-gtm-vis-has-fired36519946_61="1"><div class="customScrollBox" data-gtm-vis-has-fired36519946_61="1">
				<div class="frmInfo" data-gtm-vis-has-fired36519946_61="1">
					<ul class="intList" data-gtm-vis-has-fired36519946_61="1">
						<!-- 20200602 수정 -->
						<!-- 국문 -->
						<li id="koLang" data-gtm-vis-has-fired36519946_61="1">
							<div class="intWrap" data-gtm-vis-has-fired36519946_61="1"><span class="tit" data-gtm-vis-has-fired36519946_61="1"><label for="eName" data-gtm-vis-has-fired36519946_61="1">KOREAN NAME</label><span class="essential" data-gtm-vis-has-fired36519946_61="1">필수</span></span></div>
							<div class="intInner duobuleInp" data-gtm-vis-has-fired36519946_61="1">
								<span class="intArea" data-gtm-vis-has-fired36519946_61="1"><input type="text" id="korNm" style="width:437px" aria-required="true" placeholder="국문 이름을 입력하세요." onkeyup="gfncOnlyKorNm(this);;" data-gtm-vis-has-fired36519946_61="1"></span>
								<span class="alertMessage" data-gtm-vis-has-fired36519946_61="1" style="display: none;">이름을 입력해주세요.</span>
							</div>
						</li>
						<li id="otherLang" data-gtm-vis-has-fired36519946_61="1"></li>
						<li data-gtm-vis-has-fired36519946_61="1">
							<div class="intWrap" data-gtm-vis-has-fired36519946_61="1"><span class="tit" data-gtm-vis-has-fired36519946_61="1"><label for="phone02" data-gtm-vis-has-fired36519946_61="1">PHONE NUMBER</label><span class="essential" data-gtm-vis-has-fired36519946_61="1">필수</span></span></div>
							<div class="intInner phoneInp" data-gtm-vis-has-fired36519946_61="1">
								<span class="intArea" data-gtm-vis-has-fired36519946_61="1"><input type="text" id="idPhone1" style="width:165px" aria-required="true" onkeyup="this.value=this.value.replace(/[^0-9]/g, '');" maxlength="3" data-gtm-vis-has-fired36519946_61="1"></span>
								<span class="dash" data-gtm-vis-has-fired36519946_61="1"></span>
								<span class="intArea" data-gtm-vis-has-fired36519946_61="1"><input type="text" id="idPhone2" style="width:165px" aria-required="true" onkeyup="this.value=this.value.replace(/[^0-9]/g, '');" maxlength="4" data-gtm-vis-has-fired36519946_61="1"></span>
								<span class="dash" data-gtm-vis-has-fired36519946_61="1"></span>
								<span class="intArea" data-gtm-vis-has-fired36519946_61="1"><input type="text" id="idPhone3" role="last" style="width:165px" aria-required="true" onkeyup="this.value=this.value.replace(/[^0-9]/g, '');" maxlength="4" data-gtm-vis-has-fired36519946_61="1"></span>
								<span class="alertMessage" data-gtm-vis-has-fired36519946_61="1" style="display: none;">휴대폰 번호를 입력해주세요.</span>
							</div>
							<p class="txtGuide" data-gtm-vis-has-fired36519946_61="1">전화 번호는 상담 가능한 연락처를 기입해주세요.</p>
						</li>
						<!-- //다국어 -->
						<!-- //20200602 수정 -->
						<li data-gtm-vis-has-fired36519946_61="1">
							<div class="intWrap" data-gtm-vis-has-fired36519946_61="1"><span class="tit" data-gtm-vis-has-fired36519946_61="1"><label for="cardType" data-gtm-vis-has-fired36519946_61="1">Available Times</label></span></div>
							<div class="intInner" data-gtm-vis-has-fired36519946_61="1">
								<div class="intArea selectWrap" style="width:617px" first="true" data-gtm-vis-has-fired36519946_61="1">
									<select id="availableTime" name="availableTime" data-height="150px" data-msg="상담 가능 시간을 선택해주세요." data-direction="down" title="상담시간선택" style="display: none;" data-gtm-vis-has-fired36519946_61="1"><option value="" hidden="" selected="" data-gtm-vis-has-fired36519946_61="1">상담 가능 시간을 선택해주세요.</option>
										<option value="오전 오후 모두 가능" data-gtm-vis-has-fired36519946_61="1">오전 오후 모두 가능</option>
										<option value="오전 9:00~12:00" data-gtm-vis-has-fired36519946_61="1">오전 9:00~12:00</option>
										<option value="오후 13:00~16:00" data-gtm-vis-has-fired36519946_61="1">오후 13:00~16:00</option>
										<option value="오후 16:00~18:00" data-gtm-vis-has-fired36519946_61="1">오후 16:00~18:00</option>
									</select><button tabindex="0" id="availableTime-button" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-owns="availableTime-menu" aria-haspopup="true" title="상담시간선택" class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget" type="button" data-gtm-vis-has-fired36519946_61="1" aria-activedescendant="ui-id-1" aria-labelledby="ui-id-1" aria-disabled="false"><span class="ui-selectmenu-text">상담 가능 시간을 선택해주세요.</span></button>
								<div class="ui-selectmenu-menu ui-front" data-gtm-vis-has-fired36519946_61="1"><div class="tweenDiv" data-gtm-vis-has-fired36519946_61="1"><ul aria-hidden="true" aria-labelledby="availableTime-button" id="availableTime-menu" role="listbox" tabindex="0" class="ui-menu ui-corner-bottom ui-widget ui-widget-content" style="max-height: 150px;" data-gtm-vis-has-fired36519946_61="1" aria-activedescendant="ui-id-1" aria-disabled="false"><li class="ui-menu-item" style="display: none;"><a id="ui-id-1" tabindex="-1" role="option" class="ui-menu-item-wrapper ui-state-active">상담 가능 시간을 선택해주세요.</a></li><li class="ui-menu-item"><a id="ui-id-2" tabindex="-1" role="option" class="ui-menu-item-wrapper">오전 오후 모두 가능</a></li><li class="ui-menu-item"><a id="ui-id-3" tabindex="-1" role="option" class="ui-menu-item-wrapper">오전 9:00~12:00</a></li><li class="ui-menu-item"><a id="ui-id-4" tabindex="-1" role="option" class="ui-menu-item-wrapper">오후 13:00~16:00</a></li><li class="ui-menu-item"><a id="ui-id-5" tabindex="-1" role="option" class="ui-menu-item-wrapper">오후 16:00~18:00</a></li></ul></div></div></div>
							</div>
							<p class="txtGuide" data-gtm-vis-has-fired36519946_61="1">상담가능 시간은 편의를 위한 선택사항이며, 선택한 시간과 다를 수 있습니다.</p>
							<p class="txtGuide" data-gtm-vis-has-fired36519946_61="1">멤버십 관련 문의 및 상담은 회원관리과 운영시간(AM 09:00 ~ PM 05:30)에만 진행됩니다.</p>
							
						</li>
					</ul>
				</div>

				<h3 class="titDep3" data-gtm-vis-has-fired36519946_61="1">개인정보 수집 및 이용에 관한 동의</h3>
				<ul class="toggleList agreeCont" data-gtm-vis-has-fired36519946_61="1">
					<li class="toggleOn" data-gtm-vis-has-fired36519946_61="1">
						<span class="frm type02" data-gtm-vis-has-fired36519946_61="1">
							<input type="checkbox" id="privacyAgree" value="Y" data-gtm-vis-has-fired36519946_61="1"><label for="privacyAgree" data-gtm-vis-has-fired36519946_61="1">[필수]개인정보 수집 · 이용 동의</label>
						</span>
						<button type="button" class="btnToggle" data-gtm-vis-has-fired36519946_61="1"><span class="hidden" data-gtm-vis-has-fired36519946_61="1">상세내용 닫기</span></button><!-- 버튼 클릭 시 li에 toggleOn 클래스 추가되면서 toggleCont 펼쳐짐 -->
						<div class="toggleCont" style="display: block;" data-gtm-vis-has-fired36519946_61="1">
							<div class="toggleInner" data-gtm-vis-has-fired36519946_61="1">
								<!-- 20200806 수정 : 약관(추가) -->
								<p class="notiTxt" data-gtm-vis-has-fired36519946_61="1">
									
									조선호텔앤리조트는 클럽조선 회원가입과 관련하여 아래와 같은 개인정보를 수집 및 이용하고 있습니다.<br data-gtm-vis-has-fired36519946_61="1">개인정보 처리에 대한 상세한 사항은 조선호텔앤리조트 홈페이지의 ‘개인정보처리방침’을 참조하십시오.
								</p>
								<p class="notiTxt" data-gtm-vis-has-fired36519946_61="1">
									
									본 개인정보 수집 및 이용 동의서의 내용과 상충되는 부분은 본 동의서의 내용이 우선합니다.
								</p>
								<table class="tblH" data-gtm-vis-has-fired36519946_61="1">
									<colgroup data-gtm-vis-has-fired36519946_61="1"><col style="width:33%" data-gtm-vis-recent-on-screen36519946_61="1865" data-gtm-vis-first-on-screen36519946_61="1865" data-gtm-vis-total-visible-time36519946_61="100" data-gtm-vis-has-fired36519946_61="1"><col style="width:34%" data-gtm-vis-has-fired36519946_61="1"><col style="width:auto" data-gtm-vis-has-fired36519946_61="1"></colgroup>
									<caption data-gtm-vis-has-fired36519946_61="1">개인정보수집 및 이용에 대한 동의 목록</caption>
									<thead data-gtm-vis-has-fired36519946_61="1">
										<tr data-gtm-vis-has-fired36519946_61="1">
											<th scope="col" data-gtm-vis-has-fired36519946_61="1">수집 항목</th>
											<th scope="col" data-gtm-vis-has-fired36519946_61="1">수집 목적</th>
											<th scope="col" data-gtm-vis-has-fired36519946_61="1">보유 기간</th>
										</tr>
									</thead>
									<tbody data-gtm-vis-has-fired36519946_61="1">
										<tr data-gtm-vis-has-fired36519946_61="1">
											<th scope="row" class="tcenter" data-gtm-vis-has-fired36519946_61="1">이름, 휴대폰번호</th>
											<td data-gtm-vis-has-fired36519946_61="1">서비스 이용자 식별 및 의사소통</td>
											<td class="f18" data-gtm-vis-has-fired36519946_61="1">상담신청 접수 후 3년</td>
										</tr>
									</tbody>
								</table>
								<p class="txtGuide" data-gtm-vis-has-fired36519946_61="1">
									
									위의 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으나 동의를 거부하실 경우 서비스 이용이 불가합니다.
								</p>				
								<!-- //20200806 수정 : 약관(추가) -->
							</div>
						</div>
					</li>
				</ul>
			</div><div class="scrollbar-wrap" style="height: 465px;" data-gtm-vis-has-fired36519946_61="1"><div class="scrollbar" style="height: 148.333px; top: 0px;" data-gtm-vis-has-fired36519946_61="1"></div></div></div></div>
			<div class="btnArea" data-gtm-vis-has-fired36519946_61="1">
				<button type="button" class="btnSC btnM" onclick="fncCancel2();" data-gtm-vis-has-fired36519946_61="1">취소</button>
				<button type="button" class="btnSC btnM active" onclick="fncRegist();return false;" data-gtm-vis-has-fired36519946_61="1">상담 예약</button>
			</div>
		</div>
		<button type="button" class="btn-close btnClose" onclick="fncCancel2();" aria-label="Close">닫기</button>
	</div>
</div>
<div id="dimmed" class="dimmed" style="display: none;"></div>
<script>
	
	const cPath = document.body.dataset.contextPath;

	let section = document.querySelector('section')
	
	let sectionClass = section.classList;
	
	if (sectionClass.contains('BLUE')) {
		
		section.style.backgroundColor = "#5f8395";
		
	} else if (sectionClass.contains('GREEN')) {
		
		section.style.backgroundColor = "#427f63";
		
	} else if (sectionClass.contains('RED')) {
		
		section.style.backgroundColor = "#7f4242";
		
	} else if (sectionClass.contains('BLACK')) {
		
		section.style.backgroundColor = "#4f4f5f";
		
	}else{
		window.location.href = cPath + "/error/404"
	}
</script>
<script src="<c:url value='/resources/js/app/cstmr/intrcn/mbrsh/mbrshView.js'/>"></script>