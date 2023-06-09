import { Component } from '@angular/core';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {

  public listadoHeroes!: Array<any>;
  public heroesService: HeroesService;

  constructor(heroesService: HeroesService) {
    this.heroesService = heroesService;
  }

  ngOnInit(): void {
    this.listadoHeroes = this.heroesService.getHeroes();
  }

  public hayHeroes(): boolean {
    return this.listadoHeroes.length > 0;
  }


}

