var CameraView=function(){
	this.init();
};
Class.extend(CameraView,View);

(function()
{
	var _ =CameraView.prototype;
	_.classNames=
	{
		holder:"cameraView",
		countText:"countText",
		cameraButton:"cameraButton",
		video:"camera"
	}
	_.countFrom = 5;
	_.currentCount=0;
	_.timer;
	_.init=function()
	{
		this.holder = document.getElementById(this.classNames.holder);
		var cameraButton = document.getElementById(this.classNames.cameraButton);
		
		Utensil.addListener(cameraButton,"mousedown",this.getHandler("onReadyClicked"));
		Camera.attach(document.getElementById(this.classNames.video),this.getHandler("onCameraSuccess"),this.getHandler("onCameraFail"));
		
	}
	_.updateCount=function()
	{
		var text =document.getElementById(this.classNames.countText);
		text.innerHTML = this.countFrom-this.currentCount;
	}
	_.hideButton=function()
	{
		var cameraButton = document.getElementById(this.classNames.cameraButton);
		cameraButton.style.display="none";
	}
	_.onReadyClicked=function(event)
	{
		this.hideButton();
		this.updateCount();
		this.timer = setInterval(this.getHandler("onInterval"),1000);
	}
	_.onCameraSuccess=function(stream)
	{
		console.log(stream);
		document.getElementById(this.classNames.video).src = window.URL.createObjectURL(stream);
	}
	_.onCameraFail=function()
	{
		
	}
	_.onInterval=function()
	{
		this.currentCount++;
		this.updateCount();
		if(this.currentCount>=this.countFrom)
		{
			clearInterval(this.timer);
			this.end();
		}
	}
	_.end=function()
	{
		ViewCommand.hide("CameraView");
		ViewCommand.show("PreviewView");
		ViewCommand.destory("CameraView");
	}
})();

