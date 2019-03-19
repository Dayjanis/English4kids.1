import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router){}

  go(){
    this.router.navigate(["/abecedario"]);
  }

  go_numeros(){
    this.router.navigate(["/numbers"]);
  }

  go_animales(){
    this.router.navigate(["/animals"]);
  }

  go_frutas(){
    this.router.navigate(["/fruits"]);
  }

  go_colores(){
    this.router.navigate(["/colors"]);
  }
}

