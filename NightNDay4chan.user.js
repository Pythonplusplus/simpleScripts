// ==UserScript==
// @name        4chan Day and Night
// @namespace   jBlue
// @description Changes themes depending on the time
// @version     1.2
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

function lightCheck(){
	var t = new Date();
	var sfwTest = window.getComputedStyle(document.body).getPropertyValue("background-image").split("url(")[1].split(")")[0].replace(/"/g, "");
	if (sfwTest !== "http://i.imgur.com/uvqosDO.png" && sfwTest !== "http://i.imgur.com/C93G8sl.png") {
		if (t.getHours() >= 7 && t.getHours() <= 18 && sfwTest !== "http://i.imgur.com/uvqosDO.png") {
			lightMode();
		}else if (t.getHours() >= 7 && t.getHours() <= 18 && sfwTest !== "http://i.imgur.com/C93G8sl.png"){
			lightMode();
		}else{
			darkCheck();
		}
	}else{
		darkCheck();
	}
}

function darkCheck(){
	var t = new Date();
	var sfwTest = window.getComputedStyle(document.body).getPropertyValue("background-image").split("url(")[1].split(")")[0].replace(/"/g, "");
	if (sfwTest === "http://i.imgur.com/uvqosDO.png" || sfwTest === "http://i.imgur.com/C93G8sl.png") {
		if (t.getHours() >= 18 || t.getHours() <= 7 && sfwTest === "http://i.imgur.com/uvqosDO.png") {
			nightMode();
		}else if (t.getHours() >= 18 || t.getHours() <= 7 && sfwTest === "http://i.imgur.com/C93G8sl.png") {
			nightMode();
		}
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

setTimeout(lightCheck, 1000);
nightAndDay();
