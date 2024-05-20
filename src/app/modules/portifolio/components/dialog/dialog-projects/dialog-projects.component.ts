import { Component, Inject, OnDestroy, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../interface/IProjects.interface';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit, OnDestroy  {

  constructor(@Inject(MAT_DIALOG_DATA) private _data: IProjects){
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('modal-open');
  }

  public getData = signal<IProjects | null>(null)

  ngOnInit(): void {
    this.getData.set(this._data)
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('modal-open');
 }
}
