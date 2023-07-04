import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interpolacion';
  numero = 30;
  hayerror=true;
  miFontSyze='50px';
  status = 1;
  data:Array<any>;

  constructor(){
    this.data = [
      {nombre: 'marcos', apellido:'campodonico', edad:23},
      {nombre: 'luis', apellido:'campodonico', edad:56},
      {nombre: 'johanna', apellido:'campodonico', edad:20},
      {nombre: 'jesus', apellido:'flores', edad:27}
    ]
  }


  // constructor() {
  //   console.log('constructor');
  //   setInterval(() => {
  //     this.numero++
  //   },1000)
  // }
  // onClick(event: MouseEvent): void{
  //   console.log(event);
  // }
  // onInputChange(event: Event): void{
  //   console.log(event);
  // }


}

  

