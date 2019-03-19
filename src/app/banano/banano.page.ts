import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-banano',
  templateUrl: './banano.page.html',
  styleUrls: ['./banano.page.scss'],
})
export class BananoPage  {

  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/fruits"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }

}
