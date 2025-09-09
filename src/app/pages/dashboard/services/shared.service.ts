import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedService {
  private formData = new BehaviorSubject<any>(null);
  currentData = this.formData.asObservable();


  private childAction = new Subject<any>();
  childAction$ = this.childAction.asObservable();

  
  setData(data: any) {
    this.formData.next(data);
  }

  
  sendAction(action: { type: string; payload?: any }) {
    this.childAction.next(action);
  }

  update(){  
    this.currentData.subscribe
    this.childAction.asObservable.apply

  }
  delete(){
    this,this.formData.next
    this.delete
  }
}
