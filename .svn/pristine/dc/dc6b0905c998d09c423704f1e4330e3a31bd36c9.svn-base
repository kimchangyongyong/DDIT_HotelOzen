<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<link
	href="${pageContext.request.contextPath}/resources/css/emp/pos/acnt/selling/selling.css"
	rel="stylesheet">
<script type="module"
	src="<c:url value='/resources/js/app/common/line-share-dataset-chart.js'/>"></script>
<!-- <script src="vendors/echarts/echarts.min.js"></script> -->
<div class="col mb-3 d-flex">
	<div class="card label-box">
		<div>
			<label>월 매출</label>
			<h5>1,000,000,000 원</h5>
		</div>
	</div>
	<div class="card mx-2 label-box">
		<div>
			<label>연 매출</label>
			<h5>1,000,000,000,000 원</h5>
		</div>
	</div>
	<div class="card mx-2 label-box">
		<div>
			<label>금일 호텔 방문자 수</label>
			<h5>300 명</h5>
		</div>
	</div>
	<div class="card mx-2 label-box">
		<div>
			<label>금일 호텔 예약 수</label>
			<h5>100 건</h5>
		</div>
	</div>
</div>

<div class="col mb-3">
	<div class="card h-100">
		<div class="card-header">
			<div class="row flex-between-end">
				<div class="col-auto align-self-center">
					<h5 class="mb-0" data-anchor="data-anchor" id="share-dataset">
						<font style="vertical-align: inherit;"><font
							style="vertical-align: inherit;">연도별 매출현황</font></font>
					</h5>
					<div></div>
				</div>
				<div class="col-auto ms-auto">
					<div class="nav nav-pills nav-pills-falcon flex-grow-1"
						role="tablist"></div>
				</div>
			</div>
		</div>
		<div class="card-body bg-light">
			<div class="tab-content">
				<div class="echart-line-share-dataset-chart-example"
					style="min-height: 500px; user-select: none; position: relative;"
					data-echart-responsive="true"></div>
			</div>
		</div>
	</div>
</div>

<div>
	<div class="col mb-3 d-flex" style="justify-content: space-between;">
		<div class="card h-100" style="flex: 1">
			<div class="card-header">
				<div class="row flex-between-end">
					<div class="col-auto align-self-center">
						<h5 class="mb-0" data-anchor="data-anchor" id="share-dataset">
							<font style="vertical-align: inherit;"><font
								style="vertical-align: inherit;">주간 매출현황</font></font>
						</h5>
					</div>
					<div class="col-auto ms-auto">
						<div class="nav nav-pills nav-pills-falcon flex-grow-1"
							role="tablist"></div>
					</div>
				</div>
			</div>
			<div class="card-body bg-light">
				<div class="tab-content">
					<div class="echart-horizontal-stacked-chart-example"
						style="min-height: 350px;" data-echart-responsive="true"></div>
				</div>
			</div>
		</div>
		<div class="card h-100" style="flex: 1; margin-left: 20px;">
			<div class="card-header">
				<div class="row flex-between-end">
					<div class="col-auto align-self-center">
						<h5 class="mb-0" data-anchor="data-anchor" id="share-dataset">
							<font style="vertical-align: inherit;"><font
								style="vertical-align: inherit;">주간 체크인 수</font></font>
						</h5>
					</div>
					<div class="col-auto ms-auto">
						<div class="nav nav-pills nav-pills-falcon flex-grow-1"
							role="tablist"></div>
					</div>
				</div>
			</div>
			<div class="card-body bg-light">
				<div class="tab-content">
					<div class="echart-line-area-chart-example"
						style="min-height: 350px;" data-echart-responsive="true"></div>
				</div>
			</div>
		</div>
	</div>
</div>



<input type="hidden" id="" name="" value="">
<div class="card mb-2">
	<div class="card-header">
		<div>
			<div class="col-auto align-self-center">
				<h5 data-anchor="data-anchor">수익상세정보</h5>
				<div id="tableExample3"
					data-list='{"valueNames":["num","day","cost","paym"],"page":10,"pagination":true}'>
					<div class="row justify-content-end g-0">
						<div class="col-auto col-sm-5 mb-3">
							<form>
								<div class="input-group">
									<input class="form-control form-control-sm shadow-none search"
										type="search" placeholder="Search..." aria-label="search" />
									<div class="input-group-text bg-transparent">
										<span class="fa fa-search fs--1 text-600"></span>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div class="table-responsive scrollbar">
						<table class="table table-bordered table-striped fs--1 mb-0">
							<thead class="bg-200 text-900">
								<tr>
									<th class="sort" data-sort="num">번호</th>
									<th class="sort" data-sort="day">날짜</th>
									<th class="sort" data-sort="cost">금액</th>
									<th class="sort" data-sort="paym">수입원</th>
									<th></th>
								</tr>
							</thead>
							<tbody class="list">
								<tr>
									<td class="num">1</td>
									<td class="day">2024.02.14</td>
									<td class="cost">1,800,000</td>
									<td class="paym">호텔예약</td>
									<td><button class="btn btn-primary" type="button"
											data-bs-toggle="modal" data-bs-target="#error-modal">상세정보</button></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="d-flex justify-content-center mt-3">
						<button class="btn btn-sm btn-falcon-default me-1" type="button"
							title="Previous" data-list-pagination="prev">
							<span class="fas fa-chevron-left"></span>
						</button>
						<ul class="pagination mb-0"></ul>
						<button class="btn btn-sm btn-falcon-default ms-1" type="button"
							title="Next" data-list-pagination="next">
							<span class="fas fa-chevron-right"> </span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="modal fade" id="error-modal" tabindex="-1" role="dialog"
	aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document"
		style="max-width: 1000px">
		<div class="modal-content position-relative">
			<div class="position-absolute top-0 end-0 mt-2 me-2 z-index-1">
				<button
					class="btn-close btn btn-sm btn-circle d-flex flex-center transition-base"
					data-bs-dismiss="modal" aria-label="Close"></button>
			</div>

			<div class="modal-body p-0">
				<div class="rounded-top-lg py-3 ps-4 pe-6 bg-light">
					<h4 class="mb-1" id="modalExampleDemoLabel">상세정보</h4>
				</div>
				<div class="p-4 pb-3">
					<form>

						<table class="table table-bordered table-striped fs--1 mb-0">
							<thead class="bg-200 text-900">
								<tr>
									<th>번호</th>
									<th>날짜</th>
									<th>시간</th>
									<th>금액</th>
									<th>결제방식</th>
									<th>수입원</th>
								</tr>
							</thead>
							<tbody class="list">
								<tr>
									<td>1</td>
									<td>2024.02.14</td>
									<td>18:00</td>
									<td>1,800,000</td>
									<td>카드</td>
									<td>호텔예약</td>
								</tr>
							</tbody>
						</table>
					</form>
				</div>
			</div>
			<div class="modal-footer">
				<button class="btn btn-secondary" type="button"
					data-bs-dismiss="modal">Close</button>

			</div>
		</div>
	</div>
</div>
<script
	src="<c:url value='/resources/js/app/common/echarts-example.js'/>"></script>
<script>
	// 연도별 매출현황
	$(function(){
		
		var echartsLineShareDatasetChartInit = function echartsLineShareDatasetChartInit() {
			  var $lineShareChartEl = document.querySelector('.echart-line-share-dataset-chart-example');
			  var currentDay = new Date();
			  var currentMonth = currentDay.getMonth()+1;
			  if ($lineShareChartEl) {
			    // Get options from data attribute
			    var userOptions = utils.getData($lineShareChartEl, 'options');
			    var chart = window.echarts.init($lineShareChartEl);

			    var getDefaultOptions = function getDefaultOptions() {
				console.log("getDefaultOptions", chart)
			      return {
			        color: ['#FD9394', '#9CF99F', '#F0FF6C','#91B2FD'],
			        legend: {
			          top: 0,
			          textStyle: {
			            color: utils.getGrays()['700']
			          }
			        },
			        tooltip: {
			          trigger: 'axis',
			          showContent: false
			        },
			        dataset: {
			          source: [['product', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
							, ['호텔예약'
								, ${yearCPROSelling[0].total}
								, ${yearCPROSelling[1].total}
								, ${yearCPROSelling[2].total}
								, ${yearCPROSelling[3].total}
								, ${yearCPROSelling[4].total}
								, ${yearCPROSelling[5].total}
								, ${yearCPROSelling[6].total}
								, ${yearCPROSelling[7].total}
								, ${yearCPROSelling[8].total}
								, ${yearCPROSelling[9].total}
								, ${yearCPROSelling[10].total}
								, ${yearCPROSelling[11].total}
									]
							, ['룸서비스'
								, ${yearCKOTSelling[0].total}
								, ${yearCKOTSelling[1].total}
								, ${yearCKOTSelling[2].total}
								, ${yearCKOTSelling[3].total}
								, ${yearCKOTSelling[4].total}
								, ${yearCKOTSelling[5].total}
								, ${yearCKOTSelling[6].total}
								, ${yearCKOTSelling[7].total}
								, ${yearCKOTSelling[8].total}
								, ${yearCKOTSelling[9].total}
								, ${yearCKOTSelling[10].total}
								, ${yearCKOTSelling[11].total}
									]
							, ['워크인'
								, ${yearWALKSelling[0].total}
								, ${yearWALKSelling[1].total}
								, ${yearWALKSelling[2].total}
								, ${yearWALKSelling[3].total}
								, ${yearWALKSelling[4].total}
								, ${yearWALKSelling[5].total}
								, ${yearWALKSelling[6].total}
								, ${yearWALKSelling[7].total}
								, ${yearWALKSelling[8].total}
								, ${yearWALKSelling[9].total}
								, ${yearWALKSelling[10].total}
								, ${yearWALKSelling[11].total}
									]
							, ['멤버십'
								, ${yearCPMBSelling[0].total}
								, ${yearCPMBSelling[1].total}
								, ${yearCPMBSelling[2].total}
								, ${yearCPMBSelling[3].total}
								, ${yearCPMBSelling[4].total}
								, ${yearCPMBSelling[5].total}
								, ${yearCPMBSelling[6].total}
								, ${yearCPMBSelling[7].total}
								, ${yearCPMBSelling[8].total}
								, ${yearCPMBSelling[9].total}
								, ${yearCPMBSelling[10].total}
								, ${yearCPMBSelling[11].total}
									]]
			        },
			        xAxis: {
			          type: 'category',
			          axisLine: {
			            lineStyle: {
			              color: utils.getGrays()['300']
			            }
			          },
			          axisLabel: {
			            color: utils.getGrays()['600']
			          },
			          axisPointer: {
			            lineStyle: {
			              color: utils.getGrays()['300']
			            }
			          }
			        },
			        yAxis: {
			          gridIndex: 0,
			          axisLabel: {
			            color: utils.getGrays()['600']
			          },
			          splitLine: {
			            lineStyle: {
			              color: utils.getGrays()['200']
			            }
			          }
			        },
			        series: [{
			          type: 'line',
			          smooth: true,
			          seriesLayoutBy: 'row',
			          emphasis: {
			            focus: 'series'
			          },
			          symbolSize: 10,
			          itemStyle: {
			            color: utils.getGrays().white,
			            borderColor: '#FD9394',
			            borderWidth: 2
			          },
			          lineStyle: {
			            color: '#FD9394'
			          },
			          symbol: 'circle'
			        }, {
			          type: 'line',
			          smooth: true,
			          seriesLayoutBy: 'row',
			          emphasis: {
			            focus: 'series'
			          },
			          symbolSize: 10,
			          itemStyle: {
			            color: utils.getGrays().white,
			            borderColor: '#9CF99F',
			            borderWidth: 2
			          },
			          lineStyle: {
			            color:'#9CF99F'
			          },
			          symbol: 'circle'
			        }, {
			          type: 'line',
			          smooth: true,
			          seriesLayoutBy: 'row',
			          emphasis: {
			            focus: 'series'
			          },
			          symbolSize: 10,
			          itemStyle: {
			            color: utils.getGrays().white,
			            borderColor: '#F0FF6C',
			            borderWidth: 2
			          },
			          lineStyle: {
			            color: '#F0FF6C'
			          },
			          symbol: 'circle'
			        }, {
			          type: 'line',
			          smooth: true,
			          seriesLayoutBy: 'row',
			          emphasis: {
			            focus: 'series'
			          },
			          symbolSize: 10,
			          itemStyle: {
			            color: utils.getGrays().white,
			            borderColor: '#91B2FD',
			            borderWidth: 2
			          },
			          lineStyle: {
			            color: '#91B2FD'
			          },
			          symbol: 'circle'
			        }, {
			          type: 'pie',
			          id: 'pie',
			          radius: '30%',
			          center: ['50%', '28%'],
			          emphasis: {
			            focus: 'data'
			          },
			          label: {
			            formatter: '{b}: {@'+currentMonth+'월} ({d}%)',
			            color: utils.getGrays()['600']
			          },
			          encode: {
			            itemName: 'product',
			            value: currentMonth+'월',
			            tooltip: currentMonth+'월'
			          }
			        }],
			        grid: {
			          right: 10,
			          left: 5,
			          bottom: 5,
			          top: '55%',
			          containLabel: true
			        }
			      };
			    };
				console.log( '{b}: {'+currentMonth+'월} ({d}%)');
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
	});
	    
	// 주간 매출현황
	$(function(){
  var echartsHorizontalStackedChartInit = function echartsHorizontalStackedChartInit() {
  var $horizontalStackChartEl = document.querySelector('.echart-horizontal-stacked-chart-example');

  if ($horizontalStackChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($horizontalStackChartEl, 'options');
    var chart = window.echarts.init($horizontalStackChartEl);
    var days = ['토', '금', '목', '수', '화', '월', '일'];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: ['#FD9394', '#9CF99F', '#F0FF6C','#91B2FD'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: tooltipFormatter
        },
        toolbox: {
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            }
          },
          right: 0
        },
        legend: {
          data: ['호텔예약', '룸서비스', '워크인', '멤버십'],
          textStyle: {
            color: utils.getGrays()['600']
          },
          left: 0
        },
        xAxis: {
          type: 'value',
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['300']
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['500']
          },
          splitLine: {
            lineStyle: {
              show: true,
              color: utils.getGrays()['200']
            }
          }
        },
        yAxis: {
          type: 'category',
          data: days,
          axisLine: {
            lineStyle: {
              show: true,
              color: utils.getGrays()['300']
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['500'],
            formatter: function formatter(value) {
              return value.substring(0, 3);
            }
          }
        },
        series: [{
          name: '호텔예약',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [
        	  ${weekCPROSelling[6].total}
        	  , ${weekCPROSelling[5].total}
        	  , ${weekCPROSelling[4].total}
        	  , ${weekCPROSelling[3].total}
        	  , ${weekCPROSelling[2].total}
        	  , ${weekCPROSelling[1].total}
        	  , ${weekCPROSelling[0].total}
        	  ]
        }, {
          name: '룸서비스',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [
        	  ${weekCKOTSelling[6].total}
        	  , ${weekCKOTSelling[5].total}
        	  , ${weekCKOTSelling[4].total}
        	  , ${weekCKOTSelling[3].total}
        	  , ${weekCKOTSelling[2].total}
        	  , ${weekCKOTSelling[1].total}
        	  , ${weekCKOTSelling[0].total}
          ]
        }, {
          name: '워크인',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [
        	  ${weekWALKSelling[6].total}
        	  , ${weekWALKSelling[5].total}
        	  , ${weekWALKSelling[4].total}
        	  , ${weekWALKSelling[3].total}
        	  , ${weekWALKSelling[2].total}
        	  , ${weekWALKSelling[1].total}
        	  , ${weekWALKSelling[0].total}
          ]
        }, {
          name: '멤버십',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            focus: 'series'
          },
          data: [
        	  ${weekCPMBSelling[6].total}
        	  , ${weekCPMBSelling[5].total}
        	  , ${weekCPMBSelling[4].total}
        	  , ${weekCPMBSelling[3].total}
        	  , ${weekCPMBSelling[2].total}
        	  , ${weekCPMBSelling[1].total}
        	  , ${weekCPMBSelling[0].total}
          ]
        }],
        grid: {
          right: 15,
          left: 5,
          bottom: 5,
          top: '15%',
          containLabel: true
        }
      };
    };
    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
docReady(echartsHorizontalStackedChartInit);
	});
	
	// 주간 체크인 수
	var echartsLineAreaChartInit = function echartsLineAreaChartInit() {
		  var $lineAreaChartEl = document.querySelector('.echart-line-area-chart-example');

		  if ($lineAreaChartEl) {
		    // Get options from data attribute
		    var userOptions = utils.getData($lineAreaChartEl, 'options');
		    var chart = window.echarts.init($lineAreaChartEl);
		    var months = ['일', '월', '화', '수', '목', '금', '토'];
		    var data = [
		    	${weekCheckin[0].checkinCount}
		    	, ${weekCheckin[1].checkinCount}
		    	, ${weekCheckin[2].checkinCount}
		    	, ${weekCheckin[3].checkinCount}
		    	, ${weekCheckin[4].checkinCount}
		    	, ${weekCheckin[5].checkinCount}
		    	, ${weekCheckin[6].checkinCount}
		    ];

		    var _tooltipFormatter7 = function _tooltipFormatter7(params) {
		      return "\n      <div>\n          <h6 class=\"fs--1 text-700 mb-0\">\n            <span class=\"fas fa-circle me-1\" style='color:".concat(params[0].borderColor, "'></span>\n            ").concat(params[0].name, " : ").concat(params[0].value, "\n          </h6>\n      </div>\n      ");
		    };

		    var getDefaultOptions = function getDefaultOptions() {
		      return {
		        tooltip: {
		          trigger: 'axis',
		          padding: [7, 10],
		          backgroundColor: utils.getGrays()['100'],
		          borderColor: utils.getGrays()['300'],
		          textStyle: {
		            color: utils.getColors().dark
		          },
		          borderWidth: 1,
		          formatter: _tooltipFormatter7,
		          transitionDuration: 0,
		          axisPointer: {
		            type: 'none'
		          }
		        },
		        xAxis: {
		          type: 'category',
		          data: months,
		          boundaryGap: false,
		          axisLine: {
		            lineStyle: {
		              color: utils.getGrays()['300'],
		              type: 'solid'
		            }
		          },
		          axisTick: {
		            show: false
		          },
		          axisLabel: {
		            color: utils.getGrays()['400'],
		            formatter: function formatter(value) {
		              return value.substring(0, 3);
		            },
		            margin: 15
		          },
		          splitLine: {
		            show: false
		          }
		        },
		        yAxis: {
		          type: 'value',
		          splitLine: {
		            lineStyle: {
		              color: utils.getGrays()['200']
		            }
		          },
		          boundaryGap: false,
		          axisLabel: {
		            show: true,
		            color: utils.getGrays()['400'],
		            margin: 15
		          },
		          axisTick: {
		            show: false
		          },
		          axisLine: {
		            show: false
		          },
		          min: 50
		        },
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
		        grid: {
		          right: '3%',
		          left: '10%',
		          bottom: '10%',
		          top: '5%'
		        }
		      };
		    };

		    echartSetOption(chart, userOptions, getDefaultOptions);
		  }
		};
		  docReady(echartsLineAreaChartInit);
</script>