<?php
include("../../_inc/conexion.php");
include("../../_inc/consultas.php");
//include("../../_inc/constructor.php");

$titulo =$_POST['titulo'];
$slugin = str_replace(' ', '-', $_POST['titulo']);
$slug = strtolower($slugin);
//$title =$_POST['titulo'];
$contenido =$_POST['contenido'];
$make =$_POST['make'];
//$title =strtoupper($_POST['title']);
//$metakeys =$_POST['metakeys'];
$descripcion =$_POST['descripcion'];
$id_blog =$_POST['id_blog'];
//$contenido =$_POST['contenido'];
//$imagen =$_POST['imagen'];
$conn=new Conexion();
$param['imagen']=$imagen;
$param['titulo']=$titulo;
//$param['titulo']=$title;
//$param['titulo']=$metakeys;
$param['slug']=$slug;
$param['descripcion']=$descripcion;
$param['contenido']=$contenido;
$param['make']=$make;
$param['id_blog']=$id_blog;
//$param['imagen']=$imagen;

$registro=$conn->query_insertar_blog($param);
?>