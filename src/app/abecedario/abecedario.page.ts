import { Component } from '@angular/core';
import{Router} from '@angular/router';
import{ NativeAudio} from '@ionic-native/native-audio/ngx';


@Component({
  selector: 'app-abecedario',
  templateUrl: './abecedario.page.html',
  styleUrls: ['./abecedario.page.scss'],
})
export class AbecedarioPage {


  constructor(private router: Router, nativeAudio: NativeAudio) { }
back_lessons(){
  this.router.navigate(["/tabs/tab2"])
}

  home(){
    this.router.navigate(["/tabs/tab1"])
 }
 
 go_letraA(){
   this.router.navigate(["/letra-a"])
 }

 go_letraB(){
  this.router.navigate(["/b"])
}

go_letraC(){
  this.router.navigate(["/c"])
}

go_letraD(){
  this.router.navigate(["/d"])
}

go_letraE(){
  this.router.navigate(["/e"])
}

go_letraF(){
  this.router.navigate(["/f"])
}

go_letraG(){
  this.router.navigate(["/g"])
}

go_letraH(){
  this.router.navigate(["/h"])
}

go_letraI(){
  this.router.navigate(["/i"])
}

go_letraJ(){
  this.router.navigate(["/j"])
}

go_letraK(){
  this.router.navigate(["/k"])
}

go_letraL(){
  this.router.navigate(["/l"])
}

go_letraM(){
  this.router.navigate(["/m"])
}

go_letraN(){
  this.router.navigate(["/n"])
}

go_letraO(){
  this.router.navigate(["/o"])
}

go_letraP(){
  this.router.navigate(["/p"])
}

go_letraQ(){
  this.router.navigate(["/q"])
}

go_letraR(){
  this.router.navigate(["/r"])
}

go_letraS(){
  this.router.navigate(["/s"])
}

go_letraT(){
  this.router.navigate(["/t"])
}

go_letraU(){
  this.router.navigate(["/u"])
}

go_letraV(){
  this.router.navigate(["/v"])
}

go_letraW(){
  this.router.navigate(["/w"])
}

go_letraX(){
  this.router.navigate(["/x"])
}

go_letraY(){
  this.router.navigate(["/y"])
}

go_letraZ(){
  this.router.navigate(["/z"])
}
}


