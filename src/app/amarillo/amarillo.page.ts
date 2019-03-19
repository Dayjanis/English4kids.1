import { Component } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-amarillo',
  templateUrl: './amarillo.page.html',
  styleUrls: ['./amarillo.page.scss'],
})
export class AmarilloPage  {

  constructor(private router:Router) { }
back_lessons(){
  this.router.navigate(["/colors"])
}
home(){
  this.router.navigate(["/tabs/tabs1"])
}
}
