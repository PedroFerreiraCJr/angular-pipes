import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  filtro: string = '';
  
  livros: string[] = [
    'Java',
    'Angular 2'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public addCurso(value: string): void {
    this.livros.push(value);
    console.log(value);
  }

  public obterCurso(): string[] {
    if (this.livros.length == 0 || this.filtro == undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v: any) => {
      return v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0;
    });
  }
}
