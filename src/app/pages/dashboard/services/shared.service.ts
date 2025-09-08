import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedService {
  public formData = new BehaviorSubject<any>(null);
  currentData = this.formData.asObservable();

  
  private childAction = new Subject<string>();
  childAction$ = this.childAction.asObservable();
  
  setData(data: any) {
    this.formData.next(data);
  }

  sendAction(action: string) {
    this.childAction.next(action);
    
  }

   updated(){
    this.currentData.subscribe
    this.childAction.asObservable.apply
  
  }

 delete(){
  this.formData.next(this.delete);
  this.delete
 }

}