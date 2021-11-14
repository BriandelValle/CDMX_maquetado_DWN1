<?php
// llamando a los campos

$nombre = $_POST['Nombre'];
$telefono = $_POST['Telefono'];
$email = $_POST['Email'];
$sexo = $_POST['Sexo'];
$motivo = $_POST['Motivo'];
$document = $_POST['Document'];
$terminosycondiciones = $_POST['Terminos-y-condiciones'];
$mensaje = $_POST['Mensaje'];
$asunto = $_POST['Asunto'];

// Datos para el correo

$destinatario = "contacto@xn--abdiseos-i3a.com";	

$carta = "De: $nombre \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Correo: $email \n";
$carta .= "Sexo: $sexo \n";
$carta .= "Motivo: $motivo \n";
$carta .= "Document: $document \n";
$carta .= "Terminos-y-condiciones: $terminosycondiciones \n";
$carta .= "Mensaje: $mensaje";

// enviando mensaje

$header = "Enviado desde la Pagina CDMX: $asunto";

mail($destinatario, $header, $carta);

header('Location:mensaje-de-envio.html')

// echo "<script>alert('Su consulta se envio exitosamente')</script>";
// echo "<script> setTimeout(\"location.href='../index.html'\",1000)</script>";

?>