import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-azul',
  templateUrl: './azul.page.html',
  styleUrls: ['./azul.page.scss'],
})
export class AzulPage  {

  constructor(private router: Router) { }
  back_lessons() {
  this.router.navigate(["/colors"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }

}
