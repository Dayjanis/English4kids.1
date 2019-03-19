import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cereza',
  templateUrl: './cereza.page.html',
  styleUrls: ['./cereza.page.scss'],
})
export class CerezaPage  {

  constructor(private router: Router) { }
back_lessons(){
  this.router.navigate(["/fruits"])
}
home(){
  this.router.navigate(["/tabs/tabs1"])
}
}
