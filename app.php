<?php

require_once "UnitConversionController.php";


$ef = in_array("temp",array_keys($_GET));  //$ef => Fahrenheit

if($ef){

	$datos = $_POST;

	$fahr = $datos["f"];

	$temp = new FahrenheitController($fahr);

	$json = $temp->realizaCalculos();

	echo $json;

	exit();
}

$ec = in_array("temperatura",array_keys($_GET));  //$ec => Celsius

if($ec){

	$datos = $_POST;

	$celsius = $datos["c"];

	$temperatura = new CelsiusController($celsius);

	$json = $temperatura->realizaCalculos();

	echo $json;

	exit();
}

$ek = in_array("pes",array_keys($_GET));  //$ek => Kilogramos

if($ek){

	$datos = $_POST;

	$kg = $datos["k"];

	$pes = new KilogramosController($kg);

	$json = $pes->realizaCalculos();

	echo $json;

	exit();
}

$el = in_array("peso",array_keys($_GET));  //$el => Libras

if($el){

	$datos = $_POST;

	$libra = $datos["l"];

	$peso = new LibrasController($libra);

	$json = $peso->realizaCalculos();

	echo $json;

	exit();
}