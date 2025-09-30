import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  apiKey = '94f1cba3cab48518b5984a9995f71ea9';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor() { }

  buscarInfoClimaCidadeAtual () {
    
    const urlCompleta = this.apiUrl + '?q=Dois%20Vizinhos&appid='+this.apiKey+ '&lang=pt_br&units=metrics';
    console.log(urlCompleta);

  }

}
