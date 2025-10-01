import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { OpenWeatherService } from "../../service/open-weather.service";
import { WeatherResponse } from "../../models/weather-response.model";
import { toSignal } from "@angular/core/rxjs-interop";
import { catchError, of } from "rxjs";
import { DecimalPipe, TitleCasePipe } from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DecimalPipe, TitleCasePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent{

  roteador = inject(Router);
  openWeather = inject(OpenWeatherService);

  dadosClima = toSignal<WeatherResponse | null>(
    this.openWeather.buscarInfoClimaCidadeAtual()
    .pipe(
      catchError(err => {
        console.error('Erro ao buscar dados', err);
        return of(null);
      })
    ),
    { initialValue: null }
  );

  constructor() { }

  pesquisar() {
    this.roteador.navigate(['/pesquisa']);
  }

}
