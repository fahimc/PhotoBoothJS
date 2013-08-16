var StartView=function(){
	this.init();
};
Class.extend(StartView,View);

(function()
{
	var _ =  StartView.prototype;
	_.classNames=
	{
		holder:"startView",
		startButton:"startButton"
	}
	_.init=function()
	{
		this.holder = document.getElementById(this.classNames.holder);
		
		var startButton = document.getElementById(this.classNames.startButton);
		
		Utensil.addListener(startButton,"mousedown",this.getHandler("onStartClicked"));
	}
	
	_.onStartClicked=function(event)
	{
		ViewCommand.hide("StartView");
		ViewCommand.show("CameraView");
		ViewCommand.destory("StartView");
		
	}
})();
