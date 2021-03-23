import { Component, OnInit } from '@angular/core';
import { FitnessService } from '../fitnessService/fitness.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(protected fitness:FitnessService) {}

  ngOnInit(){
  }


}
