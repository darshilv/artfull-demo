$(document).ready(function(){
	$("#nav2").hide();
});

function navigate(str){
	switch(str){
		case "home":
			$("#loginScreen2").hide();
			$("#loginScreen1").hide();
			$("#notification").hide();
			$("#homeScreen").show();
			animateScreens("loginScreen", "on-screen", "off-screen-right", "out");
			animateScreens("homeScreen", "off-screen-right", "on-screen", "in");
			setTimeout(function(){
				animateScreens("navBar", "off-screen-top" , "nav-section", "")
				$("#notification").show();
				$("#notification").css("opacity", "0");
			}, 1000);
			setTimeout(function(){
				animateScreens("homeSection", "content-section", "content-section-down", "");
				$("#notification").css({
					"top": "85px",
					"opacity" : 1
				});
			}, 4500);
			break;
		case "login":
			$("#loginScreen2").show();
			animateScreens("loginScreen", "on-screen", "off-screen-right", "out");
			animateScreens("loginScreen2", "off-screen", "on-screen", "in");
			setTimeout(function(){
				animateScreens("keyboard", "keyboard", "keyboard-up", "");	
			}, 200);
			break;
		case "camera":

			break;
		case "poll":
			animateScreens("pollScreen", "off-screen-right", "on-screen");
			animateScreens("homeScreen","on-screen", "off-screen-right");
			$("#nav1").hide();
			$("#nav2").show();

			break;

		case "phoneApp":
			animateScreens("notification", "on-screen", "off-screen-right");
			animateScreens("phoneApp", "off-screen-right", "on-screen");
			break;
	}
}

function animateScreens(elementId, removeProp, addProp, stage){
	if(stage=="out"){
		$("#"+ elementId).removeClass(removeProp).addClass(addProp);
		setTimeout(function(){
			$("#" + elementId).hide();
		}, 650);
	} else if(stage=="in"){
		$("#" + elementId).fadeIn();
		setTimeout(function(){
			$("#"+ elementId).removeClass(removeProp).addClass(addProp);
		}, 600);
	} else{
		$("#"+ elementId).removeClass(removeProp).addClass(addProp);
	}
}

