(function(window) {
 function Main() {
 if(window.addEventListener) {
 window.addEventListener("load", onLoad);
 } else {
 window.attachEvent("onload", onLoad);
 }
 
 }
 function onLoad() {
	window.model = new DataModel();
	
	ViewCommand.show("StartView");
 }
 Main();
 }
 )(window);
