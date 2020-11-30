import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { MostrarProductoModel, MOSTRARPRODUCTO2 } from 'src/app/models/mostrarProducto.model'

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.scss']
})
export class MostrarProductoComponent implements OnInit {

  showProducts: MostrarProductoModel[];

  constructor(private mostrarProductoService: ProductoService) { }

  ngOnInit(): void {
    this.mostrarProductoService.sharedMessageShowProducts.subscribe(newProducts => this.showProducts = newProducts);
  }

  updateShowProducts() {
    this.mostrarProductoService.newShowProducts(MOSTRARPRODUCTO2);
  }

}