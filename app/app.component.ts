import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <button (click)='mostrar=!mostrar'>Más info...</button>
    <div *ngIf='mostrar'>
    <h3>Este ejemplo ha sido modificado para que funcione correctamente</h3>
    <h3>
    <a target='_blank' href='https://chariotsolutions.com/blog/post/angular-2-spring-boot-jwt-cors_part1/'>Ver este enlace</a>
    <a target='_blank' href='https://chariotsolutions.com/blog/post/angular-2-spring-boot-jwt-cors_part2/'>Y este</a>
    </h3>
    </div>
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  mostrar = false;
}
