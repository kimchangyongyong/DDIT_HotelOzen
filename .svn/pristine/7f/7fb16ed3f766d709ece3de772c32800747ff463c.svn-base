<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<link
	href="${pageContext.request.contextPath}/resources/css/cstmr/myinfo/updateInfo.css"
	rel="stylesheet">
	

<div class="mypage-detail-title">
	개인정보 수정 페이지
</div>

<div class="mypage-contain mx-4 mt-4">
	<div class="frmInfo">
		<ul class="intList">
			<li>
				<div class="defaultTit">MY INFORMATION</div>
				<div class="defaultInfo">김승연/1999.08.04/ 여자</div>
			</li>

			<li>
				<div class="intWrap">
					<span class="tit"><label for="phone">PHONE NUMBER</label><span
						class="essential">필수</span></span>
				</div>
				<div class="intInner phoneInp">
					<span class="intArea"><input type="text" id="telFrstNo"
						name="telFrstNo" title="first phone number" style="width: 165px"
						aria-required="true" readonly="" value="010"></span> <span
						class="dash"></span> <span class="intArea"><input
						type="text" id="telMidNo" name="telMidNo"
						title="second phone number" style="width: 165px"
						aria-required="true" readonly="" value="6568"></span> <span
						class="dash"></span> <span class="intArea"><input
						type="text" id="telIndNo" name="telIndNo"
						title="last phone number" style="width: 165px"
						aria-required="true" readonly="" value="3252"></span>
				</div>
			</li>
			<li class="intList-address">
				<div class="intWrap">
					<span class="tit"><label for="address">Address</label><span
						class="essential">필수</span></span>
				</div>
				<div class="intBox"></div>
				<div class="intInner">
					<span class="intArea"><input type="text" id="postcode"
						name="postcode" style="width: 305px" aria-required="true"
						readonly="" value="34672"></span>
					<button type="button" class="btnSC btnM"
						onclick="execDaumPostcode();">
						<!-- 우편번호 검색 -->
						우편번호 검색
					</button>
				</div>
				<div class="intInner duobuleInp">
					<span class="intArea"><input type="text" id="address"
						name="address" style="width: 400px" title="주소"
						aria-required="true" value="대전 동구 판암동 497-7"></span> <span
						class="intArea"><input type="text" id="detailAddress"
						name="detailAddress" style="width: 400px" title="상세주소"
						aria-required="true" value="어진마을아파트 104동 104호"></span> 
				</div>
			</li>
			<li>
				<div class="intWrap">
					<span class="tit"><label for="eMail">E-MAIL</label><span
						class="essential">필수</span></span>
				</div>
				<div class="intInner emailInp">
					<span class="intArea"><input type="text" id="email1"
						name="email1" style="width: 200px" aria-required="true"
						value="yeon6568"></span> <span class="dash">@</span> <span
						class="intArea"><input type="text" id="email2"
						name="email2" style="width: 200px" aria-required="true"
						title="이메일주소직접입력" value="naver.com"></span>
					<div class="intArea selectWrap" style="width: 244px" first="true">

					<select id="mailAddrSelect"  class="bor-none wd-170 mx-2">
						<option value="" label="직접 입력"/>
						<option value="naver.com" label="naver.com"/>
						<option value="google.com" label="google.com"/>
						<option value="daum.net" label="daum.net"/>
						<option value="hanmail.net" label="hanmail.net"/>
						<option value="hotmail.com" label="hotmail.com"/>
						<option value="nate.com" label="nate.com"/>
					</select>
					
						<button tabindex="0" id="emailType-button" role="combobox"
							aria-expanded="false" aria-autocomplete="list"
							aria-owns="emailType-menu" aria-haspopup="true"
							class="ui-selectmenu-button ui-selectmenu-button-closed ui-corner-all ui-button ui-widget"
							type="button">
						</button>
						<div class="ui-selectmenu-menu ui-front">
							<div class="tweenDiv">
								<ul aria-hidden="true" aria-labelledby="emailType-button"
									id="emailType-menu" role="listbox" tabindex="0"
									class="ui-menu ui-corner-bottom ui-widget ui-widget-content"
									style="max-height: 200px;"></ul>
							</div>
						</div>
					<button id="emlDupChkBtn" type="button" class="btnSC btnM"
						onclick="fncEmlDupChk(); return false;">
						중복 확인
					</button>
					</div>
				</div>
			</li>
		</ul>
	</div>
</div>

