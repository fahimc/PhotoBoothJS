var DataModel = function(){
	this.viewCollection =[];
	
	this.hasView = function(classID)
	{
		return (this.viewCollection[classID]?true:false);
	}
	this.addView =function(classID,item)
	{
		if(!this.hasView(classID))this.viewCollection[classID]=item;
	}
	this.removeView =function(classID,item)
	{
		if(this.hasView(classID))delete this.viewCollection[classID];
	}
	this.getView =function(classID,item)
	{
		if(this.hasView(classID))return this.viewCollection[classID];
	}
	
};
Class.extend(DataModel,Model);
