/*

// This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
*/
window.fbAsyncInit = function() {

  FB.init({
    appId      : '1505571693049033',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,
    version    : 'v2.1'
  });

  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
        console.log('Logged in.');
        FB.api('/me', {fields: 'email'}, function(response) {
          //console.log(response['email']);
        });
    }
/*    else {
      FB.login();
    }*/
  });
};
function facebookLogin() {
  FB.api('/me', function(response) {
    email = response['email'];
    name = response['name'];
    gender = 3;
    if (response['gender'] == 'male') {
      gender = 1;
    } else if (response['gender']== 'female') {
      gender =2;
    } else {
      gender =3;
    }
    var student = new Student(name,email,gender,1111111111,1,null);
    var msg = null;
    var promise = student.getName();
    promise.success(function(data) {
      console.log("attempt: " + data);
      msg = data;
    });
    if (msg == '-1') {
      promise = student.create();
      promise.success(function(data) {
        console.log("attempt: " + data);
        msg = data;
      });
      window.open("student_main.php?sid="+msg['ID'],"_self");
    } else {
      window.open("student_main.php?sid="+msg['ID'],"_self");
    }
  });
}
function facebookLogout () {
  FB.logout(function(response) {
    window.open("index.html","_self");
  });
}
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=1505571693049033&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));