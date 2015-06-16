// ==UserScript==
// @name        4chan Day and Night
// @namespace   jBlue
// @description Changes themes depending on the time
// @version     1.1.5
// @match        *://boards.4chan.org/*
// @match        *://sys.4chan.org/*
// @match        *://a.4cdn.org/*
// @match        *://i.4cdn.org/*
// @match        *://www.google.com/recaptcha/api/fallback?k=6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc
// @grant       none
// ==/UserScript==


function nightMode() {
	document.getElementById("OneeChanLink").click();
	document.getElementById("options-tabs").children[1].children[0].click();
  document.getElementById("theme29").children[0].children[8].children[0].click();
	document.getElementById("theme30").children[0].children[8].children[1].click();
	document.getElementById("oneechan-options").children[2].children[0].click();
}

function lightMode() {
	document.getElementById("OneeChanLink").click();
	document.getElementById("options-tabs").children[1].children[0].click();
  document.getElementById("theme27").children[0].children[8].children[0].click();
	document.getElementById("theme28").children[0].children[8].children[1].click();
	document.getElementById("oneechan-options").children[2].children[0].click();
}

function themeCheck(){
	var t = new Date();
	var headBar = window.getComputedStyle(document.getElementById("header-bar")).getPropertyValue("background").split("rgba(")[2].split(")")[0];
	var lightTheme = "227, 231, 232, 0.901961";
	var darkTheme = "40, 42, 46, 0.901961";
	
	//checking if light theme is still on
	if (headBar === lightTheme && t.getHours() > 17 || t.getHours() < 7){
		nightMode();
		
	//checking if dark theme is still on
	}else if (headBar === darkTheme && t.getHours() > 6 && t.getHours() < 18){
		lightMode();
	}
}

function nightAndDay(){
	(function loop() {
		var now = new Date();
		if (now.getHours() === 7 && now.getMinutes() === 0) {
			lightMode();
		}else if (now.getHours() === 18 && now.getMinutes() === 0) {
			nightMode();
		}
		now = new Date();
		var delay = 60000 - (now % 60000);
		setTimeout(loop, delay);
	})();
}

setTimeout(themeCheck, 1000);
nightAndDay();
