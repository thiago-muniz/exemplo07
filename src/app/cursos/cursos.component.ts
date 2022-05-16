import { Component, OnInit } from '@angular/core';
import { Curso } from './Curso';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //Atributos
  private vetorCursos:Curso[];
  private curso:Curso;
  private id:number;

  //Contrutor
  constructor(private servico:CursosService) { }

  //Inicialização
  ngOnInit(): void {
  }

}
