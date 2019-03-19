import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rosado',
  templateUrl: './rosado.page.html',
  styleUrls: ['./rosado.page.scss'],
})
export class RosadoPage  {

  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/colors"])
  }
  home(){
    this.router.navigate(["/tabs/tabs1"])
  }

}
