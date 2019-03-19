import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.page.html',
  styleUrls: ['./gato.page.scss'],
})
export class GatoPage  {

  constructor(private router: Router) { }
back_lessons(){
  this.router.navigate(["/animals"])
}

  home(){
    this.router.navigate(["/tabs/tab1"])
 }

}
