({
    initialize: function(component, event, helper) {
        $A.get("e.siteforce:registerQueryEventMap").setParams({"qsToEvent" : helper.qsToEventMap}).fire();    
        $A.get("e.siteforce:registerQueryEventMap").setParams({"qsToEvent" : helper.qsToEventMap2}).fire();
        
        component.set("v.communityForgotPasswordUrl", helper.getCommunityForgotPasswordUrl(component, event, helper));
        component.set("v.communitySelfRegisterUrl", helper.getCommunitySelfRegisterUrl(component, event, helper));
        helper.getOrgId(component, event, helper);
        helper.getSiteURL(component, event, helper);
        helper.getAuthProviders(component, event, helper);
        
        helper.getMyStartUrl(component, event, helper);
    },
	doLogin1 : function(component, event, helper) {
        
        console.log('action begin');     
        console.log(component.get("v.startUrl"));     
        
        var loginAction = component.get("c.myLogin");
        let startUrl = component.get("v.startUrl");
        // startUrl = decodeURIComponent(startUrl);
        
        loginAction.setParams({
            username: component.get("v.username"),
            password: component.get("v.passwd"),
            startUrl: startUrl,
        });
        loginAction.setCallback(this, function(response) {
            var state = response.getState();
            console.log(response.getError());
            console.log(response.getReturnValue());
            if (state === "SUCCESS") {
                console.log(response.getReturnValue())
            }
            else {
                console.log("Failed with state1: " + state);
            }
        });
        $A.enqueueAction(loginAction);
    },
    
    setStartUrl: function (component, event, helpler) {
        var startUrl = event.getParam('startURL');
        startUrl = decodeURIComponent(startUrl);
        if(startUrl) {
            component.set("v.startUrl", startUrl);
        }
    },
    
    getTest: function (component) {
        return '';
    },
    
    setExpId: function (component, event, helper) {
        var expId = event.getParam('expid');
        if (expId) {
            component.set("v.expid", expId);
        }
        helper.setBrandingCookie(component, event, helper);
    },
    
    onKeyUp: function(component, event, helpler){
        //checks for "enter" key
        if (event.getParam('keyCode')===13) {
            helpler.handleLogin(component, event, helpler);
        }
    },
    
    setBrandingCookie: function (component, event, helpler) {
        var expId = component.get("v.expid");
        if (expId) {
            var action = component.get("c.setExperienceId");
            action.setParams({expId:expId});
            action.setCallback(this, function(a){ });
            $A.enqueueAction(action);
        }
    }
})