import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/weather-response.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  private apiKey = '94f1cba3cab48518b5984a9995f71ea9';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private http = inject(HttpClient);

  constructor() { 
  }

  buscarInfoClimaCidadeAtual (): Observable<WeatherResponse> {
    
    const urlCompleta = 
    this.apiUrl + '?q=Dois%20Vizinhos&appid='
    +this.apiKey+ '&lang=pt_br&units=metric';

    return this.http.get<WeatherResponse>(urlCompleta);

  }

}
