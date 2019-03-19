import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rojo',
  templateUrl: './rojo.page.html',
  styleUrls: ['./rojo.page.scss'],
})
export class RojoPage  {

  constructor(private router:Router) { }
back_lessons(){
  this.router.navigate(["/colors"])
}
home(){
  this.router.navigate(["/tabs/tabs1"])
}
}
