import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-r',
  templateUrl: './r.page.html',
  styleUrls: ['./r.page.scss'],
})
export class RPage  {

  constructor(private router: Router) { }
back_lessons(){
  this.router.navigate(["/abecedario"])
}

  home(){
    this.router.navigate(["/tabs/tab1"])
 }

}
