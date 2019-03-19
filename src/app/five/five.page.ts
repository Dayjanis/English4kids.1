import { Component } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-five',
  templateUrl: './five.page.html',
  styleUrls: ['./five.page.scss'],
})
export class FivePage  {

  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/numbers"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }

}
