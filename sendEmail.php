<?php

if(isset($_POST['name'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    
    $título = 'Solicitud Contacto Zeus Consultores';
    
    $mensaje = file_get_contents("templates/email.html");
    
    // replace
    $mensaje = str_replace("##name##", $name, $mensaje);
    $mensaje = str_replace("##email##", $email, $mensaje);
    $mensaje = str_replace("##telephone##", $telephone, $mensaje);
    $mensaje = str_replace("##subject##", $subject, $mensaje);
    $mensaje = str_replace("##message##", $message, $mensaje);
    
    $para = 'dmsanchez86@misena.edu.co';
    
    if(@mail($para, $título, $mensaje, $cabeceras)){
        echo json_encode(array('status' => 'OK', 'message' => 'El correo se envió correctamente'));
    }else{
        echo json_encode(array('status' => 'FAIL', 'message' => 'El correo no se pudo enviar'));
    }
}

?>