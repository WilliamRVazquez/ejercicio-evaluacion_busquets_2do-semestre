<?php

/**Clase Principal abstracta */

abstract class SistemaController {

	public $unidad;

	public function realizaCalculos(){

		$this->calculaUnidad();
        return json_encode(["u" => $this->unidad]);

	}

	public abstract function calculaUnidad();

}

class FahrenheitController extends SistemaController {

	private $fahr = 0;

	public function __construct($f){
		$this->fahr = $f;
	}

	public function calculaUnidad(){
		$this->unidad = (($this->fahr - 32) * 5) / 9;

	}
}

class CelsiusController extends SistemaController {

	private $celsius = 0;

	public function __construct($c){
		$this->celsius = $c;
	}

	public function calculaUnidad(){
		$this->unidad = ($this->celsius * 1.8) + 32;

	}
}

class KilogramosController extends SistemaController {

	private $kg = 0;

	public function __construct($k){
		$this->kg = $k;
	}

	public function calculaUnidad(){
		$this->unidad = $this->kg * 2.20462262;

	}
}

class LibrasController extends SistemaController {

	private $libra = 0;

	public function __construct($l){
		$this->libra = $l;
	}

	public function calculaUnidad(){
		$this->unidad = $this->libra / 2.20462262;

	}
}