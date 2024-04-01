/**
 * 
 */

// 서브메뉴 아코디언
$(function(){
	$(".navi>li").mouseover(function(){
		$(this).find(".sub01")
           .stop()
           .slideDown(500)
           .css({
               'text-align': 'center'
           });
	});
	$(".navi>li").mouseleave(function(){
		$(this).find(".sub01").stop().slideUp(500);
	});
});

if(document.getElementById('logoutATag') != null){	
	logoutATag.addEventListener('click', function(){
		event.preventDefault();
		logoutForm.submit();
	
	})
}
	
$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Jeju%20City,%20KR&appid=724a70fb80baa29d45cb708820e544e4&units=metric', function (WeatherResult) {
	$('.Jejutemp').append(WeatherResult.main.temp);
	
	var weathericonUrl = '<img src="http://openweathermap.org/img/wn/' + WeatherResult.weather[0].icon + '.png" alt="' + WeatherResult.weather[0].description + '"/>';
	$('.JejuIcon').html(weathericonUrl);
});

$.getJSON('http://api.openweathermap.org/data/2.5/air_pollution?lat=33.5097&lon=126.5219&appid=724a70fb80baa29d45cb708820e544e4', function(AirResult) {
    $('.Jejudust').append(AirResult.list[0].components.pm2_5);
});