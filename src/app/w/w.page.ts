import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-w',
  templateUrl: './w.page.html',
  styleUrls: ['./w.page.scss'],
})
export class WPage  {
  constructor(private router: Router) { }
  back_lessons(){
    this.router.navigate(["/abecedario"])
  }
  
    home(){
      this.router.navigate(["/tabs/tab1"])
   }
}
