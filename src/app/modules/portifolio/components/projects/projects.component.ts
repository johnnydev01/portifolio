import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/marvel.png',
      alt: 'Projeto Marvel API Clone',
      title: 'Marvel API',
      width: '100px',
      height: '51px',
      description: `<p>Conheça o clone do site da Marvel API desenvolvido com o Angular e NGRX</p>`,
      links: [
        {
          name: 'Conheça o site',
          href: 'https://johnnydev01.github.io/marvel-api-clone/characters'
        }
      ]
    },
    {
      src: 'assets/img/projects/letmeask.svg',
      alt: 'Projeto Let me ask',
      title: 'Let me ask',
      width: '100px',
      height: '51px',
      description: `<p>Crie uma sala de faça perguntas para outras pessoas responder</p>`,
      links: [
        {
          name: 'Conheça o site',
          href: 'https://letmeask-dbd69.web.app/'
        }
      ]
    },
    {
      src: 'assets/img/projects/character.jpg',
      alt: 'Projeto Character Marvel api',
      title: 'Marvel Character',
      width: '100px',
      height: '100px',
      description: `<p>Desafio para usar a api da Marvel para operações simples de listagem de dados, busca e autenticação</p>`,
      links: [
        {
          name: 'Conheça o site',
          href: 'https://characters-challenge.web.app/'
        }
      ]
    },
    {
      src: 'https://avatars.githubusercontent.com/u/16628445?s=200&v=4',
      alt: 'Projeto NgRx Signals',
      title: 'Angular NgRx Signal Store Crash Course',
      width: '100px',
      height: '100px',
      description: `<p>Projeto de TODO que explora operações básicas de CRUD e Filter usando Angular Signals e NgRx Signals</p>`,
      links: [
        {
          name: 'Conheça o site de TODO',
          href: 'https://ngrx-signals.vercel.app/'
        }
      ]
    },

  ])

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent , {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  }
}
