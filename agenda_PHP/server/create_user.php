<?php
require ('conectorBD.php');

$con = new ConectorBD('localhost', 'root', '');
if ($con -> initConexion('agenda') == 'OK') {
	for ($i = 1; $i <= 3; $i++) {
		$datos['nombre'] = "Usuario " . $i;
		$datos['email'] = "user" . $i . "@mail.com.mx";
		$datos['pass'] = password_hash("123", PASSWORD_DEFAULT);
		$datos['nacimiento'] = date('Y-m-d');
		if ($con -> insertData('usuarios', $datos))
			echo "Se insertaron los datos correctamente del usuario " . $i . "<br/>";
		else
			echo "Se ha producido un error en la inserción " . $i . "<br/>";
	}
	$con -> cerrarConexion();
} else
	echo "Se presentó un error en la conexión";
?>
