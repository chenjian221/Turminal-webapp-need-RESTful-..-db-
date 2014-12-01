function confirmTransation (classes) {
	var rate = $('#rate').val();
	if (rate == 0) {
		rate = 0.01;
	}
	var tran = new Transaction(null,null,null,rate,StudentID,TutorID,classes,null,null,null,null);
	var msg = null;
	var promise = tran.conf();
	promise.success(function(data) {
		console.log("attempt: " + data);
		msg = data;
	});
	if (msg != null) {
		alert("Success, waiting for the student to email you back");
		window.open("tutor_main.php?f=get&tid="+TutorID,"_self");
		return;
	} else {
		alert("Plese enter the hourly rate");
		return;
	}
}
function createTransation () {
	var duration = $('#duration').val();
	var classes = $('#classes').val();
	//console.log(classes);
	var tran = new Transaction(null,null,duration,null,StudentID,TutorID,classes,null,null,null,null);
	var msg = null;
	var promise = tran.create();
	promise.success(function(data) {
		console.log("attempt: " + data);
		msg = data;
	});
	if (msg != null) {
		alert("Success, waiting for the tutor to reply");
		window.open("student_main.php?sid="+StudentID,"_self");
		return;
	} else {
		alert("Plese enter the class number");
		return;
	}
}
function listConfirmedTutor (con){
	var tran = new Transaction(null,null,null,null,null,TutorID,null,null,null,null,con);
	var msg = null;
	var promise = tran.list2();
	promise.success(function(data) {
		console.log("attempt: " + data);
		msg = data;
	});
	var array= ["","CS","EE","CompE","ME","CE","Bio","BME","IE","Math","ID"];
	var str = "<div class=\"list-group\">";
	if (msg != null) {
		for (var i = 0; msg[i]!=undefined; i++) {
			student = new Student(null,null,null,null,null,msg[i]['S_ID'])
			m = null;
			p = student.getInfo();
			p.success(function(data) {
				console.log("attempt: " + data);
				m = data;
			});
			str += "<a href=\""+((con == 2)? "conf_tran.php?tid="
				+ TutorID+"&sid="+msg[i]['S_ID']+"&name="+m[0]['Name']+"&class=" +msg[i]['Class']+"&duration="+ msg[i]['Duration']: "") 
				+ "\" class=\"list-group-item\">"+m[0]['Name']+", Class: " +msg[i]['Class']  +", Duration : "+msg[i]['Duration'] 
				+ ((con == 2)? "" : ", Rate: " + msg[i]['Rate'])+"</a>"
		}
	}
	str+="</div>"
	if (con == 1) {
		document.getElementById("con").innerHTML=str;
	} else {
		document.getElementById("uncon").innerHTML=str;
	}
	
}
function listConfirmed (con){
	var tran = new Transaction(null,null,null,null,StudentID,null,null,null,null,null,con);
	var msg = null;
	var promise = tran.list();
	promise.success(function(data) {
		console.log("attempt: " + data);
		msg = data;
	});
	var array= ["","CS","EE","CompE","ME","CE","Bio","BME","IE","Math","ID"];
	var str = "<div class=\"list-group\">";
	if (msg != null) {
		for (var i = 0; msg[i]!=undefined; i++) {
			tutor = new Tutor(null,null,null,null,null,null,null,null,msg[i]['T_ID'])
			m = null;
			p = tutor.getInfo();
			p.success(function(data) {
				console.log("attempt: " + data);
				m = data;
			});
			console.log(msg[i]['T_ID']);
			str  += "<a class=\"list-group-item\">"+m[0]['Name']+", Class: " +array[m[0]['Major']]+" "+msg[i]['Class']  +((con == 1)? ", Email: "+ m[0]['Email'] + ", Rate: "+ msg[i]['Rate'] : "") +"</a>"
		}
	}
	str+="</div>"
	if (con == 1) {
		document.getElementById("con").innerHTML=str;
	} else {
		document.getElementById("uncon").innerHTML=str;
	}
	
}