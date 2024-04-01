/**
 * 
 */
const cPath = document.body.dataset.contextPath;

$(document).ready(function(){
	let date = new Date();
	
	var today = new Date().toISOString().slice(0,10);
	var year = document.getElementById('yearDate').value;
	var rsvtStart = document.getElementById('rsvtStart').value;
	var rsvtEnd = document.getElementById('rsvtEnd').value;
	var weekStart = document.getElementById('weekStart').value;
	var weekEnd = document.getElementById('weekEnd').value;
	
	
	document.getElementById('searchDate').value = today;
	document.getElementById('searchDate').setAttribute("max",today);
	document.getElementById('year').innerHTML = year.substring(0,4)+'년';
	document.getElementById('weekRsvt').innerHTML = rsvtStart + "(월) ~ " + rsvtEnd+"(일)";
	document.getElementById('week').innerHTML = weekStart + "(월) ~ " + weekEnd+"(일)";
});

$("#searchDate").on("change",(event)=>{
	var searchDate = document.getElementById("searchDate").value
	$.ajax({
		type:"POST"
		, url: cPath + `/emp/pos/acnt/selling/search`
		, dataType:"json"
		, contentType:"application/json"
		, data: JSON.stringify(searchDate)
		, success: function(jsonObj){
			updateGraph(jsonObj);
			document.getElementById('year').innerHTML = jsonObj.yearCPROSelling[0].sellingDate.substring(0,4)+'년';
			document.getElementById('week').innerHTML = jsonObj.weekCPROSelling[0].sellingDate +'(월) ~ ' + jsonObj.weekCPROSelling[6].sellingDate + '(일)';
			document.getElementById('weekRsvt').innerHTML = jsonObj.weekRsvt[0].rsvtDate +'(월) ~ ' + jsonObj.weekRsvt[6].rsvtDate + '(일)';
		}, error : function(resp, status, error){
			console.log(error);
		}
	});
});

function updateGraph(jsonObj){
	
 	var echartsLineShareDatasetChartInit = function echartsLineShareDatasetChartInit() {
	var $lineShareChartEl = document.querySelector('.echart-line-share-dataset-chart-example');
		var currentDay = new Date();
		var currentMonth = currentDay.getMonth()+1;
		if ($lineShareChartEl) {
			    // Get options from data attribute
			    var userOptions = utils.getData($lineShareChartEl, 'options');
			    var chart = window.echarts.init($lineShareChartEl);

			    var getDefaultOptions = function getDefaultOptions() {
			      return {
			        dataset: {
			          source: [['product', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
							, ['호텔예약'
								, jsonObj.yearCPROSelling[0].total
								, jsonObj.yearCPROSelling[1].total
								, jsonObj.yearCPROSelling[2].total
								, jsonObj.yearCPROSelling[3].total
								, jsonObj.yearCPROSelling[4].total
								, jsonObj.yearCPROSelling[5].total
								, jsonObj.yearCPROSelling[6].total
								, jsonObj.yearCPROSelling[7].total
								, jsonObj.yearCPROSelling[8].total
								, jsonObj.yearCPROSelling[9].total
								, jsonObj.yearCPROSelling[10].total
								, jsonObj.yearCPROSelling[11].total
									]
							, ['룸서비스'
								, jsonObj.yearCKOTSelling[0].total
								, jsonObj.yearCKOTSelling[1].total
								, jsonObj.yearCKOTSelling[2].total
								, jsonObj.yearCKOTSelling[3].total
								, jsonObj.yearCKOTSelling[4].total
								, jsonObj.yearCKOTSelling[5].total
								, jsonObj.yearCKOTSelling[6].total
								, jsonObj.yearCKOTSelling[7].total
								, jsonObj.yearCKOTSelling[8].total
								, jsonObj.yearCKOTSelling[9].total
								, jsonObj.yearCKOTSelling[10].total
								, jsonObj.yearCKOTSelling[11].total
									]
							, ['워크인'
								, jsonObj.yearWALKSelling[0].total
								, jsonObj.yearWALKSelling[1].total
								, jsonObj.yearWALKSelling[2].total
								, jsonObj.yearWALKSelling[3].total
								, jsonObj.yearWALKSelling[4].total
								, jsonObj.yearWALKSelling[5].total
								, jsonObj.yearWALKSelling[6].total
								, jsonObj.yearWALKSelling[7].total
								, jsonObj.yearWALKSelling[8].total
								, jsonObj.yearWALKSelling[9].total
								, jsonObj.yearWALKSelling[10].total
								, jsonObj.yearWALKSelling[11].total
									]
							, ['멤버십'
								, jsonObj.yearCPMBSelling[0].total
								, jsonObj.yearCPMBSelling[1].total
								, jsonObj.yearCPMBSelling[2].total
								, jsonObj.yearCPMBSelling[3].total
								, jsonObj.yearCPMBSelling[4].total
								, jsonObj.yearCPMBSelling[5].total
								, jsonObj.yearCPMBSelling[6].total
								, jsonObj.yearCPMBSelling[7].total
								, jsonObj.yearCPMBSelling[8].total
								, jsonObj.yearCPMBSelling[9].total
								, jsonObj.yearCPMBSelling[10].total
								, jsonObj.yearCPMBSelling[11].total
								]]
			        },
			      };
			    };
			    echartSetOption(chart, userOptions, getDefaultOptions);
			    chart.on('updateAxisPointer', function (event) {
			      var xAxisInfo = event.axesInfo[0];

			      if (xAxisInfo) {
			        var dimension = xAxisInfo.value + 1;
			        chart.setOption({
			          series: {
			            id: 'pie',
			            label: {
			              formatter: "{b}: {@[".concat(dimension, "]} ({d}%)")
			            },
			            encode: {
			              value: dimension,
			              tooltip: dimension
			            }
			          }
			        });
			      }
			    });
			  }
			};
			
			docReady(echartsLineShareDatasetChartInit);
	
	
  var echartsHorizontalStackedChartInit = function echartsHorizontalStackedChartInit() {
  var $horizontalStackChartEl = document.querySelector('.echart-horizontal-stacked-chart-example');

  if ($horizontalStackChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($horizontalStackChartEl, 'options');
    var chart = window.echarts.init($horizontalStackChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        series: [{
        
          data: [
        	  jsonObj.weekCPROSelling[6].total
        	  , jsonObj.weekCPROSelling[5].total
        	  , jsonObj.weekCPROSelling[4].total
        	  , jsonObj.weekCPROSelling[3].total
        	  , jsonObj.weekCPROSelling[2].total
        	  , jsonObj.weekCPROSelling[1].total
        	  , jsonObj.weekCPROSelling[0].total
        	  ]
        }, {
        
          data: [
        	  jsonObj.weekCKOTSelling[6].total
        	  , jsonObj.weekCKOTSelling[5].total
        	  , jsonObj.weekCKOTSelling[4].total
        	  , jsonObj.weekCKOTSelling[3].total
        	  , jsonObj.weekCKOTSelling[2].total
        	  , jsonObj.weekCKOTSelling[1].total
        	  , jsonObj.weekCKOTSelling[0].total
          ]
        }, {
          
          data: [
        	  jsonObj.weekWALKSelling[6].total
        	  , jsonObj.weekWALKSelling[5].total
        	  , jsonObj.weekWALKSelling[4].total
        	  , jsonObj.weekWALKSelling[3].total
        	  , jsonObj.weekWALKSelling[2].total
        	  , jsonObj.weekWALKSelling[1].total
        	  , jsonObj.weekWALKSelling[0].total
          ]
        }, {
          
          data: [
        	  jsonObj.weekCPMBSelling[6].total
        	  , jsonObj.weekCPMBSelling[5].total
        	  , jsonObj.weekCPMBSelling[4].total
        	  , jsonObj.weekCPMBSelling[3].total
        	  , jsonObj.weekCPMBSelling[2].total
        	  , jsonObj.weekCPMBSelling[1].total
        	  , jsonObj.weekCPMBSelling[0].total
          ]
        }]
      };
    };
    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
docReady(echartsHorizontalStackedChartInit);


var echartsLineAreaChartInit = function echartsLineAreaChartInit() {
var $lineAreaChartEl = document.querySelector('.echart-line-area-chart-example');

		  if ($lineAreaChartEl) {
		    var userOptions = utils.getData($lineAreaChartEl, 'options');
		    var chart = window.echarts.init($lineAreaChartEl);
		    var months = ['월', '화', '수', '목', '금', '토', '일'];
		    var data = [
		    	jsonObj.weekRsvt[0].rsvtCount
		    	, jsonObj.weekRsvt[1].rsvtCount
		    	, jsonObj.weekRsvt[2].rsvtCount
		    	, jsonObj.weekRsvt[3].rsvtCount
		    	, jsonObj.weekRsvt[4].rsvtCount
		    	, jsonObj.weekRsvt[5].rsvtCount
		    	, jsonObj.weekRsvt[6].rsvtCount
		    ];

		    var _tooltipFormatter7 = function _tooltipFormatter7(params) {
		      return "\n      <div>\n          <h6 class=\"fs--1 text-700 mb-0\">\n            <span class=\"fas fa-circle me-1\" style='color:".concat(params[0].borderColor, "'></span>\n            ").concat(params[0].name, " : ").concat(params[0].value, "\n          </h6>\n      </div>\n      ");
		    };

		    var getDefaultOptions = function getDefaultOptions() {
		      return {
		
		        series: [{
		          type: 'line',
		          data: data,
		          itemStyle: {
		            color: utils.getGrays().white,
		            borderColor: utils.getColor('primary'),
		            borderWidth: 2
		          },
		          lineStyle: {
		            color: utils.getColor('primary')
		          },
		          showSymbol: false,
		          symbolSize: 10,
		          symbol: 'circle',
		          smooth: false,
		          hoverAnimation: true,
		          areaStyle: {
		            color: {
		              type: 'linear',
		              x: 0,
		              y: 0,
		              x2: 0,
		              y2: 1,
		              colorStops: [{
		                offset: 0,
		                color: utils.rgbaColor(utils.getColors().primary, 0.5)
		              }, {
		                offset: 1,
		                color: utils.rgbaColor(utils.getColors().primary, 0)
		              }]
		            }
		          }
		        }],
		      };
		    };
		    echartSetOption(chart, userOptions, getDefaultOptions);
		  }
		};
		  docReady(echartsLineAreaChartInit);
}