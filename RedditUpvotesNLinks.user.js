// ==UserScript==
// @name        Reddit Auto Upvotes & Links
// @namespace   jBlue
// @description Upvotes all links and opens them in new tabs
// @include     https://www.reddit.com/*
// @version     1.0.1
// @grant       none
// ==/UserScript==

function getAllLinks() {
	var allVals = document.getElementById("siteTable").children;
	var newVals = [];
	for (var c = 0; c < allVals.length; c++){
		if (allVals[c].className != "clearleft" && allVals[c].className != "nav-buttons"){
			newVals.push(allVals[c]);
		}
	}
	return newVals;
}

function getLinksArray(lar, lchildren) {
	var linksFound = 0;
	for (var i = 0; i < lchildren.length; i++){
		var preLink = lchildren[i].children[4].children[3].children;
		var found = new Boolean(false);
		var foundNum = 0;
		while (found == false){
			if (foundNum == preLink.length){
				found = true;
			}else{
				if (preLink[foundNum].className === "first"){
					lar.push(preLink[foundNum].children[0].href);
					found = true;
				}else{
					foundNum++;
				}
			}
		}
	}
	return lar;
}

function upvotes(someArr) {
	for (var k = 0; k < someArr.length; k++){
		someArr[k].children[2].children[0].click();
	}
}

function newTabs(theL) {
	for (var l = 0; l < theL.length; l++){
		openNewBackgroundTab(theL[l]);
	}
}

function openNewBackgroundTab(tabLink){
    var a = document.createElement("a");
    a.href = tabLink;
    var evt = document.createEvent("MouseEvents");
    //the tenth parameter of initMouseEvent sets ctrl key
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                                true, false, false, false, 0, null);
    a.dispatchEvent(evt);
}

function runner() {
	var allLinks = getAllLinks();
	var linkArray = [];
	var theLinks = getLinksArray(linkArray, allLinks);
	upvotes(allLinks);
	setTimeout(newTabs, 2000, theLinks);
	newTabs(theLinks);
}

function semiRunner(){
	var allLinks = getAllLinks();
	var linkArray = [];
	var theLinks = getLinksArray(linkArray, allLinks);
	upvotes(allLinks);
}

function doc_keyUp(e){
	if (e.shiftKey && e.keyCode == 73){
		semiRunner();
		
	}else if (e.shiftKey && e.keyCode == 85) {
		runner();
	}
}

document.addEventListener("keyup", doc_keyUp, false);
