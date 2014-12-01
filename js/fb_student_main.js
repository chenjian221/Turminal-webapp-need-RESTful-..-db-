window.fbAsyncInit = function() {

  FB.init({
    appId      : '1505571693049033',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,
    version    : 'v2.1'
  });
};


$(document).ready(function () {
	FB.getLoginStatus(function(response){

	});
});