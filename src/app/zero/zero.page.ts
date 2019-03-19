import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zero',
  templateUrl: './zero.page.html',
  styleUrls: ['./zero.page.scss'],
})
export class ZeroPage  {


  constructor(private router: Router) { }
back_lessons(){
  this.router.navigate(["/numbers"])
}
home(){
  this.router.navigate(["/tabs/tabs1"])
}
}
