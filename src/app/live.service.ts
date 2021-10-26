import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  constructor(private firestore: AngularFirestore) { }
  addRecord(value: number) {
   // this.firestore.collection('tags').doc('live').set({  
    this.firestore.collection('tags').add({  
        field: value
    })
    .then(res => {
        console.log(res);
        
    })
    .catch(e => {
        console.log(e);
    })
  }
  
 
}
