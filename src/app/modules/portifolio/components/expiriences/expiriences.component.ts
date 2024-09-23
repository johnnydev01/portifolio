import { Component, signal } from '@angular/core';
import { IExpiriences } from '../../interface/IExpiriences.interface';

@Component({
  selector: 'app-expiriences',
  standalone: true,
  imports: [],
  templateUrl: './expiriences.component.html',
  styleUrl: './expiriences.component.scss'
})
export class ExpiriencesComponent {

  public arrayExpiriences = signal<IExpiriences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Front-End',
        p: 'MJV | Fev 2023 - Abr 2024',
      },
      text: `<p>Durante o período na MJV, prestando serviço no Santander First, atuei como desenvolvedor Front-end Angular Pleno.
      As principais atividades foram criação de novas features, Aplicação de performance, migração de versão de aplicações angular, padronização de commits e
      automação no versionamento da aplicação, aumento de cobertura de testes unitários em vários projetosde 0 para 80%</p>`
    },
    {
      summary: {
        strong: 'Desenvolvedor Front-End',
        p: 'Accelera Technologies | Set 2022 - Fev 2023',

      },
      text: `<p>No período que trabalhei na Accelera, atuei como desenvolvedor Front-end Angular Pleno.
      As principais atividades foram criação de telas com base no protótipo, criação de componentes genéricos,
      desenvolvimento responsivo de telas, integração de serviços.</p>`
    },
    {
      summary: {
        strong: 'Desenvolvedor Front-End',
        p: 'NTT DATA | Jul 2020 - Out 2021',

      },
      text: `<p>Quando trabalhei na NTT DATA, atuei em três projetos em diferentes clientes, no primeiro no Santander Caceis, e outros
      dois no Bradesco, como desenvolvedor Front-End Angular. As principais atividades foram criação de telas com base no protótipo,
      integração de serviços, validação de formulários, criação de componentes genéricos, correções de bugs.</p>`
    },
    {
      summary: {
        strong: 'Desenvolvedor Front-End',
        p: 'Prime IT Solutions | Set 2019 - Jun 2020',

      },
      text: `<p>Em minha jornada como desenvolvedor Front-End JR,  direcionei meu foco para o Angular. Nesse período na Prime, trabalhei
      com um Especialista que contribuiu muito para meu desenvolvimento profissional. As principais atividades foram criação de telas com base
      no protótipo, integração de serviços, validação de formulários, testes unitário, correções de bugs.</p>`
    },
    {
      summary: {
        strong: 'Estagiário',
        p: 'Stefanini | Mai 2018 - Jul 2019',

      },
      text: `<p>Durante o período de estágio na Stefanini, tive a opotunidade de aprender diversas tecnologias, Java, SQL, HTML5, CSS3, Angular.
      Participei de um desafio para fazer um CRUD com Angular e Spring Boot. Completei o Desafio e comecei a atuar em um projeto, onde
      direcionei meu foco para o Angular. As principais atividades foram estudar tecnologias usadas pela consultoria, correções de bugs,
      melhoria da aplicação.</p>`
    },
  ]);

}
