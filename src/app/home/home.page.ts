import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  progress:number = 0;
  constructor() {}

  setProgress = () => {
    this.progress += 10;

    if(this.progress > 100){
      this.progress = 0;
    }
  }
}
