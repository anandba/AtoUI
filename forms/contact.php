<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/home/anandjap2210/PHPMailer-master/src/Exception.php';
require '/home/anandjap2210/PHPMailer-master/src/PHPMailer.php';
require '/home/anandjap2210/PHPMailer-master/src/SMTP.php';

// Instantiation and passing [ICODE]true[/ICODE] enables exceptions
$mail = new PHPMailer(true);

try {
 //Server settings
 $mail->SMTPDebug = 2; // Enable verbose debug output
 $mail->isSMTP(); // Set mailer to use SMTP
 $mail->Host = 'smtp.office365.com'; // Specify main and backup SMTP servers
 $mail->SMTPAuth = true; // Enable SMTP authentication
 $mail->Username = 'admin@eraitechnologies.com'; // SMTP username
 $mail->Password = 'iotproduct*22'; // SMTP password
 $mail->SMTPSecure = 'tls'; // Enable TLS encryption, [ICODE]ssl[/ICODE] also accepted
 $mail->Port = 587; // TCP port to connect to

//Recipients
 $mail->setFrom('admin@eraitechnologies.com', 'Mailer');
 $mail->addAddress('anand@eraitechnologies.com', 'Anand Erai'); // Add a recipient
 $mail->addAddress('anand@eraitechnologies.com'); // Name is optional
 $mail->addReplyTo('admin@eraitechnologies.com', 'Admin');
 //$mail->addCC('cc@example.com');
 //$mail->addBCC('bcc@example.com');

// Attachments
 //$mail->addAttachment('/home/anandjap2210/attachment.txt'); // Add attachments
 //$mail->addAttachment('/home/anandjap2210/image.jpg', 'new.jpg'); // Optional name

// Content
 $mail->isHTML(true); // Set email format to HTML
 $mail->Subject = 'Website Test Mail';
 $mail->Body = 'This is the HTML message body <b>in bold!</b>';
 $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

$mail->send();
 echo 'Message has been sent';

} catch (Exception $e) {
 echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}