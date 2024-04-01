<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags/form"  prefix="form"%>
<%@taglib uri="http://www.springframework.org/tags"  prefix="spring"%>

<link href="${pageContext.request.contextPath }/resources/vendors/swiper/swiper-bundle.min.css" rel="stylesheet" />

<style>

.modal-backdrop{
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background-color:rgba(0, 0, 0, 0);
}

.mbrshImg {
        width: 300px;
        height: 100px;
    }

.mbrshContainer {
        text-align: center;
       
    }
    

hr.hidden {
        display: none;
    }

.checkbox {
	position: relative;
    left: -260px; 
    bottom: -5px;
}
</style>


<div class="modal" id="myModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">멤버십 추천</h5>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">
<!--                     <span aria-hidden="true">&times;</span> -->
                </button>
            </div>
            <div class="modal-body">
                <h6>${cstNm } 고객님께 추천드리는 3가지 멤버십입니다!</h6>
                <div class="mbrshContainer">
				    <div class="swiper-container theme-slider" data-swiper='{"autoplay":true,"spaceBetween":5,"loop":true,"loopedSlides":5,"slideToClickedSlide":true}'>
				      <div class="swiper-wrapper">
				        <div class="swiper-slide">
				        <a href="#"><img class="rounded-1 img-fluid" src="<c:url value='/resources/assets/img/recommbrsh/${vo.recomMbrshLbl1 }.png'/>" alt="${vo.recomMbrsh1}" /></a></div>
				        <div class="swiper-slide">
				        <a href="#">
				        <img class="rounded-1 img-fluid" src="<c:url value='/resources/assets/img/recommbrsh/${vo.recomMbrshLbl2 }.png'/>" alt="${vo.recomMbrsh2}" /></a>
				        </div>
				        <div class="swiper-slide">
				        <a href="#">
				        <img class="rounded-1 img-fluid" src="<c:url value='/resources/assets/img/recommbrsh/${vo.recomMbrshLbl3 }.png'/>" alt="${vo.recomMbrsh3}" /></a>
				        </div>
				      </div>
				      <div class="swiper-nav">
				        <div class="swiper-button-next swiper-button-white"></div>
				        <div class="swiper-button-prev swiper-button-white"> </div>
				      </div>
				    </div>
                </div>
            </div>
            <div class="modal-footer">
	            <div class="checkbox">
		            <input type="checkbox" id="myCheckbox" name="myCheckbox">
					<label for="myCheckbox">오늘은 그만 보기</label>
	            </div>
<!--                 <button type="button" class="btn btn-primary" id = "modal-today-close">today</button> -->
                <button type="button" class="btn btn-info" id="modal-end" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- 토스트 안 뜨는데 이유 찾기 -->

<div class="toast notice" role="alert" data-options='{"autoShow":true,"autoShowDelay":0,"showOnce":true,"cookieExpireTime":7200000}' data-autohide="false" aria-live="assertive" aria-atomic="true">
  <div class="toast-body">

    <!-- Your notice content  -->
  </div>
</div>

<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded me-2" alt="...">
    <strong class="me-auto">Bootstrap</strong>
    <small class="text-muted">11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>


<script>
document.addEventListener("DOMContentLoaded", () => {
	
	$("#myModal").modal({backdrop: 'static', keyboard: false}, 'show');
	
	function setCookie(name, value, expiredays){
	    var today = new Date();
	    today.setDate(today.getDate() + expiredays);
	    document.cookie = name + '=' + escape(value) + '; expires=' + today.toGMTString();
	}

	function getCookie(name) {
	    var cookie = document.cookie;
	    if (document.cookie != "") {
	        var cookie_array = cookie.split("; ");
	        for ( var index in cookie_array) {
	            var cookie_name = cookie_array[index].split("=");
	            if (cookie_name[0] == "mycookie") {
	                return cookie_name[1];
	            }
	        }
	    }
	    return;
	}
	
	
// 	$("#modal-today-close").click(function() {
// 	    $("#myModal").modal("hide");
// 	    setCookie("mycookie", 'popupEnd', 1);
// 	})
	
	
	var isChecked;
	$("#myCheckbox").change(function() {
	    isChecked = $(this).prop("checked");
	    console.log(isChecked);
	})
	
	$("#modal-end").click(function() {
		console.log("클릭 후 ", isChecked);
		if(isChecked){
			$("#myModal").modal("hide");
		    setCookie("mycookie", 'popupEnd', 1);
		}
	    
	})
	
	var checkCookie = getCookie("mycookie");

	if(checkCookie == 'popupEnd') {
	    $("#myModal").modal("hide");
	} else {
	    $('#myModal').modal("show");
	}
	
	
	
});
</script>
<script src="${pageContext.request.contextPath }/resources/vendors/swiper/swiper-bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
