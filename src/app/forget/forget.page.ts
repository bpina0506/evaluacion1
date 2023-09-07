import { Component, OnInit } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';  //genera interpolacion
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {
  canDismiss = false;

  presentingElement: Element | null = null;
  

  constructor(private router: Router) { } // Se debe instanciar

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  olvidaPass(){
    this.router.navigate(['/login']); 
  }


  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }


}