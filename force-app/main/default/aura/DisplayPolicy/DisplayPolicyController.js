({
	handleFontColor : function(component, event, helper) {
        var colorFont = component.get("v.iconCheck");
        if(colorFont == true){
            component.set("v.fontColorValue","slds-text-color_success");
        }else{
            component.set("v.fontColorValue","slds-text-color_error");
        }
		
	}
})