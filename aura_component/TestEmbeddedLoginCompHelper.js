({
	qsToEventMap: {
        'startURL'  : 'e.c:setStartUrl'
    },

    qsToEventMap2: {
        'expid'  : 'e.c:setExpId'
    },
    getCommunityForgotPasswordUrl : function (component, event, helpler) {
        var action = component.get("c.getForgotPasswordUrl");
        action.setCallback(this, function(a){
        var rtnValue = a.getReturnValue();
            if (rtnValue !== null) {
                component.set('v.communityForgotPasswordUrl',rtnValue);
            }
        });
        $A.enqueueAction(action);
    },
    
    getCommunitySelfRegisterUrl : function (component, event, helpler) {
        var action = component.get("c.getSelfRegistrationUrl");
        action.setCallback(this, function(a){
        var rtnValue = a.getReturnValue();
            if (rtnValue !== null) {
                component.set('v.communitySelfRegisterUrl',rtnValue);
            }
        });
        $A.enqueueAction(action);
    },
    
    getOrgId : function (component, event, helpler) {
        var action = component.get("c.getOrgId");
        action.setCallback(this, function(a){
        var rtnValue = a.getReturnValue();
            if (rtnValue !== null) {
                component.set('v.orgId',rtnValue);
            }
        });
        $A.enqueueAction(action);
    },
    
    getSiteURL : function (component, event, helpler) {
        var action = component.get("c.getSiteURL");
        action.setCallback(this, function(a){
        var rtnValue = a.getReturnValue();
            if (rtnValue !== null) {
                component.set('v.encodedSiteUrl',rtnValue);
            }
        });
        $A.enqueueAction(action);
    },
    
    getAuthProviders : function (component, event, helpler) {
        var action = component.get("c.getAuthProviders");
        
        var responseType = component.get("v.responseType");
        var clientId = component.get("v.clientId");
        var redirectUri = component.get("v.redirectUri");
        var state = component.get("v.state");
        
        var baseUrl = 'https://embedded-login-own-developer-edition.ap16.force.com/embeddedLoginCommunity/services/auth/sso/';
        
        action.setCallback(this, function(a){
        var rtnValue = a.getReturnValue();
            if (rtnValue !== null) {
                rtnValue.forEach(item => {
                    
                    var url = '/services/oauth2/authorize?response_type=' + responseType + '&client_id=' + clientId + '&redirect_uri=' + redirectUri + '&state=' + state;
                    url = encodeURIComponent(url);           
                    
                    item.startUrl = baseUrl + item.DeveloperName + '?startURL=' + url;
                    console.log(item.startUrl);
                })
             
                component.set('v.authProviders',rtnValue);                             
            }
        });
        $A.enqueueAction(action);
    },
    
    getMyStartUrl : function (component, event, helpler) {
        var action = component.get("c.getMyStartUrl");
        action.setCallback(this, function(a){
        var rtnValue = a.getReturnValue();
            console.log(rtnValue);
        });
        $A.enqueueAction(action);
    },
})