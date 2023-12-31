import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';  //genera interpolacion

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
/**
   * Se genera el modelo user con dos claves
   * cada clave tiene su valor inicial
   */
  user={
    usuario:"",
    password:""
  }
  constructor(private router: Router) { } // Se debe instanciar

  ngOnInit() {
  }
  ingresar(){
    // Se declara e instancia un elemento de tipo NavigationExtras
    let navigationExtras: NavigationExtras = {
      state: {
        users: this.user // Al estado se asignamos un objeto con clave y valor
      }
    };
    this.router.navigate(['/home'],navigationExtras); // navegamos hacia el Home y enviamos información adicional
  }

  olvidaPass(){
    this.router.navigate(['/forget']); 
  }
  
  crearCuenta(){
    this.router.navigate(['/signup']); 
  }

}