import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-morado',
  templateUrl: './morado.page.html',
  styleUrls: ['./morado.page.scss'],
})
export class MoradoPage  {

  constructor(private router:Router) { }
  back_lessons(){
    this.router.navigate(["/colors"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }

}
