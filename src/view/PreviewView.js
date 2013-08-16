var PreviewView=function(){
	this.init();
};
Class.extend(PreviewView,View);

(function()
{
	var _ =PreviewView.prototype;
	_.classNames=
	{
		holder:"previewView",
		previewCanvas:"previewCanvas",
		previewImage:"previewImage"
	}
	
	_.init=function()
	{
		this.holder = document.getElementById(this.classNames.holder);
		
		this.getSnapShot();
	}
	_.getSnapShot=function()
	{
		var video = document.getElementById("camera");
		var canvas = document.getElementById(this.classNames.previewCanvas);
		canvas.width = Utensil.stageWidth();
		canvas.height = Utensil.stageHeight();
		
		var context = canvas.getContext('2d');
		var img = document.getElementById(this.classNames.previewImage);
		context.drawImage(video, 0, 0,Utensil.stageWidth(),Utensil.stageHeight());
		img.src= canvas.toDataURL('image/webp');
		// img.style.width = Utensil.stageWidth()+"px";
		// img.style.height = Utensil.stageHeight()+"px";
	}
})();

