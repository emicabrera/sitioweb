<?php
// Check for empty fields
// if(empty($_POST['name'])      ||
//    empty($_POST['email'])     ||
//    empty($_POST['phone'])     ||
//    empty($_POST['message'])   ||
//    !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
//    {
//    echo "No arguments Provided!";
//    return false;
//    }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = 'emicabreraa@gmail.com'; // Email receptor.
$email_subject = "Cosulta via http://sitio.emilianocabrera.com de:  $name";
$email_body = "Nueva consulta realizada desde el sitio web http://sitio.emilianocabrera.com/.\n\n"."Consulta:\n\nNombre: $name\n\nEmail: $email_address\n\nTeléfono: $phone\n\nMessage:\n$message";
$headers = "From: noresponder@emilianocabrera.com\n"; // Mail ficticio que figura como emisor
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>