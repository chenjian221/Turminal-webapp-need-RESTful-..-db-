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
      <h1>Confirm Transaction</h1>
      <table class="table table-bordered table-hover">
      <tbody>
      <tr>
          <td class="col-md-1">Name: </td>
          <td class="col-md-11"><?php echo $_GET['name'] ?></td>
        </tr>
      <tr>
          <td class="col-md-1">Class: </td>
          <td class="col-md-11"><?php echo $_GET['class'] ?></td>
        </tr>
      <tr>
          <td class="col-md-1">Durantion: </td>
          <td class="col-md-11"><?php echo $_GET['duration'] ?></td>
        </tr>
      <tr>
          <td class="col-md-1">Rate: ($/hour)</td>
          <td class="col-md-11"><input type="text" id="rate" class="form-control" value="" required="required"></td>
        </tr>

      </tbody>
      </table>
      <div class="row">
        <div class=" col-xs-6">
          <button id ="edit" type="button" style="background-color:lightgreen" class="btn btn-block btn-custom btn-lg" onclick="confirmTransation(<?php echo $_GET['class'] ?>)">Submit</button>
        </div>
        <div class=" col-xs-6">
          <button id = "goback" type="button" style="background-color:lightblue" class="btn btn-block btn-custom btn-lg" onclick="gotoTutorMain(<?php echo $_GET['tid'] ?>)">
            Go Back
          </button>
        </div>
      </div>
      <br>
     <button id = "goback" type="button" style="background-color:red" class="btn btn-block btn-custom btn-lg" onclick="logOut()">
                          Log Out
                      </button>
    </div>
    </section>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/index.js"></script>
    <script src="js/tran.js"></script>
    <script src="js/tran_func.js"></script>
    <script src="js/student_func.js"></script>
    <script src="js/tutor_func.js"></script>
    <script type="text/javascript">var StudentID = <?php echo $_GET['sid'] ?>;</script>
    <script type="text/javascript">var TutorID = <?php echo $_GET['tid'] ?>;</script>
  </body>
</html>