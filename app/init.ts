import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {TimerWrapper} from '@angular/core/src/facade/async';

@Component({
  selector: 'avion-app',
  templateUrl: 'app/avion/cuadro.html'
})

export class AppComponent implements AfterViewInit {
	rectW:number      = 20;
	rectH:number      = 20;
	velocidad:number  = 2;
	posicion_x:number = 20;
	posicion_y:number = 20;
	image:any         = {};
	imageMover:any    = {};

	tiempo_izq:any             = null;
	bandera_tiempo_izq:boolean = false;
	bandera_tiempo_der:boolean = false;
	velocidad_avion:number     = 10;

	pos_nave_x:number = 80;

	rectColor:string = "#FF0000";

	context:CanvasRenderingContext2D;

	constructor(){
		console.log("asdasdas");
		setInterval(() => {
			this.posicion_y = this.posicion_y + this.velocidad;
			console.log( "sdas", this.rectW );
		}, 1000);
	}

	@ViewChild("myCanvas") myCanvas;

	ngAfterViewInit() {

		let canvas   = this.myCanvas.nativeElement;
		this.context = canvas.getContext("2d");

		this.tick();

	}

	tick() {
		requestAnimationFrame(()=> {
		  this.tick()
		});

		var ctx = this.context;
		ctx.clearRect(0, 0, 400, 400);
		ctx.fillStyle = this.rectColor;
		ctx.fillRect(this.posicion_x, this.posicion_y, this.rectW, this.rectH);
		ctx.fillRect(this.posicion_x + 40, this.posicion_y + 40, this.rectW, this.rectH);


		this.image = new Image();
    	this.image.src = "nave.jpg";

		this.imageMover = ctx.drawImage( this.image, this.pos_nave_x, 136, 64, 64);
	}

	movIzq(){
		console.log( "izq" );

		this.bandera_tiempo_izq = false;

		var tiempo_izq = setInterval(
			() => { 
				console.log( "bandera", this.bandera_tiempo_izq );
				if( this.bandera_tiempo_izq ) { 
					clearTimeout( tiempo_izq );
				} else {
					this.pos_nave_x = this.pos_nave_x - this.velocidad_avion;
				}
			}, 300
		);
	}

	stopIzq(){
		this.bandera_tiempo_izq = true;
		console.log( this.bandera_tiempo_izq );
		
	}

	movDer(){
		console.log( "der" );
		this.bandera_tiempo_der = false;

		var tiempo_der = setInterval(
			() => { 
				if( this.bandera_tiempo_der ) { 
					clearTimeout( tiempo_der );
				} else {
					this.pos_nave_x = this.pos_nave_x + this.velocidad_avion;
				}
			}, 300
		);
	}

	stopDer(){
		this.bandera_tiempo_der = true;
	}


}
