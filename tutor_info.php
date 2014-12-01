<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>View Resource</title>
		<script type="text/javascript"></script>
		<!-- Bootstrap -->
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" href="css/style.css">

		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	<body onload="loadTutorInfo(<?php echo $_GET['tid'] ?>)">
		<div class="container">
		<h1 style= "text-align: center">Your information</h1>
		<table class="table table-bordered table-hover">
			<tbody>
				<tr>
					<td class="col-md-0">Name</td>
					<td class="col-md-12" id ="Name"></td>
				</tr>
				<tr>
					<td>Phone</td>
					<td id ="Phone"></td>
				</tr>
				<tr>
					<td>Email</td>
					<td id ="Email"></td>
				</tr>
				<tr>
					<td>Year</td>
					<td id ="Year"></td>
				</tr>
				<tr>
					<td>Major</td>
					<td id ="Year"></td>
				</tr>
				<tr>
					<td>Class</td>
					<td id ="Major"></td>
				</tr>
				<tr>
					<td>Gender</td>
					<td id ="Gender"></td>
				</tr>
				<tr>
					<td>Schedule</td>
					<td id ="Schedule"></td>
				</tr>
				<tr>
					<td id="key"></td>
					<td id ="key1"></td>
				</tr>
				<tr>
					<td id="key0"></td>
					<td id ="key2"></td>
				</tr>
			</tbody>
		</table>
			<div class="row">
				<div class=" col-xs-6">
					<button id ="edit" type="button" style="background-color:lightgreen" class="btn btn-block btn-custom btn-lg" onclick="editTutorInfo(<?php echo $_GET['tid'] ?>)">Edit</button>
				</div>
				<div class=" col-xs-6">
					<button id = "goback" type="button" style="background-color:lightblue" class="btn btn-block btn-custom btn-lg" onclick="gotoTutorMain(<?php echo $_GET['tid']?>)">
						Go Back
					</button>
				</div>
			</div>
			<hr>
			<div class="row">
				<div class=" col-xs-12">
					<button id = "goback" type="button" style="background-color:red" class="btn btn-block btn-custom btn-lg" onclick="logOut()">
							Log Out
					</button>
				</div>
			</div>

	
		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="js/bootstrap.min.js"></script>
		<script src="js/index.js"></script>
		<script src="js/tutor.js"></script>
		<script src="js/tutor_func.js"></script>
	</body>
</html>