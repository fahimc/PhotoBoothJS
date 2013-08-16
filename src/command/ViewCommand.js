var ViewCommand=
{
	show:function(classID)
	{
		var view = new window[classID]();
		if(!model.hasView(classID))model.addView(classID,view);
		view.show();
		
	},
	hide:function(classID)
	{
		if(model.hasView(classID))model.getView(classID).hide();
	},
	destory:function(classID)
	{
		if(model.hasView(classID))
		{
			model.getView(classID).hide();
			model.removeView(classID);
		}
	}
}
