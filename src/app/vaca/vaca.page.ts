import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vaca',
  templateUrl: './vaca.page.html',
  styleUrls: ['./vaca.page.scss'],
})
export class VacaPage  {

  constructor(private router: Router) { }
back_lessons(){
  this.router.navigate(["/animals"])
}
home(){
  this.router.navigate(["/tabs/tabs1"])
}
}
