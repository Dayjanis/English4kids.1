import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-verde',
  templateUrl: './verde.page.html',
  styleUrls: ['./verde.page.scss'],
})
export class VerdePage  {
  constructor(private router: Router){}
  back_lessons(){
    this.router.navigate(["/colors"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }

}
