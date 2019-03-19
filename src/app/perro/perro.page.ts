import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.page.html',
  styleUrls: ['./perro.page.scss'],
})
export class PerroPage  {

  constructor(private router: Router) { }
back_lessons(){
  this.router.navigate(["/animals"])
}

  home(){
    this.router.navigate(["/tabs/tab1"])
 }

}
