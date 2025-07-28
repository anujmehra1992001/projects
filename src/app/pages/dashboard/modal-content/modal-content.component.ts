import { Component, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-modal-content',
  standalone: true,
  templateUrl: './modal-content.component.html', // ✅ Match file name
  styleUrls: ['./modal-content.component.less']
})
export class ModalContentComponent {
  modalTitle = 'Project Info';
  modalData = {
    name: ' Dashboard',
    createdBy: 'Anuj Mehra',
    createdAt: '2025-06-26',
    status: 'Active',
    description: 'good thinks take time and one more motivatuon thought i can and i will .'
  };

  show(){
    this.show
  }

  // private route =inject(ActivatedRoute);
  
  // ngOnInit(){
  //   const id= this.route.snapshot.paramMap.get('id');
  //   console.log(id);
  // }
  

}
