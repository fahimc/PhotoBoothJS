var View = function(){};
(function()
{
	var _ = View.prototype;
	_.holder;
	_.handlers = [];
	_.init=function()
	{
		
	}
	_.getHandler=function(callbackName)
	{
		var root = this;
		if(!this.handlers[callbackName])this.handlers[callbackName]=function(event)
		{
			root[callbackName](event);
		}
		return this.handlers[callbackName];
	}
	_.show=function()
	{
		if(this.holder)
		this.holder.style.display="block";
	}
	_.hide=function()
	{
		if(this.holder)
		this.holder.style.display="none";
	}
})();
