import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fresa',
  templateUrl: './fresa.page.html',
  styleUrls: ['./fresa.page.scss'],
})
export class FresaPage  {

  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/fruits"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }

}
