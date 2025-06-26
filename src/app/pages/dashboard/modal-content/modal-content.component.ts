import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  standalone: true,
  templateUrl: './modal-content.component.html',
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
}
