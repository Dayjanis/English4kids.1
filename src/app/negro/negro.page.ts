import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-negro',
  templateUrl: './negro.page.html',
  styleUrls: ['./negro.page.scss'],
})
export class NegroPage  {

  constructor(private router: Router) { }
back_lessons(){
  this.router.navigate(["/colors"])
}
home(){
  this.router.navigate(["/tabs/tabs1"])
}
}
