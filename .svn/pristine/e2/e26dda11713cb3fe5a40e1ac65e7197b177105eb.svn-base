/**
 * 
 */

document.addEventListener("DOMContentLoaded", () => {
	
	
	let options ={"valueNames":["name","email","age"], "filter":{"key":"name"}, "filter2":{"key2":"age"},  "filter3":{"key3":"dept"} ,"page":2,"pagination":true}

	empList3 = new List('tableExample3', options)
	
	let keyTarget = '';
	let key2Target = '';
	
//	var listFilter = document.querySelector('[data-list-filter]');
	var listFilter = document.querySelector('#myname');
	var key = options.filter.key;
	listFilter.addEventListener("change", function(e){

		empList3.filter(function(item){
			keyTarget = e.target.value;
			if(!(item.values()[key2].toLowerCase().includes(key2Target.toLowerCase()))) return false;
              if (e.target.value === '') {
                return true;
              }


              return item.values()[key].toLowerCase().includes(e.target.value.toLowerCase());
            });			
		})
		
	
	
	var listFilter2 = document.querySelector('#myage');
	var key2 = options.filter2.key2;
	listFilter2.addEventListener("change", function(e){

		var filterValue2 = listFilter2.value;
		
		empList3.filter(function(item){
//			console.log("item",item);
//			console.log("item",item.values()[key]);
//			console.log("item",item.values()[key2]);
//			console.log("item",item.values());
			key2Target = e.target.value;
			if(!(item.values()[key].toLowerCase().includes(keyTarget.toLowerCase()))) return false;
			
              if (e.target.value === '') {  //n월이 아니라 ''이면 전체 달을 의미하므로 전부 true처리
                return true;
              }
              return item.values()[key2].toLowerCase().includes(e.target.value.toLowerCase());
            });			
		})	
		
//	$("#submitForm").submit();
});
