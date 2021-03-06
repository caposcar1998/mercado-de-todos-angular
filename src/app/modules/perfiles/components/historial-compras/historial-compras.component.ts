import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../services/perfiles.service';
import { HistorialModel, HISTORIAL2 } from 'src/app/models/historial.model'

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.scss']
})
export class HistorialComprasComponent implements OnInit {

  history: HistorialModel[];

  constructor(private historialService: PerfilesService) {
   }

  ngOnInit(): void {
    this.historialService.sharedMessagehistory.subscribe(newHistory => this.history = newHistory);
  }

  updateHistory() {
    this.historialService.newHistory(HISTORIAL2);
  }

}
