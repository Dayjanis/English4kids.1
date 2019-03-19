import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-limon',
  templateUrl: './limon.page.html',
  styleUrls: ['./limon.page.scss'],
})
export class LimonPage{

  constructor(private router:Router) { }
  back_lessons(){
    this.router.navigate(["/fruits"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }

}
