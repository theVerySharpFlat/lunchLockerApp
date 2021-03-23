import { Injectable, NgZone } from '@angular/core';
import { Health } from '@ionic-native/health/ngx';


@Injectable({
  providedIn: 'root'
})
export class FitnessService{

  private _stepCount: number = null;
  private _distanceCount: number = null;
  private _calorieBurnedCount: number = null;

  public stepsAvailable: boolean = false;
  public distanceAvailable:boolean = false;
  public caloriesAvailable:boolean = false;
  constructor(private health: Health, private ngZone: NgZone) {
  }
  init(){
    this.health.isAvailable()
    .then((available:boolean) => {
      console.log(available);
      this.health.requestAuthorization([
        'distance', 'calories', //read and write permissions
        {
          read: ['steps']       //read only permission
        }
      ])
      .then(res => {
        console.log(res);
        this.updateTodaysSteps();
        this.updateTodaysDistance();
        this.updateTodaysCaloriesBurned();
      })
      .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
  }
  get stepCount():number { //number of steps
    return this._stepCount;
  }
  get distanceCount():number { //in meters
    return this._distanceCount;
  }
  get calorieBurnedCount():number { //in kcal(normal calories that you see on a food label)
    return this._calorieBurnedCount;
  }

  async updateTodaysSteps() {
    this.health.queryAggregated({
      startDate: new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()),
      endDate: new Date(),
      dataType: 'steps',
      bucket: 'day'
    }).then(data => {
      console.log(`got ${data.length} results`);
      this._stepCount = parseInt(data[0].value);
    });
  }

  async updateTodaysDistance() {
    this.health.queryAggregated({
      startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
      endDate: new Date(),
      dataType: 'distance',
      bucket: 'day'
    }).then( data => {
      console.log(`got ${data.length} results`);
      this._distanceCount = parseInt(data[0].value);
    })
  }
  async updateTodaysCaloriesBurned() {
    this.health.queryAggregated({
      startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
      endDate: new Date(),
      dataType: 'calories',
      bucket: 'day'
    }).then( data => {
      console.log(`got ${data.length} results`);
      this._calorieBurnedCount = parseInt(data[0].value);
    }, error => {
      console.log(`error getting burned calories: ${error}`);
    })
  }

  public updateAllValues() {
    this.ngZone.run(() => {
      this.updateTodaysCaloriesBurned();
      this.updateTodaysDistance();
      this.updateTodaysSteps();
    });
  }

}
