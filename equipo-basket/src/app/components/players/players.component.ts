import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../model/players';
import {PlayersService} from '../../service/players.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {FilterNamePipe} from '../../pipes/filter-name.pipe';

@Component({
  selector: 'app-players-component',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule, FilterNamePipe],

  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})


export class PlayersComponent implements OnInit {
  players: Player[] = [];

  filterSearch ='';
  opcion='Nombre';

  constructor (private PlayerServie:PlayersService){}

  ngOnInit():void{
   this.getPlayers();

  }

  getPlayers(): void {
    this.players=this.PlayerServie.getPlayers();

  }
}
