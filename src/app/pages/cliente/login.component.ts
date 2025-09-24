import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  roteador = inject(Router);

  ngOnInit(): void { }

  pesquisar() {
    this.roteador.navigate(['/pesquisa']);
  }

}
