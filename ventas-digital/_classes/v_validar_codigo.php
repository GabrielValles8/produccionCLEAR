<?php
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);
require_once("../_config.php");
include("_conexion.php");
include("classes.php");

$cone=new Conexion();
$out=$cone->confirmar_codigo($_POST["codigo"],$_POST["correo"]);
print(json_encode($out));
?>