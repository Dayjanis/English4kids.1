import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eigth',
  templateUrl: './eigth.page.html',
  styleUrls: ['./eigth.page.scss'],
})
export class EigthPage  {

  constructor(private router: Router) { }

back_lessons(){
  this.router.navigate(["/numbers"])
}
home(){
  this.router.navigate(["/tabs/tabs1"])
}
}
