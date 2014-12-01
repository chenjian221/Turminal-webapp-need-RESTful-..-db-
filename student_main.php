<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tutor main page</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="css/style.css">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/facebook.js"></script>
    <script src="js/student.js"></script>
    <script src="js/student_func.js"></script>
    <script src="js/tutor.js"></script>
    <script src="js/tutor_func.js"></script>
    <script src="js/tran.js"></script>
    <script src="js/tran_func.js"></script>
    <script type="text/javascript">var StudentID = <?php echo $_GET['sid'] ?>;</script>
    <section id="login">
      <div class="container">
          <div class="row">
              <div class="col-xs-12">
                  <div class="form-wrap">
                  <h1>Welcome to Main Page!</h1>
                      <button type="button" class="btn st btn-lg btn-block" onclick="gotoStudentInfo(<?php echo $_GET['sid'] ?>)">Your Information</button>
                      <br>  
                      <button type="button" class="btn st btn-lg btn-block" onclick="listConfirmed(1)">Confirmed Transaction </button>
                      <br> 
                      <div id = "con">
                      </div>
                      <button type="button" class="btn st btn-lg btn-block" onclick="listConfirmed(2)">Unconfirmed Transaction</button>
                      <br> 
                      <div id = "uncon">
                      </div>
                      <button type="button" class="btn st btn-lg btn-block" onclick="gotoFindTutor(<?php echo $_GET['sid'] ?>)">Find a tutor</button>
                      <br>
                      
                      <button type="button" class="btn fb btn-lg btn-block" onclick="facebookLogout()">Log Out</button>
                  </div>
              </div> <!-- /.col-xs-12 -->
          </div> <!-- /.row -->
      </div> <!-- /.container -->
  </section>
  </body>
</html>