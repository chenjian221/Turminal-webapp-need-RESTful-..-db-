function gotoTutorMain (tid) {
	window.open("tutor_main.php?f=get&tid="+tid,"_self");
}
function gotoTutorinfo(tid) {
	window.open("tutor_info.php?tid="+tid,"_self");
}
function createTutor() {
	var name = $('#name').val();
	var email = $('#email').val();
	var phone = $('#phone').val();
	var gender = $('#gender').val();
	var password = $('#key').val();
	var password2 = $('#key2').val();
	var year =$('#year').val();
	if (password != password2) {
		alert("Two passwords does not match");
		return;
	}
	var tutor = new Tutor(null, email, null, null, null, null, null,null,null);
	var msg = null;
	var promise = tutor.getName();
	promise.success(function(data) {
		console.log("attempt: " + data);
		msg = data;
	});
	if (msg != null) {
		alert("This email have already been registered.");
		return;
	}
	tutor = new Tutor(name, email, password, phone, 1, 1, year,gender,null);
	promise = tutor.create();
	
	promise.success(function(data) {
		console.log("attempt: " + data);
		msg = data;
	});
	if (msg != null) {
		window.open("tutor_main.php?f=get&tid="+msg['ID'],"_self");
	} else {

	}
}
function listTutorByMajor () {
		var array= ["","CS","EE","CompE","ME","CE","Bio","BME","IE","Math","ID"];
	
	major = $('#major').val();
	console.log(major);
	var tutor = new Tutor(null, null, null, null, null, major, null,null,null);
	var msg = null;
	var promise = tutor.listByMajor();
	promise.success(function(data) {
		console.log("attempt: " + data);
		msg = data;
	});
	var year = ["","Freshman","Sophomore","Junior","Senior","Graduated"];
	var gender = ["","Male","Female","Not provided"]
	var str = "<div class=\"list-group\">";
	for (var i = 0; msg[i]!=undefined; i++) {
		str = str + "<a href=\"add_tran.php?tid="+msg[i]['Id']+"&sid="+StudentID+"&class="+array[$('#major').val()]+"\" class=\"list-group-item\">"+msg[i]['Name']+", "+gender[msg[i]['gender']]+", "+year[msg[i]['year']]+"</a>"
	}
	str+="</div>"
	document.getElementById("result").innerHTML=str;

}
function tutorLogin() {
	var email = $('#email').val();
	var password = $('#key').val();
	var tutor = new Tutor(null, email, password, null, null, null, null,null,null);
	var msg = null;
	var promise = tutor.getName();
	promise.success(function(data) {
		console.log("attempt: " + data);
		msg = data;
	});
	console.log(msg[0]['Password']);
	var password2 = msg[0]['Password'];
	if (password == password2) {
		window.open("tutor_main.php?f=get&tid="+msg[0]['ID'],"_self");
	}
}
function loadTutorInfo (tid) {
	this.id = tid;
	if (id == undefined) {
		alert("Invalid credential")
		window.open("index.html","_self");
	}
	var tutor = new Tutor(null, null, null, null, null, null, null,null,id);
	var msg = null;
	promise = tutor.getInfo();
	promise.success(function(data) {
		console.log("attempt: " + data);
		msg = data;
	});
	$('#Name').text(msg[0]['Name']);
	$('#Phone').text(msg[0]['Phone']);
	$('#Email').text(msg[0]['Email']);
	switch(msg[0]['Year']) {
		case "1":
			$('#Year').text("College Freshman");
			break;
		case "2":
			$('#Year').text("College Sophomore");
			break;
		case "3":
			$('#Year').text("College Junior");
			break;
		case "4":
			$('#Year').text("College Senior");
			break;
		case "5":
			$('#Year').text("College Graduated");
			break;
	}
	//$('#Year').text(msg[0]['Year']);
	$('#Major').text(msg[0]['Major']);
	switch(msg[0]['Gender']) {
		case "1":
			$('#Gender').text("Male");
			break;
		case "2":
			$('#Gender').text("Female");
			break;
		case "3":
			$('#Gender').text("");
			break;
	}
	
	$('#Schedule').text(msg[0]['Schedule']);	
}
function editTutorInfo(tid) {
	this.id = tid;
	var tutor = new Tutor(null, null, null, null, null, null, null,null,id);
	var msg = null;
	promise = tutor.getInfo();
	promise.success(function(data) {
		console.log("attempt: " + data);
		msg = data;
	});
	var func = document.getElementById("edit").innerHTML;
	if (func == "Submit") {
		var name = $('#Name1').val();
		var phone = $('#Phone1').val();
		//var email = $('#Email1').val();
		var year = $('#Year1').val();
		//$('#Major').val();
		var gender = $('#Gender1').val();
		//$('#Schedule').val();
		var password = $('#key11').val();
		var password2 = $('#key21').val();
		if (password != password2) {
		alert("Two passwords does not match");
		return;
		}
		if (password == "") {
			password = password2 = msg[0]['Password']
		}
		$('#edit').text("Loading");
		//console.log(password);
		tutor = new Tutor(name, msg[0]['Email'], password, phone, 1, 1, year,gender,id);
		promise = tutor.update();
		var m;
		promise.success(function(data) {
			console.log("attempt: " + data);
			m = data;
		});
		if (msg != null) {
			console.log(m[0]);
			alert("Update success")
			window.open("tutor_info.php?tid="+tid,"_self");
		} else {
			alert("Failed to update")
		}
		return;

	}
	if (func != "Loading") {
		$('#edit').text("Submit");
		document.getElementById("Name").innerHTML = "<input id =\"Name1\" type=\"text\" value = \"" + msg[0]['Name'] + "\">";
		document.getElementById("Phone").innerHTML = "<input id =\"Phone1\" type=\"text\" value = \"" + msg[0]['Phone'] + "\">";
		//document.getElementById("Email").innerHTML = "<input id =\"Email1\" type=\"text\" value = \"" + msg[0]['Email'] + "\">";
		var array= ["","","","","",""];
		switch(msg[0]['Year']) {
			case "1":
				array[1] = "selected";
				break;
			case "2":
				array[2] = "selected";
				break;
			case "3":
				array[3] = "selected";
				break;
			case "4":
				array[4] = "selected";
				break;
			case "5":
				array[5] = "selected";
				break;
		}
		document.getElementById("Year").innerHTML = "<select name=\"Year1\" id=\"Year1\" class=\"form-control\" required=\"required\">" + 
	                            "<option value=\"1\""+array[1] +">College Freshman</option>"+ 
	                            "<option value=\"2\""+array[2] +">College Sophomore</option>"+ 
	                            "<option value=\"3\" "+array[3] +">College Junior</option>  "+ 
	                            "<option value=\"4\""+array[4] +">College Senior</option>  "+ 
	                            "<option value=\"5\""+array[5] +">College Graduated</option>"+ 
	                        "</select>";
		//document.getElementById("Major").innerHTML = "<input id =\"name1\" type=\"text\" value = \"" + msg[0]['Major'] + "\">";
		//document.getElementById("Class").innerHTML = "<input id =\"name1\" type=\"text\" value = \"" + msg[0]['Class'] + "\">";
		array  = ["","",""];
		switch(msg[0]['Gender']) {
			case "1":
				array[0] = "selected";
				break;
			case "2":
				array[1] = "selected";
				break;
			case "3":
				array[2] = "selected";
				break;
		}
		document.getElementById("Gender").innerHTML = "<select name=\"Gender1\" id=\"Gender1\" class=\"form-control\" required=\"required\">" + 
	                            "<option value=\"3\" "+array[2] +"></option>"+ 
	                            "<option value=\"2\""+array[1] +">Female</option>"+ 
	                            "<option value=\"1\""+array[0] +">Male</option>"+ "</select>";
		//document.getElementById("Name").innerHTML = "<input id =\"name1\" type=\"text\" value = \"" + msg[0]['Name'] + "\">";
		$("#key").text("Password");
		document.getElementById("key1").innerHTML = "<input id =\"key11\" type=\"text\" value = \"\">";
		$("#key0").text("Re-enter the password");
		document.getElementById("key2").innerHTML = "<input id =\"key21\" type=\"text\" value = \"\">";
		return;
	}
}