import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { OpenWeatherService } from "../../service/open-weather.service";

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  roteador = inject(Router);
  openWeather = inject(OpenWeatherService);

  ngOnInit() { 
    this.openWeather.buscarInfoClimaCidadeAtual();
  }

  pesquisar() {
    this.roteador.navigate(['/pesquisa']);
  }

}
