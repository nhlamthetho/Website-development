let menuButtonStatus = false;

let menufunction = function(){

	if(menuButtonStatus===false){
		let getmenuOptions_list = document.querySelector(".menuOptions ul");
		let getmenuOptions_bar = document.querySelector(".menuOptions");
		
		getmenuOptions_list.style.visibility = "visible";

		menuButtonStatus=true;		
	}
	else if(menuButtonStatus===true){
		let getmenuOptions_list= document.querySelector(".menuOptions ul");
		

		getmenuOptions_list.style.visibility = "hidden";
		menuButtonStatus=false;		
	}



}

/*console.log("hello world");*/