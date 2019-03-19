import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manzana',
  templateUrl: './manzana.page.html',
  styleUrls: ['./manzana.page.scss'],
})
export class ManzanaPage  {

  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/fruits"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }
}
