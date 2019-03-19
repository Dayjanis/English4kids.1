import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-coco',
  templateUrl: './coco.page.html',
  styleUrls: ['./coco.page.scss'],
})
export class CocoPage {

  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/fruits"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }

}
