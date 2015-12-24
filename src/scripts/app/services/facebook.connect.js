/**
 * Created by felul on 24/10/2015.
 */
(function(window, document, $$) {
  'use strict';

  if (!window.APP)
    window.APP = {
      business: {},
      interface: {},
      repository: {},
      services: {}
    };

  var config
    , Promise
    , FacebookConnect;

  config = {
    appId: '793846024057710',
    apiVersion: 'v2.5'
  };

  Promise = window.APP.interface.Promise;

  FacebookConnect = {
    login: login
  };

  function login() {

    var redirect_uri
      , url
      , browser;

    redirect_uri = 'http://localhost/callback';
    url = 'https://www.facebook.com/v2.0/dialog/oauth?client_id=' + config.appId +
      '&redirect_uri=' + redirect_uri +
      '&response_type=token' +
      '&scope=email';

    return new Promise(function(success, reject) {

      //FB.init({
      //  appId      : config.appId,
      //  xfbml      : true,
      //  version    : config.apiVersion
      //});
      //
      //FB.getLoginStatus(function(response) {
      //  if (response.status === 'connected') {
      //    // the user is logged in and has authenticated your
      //    // app, and response.authResponse supplies
      //    // the user's ID, a valid access token, a signed
      //    // request, and the time the access token
      //    // and signed request each expire
      //    var uid = response.authResponse.userID;
      //    var accessToken = response.authResponse.accessToken;
      //
      //    success({
      //      uid: uid,
      //      accessToken: accessToken
      //    });
      //  } else if (response.status === 'not_authorized') {
      //    reject('Facebook returned error_code=100: Invalid permissions');
      //  } else {
      //    // the user isn't logged in to Facebook.
      //  }
      //});

      browser = window.open(url, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
      browser.addEventListener('loadstart', checkPopupFacebook);

      function checkPopupFacebook(event) {

        if (event.url.indexOf(redirect_uri) === 0) {
          browser.removeEventListener('exit', function() {});
          browser.close();

          var callbackResponse = (event.url).split("#")[1];
          var responseParameters = (callbackResponse).split("&");
          var parameterMap = [];
          for(var i = 0; i < responseParameters.length; i++) {
            parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
          }
          if(parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
            success({ access_token: parameterMap.access_token, expires_in: parameterMap.expires_in });
          } else {
            if (event.url.indexOf('error_code=100') !== 0)
              reject('Facebook returned error_code=100: Invalid permissions');
            else
              reject('Problem authenticating');
          }
        }

      }

    });

  }

  window.APP.services.FacebookConnect = FacebookConnect;

})(this, document, this.$$);
