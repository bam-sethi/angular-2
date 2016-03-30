import {Component} from 'angular2/core';

@Component({
   selector: 'my-app',
   template: `<h1>Mield Fargin</h1>
							<div id='map'></div>
							`
})
export class AppComponent { 
	var map = new mapboxgl.Map({
	    // container id
	    container: 'map',
	    //stylesheet location
	    style: 'mapbox://styles/mapbox/streets-v8',
	    // starting position
	    center: [-74.50, 40],
	    zoom: 9
	});

}