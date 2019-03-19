import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-conejo',
  templateUrl: './conejo.page.html',
  styleUrls: ['./conejo.page.scss'],
})
export class ConejoPage  {

  constructor(private router:Router) { }

  back_lessons(){
    this.router.navigate(["/animals"])
  }
  home(){
    this.router.navigate(["/tbas/tabs1"])
  }

}
