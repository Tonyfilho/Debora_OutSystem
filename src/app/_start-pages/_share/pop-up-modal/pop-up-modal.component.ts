import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IModal } from '../interfaces/i-modal';

@Component({
  selector: 'app-pop-up-modal',
  templateUrl: './pop-up-modal.component.html',
  styleUrls: ['./pop-up-modal.component.scss']
})
export class PopUpModalComponent {
 /**DialogData é o Tipo de data, em nos cossa será string */
 /**Injetaremos o Tipo de Mat_Dialog_Data */
 constructor(@Inject(MAT_DIALOG_DATA) public data : IModal) {}
}


