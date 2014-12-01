function gotoStudentInfo (sid) {
	window.open( "student_info.php?sid="+sid,"_self");
}
function gotoStudentMain (sid) {
	window.open( "student_main.php?sid="+sid,"_self");
}
function gotoFindTutor(sid) {
	window.open( "findATutor.php?sid="+sid,"_self");
}
function loadStudentInfo (sid) {
	this.id = sid;
	if (id == undefined) {
		alert("Invalid credential")
		window.open("index.html","_self");
	}
	var student = new Student(null,null,null,null,null,id);
	var msg = null;
	promise = student.getInfo();
	promise.success(function(data) {
		console.log("attempt: " + data);
		msg = data;
	});
	$('#Name').text(msg[0]['Name']);
	$('#Phone').text(msg[0]['Phone']);
	$('#Email').text(msg[0]['Email']);
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
	return;
}
function editStudentInfo (sid) {
	var func = document.getElementById("edit").innerHTML;
	if (func == "Submit") {
		$('#edit').text("Loading");

		var name = $('#Name1').val();
		var phone = $('#Phone1').val();
		var gender = $('#Gender1').val();
		student = new Student(name,null,gender,phone,null,id);
		promise = student.update();
		var m;
		promise.success(function(data) {
			console.log("attempt: " + data);
			m = data;
		});
		if (m != null) {
			console.log(m[0]);
			alert("Update success")
			window.open("student_info.php?sid="+sid,"_self");
		} else {
			alert("Failed to update")
		}
		return;
	}
	
	if (func != "Loading") {
		$('#edit').text("Submit");
		document.getElementById("Name").innerHTML = "<input id =\"Name1\" type=\"text\" value = \"" + $('#Name').text() + "\">";
		document.getElementById("Phone").innerHTML = "<input id =\"Phone1\" type=\"text\" value = \"" + $('#Phone').text() + "\">";
		array  = ["","",""];
		//console.log($('#Gender').text());
		switch($('#Gender').text()) {
			case "Male":
				array[0] = "selected";
				break;
			case "Female":
				array[1] = "selected";
				break;
			default:
				array[2] = "selected";
				break;
		}
		document.getElementById("Gender").innerHTML = "<select name=\"Gender1\" id=\"Gender1\" class=\"form-control\" required=\"required\">" + 
	                            "<option value=\"3\" "+array[2] +"></option>"+ 
	                            "<option value=\"2\""+array[1] +">Female</option>"+ 
	                            "<option value=\"1\""+array[0] +">Male</option>"+ "</select>";
		return;
	}
}