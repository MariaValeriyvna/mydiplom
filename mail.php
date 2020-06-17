 <?php
$recepient="malevanayamv@mail.ru";

$name = trim ($_POST["name"]);
$phone = trim ($_POST["phone"]);
$email = trim ($_POST["email"]);
$message=" \n имя: $name \n телефон: $phone \n почта: $email";

$pagetitle = "новая заявка с сайта maleval0.beget.tech";
mail($recepient, $pagetitle, $message)
?> 
