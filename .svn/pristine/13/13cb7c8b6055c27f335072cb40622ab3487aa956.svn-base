/**
 * 
 */

document.addEventListener("DOMContentLoaded", () => {
	//let options = { "valueNames": ["cstNo", "mberNm", "mberId", "mberHp", "mberMbrsh", "mberMlg"], "page": 10, "pagination": true }
	
	let allOptions = {"valueNames":["rnum","empNm","empNo", "empTel","empDept","empJbgd","social"],"page":10,"pagination":true}
	empList1 = new List('allEmpList', allOptions)
	let dclzOptions = { "valueNames":["name","phone-number","report","subscription","social"],"page":1,"pagination":true}
	empList2 = new List('dclzEmpList', dclzOptions)
	let reitredOptions = {"valueNames":["rnum","empNm","empNo", "empTel","empDept","empJbgd","social"], "filter":{"key":"empNo"},"page":3,"pagination":true}
	empList3 = new List('retiredEmpList', reitredOptions)
	
	
	var listFilter = document.querySelector('[data-list-filter]');
	var key = reitredOptions.filter.key;
	listFilter.addEventListener("change", function(e){
		console.log("change test")
		var filterValue = listFilter.value;
		console.log(filterValue)
		empList3.filter(function(item){
              if (e.target.value === '') {
                return true;
              }
              return item.values()[key].toLowerCase().includes(e.target.value.toLowerCase());
            });			
		})
//	$("#submitForm").submit();
});
