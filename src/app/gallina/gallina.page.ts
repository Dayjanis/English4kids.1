import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallina',
  templateUrl: './gallina.page.html',
  styleUrls: ['./gallina.page.scss'],
})
export class GallinaPage  {

  constructor(private router: Router) { }
back_lessons(){
  this.router.navigate(["/animals"])
}

  home(){
    this.router.navigate(["/tabs/tab1"])
 }
}
