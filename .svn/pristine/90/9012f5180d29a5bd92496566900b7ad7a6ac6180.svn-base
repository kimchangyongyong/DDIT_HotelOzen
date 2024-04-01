/**
 * 
 */

function layerPopUp(buttonId){
	console.log(buttonId)
	layerPop2.style.display = "block";
	dimmed.style.display = "block";
}

function fncCancel(){
	layerPop1.style.display = "none";
	dimmed.style.display = "none";
}

function fncCancel2(){
	layerPop2.style.display = "none";
	dimmed.style.display = "none";
}

function subLocate(event){
	let mbsGrdCd = event.currentTarget.id;
	console.log(mbsGrdCd)
	if(auth){
		window.location.href=`${cPath}/mbrsh/subscribe/${mbsGrdCd}`
	}else{
		layerPop1.style.display = "block";
		dimmed.style.display = "block";
		
	}
}

