<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>

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
  <body>
    
    <section id="login">
      <div class="container">
      <h1>Choose Tutor Major</h1>
        <select name="gender" id="major" class="form-control" required="required"> 
            <option value="1">CS</option>
            <option value="2">EE</option>
            <option value="3">CompE</option>  
            <option value="4">ME</option>  
            <option value="5">CE</option> 
            <option value="6">Bio</option>
            <option value="7">BME</option>
            <option value="8">IE</option>  
            <option value="9">Math</option>  
            <option value="10">ID</option>  
        </select>
        <br> 
        <button type="button" class="btn st btn-lg btn-block" onclick="listTutorByMajor()">Show Tutors</button>
                      <br> 
      </div>
      <div id = "result" class="container">
      </div>
    </section>
    
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/index.js"></script>
    <script src="js/tutor.js"></script>
    <script src="js/tutor_func.js"></script>
    <script type="text/javascript">var StudentID = <?php echo $_GET['sid'] ?></script>
  </body>
</html>