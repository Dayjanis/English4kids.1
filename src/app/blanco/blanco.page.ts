import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blanco',
  templateUrl: './blanco.page.html',
  styleUrls: ['./blanco.page.scss'],
})
export class BlancoPage  {

  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/colors"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }

}
