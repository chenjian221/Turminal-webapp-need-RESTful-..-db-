function Student (name,email,gender,phone,type,id) {
	this.name = name;
	this.email = email;
	this.gender = gender;
	this.phone = phone;
	this.type = type;
	this.id = id;
	this.getName = function () {
		return $.ajax({
			url : "../../db/student.php",
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
	this.create = function() {
		return $.ajax({
			url : "../../db/student.php",
			dataType : "json",
			async : false,
			data: "f=add"+
			"&name="+this.name+
			"&gender="+this.gender+
			"&email="+this.email+
			"&phone="+this.phone,
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
			url : "../../db/student.php",
			dataType : "json",
			async : false,
			data: "f=get"+
			"&sid="+this.id,
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
			url : "../../db/student.php",
			dataType : "json",
			async : false,
			data: "f=update"+
			"&name="+this.name+
			"&gender="+this.gender+
			"&phone="+this.phone+
			"&sid="+this.id,
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