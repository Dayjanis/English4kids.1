import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.page.html',
  styleUrls: ['./two.page.scss'],
})
export class TwoPage  {

  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/numbers"])
  }


}
