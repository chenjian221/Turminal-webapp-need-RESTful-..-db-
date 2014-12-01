
function Tutor(name,email,password,phone,classes,major,year,gender,tid) {
	this.name = name;
	this.email = email;
	this.password = password;
	this.phone = phone;
	this.classes = classes;
	this.major = major;
	this.year = year;
	this.gender = gender;
	this.tid = tid;
	this.getName = function () {
		return $.ajax({
			url : "../../db/tutor.php",
			dataType : "json",
			async : false,
			data: "f=get"+
			"&email="+this.email,
			type : 'GET',
			success : function(data) {
				console.log("Data Success");
				console.log(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
				console.log(jqXHR);
			}
		});
	};
	this.listByMajor = function () {
		return $.ajax({
			url : "../../db/tutor.php",
			dataType : "json",
			async : false,
			data: "f=list"+
			"&major="+this.major,
			type : 'GET',
			success : function(data) {
				console.log("Data Success");
				console.log(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
				console.log(jqXHR);
			}
		});
	}
	this.update = function () {
	return $.ajax({
			url : "../../db/tutor.php",
			dataType : "json",
			async : false,
			data: "f=update"+
			"&name="+this.name+
			"&gender="+this.gender+
			"&phone="+this.phone+
			"&email="+this.email+
			"&class="+this.classes+
			"&year="+this.year+
			"&major="+this.major+
			"&password="+this.password +
			"&tid="+this.tid,
			type : 'GET',
			success : function(data) {
				console.log("Data Success");
				console.log(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
				console.log(jqXHR);
			}
		});
	}	
	this.create = function() {
		return $.ajax({
			url : "../../db/tutor.php",
			dataType : "json",
			async : false,
			data: "f=add"+
			"&name="+this.name+
			"&gender="+this.gender+
			"&phone="+this.phone+
			"&email="+this.email+
			"&class="+this.classes+
			"&year="+this.year+
			"&major="+this.major+
			"&password="+this.password,
			type : 'GET',
			success : function(data) {
				console.log("Data Success");
				console.log(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
				console.log(jqXHR);
			}
		});
	};
	this.getInfo = function () {
		return $.ajax({
			url : "../../db/tutor.php",
			dataType : "json",
			async : false,
			data: "f=get"+
			"&tid="+this.tid,
			type : 'GET',
			success : function(data) {
				console.log("Data Success");
				console.log(data);
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log("Status: " + textStatus);
				console.log("Error: " + errorThrown);
				console.log(jqXHR);
			}
		});
	}
}


