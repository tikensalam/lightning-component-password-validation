({
    showPwdPolicy  : function (component, event, helper) {
      		component.set("v.displayDiv", true);
    },
    
    validatePwdPolicy : function(component, event, helper){
        var pwdContent = component.find("textPwd").get("v.value");
        var upperCheck = pwdContent.search(/[A-Z]/);
        var lowerCheck = pwdContent.search(/[a-z]/);
        var numberCheck = pwdContent.search(/[0-9]/);
        var specialCheck = pwdContent.search(/[!@#$%^&]/);
        var lengthCheck = pwdContent.length;
        
        if(upperCheck >= 0){
            component.set("v.checkUpper",true);
        }else{
            component.set("v.checkUpper",false);
        }
        
        if(lowerCheck >= 0){
            component.set("v.checkLower",true);
        }else{
            component.set("v.checkLower",false);
        }
        
        if(numberCheck >= 0){
            component.set("v.checkNumber",true);
        }else{
            component.set("v.checkNumber",false);
        }
        
        if(specialCheck >= 0){
            component.set("v.checkSpecial",true);
        }else{
            component.set("v.checkSpecial",false);
        }
        
        if(lengthCheck > 8){
            component.set("v.checkLength",true);
        }else{
           	component.set("v.checkLength",false); 
        }	 	
    },
    
    hidePwdPolicy : function (component, event, helper) {
      	component.set("v.displayDiv", false);

    },
    
    handleConfirmPassword : function(component, event, helper){
        var confirmPwdCmp = component.find("textConfirmPwd");
        var confirmPwd = confirmPwdCmp.get("v.value");
        var inputPwd = component.find("textPwd").get("v.value");
        if(inputPwd.localeCompare(confirmPwd) != 0){
        	confirmPwdCmp.setCustomValidity("Password do not match");   
        }else{
            confirmPwdCmp.setCustomValidity("");  	
        }
        confirmPwdCmp.reportValidity();
            
    }
})