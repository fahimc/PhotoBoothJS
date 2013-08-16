var Camera={
	isSupported:function()
	{
		return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
	},
	attach:function(video,successCallback,failCallback)
	{
		if(!this.isSupported())return;
		 navigator.getUserMedia({video: true, audio: true},successCallback,failCallback);
	}
}
navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL;