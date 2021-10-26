import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import {LiveService} from '../live.service';



@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit  {
  
  BDinfo : any;

  constructor(public firestore: AngularFirestore, public liveService: LiveService ) { }

  getRecords(){
    this.firestore
    .collection("tags")
    .valueChanges()
    .subscribe((ss) => {
      this.BDinfo = JSON.stringify(ss);
    });
  }

  ngOnInit(): void {
    this.getRecords();
  }
 
}
