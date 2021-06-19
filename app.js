const app = {
    sistema	 : document.querySelector("#sistema"),
	form	 : document.querySelector("#form-sistema"),
	resultado: document.querySelector("#resultado"),

	url	: "app.php",
	route: "",

    prepararformulario	: function(){
		let html = "";
		switch(this.sistema.value){
			case "1" : html = `
								<div class="form-group">
									<label for="fahr">Grados Fahrenheit °F a transformar.</label>
									<input type="number" class="form-control" id="fahr" step="any" placeholder=0.0°F>
								</div>
								<p>En la Conversión te muestran los grados Celsius °C</p>
							`;
                            
                            break;
			case "2" : html = `
								<div class="form-group">
									<label for="celsius">Grados Celsius °C a transformar.</label>
									<input type="number" class="form-control" id="celsius" step="any" placeholder=0.0°C>
								</div>
								<p>En la Conversión te muestran los grados Farenheit °F</p>
								
							`;break;
			case "3" : html = `
								<div class="form-group">
									<label for="kg">Kilogramos a transformar.</label>
									<input type="number" class="form-control" id="kg" step="any" placeholder=0.0Kg>
								</div>
								<p>La conversión te muetra el resultado en Libras</p>
							`;break;
			case "4" : html = `
							<div class="form-group">
								<label for="libra">Libras a transformar.</label>
								<input type="number" class="form-control" id="libra" step="any" placeholder=0.0lb>
							</div>
							<p>La conversión te muestra el resultado en Kilogramos</p>
						`;break;
			case "5" : html = `
						<div class="form-group">
							<label for="lt">Litros a transformar.</label>
							<input type="number" class="form-control" id=lt" step="any" placeholder=0.0ltr>
						</div>
                        <p>La conversión muestra la cantidad en Galones</p>
						
					`;break;
			case "6" : html = `
							<div class="form-group">
								<label for="gal">Galones a transformar.</label>
								<input type="number" class="form-control" id=gal" step="any" placeholder=0.0gal>
							</div>
                            <p>La conversión muestra la cantidad en Litros</p>
							
						`;break;
			case "7" : html = `
						<div class="form-group">
							<label for="ctm">Centímetros a convertir.</label>
							<input type="number" class="form-control" id=ctm" step="any" placeholder=0.0cm>
						</div>
                        <p>La conversión te muestra el resultado en Pulgadas</p>
						
					`;break;
			case "8" : html = `
					<div class="form-group">
						<label for="pul">Pulgadas a convertir.</label>
						<input type="number" class="form-control" id=pul" step="any" placeholder=0.0in>
					</div>
                    <p>La conversión te muestra el resultado en Centimetros</p>
					
				`;break;
		}
		this.form.innerHTML = html + `<button type="submit" class="btn btn-primary mt-2">Calcular Conversión</button>`;
	},
	realizaCalculos : function(){
		let datos = new FormData();
		if(this.sistema.value === "1"){
			let fahr = document.querySelector("#fahr").value;
			datos.append("f",fahr);
		}
		if(this.sistema.value === "2"){
			let celsius = document.querySelector("#celsius").value;
			datos.append("c",celsius);
		}
		if(this.sistema.value === "3"){
			let kg = document.querySelector("#kg").value;
			datos.append("k",kg);
		}

		if(this.sistema.value === "4"){
			let libra = document.querySelector("#libra").value;
			datos.append("l",libra);
		}

		switch(this.sistema.value){
			case "1" : this.route = "?temp";break;
			case "2" : this.route = "?temperatura";break;
			case "3" : this.route = "?pes";break;
			case "4" : this.route = "?peso";break;
		}

		fetch(this.url + this.route,{
			method : "POST",
			body : datos
		}).then( response => response.json())
		.then( res => {
			let html = `
				<b>Conversión ---> </b>&nbsp;<u>${ res.u }</u><br>
			`;
			this.resultado.innerHTML = html;
		}).catch( error => console.error( "ERROR*" ));

	}

}


window.onload = function(){
	app.sistema.addEventListener("change", () => app.prepararformulario());

	app.form.addEventListener("submit", e => {
		e.preventDefault();
		e.stopPropagation();
		app.realizaCalculos();
	});
}