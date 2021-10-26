import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import {  Subject, PartialObserver, Observable } from 'rxjs';
import { interval , range} from "rxjs";
import { take, finalize } from "rxjs/operators";
import { of } from 'rxjs';
import { tap, repeat , concatMap} from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  ngOnInit() {
    this.add();
  }

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        type: 'spline',
        data: []
      }
    ]
  });

   
  add() { 
    interval(1000).pipe(
      concatMap(i => of(Math.floor(Math.floor(Math.random()*65) - 25)).pipe())
    ).subscribe(val => this.chart.addPoint(val));
  }
}
