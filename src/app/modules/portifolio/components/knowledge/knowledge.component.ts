import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de HTML 5',
      title: 'HTML 5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de CSS 3',
      title: 'CSS3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de Javascript',
      title: 'Javascript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular',
      title: 'Angular'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento de Sass',
      title: 'Sass'
    },
    {
      src: 'assets/icons/knowledge/jest.svg',
      alt: 'Ícone de conhecimento de Jest',
      title: 'Jest'
    },
    {
      src: 'assets/icons/knowledge/ngrx.svg',
      alt: 'Ícone de conhecimento de ngrx',
      title: 'NGRX'
    },
    {
      src: 'assets/icons/knowledge/git.svg',
      alt: 'Ícone de conhecimento de git',
      title: 'Git'
    },

  ])
}
