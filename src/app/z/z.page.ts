import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-z',
  templateUrl: './z.page.html',
  styleUrls: ['./z.page.scss'],
})
export class ZPage  {
  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/abecedario"])
  }
  
    home(){
      this.router.navigate(["/tabs/tab1"])
   }
}
