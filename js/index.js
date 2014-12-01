
function gotoTutorLogin() {
	window.open("tutor_login.html","_self");
}
function gotoCreateTutor() {
	window.open("tutor_create.html","_self");
}
function gotoTutorMain(tid) {
    this.id = tid;
	window.open("tutor_main.php?f=get&tid="+id,"_self");
}


function gotoStudentLogin () {
	window.open("student_login.html","_self");
}
function gotoStudentMain(){
	window.open("student_main.php","_self");
}
function logOut(){
    window.open("index.html","_self");
}
function showPassword() {
    
    var key_attr = $('#key').attr('type');
    if(key_attr != 'text') {
        
        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');
        
    } else {
        
        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');
        
    }
}