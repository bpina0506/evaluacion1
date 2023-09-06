import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; //libreria para recepcionar Interpolacion

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarioR: string = "";
  passR: string = "";
 
  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(param =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuarioR = this.router.getCurrentNavigation()?.extras?.state?.['usuario'];
        this.passR = this.router.getCurrentNavigation()?.extras?.state?.['password'];
      }
    })
  }

}
