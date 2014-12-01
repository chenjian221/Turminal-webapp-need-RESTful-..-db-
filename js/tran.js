function Transaction (id,time,duration,rate,sid,tid,classes,review,reply,rating,confirmed) {
	this.conf = function () {
		return $.ajax({
			url : "../../db/transaction.php",
			dataType : "json",
			async : false,
			data: "f=con"+
			"&sid="+sid+
			"&tid="+tid+
			"&class="+classes+
			"&rate="+rate,
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
 	this.create = function () {
		return $.ajax({
			url : "../../db/transaction.php",
			dataType : "json",
			async : false,
			data: "f=add"+
			"&sid="+sid+
			"&tid="+tid+
			"&class="+classes+
			"&duration="+duration,
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
	this.list = function () {
		return $.ajax({
			url : "../../db/transaction.php",
			dataType : "json",
			async : false,
			data: "f=list"+
			"&sid="+sid+
			"&con="+confirmed,
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
	this.list2 = function () {
		return $.ajax({
			url : "../../db/transaction.php",
			dataType : "json",
			async : false,
			data: "f=list"+
			"&tid="+tid+
			"&con="+confirmed,
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